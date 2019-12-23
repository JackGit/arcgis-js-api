// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/VariableUtil",["dojo/_base/array","dojo/dom-construct"],function(f,c){return{getToggleGroups:function(a,b,d){var c={},e=[];f.forEach(b,function(b){e.push(this.getToggleGroup(a,b,c,d))},this);return{groups:e,hash:c}},getToggleGroup:function(a,b,d,c){d=d||{};a=a&&a.getStates(b);var e={value:b,states:a};d[b]=e;if(a){var g=!1;f.forEach(a.ids,function(a){b==a?g=!0:c||(d[a]=e)});g||(b=e.value=a.ids[0],d[b]=e)}return e},createCategoryNode:function(a,b){b=c.create("div",
{"class":"DataCategoryItem DataBrowser_Clickable"},b);var d=c.create("div",{"class":"DataCategoryItemIconMargins"},b);b.icon=c.create("div",{"class":"DataCategoryItemIcon "+this.getCategoryImageClass(a)},d);c.create("div",{"class":"DataCategoryItemLabel TrimWithEllipses",innerHTML:a&&a.name||""},b);return b},updateCategoryNode:function(a,b){a.icon.className="DataCategoryItemIcon "+this.getCategoryImageClass(b);a.children[1].innerHTML=b&&b.name||""},getCategoryImageClass:function(a){a&&"string"!=typeof a&&
(a=a.id);var b="DataCategoryImage";a&&(a=a.toLowerCase().replace(/(\s|_|\d|\(|\))/g,""),(a=a.split(/\W+/)[0])&&(b+=" DataCategoryImage_"+a));return b},parseRangeValue:function(a){var b=a.split("-");2>b.length&&"+"==a.charAt(a.length-1)&&(b=[a.substr(0,a.length-1)]);a=Number(b[0]);b=2>b.length?a:Number(b[1]);return isNaN(a)||isNaN(b)||a>b?null:{min:a,max:b}}}});