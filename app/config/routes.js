
import {
  StaticPage1,
  StaticPage2,
  StaticPage3,
  StaticPage4,
  StaticPage5
} from '../components/Templates.jsx';

const routes = [
  { path: '/page3',
    comp: StaticPage3
  },
  { path: '/page4',
    comp: StaticPage4
  }
];

module.exports = {
  routes
}
