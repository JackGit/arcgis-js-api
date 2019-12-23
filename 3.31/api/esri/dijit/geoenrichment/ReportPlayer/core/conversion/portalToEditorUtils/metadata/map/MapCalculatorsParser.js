// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/map/MapCalculatorsParser",["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser","./MapTagsUtil","esri/dijit/geoenrichment/utils/ImageUtil"],function(b,h,g,k){var f={parseMapCalculators:function(a,c,d){b.queryJson(a,"Maps").forEach(function(a){b.queryJson(a,"Map").forEach(function(e){var b=f._parsePortalLayers(e),l=f._parseStudyAreas(e),b={fieldName:e.attributes.Name,defaultBasemapId:b.defaultBasemapId,
webMapId:b.webMapId,additionalLayerInfos:f._parseAdditionalLayers(e,c),pinSymbolJson:f._parseSiteLayerPinSymbol(e,d),areaSymbolJsons:l.symbolJsons,areaSymbolRamp:l.ramp,mapScale:Number(e.attributes.Scale)||null};c&&(c.metadata.mapImageInfosHash[a.attributes.Name+"."+e.attributes.Name]=b)})})},_parsePortalLayers:function(a){var c;a=b.queryJson(a,"Layer").filter(function(a){return!!a.attributes.PortalItemId});1<a.length&&(c=a.shift());a=a.shift();return{defaultBasemapId:c&&c.attributes.PortalItemId,
webMapId:a&&a.attributes.PortalItemId}},_parseAdditionalLayers:function(a,c){var d=[];b.queryJson(a,/^(Layer|LocatorResultsLayer|ComparisonResultsLayer)$/).filter(function(a){return!!a.attributes.ServiceUrl||"LocatorResultsLayer"===a.name||"ComparisonResultsLayer"===a.name}).forEach(function(a){if(a.attributes.ServiceUrl)d.push({url:a.attributes.ServiceUrl});else if("LocatorResultsLayer"===a.name){var b=a.tags&&a.tags.filter(function(a){return"Renderer"===a.name})[0],e=c.metadata.locatorCalculatorsHash[a.attributes.CalculatorName];
e.isValid&&d.push({isLocatorLayer:!0,layerName:a.attributes.LayerName,calculatorName:a.attributes.CalculatorName,calculatorInfo:e,rendererJson:b&&h.parseRendererJson(b)})}else"ComparisonResultsLayer"===a.name&&((b=(b=a.tags&&a.tags.filter(function(a){return"Renderer"===a.name})[0])&&h.parseRendererJson(b))&&"esriTS"===b.uniqueValueInfos[0].symbol.type?d[d.length-1].labelRendererJson=b:(e=(e=a.tags&&a.tags.filter(function(a){return"LabelingInfo"===a.name})[0])&&h.parseLabelRendererJson(e),d.push({isComparisonLayer:!0,
calculatorName:a.attributes.CalculatorName,rendererJson:b,labelRendererJson:e})))});return d.length&&d},_parseSiteLayerPinSymbol:function(a,c){var d;if(a=b.queryJson(a,"SiteLayer")[0])if((a=b.queryJson(a,"Symbol")[0])&&"Image"===a.attributes.Type)(c=c.getImageData(a.attributes.Name))&&(d={type:"esriPMS",contentType:k.getContentType(c),imageData:k.base64DataFromDataURL(c),url:a.attributes.Url,width:Number(a.attributes.Width),height:Number(a.attributes.Height),angle:Number(a.attributes.Angle)||0,xoffset:Number(a.attributes.XOffset)||
0,yoffset:Number(a.attributes.YOffset)||0});else if(a&&"Marker"===a.attributes.Type){d=(d=b.queryJson(a,"Fill")[0])&&b.queryJson(d,"Color")[0];var e=(c=b.queryJson(a,"Outline")[0])&&b.queryJson(c,"Color")[0];d={type:"esriSMS",style:"esriSMS"+(a.attributes.Style||"Circle"),size:Number(a.attributes.Size),angle:Number(a.attributes.Angle)||0,xoffset:Number(a.attributes.XOffset)||0,yoffset:Number(a.attributes.YOffset)||0,color:g.parseColorTag(d),outline:c&&{type:"esriSLS",color:g.parseColorTag(e),style:"esriSLS"+
(c.attributes.Style||"Solid"),width:void 0===c.attributes.Width?0:Number(c.attributes.Width)}}}return d},_parseStudyAreas:function(a){var c=(a=b.queryJson(a,"StudyAreasLayer")[0])&&b.queryJson(a,"SymbolsPalette",!0)[0];a=(c&&b.queryJson(c,"Symbol",!0)||[]).map(f._parseAreaSymbol);var d=c&&b.queryJson(c,"SymbolRamp",!0)[0],e;d&&(c=b.queryJson(d,"First",!0)[0],d=b.queryJson(d,"Last",!0)[0],c=c&&b.queryJson(c,"Symbol",!0)[0],d=d&&b.queryJson(d,"Symbol",!0)[0],c&&d&&(e=[c,d].map(f._parseAreaSymbol)));
return{ramp:e,symbolJsons:a}},_parseAreaSymbol:function(a){var c=b.queryJson(a,"Fill")[0],c=c&&b.queryJson(c,"Color")[0],d=(a=b.queryJson(a,"Outline")[0])&&b.queryJson(a,"Color")[0];return{type:"esriSFS",style:"esriSFSSolid",color:g.parseColorTag(c)||[0,0,0,1],outline:a&&{type:"esriSLS",color:g.parseColorTag(d),style:"esriSLS"+(a.attributes.Style||"Solid"),width:void 0===a.attributes.Width?0:Number(a.attributes.Width)}}}};return f});