import Card from "../../components/Card/Card";
import Sidebar from "../../components/SideBar/Sidebar";
import homeProDuctBG from "../../assets/homeProductBG.jpg";
import ImageSteper from "../../components/ImageSlider/ImageSlider";
const TypeProductPage = () => {
  return (
    <>
      <div>
        {" "}
        <div>
          <img
            src={homeProDuctBG}
            alt="pic"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
      </div>
      <div className="container d-block p-5">
        <div className="d-flex ">
          {" "}
          <div Sidebar="col-2">
            <Sidebar />
          </div>
          <div className="col-10 row">
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
              <Card />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <ImageSteper />
        </div>
      </div>
    </>
  );
};

export default TypeProductPage;
