import {
    Introduction,
    CourseObjective,
    why_kaizen,
    StaticPage4,
    Interactivity5,
    Interactivity1,
    Question_1,
    Question_2

} from '../components/Templates.jsx';

const routes = [
    {
        path: '/page1',
        exact: true,
        comp: Introduction
  },
    {
        path: '/page2',
        comp: CourseObjective
  },
  
    {
        path: '/page3',
        comp: Interactivity5
  },
      {
        path: '/page4',
        comp: why_kaizen
  },
    
     {
        path: '/page5',
        comp: Question_1
  },
     {
        path: '/page6',
        comp: Question_2
  },
];

module.exports = {
    routes
}
