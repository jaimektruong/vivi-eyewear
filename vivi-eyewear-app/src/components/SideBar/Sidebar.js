import Material from "./Category/Material";
import Color from "./Color/Color";
import Price from "./Price/Price";

import "./Sidebar.scss";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="d-flex flex-column">
          <Material handleChange={handleChange} />
          <Color handleChange={handleChange} />
          <Price handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
