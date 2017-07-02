import config from '../config/Config';
import routes from '../config/routes';

let uagent = navigator.userAgent.toLowerCase();

export const isMobile =  uagent.search("mobile") > -1;

export let isCourseStarted = false;

export let selectedLanguage = '';

export const configData = config.config;

export const Routes = routes;
