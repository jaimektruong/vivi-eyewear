import Header from "./Header/Header";
import Footer from "../../Footer/Footer";

function CustomerDefaultLayout({ children }) {
  return (
    <div className="container-fluid px-0">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default CustomerDefaultLayout;
