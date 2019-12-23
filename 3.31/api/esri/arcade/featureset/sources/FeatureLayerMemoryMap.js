// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var p=function(k,h){p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,l){h.__proto__=l}||function(h,l){for(var m in l)l.hasOwnProperty(m)&&(h[m]=l[m])};return p(k,h)};return function(k,h){function q(){this.constructor=k}p(k,h);k.prototype=null===h?Object.create(h):(q.prototype=h.prototype,new q)}}();
define("esri/arcade/featureset/sources/FeatureLayerMemoryMap","require exports ../../../graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../polyfill/promiseUtils ../../../geometry/geometryEngineAsync".split(" "),function(p,k,h,q,l,m,f,n){return function(k){function b(a){var c=k.call(this,a)||this;c.declaredClass="esri.layers.featureset.sources.FeatureLayerMemory";c._removeGeometry=!1;c._overrideFields=null;c.allf=null;a.spatialReference&&(c.spatialReference=a.spatialReference);
c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;if(!1===c._layer.loaded)throw Error("Can only create Feature FeatureSets from Loaded FeatureLayers. Use FeatureLayer or FeatureCollection classes");void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&(c._removeGeometry=!1===a.includeGeometry);return c}__extends(b,k);b.prototype._maxQueryRate=function(){return m.defaultMaxRecords};b.prototype.end=function(){return this._layer};b.prototype.optimisePagingFeatureQueries=
function(a){};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=f.create(function(c,d){a._initialiseFeatureSet();c(a)}));return this._loadPromise};b.prototype._initialiseFeatureSet=function(){if(!this._layer.getMap())throw Error("Can only use featuresets with layers attached to map");null==this.spatialReference&&(this.spatialReference=this._layer.getMap().spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);var a=this._layer.getOutFields();
if(1!==a.length||"*"!==a[0]){for(var c=[],d=0,e=this.fields;d<e.length;d++){var g=e[d];if("esriFieldTypeOID"===g.type)c.push(g);else for(var b=0,f=a;b<f.length;b++){var h=f[b];if(h.toLowerCase()===g.name.toLowerCase()){c.push(g);break}}}this.fields=c}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{c=[];a=[];d=0;for(e=this.fields;d<e.length;d++)if(g=e[d],"esriFieldTypeOID"===g.type)c.push(g),a.push(g.name);else for(b=0,
f=this._overrideFields;b<f.length;b++)if(h=f[b],h.toLowerCase()===g.name.toLowerCase()){c.push(g);a.push(g.name);break}this.fields=c;this._overrideFields=a}this.objectIdField=this._layer.objectIdField;this._databaseType=m.FeatureServiceDatabaseType.Standardised;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};b.prototype._isInFeatureSet=function(a){return m.IdState.InFeatureSet};b.prototype._transformSetWithIdChanges=function(a){};b.prototype._candidateIdTransform=function(a){return a};
b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):f.resolve(this._wset)};b.prototype._getFilteredSet=function(a,c,d,b,g){var e=this;try{return this._ensureLoaded().then(function(){if(null===e._wset){var b=[];e._allFeatures().forEach(function(a){void 0===a.geometry&&(a.geometry=null);var c=a.attributes[e._layer.objectIdField];b.push(c);e._featureCache[c]=a});e._wset=
new l([],b,!1,null)}var f=e._wset._known.slice(0);e._checkCancelled(g);return e.fetchAndRefineFeaturesByWhere(f,d,g).then(function(d){e._checkCancelled(g);return null!==c?e.fetchAndRefineFeaturesSpatially(d,c,a,g).then(function(a){return new l([],a,!1,null)}):new l([],d,!1,null)})})}catch(r){return f.reject(r)}};b.prototype.executeSpatialRelationTest=function(a,c,d,e){if(null===a.geometry)return f.resolve(!1);switch(c){case "esriSpatialRelEnvelopeIntersects":return c=m.shapeExtent(d),a=m.shapeExtent(a.geometry),
n.intersects(c,a);case "esriSpatialRelIntersects":return n.intersects(d,a.geometry);case "esriSpatialRelContains":return n.contains(d,a.geometry);case "esriSpatialRelOverlaps":return n.overlaps(d,a.geometry);case "esriSpatialRelWithin":return n.within(d,a.geometry);case "esriSpatialRelTouches":return n.touches(d,a.geometry);case "esriSpatialRelCrosses":return n.crosses(d,a.geometry);case "esriSpatialRelRelation":return n.relate(d,a.geometry,e)}};b.prototype.executeWhereTest=function(a,c){return c.testFeature(a)};
b.prototype.fetchAndRefineFeaturesSpatially=function(a,c,d,e){var b=[];e=[];var h="";0<=d.indexOf("esriSpatialRelRelation")&&(h=d.split(":")[1],d="esriSpatialRelRelation");for(var k=0;k<a.length;k++){var l=this._featureFromCache(a[k]);e.push(this.executeSpatialRelationTest(l,d,c,h))}return 0===e.length?f.resolve(b):f.all(e).then(function(c){for(var d=0;d<a.length;d++)!0===c[d]&&b.push(a[d]);return b})};b.prototype.fetchAndRefineFeaturesByWhere=function(a,c,d){d=[];if(null===c)return f.resolve(a);
for(var b=0;b<a.length;b++){var g=this._featureFromCache(a[b]);this.executeWhereTest(g,c)&&d.push(a[b])}return f.resolve(d)};b.prototype._getFeatures=function(a,c,d,b){b=[];-1!==c&&void 0===this._featureCache[c]&&b.push(c);for(var e=a._lastFetchedIndex;e<a._known.length&&!(a._lastFetchedIndex+=1,void 0===this._featureCache[a._known[e]]&&(a._known[e]!==c&&b.push(a._known[e]),b.length>d));e++);return 0===b.length?f.resolve("success"):f.reject(Error("Unaccounted for Features. Not in Feature Collection"))};
b.prototype._refineSetBlock=function(a,c,b){return f.resolve(a)};b.prototype._stat=function(a,c,b,e,g,h,k){return f.resolve({calculated:!1})};b.prototype._canDoAggregates=function(a,c,b,e,g){return f.resolve(!1)};b._cloneAttr=function(a){var c={},b;for(b in a)c[b]=a[b];return c};b.prototype.cloneAttr=function(a){for(var c={},b=0,e=this.fields;b<e.length;b++){var g=e[b];c[g.name]=a[g.name]}return c};b.prototype.relationshipMetaData=function(){return[]};b.prototype.nativeCapabilities=function(){return{title:this._layer.name,
source:this,canQueryRelated:!1,capabilities:{queryRelated:{supportsOrderBy:!1,supportsPagination:!1}},databaseType:this._databaseType,requestStandardised:!1,maxRecordCount:1E3}};b.prototype._allFeatures=function(){var a=this;null==this.allf&&(this.allf=[],this._layer.graphics.forEach(function(b){a.allf.push(new h(!0===a._removeGeometry?null:b.geometry,null,a.cloneAttr(b.attributes)))}));return this.allf};b.prototype.canBeBigDataFeatureSet=function(){return!1};b.prototype.shouldBeResolvedAsBigData=
function(){return!1};b.prototype.queryAttachments=function(a,b,d,e){return f.resolve([])};b.prototype.getFeatureByObjectId=function(a,b){var c=this,e=null;this._layer.graphics.forEach(function(b){b.attributes[c.objectIdField]===a&&(e=b)});return f.resolve(e)};return b}(q)});