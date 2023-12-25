import "./CardProduct.scss";

function CardProduct({ image, name, price }) {
  // Định dạng giá sử dụng Intl.NumberFormat với VND
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return (
    <section className="card">
      <img className="card-img" src={image} alt={name} width={"176px"} />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <section className="card-price">
          <div className="price">{formattedPrice}</div>
        </section>
      </div>
    </section>
  );
}

export default CardProduct;
