import Routes from '../config/routes';
import ConfigData from '../config/Config';
import _ from 'lodash';

let _lessonLocation,
    _suspendData,
    _pageStatusList = [],
    currentModule,
    currentTopic,
    currentPage,
    _courseMenu = Routes.routes,
    _totalModules = _.size(_courseMenu.module);

switch (ConfigData.config.tracking.complianceType) {
  case 1:

    break;
  case 2:
    //Need to add SCORM1.2 Code
    break;
  case 3:
    //Need to add SCORM2004 Code
    break;
  case 4:
    _lessonLocation = localStorage.getItem('lesson_location');
    _suspendData = localStorage.getItem('suspend_data');

    break;
}

if(_lessonLocation == null || _lessonLocation == '') {
  if(_totalModules == 1) {
    _lessonLocation = '01|01';
  } else {
    _lessonLocation = '01|01|01';
  }
}

if(_suspendData == null || _suspendData == '') {
  _.forEach(_courseMenu.module, function (moduleData, i) {
    if(_totalModules == 1) {
      _.forEach(moduleData.topic, function (topicData, i) {
        _pageStatusList[i] = [];
        _.forEach(topicData.page, function (pageData, j) {
          _pageStatusList[i].push(0);
        });
      });
    } else {
      _pageStatusList[i] = [];
      _.forEach(moduleData.topic, function (topicData, j) {
        _pageStatusList[i][j] = [];
        _.forEach(topicData.page, function (pageData, k) {
          _pageStatusList[i][j].push(0);
        });
      });
    }
  });
}

if(_totalModules == 1) {
  currentModule = 1;
  currentTopic = Number(_lessonLocation.split('|')[0]);
  currentPage = Number(_lessonLocation.split('|')[1]);
} else {
  currentModule = Number(_lessonLocation.split('|')[0]);
  currentTopic = Number(_lessonLocation.split('|')[1]);
  currentPage = Number(_lessonLocation.split('|')[2]);
}

console.log('test: ', currentModule,', ',currentTopic,', ',currentPage);
export function getCourseRoute () {
  console.log('currentModule: ', currentModule);
  return [currentModule, currentTopic, currentPage];
}

export function getCourseLocation () {
  return _lessonLocation;
}

export function getPageStatusList () {
  return _pageStatusList;
}

export function updatePageStatusList() {
  //Code Needs to be added to update the pageStatusList
}

export function getCourseProgress () {
  //Code needs to be added to get the course progress
}

export function getTopicProgress () {
  //Code needs to be added to get the topic progress
}

export function getModuleProgress () {
  //Code needs to be added to get the module progress
}

export function updateAssessmentScore () {
  //Code needs to be added to update the assessment score
}

export function getAssessmentScore () {
  //Code needs to be added to get the assessment score
}
