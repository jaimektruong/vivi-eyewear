import "./AboutUsPage.scss";
import BaoAnGiaKhiem from "../../assets/BaoAnGiaKiem.jpg";
import Ribishachi from "../../assets/ribi.jpg";

function AboutUsPage() {
  return (
    <div className="inner">
      <div className="content-box-about-us-page about-us-page-margin d-flex gap-52">
        <div className="introduction-content">
          <h2 className="title-about-us-page about-us-page-margin">
            Giới thiệu
          </h2>
          <p className="about-us-page-margin">
            Tên thương hiệu: ViVi Eyewear (Virtual Vision Eyewear)
          </p>
          <p className="about-us-page-margin">
            ViVi Eyewear là sự kết hợp của hai từ "Vivid" và "Vision". "Vivid"
            có nghĩa là sống động, rõ ràng, còn "Vision" có nghĩa là tầm nhìn. Ý
            nghĩa rằng sản phẩm của Vivi Eyewear có thể giúp khách hàng nhìn thế
            giới một cách sống động và rõ ràng hơn, thông qua công nghệ thực tế
            ảo. Ngoài ra, ViVi Eyewear cũng có thể được hiểu là sự kết hợp của
            hai từ "Virtual" và "Vision". "Virtual" có nghĩa là ảo, còn "Vision"
            có nghĩa là tầm nhìn. ViVi Eyewear là một thương hiệu mắt kính tiên
            phong trong việc ứng dụng công nghệ thực tế ảo để mang đến cho khách
            hàng trải nghiệm mua sắm và sử dụng sản phẩm mới lạ và độc đáo.
          </p>
          <h2 className="title-about-us-page about-us-page-margin">Tầm nhìn</h2>
          <p className="about-us-page-margin">
            Tầm nhìn của ViVi Eyewear là trở thành một thương hiệu phân phối mắt
            kính hàng đầu thế giới, tiên phong trong việc ứng dụng công nghệ
            thực tế ảo để mang đến cho khách hàng trải nghiệm mua sắm và sử dụng
            sản phẩm mới lạ và độc đáo.
          </p>
          <h2 className="title-about-us-page about-us-page-margin">Sứ mệnh</h2>
          <p className="about-us-page-margin">
            ViVi Eyewear hướng đến việc cung cấp một trải nghiệm mua sắm kính
            mắt trực tuyến hoàn hảo và tạo ra sự tự tin, tiện lợi cho mọi người
            bằng cách cung cấp những sản phẩm kính mắt tốt nhất và trải nghiệm
            thực tế nhất. Hãy để Vivi Eyewear trở thành thương hiệu kính mắt
            thời trang dành riêng cho tương lai của bạn.
          </p>
          <h2 className="title-about-us-page about-us-page-margin">
            Châm ngôn
          </h2>
          <i className="about-us-page-margin">“The world is yours to see”</i>
          <h2 className="title-about-us-page about-us-page-margin">
            Giá trị cốt lõi
          </h2>
          <p>
            <span className="about-us-page-margin">
              Chất lượng: Sản phẩm của ViVi Eyewear cam kết đảm bảo đầu ra về
              chất lượng, được tạo ra và tư vấn bởi các chuyên gia đầu ngành.
            </span>
            <span className="about-us-page-margin">
              Uy tín: Tôn chỉ hàng đầu của ViVi Eyewear là làm hài lòng khách
              hàng. Sự hài lòng của khách hàng chính là niềm vui, là kim chỉ nam
              và là tầm nhìn, sứ mệnh của thương hiệu. Chúng tôi cam kết mang
              đến những sản phẩm chất lượng, đa dạng kiểu dáng và phù hợp nhất
              đến với khách hàng.
            </span>
            <span className="about-us-page-margin">
              Lựa chọn hàng đầu: ViVi Eyewear luôn hướng đến việc trở thành sự
              lựa chọn tốt nhất trong việc giúp mọi người trong hành trình bảo
              vệ đôi mắt và tận hưởng những giá trị tốt đẹp ngay trước mắt.
            </span>
          </p>
        </div>
        <div className="loyal-customer-content d-flex flex-column">
          <div>
            <h2 className="title-about-us-page about-us-page-margin">
              Khách hàng thân thiết
            </h2>
          </div>
          <div>
            <div className="about-us-page-margin">
              <img src={BaoAnGiaKhiem} alt="Bảo An - Gia Khiêm" />
            </div>
            <div className="about-us-page-margin">
              <i>
                Đôi bạn Bảo An và Gia Khiêm tin tưởng sử dụng các bộ sản phẩm
                của ViVi Eyewear.
              </i>
            </div>
            <div></div>
          </div>
          <div>
            <div className="about-us-page-margin">
              <img src={Ribishachi} alt="Hoa hậu Thuỳ Tiên" />
            </div>
            <div className="about-us-page-margin">
              <i>
                Ribi Sachi sử dụng mắt kính của ViVi EyeWear trong các short
                diễn viral trên mạng.
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
