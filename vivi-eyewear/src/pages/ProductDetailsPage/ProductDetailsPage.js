import ImageSteper from "../../components/ImageSlider/ImageSlider";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <>
      <div className="container d-block">
        <div className="fs-4">
          <span> TRANG CHỦ - CHI TIẾT SẢN PHẨM</span>
        </div>
        <div className="product p-5">
          <ProductDetails />
        </div>
        <div>
          <ImageSteper />
        </div>
      </div>
    </>
  );
};
export default ProductDetailsPage;
