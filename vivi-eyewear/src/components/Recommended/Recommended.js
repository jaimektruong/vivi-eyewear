import Button from "../Button/Button";
import "./Recommended.scss";
function Recommended({ handleClick }) {
  return (
    <>
      <div className="container flex-column pb-5">
        <h2 className="recommended-title px-3">Recommended</h2>
        <div className="redcommended-flex">
          <Button onClickHandler={handleClick} value="" title="All" />
          <Button onClickHandler={handleClick} value="Nhựa" title="Nhựa" />
          <Button onClickHandler={handleClick} value="Thép không gỉ" title="Thép không gỉ" />
          <Button onClickHandler={handleClick} value="Thép không gỉ nhẹ" title="Thép không gỉ nhẹ" />
          <Button onClickHandler={handleClick} value="Plastic" title="Plastic" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
