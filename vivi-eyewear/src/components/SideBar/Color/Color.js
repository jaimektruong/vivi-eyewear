import Input from "../../InputFilter/Input";
import "./Color.scss";

function Color({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>
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
        value="Hồng"
        title="Hồng"
        name="test1"
        color="#f5b9ba"
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
    </div>
  );
}

export default Color;
