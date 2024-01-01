import React, { useEffect, useRef, useState } from "react";
import "./ProductsPage.scss";
import CardProduct from "../../components/CardProduct/CardProduct";
import Sidebar from "../../components/SideBar/Sidebar";
import { useSelector } from "react-redux";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/LoadingComponent/LoadingComponent";
import { useDebounce } from "../../hooks/UseDebounce";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { type } = useParams();
  const searchProduct = useSelector((state) => state.product?.search);
  const searchDebounce = useDebounce(searchProduct, 1000);
  const refSearch = useRef();
  const [stateProducts, setStateProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProductAll = async (search) => {
    const res = await ProductService.getAllProduct(search);
    if (search?.length > 0 || refSearch.current) {
      setStateProducts(res?.data);
    } else {
      return res;
    }
  };
  useEffect(() => {
    if (refSearch.current) {
      setLoading(true);
      fetchProductAll(searchDebounce);
    }
    refSearch.current = true;
    setLoading(false);
  }, [searchProduct]);

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
  });

  useEffect(() => {
    if (products?.data?.length > 0) {
      setStateProducts(products?.data);
    }
  }, [products]);

  return (
    <Loading isLoading={isLoading || loading}>
      <div>
        <div className="d-flex flex-column inner">
          <div className="d-flex inner gap-2">
            <div className="">
              <Sidebar />
            </div>
            <div className="container d-flex flex-column gap-3">
              <section className="card-container d-flex flex-wrap gap-3">
                {stateProducts?.map(
                  (product) =>
                    (!type || (type && product.type === type)) && (
                      <CardProduct
                        key={product._id} // Don't forget to add a unique key prop
                        id={product._id}
                        image={product.image_thumb}
                        name={product.name}
                        price={product.price}
                      />
                    )
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default ProductsPage;
