import "./CardProduct.scss";

function CardProduct({ img, title, newPrice }) {
  return (
    <section className="card mb-3">
      <img className="card-img-top" src={require('../../assets/productImage/detail_page/'+ img)} alt="heha" style={{ width: "18rem"}} />
      <div className="card-body">
        <h3 className="card-title fs-5 fw-bold text-dark">{title}</h3>
        <section className="card-price">
          <div className="price text-danger fw-bold">
            <del></del>
            {newPrice}đ
          </div>
        </section>
      </div>
    </section>
  );
}

export default CardProduct;
