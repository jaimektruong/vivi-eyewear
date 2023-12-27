import Input from "../../InputFilter/Input";
import "./Color.scss";

function Color({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>All
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
        value="Xanh dương"
        title="Xanh dương"
        name="test1"
        color="blue"
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
        value="Xanh"
        title="Xanh"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="Nâu"
        title="Nâu"
        name="test1"
        color="#894517"
      />
      <Input
        handleChange={handleChange}
        value="Trắng"
        title="White"
        name="test1"
        color="white"
      />{" "}
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
