import "./Material.scss";
import Input from "../../InputFilter/Input";

function Material({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Tất cả
        </label>

        <Input
          handleChange={handleChange}
          value="Nhựa"
          title="Nhựa"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Thép không gỉ"
          title="Thép không gỉ"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Thép không gỉ nhẹ"
          title="Thép không gỉ nhẹ"
          name="test"
        />
      </div>
    </div>
  );
}

export default Material;
