import "./AdminProductManagementPage.scss";
function AdminProductManagementPage() {
  return (
    <div className="content">
      <div className="d-flex d-flex justify-content-between">
        <div className="fuction">QUẢN LÝ SẢN PHẨM</div>
        <div>
          <button>Thêm mới sản phẩm</button>
        </div>
      </div>
      <div className="d-flex d-flex justify-content-between">
        <div>Tất cả ()</div>
        <div>Đang hoạt động ()</div>
        <div>Bị huỷ kích hoạt ()</div>
        <div>Đã xoá ()</div>
      </div>
      <div>
        <div className="d-flex d-flex justify-content-between">
          <div>tên hoặc mã sp</div>
          <div>giá nghìn đồng</div>
          <div>hạng mục</div>
          <div>
            <button className="button-primary">Đặt lại</button>Đặt
          </div>
        </div>
        <div className="d-flex d-flex justify-content-between">
          <div>Đã chọn: {}</div>
          <div>
            <button>Kích hoạt</button>
          </div>
          <div>
            <button>Huỷ kích hoạt</button>
          </div>
          <div>
            <button>Xoá</button>
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
