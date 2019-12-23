// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/AnalysisAreaJsonUtil",["esri/graphic","esri/dijit/PopupTemplate"],function(h,k){function e(a,b){if(!a)return null;a.getLayer()&&(a=new h(a.geometry,a.symbol,a.attributes,a.infoTemplate));a=a.toJson();b&&delete a.infoTemplate;return a}function f(a){if(!a)return null;if(a instanceof h)return a;var b=a.infoTemplate&&new k(a.infoTemplate);delete a.infoTemplate;a=new h(a);b&&a.setInfoTemplate(b);return a}function d(a){var b=
{},c;for(c in a){var g=a[c];if("string"===typeof g||"number"===typeof g&&!isNaN(g))b[c]=g}return b}return{areasToJson:function(a,b){var c=b&&b.excludeInfoTemplate;return a.map(function(a){var b=d(a);b.feature=e(a.feature,c);b.location=a.location&&e(a.location,c);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(function(a){return e(a,c)});b.geographies=a.geographies;b.buffer=a.buffer;return b})},combinedAreasInfoToJson:function(a){var b=d(a);b.groups=a.groups&&a.groups.map(function(a){var b=
d(a);b.indexes=a.indexes.slice();b.location=a.location&&e(a.location);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(e);return b});return b},areasFromJson:function(a){return a.map(function(a){var b=d(a);b.feature=f(a.feature);b.location=a.location&&f(a.location);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(f);b.geographies=a.geographies;b.buffer=a.buffer;return b})},combinedAreasInfoFromJson:function(a){var b=d(a);b.groups=a.groups&&a.groups.map(function(a){var b=
d(a);b.indexes=a.indexes.slice();b.location=a.location&&f(a.location);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(f);return b});return b}}});