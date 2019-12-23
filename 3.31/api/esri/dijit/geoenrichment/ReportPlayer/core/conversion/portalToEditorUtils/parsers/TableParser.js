// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/TableParser","dojo/_base/lang esri/dijit/geoenrichment/utils/JsonXmlConverter esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil ../../../supportClasses/DocumentOptions ../../ConversionUtil ../../../sections/SectionTypes ./AlignParser ./_HiddenCellsCollector esri/dijit/geoenrichment/utils/ColorUtil".split(" "),
function(w,r,x,y,z,h,m,A,v,B){var t={parseTableCellAttributes:function(a,c,b){b=b.tableDefaultStyles;c=c||{};a.overrideStyle&&(c.overrideStyle=a.overrideStyle);a.pad&&(c.horizontalPadding=h.ptToPx(a.pad));a.vpad&&(c.verticalPadding=h.ptToPx(a.vpad));a.angle&&(c.angle=Number(a.angle)||0);A.parseAlign(a,c);a.width&&(c.width=h.ptToPx(a.width));a.height&&(c.height=h.ptToPx(a.height));w.mixin(c,h.ptToPxObj(h.parseStyleString(a.style)));if(c.overrideStyle&&b){b=b.getStyle(c.overrideStyle);for(var f in b)delete c[f]}t._parseBorderProperties(a,
c);return c},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(a,c){t._SIDES.forEach(function(b){if(a["border"+b+"Width"]){a["border"+b+"Color"]&&(c["border"+b+"Color"]=a["border"+b+"Color"]);a["border"+b+"Width"]&&(c["border"+b+"Width"]=h.ptToPx(a["border"+b+"Width"]));a["border"+b+"Style"]&&(c["border"+b+"Style"]=a["border"+b+"Style"]);var f=a["border"+b+"Opacity"];c["border"+b+"Opacity"]=f?Number(f):1}})}},p={getElement:function(a,c,b){var f=p._processTableColumns(a,c.templateJson,
b),e=Number(a.attributes.fixedColumns)||0,g=Number(a.attributes.dynamicColumns)||0,d=p._getTableOuterTags(a,c);b=d.trTags;var k=d.bgTag,n=d.fgTag,l=d.backgroundFloatingPanelsTag,m=d.foregroundFloatingPanelsTag,d=d.filterTag;if(b){var q=b.map(function(){return{style:{fields:{}},fieldInfos:{}}}),u=v.collectHiddenCells(b,c);b.forEach(function(a,b){var d=q[b];a.attributes&&a.attributes.height&&(d.style.height=h.ptToPx(a.attributes.height));if(a.tags&&a.tags.length){var k=0;if(g){var n=[],l=[],m=0;a.tags.forEach(function(a){for(;v.isHidden(u,
m,b);)m++;m<e?n.push(a):l.push(a);m++});var C=Math.round((f.length-e)/g);a.tags=n;for(var r=0;r<C;r++)a.tags=a.tags.concat(l)}a.tags.forEach(function(a){for(;v.isHidden(u,k,b);)k++;if(f[k]){var n=f[k].field,e=a.attributes||{},g=d.style.fields[n]={};t.parseTableCellAttributes(e,g,c);e.width&&p._parseSpannedCellsDimentions(e,q,f,b,k);var h=Number(e.colspan),e=Number(e.rowspan);h&&(d.columnSpans=d.columnSpans||{},d.columnSpans[n]=h);e&&(d.rowSpans=d.rowSpans||{},d.rowSpans[n]=e);try{p._parseCellContent(a,
d,n,g,c)}catch(D){console.log(D)}k++}})}})}b={id:"table",customName:a.attributes.customName,backgroundSectionJson:k&&p._parseTableBackgroundForeground(k,c,!0),foregroundSectionJson:n&&p._parseTableBackgroundForeground(n,c,!1),backgroundFloatingTablesSectionJson:l&&p._parseFloatingPanels(l,c,!0),foregroundFloatingTablesSectionJson:m&&p._parseFloatingPanels(m,c,!1),data:{columns:f,data:q||[]},style:{width:h.ptToPx(a.attributes.width),left:h.ptToPx(a.attributes.left),top:h.ptToPx(a.attributes.spaceBefore),
spaceAfter:h.ptToPx(a.attributes.spaceAfter),alternatingStyle:a.attributes.alternatingStyle,opacity:a.attributes.opacity?Number(a.attributes.opacity):void 0,fixedCellsOpacity:a.attributes.fixedCellsOpacity?Number(a.attributes.fixedCellsOpacity):void 0},attributes:{},filter:d&&c.parsers.getParser("filter").getFilter(d)};e&&(b.attributes.fixedColumns=e);g&&(b.attributes.dynamicColumns=g);a.attributes.fixedRows&&(b.attributes.fixedRows=Number(a.attributes.fixedRows)||0);a.attributes.dynamicRows&&(b.attributes.dynamicRows=
Number(a.attributes.dynamicRows)||0);b.attributes.inSectionRole=a.attributes.inSectionRole;return b},_processTableColumns:function(a,c,b){if(b&&b.fixTableWidthsForPage&&(c=h.pxToPt(z.getPageBox(c.documentOptions).contentW),a.attributes.widths&&Number(a.attributes.width)>c)){b=h.splitTrim(a.attributes.widths,";",!0);var f=Number(a.attributes.width)-c,e=Number(b[b.length-1]);e>f&&(b[b.length-1]=e-f,a.attributes.widths=b.join(";"),a.attributes.width=c)}var g=0;return a.attributes.widths?h.splitTrim(a.attributes.widths,
";",!0).map(function(a){return{field:"field"+g++,style:{width:h.ptToPx(a)}}}):[]},_getTableOuterTags:function(a,c){var b=[],f,e,g,d,k;1.1<=c.revisionVersion?a.tags&&a.tags.forEach(function(a){if("tr"===a.name)b.push(a);else if("filter"===a.name)k=a;else switch(a.attributes.type){case m.TABLE_BACKGROUND:f=a;break;case m.TABLE_FOREGROUND:e=a;break;case m.TABLE_BACKGROUND_FLOATING_PANELS:g=a;break;case m.TABLE_FOREGROUND_FLOATING_PANELS:case m.TABLE_FLOATING_PANELS:d=a}}):a.tags&&a.tags.forEach(function(a){"tr"===
a.name?b.push(a):"background"===a.name?f=a:"foreground"===a.name?e=a:"floatingElements"===a.name&&(d=a)});return{trTags:b,bgTag:f,fgTag:e,backgroundFloatingPanelsTag:g,foregroundFloatingPanelsTag:d,filterTag:k}},_processTdContent:function(a,c){function b(a){a=a.tags&&1===a.tags.length&&a.tags[0];if(!a||!a.tags)return null;"b"===a.name?c.fontWeight="bold":"i"===a.name?c.fontStyle="italic":"u"===a.name&&(c.textDecoration="underline");return"b"===a.name||"i"===a.name||"u"===a.name?b(a)||{tag:a.tags[0],
parentTag:a}:null}var f,e,g;if(a.tags&&a.tags.length)if(g=a.tags.filter(function(a){return"br"!==a.name}),(e=g[0])&&"trigger"===e.name&&g[1]&&"d"===g[1].name)f=e,e=g[1];else{var d=b(a);e=d&&d.tag||g[0];a=d&&d.parentTag||a}return{firstTag:e,triggerTag:f,parentTag:a,hasMultipleTags:g&&1<g.length}},_parseSpannedCellsDimentions:function(a,c,b,f,e){if(a.spannedWidths||a.spannedHeights){var g=a.spannedWidths?a.spannedWidths.split(";").map(function(a){return h.ptToPx(a)}):[h.ptToPx(a.width)];a=a.spannedHeights?
a.spannedHeights.split(";").map(function(a){return h.ptToPx(a)}):[h.ptToPx(a.height)];for(var d=0;d<g.length;d++)for(var k=0;k<a.length;k++){var n=b[e+d],l=c[f+k],n=l.style.fields[n.field]=l.style.fields[n.field]||{};n.width=g[d];n.height=a[k]}}},_parseCellContent:function(a,c,b,f,e){function g(a){r.isRichText(a)?c.fieldInfos[b]=y.createFieldInfoFromRichText(a):c[b]=r.unrichHTML(a)}var d=p._processTdContent(a,f);a=d.firstTag;var k=d.parentTag,n=d.triggerTag,d=d.hasMultipleTags,l;if(d&&!n){var m=e.parsers.getParser("field").parseRichTextTag(k,
e);m&&(c.fieldInfos[b]=m,l=!0)}if(a&&!l){e.isGraphicReport&&"section"===a.name&&!a.attributes.style&&f.backgroundColor&&!B.isTransparent(f.backgroundColor)&&(a.attributes.style=h.composeStyleString({backgroundColor:f.backgroundColor}),delete f.backgroundColor);var q;try{q=e.parsers.getParser("field").parseField(a,k,n,e)}catch(u){console.log(u),q=x.createFieldInfoForUnsupportedContent()}if(!1===q)l=!0;else if("number"===typeof q)c[b]=q+"",l=!0;else if(q)c.fieldInfos[b]=q,l=!0;else if("chart"===a.name)l=
!0;else if("img"===a.name)l=!0;else if("mapImage"===a.name)l=!0;else if("text"===a.name)c[b]=a.attributes.name,l=!0;else if("a"===a.name&&a.tags&&a.tags[0].text){if(f=a.attributes.href)c.urls=c.urls||{},c.urls[b]=f,c[b]=a.tags[0].text,l=!0}else a.text&&!d&&(g(a.text),l=!0)}l||g(r.getInnerHTML(k))},_parseTableBackgroundForeground:function(a,c,b){a.attributes=a.attributes||{};a.attributes.type=b?m.TABLE_BACKGROUND:m.TABLE_FOREGROUND;return c.parsers.getParser("section").parseSection(a,c)},_parseFloatingPanels:function(a,
c,b){a.attributes=a.attributes||{};a.attributes.type=b?m.TABLE_BACKGROUND_FLOATING_PANELS:m.TABLE_FOREGROUND_FLOATING_PANELS;return c.parsers.getParser("section").parseSection(a,c)}};p.parseTableCellAttributes=t.parseTableCellAttributes;return p});