// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/locator/_LocatorSettingsBuilder",["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],function(g,c,d){return{provideLocatorSettings:function(e){var b=e.getInfographic();return b&&b.getType()===d.LOCATOR_TABLE?c(b.getContentInitPromise(),function(){var a=b.getInnerInfographic();return c(a.getFilterRanges(),function(b){return c(a.getSummaryInfos(),function(c){var d=a.canExportToExcel(),e=
c&&c.length,h=b&&b.length&&a.getNumPointsTotal(),f={hasTitle:a.hasTitle(),exportSettings:d&&{canExportToExcel:!0,exportToExcel:function(){return a.exportToExcel()}},viewSettings:e&&{summaryInfos:c},filter:h&&{filterRanges:b,getNumPointsTotal:function(){return a.getNumPointsTotal()},getNumPointsShown:function(){return a.getNumPointsShown()},onContentUpdated:function(){}}};g.after(a,"onContentUpdated",function(){f.filter.onContentUpdated()});return f})})}):null}}});