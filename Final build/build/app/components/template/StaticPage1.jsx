import React from 'react';
import MediaQuery from 'react-responsive';

export default class StaticPage1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page1">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="background">
                 <div className="empty"></div>
                <div className="container">
                
                    <div className="text_box">
                <h1>Giới thiệu</h1>
                <p>Thành lập:</p>
                <p>Ngày 16/06/1996 Đặng Lê Nguyên Vũ thành lập Trung Nguyên tại Buôn Ma Thuột – thủ phủ cà phê Việt Nam, Với số vốn đầu tiên là chiếc xe đạp cọc cạch cộng với niềm tin và ý chí mãnh liệt của tuổi trẻ cùng với khát vọng xây dựng một thương hiệu cà phê nổi tiếng, đưa hương vị cà phê Việt Nam lan tỏa khắp thế giới.
                </p>
                </div>
            <div className="btn_container">
            <div className="instruction_text">Chọn Tiếp tục.</div>
                <div className="button_div"><a href="#" className="button" >Tiếp tục</a></div>
            
            </div>
                
                </div>
             
              
              </div>
            </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
        <div className="content">
            <div className="background">
                 <div className="empty"></div>
                <div className="container">
                
                    <div className="text_box">
                <h1>Giới thiệu</h1>
                <p>Thành lập:</p>
                <p>Ngày 16/06/1996 Đặng Lê Nguyên Vũ thành lập Trung Nguyên tại Buôn Ma Thuột – thủ phủ cà phê Việt Nam, Với số vốn đầu tiên là chiếc xe đạp cọc cạch cộng với niềm tin và ý chí mãnh liệt của tuổi trẻ cùng với khát vọng xây dựng một thương hiệu cà phê nổi tiếng, đưa hương vị cà phê Việt Nam lan tỏa khắp thế giới.
                </p>
                </div>
            <div className="btn_container">
            <div className="instruction_text">Chọn Tiếp tục.</div>
                <div className="button_div"><a href="#" className="button" >Tiếp tục</a></div>
            
            </div>
                
                </div>
             
              
              </div>
            </div>
            </MediaQuery>
            
            
          <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)'>
            <div className="content">
             <h1 className="white"> This course is best view in portrait Mode. Please reorient your mobile to portrait mode. </h1>
            </div>
          </MediaQuery>
            
            
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) '>
      <div className="content">
            <div className="background">
                 <div className="empty"></div>
                <div className="container">
                
                    <div className="text_box">
                <h1>Giới thiệu</h1>
                <p>Thành lập:</p>
                <p>Ngày 16/06/1996 Đặng Lê Nguyên Vũ thành lập Trung Nguyên tại Buôn Ma Thuột – thủ phủ cà phê Việt Nam, Với số vốn đầu tiên là chiếc xe đạp cọc cạch cộng với niềm tin và ý chí mãnh liệt của tuổi trẻ cùng với khát vọng xây dựng một thương hiệu cà phê nổi tiếng, đưa hương vị cà phê Việt Nam lan tỏa khắp thế giới.
                </p>
                </div>
            <div className="btn_container">
            <div className="instruction_text">Chọn Tiếp tục.</div>
                <div className="button_div"><a href="#" className="button" >Tiếp tục</a></div>
            
            </div>
                
                </div>
             
              
              </div>
            </div>
        </MediaQuery>
      </div>
        )
      }
    }