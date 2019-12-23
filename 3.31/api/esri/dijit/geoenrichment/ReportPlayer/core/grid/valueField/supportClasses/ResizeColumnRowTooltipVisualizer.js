// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/valueField/supportClasses/ResizeColumnRowTooltipVisualizer","dojo/_base/declare dojo/string dojo/dom-construct dojo/dom-geometry esri/dijit/geoenrichment/utils/PageUnitsConverter dojo/i18n!esri/nls/jsapi".split(" "),function(l,f,g,h,k,d){d=d.geoenrichment.dijit.ReportPlayer.ValueField;var b={},m=l(null,{_cell:null,_isColumn:null,_tooltip:null,constructor:function(c,b){this._cell=c;this._isColumn=b},show:function(){this.destroy();this._tooltip=
g.create("div",{"class":"esriGEAdjustableGrid_resizableColumnTooltip"},document.body);this.update()},update:function(){setTimeout(this._doUpdate.bind(this))},_doUpdate:function(){if(this._tooltip&&this._cell.domNode){var c=h.position(this._cell.domNode),b=h.position(this._cell.parentGrid.domNode),a=this._cell.viewModel;this._isColumn?(this._tooltip.innerHTML=f.substitute(a.provideUnits(d.columnWidth),{width:a.roundForUnits(k.convert(this._cell.domNode.clientWidth,"px",a.getUnits()))}),this._tooltip.style.left=
c.x+(c.w-this._tooltip.clientWidth)/2+"px",this._tooltip.style.top=b.y-this._tooltip.clientHeight-10+"px"):(this._tooltip.innerHTML=f.substitute(a.provideUnits(d.rowHeight),{height:a.roundForUnits(k.convert(this._cell.domNode.clientHeight,"px",a.getUnits()))}),this._tooltip.style.left=b.x-this._tooltip.clientWidth-10+"px",this._tooltip.style.top=c.y+(c.h-this._tooltip.clientHeight)/2+"px")}},destroy:function(){this._tooltip&&g.destroy(this._tooltip);this._tooltip=null}}),a,e;b.showColumnTooltip=function(a){b._showTooltip(a,
!0)};b.showRowTooltip=function(a){b._showTooltip(a,!1)};b._showTooltip=function(c,d){e!==c&&b.removeTooltip();e=c;a?a.update():(a=new m(c,d),a.show())};b.removeTooltip=function(){a&&a.destroy();e=a=null};return b});