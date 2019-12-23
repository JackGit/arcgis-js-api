// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/geometry","require exports ../Dictionary ../Feature ../ImmutablePointArray ../languageUtils ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ./centroid ../../geometry/jsonUtils".split(" "),function(A,w,k,g,y,d,x,v,t,n,q,u,r,p){Object.defineProperty(w,"__esModule",{value:!0});w.registerFunctions=function(l,m){l.ringisclockwise=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,
1,1);b=[];if(null===a[0])return!1;if(d.isArray(a[0])){var c=0;for(a=a[0];c<a.length;c++)if(f=a[c],f instanceof n)b.push([f.x,f.y]);else throw Error("Invalid Argument");}else if(a[0]instanceof y)b=a[0]._elements;else if(d.isImmutableArray(a[0])){for(var c=0,e=a[0].toArray();c<e.length;c++)if(f=e[c],f instanceof n)b.push([f.x,f.y]);else throw Error("Invalid Argument");0<b.length&&(a[0].get(0),a[0].get(0))}else throw Error("Invalid Argument");return 3>b.length?!1:(new q({rings:[],spatialReference:{wkid:4326}})).isClockwise(b)})};
l.polygon=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof k){if(b=d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof q)throw Error("Illegal Parameter");}else b=a[0]instanceof q?p.fromJson(a[0].toJson()):d.fixSpatialReference(new q(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return d.fixNullGeometry(b)})};l.polyline=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof k){if(b=d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof u)throw Error("Illegal Parameter");}else b=a[0]instanceof u?p.fromJson(a[0].toJson()):d.fixSpatialReference(new u(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return d.fixNullGeometry(b)})};l.point=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof k){if(b=d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof n)throw Error("Illegal Parameter");}else b=a[0]instanceof n?p.fromJson(a[0].toJson()):d.fixSpatialReference(new n(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return d.fixNullGeometry(b)})};l.multipoint=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof k){if(b=d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof t)throw Error("Illegal Parameter");}else b=a[0]instanceof t?p.fromJson(a[0].toJson()):d.fixSpatialReference(new t(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return d.fixNullGeometry(b)})};l.extent=function(c,e){return m(c,e,function(b,f,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);b=null;a[0]instanceof k?b=d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference):a[0]instanceof n?(b={xmin:a[0].x,ymin:a[0].y,xmax:a[0].x,ymax:a[0].y,spatialReference:a[0].spatialReference.toJson()},a[0].hasZ?(b.zmin=a[0].z,b.zmax=a[0].z):a[0].hasM&&(b.mmin=a[0].m,b.mmax=a[0].m),b=p.fromJson(b)):b=a[0]instanceof q?p.fromJson(a[0].getExtent().toJson()):
a[0]instanceof u?p.fromJson(a[0].getExtent().toJson()):a[0]instanceof t?p.fromJson(a[0].getExtent().toJson()):a[0]instanceof x?p.fromJson(a[0].toJson()):d.fixSpatialReference(new x(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return d.fixNullGeometry(b)})};l.geometry=function(c,e){return m(c,e,function(b,f,a){d.pcCheck(a,1,1);b=null;
b=a[0]instanceof g?d.fixSpatialReference(a[0].geometry(),c.spatialReference):a[0]instanceof k?d.fixSpatialReference(g.parseGeometryFromDictionary(a[0]),c.spatialReference):d.fixSpatialReference(p.fromJson(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return d.fixNullGeometry(b)})};l.setgeometry=function(c,e){return m(c,e,function(b,
c,a){d.pcCheck(a,2,2);if(a[0]instanceof g){if(!0===a[0].immutable)throw Error("Feature is Immutable");if(a[1]instanceof v||null===a[1])a[0]._geometry=a[1];else throw Error("Illegal Argument");}else throw Error("Illegal Argument");return d.voidOperation})};l.feature=function(c,e){return m(c,e,function(b,f,a){if(0===a.length)throw Error("Missing Parameters");b=null;if(1===a.length)if(d.isString(a[0]))b=g.fromJson(JSON.parse(a[0]));else if(a[0]instanceof g)b=g.createFromArcadeFeature(a[0]);else if(a[0]instanceof
v)b=g.createFromGraphicLikeObject(a[0],null,null);else if(a[0]instanceof k)b=a[0].hasField("geometry")?a[0].field("geometry"):null,f=a[0].hasField("attributes")?a[0].field("attributes"):null,null!==b&&b instanceof k&&(b=g.parseGeometryFromDictionary(b)),null!==f&&(f=g.parseAttributesFromDictionary(f)),b=g.createFromGraphicLikeObject(b,f,null);else throw Error("Illegal Argument");else{if(2===a.length){f=b=null;if(null!==a[0])if(a[0]instanceof v)b=a[0];else if(b instanceof k)b=g.parseGeometryFromDictionary(a[0]);
else throw Error("Illegal Argument");if(null!==a[1])if(a[1]instanceof k)f=g.parseAttributesFromDictionary(a[1]);else throw Error("Illegal Argument");}else{b=null;f={};if(null!==a[0])if(a[0]instanceof v)b=a[0];else if(b instanceof k)b=g.parseGeometryFromDictionary(a[0]);else throw Error("Illegal Argument");for(var e=1;e<a.length;e+=2){var z=d.toString(a[e]),h=a[e+1];if(null===h||void 0===h||d.isString(h)||isNaN(h)||d.isDate(h)||d.isNumber(h)||d.isBoolean(h)){if(d.isFunctionParameter(h)||!1===d.isSimpleType(h))throw Error("Illegal Argument");
f[z]=h===d.voidOperation?null:h}else throw Error("Illegal Argument");}}b=g.createFromGraphicLikeObject(b,f,null)}b._geometry=d.fixSpatialReference(b.geometry(),c.spatialReference);b.immutable=!1;return b})};l.dictionary=function(c,e){return m(c,e,function(b,c,a){if(0===a.length)return a=new k,a.immutable=!1,a;if(1===a.length&&d.isString(a[0]))try{var f=JSON.parse(a[0]),e=k.convertObjectToArcadeDictionary(f);e.immutable=!1;return e}catch(h){throw Error("Missing Parameters or Illegal Json");}if(0!==
a.length%2)throw Error("Missing Parameters");b={};for(c=0;c<a.length;c+=2)if(f=d.toString(a[c]),e=a[c+1],null===e||void 0===e||d.isString(e)||isNaN(e)||d.isDate(e)||d.isNumber(e)||d.isBoolean(e)||d.isArray(e)||d.isImmutableArray(e)){if(d.isFunctionParameter(e))throw Error("Illegal Argument");b[f]=e===d.voidOperation?null:e}else throw Error("Illegal Argument");a=new k(b);a.immutable=!1;return a})};l.haskey=function(c,e){return m(c,e,function(b,c,a){d.pcCheck(a,2,2);b=d.toString(a[1]);if(a[0]instanceof
g||a[0]instanceof k)return a[0].hasField(b);throw Error("Illegal Argument");})};l.indexof=function(c,e){return m(c,e,function(b,c,a){d.pcCheck(a,2,2);b=a[1];if(d.isArray(a[0])){for(c=0;c<a[0].length;c++)if(d.equalityTest(b,a[0][c]))return c;return-1}if(d.isImmutableArray(a[0])){var e=a[0].length();for(c=0;c<e;c++)if(d.equalityTest(b,a[0].get(c)))return c;return-1}throw Error("Illegal Argument");})};l.angle=function(c,e){return m(c,e,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);
if(!(a[0]instanceof n))throw Error("Illegal Argument");if(!(a[1]instanceof n))throw Error("Illegal Argument");if(2<a.length&&!(a[2]instanceof n))throw Error("Illegal Argument");return 2===a.length?r.angle2D(a[0],a[1]):r.angleBetween2D(a[0],a[1],a[2])})};l.bearing=function(c,e){return m(c,e,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);if(!(a[0]instanceof n))throw Error("Illegal Argument");if(!(a[1]instanceof n))throw Error("Illegal Argument");if(2<a.length&&!(a[2]instanceof n))throw Error("Illegal Argument");
return 2===a.length?r.bearing2D(a[0],a[1]):r.bearingBetween2D(a[0],a[1],a[2])})};l.isselfintersecting=function(c,e){return m(c,e,function(b,e,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);b=a[0];if(b instanceof q)return b.isSelfIntersecting(b);if(b instanceof u)return b=b.paths,r.pathsSelfIntersecting(b);if(b instanceof t)for(e=b.points,a=0;a<e.length;a++)for(var f=0;f<e.length;f++)if(f!==a){for(var g=!0,h=0;h<e[a].length;h++)if(e[a][h]!==e[f][h]){g=!1;break}if(!0===g)return!0}return d.isArray(b)||
d.isImmutableArray(b)?(b=d.autoCastArrayOfPointsToPolyline(b,c.spatialReference),null!==b&&(b=b.paths),r.pathsSelfIntersecting(b)):!1})}}});