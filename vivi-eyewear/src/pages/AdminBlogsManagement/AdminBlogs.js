import React, { useState } from "react";
import "./AdminBlog.scss";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      category: "Gọng kính",
      author: "Ai Nhi",
      date: "2023-01-01",
      status: "Active",
    },
    {
      id: 2,
      title: "Blog 2",
      category: "Tròng kính",
      author: "Van Anh",
      date: "2023-02-01",
      status: "Inactive",
    },
    {
      id: 3,
      title: "Blog 3",
      category: "Tròng kính",
      author: "Hoa Kỳ",
      date: "2023-03-01",
      status: "Inactive",
    }
    // More blog data if needed
  ]);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(0);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSelectedCheckboxes((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };

  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");

  // Other state and event handler functions as needed

  const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchAuthorChange = (event) => {
    setSearchAuthor(event.target.value);
  };

  const handleReset = () => {
    setSearchTitle("");
    setSearchCategory("");
    setSearchAuthor("");
  };

  const handleDelete = () => {
    // Handle delete functionality
  };

  const handleDeactivate = () => {
    // Handle deactivate functionality
  };

  const handleActivate = () => {
    // Handle activate functionality
  };


  return (
    <div className="admin-management-blogs">
      {/* <AdminSideBar /> */}
      <div>
        <div className="container">
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
              <fieldset className="boder">
                <input
                  className="input"
                  type="text"
                  placeholder="Tên Blog..."
                  value={searchTitle}
                  onChange={handleSearchTitleChange}
                />
                <input
                  className="input"
                  list="Blogs"
                  placeholder="Danh mục..."
                  value={searchCategory}
                  onChange={handleSearchCategoryChange}
                />
                <datalist id="Blogs">
                  <option value="Gọng kính"></option>
                  <option value="Tròng kính"></option>
                  <option value="...."></option>
                </datalist>

                <input
                  className="input"
                  list="Nguoiviet"
                  placeholder="Người viết..."
                  value={searchAuthor}
                  onChange={handleSearchAuthorChange}
                />
                <datalist id="Nguoiviet">
                  <option value="Ai Nhi"></option>
                  <option value="Van Anh"></option>
                  <option value="Hoa Ky"></option>
                  <option value="Mai Trinh"></option>
                  <option value="Kien Duy"></option>
                </datalist>

                <input className="input_2" type="button" value="Đặt lại" onClick={handleReset} /> <br />

                {/* <h4>Đã chọn: 0</h4> */}
                <div className="filter-row">
                  <div>Đã chọn: {selectedCheckboxes}</div>
                  <input className="content_1" type="button" value="Kích hoạt" onClick={handleActivate} />
                  <input className="content_1" type="button" value="Hủy kích hoạt" onClick={handleDeactivate} />
                  <input className="content_1" type="button" value="Xóa" onClick={handleDelete} />
                </div>
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
    </div>
  );
};

export default AdminBlog;