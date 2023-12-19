import "./CardProduct.scss";

function CardProduct({ img, title, newPrice }) {
  return (
    <section className="card">
      <img className="card-img" src={img} alt="heha" width={"176px"} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">
            <del></del>
            {newPrice}
          </div>
        </section>
      </div>
    </section>
  );
}

export default CardProduct;
