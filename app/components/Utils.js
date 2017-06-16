let uagent = navigator.userAgent.toLowerCase();

export const isMobile =  uagent.search("mobile") > -1;
