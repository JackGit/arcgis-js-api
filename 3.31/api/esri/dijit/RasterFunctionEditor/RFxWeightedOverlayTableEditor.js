// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxWeightedOverlayTableEditor.html":"\x3cdiv class\x3d'esri-rfx-weighted-overlay-editor'\x3e\r\n  \x3ctable class\x3d'esri-rfx-args-editor__table'\x3e\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-name'\x3e\r\n      \x3ctd data-dojo-attach-point\x3d'weightedOverlayTableLabel'\x3e${_i18n.weightedOverlayTable}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d\"esri-rfx-args-editor__tr--arg-widget\"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'gridNode1'\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-row' data-dojo-attach-point\x3d'sumOfInfluenceRow'\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv class\x3d\"esri-rfx-args-editor__div--arg-td\"\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--left\" data-dojo-attach-point\x3d'sumOfInfluenceLabel'\x3e${_i18n.sumOfInfluence}\x3c/span\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--right\" data-dojo-attach-point\x3d'sumOfInfluence'\x3e100\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-name'\x3e\r\n      \x3ctd data-dojo-attach-point\x3d'remapTableLabel'\x3e${_i18n.remapTable}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d\"esri-rfx-args-editor__tr--arg-widget\"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'gridNode2'\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-row' data-dojo-attach-point\x3d'scalesRow'\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv class\x3d\"esri-rfx-args-editor__div--arg-td\"\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--left\" data-dojo-attach-point\x3d'scalesLabel'\x3e${_i18n.scales}\x3c/span\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--right\" data-dojo-attach-point\x3d'scalesSpan'\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/RasterFunctionEditor/RFxScalesInput\" data-dojo-attach-point\x3d\"scalesInput\"\x3e\x3c/div\x3e\r\n          \x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n"}});
define("esri/dijit/RasterFunctionEditor/RFxWeightedOverlayTableEditor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Evented dojo/has ../../kernel dojo/i18n!../../nls/jsapi dojo/text!./templates/RFxWeightedOverlayTableEditor.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./EditableGridMixin ./RFxGridBase ./utils".split(" "),function(p,m,q,r,t,u,v,w,x,y,z,A,n,B){p=p("RFxWeightedOverlayTableEditor",[x,y,z,r,A],{templateString:w,baseClass:"esriRFxWeightedOverlayTableEditor",
dataTypes_weightedOverlayGrid:[n.DATA_TYPES.raster,n.DATA_TYPES.long,n.DATA_TYPES.field],fieldNames_weightedOverlayGrid:["layer","influence","field"],dataTypes_remapGrid:[n.DATA_TYPES.string,n.DATA_TYPES.scale],fieldNames_remapGrid:["value","scale"],_grid1:null,_grid2:null,_selectedRowId:null,_data1:null,constructor:function(a){this.inherited(arguments);this._i18n=v.widgets.rasterFunctionEditor.rfxWeightedOverlayTableEditor},postCreate:function(){this.inherited(arguments);this._initializeGrids();
this._data1=this._copyData(this._grid1.data);this._addEventHandlers();this._grid1.startup();this._grid2.startup();this.scalesInput.startup()},_initializeGrids:function(){var a,b,c,f,d;b=this._getGridSchemas();a=b[0];b=b[1];d=this._readArgValues();c=d[0];f=d[1];d=d[2];this._grid1=new n({schema:a,data:c,hasIdColumn:!0,inputLayers:this.inputLayers,allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode1);this._grid2=new n({schema:b,data:f,hasIdColumn:!0,inputLayers:this.inputLayers,
allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode2);this.scalesInput._setEvalFromTo(d[0].value,d[1].value)},_getGridSchemas:function(){var a=this.fieldNames_weightedOverlayGrid.map(function(a,b){return{label:this._i18n[a],name:a,dataType:this.dataTypes_weightedOverlayGrid[b]}},this),b=this.fieldNames_remapGrid.map(function(a,b){return{label:this._i18n[a],name:a,dataType:this.dataTypes_remapGrid[b]}},this);return[a,b]},_addEventHandlers:function(){this.own(this._grid1._grid.on(".dgrid-content .dgrid-row:click",
m.hitch(this,function(a){a=this._grid1._grid.row(a);a.data.idNum!==this._selectedRowId&&(this._selectedRowId=a.data.idNum,this._handleRowSelect(a))})),this._grid1.on("grid-data-change",m.hitch(this,function(a){this._updateArgValues_weightedOverlayGrid(a)})),this._grid2.on("grid-data-change",m.hitch(this,function(a){this._updateArgValues_remapGrid(a)})),this.scalesInput.on("change",m.hitch(this,function(){this._updateArgValues_scalesInput()})))},_handleRowSelect:function(a){this.inputArgs&&a&&a.data&&
a.data.layer&&a.data.field&&this._refreshRemapTable()},_refreshRemapTable:function(){this._grid2.updateStoreValue(this._getRemapGridData());this._grid2._grid.refresh();this._updateArgValues_scalesInput()},_getRemapGridData:function(){var a=this.inputArgs.Remaps,b=this._selectedRowId-1,c=[];if(0>b||b>a.value.length-1)return c;a.value&&a.value[b]&&a.value[b].split(";").forEach(function(a,b){(b=a.trim().match(/(?:[^\s']+|'[^']*')+/g))&&2===b.length&&(a=b[0],b=b[1],-1<a.indexOf("'")&&(a=a.replace(/[']+/g,
"")),c.push({value:a,scale:b}))});return c},_initLayerRemapStr:function(a,b){var c=a.layerArg.input,f;if(c&&c.value&&c.value.name){var c=c.getSelectedLayer(c.value.name),d="",g=a.idNum,e=this.inputArgs.Remaps,k=this.inputArgs.Fields;c&&c.hasRasterAttributeTable?c.getRasterAttributeTable({renderingRule:c.renderingRule}).then(m.hitch(this,function(c){var l=c&&c.features;if(l){c=c&&c.fields;var h=[],m=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];
c&&c.length&&(h=q.filter(c,function(a){return-1<q.indexOf(m,a.type)}),a.field=a.field||h[0].name);f=a.field;(l=l.map(function(a){return a.attributes[f]}).filter(function(a,b,c){return c.indexOf(a)===b}))&&1<l.length&&!isNaN(l[0])&&l.sort(function(a,b){return a-b});d=l.map(function(a,b){"string"===typeof a&&(a=-1<a.indexOf(" ")?"'"+a+"'":a);return a+" "+(b+1)}).join(" ; ");k.value.splice(g-1,1,f);e.value.length===b&&e.value.splice(g-1,1,d);e.value.length<b&&e.value.splice(g-1,0,d);this._refreshRemapTable()}})):
(e.value.length===b&&e.value.splice(g-1,1,d),e.value.length<b&&e.value.splice(g-1,0,d),this._refreshRemapTable())}},_deleteLayerRemapStr:function(a){this.inputArgs.Remaps.value.splice(a-1,1)},_copyData:function(a){var b=[];if(a&&!(1>a.length))return a.forEach(function(a){b.push({id:a.id,idNum:a.idNum,layer:a.layer,influence:a.influence,field:a.field})}),b},_gridDataComparer:function(a){return function(b){return 0===a.filter(function(a){return"*"!==a.idNum&&a.id===b.id&&(!a.layer&&!b.layer||a.layer&&
b.layer&&!a.layer.value&&!b.layer.value||a.layer&&b.layer&&a.layer.value&&b.layer.value&&a.layer.value.name===b.layer.value.name&&a.layer.value.url===b.layer.value.url)&&(!a.influence&&!b.influence||a.influence&&b.influence&&a.influence==b.influence)&&(!a.field&&!b.field||a.field&&b.field&&a.field===b.field)}).length&&"*"!==b.idNum}},_updateArgValues_weightedOverlayGrid:function(){var a=this.inputArgs,b=this._grid1.getStoreValue();if(a){var c=a.Rasters,f=a.Fields,d=a.Influences,a=a.Remaps,g=0;c&&
(c.value={type:B.ARGUMENT_ARRAY_TYPE,elements:[]});f&&(f.value=[]);d&&(d.value=[]);if(b&&Array.isArray(b)){b.forEach(m.hitch(this,function(a){if("*"!==a.idNum&&a&&a.layerArg&&a.layerArg.input){c&&c.value&&c.value.elements.push(a.layer);if(d&&d.value){if(!a.influence||""===a.influence||isNaN(a.influence))a.influence=1===a.idNum?100:0;var b=a.influence/100;g+=b;d.value.push(b)}f&&f.value&&f.value.push(a.fieldArg.value)}}));this._updateSumOfInfluence(g);var e,k,h;!this._data1&&1<b.length&&(h=b[0],e=
b[0]);if(this._data1){e=b.filter(this._gridDataComparer(this._data1))[0];k=this._data1.filter(this._gridDataComparer(b))[0];if(!e&&!k)return;b.length>this._data1.length?h=b[e.idNum-1]:b.length<this._data1.length?(this._deleteLayerRemapStr(k.idNum),this._selectedRowId=k.idNum):b.length===this._data1.length&&e.influence==k.influence&&(h=b[e.idNum-1])}a&&a.value&&h&&h.layerArg.input.value&&(this._selectedRowId=e.idNum,this._initLayerRemapStr(h,b.length-1));this._data1=this._copyData(b)}}},_updateArgValues_remapGrid:function(){var a=
this.inputArgs,b=this._grid2.getStoreValue();if(a){var c=a.Remaps;c&&(c.value[this._selectedRowId-1]="");if(b&&Array.isArray(b)){var f="",d=b.length-1;b.forEach(m.hitch(this,function(b,c){if("*"===b.idNum)b.scaleArg=b.scaleArg||{},b.scaleArg.evalValues=[a.EvalFrom.value,a.EvalTo.value];else{b.scale=b.scale||b.scaleArg.value;if(b.value&&b.scale){var e=b.value;b=b.scale;"string"===typeof e&&(e=-1<e.indexOf(" ")?"'"+e+"'":e);f+=e+" "+b}c<d-1&&(f+=" ; ")}}));c.value[this._selectedRowId-1]=f}}},_updateArgValues_scalesInput:function(){var a=
this.scalesInput.scalesComboBox;a.value&&(a=a.value.replace(/\s/g,"").split("-"),2!==a.length||a[0]>a[1]||(this.inputArgs.EvalFrom.value=parseInt(a[0],10),this.inputArgs.EvalTo.value=parseInt(a[1],10),this._updateScaleSelectStore(a),this._updateScaleSelectValue()))},_updateSumOfInfluence:function(a){a=Math.round(100*a);this.sumOfInfluence.innerText=a;100<a?this.sumOfInfluence.classList.add("color-red"):this.sumOfInfluence.classList.remove("color-red")},_updateScaleSelectStore:function(a){this._grid2.getStoreValue().forEach(function(b){b.scaleArg&&
(b.scaleArg.evalValues=a,"*"!==b.idNum&&b.scaleArg.setScaleOptions())})},_updateScaleSelectValue:function(){this._grid2.getStoreValue().forEach(function(a){a.scaleArg&&"*"!==a.idNum&&a.scaleArg.set("value",a.scale)})},_readArgValues:function(){if(this.inputArgs){var a,b=[],c=[],f=[],d=0,g=this.inputArgs,e=g.Rasters,k=g.Fields,h=g.Influences,l=g.Remaps,m=g.EvalFrom,g=g.EvalTo;if(e&&k&&h&&l&&(a=Math.max(e.value&&e.value.elements&&e.value.elements.length,k.value&&k.value.length,h.value&&h.value.length,
l.value&&l.value.length),f.push(m),f.push(g),isNaN(a)))return[b,c,f];for(;d<a;)b.push({layer:e.value&&e.value.elements&&e.value.elements[d],field:k.value&&k.value[d],influence:h.value&&(100*h.value[d]||(d?0:100))}),d+=1;if(0<l.value.length)b&&0<b.length&&b[0].layer.value&&b[0].field&&(this._selectedRowId=1,c=this._getRemapGridData());else for(d=0;d<a;d++)l.value.push("");return[b,c,f]}}});t("extend-esri")&&m.setObject("dijit.RasterFunctionEditor.RFxWeightedOverlayTableEditor",p,u);return p});