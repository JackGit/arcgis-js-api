// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/editors/RasterLayerEditor.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"modeSelection" style\x3d"display:none"\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3cinput name\x3d"rasterDataMode" type\x3d"radio" data-dojo-attach-point\x3d"urlMode"\r\n        data-dojo-attach-event\x3d"onclick: _onUrlModeSelect" style\x3d"font-size: 10px;"\r\n        class\x3d"jimu-leading-margin10 jimu-radio-btn"\x3e\x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.useUrlForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"rasterDataMode" type\x3d"radio" data-dojo-attach-point\x3d"itemMode"\r\n        style\x3d"font-size: 10px;" data-dojo-attach-event\x3d"onclick: _onItemModeSelect"\r\n        class\x3d"jimu-leading-margin2 jimu-radio-btn"\x3e\x3clabel style\x3d" width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.useUploadForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"rasterDataMode" type\x3d"radio" data-dojo-attach-point\x3d"imgServerMode"\r\n        style\x3d"font-size: 12px;" data-dojo-attach-event\x3d"onclick: _onSelectModeClick"\r\n        class\x3d"jimu-leading-margin35 jimu-radio-btn" /\x3e\x3clabel style\x3d" width: auto;"\r\n        class\x3d"jimu-leading-margin05"\x3e${chooseLayerName}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"settingNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"urlNode" data-dojo-props\x3d"label:urlNode"\x3e\r\n        \x3ctable\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3clabel title\x3d"${nls.rasterFormat}"\x3e${nls.rasterFormat}\x3c/label\x3e\x3c/td\x3e\r\n            \x3ctd\x3e\x3cinput type\x3d"text" data-dojo-attach-point\x3d"rasterFormatInput"\r\n                data-dojo-type\x3d"dijit/form/TextBox" class\x3d"common-input"/\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3clabel title\x3d"${nls.url}"\x3e${nls.url}\x3c/label\x3e\x3c/td\x3e\r\n            \x3ctd\x3e\x3cinput type\x3d"text" data-dojo-props\x3d"rest:false" data-dojo-type\x3d"esri/dijit/analysis/customgp/common/dijit/URLInput"\r\n              data-dojo-attach-point\x3d"urlEditor" class\x3d"common-input"/\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fileNode" data-dojo-props\x3d"label:fileNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cform data-dojo-attach-point\x3d"fileForm"\r\n                enctype\x3d"multipart/form-data"\r\n                method\x3d"POST" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n            \x3cinput id\x3d"${uniqueID}_raster" type\x3d"file" multiple\x3d"false" name\x3d"file"\r\n              data-dojo-attach-point\x3d"fileInput" style\x3d"display:none"\r\n              data-dojo-attach-event\x3d"onChange: _onUpload"/\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-leading-margin10 jimu-float-leading"\x3e\r\n              \x3clabel class\x3d"file-input-label" for\x3d"${uniqueID}_raster"\x3e\r\n                ${nls.selectFileToUpload}\r\n              \x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput type\x3d"hidden" name\x3d"f" value\x3d"json"/\x3e\r\n          \x3c/form\x3e\r\n          \x3cspan data-dojo-attach-point\x3d"uploadFileName" class\x3d"jimu-leading-margin2"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"ImgSvclayerNode" data-dojo-props\x3d"label:imgServNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/customgp/editors/RasterLayerEditor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/Deferred dojo/text!./RasterLayerEditor.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/RasterData esri/request ../common/dijit/ViewStack ../common/dijit/Message ./SelectFeatureSetFromLayer ../../ItemTypes ../BaseEditor dijit/form/TextBox ../common/dijit/URLInput".split(" "),function(h,e,k,c,d,f,l,m,n,p,q,r,t,g,u,v,w){return h([w,
n,p],{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",templateString:m,editorName:"RasterLayerEditor",mode:"url",_url:"",_format:"",_itemID:null,uniqueID:null,constructor:function(b){this.inherited(arguments);this.chooseLayerName=b.nls.useImageServiceLayer;this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments);this.value&&this.parseDefaultValue();d.set(this.urlEditor,"tooltip",this.param.tooltip);this.config.showDrawOption=!1;this.selectFeature=new u({cssClass:{featureSetSelect:"esriTableFixedLayout fullSpread esriLongLabel esriAnalysisSelect",
layerChooseCtr:""},param:{},widgetUID:void 0,widget:this.widget,config:this.config,appConfig:this.appConfig,map:this.map,nls:this.i18n,editorManager:this.editorManager,style:{width:"100%"}});this.selectFeature.defaultItemTypes=[v.IS];this.ImgSvclayerNode.appendChild(this.selectFeature.domNode);"setting"===this.context?(this.viewStack=null,c.set(this.fileNode,"display","none")):(this.viewStack=new t({viewType:"dom",views:[this.urlNode,this.fileNode,this.ImgSvclayerNode]}),this.viewStack.placeAt(this.settingNode),
this.viewStack.startup());this.config.serverInfo.supportsUpload&&c.set(this.modeSelection,"display","");"item"===this.mode&&this.config.serverInfo.supportsUpload?(d.set(this.itemMode,"checked",!0),f.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(d.set(this.urlMode,"checked",!0),f.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.rasterFormatInput.set("value",this._format),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){var b;if(0===this.value.indexOf("itemID:"))this.mode=
"item";else{if(0===this.value.indexOf("url:")||0===this.value.indexOf("format:"))b=this.value.split(","),k.forEach(b,function(a){0===a.indexOf("url:")?this._url=a.substring(4):a.indexOf(!1)&&(this._format=a.substring(7))},this);this.mode="url"}},hasValidValue:function(){if("item"===this.mode)return!0;if("layer"===this.mode)return this.selectFeature&&this.selectFeature.getSelectedLayer()?!0:!1;if("url"===this.mode)return this.urlEditor.isValid()},getValue:function(){return"url"===this.mode?"url:"+
this._getUrl()+",format:"+this.rasterFormatInput.get("value"):"item"===this.mode?"itemID:":""},getGPValue:function(){var b=new l,a=new q;"url"===this.mode?(a.url=this._getUrl(),a.format=this.rasterFormatInput.get("value")):"layer"===this.mode?a.url=this.selectFeature.getSelectedLayer()&&this.selectFeature.getSelectedLayer().url:a.itemID=this.itemIDInput;a.url||a.itemID?b.resolve(a):b.resolve(null);return b},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode=
"url";this.viewStack?this.viewStack.switchView(0):(c.set(this.urlNode,"display","block"),c.set(this.ImgSvclayerNode,"display","none"))},_onItemModeSelect:function(){this.mode="item";this.viewStack?this.viewStack.switchView(1):(c.set(this.urlNode,"display","none"),c.set(this.ImgSvclayerNode,"display","none"))},_onSelectModeClick:function(){this.mode="layer";this.viewStack?this.viewStack.switchView(2):(c.set(this.urlNode,"display","none"),c.set(this.ImgSvclayerNode,"display","block"))},_onUpload:function(){if(d.get(this.fileInput,
"value")){var b=d.get(this.fileInput,"value"),b=b.replace(/\\/g,"/"),b=b.substr(b.lastIndexOf("/")+1);r({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(e.hitch(this,function(a){a.success&&(this.itemIDInput=a.item.itemID,d.set(this.fileInput,"value",""),d.set(this.uploadFileName,"innerHTML",b),new g({message:this.nls.uploadSuccess}))}),e.hitch(this,function(a){new g({message:a.message||a})}))}}})});