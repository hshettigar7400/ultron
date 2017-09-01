import config from '../config/Config';

let uagent = navigator.userAgent.toLowerCase();

export const isMobile =  uagent.search("mobile") > -1;

export let isCourseStarted = false;

export let selectedLanguage = '';

export let configData = config.config;
