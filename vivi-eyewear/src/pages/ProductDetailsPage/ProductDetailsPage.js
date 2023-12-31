import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/db/Product.json";
import "./ProductDetailsPage.scss";
import illustration from "../../assets/minhhoa.jpg";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ButtonAdjustQuantity from "../../components/ButtonAdjustQuantity/ButtonAdjustQuantity";
import ButtonWishlist from "../../components/ButtonWishlist/ButtonWishlist";
const ProductDetailsPage = () => {
  const { productName } = useParams();
  const product = products.find(() => products.name === productName);
  console.log(product);

  if (!product) {
    // Xử lý trường hợp không tìm thấy sản phẩm
    return <p>Sản phẩm không tồn tại</p>;
  }

  const {
    image_detail,
    price,
    material,
    color,
    name,
    description,
    size,
    shape,
    quantity,
  } = product;

  return (
    <div className="container-fluid d-flex justify-content-center text-color-default ">
      <div className="container  ">
        {/* bọc các flexbox chính */}
        <div className="row mx-0 content-box-product-details-styles ">
          {/*bọc 2 flexbox ảnh và các nút */}
          <div className="row col-xl-12 col-md-12 col-12 ">
            {/* flexbox chứa hình */}
            <div className="gap-16 col-xl-6 col-md-6 col-12">
              <div>
                <img
                  src={image_detail}
                  alt={name}
                  className="shadow rounded-4 detail-image-resize"
                />
              </div>
            </div>
            {/* flex bx chứa nút */}
            <div className="gap-16 col-xl-6 col-md-6 col-12">
              <div className="col-xl-12 col-md-12 col-12">
                <b className="price-size p-details-page-style label-product-name ">
                  {name}
                </b>
              </div>
              <div className="price-styles col-xl-12 col-md-12 col-12">
                <p className="price-styles-p ">{price}</p>
              </div>
              <div className="row col-xl-12 col-md-12 col-12 info-product-details-box ">
                <div className="col-xl-12 col-md-12 col-12 ">
                  <p className=" mb-0 ">Mã sản phẩm: {name} </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style ">
                    Chất liệu: {material}{" "}
                  </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style ">Màu sắc: {color}</p>
                </div>
              </div>
              {/* flexbox vận chuyển */}
              <div className="col-xl-12 col-md-12 col-12 row">
                <div className="col-xl-1 col-md-1 col-1">
                  <i className="bi bi-truck delivery-icon"></i>
                </div>
                <div className=" col-xl-11 col-md-11 col-11 d-flex align-items-center ">
                  <i className="delivery-text-padding align-items-center ">
                    Miễn phí giao hàng từ 500k (vận chuyển 3 - 5 ngày)
                  </i>
                </div>
              </div>
              {/* flexbox chứa các nút*/}
              <div className=" col-xl-12 col-md-12 col-12 row gap-8 mr-0">
                {/* flexbox wishlist và ar*/}
                <div className=" col-xl-12 col-md-12 col-12 row wishlist-button-padding">
                  <div className=" row col-xl-2 col-md-2 col-2 ml-16">
                    <ButtonWishlist></ButtonWishlist>
                  </div>
                  <div className=" row col-xl-10 col-md-10 col-10 ar-button-padding">
                    <button className=" button-primary button-size-AR ">
                      Thử sản phẩm với AR
                    </button>
                  </div>
                </div>
                {/* flexbox thêm vào giỏ hàng điều chỉnh số lượng */}
                <div className="row col-xl-12 col-md-12 col-12 wishlist-button-padding">
                  <div className=" row col-xl-2 col-md-2 col-2 px-0 mx-0">
                    <ButtonAdjustQuantity></ButtonAdjustQuantity>
                  </div>
                  <div className="row col-xl-10 col-md-10 col-10 ">
                    <p className="h-100 d-flex align-items-center px-0 mx-0">
                      {quantity} Sản phẩm có sẵn
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-12 row ">
                  <div className="col-xl-4 col-md-12 col-12 ">
                    <button className="button-primary button-size-add-to-cart">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                  <div className="col-xl-8 col-md-12 col-12 pt-8">
                    <button className="button-primary button-size-buy ">
                      <b>MUA NGAY</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* flexbox chứa thông tin khác */}
          <div className="col-xl-12 col-md-12 col-12 d-flex justify-content-center">
            <hr className="pt-16 pb-16" />
          </div>
          <div className="row col-xl-12 col-md-12 col-12">
            {/* thông tin về thông số */}
            <div className="col-xl-6 col-md-6 col-12">
              <div className="gap-8 col-xl-12 col-md-12 col-12">
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="sub-title-styles-product-details-page p-details-page-style">
                    Mô tả
                  </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style">{description}</p>
                </div>
              </div>
              <div className="gap-8">
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="sub-title-styles-product-details-page p-details-page-style">
                    Kích thước
                  </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style">{size}</p>
                </div>
              </div>
              <div className="gap-8">
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="sub-title-styles-product-details-page p-details-page-style">
                    Hình dáng
                  </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style">{shape}</p>
                </div>
              </div>
              <div className="gap-8">
                <div className="col-xl-12 col-md-12 col-12">
                  <p className=" sub-title-styles-product-details-page p-details-page-style">
                    Thông tin khác
                  </p>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <p className="p-details-page-style">
                    Chịu trách nhiệm sản phẩm: CTY TNHH ViVi Eyewear <br />
                    Cách bảo quản: Bảo quản trong hộp kính <br />
                    Hướng dẫn sử dụng: <br />
                    + Tháo kính bằng 2 tay <br />
                    + Không bỏ kính vào cốp xe hoặc những nơi có nhiệt độ cao
                    làm biến dạng kính.
                    <br /> + Không bỏ kính vào túi sách nếu không có hộp kính,
                    vật dụng nhọn như chìa khóa sẽ làm xước kính. <br />+ Không
                    rửa kính lau kính bằng các chất có tính tẩy rửa mạnh làm
                    bong tróc lớp váng phủ.
                  </p>
                </div>
              </div>
            </div>

            {/* flexbox các thông tin bảo hành, vận chuyển,.. và hình minh hoạ*/}
            <div className="col-xl-6 col-md-6 col-12 row">
              {/* thông tin bảo hành, đổi trả,... */}
              <div className="gap-8 col-xl-12 col-md-12 col-12">
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <i className="bi bi-arrow-repeat icon-wishlist"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="unset-margin-top">Giao hàng tận nơi</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <i className="text-justify">
                    Bảo hành ốc vít rơi ra, gọng lệch, gọng kênh vênh, lỏng
                    chật, rơi ve đệm mũi trọn đời.
                  </i>
                </div>
              </div>
              <div className="gap-8 col-xl-12 col-md-12 col-12">
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <i className="bi bi-box icon-wishlist"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="unset-margin-top">Giao hàng tận nơi</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <i className="text-justify">
                    Giao hàng tận nơi, được kiểm tra hàng trước khi thanh toán.
                  </i>
                </div>
              </div>
              <div className="gap-8 w-100 ">
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <i className="bi bi-arrow-repeat icon-wishlist"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="unset-margin-top">Đổi trả dễ dàng</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <i className="text-justify">
                    Bảo hành 1 đổi 1 khi có lỗi của nhà sản xuất, hỗ trợ giảm
                    50% nếu đổi gọng mới.
                  </i>
                </div>
              </div>
              {/* flexbox hình ảnh minh hoạ */}
              <div className="col-xl-12 col-md-12 col-12">
                <img
                  className="ilustration-image-resize rounded-4"
                  src={illustration}
                />
              </div>
            </div>
            <div className="col-xl-12 col-md-12 col-12">
              <FeaturedProducts></FeaturedProducts>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
