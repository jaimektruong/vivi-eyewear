import "./DeliveryPage.scss";
import storeImage from "../../assets/store1.png";
function DeliveryPage() {
    return (
        <div className="Delivery_Page" classname="inner">
            <div classname="Content_Delivery"> 
                <h1>Chính sách Vận chuyển và Kiểm tra hàng ViVi Eyewear</h1>
                <h2>Vận chuyển sản phẩm</h2>
                <h3>Phạm vi vận chuyển  Thời gian giao hàng</h3>
                <p>Nội thành, ngoại thành TP. Hồ Chí Minh: trong vòng 1-2 ngày khách hàng sẽ nhận được hàng.</p>
                <p>Các tỉnh/ thành phố khác trên toàn quốc: Các đơn hàng của HMK Eyewear được giao bởi các đơn vị vận chuyển như: Giaohangnhanh, Giaohangtietkiem, Viettelpost  thời gian từ 2 đến 4 ngày.</p>
                <p>Lưu ý: phí giao hàng sẽ được HMK Eyewear báo với khách hàng cụ thể tùy từng trường hợp trước khi giao.</p>
                <p> Giao hàng các tỉnh thành phố khác trên toàn quốc:</p>
                <p> Đối với các tỉnh thành phố lớn: thời gian nhận hàng thường từ 1-3 ngày sau khi HMK gởi hàng.</p>
                <p> Đối với các tỉnh, huyện, xã vùng sâu: thời gian nhận hàng có thể lên đến 5-7 ngày hoặc hơn tùy thuộc vào đơn vị vận chuyển.</p>
                <p> Thời gian giao hàng có thể thay đổi dựa trên địa chỉ nhận hàng và điều kiện vận chuyển. Chúng tôi sẽ cố gắng hết sức để giao sản phẩm đến bạn trong thời gian ngắn nhất có thể và cung cấp thông tin cụ thể về thời gian dự kiến khi bạn đặt hàng.</p>
                <p>-<strong>Lưu ý:</strong>trong trường hợp khách hàng chưa nhận được hàng trong vòng 1 tuần, quý khách vui lòng liên hệ HMK hotline : 1900 6897 để được hỗ trợ nhanh nhất.</p>
                <h3>Phí vận chuyển</h3>
                <p> Các chi phí vận chuyển sẽ được tính toán dựa trên địa chỉ giao hàng và trọng lượng sản phẩm. Khách hàng sẽ nhận thông tin chi tiết về phí vận chuyển trong quá trình thanh toán.</p>
                <h2>Kiểm tra hàng hóa
                </h2>
                <h3>Trạng thái của hàng hóa</h3>
                <p> Mọi sản phẩm được kiểm tra kỹ lưỡng trước khi giao đến tay khách hàng. Chúng tôi cam kết cung cấp sản phẩm chất lượng và đúng với mô tả khi quý khách nhận hàng.</p>
                <h3>Quy trình kiểm tra khi nhận hàng</h3>
                <p> Khi nhận được sản phẩm, quý khách vui lòng kiểm tra kỹ lưỡng trước khi ký nhận.</p>
                <p> Nếu có bất kỳ vấn đề nào liên quan đến chất lượng, hãy thông báo ngay cho ViVi Eyewear qua hotline: 1900 6897 để chúng tôi có thể hỗ trợ bạn trong việc đổi/trả hàng theo quy định.</p>
                <h2>Chính sách đổi/trả hàng</h2>
                <h3>Chính sách đổi/trả hàng ViVi</h3>
                <p>Chúng tôi chấp nhận việc đổi/trả hàng trong các trường hợp sau:</p>
                <p> Sản phẩm không đúng với mô tả trên trang web của chúng tôi.</p>
                <p> Sản phẩm bị hỏng hoặc có lỗi từ phía nhà sản xuất.</p>
                <h3>Yêu cầu đổi/trả hàng</h3>
                <p> Để yêu cầu đổi/trả hàng, vui lòng liên hệ với chúng tôi trong vòng 7 kể từ ngày nhận hàng. HMK Eyewear sẽ hỗ trợ bạn trong việc xử lý đổi/trả hàng theo quy định.</p>
            </div>
            <img style={{ display: "block", margin: "0 auto" }} src={storeImage} alt="Store" />
        </div>
    )
}
export default DeliveryPage;