
import {
  StaticPage1,
  StaticPage2,
  StaticPage3
} from '../components/Templates.jsx';

const routes = [
  { path: '/page1',
    exact: true,
    comp: StaticPage1
  },
  { path: '/page2',
    comp: StaticPage2
  },
  { path: '/page3',
    comp: StaticPage3
  }
];

module.exports = {
  routes
}
