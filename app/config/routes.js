
import {
  Introduction,
  CourseObjective,
  StaticPage3,
  StaticPage4,
  StaticPage5,
  StaticPage6,
  Interactivity5,
  Interactivity6,
  Interactivity7,
  Interactivity1,
  DragDrop1
  
} from '../components/Templates.jsx';

const routes = [
  { path: '/page1',
    exact: true,
    comp: Introduction
  },
  { path: '/page2',
    comp: CourseObjective
  },
  { path: '/page3',
    comp: StaticPage3
  },
  { path: '/page4',
    comp: StaticPage4
  },
  { path: '/page5',
    comp: StaticPage5
  },
  { path: '/page6',
    comp: Interactivity5
  },
  { path: '/page7',
    comp: Interactivity6
  },
    { path: '/page8',
    comp: Interactivity7
  },
  { path: '/page10',
    comp: DragDrop1
  },
  { path: '/page11',
    comp: StaticPage6
  }
];

module.exports = {
  routes
}
