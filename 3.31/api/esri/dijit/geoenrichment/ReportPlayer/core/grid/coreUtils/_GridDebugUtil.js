// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/_GridDebugUtil",["esri/dijit/geoenrichment/when","../../../_devConfig"],function(h,e){var c={},k=0;c.refreshStart=function(a){e.table.printGridRefresh&&(a=c._getGridInfo(a,!0),console.log("AdjustableGrid.js "+a.key+" \x3d\x3e refresh \x3d\x3e start"))};c.refreshEnd=function(a){e.table.printGridRefresh&&h(a.getRenderPromise(),function(){var f=c._getGridInfo(a,!1);console.log("AdjustableGrid.js "+f.key+" \x3d\x3e refresh \x3d\x3e end ("+
f.refreshTime+" ms)")})};c._getGridInfo=function(a,c){var b;if(a.isReportContainerPageGrid)b="Page grid";else{var d=[];for(b=a.parentWidget;b;){d.push(b);if(b.isReportContainerPageGrid)break;b=b.parentWidget}b=d[d.length-1].getFieldCells().indexOf(d[d.length-2]);for(var d=d.length,e="",f=0;f<d;f++)e+="\x3e";void 0===a._debugId&&(a._debugId=k++);b="panel "+b+" "+e+"("+a._debugId+")"}var g;c?a._degubStartTime=(new Date).getTime():g=(new Date).getTime()-a._degubStartTime;return{key:b,refreshTime:g}};
return c});