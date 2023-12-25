import "./PaymentPage.scss";
function PaymentPage(){
    return(
        <div classname= "inner">
            <div classname="content" style={{ textAlign: "center"}}>
                <div classname =" title">Chính sách thanh toán</div>
                <ul>
                    <li>Giao hàng tận nơi và được kiểm tra hàng trước khi thanh toán.</li>
                    <li> Khách hàng có thanh toán chuyển khoản hoặc thanh toán sau khi nhận hàng.</li>
                    <li>Với những đơn cắt cận, quí khách vui lòng chuyển khoản cọc trước 50% – 100% tổng giá trị đơn hàng.</li>
                </ul>
            </div>
        </div>
    )
}
export default PaymentPage;