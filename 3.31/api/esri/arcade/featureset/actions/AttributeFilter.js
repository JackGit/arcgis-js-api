// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var p=function(n,c){p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,g){l.__proto__=g}||function(l,g){for(var c in g)g.hasOwnProperty(c)&&(l[c]=g[c])};return p(n,c)};return function(n,c){function l(){this.constructor=n}p(n,c);n.prototype=null===c?Object.create(c):(l.prototype=c.prototype,new l)}}();
define("esri/arcade/featureset/actions/AttributeFilter","require exports ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../polyfill/promiseUtils ../../polyfill/sql/WhereClause ../../../SpatialReference".split(" "),function(p,n,c,l,g,q,m,t,u){var r=function(c){function e(b){var a=c.call(this,b)||this;a.declaredClass="esri.arcade.featureset.actions.AttributeFilter";a._maxProcessing=1E3;a._parent=b.parentfeatureset;b.whereclause instanceof t.WhereClause?(a._whereclause=
b.whereclause,a._whereClauseFunction=null):(a._whereClauseFunction=b.whereclause,a._whereclause=null);return a}__extends(e,c);e.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):
(this.fields=[],this.objectIdField=this.typeIdField="",this.spatialReference=new u({wkid:4326}),this.geometryType=g.layerGeometryEsriConstants.point)};e.prototype._getSet=function(b){var a=this;return null===this._wset?this._ensureLoaded().then(function(){return a._parent._getFilteredSet("",null,a._whereclause,null,b)}).then(function(d){a._checkCancelled(b);a._wset=null!==a._whereClauseFunction?new l(d._candidates.slice(0).concat(d._known.slice(0)),[],d._ordered,a._clonePageDefinition(d.pagesDefinition)):
new l(d._candidates.slice(0),d._known.slice(0),d._ordered,a._clonePageDefinition(d.pagesDefinition));return a._wset}):m.resolve(this._wset)};e.prototype._isInFeatureSet=function(b){var a=this._parent._isInFeatureSet(b);if(a===g.IdState.NotInFeatureSet)return a;a=this._idstates[b];return void 0===a?g.IdState.Unknown:a};e.prototype._getFeature=function(b,a,d){return this._parent._getFeature(b,a,d)};e.prototype._getFeatures=function(b,a,d,h){return this._parent._getFeatures(b,a,d,h)};e.prototype._featureFromCache=
function(b){return this._parent._featureFromCache(b)};e.prototype.executeWhereClause=function(b){return this._whereclause.testFeature(b)};e.prototype.executeWhereClauseDeferred=function(b){if(null!==this._whereClauseFunction)try{var a=this._whereClauseFunction(b);return m.isThenable(a)?a:m.resolve(a)}catch(d){return m.reject(d)}return m.resolve(this.executeWhereClause(b))};e.prototype._fetchAndRefineFeatures=function(b,a,d){var h=this,f=new l([],b,!1,null),e=Math.min(a,b.length);return this._parent._getFeatures(f,
-1,e,d).then(function(){h._checkCancelled(d);if(null==h._whereClauseFunction){for(var k=0;k<e;k++){var f=h._parent._featureFromCache(b[k]);!0===h.executeWhereClause(f)?h._idstates[b[k]]=g.IdState.InFeatureSet:h._idstates[b[k]]=g.IdState.NotInFeatureSet}return"success"}for(var c=[],k=0;k<e;k++)f=h._parent._featureFromCache(b[k]),c.push(h.executeWhereClauseDeferred(f));return m.all(c).then(function(d){for(var f=0;f<a;f++)h._idstates[b[f]]=!0===d[f]?g.IdState.InFeatureSet:g.IdState.NotInFeatureSet;return"success"})})};
e.prototype._getFilteredSet=function(b,a,d,e,f){var c=this;null===this._whereClauseFunction&&(null!==d?null!==this._whereclause&&(d=q.combine(this._whereclause,d)):d=this._whereclause);return this._ensureLoaded().then(function(){return c._parent._getFilteredSet(b,a,d,e,f)}).then(function(a){c._checkCancelled(f);return null!==c._whereClauseFunction?new l(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,c._clonePageDefinition(a.pagesDefinition)):new l(a._candidates.slice(0),a._known.slice(0),
a._ordered,c._clonePageDefinition(a.pagesDefinition))})};e.prototype._stat=function(b,a,d,c,f,e,k){var h=this;if(null!==this._whereClauseFunction)return null===f&&""===d&&null===c?this._manualStat(b,a,e,k):m.resolve({calculated:!1});var g=this._whereclause;null!==f&&null!==this._whereclause&&(g=q.combine(this._whereclause,f));return this._parent._stat(b,a,d,c,g,e,k).then(function(g){return!1===g.calculated?null===f&&""===d&&null===c?h._manualStat(b,a,e,k):{calculated:!1}:g})};e.prototype._canDoAggregates=
function(b,a,d,c,f){if(null!==this._whereClauseFunction)return m.resolve(!1);null!==f?null!==this._whereclause&&(f=q.combine(this._whereclause,f)):f=this._whereclause;return null===this._parent?m.resolve(!1):this._parent._canDoAggregates(b,a,d,c,f)};e.prototype._getAggregatePagesDataSourceDefinition=function(b,a,d,c,f,e,g){if(null===this._parent)return m.reject(Error("Should never be called"));null!==f?null!==this._whereclause&&(f=q.combine(this._whereclause,f)):f=this._whereclause;return this._parent._getAggregatePagesDataSourceDefinition(b,
a,d,c,f,e,g)};return e}(c);c._featuresetFunctions.filter=function(c){if("function"===typeof c)return new r({parentfeatureset:this,whereclause:c});var e=null;c instanceof t.WhereClause&&(e=c);return new r({parentfeatureset:this,whereclause:e})};return r});