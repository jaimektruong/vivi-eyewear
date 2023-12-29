import "./WarrantyPage.scss";
import storeImage from "../../assets/store1.png";
function WarrantyPage() {
  return (
    <div className="inner" className="Warranty_Page">
      <div className="content"className="Content_Warranty">
        <h1>Chính sách bảo hành</h1>
        <p>1. Bảo hành 1 đổi 1 trong 180 ngày sau khi mua hàng nếu lớp váng dầu của tròng kính gặp vấn đề về kỹ thuật như xô váng, mất váng mà không phải do nhiệt hay tác động vật lý như trầy xước, nứt, vỡ(Virtual Vision Eyewear)</p>
        <p>2. ViVi Eyewear bảo hành cho cả lỗi người dùng nếu không may làm gẫy hoặc mất kính. Trợ giá 50% giá niêm yết khi khách hàng sử dụng lại sản phẩm cũ. Trong trường hợp sản phẩm cũ hết hàng có thể thay thế sang sản phẩm có giá trị bằng hoặc thấp hơn. Áp dụng 1 lần duy nhất trên tổng hóa đơn trong 60 ngày kể từ khi mua hàng</p>
        <p>3. Đổi mới sản phẩm hoặc thay thế phụ kiện trong 90 ngày nếu sản phẩm có lỗi do nhà sản xuất</p>
        <p>4. Trong 30 ngày đầu tiên, bảo hành 1 đổi 1 tròng kính cho tới khi bạn cảm thấy thoải mái với thị lực của mình</p>
        <p>5. 7 ngày đầu sau khi mua hàng, ViVi Eyewear hỗ trợ đổi màu gọng kính khi còn nguyên tem mác</p>
        <p> 6. Đo mắt, kiểm tra thị lực miễn phí</p>
        <p>7. Miễn phí trọn đời sửa chữa, nắn chỉnh, vệ sinh kính, thay thế phụ kiện (nếu có), áp dụng ngay cả không phải sản phẩm mua tại ViVi Eyewear</p>
        <p>8. Số điện thoại của bạn là voucher tặng gọng kính miễn phí khi cắt từ tròng kính 450K cho những lần mua hàng sau. Voucher sử dụng trọn đời và có thể dùng chung cho bạn bè người thân</p>
        <p>9. Bảo hành không áp dụng với các chương trình, khuyến mại khác</p>
      </div>
      <img style={{ display: "block", margin: "0 auto" }} src={storeImage} alt="Store" />
    </div>
  );
}

export default WarrantyPage;