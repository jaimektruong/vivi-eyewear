import "./App.scss";
import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/Default/Default";
import axios from "axios";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import * as UserService from "../src/services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const initializeApp = async () => {
      setIsLoading(true);
      const { storageData, decoded } = handleDecoded();
      if (decoded?.id) {
        handleGetDetailUser(decoded?.id, storageData);
      }
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  const handleDecoded = () => {
    let storageData =
      user?.access_token || localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      try {
        storageData = JSON.parse(storageData);
        decoded = jwtDecode(storageData);
      } catch (error) {
        console.error("Error decoding access_token:", error);
      }
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      let storageRefreshToken = localStorage.getItem("refresh_token");

      try {
        const refreshToken = JSON.parse(storageRefreshToken);
        const decodedRefreshToken = jwtDecode(refreshToken);

        if (decoded?.exp < currentTime.getTime() / 1000) {
          if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
            const data = await UserService.refreshToken(refreshToken);
            config.headers["token"] = `Bearer ${data?.access_token}`;
          } else {
            dispatch(resetUser());
          }
        }
      } catch (error) {
        console.error("Error decoding refresh_token:", error);
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleGetDetailUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem("refresh_token");

    try {
      const refreshToken = JSON.parse(storageRefreshToken);
      const res = await UserService.getDetailUser(id, token);
      dispatch(
        updateUser({
          ...res?.data,
          access_token: token,
          refreshToken: refreshToken,
        })
      );
    } catch (error) {
      console.error("Error handling getDetailUser:", error);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
