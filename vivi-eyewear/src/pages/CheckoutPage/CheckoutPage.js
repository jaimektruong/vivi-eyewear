import React, { useState } from 'react';
import './CheckoutPage.scss'; // Import your CSS file
import { Link, useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import storeImage1 from "../../assets/Visa_Inc._logo.svg.png";
import storeImage2 from "../../assets/MasterCard_Logo.svg.png";
import storeImage3 from "../../assets/MoMo_Logo.png";
import storeImage4 from "../../assets/Logo-ZaloPay-Square.png";

const Navigation_TT = () => {
    return (
        <nav className="checkout-nav">
            <ul>
                <li>
                    <Link to="/tai-khoan">Tài khoản</Link>
                </li>
                <li>/</li>
                <li>
                    <Link to="/gio-hang">Giỏ hàng</Link>
                </li>
                <li>/</li>
                <li>
                    <Link to="/thanh-toan">Thanh toán</Link>
                </li>
            </ul>
        </nav>
    );
};
const CheckoutPage = () => {
    const [discountCode, setDiscountCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [addressDetails, setAddressDetails] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [selectedPayment, setSelectedPayment] = useState(''); // Định nghĩa setSelectedPayment ở đây

    const applyDiscount = () => {
        // Kiểm tra mã giảm giá ở đây (có thể thay bằng logic kiểm tra của bạn)
        if (discountCode === 'YOUR_DISCOUNT_CODE') {
            setAppliedDiscount(true);
            alert('Mã giảm giá đã được áp dụng!');
            // Thực hiện các hành động khi mã giảm giá hợp lệ
        } else {
            alert('Mã giảm giá không hợp lệ!');
            // Xử lý khi mã không hợp lệ, ví dụ: hiển thị thông báo
        }
    };
    const [showModal, setShowModal] = useState(false);

    const handleOrder = () => {
        if (phoneNumber && fullName && addressDetails && street && district && city && selectedPayment) {
            if (selectedPayment === 'bank-transfer') {
                // Redirect to third-party payment page
                window.location.href = '/bank-payment'; // Change this to the actual URL
            } else if (selectedPayment === 'cash-on-delivery') {
                setShowModal(true);
                // Handle other actions for cash on delivery
            }
        } else {
            setShowModal(true);
            // Handle case when information is incomplete
        }
    };

    return (
        <div className="checkout-inner">
            <Navigation_TT />
            <div className="checkout-content">
                <div className="checkout-container">
                    {/* Shipping Information */}
                    <div className="shipping-info">
                        <h2>Thông tin vận chuyển</h2>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Họ tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <h3>Chi tiết địa chỉ</h3>
                        <input
                            type="text"
                            placeholder="Địa chỉ cụ thể"
                            value={addressDetails}
                            onChange={(e) => setAddressDetails(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Đường"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Thị xã/Huyện"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Tỉnh/Thành phố"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary">
                        <ul>
                            <li>
                                <span>GN000001</span>
                                <span>450,000 VND</span>
                            </li>
                            <li>
                                <span>Tạm tính:</span>
                                <span>450,000 VND</span>
                            </li><hr></hr>
                          
                            <li>
                                <span>Phí vận chuyển:</span>
                                <span>30,000 VND</span>
                            </li><hr></hr>
                            
                            <li className="total">
                                <span>Tổng cộng:</span>
                                <span>480,000 VND</span>
                            </li>
                        </ul>
                        <div className="payment-methods">
                            <div className="payment-methods-TT">
                                <input
                                    type="radio"
                                    id="bank-transfer"
                                    name="payment"
                                    value="bank-transfer"
                                    onChange={() => setSelectedPayment('bank-transfer')}
                                />
                                <label htmlFor="bank-transfer">Thanh toán trực tuyến</label>
                                <div className="payment-methods-Icon" >
                                <img src={storeImage1} alt="LogoVisa" />
                                <img src={storeImage2} alt="LogoVisa" />
                                <img src={storeImage3} alt="LogoVisa" />
                                <img src={storeImage4} alt="LogoVisa" />
                                </div>

                            </div>
                            <div className="payment-methods-TT">
                                <input
                                    type="radio"
                                    id="cash-on-delivery"
                                    name="payment"
                                    value="cash-on-delivery"
                                    onChange={() => setSelectedPayment('cash-on-delivery')}
                                />
                                <label htmlFor="cash-on-delivery">Thanh toán khi nhận hàng</label>
                            </div>
                            <div className="discount-section">
                                <input
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button onClick={applyDiscount}>Áp dụng</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button to handle order */}
                <button onClick={handleOrder}>Đặt hàng</button>

                {/* Modal */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {phoneNumber && fullName && addressDetails && street && district && city ? (
                            <p>Đặt hàng thành công! Tiếp tục mua sắm cùng ViVi!</p>
                        ) : (
                            <p>Vui lòng điền đầy đủ thông tin để đặt hàng!</p>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};
export default CheckoutPage;
