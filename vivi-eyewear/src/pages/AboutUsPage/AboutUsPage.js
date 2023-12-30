import "./AboutUsPage.scss";
import BaoAnGiaKhiem from "../../assets/BaoAnGiaKiem.jpg";
import Ribishachi from "../../assets/ribi.jpg";

function AboutUsPageCopy() {
  return (
    <div className="container-fluid d-flex justify-content-center text-color-default ">
      <div className="container px-5 ">
        <div className="row">
          <div className="introduction-content col-xl-9 col-md-6 col-12 ">
            <h2 className="about-us-page-title about-us-page-text-styles">
              Giới thiệu
            </h2>
            <p className="about-us-page-text-styles">
              Tên thương hiệu: ViVi Eyewear (Virtual Vision Eyewear)
            </p>
            <p className="about-us-page-text-styles">
              ViVi Eyewear là sự kết hợp của hai từ "Vivid" và "Vision". "Vivid"
              có nghĩa là sống động, rõ ràng, còn "Vision" có nghĩa là tầm nhìn.
              Ý nghĩa rằng sản phẩm của Vivi Eyewear có thể giúp khách hàng nhìn
              thế giới một cách sống động và rõ ràng hơn, thông qua công nghệ
              thực tế ảo. Ngoài ra, ViVi Eyewear cũng có thể được hiểu là sự kết
              hợp của hai từ "Virtual" và "Vision". "Virtual" có nghĩa là ảo,
              còn "Vision" có nghĩa là tầm nhìn. ViVi Eyewear là một thương hiệu
              mắt kính tiên phong trong việc ứng dụng công nghệ thực tế ảo để
              mang đến cho khách hàng trải nghiệm mua sắm và sử dụng sản phẩm
              mới lạ và độc đáo.
            </p>
            <h2 className="about-us-page-title about-us-page-text-styles">
              Tầm nhìn
            </h2>
            <p className="about-us-page-text-styles">
              Tầm nhìn của ViVi Eyewear là trở thành một thương hiệu phân phối
              mắt kính hàng đầu thế giới, tiên phong trong việc ứng dụng công
              nghệ thực tế ảo để mang đến cho khách hàng trải nghiệm mua sắm và
              sử dụng sản phẩm mới lạ và độc đáo.
            </p>
            <h2 className="about-us-page-title about-us-page-text-styles">
              Sứ mệnh
            </h2>
            <p className="about-us-page-text-styles">
              ViVi Eyewear hướng đến việc cung cấp một trải nghiệm mua sắm kính
              mắt trực tuyến hoàn hảo và tạo ra sự tự tin, tiện lợi cho mọi
              người bằng cách cung cấp những sản phẩm kính mắt tốt nhất và trải
              nghiệm thực tế nhất. Hãy để Vivi Eyewear trở thành thương hiệu
              kính mắt thời trang dành riêng cho tương lai của bạn.
            </p>
            <h2 className="about-us-page-title about-us-page-text-styles">
              Châm ngôn
            </h2>
            <i className="about-us-page-text-styles">
              “The world is yours to see”
            </i>
            <h2 className="about-us-page-title about-us-page-text-styles">
              Giá trị cốt lõi
            </h2>
            <p className="about-us-page-text-styles">
              <span>
                Chất lượng: Sản phẩm của ViVi Eyewear cam kết đảm bảo đầu ra về
                chất lượng, được tạo ra và tư vấn bởi các chuyên gia đầu ngành.
              </span>{" "}
              <br />
              <span>
                Uy tín: Tôn chỉ hàng đầu của ViVi Eyewear là làm hài lòng khách
                hàng. Sự hài lòng của khách hàng chính là niềm vui, là kim chỉ
                nam và là tầm nhìn, sứ mệnh của thương hiệu. Chúng tôi cam kết
                mang đến những sản phẩm chất lượng, đa dạng kiểu dáng và phù hợp
                nhất đến với khách hàng.
              </span>{" "}
              <br />
              <span>
                Lựa chọn hàng đầu: ViVi Eyewear luôn hướng đến việc trở thành sự
                lựa chọn tốt nhất trong việc giúp mọi người trong hành trình bảo
                vệ đôi mắt và tận hưởng những giá trị tốt đẹp ngay trước mắt.
              </span>
            </p>
          </div>
          <div className="loyal-customer-content col-xl-3 col-md-6 col-12">
            <div>
              <h2 className="about-us-page-title about-us-page-text-styles">
                Đại sứ thương hiệu
              </h2>
            </div>
            <div>
              <div className="about-us-page-text-styles text-center">
                <img
                  className="loyal-customer-img"
                  src={BaoAnGiaKhiem}
                  alt="Bảo An - Gia Khiêm"
                />
              </div>
              <div className="about-us-page-text-styles">
                <i>
                  Đôi bạn Bảo An và Gia Khiêm là đại sứ thương hiệu cho ViVi
                  Eyewear khu vực miền Bắc.
                </i>
              </div>
              <div></div>
            </div>
            <div>
              <div className="about-us-page-text-styles text-center">
                <img
                  className="loyal-customer-img"
                  src={Ribishachi}
                  alt="RibiSachi"
                />
              </div>
              <div className="about-us-page-text-styles">
                <i>
                  Ribi Sachi là đại sứ thương hiệu cho ViVi Eyewear khu vực miền
                  Namc.
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPageCopy;
