import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page5">

        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="background">
              <div className="empty"></div>
              <div className="containerbox">
                <div className="top-header">
                  <div className="instruction_text">phần kết luận</div>
                </div>
                <div className="welcome_text">
                  <span>
                    Thương hiệu yêu thích 2012 Cà phê Trung Nguyên là thương hiệu số một tại Việt Nam với số lượng người tiêu dùng cà phê lớn nhất. Có 11 triệu/17 triệu hộ gia đình Việt Nam mua sản phẩm cà phê Trung Nguyên.
                  </span>
                </div>

              </div>

            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>

          <div className="content">
            <div className="background">
              <div className="empty"></div>
              <div className="containerbox">
                <div className="top-header">
                  <div className="instruction_text">phần kết luận</div>
                </div>
                <div className="welcome_text">

                  <span>

                    Thương hiệu yêu thích 2012 Cà phê Trung Nguyên là thương hiệu số một tại Việt Nam với số lượng người tiêu dùng cà phê lớn nhất. Có 11 triệu/17 triệu hộ gia đình Việt Nam mua sản phẩm cà phê Trung Nguyên.

                  </span>
                </div>

              </div>

            </div>
          </div>

        </MediaQuery>

        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)'>
          <div className="content">
            <h1 className="white">
              This course is best view in portrait Mode. Please reorient your mobile to portrait mode.
            </h1>
          </div>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) '>

          <div className="content">
            <div className="background">
              <div className="empty"></div>
              <div className="containerbox">
                <div className="top-header">
                  <div className="instruction_text">phần kết luận</div>
                </div>
                <div className="welcome_text">

                  <span>

                    Thương hiệu yêu thích 2012 Cà phê Trung Nguyên là thương hiệu số một tại Việt Nam với số lượng người tiêu dùng cà phê lớn nhất. Có 11 triệu/17 triệu hộ gia đình Việt Nam mua sản phẩm cà phê Trung Nguyên.

                  </span>
                </div>

              </div>

            </div>
          </div>

        </MediaQuery>

      </div>

    )
  }
}
