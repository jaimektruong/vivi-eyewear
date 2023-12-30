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
    <div className="container-fluid d-flex justify-content-center text-color-default">
      <div className="container px-5 ">
        {/* bọc 3 flexbox chính */}
        <div className="row">
          <div className="background-product-details-page content-box-product-details-styles d-flex flex-column gap-16">
            {/*bọc 2 flexbox ở trên */}
            <div className="d-flex justify-content-between gap-52">
              {/* flexbox lớn bên trái */}
              <div className="gap-8 p-2">
                {/* flexbox chứa các hình ảnh */}
                <div className="gap-8">
                  <img src={image_detail} alt={name} />
                </div>
                {/* felxbox chứa thông tin sp*/}
                <div className="gap-16">
                  <div className="gap-8">
                    <div>
                      <p className="title-styles p-details-page-style">Mô tả</p>
                    </div>
                    <div>
                      <p className="p-details-page-style">{description}</p>
                    </div>
                  </div>
                  <div className="gap-8">
                    <div>
                      <p className="title-styles p-details-page-style">
                        Kích thước
                      </p>
                    </div>
                    <div>
                      <p className="p-details-page-style">{size}</p>
                    </div>
                  </div>
                  <div className="gap-8">
                    <div>
                      <p className="title-styles p-details-page-style">
                        Hình dáng
                      </p>
                    </div>
                    <div>
                      <p className="p-details-page-style">{shape}</p>
                    </div>
                  </div>
                  <div className="gap-8">
                    <div>
                      <p className=" title-styles p-details-page-style">
                        Thông tin khác
                      </p>
                    </div>
                    <div>
                      <p className="p-details-page-style">
                        Chịu trách nhiệm sản phẩm: CTY TNHH ViVi Eyewear <br />
                        Cách bảo quản: Bảo quản trong hộp kính <br />
                        Hướng dẫn sử dụng: <br />
                        + Tháo kính bằng 2 tay <br />
                        + Không bỏ kính vào cốp xe hoặc những nơi có nhiệt độ
                        cao làm biến dạng kính.
                        <br /> + Không bỏ kính vào túi sách nếu không có hộp
                        kính, vật dụng nhọn như chìa khóa sẽ làm xước kính.{" "}
                        <br />+ Không rửa kính lau kính bằng các chất có tính
                        tẩy rửa mạnh làm bong tróc lớp váng phủ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* flexbox trên bên phải */}
              <div className="d-flex flex-column gap-8 right-content-box">
                <div>
                  <p className="title-styles p-details-page-style label-product-name ">
                    {name}
                  </p>
                </div>
                <div className="price-styles">
                  <p className="price-styles-p ">{price}</p>
                </div>
                <div>
                  <div>
                    <p className="p-details-page-style">Mã sản phẩm: {name} </p>
                  </div>
                  <div>
                    <p className="p-details-page-style">
                      Chất liệu: {material}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="p-details-page-style">Màu sắc: {color}</p>
                  </div>
                </div>
                {/* flexbox vận chuyển */}
                <div className="gap-8 d-flex">
                  <div>
                    <i className="bi bi-truck icon-wishlist"></i>
                  </div>
                  <div className="d-flex align-items-center">
                    <i>Miễn phí giao hàng từ 500k (vận chuyển 3 - 5 ngày)</i>
                  </div>
                </div>
                {/* flexbox wishlist và ar*/}
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <ButtonWishlist></ButtonWishlist>
                  </div>
                  <div>
                    <button className="btn button-background button-size">
                      Thử sản phẩm với AR
                    </button>
                  </div>
                </div>
                {/* flexbox thêm vào giỏ hàng điều chỉnh số lượng */}
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <ButtonAdjustQuantity></ButtonAdjustQuantity>
                  </div>
                  <div>
                    <p className="h-100 m-0 d-flex align-items-center">
                      {quantity} sản phẩm có sẵn
                    </p>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-16">
                    <button className="btn button-background button-size">
                      Thêm vào giỏ hàng
                    </button>
                    <div>
                      <button className="btn button-background button-size">
                        <b>MUA NGAY</b>
                      </button>
                    </div>
                  </div>
                </div>
                {/* đường kẻ ngang */}
                <div>
                  <hr />
                </div>
                {/* flexbox các thông tin bảo hành, vận chuyển,.. */}
                <div className="d-flex gap-16 ">
                  <div className="gap-8 w-100 ">
                    <div className="d-flex justify-content-start gap-8">
                      <div>
                        <i className="bi bi-shield-check icon-wishlist"></i>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="unset-margin-top">Bảo hành trọn đời</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <i className="text-justify">
                        Bảo hành ốc vít rơi ra, gọng lệch, gọng kênh vênh, lỏng
                        chật, rơi ve đệm mũi trọn đời.
                      </i>
                    </div>
                  </div>
                  <div className="gap-8 w-100 ">
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
                        Giao hàng tận nơi, được kiểm tra hàng trước khi thanh
                        toán.
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
                        Bảo hành 1 đổi 1 khi có lỗi của nhà sản xuất,hỗ trợ giảm
                        50% nếu đổi gọng mới.
                      </i>
                    </div>
                  </div>
                </div>
                {/* flexbox hình ảnh minh hoạ */}
                <div className="gap-8">
                  <img
                    className="ilustration-image-resize "
                    src={illustration}
                  />
                </div>
              </div>
            </div>
            {/* flexbox các sản phẩm gợi ý (dưới cùng) */}
            <div>
              <FeaturedProducts></FeaturedProducts>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
