import "./CardProduct.scss";

function CardProduct({ image, name, price }) {
  // Định dạng giá sử dụng Intl.NumberFormat với VND
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return (
    <section className="card">
      <img className="card-img" src={image} alt={name} width={"196px"} />
      <div className="card-details d-flex flex-column card-text-infor">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">{formattedPrice}</p>
      </div>
    </section>
  );
}

export default CardProduct;
