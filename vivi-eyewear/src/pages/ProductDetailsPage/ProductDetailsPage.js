import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/db/Product.json";

const ProductDetailsPage = () => {
  const { productName } = useParams();
  const product = products.find(() => products.name === productName);

  if (!product) {
    // Xử lý trường hợp không tìm thấy sản phẩm
    return <p>Sản phẩm không tồn tại</p>;
  }

  const { image, price, description } = product;

  return (
    <section className="section product">
      <img src={image} alt={productName} />
      <h4>{productName}</h4>
      <p>{price}</p>
      <p>{description}</p>
    </section>
  );
};

export default ProductDetailsPage;
