import "./AdminBlog.scss";

function AdminBlog() {
    return (
      <div>
        <div className="container" style={{marginLeft:"10px"}}>
          <form action="#">
            <div className="container_1">
              <h2 className="content_0">QUẢN LÝ BLOG</h2>
              <input className="content_00" type="button" value="Thêm Blog mới" />
            </div>
            <div className="container_2">
              <p className="content">Tất cả (3)</p>
              <p className="content">Đang hoạt động (3)</p>
              <p className="content">Bị hủy kích hoạt (0)</p>
              <p className="content">Xóa (0)</p>
            </div>
            <div>
              <fieldset class="boder">
                <input class="input" type="text" placeholder="Tên Blog..." />
                <input  class="input" list="Blogs" placeholder="Danh mục..." />
                <datalist id="Blogs">
                  <option value="Gọng kính"></option>
                  <option value="Tròng kính"></option>
                  <option value="...."></option>
                </datalist>
  
                <input  class="input" list="Nguoiviet" placeholder="Người viết..." />
                <datalist id="Nguoiviet">
                  <option value="Ai Nhi"></option>
                  <option value="Van Anh"></option>
                  <option value="Hoa Ky"></option>
                  <option value="Mai Trinh"></option>
                  <option value="Kien Duy"></option>
                </datalist>
  
                <input class="input_2" type="button" value="Đặt lại" /> <br />
  
                {/* <h4>Đã chọn: 0</h4> */}
                <input className="content_1" type="button" value="Xóa" />
                <input className="content_1" type="button" value="Hủy kích hoạt" />
                <input className="content_1" type="button" value="Kích hoạt" />
                {/* <p className="content_1">Đã chọn: 0</p> */}
              </fieldset>
            </div>
            <div>
              <div className="container_3">
                <p className="content">Tất cả</p>
                <p className="content">Danh mục</p>
                <p className="content">Người viết</p>
                <p className="content">Thời gian đăng</p>
                <p className="content">Trạng thái </p>
                <p className="content">Hành động </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default AdminBlog;