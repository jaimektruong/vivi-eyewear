import "./App.scss";
import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { isJsonString } from "./utils";
import jwt_decode from "jwt-decode";
import * as UserService from "../src/services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(true)
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsLoading(false)
  }, [])

  const handleDecoded = () => {
    let storageData =
      user?.access_token || localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      try {
        storageData = JSON.parse(storageData);
        decoded = jwt_decode(storageData);
      } catch (error) {
        console.error("Error decoding access_token:", error);
      }
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const decodedRefreshToken =  jwt_decode(refreshToken)
    if (decoded?.exp < currentTime.getTime() / 1000) {
      if(decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken(refreshToken)
        config.headers['token'] = `Bearer ${data?.access_token}`
      }else {
        dispatch(resetUser())
      }
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken}))
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes for all users */}
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.layout ? (
                  <route.layout>
                    <route.page />
                  </route.layout>
                ) : (
                  <React.Fragment>
                    <route.page />
                  </React.Fragment>
                )
              }
            />
          ))}

          {/* Routes for admin only */}
          {user.isAdmin &&
            privateRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.layout>
                    <route.page />
                  </route.layout>
                }
              />
            ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
