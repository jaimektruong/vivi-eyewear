function Button({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} className="btns btn btn-outline-success">
      {title}
    </button>
  );
}

export default Button;
