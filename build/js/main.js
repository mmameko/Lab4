"use strict";

// system.js - http://github.com/mrdoob/system.js
'use strict';var System={browser:function(){var a=navigator.userAgent;return/Arora/i.test(a)?"Arora":/Opera|OPR/.test(a)?"Opera":/Maxthon/i.test(a)?"Maxthon":/Vivaldi/i.test(a)?"Vivaldi":/YaBrowser/i.test(a)?"Yandex":/Chrome/i.test(a)?"Chrome":/Epiphany/i.test(a)?"Epiphany":/Firefox/i.test(a)?"Firefox":/Mobile(\/.*)? Safari/i.test(a)?"Mobile Safari":/MSIE/i.test(a)?"Internet Explorer":/Midori/i.test(a)?"Midori":/Safari/i.test(a)?"Safari":!1}(),os:function(){var a=navigator.userAgent;return/Android/i.test(a)?
"Android":/CrOS/i.test(a)?"Chrome OS":/iP[ao]d|iPhone/i.test(a)?"iOS":/Linux/i.test(a)?"Linux":/Mac OS/i.test(a)?"Mac OS":/windows/i.test(a)?"Windows":!1}(),support:{canvas:!!window.CanvasRenderingContext2D,localStorage:function(){try{return!!window.localStorage.getItem}catch(a){return!1}}(),file:!!window.File&&!!window.FileReader&&!!window.FileList&&!!window.Blob,fileSystem:!!window.requestFileSystem||!!window.webkitRequestFileSystem,getUserMedia:!!window.navigator.getUserMedia||!!window.navigator.webkitGetUserMedia||
!!window.navigator.mozGetUserMedia||!!window.navigator.msGetUserMedia,requestAnimationFrame:!!window.mozRequestAnimationFrame||!!window.webkitRequestAnimationFrame||!!window.oRequestAnimationFrame||!!window.msRequestAnimationFrame,sessionStorage:function(){try{return!!window.sessionStorage.getItem}catch(a){return!1}}(),svg:function(){try{return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}catch(a){return!1}}(),webgl:function(){try{return!!window.WebGLRenderingContext&&
!!document.createElement("canvas").getContext("experimental-webgl")}catch(a){return!1}}(),worker:!!window.Worker}};

SystemJS.config({
	baseUrl: "/"
});

console.log("Hello, World!");