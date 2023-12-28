import Input from "../../InputFilter/Input";
import "./Price.scss";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="500000"
        title="0-500000đ"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="700000"
        title="500000-700000đ"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value="800000"
        title="Hơn 700000đ"
        name="test2"
      />
    </div>
  );
}

export default Price;
