// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/layers/features/processors/SymbolProcessor","require exports ../../../../../renderers ../../../../../core/executeAsync ../../../../../core/MapPool ../../../../../core/promiseUtils ../../../../../core/SetPool ../../../../../renderers/support/jsonUtils ../../../engine/webgl/rendererInfoUtils ../../../engine/webgl/Utils ../../../engine/webgl/mesh/factories/WGLMeshFactory".split(" "),function(m,t,u,y,q,r,v,w,z,f,A){function x(a,b){f.isMarkerSymbol(a)||f.isLineSymbol(a)?
b.add(a):f.isFillSymbol(a)&&(b.add(a),a.outline&&"none"!==a.outline.style&&b.add(a.outline))}function B(a,b){b.has(a)||b.set(a,new Set);var k=a.text;a=b.get(a);b=k.length;for(var c=0;c<b;c++){var h=k.charCodeAt(c);a.add(h)}}Object.defineProperty(t,"__esModule",{value:!0});m=function(){function a(b){this.type="symbol";this._symbolToMosaicItemMap=new Map;this._symbolToMosaicItemMap.clear();this.configuration=b.configuration;this.service=b.service;this.spatialReference=b.spatialReference;this.tileRenderer=
b.tileRenderer}a.prototype.destroy=function(){this._symbolToMosaicItemMap.clear()};a.prototype.getMeshData=function(b,a){return a&&a.features&&0!==a.features.length?this._processFeatures(b,a.features).then(function(a){return{tileKey:b.id,data:a}}):r.resolve({tileKey:b.id,data:null})};a.prototype.setConfiguration=function(b){this.configuration=b;this.factory=this.renderer=this.rendererInfo=null};a.prototype.getFactory=function(){this.factory||(this.factory=this._createFactory());return this.factory};
a.prototype.getRenderer=function(){this.renderer||(this.renderer=this._createRenderer());return this.renderer};a.prototype.getRendererInfo=function(){this.rendererInfo||(this.rendererInfo=this._createRendererInfo());return this.rendererInfo};a.prototype._createFactory=function(){if(!this.configuration)return null;var b={fields:this.service.fields,typeIdField:this.service.typeIdField,types:this.service.types};return A.default.from(this.getRenderer(),b,this._symbolToMosaicItemMap,this.service.geometryType,
this.service.objectIdField,this.spatialReference,this.configuration.devicePixelRatio)};a.prototype._createRenderer=function(){return this.configuration?w.fromJSON(this.configuration.renderer):null};a.prototype._createRendererInfo=function(){return this.configuration?z.createRendererInfo(w.fromJSON(this.configuration.renderer),this.spatialReference,{fields:this.service.fields}):null};a.prototype._processFeatures=function(b,a){var c=this;return a&&a.length?this._getMosaicItems(a).then(function(){return c._writeFeatures(b,
a)}):r.resolve(null)};a.prototype._writeFeatures=function(a,k){var b=this,h=0,f=this.getFactory(),l=f.createMeshData(k.length),g={viewingMode:"",scale:a.scale};return y(function(){var a=k[h++],b=h===k.length;f.write(l,a,g);return b}).then(function(){return b._encodeDisplayData(l)})};a.prototype._encodeDisplayData=function(a){var b={};a.encode(b,[]);return b};a.prototype._getReturnCentroid=function(a){function b(a){if(!a)return!1;a=a.type;return"simple-marker"===a||"picture-marker"===a||"text"===a}
if("esriGeometryPolygon"!==this.service.geometryType)return!1;switch(a.type){case "simple":return b(a.symbol);case "unique-value":return b(a.defaultSymbol)||a.uniqueValueInfos.some(function(a){return b(a.symbol)});case "class-breaks":return b(a.defaultSymbol)||a.classBreakInfos.some(function(a){return b(a.symbol)});default:return!0}};a.prototype._getMosaicItems=function(a){a=v.acquire();for(var b=q.acquire(),c=this.getRenderer(),h=0,m=c.getSymbols();h<m.length;h++){var l=m[h];f.isTextSymbol(l)?B(l,
b):x(l,a)}(c instanceof u.UniqueValueRenderer||c instanceof u.ClassBreaksRenderer)&&(c=c.backgroundFillSymbol)&&x(c,a);var g=this._symbolToMosaicItemMap,n=q.acquire(),p=[],d=0;a.forEach(function(a){g.has(a.id)||(n.set(d,a),p.push({symbol:a.toJSON(),id:d}),d++)});b.forEach(function(a,b){if(g.has(b.id)){var c=g.get(b.id).glyphMosaicItems,e=[];a.forEach(function(a){if(c&&c.length<a||!c[a])e[a]=a});0<e.length&&(n.set(d,b),p.push({symbol:b.toJSON(),id:d,glyphIds:e}),d++)}else{n.set(d,b);var f=[];a.forEach(function(a){return f.push(a)});
p.push({symbol:b.toJSON(),id:d,glyphIds:f});d++}});if(0<p.length)return this.tileRenderer.getMaterialItems(p).then(function(a){for(var b=0;b<a.length;b++){var c=a[b],e=n.get(c.id);if(e)if(f.isTextSymbol(e))if(g.has(e.id)){if(e=g.get(e.id).glyphMosaicItems,c=c.mosaicItem.glyphMosaicItems)for(var d=0;d<c.length;d++)null!=c[d]&&(e[d]=c[d])}else g.set(e.id,c.mosaicItem);else g.set(e.id,c.mosaicItem)}q.release(n)});v.release(a);q.release(b);return r.resolve()};return a}();t.SymbolProcessor=m});