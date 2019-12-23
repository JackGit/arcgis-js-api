// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/xml/xmlUtil",["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../kernel"],function(e,f,h,k){var g={nodeTypes:{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},escape:function(c){if(null===c)return null;if(0===c.length)return c;var a,b,d="";for(a=0;a<c.length;a++)b=c.charAt(a),
d="\x26"===b?d+"\x26amp;":"\x3c"===b?d+"\x26lt;":"\x3e"===b?d+"\x26gt;":"'"===b?d+"\x26apos;":'"'===b?d+"\x26quot;":d+b;return d},getNodeText:function(c){var a,b=null,d=this.nodeTypes.TEXT_NODE;if(c.nodeType===this.nodeTypes.ELEMENT_NODE){if("undefined"!==typeof c.textContent&&(a=c.textContent,null!==a&&(a=e.trim(a),0<a.length)))return b=a;f.some(c.childNodes,function(c){if(c.nodeType===d&&(a=c.nodeValue,null!==a&&(a=e.trim(a),0<a.length)))return b=a,!0})}else b=c.nodeValue;return b},makeGxePrefixesByUri:function(c){var a=
{};c&&f.forEach(c,function(b){b.prefix&&b.uri&&(a[b.uri]=b.prefix)});return a},makeGxeUrisByPrefix:function(c){var a={};c&&f.forEach(c,function(b){b.prefix&&b.uri&&(a[b.prefix]=b.uri)});return a},parseFromString:function(c){var a=null,b=null;if(window.DOMParser)try{b=new DOMParser,a=b.parseFromString(c,"text/xml")}catch(d){}return a},supportsParseFromString:function(){return window.DOMParser?!0:!1}};h("extend-esri")&&e.setObject("dijit.metadata.base.xml.xmlUtil",g,k);return g});