// Copyright 2013 jQuery Foundation and other contributors

define(["util/events"],function(e){var t={}.hasOwnProperty,n={events:e},r=function(t){return typeof t=="function"},i=Array.isArray,s=function(e){if(typeof e!="object"||e.nodeType||e===window)return!1;try{if(e.constructor&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!0},o=function a(){var e,t,n,o,u,f,l=arguments[0]||{},c=1,h=arguments.length,p=!1;typeof l=="boolean"&&(p=l,l=arguments[c]||{},c++),typeof l!="object"&&!r(l)&&(l={});if(c===h)return l;for(;c<h;c++)if((e=arguments[c])!=null)for(t in e){n=l[t],o=e[t];if(l===o)continue;p&&o&&(s(o)||(u=i(o)))?(u?(u=!1,f=n&&i(n)?n:[]):f=n&&s(n)?n:{},l[t]=a(p,f,o)):o!==undefined&&(l[t]=o)}return l},u=function(t,r){var i=function u(e){if(!(this instanceof u))return new u(e);this.constructor&&this.constructor(e)};i.prototype=t;if(r){var s;while(s=r.pop())i.prototype=o(i.prototype,n[s])}return i};return u});