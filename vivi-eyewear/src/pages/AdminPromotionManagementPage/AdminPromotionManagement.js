import React, { useState } from "react";
import "./AdminPromotionManagementPage.scss"; // File CSS cho trang Promotion Management
import PromotionList from "../../components/PromotionList/PromotionList"; // Component PromotionList

const PromotionManagementPage = () => {
    const promotions = [
        {
          id: 1,
          programName: "Giảm giá Black Friday",
          startTime: "2024-11-29",
          endTime: "2024-11-30",
          promotionType: "Voucher",
          status: "Active",
        },
        {
          id: 2,
          programName: "Quà tặng Đầu năm",
          startTime: "2025-01-01",
          endTime: "2025-01-07",
          promotionType: "Hàng tặng kèm",
          status: "Inactive",
        },
        // Thêm thông tin khuyến mãi khác nếu cần
      ];
    

  return (
    <div className="promotion-management-page">
        <div className="header">
          <h2>QUẢN LÝ CHƯƠNG TRÌNH KHUYẾN MÃI</h2>
          <div className="header-buttons">
          <button onClick={() => console.log("Thêm")}>Thêm</button>
          <button onClick={() => console.log("Sửa")}>Sửa</button>
          <button onClick={() => console.log("Xóa")}>Xóa</button>
        </div>
        </div>
        <PromotionList promotions={promotions} />
   
    
    </div>
  );
};

export default PromotionManagementPage;
