import React from 'react';

export default class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-page4">
        <div className="content">
          <div className="bg">
            <div className="intro white">
              <div className="flex-container">
                <div className="left-side">
                  <div className="intro_heading">
                    <h1> The National Examination Program "NEP" </h1>
                  </div>
                <div className="container">
                  <div className="box1">
                    <img src="/app/assets/images/template/icon_1.png"/>
                    <div className="img_caption">Risk Based Approach</div>
                  </div>
                  <div className="box2">
                    <img src="/app/assets/images/template/icon_2.png"/>
                    <div className="img_caption">Emphasis on Team work</div>
                  </div>
                  <div className="box3">
                    <img src="/app/assets/images/template/icon_3.png"/>
                    <div className="img_caption">Enhance training of examiners</div>
                  </div>
                  <div className="box4">
                    <img src="/app/assets/images/template/icon_4.png"/>
                    <div className="img_caption">Hire senior industry professionals</div>
                  </div>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
