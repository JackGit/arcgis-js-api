// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/utils/ZoomUtil",["dojo/_base/lang","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(n,l,p,m,g){function q(a){if(a.__zoomInfo&&1!==a.__zoomInfo.scale){var b=a.__zoomInfo;b.isFitPageScale=g.compareEqual(b.scale,d._getFitPageScale(b,a),2);b.isFitPageWidthScale=g.compareEqual(b.scale,d._getFitPageWidthScale(b,a),2);b.isFitPageHeightScale=
g.compareEqual(b.scale,d._getFitPageHeightScale(b,a),2);return b}return a.__zoomInfo={scale:1,originalW:a.getScrollableContainer().offsetWidth,originalH:a.getScrollableContainer().offsetHeight,isFitPageScale:!1,isFitPageWidthScale:!1,isFitPageHeightScale:!1}}function h(a){var b=a.__zoomInfo;return b?!g.compareEqual(b.originalW,a.getScrollableContainer().offsetWidth,2)||!g.compareEqual(b.originalH,a.getScrollableContainer().offsetHeight,2):!1}function f(a,b,c,e){if(b){e=e||d.getZoomInfo(a).scale;var f=
Math.max(.05,Math.min(10,b.scale))||1;a.__zoomInfo=b;a.__zoomAnimation&&a.__zoomAnimation.stop();if(c&&c.showAnimation)return a.__zoomAnimation=p.animateProperty({duration:200,properties:{p:{start:e,end:f,easing:"linear"}},progressFunction:function(b,c,d){k(a,c,1===d)},endFunction:function(){delete a.__zoomAnimation}}),a.__zoomAnimation.promise;k(a,f,!0)}else a.__zoomInfo=null,k(a,1,!0)}function k(a,b,c){var d=a.scalableContainer.style,f=1!==b?"0% 0%":"",g=1!==b?"scale("+b+")":"",h=l("webkit")?"webkitTransformOrigin":
"transformOrigin",k=l("webkit")?"webkitTransform":"transform";d[h]=f;d[k]=g;a.__zoomInfo&&(a.__zoomInfo.scale=b);a.syncFillerContainer();c&&a.emitZoomChangedEvent()}var d={getZoomInfo:function(a){return n.mixin({},q(a))},setZoomInfo:function(a,b,c){return f(a,b,c)},zoomIn:function(a,b){var c=d.getZoomInfo(a);c.scale+=.2;return f(a,c,b)},zoomOut:function(a,b){var c=d.getZoomInfo(a);c.scale-=.2;return f(a,c,b)},zoomToFitPage:function(a,b){var c=d.getZoomInfo(a);if(h(a)||!c.isFitPageScale){c=c.scale;
d.reset(a);var e=d.getZoomInfo(a);e.scale=d._getFitPageScale(e,a);return f(a,e,b,c)}},zoomToFitPageWidth:function(a,b){var c=d.getZoomInfo(a);if(h(a)||!c.isFitPageWidthScale){c=c.scale;d.reset(a);var e=d.getZoomInfo(a);e.scale=d._getFitPageWidthScale(e,a);return f(a,e,b,c)}},zoomToFitPageHeight:function(a,b){var c=d.getZoomInfo(a);if(h(a)||!c.isFitPageHeightScale){c=c.scale;d.reset(a);var e=d.getZoomInfo(a);e.scale=d._getFitPageHeightScale(e,a);return f(a,e,b,c)}},_getFitPageScale:function(a,b){var c=
b.getCurrentPageDim(),e=(a.originalW-d._getPrettyOffset(b).w)/c.w;a=(a.originalH-d._getPrettyOffset(b).h)/c.h;return Math.min(e,a)},_getFitPageWidthScale:function(a,b){return(a.originalW-d._getPrettyOffset(b).w-m.getScrollbarSize().w)/b.getCurrentPageDim().w},_getFitPageHeightScale:function(a,b){return(a.originalH-d._getPrettyOffset(b).h-m.getScrollbarSize().h)/b.getCurrentPageDim().h},setZoomPercent:function(a,b,c){var e=d.getZoomInfo(a);e.scale=b/100;return f(a,e,c)},setBestZoom:function(a){var b=
d.getZoomInfo(a),c=a.getCurrentPageDim();(b.originalW<c.w||b.originalH<c.h)&&d.zoomToFitPage(a)},_getPrettyOffset:function(a){return{w:30+a.renderOptions.minLeft+a.renderOptions.minRight,h:30+a.renderOptions.minTop+a.renderOptions.minBottom}},reset:function(a){f(a,null)}};return d});