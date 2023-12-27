import "./Cart.scss";

function Cart(props) {
  return (
    <>
      <button className="cart__container text-white ">
        <i className="cart__icon bi bi-cart me-3 fs-4"></i>
        <span className="cart__number">
          <span>{props.value}</span>
        </span>
      </button>
    </>
  );
}

export default Cart;
