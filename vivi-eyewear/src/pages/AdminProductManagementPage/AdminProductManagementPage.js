import "./AdminProductManagementPage.scss";
function AdminProductManagementPage() {
  return (
    <div className="content-details d-flex flex-column">
      <div className="d-flex d-flex justify-content-between">
        <div>
          <p className="function-management">QUẢN LÝ SẢN PHẨM</p>
        </div>
        <div>
          <button className="button-primary button-local button-add-product">
            <p>Thêm mới sản phẩm</p>
          </button>
        </div>
      </div>
      <div className="d-flex d-flex justify-content-between product-status-box">
        <div>Tất cả ()</div>
        <div>Đang hoạt động ()</div>
        <div>Bị huỷ kích hoạt ()</div>
        <div>Đã xoá ()</div>
      </div>
      <div className=" d-flex flex-column button-action-container">
        <div className="d-flex justify-content-between button-action-line">
          {/* thanh search */}
          <input type="text" placeholder="Tìm kiếm tên sản phẩm" />

          {/* dropdown khoảng giá */}
          <div>
            <select className="dropdown-styles">
              <option selected disabled>
                Khoảng giá
              </option>
              <option>Tất cả giá</option>
              <option>Dưới 500.000</option>
              <option>Từ 500.000 - 700.000</option>
              <option>Từ 700.000 - 1.000.000</option>
              <option>Trên 1.000.000</option>
            </select>
          </div>
          {/* dropdown hạng mục */}
          <div>
            <select className="dropdown-styles">
              <option selected disabled>
                Hạng mục
              </option>
              <option>Tất cả hạng mục</option>
              <option>Gọng kính</option>
              <option>Kính râm</option>
              <option>Tròng kính</option>
            </select>
          </div>
          {/* button  đặt lại */}
          <div>
            <button className="button-primary button-action-styles mini-button">
              Đặt lại
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between button-action-line">
          <div>Đã chọn: {}</div>
          <div>
            <button className="button-secondary button-action-styles">
              Kích hoạt
            </button>
          </div>
          <div>
            <button className="button-secondary button-action-styles">
              Huỷ kích hoạt
            </button>
          </div>
          <div>
            <button className="button-secondary button-action-styles mini-button">
              Xoá
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex d-flex justify-content-between">
        <div>checkbox</div>
        <div>Tất cả</div>
        <div>Số lượng</div>
        <div>Giá bán</div>
        <div>Thời gian cập nhật</div>
        <div>Trạng thái</div>
        <div>Hành động</div>
      </div>
      <div className="d-flex d-flex justify-content-between">
        {/* Vòng lặp ở đây */}
        <div className="d-flex d-flex justify-content-between">
          <div>chekcbox</div>
          <div className="d-flex flex-column">
            <div>Hình bỏ đây</div>
            <div>Tên sản phẩm ở đây</div>
          </div>
          <div className="d-flex d-flex justify-content-between">
            <div>Số lượng</div>
            <div>Nút chỉnh sửa </div>
          </div>
          <div>Giá bán</div>
          <div className="d-flex flex-column">
            <div>Thời gian cập nhật</div>
            <div>Thời gian theo giờ</div>
          </div>
          <div>Trạng thái gì đó {}</div>
          <div className="d-flex flex-column">
            {/* button ở đây */}
            <div>Chỉnh sửa</div>
            <div>Huỷ kích hoạt</div>
            <div>Xoá</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductManagementPage;
