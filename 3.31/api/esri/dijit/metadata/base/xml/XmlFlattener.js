// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/xml/XmlFlattener","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ./xmlUtil ../../../../kernel".split(" "),function(g,k,h,m,l,n){g=g(null,{constructor:function(b){k.mixin(this,b)},flatten:function(b,a){var c={domIndex:{},domList:[],nNsPfx:0,nsPfxByUri:{},gxePfxByUri:{}};a&&(c.gxePfxByUri=this._makeGxePfxByUri(a));this._flattenDom({domData:c},b.documentElement,"");return{valuesByPath:c.domIndex,paths:c.domList,prefixesByUri:c.nsPfxByUri}},flattenNode:function(b,
a){a={domIndex:{},domList:[],nNsPfx:0,nsPfxByUri:{},gxePfxByUri:a};this._flattenDom({domData:a},b,null);return a.domIndex},_flattenDom:function(b,a,c){var d=b.domData,e=l.nodeTypes.ELEMENT_NODE,f=this._flattenDomQN(d,a);null!=c&&(f=c+"/"+f);this._flattenDomValue(d,a,f);h.forEach(a.attributes,function(a){var b=this._flattenDomQN(d,a);this._flattenDomValue(d,a,f+"/@"+b)},this);h.forEach(a.childNodes,function(a){a.nodeType===e&&this._flattenDom(b,a,f)},this)},_flattenDomQN:function(b,a,c){var d=c=a.localName,
e=null;if(a=a.namespaceURI)a in b.gxePfxByUri?e=b.gxePfxByUri[a]:a in b.nsPfxByUri?e=b.nsPfxByUri[a]:(b.nNsPfx++,e="_"+b.nNsPfx,b.nsPfxByUri[a]=e),d=e+":"+c;return d},_flattenDomValue:function(b,a,c){a=this._getDomNodeText(a);c in b.domIndex?b.domIndex[c].push(a):(b.domIndex[c]=[a],b.domList.push(c))},_getDomNodeText:function(b){return l.getNodeText(b)},_makeGxePfxByUri:function(b){var a={};b&&h.forEach(b.getNamespaces(),function(b){b.prefix&&b.uri&&(a[b.uri]=b.prefix)});return a}});m("extend-esri")&&
k.setObject("dijit.metadata.base.xml.XmlFlattener",g,n);return g});