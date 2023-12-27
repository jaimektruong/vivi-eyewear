import "./CardProduct.scss";

function CardProduct({ image, name, price }) {
  // Định dạng giá sử dụng Intl.NumberFormat với VND
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return (
<<<<<<< HEAD
    <section className="card">
      <img className="card-img" src={image} alt={name} width={"176px"} />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <section className="card-price">
          <div className="price">{formattedPrice}</div>
=======
    <section className="card mb-3">
      <img className="card-img-top" src={require('../../assets/productImage/detail_page/'+ img)} alt="heha" style={{ width: "18rem"}} />
      <div className="card-body">
        <h3 className="card-title fs-5 fw-bold text-dark">{title}</h3>
        <section className="card-price">
          <div className="price text-danger fw-bold">
            <del></del>
            {newPrice}đ
          </div>
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
        </section>
      </div>
    </section>
  );
}

export default CardProduct;
