// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/legend/LegendBuilder","dojo/_base/declare dojo/aspect dojo/dom-construct dojo/dnd/Moveable esri/dijit/Legend esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/MouseUtil".split(" "),function(h,k,l,m,n,p,q){var c={},r=h(n,{_isSupportedLayerType:function(a){return a&&"esri.layers.GraphicsLayer"===a.declaredClass&&a.renderer&&a.name&&a.graphics.length?!0:a&&a.isLabelsLayer?!1:this.inherited(arguments)},_isLayerDrawingEnabled:function(a){return a&&
"esri.layers.FeatureLayer"===a.declaredClass&&a.renderer&&"heatmap"===a.renderer.type?!0:this.inherited(arguments)},_getServiceTitle:function(a){a._titleForLegend=a._titleForLegend||a.name;return this.inherited(arguments)}});c.createLegend=function(a,e,d,f){function g(){b&&b.destroy();b=null;f&&f.onDestroyed()}function c(){function c(){if(b.domNode){b.domNode.style.left="10px";var a=e.clientHeight-20;b.domNode.style.maxHeight=a+"px";b.domNode.style.top=e.clientHeight-Math.min(a,b.domNode.clientHeight)-
10+"px"}}g();if(p.isNodeInLayout(e)){b=new r({map:a,layerInfos:null},l.create("div",{"class":"esriGEReportPlayer_mapLegend"},e));b.startup();b.own(a.on("before-unload",g));var d=new (h(m,{onMouseDown:function(){for(var a,c=0,d=b.domNode.childNodes.length;c<d;c++)if(q.isMouseOver(b.domNode.childNodes[c])){a=!0;break}a&&this.inherited(arguments)}}))(b.domNode);b.own(d);c();b.own(k.after(b,"_createLegendForLayer",function(a){setTimeout(c);return a}));f&&f.onCreated(b)}}var b;d&&(d.showLegend&&c(),d.addCallback(function(){d.showLegend?
c():g()},"legendBuilder"))};return c});