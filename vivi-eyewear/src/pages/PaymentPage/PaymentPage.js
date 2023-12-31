import "./PaymentPage.scss";
import storeImage from "../../assets/store1.png";
function PaymentPage() {
  return (
    <div className="container-fluid d-flex justify-content-center ">
      <div className="container row">
      <div  className="Payment_Page col-md-6 col-xl-4" >
        <div className="Content_Payment">
          <h2 className="title">I. Chính sách giao nhận tại ViVi Eyewear</h2>
          <ul>
            <li>Phí ship</li>
            <p>Đối với sản phẩm dưới 500.000 VNĐ: phí ship sẽ dao động từ 20.000 VNĐ đến 40.000 VNĐ tùy theo Đơn vị vận chuyển.ối với sản phẩm trên 500.000 VNĐ: phí ship sẽ dao động từ 15.000 VNĐ đến 30.000 VNĐ tùy theo Đơn vị vận chuyển.</p>
            <li>Thời gian giao hàng</li>
            <p>Khu vực nội thành Hà Nội và TP.HCM: Từ 1 – 2 ngày</p>
            <p>Khu vực ngoại thành và các thành phố lớn: 3 – 4 ngày</p>
            <p>Các khu vực khác: 4 – 5 ngày</p>
          </ul>
          <h2 className="title">II. Chính sách thanh toán</h2>
          <p>Khách hàng có thể lựa chọn các hình thức thanh toán sau khi mua sắm trực tuyến tại Vivi Eyewear</p>
          <ul>
            <li>Thanh toán trực tiếp COD</li>
            <p>COD (dịch vụ giao hàng nhận tiền):  Nhân viên vận chuyển (GHN, GHTK, Viettelpost,…) sẽ thu tiền mặt khi giao hàng cho khách.</p>
            <li>Chuyển khoản trực tiếp vào số tài khoản ViVi Eyewear</li>
            <p>Thông tin chuyển khoản</p>
            <p>- Ngân hàng Thương mại cổ phần Vietcombank (VCB)</p>
            <p>Tên tài khoản: ViVi Eyewear</p>
            <p>Số tài khoản: 2425292013</p>
          </ul>
        </div>
          <div className="col-12 ">
              <img src={storeImage} alt="Store" />
            </div>
    </div>
    </div>
      
    </div>
    
  );
}
export default PaymentPage;