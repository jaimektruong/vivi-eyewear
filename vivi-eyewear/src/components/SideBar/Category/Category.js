import "./Category.scss";
import Input from "../../InputFilter/Input";

function Category({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="Gọng kính"
          title="Gọng kính"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Gọng kính râm"
          title="Gọng kính râm"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tròng kính"
          title="Tròng kính"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
