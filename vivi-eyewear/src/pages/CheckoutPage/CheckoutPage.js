import "./CheckoutPage.scss"
// import { useNavigate } from "react-router-dom";
// import {ContainerCard} from ""

const Checkout = () => {
    // const navigate = useNagvigate();
    // handleCheckout = () =>{
    //     navigate("/vivi-eyewear/cart");
    // };
    // const handleOrderClick = () => {
    //     // Xử lý sự kiện khi click nút Đặt hàng
    //   };
    return(
        <>
            <div className="container py-5 d-block">
                <div className="brand d-none d-lg-flex">
                    <div className="d-flex justify-content-center pb-3">Thông tin vận chuyển</div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Số điện thoại"
                    />
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Họ tên"
                    />
                     <div className="d-flex justify-content-center pb-3">Chi tiết địa chỉ </div>
                     <input
                        type="detailaddress"
                        className="form-control"
                        placeholder="Địa chỉ cụ thể"
                    />
                    <input
                        type="Road"
                        className="form-control"
                        placeholder="Đường"
                    />
                    <input
                        type="district"
                        className="form-control"
                        placeholder="Thị xã/Huyện"
                    />
                    <input
                        type="City"
                        className="form-control"
                        placeholder="Tỉnh/Thành phố"
                    /> 
                </div>
                <div className="brand d-none d-lg-flex">
                <div className="tm-tnh">
                    <div className="tm-tnh-inner">
                        <div className="gamepad-cart-small-parent">
                        {/* <GamepadCartSmall
                            dimensions="/g922500x500-1@2x.png"
                            gamepadCartSmallPosition="relative"
                            gamepadCartSmallFlexShrink="0"
                        /> */}
                        <div className="gn000001-parent">
                            <div className="vnd">GN000001</div>
                            <div className="vnd">450,000 VND</div>
                        </div>
                        </div>
                    </div>
                    <div className="frame-group">
                        <div className="frame-container">
                        <div className="frame-container">
                            <div className="frame-container">
                            <div className="tm-tnh-parent">
                                <div className="vnd">Tạm tính:</div>
                                <div className="vnd">450,000 VND</div>
                            </div>
                            {/* <UnderLineIcon
                                imageDimensions="/underline@2x.png"
                                underLineIconWidth="422px"
                                underLineIconOpacity="0.4"
                                underLineIconPosition="relative"
                            /> */}
                            </div>
                            <div className="ph-vn-chuyn-parent">
                            <div className="vnd">Phí vận chuyển:</div>
                            <div className="vnd">30,000 VND</div>
                            </div>
                        </div>
                        {/* <UnderLineIcon
                            imageDimensions="/underline@2x.png"
                            underLineIconWidth="422px"
                            underLineIconOpacity="0.4"
                            underLineIconPosition="relative"
                        /> */}
                        </div>
                        <div className="tng-cng-parent">
                        <div className="vnd">Tổng cộng:</div>
                        <div className="vnd">480,000 VND</div>
                        </div>
                    </div>
                    <div className="frame-parent2">
                        <div className="radio-button-parent">
                        <img
                            className="radio-button-icon"
                            alt=""
                            src="/radio-buttonoff@2x.png"
                        />
                        <div className="vnd">Chuyển khoản ngân hàng</div>
                        </div>
                        {/* <div className="bkash-parent">
                        <Bkash bkashPosition="relative" bkashFlexShrink="0" />
                        <Visa visaPosition="relative" visaFlexShrink="0" />
                        <Mastercard mastercardPosition="relative" mastercardFlexShrink="0" />
                        <Nagad nagadPosition="relative" nagadFlexShrink="0" />
                        </div> */}
                    </div>
                    <div className="radio-button-group">
                        <img
                        className="radio-button-icon"
                        alt=""
                        src="/radio-buttonon@2x.png"
                        />
                        <div className="vnd">Thanh toán khi nhận hàng</div>
                    </div>
                    {/* <CouponCode /> */}
                    </div>
                    
                </div>
                <button
                    // onClickHandler={handleOrderClick}
                    value="button-value"
                    title="Đặt hàng"
                    buttonPosition="absolute"
                    buttonTop="752px"
                    buttonLeft="506px"
                    />
            </div>
        </>
    )
}
export default Checkout;