
import {
  StaticPage1,
  StaticPage2,
  StaticPage3,
  StaticPage4,
  Interactivity1,
  Interactivity2,
  DragDrop1,
  StaticPage5
} from '../components/Templates.jsx';

const routes = {
  module: [{
      topic: [{
        page: [{
          path: '/page1',
          exact: true,
          comp: StaticPage1
        }, {
          path: '/page2',
          comp: StaticPage2
        }, {
          path: '/page3',
          comp: StaticPage3
        }, {
          path: '/page4',
          comp: StaticPage4
        }, {
          path: '/page5',
          comp: Interactivity1
        }, {
          path: '/page6',
          comp: Interactivity2
        }, {
          path: '/page1',
          comp: DragDrop1
        }, {
          path: '/page8',
          comp: StaticPage5
        }]
      }, {
        page: [{
          path: '/page1',
          exact: true,
          comp: StaticPage1
        }, {
          path: '/page2',
          comp: StaticPage2
        }, {
          path: '/page3',
          comp: StaticPage3
        }, {
          path: '/page4',
          comp: StaticPage4
        }]
      }, {
        page: [{
          path: '/page1',
          exact: true,
          comp: StaticPage1
        }, {
          path: '/page2',
          comp: StaticPage2
        }, {
          path: '/page3',
          comp: StaticPage3
        }, {
          path: '/page4',
          comp: StaticPage4
        }, {
          path: '/page5',
          comp: Interactivity1
        }, {
          path: '/page6',
          comp: Interactivity2
        }]
      }]
  }, {
      topic: [{
        page: [{
          path: '/page1',
          exact: true,
          comp: StaticPage1
        }, {
          path: '/page2',
          comp: StaticPage2
        }]
      }, {
        page: [{
          path: '/page1',
          exact: true,
          comp: StaticPage1
        }, {
          path: '/page2',
          comp: StaticPage2
        }, {
          path: '/page3',
          comp: StaticPage3
        }]
      }]
  }]
}

module.exports = {
  routes
}
