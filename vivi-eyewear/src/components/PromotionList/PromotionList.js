import React from "react";

const PromotionList = ({ promotions }) => {
  return (
    <div className="promotion-list">
      <h2>Danh sách khuyến mãi</h2>
      <table className="promotion-table">
        <thead>
          <tr>
            <th>Tên chương trình</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
            <th>Hình thức</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promotion) => (
            <tr key={promotion.id}>
              <td>{promotion.programName}</td>
              <td>{promotion.startTime}</td>
              <td>{promotion.endTime}</td>
              <td>{promotion.promotionType}</td>
              <td>{promotion.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromotionList;
