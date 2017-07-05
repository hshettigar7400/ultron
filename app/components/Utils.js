import config from '../config/Config';
import routes from '../config/routes';

let uagent = navigator.userAgent.toLowerCase();

export const isMobile =  uagent.search("mobile") > -1;

export let isCourseStarted = false;

export let selectedLanguage = 'en';

export let TextComponent;

export const configData = config.config;

export const Routes = routes;

export function getDoubleDigit (num) {
  if(num < 10)
    num = '0'+num

  return num;
}
