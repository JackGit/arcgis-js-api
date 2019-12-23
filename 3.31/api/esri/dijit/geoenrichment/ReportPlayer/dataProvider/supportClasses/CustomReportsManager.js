// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/CustomReportsManager","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./PortalManager ./ReportTemplateData ./StandardGraphicReportTemplates esri/dijit/geoenrichment/utils/PortalUtil esri/dijit/geoenrichment/utils/PortalQueryUtil esri/dijit/geoenrichment/utils/UrlUtil ../../config ../../countryConfig".split(" "),function(e,l,p,f,m,q,r,t,u,g,n,v){var w=e(null,{cache:null,constructor:function(){this.cache=
{}}});e={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",GALLERY_INFOGRAPHIC_TYPEKEYWORD:"esriWebGalleryInfographicReport",GALLERY_INFOGRAPHIC_USER:"esri_reports",_reportsCache:null,resetCache:function(){this._reportsCache=new w},getCustomReports:function(a){var c=this,b=g.getPortalUrl(a.portalUrl);return f(m.getPortalInfo(b),function(d){var h=d.user.username,h={q:u.combineQueryString({type:"Report Template",typeKeywords:a.typeKeywords,
owner:!a.publicOnly&&h}),sortField:"modified",sortOrder:"desc"};return t.queryCommon(g.combine(b,"sharing/rest/search"),h).then(function(b){b=b.map(function(b){return c.prepareCustomReportFromItem(b,d.portal.url,a)});return c._getCountryReports(b,a.countryID)})})},_getCountryReports:function(a,c){return a&&("*"===c?a:a.filter(function(a){return!a.countries||a.countries.split(",").some(function(a){return c===a.trim()})}))},prepareCustomReportFromItem:function(a,c,b){var d=l.mixin({},a.properties||
a.details);d.isGraphicReport="true"===d.isGraphicReport;d.isMultiFeature="true"===d.isMultiFeature;d.reportID=a.id;c={title:a.title,templateData:c&&new q(a,c),modified:a.modified instanceof Date?a.modified.getTime():a.modified};b&&b.attachItemProperty&&(c[b.attachItemProperty]=a);l.mixin(c,d);return c},getCustomReportByID:function(a){var c=this,b=this._reportsCache.cache[a.reportID];if(b)return b;b=g.getPortalUrl(a.portalUrl);return this._reportsCache.cache[a.reportID]=f(m.getPortalInfo(b),function(b){return b.user.getItem(a.reportID).then(function(d){return d&&
c.prepareCustomReportFromItem(d,b.portal.url,a)})}).otherwise(function(b){delete c._reportsCache.cache[a.reportID];return a.ignoreError?null:(new p).reject(b)})},tryFindReportIdByAlias:function(a){var c=this,b=r.aliasToID(a.countryID,a.reportID);if(!b)return null;var d=g.getPortalUrl(a.portalUrl);return f(this.getCustomReportByID({reportID:b,portalUrl:d,ignoreError:!0,attachItemProperty:a.attachItemProperty}),function(b){return b?b&&(a.returnObject?b:b.reportID):f(c.getCustomReports({portalUrl:d,
countryID:a.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0,attachItemProperty:a.attachItemProperty}),function(b){function c(a){a=a.split(".");return Number((Number(a[0])+Number(a[1])/100).toFixed(2))}var d=c(n.jsapiVersion),e,f,g=-Infinity,h=Infinity;b.forEach(function(b){if(b.playerAlias===a.reportID){var k=c(b.jsapiVersion);d>=k&&k>g&&(g=k,e=b);d<k&&k<h&&(h=k,f=b)}});b=e||f;a.strictVersionCheck&&b&&b.jsapiVersion!==n.jsapiVersion&&(b=null);return b&&(a.returnObject?b:
b.reportID)})})},itemUpdated:function(a){delete this._reportsCache.cache[a]},getFakeCustomReportByContext:function(a){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:a.countryID,countries:a.countryID,hierarchy:a.hierarchy||v.getHierarchyID(),isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};e.resetCache();return e});