import Input from "../../InputFilter/Input";
import "./Color.scss";

function Color({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>Tất cả
      </label>
      <Input
        handleChange={handleChange}
        value="Đen"
        title="Đen"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="Nâu"
        title="Nâu"
        name="test1"
        color="brown"
      />
      <Input
        handleChange={handleChange}
        value="Đỏ"
        title="Đỏ"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="Hồng"
        title="Hồng"
        name="test1"
        color="pink"
      />
      <Input
        handleChange={handleChange}
        value="Xanh"
        title="Xanh"
        name="test1"
        color="blue"
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
      </label>
    </div>
  );
}

export default Color;
