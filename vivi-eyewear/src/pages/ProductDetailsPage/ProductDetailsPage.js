import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/db/Product.json";
import "./ProductDetailsPage.scss";
import illustration from "../../assets/minhhoa.jpg";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
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
  } = product;

  return (
    <div className="inner">
      {/* bọc 3 flexbox chính */}
      <div className="content-styles d-flex flex-column gap-16">
        {/*bọc 2 flexbox ở trên */}
        <div className="d-flex justify-content-between gap-80">
          {/* flexbox lớn bên trái */}
          <div className="gap-8 p-2">
            {/* flexbox chứa các hình ảnh */}
            <div className="gap-8">
              <img src={image_detail} alt={name} />
            </div>
            {/* felxbox chứa thông tin sp*/}
            <div className="gap-8">
              <div className="gap-8">
                <div>
                  <p className=" title-styles">Mô tả</p>
                </div>
                <div>
                  <p>{description}</p>
                </div>
              </div>
              <div className="gap-8">
                <div>
                  <p className=" title-styles">Kích thước</p>
                </div>
                <div>
                  <p>{size}</p>
                </div>
              </div>
              <div className="gap-8">
                <div>
                  <p className=" title-styles">Hình dáng</p>
                </div>
                <div>
                  <p>{shape}</p>
                </div>
              </div>
              <div className="gap-8">
                <div>
                  <p className=" title-styles">Thông tin khác</p>
                </div>
                <div>
                  <p>
                    Chịu trách nhiệm sản phẩm: CTY TNHH ViVi Eyewear <br />
                    Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử dụng:
                    <br />
                    + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc những
                    nơi có nhiệt độ cao làm biến dạng kính.
                    <br /> + Không bỏ kính vào túi sách nếu không có hộp kính,
                    vật dụng nhọn như chìa khóa sẽ làm xước kính. <br />+ Không
                    rửa kính lau kính bằng các chất có tính tẩy rửa mạnh làm
                    bong tróc lớp váng phủ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* flexbox trên bên phải */}
          <div className="d-flex flex-column gap-8">
            <div>
              <p className="title-styles">{name}</p>
            </div>
            <div className="price-styles align-items-center p-0 m-0">
              <p className="align-middle p-0 m-0">{price}</p>
            </div>
            <div>
              <div>
                <p>Mã sản phẩm: {name} </p>
              </div>
              <div>
                <p>Chất liệu: {material} </p>
              </div>
              <div>
                <p>Màu sắc: {color}</p>
              </div>
            </div>
            {/* flexbox vận chuyển */}
            <div className="gap-8 d-flex">
              <div>
                <i className="bi bi-truck"></i>
              </div>
              <div>
                <p>Miễn phí giao hàng từ 500k (vận chuyển 3 - 5 ngày)</p>
              </div>
            </div>
            {/* flexbox  chỉnh số lượng và AR*/}
            <div className="d-flex justify-content-start gap-8">
              <div>button điều chỉnh số lượng</div>
              <div>
                <button className="btn button-background button-size">
                  Thử sản phẩm với AR
                </button>
              </div>
            </div>
            {/* flexbox thêm wishlist và cart */}
            <div className="d-flex justify-content-start gap-8">
              <div>button thêm vào wishlist</div>
              <div>
                <button className="btn button-background button-size">
                  Thêm vào giỏ hàng
                </button>
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
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <p>Bảo hành trọn đời</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="text-justify">
                    Bảo hành ốc vít rơi ra, gọng lệch, gọng kênh vênh, lỏng
                    chật, rơi ve đệm mũi trọn đời.
                  </p>
                </div>
              </div>
              <div className="gap-8 w-100 ">
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <i className="bi bi-box"></i>
                  </div>
                  <div>
                    <p>Giao hàng tận nơi</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="text-justify">
                    Giao hàng tận nơi, được kiểm tra hàng trước khi thanh toán.
                  </p>
                </div>
              </div>
              <div className="gap-8 w-100 ">
                <div className="d-flex justify-content-start gap-8">
                  <div>
                    <i className="bi bi-arrow-repeat"></i>
                  </div>
                  <div>
                    <p>Đổi trả dễ dàng</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="text-justify">
                    Bảo hành 1 đổi 1 khi có lỗi của nhà sản xuất, lỗi do đo mắt
                    sai (trong 10 ngày đầu), hỗ trợ giảm 50% nếu đổi gọng mới.
                  </p>
                </div>
              </div>
            </div>
            {/* flexbox hình ảnh minh hoạ */}
            <div className="gap-8">
              <img className="ilustration-image-resize " src={illustration} />
            </div>
          </div>
        </div>
        {/* flexbox các sản phẩm gợi ý (dưới cùng) */}

        <div>
          <FeaturedProducts></FeaturedProducts>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
