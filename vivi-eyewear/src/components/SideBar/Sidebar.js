import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";

import "./Sidebar.scss";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>s</h1>
        </div>
        <Category handleChange={handleChange} />
        <Color handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
