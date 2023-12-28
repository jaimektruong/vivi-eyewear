import Header from "./Header/Header";
import Footer from "../../Footer/Footer";

function CustomerDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default CustomerDefaultLayout;
