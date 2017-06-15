import React from 'react';
import MediaQuery from 'react-responsive';
import update from 'react/lib/update';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, {TouchTransition, Preview} from 'react-dnd-multi-backend';
import DropContainer from './common/DropContainer';
import DragContainer from './common/DragContainer';
import ItemTypes from './common/ItemTypes';

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    }, {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};

class StaticPage3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragbox: [
        {
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        },{
          accepts: [
            ItemTypes.STAR
          ],
          lastDroppedItem: null
        }
      ],
      dropbox: [
        {
          name: 'star',
          type: ItemTypes.STAR
        }, {
          name: 'star',
          type: ItemTypes.STAR
        }
      ],
      droppedBoxNames: [],
      answer: [
        1, 2
      ],
      showFeedback: false
    };
  }

  generatePreview(type, item, style) {
    Object.assign(style, {
      backgroundColor: item.color,
      width: '30px',
      height: '60px',
      padding: '0 15px'
    });
    return <div className="drag-container" style={style}>{item.name}</div>;
  }

  handleDrop(index, item) {
    const {name} = item;
    this.setState(update(this.state, {
      dragbox: {
        [index]: {
          lastDroppedItem: {
            $set: item
          }
        }
      },
      droppedBoxNames: name
        ? {
          $push: [name]
        }
        : {}
    }));

    if (this.state.droppedBoxNames.length === 2) {
      this.setState(update(this.state, {
        showFeedback: {
          $set: true
        }
      }));
    }
  }

  isDropped(boxName) {
    return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  render() {
    const { dragbox, dropbox } = this.state;
    return (
      <div className="static-page3">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/>
                  </div>
                  Nhấp vào từng người để xem lời khuyên.
                  <DragContainer name="star" type={ItemTypes.STAR} isDropped={this.isDropped("star")} key={1}>

                  </DragContainer>

                </div>
                <div className="flex-container">
                  <DropContainer
                    accepts={[ItemTypes.STAR]}
                    lastDroppedItem={dragbox[0].lastDroppedItem}
                    onDrop={item => this.handleDrop(0, item)}
                    imagePath="app/assets/images/template/pic01.png"
                    key={1} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[1].lastDroppedItem}
                      onDrop={item => this.handleDrop(1, item)}
                      imagePath="app/assets/images/template/pic02.png"
                      key={2} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[2].lastDroppedItem}
                      onDrop={item => this.handleDrop(2, item)}
                      imagePath="app/assets/images/template/pic03.png"
                      key={3} />

                    <DropContainer
                      accepts={[ItemTypes.STAR]}
                      lastDroppedItem={dragbox[3].lastDroppedItem}
                      onDrop={item => this.handleDrop(3, item)}
                      imagePath="app/assets/images/template/pic04.png"
                      key={4} />
                </div>

                <div className="button_box">
                  <button name="submit" className="submit_btn">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (max-device-width: 1024px)'>
          <div className="content">
            <div className="background">
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/>

                  </div>

                  Nhấp vào từng người để xem lời khuyên.
                  <div className="star_img">
                    <img src="app/assets/images/template/star.png"/></div>
                </div>
                <div className="flex-container">
                  <div className="box1">
                    <a href="#">
                      <img src="app/assets/images/template/pic01.png"/></a>

                  </div>
                  <div className="box2">
                    <a href="#">
                      <img src="app/assets/images/template/pic02.png"/></a>

                  </div>
                  <div className="box3">
                    <a href="#">
                      <img src="app/assets/images/template/pic03.png"/></a>

                  </div>
                  <div className="box4">
                    <a href="#">
                      <img src="app/assets/images/template/pic04.png"/></a>

                  </div>
                </div>

                <div className="button_box">
                  <button name="submit" className="submit_btn">Submit</button>
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
              <div className="intro white">

                <div className="top-header">
                  Chênh lệch COL – các nguyên nhân gây chênh lệch có thể là?
                </div>
                <div className="instruction_text black">
                  <div className="instruction_img">
                    <img src="app/assets/images/template/hand_icon.png"/></div>

                  <span className="instruction">
                    Nhấp vào từng người để xem lời khuyên.</span>

                  <div className="star_img">
                    <img src="app/assets/images/template/star.png"/></div>

                </div>
              </div>
              <div className="flex-container">
                <div className="box1">
                  <a href="#">
                    <img src="app/assets/images/template/pic01.png"/></a>

                </div>
                <div className="box2">
                  <a href="#">
                    <img src="app/assets/images/template/pic02.png"/></a>

                </div>
                <div className="box3">
                  <a href="#">
                    <img src="app/assets/images/template/pic03.png"/></a>

                </div>
                <div className="box4">
                  <a href="#">
                    <img src="app/assets/images/template/pic04.png"/></a>

                </div>
              </div>

              <div className="button_box">
                <button name="submit" className="submit_btn">Submit</button>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(StaticPage3);
