import "./NavBar.scss";

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "checkbox":
        return options.map((option) => {
          return (
            <div className="checkbox">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  {option}
                </label>
              </div>
            </div>
          );
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <div className="titleNav">Chất liệu</div>
      <div>
        {renderContent("checkbox", ["Acate", "Kim loại", "Nhựa", "Nhựa dẻo"])}
      </div>
      <div className="titleNav">Hình dáng</div>
      <div>
        {renderContent("checkbox", ["Acate", "Kim loại", "Nhựa", "Nhựa dẻo"])}
      </div>{" "}
      <div className="titleNav ">Thương hiệu</div>
      <div>
        {renderContent("checkbox", ["Acate", "Kim loại", "Nhựa", "Nhựa dẻo"])}
      </div>
      <div className="titleNav">Khoảng giá</div>
      <div>
        {renderContent("checkbox", [
          "100000 - 200000",
          "100000 - 300000",
          "300000 - 400000",
        ])}
      </div>
    </div>
  );
};

export default NavBarComponent;
