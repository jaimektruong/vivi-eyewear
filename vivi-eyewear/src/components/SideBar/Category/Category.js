import "./Category.scss";
import Input from "../../InputFilter/Input";

function Category({ handleChange }) {
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
<<<<<<< HEAD
          value="Nhựa"
          title="Nhựa"
=======
          value="Gọng kính"
          title="Gọng kính"
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
          name="test"
        />
        <Input
          handleChange={handleChange}
<<<<<<< HEAD
          value="Thép không gỉ"
          title="Thép không gỉ"
=======
          value="Gọng kính râm"
          title="Gọng kính râm"
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
          name="test"
        />
        <Input
          handleChange={handleChange}
<<<<<<< HEAD
          value="Thép không gỉ nhẹ"
          title="Thép không gỉ nhẹ"
=======
          value="Tròng kính"
          title="Tròng kính"
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
