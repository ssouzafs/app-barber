/*!
   Copyright 2008-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.11.4
 ©2008-2021 SpryMedia Ltd - datatables_1.11.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(l,z,A){l instanceof String&&(l=String(l));for(var q=l.length,E=0;E<q;E++){var P=l[E];if(z.call(A,P,E,l))return{i:E,v:P}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(l,z,A){if(l==Array.prototype||l==Object.prototype)return l;l[z]=A.value;return l};$jscomp.getGlobal=function(l){l=["object"==typeof globalThis&&globalThis,l,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var z=0;z<l.length;++z){var A=l[z];if(A&&A.Math==Math)return A}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(l,z){var A=$jscomp.propertyToPolyfillSymbol[z];if(null==A)return l[z];A=l[A];return void 0!==A?A:l[z]};
$jscomp.polyfill=function(l,z,A,q){z&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(l,z,A,q):$jscomp.polyfillUnisolated(l,z,A,q))};$jscomp.polyfillUnisolated=function(l,z,A,q){A=$jscomp.global;l=l.split(".");for(q=0;q<l.length-1;q++){var E=l[q];if(!(E in A))return;A=A[E]}l=l[l.length-1];q=A[l];z=z(q);z!=q&&null!=z&&$jscomp.defineProperty(A,l,{configurable:!0,writable:!0,value:z})};
$jscomp.polyfillIsolated=function(l,z,A,q){var E=l.split(".");l=1===E.length;q=E[0];q=!l&&q in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var P=0;P<E.length-1;P++){var ma=E[P];if(!(ma in q))return;q=q[ma]}E=E[E.length-1];A=$jscomp.IS_SYMBOL_NATIVE&&"es6"===A?q[E]:null;z=z(A);null!=z&&(l?$jscomp.defineProperty($jscomp.polyfills,E,{configurable:!0,writable:!0,value:z}):z!==A&&($jscomp.propertyToPolyfillSymbol[E]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(E):$jscomp.POLYFILL_PREFIX+E,
E=$jscomp.propertyToPolyfillSymbol[E],$jscomp.defineProperty(q,E,{configurable:!0,writable:!0,value:z})))};$jscomp.polyfill("Array.prototype.find",function(l){return l?l:function(z,A){return $jscomp.findInternal(this,z,A).v}},"es6","es3");
(function(l){"function"===typeof define&&define.amd?define(["jquery"],function(z){return l(z,window,document)}):"object"===typeof exports?module.exports=function(z,A){z||(z=window);A||(A="undefined"!==typeof window?require("jquery"):require("jquery")(z));return l(A,z,z.document)}:window.DataTable=l(jQuery,window,document)})(function(l,z,A,q){function E(a){var b,c,d={};l.each(a,function(e,h){(b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" ")&&(c=e.replace(b[0],
b[2].toLowerCase()),d[c]=e,"o"===b[1]&&E(a[e]))});a._hungarianMap=d}function P(a,b,c){a._hungarianMap||E(a);var d;l.each(b,function(e,h){d=a._hungarianMap[e];d===q||!c&&b[d]!==q||("o"===d.charAt(0)?(b[d]||(b[d]={}),l.extend(!0,b[d],b[e]),P(a[d],b[d],c)):b[d]=b[e])})}function ma(a){var b=u.defaults.oLanguage,c=b.sDecimal;c&&Xa(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&X(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&
X(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Xa(a)}}function zb(a){S(a,"ordering","bSort");S(a,"orderMulti","bSortMulti");S(a,"orderClasses","bSortClasses");S(a,"orderCellsTop","bSortCellsTop");S(a,"order","aaSorting");S(a,"orderFixed","aaSortingFixed");S(a,"paging","bPaginate");S(a,"pagingType","sPaginationType");S(a,"pageLength","iDisplayLength");S(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&P(u.models.oSearch,a[b])}function Ab(a){S(a,"orderable","bSortable");S(a,"orderData","aDataSort");S(a,"orderSequence","asSorting");S(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"!==typeof b||Array.isArray(b)||(a.aDataSort=[b])}function Bb(a){if(!u.__browser){var b={};u.__browser=b;var c=l("<div/>").css({position:"fixed",top:0,left:-1*l(z).scrollLeft(),height:1,
width:1,overflow:"hidden"}).append(l("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(l("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}l.extend(a.oBrowser,u.__browser);a.oScroll.iBarWidth=u.__browser.barWidth}
function Cb(a,b,c,d,e,h){var f=!1;if(c!==q){var g=c;f=!0}for(;d!==e;)a.hasOwnProperty(d)&&(g=f?b(g,a[d],d,a):a[d],f=!0,d+=h);return g}function Ya(a,b){var c=u.defaults.column,d=a.aoColumns.length;c=l.extend({},u.models.oColumn,c,{nTh:b?b:A.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=l.extend({},u.models.oSearch,c[d]);Ga(a,d,l(b).data())}function Ga(a,b,c){b=a.aoColumns[b];
var d=a.oClasses,e=l(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var h=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);h&&(b.sWidthOrig=h[1])}c!==q&&null!==c&&(Ab(c),P(u.defaults.column,c,!0),c.mDataProp===q||c.mData||(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),l.extend(b,c),X(b,c,"sWidth","sWidthOrig"),c.iDataSort!==q&&(b.aDataSort=[c.iDataSort]),X(b,c,"aDataSort"));var f=b.mData,g=na(f),
k=b.mRender?na(b.mRender):null;c=function(m){return"string"===typeof m&&-1!==m.indexOf("@")};b._bAttrSrc=l.isPlainObject(f)&&(c(f.sort)||c(f.type)||c(f.filter));b._setter=null;b.fnGetData=function(m,n,p){var t=g(m,n,q,p);return k&&n?k(t,n,m,p):t};b.fnSetData=function(m,n,p){return ha(f)(m,n,p)};"number"!==typeof f&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==l.inArray("asc",b.asSorting);c=-1!==l.inArray("desc",b.asSorting);b.bSortable&&(a||c)?a&&!c?
(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI):(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI="")}function ta(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Za(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;""===b.sY&&""===b.sX||Ha(a);F(a,null,"column-sizing",[a])}function ua(a,b){a=Ia(a,"bVisible");
return"number"===typeof a[b]?a[b]:null}function va(a,b){a=Ia(a,"bVisible");b=l.inArray(b,a);return-1!==b?b:null}function oa(a){var b=0;l.each(a.aoColumns,function(c,d){d.bVisible&&"none"!==l(d.nTh).css("display")&&b++});return b}function Ia(a,b){var c=[];l.map(a.aoColumns,function(d,e){d[b]&&c.push(e)});return c}function $a(a){var b=a.aoColumns,c=a.aoData,d=u.ext.type.detect,e,h,f;var g=0;for(e=b.length;g<e;g++){var k=b[g];var m=[];if(!k.sType&&k._sManualType)k.sType=k._sManualType;else if(!k.sType){var n=
0;for(h=d.length;n<h;n++){var p=0;for(f=c.length;p<f;p++){m[p]===q&&(m[p]=T(a,p,g,"type"));var t=d[n](m[p],a);if(!t&&n!==d.length-1)break;if("html"===t&&!Z(m[p]))break}if(t){k.sType=t;break}}k.sType||(k.sType="string")}}}function Db(a,b,c,d){var e,h,f,g=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){var k=b[e];var m=k.targets!==q?k.targets:k.aTargets;Array.isArray(m)||(m=[m]);var n=0;for(h=m.length;n<h;n++)if("number"===typeof m[n]&&0<=m[n]){for(;g.length<=m[n];)Ya(a);d(m[n],k)}else if("number"===typeof m[n]&&
0>m[n])d(g.length+m[n],k);else if("string"===typeof m[n]){var p=0;for(f=g.length;p<f;p++)("_all"==m[n]||l(g[p].nTh).hasClass(m[n]))&&d(p,k)}}if(c)for(e=0,a=c.length;e<a;e++)d(e,c[e])}function ia(a,b,c,d){var e=a.aoData.length,h=l.extend(!0,{},u.models.oRow,{src:c?"dom":"data",idx:e});h._aData=b;a.aoData.push(h);for(var f=a.aoColumns,g=0,k=f.length;g<k;g++)f[g].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==q&&(a.aIds[b]=h);!c&&a.oFeatures.bDeferRender||ab(a,e,c,d);return e}function Ja(a,
b){var c;b instanceof l||(b=l(b));return b.map(function(d,e){c=bb(a,e);return ia(a,c.data,e,c.cells)})}function T(a,b,c,d){"search"===d?d="filter":"order"===d&&(d="sort");var e=a.iDraw,h=a.aoColumns[c],f=a.aoData[b]._aData,g=h.sDefaultContent,k=h.fnGetData(f,d,{settings:a,row:b,col:c});if(k===q)return a.iDrawError!=e&&null===g&&(da(a,0,"Requested unknown parameter "+("function"==typeof h.mData?"{function}":"'"+h.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),g;if((k===f||null===k)&&null!==
g&&d!==q)k=g;else if("function"===typeof k)return k.call(f);if(null===k&&"display"===d)return"";"filter"===d&&(a=u.ext.type.search,a[h.sType]&&(k=a[h.sType](k)));return k}function Eb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function cb(a){return l.map(a.match(/(\\.|[^\.])+/g)||[""],function(b){return b.replace(/\\\./g,".")})}function db(a){return U(a.aoData,"_aData")}function Ka(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}
function La(a,b,c){for(var d=-1,e=0,h=a.length;e<h;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===q&&a.splice(d,1)}function wa(a,b,c,d){var e=a.aoData[b],h,f=function(k,m){for(;k.childNodes.length;)k.removeChild(k.firstChild);k.innerHTML=T(a,b,m,"display")};if("dom"!==c&&(c&&"auto"!==c||"dom"!==e.src)){var g=e.anCells;if(g)if(d!==q)f(g[d],d);else for(c=0,h=g.length;c<h;c++)f(g[c],c)}else e._aData=bb(a,e,d,d===q?q:e._aData).data;e._aSortData=null;e._aFilterData=null;f=a.aoColumns;if(d!==q)f[d].sType=null;
else{c=0;for(h=f.length;c<h;c++)f[c].sType=null;eb(a,e)}}function bb(a,b,c,d){var e=[],h=b.firstChild,f,g=0,k,m=a.aoColumns,n=a._rowReadObject;d=d!==q?d:n?{}:[];var p=function(x,w){if("string"===typeof x){var r=x.indexOf("@");-1!==r&&(r=x.substring(r+1),ha(x)(d,w.getAttribute(r)))}},t=function(x){if(c===q||c===g)f=m[g],k=x.innerHTML.trim(),f&&f._bAttrSrc?(ha(f.mData._)(d,k),p(f.mData.sort,x),p(f.mData.type,x),p(f.mData.filter,x)):n?(f._setter||(f._setter=ha(f.mData)),f._setter(d,k)):d[g]=k;g++};if(h)for(;h;){var v=
h.nodeName.toUpperCase();if("TD"==v||"TH"==v)t(h),e.push(h);h=h.nextSibling}else for(e=b.anCells,h=0,v=e.length;h<v;h++)t(e[h]);(b=b.firstChild?b:b.nTr)&&(b=b.getAttribute("id"))&&ha(a.rowId)(d,b);return{data:d,cells:e}}function ab(a,b,c,d){var e=a.aoData[b],h=e._aData,f=[],g,k;if(null===e.nTr){var m=c||A.createElement("tr");e.nTr=m;e.anCells=f;m._DT_RowIndex=b;eb(a,e);var n=0;for(g=a.aoColumns.length;n<g;n++){var p=a.aoColumns[n];e=(k=c?!1:!0)?A.createElement(p.sCellType):d[n];e._DT_CellIndex={row:b,
column:n};f.push(e);if(k||!(!p.mRender&&p.mData===n||l.isPlainObject(p.mData)&&p.mData._===n+".display"))e.innerHTML=T(a,b,n,"display");p.sClass&&(e.className+=" "+p.sClass);p.bVisible&&!c?m.appendChild(e):!p.bVisible&&c&&e.parentNode.removeChild(e);p.fnCreatedCell&&p.fnCreatedCell.call(a.oInstance,e,T(a,b,n),h,b,n)}F(a,"aoRowCreatedCallback",null,[m,h,b,f])}}function eb(a,b){var c=b.nTr,d=b._aData;if(c){if(a=a.rowIdFn(d))c.id=a;d.DT_RowClass&&(a=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?Ma(b.__rowc.concat(a)):
a,l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&l(c).attr(d.DT_RowAttr);d.DT_RowData&&l(c).data(d.DT_RowData)}}function Fb(a){var b,c,d=a.nTHead,e=a.nTFoot,h=0===l("th, td",d).length,f=a.oClasses,g=a.aoColumns;h&&(c=l("<tr/>").appendTo(d));var k=0;for(b=g.length;k<b;k++){var m=g[k];var n=l(m.nTh).addClass(m.sClass);h&&n.appendTo(c);a.oFeatures.bSort&&(n.addClass(m.sSortingClass),!1!==m.bSortable&&(n.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),fb(a,m.nTh,
k)));m.sTitle!=n[0].innerHTML&&n.html(m.sTitle);gb(a,"header")(a,n,m,f)}h&&xa(a.aoHeader,d);l(d).children("tr").children("th, td").addClass(f.sHeaderTH);l(e).children("tr").children("th, td").addClass(f.sFooterTH);if(null!==e)for(a=a.aoFooter[0],k=0,b=a.length;k<b;k++)m=g[k],m.nTf=a[k].cell,m.sClass&&l(m.nTf).addClass(m.sClass)}function ya(a,b,c){var d,e,h=[],f=[],g=a.aoColumns.length;if(b){c===q&&(c=!1);var k=0;for(d=b.length;k<d;k++){h[k]=b[k].slice();h[k].nTr=b[k].nTr;for(e=g-1;0<=e;e--)a.aoColumns[e].bVisible||
c||h[k].splice(e,1);f.push([])}k=0;for(d=h.length;k<d;k++){if(a=h[k].nTr)for(;e=a.firstChild;)a.removeChild(e);e=0;for(b=h[k].length;e<b;e++){var m=g=1;if(f[k][e]===q){a.appendChild(h[k][e].cell);for(f[k][e]=1;h[k+g]!==q&&h[k][e].cell==h[k+g][e].cell;)f[k+g][e]=1,g++;for(;h[k][e+m]!==q&&h[k][e].cell==h[k][e+m].cell;){for(c=0;c<g;c++)f[k+c][e+m]=1;m++}l(h[k][e].cell).attr("rowspan",g).attr("colspan",m)}}}}}function ja(a,b){var c="ssp"==Q(a),d=a.iInitDisplayStart;d!==q&&-1!==d&&(a._iDisplayStart=c?
d:d>=a.fnRecordsDisplay()?0:d,a.iInitDisplayStart=-1);c=F(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==l.inArray(!1,c))V(a,!1);else{c=[];var e=0;d=a.asStripeClasses;var h=d.length,f=a.oLanguage,g="ssp"==Q(a),k=a.aiDisplay,m=a._iDisplayStart,n=a.fnDisplayEnd();a.bDrawing=!0;if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,V(a,!1);else if(!g)a.iDraw++;else if(!a.bDestroying&&!b){Gb(a);return}if(0!==k.length)for(b=g?a.aoData.length:n,f=g?0:m;f<b;f++){g=k[f];var p=a.aoData[g];null===p.nTr&&ab(a,g);var t=
p.nTr;if(0!==h){var v=d[e%h];p._sRowStripe!=v&&(l(t).removeClass(p._sRowStripe).addClass(v),p._sRowStripe=v)}F(a,"aoRowCallback",null,[t,p._aData,e,f,g]);c.push(t);e++}else e=f.sZeroRecords,1==a.iDraw&&"ajax"==Q(a)?e=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(e=f.sEmptyTable),c[0]=l("<tr/>",{"class":h?d[0]:""}).append(l("<td />",{valign:"top",colSpan:oa(a),"class":a.oClasses.sRowEmpty}).html(e))[0];F(a,"aoHeaderCallback","header",[l(a.nTHead).children("tr")[0],db(a),m,n,k]);F(a,"aoFooterCallback",
"footer",[l(a.nTFoot).children("tr")[0],db(a),m,n,k]);d=l(a.nTBody);d.children().detach();d.append(l(c));F(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function ka(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&Hb(a);d?za(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;ja(a);a._drawHold=!1}function Ib(a){var b=a.oClasses,c=l(a.nTable);c=l("<div/>").insertBefore(c);var d=a.oFeatures,e=l("<div/>",{id:a.sTableId+"_wrapper",
"class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var h=a.sDom.split(""),f,g,k,m,n,p,t=0;t<h.length;t++){f=null;g=h[t];if("<"==g){k=l("<div/>")[0];m=h[t+1];if("'"==m||'"'==m){n="";for(p=2;h[t+p]!=m;)n+=h[t+p],p++;"H"==n?n=b.sJUIHeader:"F"==n&&(n=b.sJUIFooter);-1!=n.indexOf(".")?(m=n.split("."),k.id=m[0].substr(1,m[0].length-1),k.className=m[1]):"#"==n.charAt(0)?k.id=n.substr(1,n.length-1):k.className=n;t+=p}e.append(k);
e=l(k)}else if(">"==g)e=e.parent();else if("l"==g&&d.bPaginate&&d.bLengthChange)f=Jb(a);else if("f"==g&&d.bFilter)f=Kb(a);else if("r"==g&&d.bProcessing)f=Lb(a);else if("t"==g)f=Mb(a);else if("i"==g&&d.bInfo)f=Nb(a);else if("p"==g&&d.bPaginate)f=Ob(a);else if(0!==u.ext.feature.length)for(k=u.ext.feature,p=0,m=k.length;p<m;p++)if(g==k[p].cFeature){f=k[p].fnInit(a);break}f&&(k=a.aanFeatures,k[g]||(k[g]=[]),k[g].push(f),e.append(f))}c.replaceWith(e);a.nHolding=null}function xa(a,b){b=l(b).children("tr");
var c,d,e;a.splice(0,a.length);var h=0;for(e=b.length;h<e;h++)a.push([]);h=0;for(e=b.length;h<e;h++){var f=b[h];for(c=f.firstChild;c;){if("TD"==c.nodeName.toUpperCase()||"TH"==c.nodeName.toUpperCase()){var g=1*c.getAttribute("colspan");var k=1*c.getAttribute("rowspan");g=g&&0!==g&&1!==g?g:1;k=k&&0!==k&&1!==k?k:1;var m=0;for(d=a[h];d[m];)m++;var n=m;var p=1===g?!0:!1;for(d=0;d<g;d++)for(m=0;m<k;m++)a[h+m][n+d]={cell:c,unique:p},a[h+m].nTr=f}c=c.nextSibling}}}function Na(a,b,c){var d=[];c||(c=a.aoHeader,
b&&(c=[],xa(c,b)));b=0;for(var e=c.length;b<e;b++)for(var h=0,f=c[b].length;h<f;h++)!c[b][h].unique||d[h]&&a.bSortCellsTop||(d[h]=c[b][h].cell);return d}function Oa(a,b,c){F(a,"aoServerParams","serverParams",[b]);if(b&&Array.isArray(b)){var d={},e=/(.*?)\[\]$/;l.each(b,function(n,p){(n=p.name.match(e))?(n=n[0],d[n]||(d[n]=[]),d[n].push(p.value)):d[p.name]=p.value});b=d}var h=a.ajax,f=a.oInstance,g=function(n){var p=a.jqXHR?a.jqXHR.status:null;if(null===n||"number"===typeof p&&204==p)n={},Aa(a,n,[]);
(p=n.error||n.sError)&&da(a,0,p);a.json=n;F(a,null,"xhr",[a,n,a.jqXHR]);c(n)};if(l.isPlainObject(h)&&h.data){var k=h.data;var m="function"===typeof k?k(b,a):k;b="function"===typeof k&&m?m:l.extend(!0,b,m);delete h.data}m={data:b,success:g,dataType:"json",cache:!1,type:a.sServerMethod,error:function(n,p,t){t=F(a,null,"xhr",[a,null,a.jqXHR]);-1===l.inArray(!0,t)&&("parsererror"==p?da(a,0,"Invalid JSON response",1):4===n.readyState&&da(a,0,"Ajax error",7));V(a,!1)}};a.oAjaxData=b;F(a,null,"preXhr",[a,
b]);a.fnServerData?a.fnServerData.call(f,a.sAjaxSource,l.map(b,function(n,p){return{name:p,value:n}}),g,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=l.ajax(l.extend(m,{url:h||a.sAjaxSource})):"function"===typeof h?a.jqXHR=h.call(f,b,g,a):(a.jqXHR=l.ajax(l.extend(m,h)),h.data=k)}function Gb(a){a.iDraw++;V(a,!0);Oa(a,Pb(a),function(b){Qb(a,b)})}function Pb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,h=a.aoPreSearchCols,f=[],g=pa(a);var k=a._iDisplayStart;var m=!1!==d.bPaginate?
a._iDisplayLength:-1;var n=function(x,w){f.push({name:x,value:w})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",U(b,"sName").join(","));n("iDisplayStart",k);n("iDisplayLength",m);var p={draw:a.iDraw,columns:[],order:[],start:k,length:m,search:{value:e.sSearch,regex:e.bRegex}};for(k=0;k<c;k++){var t=b[k];var v=h[k];m="function"==typeof t.mData?"function":t.mData;p.columns.push({data:m,name:t.sName,searchable:t.bSearchable,orderable:t.bSortable,search:{value:v.sSearch,regex:v.bRegex}});n("mDataProp_"+
k,m);d.bFilter&&(n("sSearch_"+k,v.sSearch),n("bRegex_"+k,v.bRegex),n("bSearchable_"+k,t.bSearchable));d.bSort&&n("bSortable_"+k,t.bSortable)}d.bFilter&&(n("sSearch",e.sSearch),n("bRegex",e.bRegex));d.bSort&&(l.each(g,function(x,w){p.order.push({column:w.col,dir:w.dir});n("iSortCol_"+x,w.col);n("sSortDir_"+x,w.dir)}),n("iSortingCols",g.length));b=u.ext.legacy.ajax;return null===b?a.sAjaxSource?f:p:b?f:p}function Qb(a,b){var c=function(f,g){return b[f]!==q?b[f]:b[g]},d=Aa(a,b),e=c("sEcho","draw"),h=
c("iTotalRecords","recordsTotal");c=c("iTotalDisplayRecords","recordsFiltered");if(e!==q){if(1*e<a.iDraw)return;a.iDraw=1*e}d||(d=[]);Ka(a);a._iRecordsTotal=parseInt(h,10);a._iRecordsDisplay=parseInt(c,10);e=0;for(h=d.length;e<h;e++)ia(a,d[e]);a.aiDisplay=a.aiDisplayMaster.slice();ja(a,!0);a._bInitComplete||Pa(a,b);V(a,!1)}function Aa(a,b,c){a=l.isPlainObject(a.ajax)&&a.ajax.dataSrc!==q?a.ajax.dataSrc:a.sAjaxDataProp;if(!c)return"data"===a?b.aaData||b[a]:""!==a?na(a)(b):b;ha(a)(b,c)}function Kb(a){var b=
a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,h=a.aanFeatures,f='<input type="search" class="'+b.sFilterInput+'"/>',g=d.sSearch;g=g.match(/_INPUT_/)?g.replace("_INPUT_",f):g+f;b=l("<div/>",{id:h.f?null:c+"_filter","class":b.sFilter}).append(l("<label/>").append(g));var k=function(n){var p=this.value?this.value:"";e.return&&"Enter"!==n.key||p==e.sSearch||(za(a,{sSearch:p,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive,"return":e.return}),a._iDisplayStart=0,ja(a))};h=
null!==a.searchDelay?a.searchDelay:"ssp"===Q(a)?400:0;var m=l("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",h?hb(k,h):k).on("mouseup",function(n){setTimeout(function(){k.call(m[0],n)},10)}).on("keypress.DT",function(n){if(13==n.keyCode)return!1}).attr("aria-controls",c);l(a.nTable).on("search.dt.DT",function(n,p){if(a===p)try{m[0]!==A.activeElement&&m.val(e.sSearch)}catch(t){}});return b[0]}function za(a,b,c){var d=a.oPreviousSearch,
e=a.aoPreSearchCols,h=function(g){d.sSearch=g.sSearch;d.bRegex=g.bRegex;d.bSmart=g.bSmart;d.bCaseInsensitive=g.bCaseInsensitive;d.return=g.return},f=function(g){return g.bEscapeRegex!==q?!g.bEscapeRegex:g.bRegex};$a(a);if("ssp"!=Q(a)){Rb(a,b.sSearch,c,f(b),b.bSmart,b.bCaseInsensitive,b.return);h(b);for(b=0;b<e.length;b++)Sb(a,e[b].sSearch,b,f(e[b]),e[b].bSmart,e[b].bCaseInsensitive);Tb(a)}else h(b);a.bFiltered=!0;F(a,null,"search",[a])}function Tb(a){for(var b=u.ext.search,c=a.aiDisplay,d,e,h=0,f=
b.length;h<f;h++){for(var g=[],k=0,m=c.length;k<m;k++)e=c[k],d=a.aoData[e],b[h](a,d._aFilterData,e,d._aData,k)&&g.push(e);c.length=0;l.merge(c,g)}}function Sb(a,b,c,d,e,h){if(""!==b){var f=[],g=a.aiDisplay;d=ib(b,d,e,h);for(e=0;e<g.length;e++)b=a.aoData[g[e]]._aFilterData[c],d.test(b)&&f.push(g[e]);a.aiDisplay=f}}function Rb(a,b,c,d,e,h){e=ib(b,d,e,h);var f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster;h=[];0!==u.ext.search.length&&(c=!0);var k=Ub(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(k||
c||d||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&h.push(b[c]);a.aiDisplay=h}}function ib(a,b,c,d){a=b?a:jb(a);c&&(a="^(?=.*?"+l.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0)){var h=e.match(/^"(.*)"$/);e=h?h[1]:e}return e.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(a,d?"i":"")}function Ub(a){var b=a.aoColumns,c,d;var e=!1;var h=0;for(c=a.aoData.length;h<c;h++){var f=
a.aoData[h];if(!f._aFilterData){var g=[];e=0;for(d=b.length;e<d;e++){var k=b[e];k.bSearchable?(k=T(a,h,e,"filter"),null===k&&(k=""),"string"!==typeof k&&k.toString&&(k=k.toString())):k="";k.indexOf&&-1!==k.indexOf("&")&&(Qa.innerHTML=k,k=sc?Qa.textContent:Qa.innerText);k.replace&&(k=k.replace(/[\r\n\u2028]/g,""));g.push(k)}f._aFilterData=g;f._sFilterRow=g.join("  ");e=!0}}return e}function Vb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Wb(a){return{sSearch:a.search,
bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function Nb(a){var b=a.sTableId,c=a.aanFeatures.i,d=l("<div/>",{"class":a.oClasses.sInfo,id:c?null:b+"_info"});c||(a.aoDrawCallback.push({fn:Xb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),l(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Xb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),h=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),g=
f?c.sInfo:c.sInfoEmpty;f!==h&&(g+=" "+c.sInfoFiltered);g+=c.sInfoPostFix;g=Yb(a,g);c=c.fnInfoCallback;null!==c&&(g=c.call(a.oInstance,a,d,e,h,f,g));l(b).html(g)}}function Yb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,h=a.fnRecordsDisplay(),f=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,h)).replace(/_PAGE_/g,c.call(a,f?1:Math.ceil(d/e))).replace(/_PAGES_/g,
c.call(a,f?1:Math.ceil(h/e)))}function Ba(a){var b=a.iInitDisplayStart,c=a.aoColumns;var d=a.oFeatures;var e=a.bDeferLoading;if(a.bInitialised){Ib(a);Fb(a);ya(a,a.aoHeader);ya(a,a.aoFooter);V(a,!0);d.bAutoWidth&&Za(a);var h=0;for(d=c.length;h<d;h++){var f=c[h];f.sWidth&&(f.nTh.style.width=K(f.sWidth))}F(a,null,"preInit",[a]);ka(a);c=Q(a);if("ssp"!=c||e)"ajax"==c?Oa(a,[],function(g){var k=Aa(a,g);for(h=0;h<k.length;h++)ia(a,k[h]);a.iInitDisplayStart=b;ka(a);V(a,!1);Pa(a,g)},a):(V(a,!1),Pa(a))}else setTimeout(function(){Ba(a)},
200)}function Pa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&ta(a);F(a,null,"plugin-init",[a,b]);F(a,"aoInitComplete","init",[a,b])}function kb(a,b){b=parseInt(b,10);a._iDisplayLength=b;lb(a);F(a,null,"length",[a,b])}function Jb(a){var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=Array.isArray(d[0]),h=e?d[0]:d;d=e?d[1]:d;e=l("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect});for(var f=0,g=h.length;f<g;f++)e[0][f]=new Option("number"===typeof d[f]?a.fnFormatNumber(d[f]):d[f],
h[f]);var k=l("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(k[0].id=c+"_length");k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));l("select",k).val(a._iDisplayLength).on("change.DT",function(m){kb(a,l(this).val());ja(a)});l(a.nTable).on("length.dt.DT",function(m,n,p){a===n&&l("select",k).val(p)});return k[0]}function Ob(a){var b=a.sPaginationType,c=u.ext.pager[b],d="function"===typeof c,e=function(f){ja(f)};b=l("<div/>").addClass(a.oClasses.sPaging+b)[0];
var h=a.aanFeatures;d||c.fnInit(a,b,e);h.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(f){if(d){var g=f._iDisplayStart,k=f._iDisplayLength,m=f.fnRecordsDisplay(),n=-1===k;g=n?0:Math.ceil(g/k);k=n?1:Math.ceil(m/k);m=c(g,k);var p;n=0;for(p=h.p.length;n<p;n++)gb(f,"pageButton")(f,h.p[n],n,m,g,k)}else c.fnUpdate(f,e)},sName:"pagination"}));return b}function Ra(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,h=a.fnRecordsDisplay();0===h||-1===e?d=0:"number"===typeof b?(d=b*e,d>h&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<h&&(d+=e):"last"==b?d=Math.floor((h-1)/e)*e:da(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(F(a,null,"page",[a]),c&&ja(a));return b}function Lb(a){return l("<div/>",{id:a.aanFeatures.r?null:a.sTableId+"_processing","class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function V(a,b){a.oFeatures.bProcessing&&l(a.aanFeatures.r).css("display",b?"block":"none");
F(a,null,"processing",[a,b])}function Mb(a){var b=l(a.nTable),c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,h=a.oClasses,f=b.children("caption"),g=f.length?f[0]._captionSide:null,k=l(b[0].cloneNode(!1)),m=l(b[0].cloneNode(!1)),n=b.children("tfoot");n.length||(n=null);k=l("<div/>",{"class":h.sScrollWrapper}).append(l("<div/>",{"class":h.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollHeadInner}).css({"box-sizing":"content-box",
width:c.sXInner||"100%"}).append(k.removeAttr("id").css("margin-left",0).append("top"===g?f:null).append(b.children("thead"))))).append(l("<div/>",{"class":h.sScrollBody}).css({position:"relative",overflow:"auto",width:d?K(d):null}).append(b));n&&k.append(l("<div/>",{"class":h.sScrollFoot}).css({overflow:"hidden",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===g?f:null).append(b.children("tfoot")))));
b=k.children();var p=b[0];h=b[1];var t=n?b[2]:null;if(d)l(h).on("scroll.DT",function(v){v=this.scrollLeft;p.scrollLeft=v;n&&(t.scrollLeft=v)});l(h).css("max-height",e);c.bCollapse||l(h).css("height",e);a.nScrollHead=p;a.nScrollBody=h;a.nScrollFoot=t;a.aoDrawCallback.push({fn:Ha,sName:"scrolling"});return k[0]}function Ha(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY;b=b.iBarWidth;var h=l(a.nScrollHead),f=h[0].style,g=h.children("div"),k=g[0].style,m=g.children("table");g=a.nScrollBody;var n=l(g),p=
g.style,t=l(a.nScrollFoot).children("div"),v=t.children("table"),x=l(a.nTHead),w=l(a.nTable),r=w[0],C=r.style,G=a.nTFoot?l(a.nTFoot):null,aa=a.oBrowser,L=aa.bScrollOversize;U(a.aoColumns,"nTh");var O=[],I=[],H=[],ea=[],Y,Ca=function(D){D=D.style;D.paddingTop="0";D.paddingBottom="0";D.borderTopWidth="0";D.borderBottomWidth="0";D.height=0};var fa=g.scrollHeight>g.clientHeight;if(a.scrollBarVis!==fa&&a.scrollBarVis!==q)a.scrollBarVis=fa,ta(a);else{a.scrollBarVis=fa;w.children("thead, tfoot").remove();
if(G){var ba=G.clone().prependTo(w);var la=G.find("tr");ba=ba.find("tr")}var mb=x.clone().prependTo(w);x=x.find("tr");fa=mb.find("tr");mb.find("th, td").removeAttr("tabindex");c||(p.width="100%",h[0].style.width="100%");l.each(Na(a,mb),function(D,W){Y=ua(a,D);W.style.width=a.aoColumns[Y].sWidth});G&&ca(function(D){D.style.width=""},ba);h=w.outerWidth();""===c?(C.width="100%",L&&(w.find("tbody").height()>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(w.outerWidth()-b)),h=w.outerWidth()):
""!==d&&(C.width=K(d),h=w.outerWidth());ca(Ca,fa);ca(function(D){var W=z.getComputedStyle?z.getComputedStyle(D).width:K(l(D).width());H.push(D.innerHTML);O.push(W)},fa);ca(function(D,W){D.style.width=O[W]},x);l(fa).height(0);G&&(ca(Ca,ba),ca(function(D){ea.push(D.innerHTML);I.push(K(l(D).css("width")))},ba),ca(function(D,W){D.style.width=I[W]},la),l(ba).height(0));ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+H[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow=
"hidden";D.style.width=O[W]},fa);G&&ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+ea[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow="hidden";D.style.width=I[W]},ba);Math.round(w.outerWidth())<Math.round(h)?(la=g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y")?h+b:h,L&&(g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(la-b)),""!==c&&""===d||da(a,1,"Possible column misalignment",6)):la="100%";p.width=K(la);f.width=K(la);
G&&(a.nScrollFoot.style.width=K(la));!e&&L&&(p.height=K(r.offsetHeight+b));c=w.outerWidth();m[0].style.width=K(c);k.width=K(c);d=w.height()>g.clientHeight||"scroll"==n.css("overflow-y");e="padding"+(aa.bScrollbarLeft?"Left":"Right");k[e]=d?b+"px":"0px";G&&(v[0].style.width=K(c),t[0].style.width=K(c),t[0].style[e]=d?b+"px":"0px");w.children("colgroup").insertBefore(w.children("thead"));n.trigger("scroll");!a.bSorted&&!a.bFiltered||a._drawHold||(g.scrollTop=0)}}function ca(a,b,c){for(var d=0,e=0,h=
b.length,f,g;e<h;){f=b[e].firstChild;for(g=c?c[e].firstChild:null;f;)1===f.nodeType&&(c?a(f,g,d):a(f,d),d++),f=f.nextSibling,g=c?g.nextSibling:null;e++}}function Za(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,h=d.sX,f=d.sXInner,g=c.length,k=Ia(a,"bVisible"),m=l("th",a.nTHead),n=b.getAttribute("width"),p=b.parentNode,t=!1,v,x=a.oBrowser;d=x.bScrollOversize;(v=b.style.width)&&-1!==v.indexOf("%")&&(n=v);for(v=0;v<k.length;v++){var w=c[k[v]];null!==w.sWidth&&(w.sWidth=Zb(w.sWidthOrig,p),t=!0)}if(d||
!t&&!h&&!e&&g==oa(a)&&g==m.length)for(v=0;v<g;v++)k=ua(a,v),null!==k&&(c[k].sWidth=K(m.eq(v).width()));else{g=l(b).clone().css("visibility","hidden").removeAttr("id");g.find("tbody tr").remove();var r=l("<tr/>").appendTo(g.find("tbody"));g.find("thead, tfoot").remove();g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());g.find("tfoot th, tfoot td").css("width","");m=Na(a,g.find("thead")[0]);for(v=0;v<k.length;v++)w=c[k[v]],m[v].style.width=null!==w.sWidthOrig&&""!==w.sWidthOrig?K(w.sWidthOrig):
"",w.sWidthOrig&&h&&l(m[v]).append(l("<div/>").css({width:w.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(v=0;v<k.length;v++)t=k[v],w=c[t],l($b(a,t)).clone(!1).append(w.sContentPadding).appendTo(r);l("[name]",g).removeAttr("name");w=l("<div/>").css(h||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(g).appendTo(p);h&&f?g.width(f):h?(g.css("width","auto"),g.removeAttr("width"),g.width()<p.clientWidth&&n&&g.width(p.clientWidth)):e?g.width(p.clientWidth):
n&&g.width(n);for(v=e=0;v<k.length;v++)p=l(m[v]),f=p.outerWidth()-p.width(),p=x.bBounding?Math.ceil(m[v].getBoundingClientRect().width):p.outerWidth(),e+=p,c[k[v]].sWidth=K(p-f);b.style.width=K(e);w.remove()}n&&(b.style.width=K(n));!n&&!h||a._reszEvt||(b=function(){l(z).on("resize.DT-"+a.sInstance,hb(function(){ta(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0)}function Zb(a,b){if(!a)return 0;a=l("<div/>").css("width",K(a)).appendTo(b||A.body);b=a[0].offsetWidth;a.remove();return b}function $b(a,b){var c=
ac(a,b);if(0>c)return null;var d=a.aoData[c];return d.nTr?d.anCells[b]:l("<td/>").html(T(a,c,b,"display"))[0]}function ac(a,b){for(var c,d=-1,e=-1,h=0,f=a.aoData.length;h<f;h++)c=T(a,h,b,"display")+"",c=c.replace(tc,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=h);return e}function K(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function pa(a){var b=[],c=a.aoColumns;var d=a.aaSortingFixed;var e=l.isPlainObject(d);var h=[];var f=function(n){n.length&&
!Array.isArray(n[0])?h.push(n):l.merge(h,n)};Array.isArray(d)&&f(d);e&&d.pre&&f(d.pre);f(a.aaSorting);e&&d.post&&f(d.post);for(a=0;a<h.length;a++){var g=h[a][0];f=c[g].aDataSort;d=0;for(e=f.length;d<e;d++){var k=f[d];var m=c[k].sType||"string";h[a]._idx===q&&(h[a]._idx=l.inArray(h[a][1],c[k].asSorting));b.push({src:g,col:k,dir:h[a][1],index:h[a]._idx,type:m,formatter:u.ext.type.order[m+"-pre"]})}}return b}function Hb(a){var b,c=[],d=u.ext.type.order,e=a.aoData,h=0,f=a.aiDisplayMaster;$a(a);var g=
pa(a);var k=0;for(b=g.length;k<b;k++){var m=g[k];m.formatter&&h++;bc(a,m.col)}if("ssp"!=Q(a)&&0!==g.length){k=0;for(b=f.length;k<b;k++)c[f[k]]=k;h===g.length?f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=w[r.col];C=C<G?-1:C>G?1:0;if(0!==C)return"asc"===r.dir?C:-C}C=c[n];G=c[p];return C<G?-1:C>G?1:0}):f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=
w[r.col];r=d[r.type+"-"+r.dir]||d["string-"+r.dir];C=r(C,G);if(0!==C)return C}C=c[n];G=c[p];return C<G?-1:C>G?1:0})}a.bSorted=!0}function cc(a){var b=a.aoColumns,c=pa(a);a=a.oLanguage.oAria;for(var d=0,e=b.length;d<e;d++){var h=b[d];var f=h.asSorting;var g=h.ariaTitle||h.sTitle.replace(/<.*?>/g,"");var k=h.nTh;k.removeAttribute("aria-sort");h.bSortable&&(0<c.length&&c[0].col==d?(k.setAttribute("aria-sort","asc"==c[0].dir?"ascending":"descending"),h=f[c[0].index+1]||f[0]):h=f[0],g+="asc"===h?a.sSortAscending:
a.sSortDescending);k.setAttribute("aria-label",g)}}function nb(a,b,c,d){var e=a.aaSorting,h=a.aoColumns[b].asSorting,f=function(g,k){var m=g._idx;m===q&&(m=l.inArray(g[1],h));return m+1<h.length?m+1:k?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=l.inArray(b,U(e,"0")),-1!==c?(b=f(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=h[b],e[c]._idx=b)):(e.push([b,h[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=f(e[0]),e.length=1,e[0][1]=h[b],
e[0]._idx=b):(e.length=0,e.push([b,h[0]]),e[0]._idx=0);ka(a);"function"==typeof d&&d(a)}function fb(a,b,c,d){var e=a.aoColumns[c];ob(b,{},function(h){!1!==e.bSortable&&(a.oFeatures.bProcessing?(V(a,!0),setTimeout(function(){nb(a,c,h.shiftKey,d);"ssp"!==Q(a)&&V(a,!1)},0)):nb(a,c,h.shiftKey,d))})}function Sa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=pa(a),e=a.oFeatures,h;if(e.bSort&&e.bSortClasses){e=0;for(h=b.length;e<h;e++){var f=b[e].src;l(U(a.aoData,"anCells",f)).removeClass(c+(2>e?e+1:3))}e=
0;for(h=d.length;e<h;e++)f=d[e].src,l(U(a.aoData,"anCells",f)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function bc(a,b){var c=a.aoColumns[b],d=u.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,va(a,b)));for(var h,f=u.ext.type.order[c.sType+"-pre"],g=0,k=a.aoData.length;g<k;g++)if(c=a.aoData[g],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)h=d?e[g]:T(a,g,b,"sort"),c._aSortData[b]=f?f(h):h}function qa(a){if(!a._bLoadingState){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,
order:l.extend(!0,[],a.aaSorting),search:Vb(a.oPreviousSearch),columns:l.map(a.aoColumns,function(c,d){return{visible:c.bVisible,search:Vb(a.aoPreSearchCols[d])}})};a.oSavedState=b;F(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oFeatures.bStateSave&&!a.bDestroying&&a.fnStateSaveCallback.call(a.oInstance,a,b)}}function dc(a,b,c){if(a.oFeatures.bStateSave)return b=a.fnStateLoadCallback.call(a.oInstance,a,function(d){pb(a,d,c)}),b!==q&&pb(a,b,c),!0;c()}function pb(a,b,c){var d,e=a.aoColumns;a._bLoadingState=
!0;var h=a._bInitComplete?new u.Api(a):null;if(b&&b.time){var f=F(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1!==l.inArray(!1,f))a._bLoadingState=!1;else if(f=a.iStateDuration,0<f&&b.time<+new Date-1E3*f)a._bLoadingState=!1;else if(b.columns&&e.length!==b.columns.length)a._bLoadingState=!1;else{a.oLoadedState=l.extend(!0,{},b);b.start!==q&&(null===h?(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start):Ra(a,b.start/b.length));b.length!==q&&(a._iDisplayLength=b.length);b.order!==q&&(a.aaSorting=
[],l.each(b.order,function(k,m){a.aaSorting.push(m[0]>=e.length?[0,m[1]]:m)}));b.search!==q&&l.extend(a.oPreviousSearch,Wb(b.search));if(b.columns){f=0;for(d=b.columns.length;f<d;f++){var g=b.columns[f];g.visible!==q&&(h?h.column(f).visible(g.visible,!1):e[f].bVisible=g.visible);g.search!==q&&l.extend(a.aoPreSearchCols[f],Wb(g.search))}h&&h.columns.adjust()}a._bLoadingState=!1;F(a,"aoStateLoaded","stateLoaded",[a,b])}}else a._bLoadingState=!1;c()}function Ta(a){var b=u.settings;a=l.inArray(a,U(b,
"nTable"));return-1!==a?b[a]:null}function da(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)z.console&&console.log&&console.log(c);else if(b=u.ext,b=b.sErrMode||b.errMode,a&&F(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function X(a,b,c,d){Array.isArray(c)?l.each(c,function(e,h){Array.isArray(h)?X(a,b,h[0],h[1]):
X(a,b,h)}):(d===q&&(d=c),b[c]!==q&&(a[d]=b[c]))}function qb(a,b,c){var d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];l.isPlainObject(e)?(l.isPlainObject(a[d])||(a[d]={}),l.extend(!0,a[d],e)):c&&"data"!==d&&"aaData"!==d&&Array.isArray(e)?a[d]=e.slice():a[d]=e}return a}function ob(a,b,c){l(a).on("click.DT",b,function(d){l(a).trigger("blur");c(d)}).on("keypress.DT",b,function(d){13===d.which&&(d.preventDefault(),c(d))}).on("selectstart.DT",function(){return!1})}function R(a,b,c,d){c&&a[b].push({fn:c,
sName:d})}function F(a,b,c,d){var e=[];b&&(e=l.map(a[b].slice().reverse(),function(h,f){return h.fn.apply(a.oInstance,d)}));null!==c&&(b=l.Event(c+".dt"),l(a.nTable).trigger(b,d),e.push(b.result));return e}function lb(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function gb(a,b){a=a.renderer;var c=u.ext.renderer[b];return l.isPlainObject(a)&&a[b]?c[a[b]]||c._:"string"===typeof a?c[a]||c._:c._}function Q(a){return a.oFeatures.bServerSide?
"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Da(a,b){var c=ec.numbers_length,d=Math.floor(c/2);b<=c?a=ra(0,b):a<=d?(a=ra(0,c-2),a.push("ellipsis"),a.push(b-1)):(a>=b-1-d?a=ra(b-(c-2),b):(a=ra(a-d+2,a+d-1),a.push("ellipsis"),a.push(b-1)),a.splice(0,0,"ellipsis"),a.splice(0,0,0));a.DT_el="span";return a}function Xa(a){l.each({num:function(b){return Ua(b,a)},"num-fmt":function(b){return Ua(b,a,rb)},"html-num":function(b){return Ua(b,a,Va)},"html-num-fmt":function(b){return Ua(b,a,Va,rb)}},function(b,
c){M.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(M.type.search[b+a]=M.type.search.html)})}function fc(a){return function(){var b=[Ta(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return u.ext.internal[a].apply(this,b)}}var u=function(a,b){if(this instanceof u)return l(a).DataTable(b);b=a;this.$=function(f,g){return this.api(!0).$(f,g)};this._=function(f,g){return this.api(!0).rows(f,g).data()};this.api=function(f){return f?new B(Ta(this[M.iApiIndex])):new B(this)};this.fnAddData=
function(f,g){var k=this.api(!0);f=Array.isArray(f)&&(Array.isArray(f[0])||l.isPlainObject(f[0]))?k.rows.add(f):k.row.add(f);(g===q||g)&&k.draw();return f.flatten().toArray()};this.fnAdjustColumnSizing=function(f){var g=this.api(!0).columns.adjust(),k=g.settings()[0],m=k.oScroll;f===q||f?g.draw(!1):(""!==m.sX||""!==m.sY)&&Ha(k)};this.fnClearTable=function(f){var g=this.api(!0).clear();(f===q||f)&&g.draw()};this.fnClose=function(f){this.api(!0).row(f).child.hide()};this.fnDeleteRow=function(f,g,k){var m=
this.api(!0);f=m.rows(f);var n=f.settings()[0],p=n.aoData[f[0][0]];f.remove();g&&g.call(this,n,p);(k===q||k)&&m.draw();return p};this.fnDestroy=function(f){this.api(!0).destroy(f)};this.fnDraw=function(f){this.api(!0).draw(f)};this.fnFilter=function(f,g,k,m,n,p){n=this.api(!0);null===g||g===q?n.search(f,k,m,p):n.column(g).search(f,k,m,p);n.draw()};this.fnGetData=function(f,g){var k=this.api(!0);if(f!==q){var m=f.nodeName?f.nodeName.toLowerCase():"";return g!==q||"td"==m||"th"==m?k.cell(f,g).data():
k.row(f).data()||null}return k.data().toArray()};this.fnGetNodes=function(f){var g=this.api(!0);return f!==q?g.row(f).node():g.rows().nodes().flatten().toArray()};this.fnGetPosition=function(f){var g=this.api(!0),k=f.nodeName.toUpperCase();return"TR"==k?g.row(f).index():"TD"==k||"TH"==k?(f=g.cell(f).index(),[f.row,f.columnVisible,f.column]):null};this.fnIsOpen=function(f){return this.api(!0).row(f).child.isShown()};this.fnOpen=function(f,g,k){return this.api(!0).row(f).child(g,k).show().child()[0]};
this.fnPageChange=function(f,g){f=this.api(!0).page(f);(g===q||g)&&f.draw(!1)};this.fnSetColumnVis=function(f,g,k){f=this.api(!0).column(f).visible(g);(k===q||k)&&f.columns.adjust().draw()};this.fnSettings=function(){return Ta(this[M.iApiIndex])};this.fnSort=function(f){this.api(!0).order(f).draw()};this.fnSortListener=function(f,g,k){this.api(!0).order.listener(f,g,k)};this.fnUpdate=function(f,g,k,m,n){var p=this.api(!0);k===q||null===k?p.row(g).data(f):p.cell(g,k).data(f);(n===q||n)&&p.columns.adjust();
(m===q||m)&&p.draw();return 0};this.fnVersionCheck=M.fnVersionCheck;var c=this,d=b===q,e=this.length;d&&(b={});this.oApi=this.internal=M.internal;for(var h in u.ext.internal)h&&(this[h]=fc(h));this.each(function(){var f={},g=1<e?qb(f,b,!0):b,k=0,m;f=this.getAttribute("id");var n=!1,p=u.defaults,t=l(this);if("table"!=this.nodeName.toLowerCase())da(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{zb(p);Ab(p.column);P(p,p,!0);P(p.column,p.column,!0);P(p,l.extend(g,t.data()),!0);var v=
u.settings;k=0;for(m=v.length;k<m;k++){var x=v[k];if(x.nTable==this||x.nTHead&&x.nTHead.parentNode==this||x.nTFoot&&x.nTFoot.parentNode==this){var w=g.bRetrieve!==q?g.bRetrieve:p.bRetrieve;if(d||w)return x.oInstance;if(g.bDestroy!==q?g.bDestroy:p.bDestroy){x.oInstance.fnDestroy();break}else{da(x,0,"Cannot reinitialise DataTable",3);return}}if(x.sTableId==this.id){v.splice(k,1);break}}if(null===f||""===f)this.id=f="DataTables_Table_"+u.ext._unique++;var r=l.extend(!0,{},u.models.oSettings,{sDestroyWidth:t[0].style.width,
sInstance:f,sTableId:f});r.nTable=this;r.oApi=c.internal;r.oInit=g;v.push(r);r.oInstance=1===c.length?c:t.dataTable();zb(g);ma(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=Array.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=qb(l.extend(!0,{},p),g);X(r.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));X(r,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);X(r.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);X(r.oLanguage,g,"fnInfoCallback");
R(r,"aoDrawCallback",g.fnDrawCallback,"user");R(r,"aoServerParams",g.fnServerParams,"user");R(r,"aoStateSaveParams",g.fnStateSaveParams,"user");R(r,"aoStateLoadParams",g.fnStateLoadParams,"user");R(r,"aoStateLoaded",g.fnStateLoaded,"user");R(r,"aoRowCallback",g.fnRowCallback,"user");R(r,"aoRowCreatedCallback",g.fnCreatedRow,"user");R(r,"aoHeaderCallback",g.fnHeaderCallback,"user");R(r,"aoFooterCallback",g.fnFooterCallback,"user");R(r,"aoInitComplete",g.fnInitComplete,"user");R(r,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");r.rowIdFn=na(g.rowId);Bb(r);var C=r.oClasses;l.extend(C,u.ext.classes,g.oClasses);t.addClass(C.sTable);r.iInitDisplayStart===q&&(r.iInitDisplayStart=g.iDisplayStart,r._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(r.bDeferLoading=!0,f=Array.isArray(g.iDeferLoading),r._iRecordsDisplay=f?g.iDeferLoading[0]:g.iDeferLoading,r._iRecordsTotal=f?g.iDeferLoading[1]:g.iDeferLoading);var G=r.oLanguage;l.extend(!0,G,g.oLanguage);G.sUrl?(l.ajax({dataType:"json",url:G.sUrl,
success:function(I){P(p.oLanguage,I);ma(I);l.extend(!0,G,I);F(r,null,"i18n",[r]);Ba(r)},error:function(){Ba(r)}}),n=!0):F(r,null,"i18n",[r]);null===g.asStripeClasses&&(r.asStripeClasses=[C.sStripeOdd,C.sStripeEven]);f=r.asStripeClasses;var aa=t.children("tbody").find("tr").eq(0);-1!==l.inArray(!0,l.map(f,function(I,H){return aa.hasClass(I)}))&&(l("tbody tr",this).removeClass(f.join(" ")),r.asDestroyStripes=f.slice());f=[];v=this.getElementsByTagName("thead");0!==v.length&&(xa(r.aoHeader,v[0]),f=Na(r));
if(null===g.aoColumns)for(v=[],k=0,m=f.length;k<m;k++)v.push(null);else v=g.aoColumns;k=0;for(m=v.length;k<m;k++)Ya(r,f?f[k]:null);Db(r,g.aoColumnDefs,v,function(I,H){Ga(r,I,H)});if(aa.length){var L=function(I,H){return null!==I.getAttribute("data-"+H)?H:null};l(aa[0]).children("th, td").each(function(I,H){var ea=r.aoColumns[I];if(ea.mData===I){var Y=L(H,"sort")||L(H,"order");H=L(H,"filter")||L(H,"search");if(null!==Y||null!==H)ea.mData={_:I+".display",sort:null!==Y?I+".@data-"+Y:q,type:null!==Y?
I+".@data-"+Y:q,filter:null!==H?I+".@data-"+H:q},Ga(r,I)}})}var O=r.oFeatures;f=function(){if(g.aaSorting===q){var I=r.aaSorting;k=0;for(m=I.length;k<m;k++)I[k][1]=r.aoColumns[k].asSorting[0]}Sa(r);O.bSort&&R(r,"aoDrawCallback",function(){if(r.bSorted){var Y=pa(r),Ca={};l.each(Y,function(fa,ba){Ca[ba.src]=ba.dir});F(r,null,"order",[r,Y,Ca]);cc(r)}});R(r,"aoDrawCallback",function(){(r.bSorted||"ssp"===Q(r)||O.bDeferRender)&&Sa(r)},"sc");I=t.children("caption").each(function(){this._captionSide=l(this).css("caption-side")});
var H=t.children("thead");0===H.length&&(H=l("<thead/>").appendTo(t));r.nTHead=H[0];var ea=t.children("tbody");0===ea.length&&(ea=l("<tbody/>").insertAfter(H));r.nTBody=ea[0];H=t.children("tfoot");0===H.length&&0<I.length&&(""!==r.oScroll.sX||""!==r.oScroll.sY)&&(H=l("<tfoot/>").appendTo(t));0===H.length||0===H.children().length?t.addClass(C.sNoFooter):0<H.length&&(r.nTFoot=H[0],xa(r.aoFooter,r.nTFoot));if(g.aaData)for(k=0;k<g.aaData.length;k++)ia(r,g.aaData[k]);else(r.bDeferLoading||"dom"==Q(r))&&
Ja(r,l(r.nTBody).children("tr"));r.aiDisplay=r.aiDisplayMaster.slice();r.bInitialised=!0;!1===n&&Ba(r)};R(r,"aoDrawCallback",qa,"state_save");g.bStateSave?(O.bStateSave=!0,dc(r,g,f)):f()}});c=null;return this},M,y,J,sb={},gc=/[\r\n\u2028]/g,Va=/<.*?>/g,uc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,vc=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,rb=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,Z=function(a){return a&&!0!==a&&"-"!==a?!1:!0},hc=
function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},ic=function(a,b){sb[b]||(sb[b]=new RegExp(jb(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(sb[b],"."):a},tb=function(a,b,c){var d="string"===typeof a;if(Z(a))return!0;b&&d&&(a=ic(a,b));c&&d&&(a=a.replace(rb,""));return!isNaN(parseFloat(a))&&isFinite(a)},jc=function(a,b,c){return Z(a)?!0:Z(a)||"string"===typeof a?tb(a.replace(Va,""),b,c)?!0:null:null},U=function(a,b,c){var d=[],e=0,h=a.length;if(c!==q)for(;e<
h;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<h;e++)a[e]&&d.push(a[e][b]);return d},Ea=function(a,b,c,d){var e=[],h=0,f=b.length;if(d!==q)for(;h<f;h++)a[b[h]][c]&&e.push(a[b[h]][c][d]);else for(;h<f;h++)e.push(a[b[h]][c]);return e},ra=function(a,b){var c=[];if(b===q){b=0;var d=a}else d=b,b=a;for(a=b;a<d;a++)c.push(a);return c},kc=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},Ma=function(a){a:{if(!(2>a.length)){var b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<
e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];e=a.length;var h,f=0;d=0;a:for(;d<e;d++){c=a[d];for(h=0;h<f;h++)if(b[h]===c)continue a;b.push(c);f++}return b},lc=function(a,b){if(Array.isArray(b))for(var c=0;c<b.length;c++)lc(a,b[c]);else a.push(b);return a},mc=function(a,b){b===q&&(b=0);return-1!==this.indexOf(a,b)};Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});Array.prototype.includes||(Array.prototype.includes=mc);
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});String.prototype.includes||(String.prototype.includes=mc);u.util={throttle:function(a,b){var c=b!==q?b:200,d,e;return function(){var h=this,f=+new Date,g=arguments;d&&f<d+c?(clearTimeout(e),e=setTimeout(function(){d=q;a.apply(h,g)},c)):(d=f,a.apply(h,g))}},escapeRegex:function(a){return a.replace(vc,"\\$1")},set:function(a){if(l.isPlainObject(a))return u.util.set(a._);if(null===
a)return function(){};if("function"===typeof a)return function(c,d,e){a(c,"set",d,e)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(c,d){c[a]=d};var b=function(c,d,e){e=cb(e);var h=e[e.length-1];for(var f,g,k=0,m=e.length-1;k<m;k++){if("__proto__"===e[k]||"constructor"===e[k])throw Error("Cannot set prototype values");f=e[k].match(Fa);g=e[k].match(sa);if(f){e[k]=e[k].replace(Fa,"");c[e[k]]=[];h=e.slice();h.splice(0,k+1);f=h.join(".");if(Array.isArray(d))for(g=
0,m=d.length;g<m;g++)h={},b(h,d[g],f),c[e[k]].push(h);else c[e[k]]=d;return}g&&(e[k]=e[k].replace(sa,""),c=c[e[k]](d));if(null===c[e[k]]||c[e[k]]===q)c[e[k]]={};c=c[e[k]]}if(h.match(sa))c[h.replace(sa,"")](d);else c[h.replace(Fa,"")]=d};return function(c,d){return b(c,d,a)}},get:function(a){if(l.isPlainObject(a)){var b={};l.each(a,function(d,e){e&&(b[d]=u.util.get(e))});return function(d,e,h,f){var g=b[e]||b._;return g!==q?g(d,e,h,f):d}}if(null===a)return function(d){return d};if("function"===typeof a)return function(d,
e,h,f){return a(d,e,h,f)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(d,e){return d[a]};var c=function(d,e,h){if(""!==h){var f=cb(h);for(var g=0,k=f.length;g<k;g++){h=f[g].match(Fa);var m=f[g].match(sa);if(h){f[g]=f[g].replace(Fa,"");""!==f[g]&&(d=d[f[g]]);m=[];f.splice(0,g+1);f=f.join(".");if(Array.isArray(d))for(g=0,k=d.length;g<k;g++)m.push(c(d[g],e,f));d=h[0].substring(1,h[0].length-1);d=""===d?m:m.join(d);break}else if(m){f[g]=f[g].replace(sa,
"");d=d[f[g]]();continue}if(null===d||d[f[g]]===q)return q;d=d[f[g]]}}return d};return function(d,e){return c(d,e,a)}}};var S=function(a,b,c){a[b]!==q&&(a[c]=a[b])},Fa=/\[.*?\]$/,sa=/\(\)$/,na=u.util.get,ha=u.util.set,jb=u.util.escapeRegex,Qa=l("<div>")[0],sc=Qa.textContent!==q,tc=/<.*?>/g,hb=u.util.throttle,nc=[],N=Array.prototype,wc=function(a){var b,c=u.settings,d=l.map(c,function(h,f){return h.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase()){var e=
l.inArray(a,d);return-1!==e?[c[e]]:null}if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?b=l(a):a instanceof l&&(b=a)}else return[];if(b)return b.map(function(h){e=l.inArray(this,d);return-1!==e?c[e]:null}).toArray()};var B=function(a,b){if(!(this instanceof B))return new B(a,b);var c=[],d=function(f){(f=wc(f))&&c.push.apply(c,f)};if(Array.isArray(a))for(var e=0,h=a.length;e<h;e++)d(a[e]);else d(a);this.context=Ma(c);b&&l.merge(this,b);this.selector={rows:null,
cols:null,opts:null};B.extend(this,this,nc)};u.Api=B;l.extend(B.prototype,{any:function(){return 0!==this.count()},concat:N.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new B(b[a],this[a]):null},filter:function(a){var b=[];if(N.filter)b=N.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);
return new B(this.context,b)},flatten:function(){var a=[];return new B(this.context,a.concat.apply(a,this.toArray()))},join:N.join,indexOf:N.indexOf||function(a,b){b=b||0;for(var c=this.length;b<c;b++)if(this[b]===a)return b;return-1},iterator:function(a,b,c,d){var e=[],h,f,g=this.context,k,m=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);var n=0;for(h=g.length;n<h;n++){var p=new B(g[n]);if("table"===b){var t=c.call(p,g[n],n);t!==q&&e.push(t)}else if("columns"===b||"rows"===b)t=c.call(p,g[n],
this[n],n),t!==q&&e.push(t);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){var v=this[n];"column-rows"===b&&(k=Wa(g[n],m.opts));var x=0;for(f=v.length;x<f;x++)t=v[x],t="cell"===b?c.call(p,g[n],t.row,t.column,n,x):c.call(p,g[n],t,n,x,k),t!==q&&e.push(t)}}return e.length||d?(a=new B(g,a?e.concat.apply([],e):e),b=a.selector,b.rows=m.rows,b.cols=m.cols,b.opts=m.opts,a):this},lastIndexOf:N.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,
map:function(a){var b=[];if(N.map)b=N.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new B(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:N.pop,push:N.push,reduce:N.reduce||function(a,b){return Cb(this,a,b,0,this.length,1)},reduceRight:N.reduceRight||function(a,b){return Cb(this,a,b,this.length-1,-1,-1)},reverse:N.reverse,selector:null,shift:N.shift,slice:function(){return new B(this.context,this)},sort:N.sort,
splice:N.splice,toArray:function(){return N.slice.call(this)},to$:function(){return l(this)},toJQuery:function(){return l(this)},unique:function(){return new B(this.context,Ma(this))},unshift:N.unshift});B.extend=function(a,b,c){if(c.length&&b&&(b instanceof B||b.__dt_wrapper)){var d,e=function(g,k,m){return function(){var n=k.apply(g,arguments);B.extend(n,n,m.methodExt);return n}};var h=0;for(d=c.length;h<d;h++){var f=c[h];b[f.name]="function"===f.type?e(a,f.val,f):"object"===f.type?{}:f.val;b[f.name].__dt_wrapper=
!0;B.extend(a,b[f.name],f.propExt)}}};B.register=y=function(a,b){if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)B.register(a[c],b);else{d=a.split(".");var e=nc,h;a=0;for(c=d.length;a<c;a++){var f=(h=-1!==d[a].indexOf("()"))?d[a].replace("()",""):d[a];a:{var g=0;for(var k=e.length;g<k;g++)if(e[g].name===f){g=e[g];break a}g=null}g||(g={name:f,val:{},methodExt:[],propExt:[],type:"object"},e.push(g));a===c-1?(g.val=b,g.type="function"===typeof b?"function":l.isPlainObject(b)?"object":"other"):e=h?
g.methodExt:g.propExt}}};B.registerPlural=J=function(a,b,c){B.register(a,c);B.register(b,function(){var d=c.apply(this,arguments);return d===this?this:d instanceof B?d.length?Array.isArray(d[0])?new B(d.context,d[0]):d[0]:q:d})};var oc=function(a,b){if(Array.isArray(a))return l.map(a,function(d){return oc(d,b)});if("number"===typeof a)return[b[a]];var c=l.map(b,function(d,e){return d.nTable});return l(c).filter(a).map(function(d){d=l.inArray(this,c);return b[d]}).toArray()};y("tables()",function(a){return a!==
q&&null!==a?new B(oc(a,this.context)):this});y("table()",function(a){a=this.tables(a);var b=a.context;return b.length?new B(b[0]):a});J("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});J("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});J("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});J("tables().footer()","table().footer()",
function(){return this.iterator("table",function(a){return a.nTFoot},1)});J("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});y("draw()",function(a){return this.iterator("table",function(b){"page"===a?ja(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),ka(b,!1===a))})});y("page()",function(a){return a===q?this.page.info().page:this.iterator("table",function(b){Ra(b,a)})});y("page.info()",function(a){if(0===this.context.length)return q;
a=this.context[0];var b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===Q(a)}});y("page.len()",function(a){return a===q?0!==this.context.length?this.context[0]._iDisplayLength:q:this.iterator("table",function(b){kb(b,a)})});var pc=function(a,b,c){if(c){var d=new B(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==
Q(a))ka(a,b);else{V(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();Oa(a,[],function(h){Ka(a);h=Aa(a,h);for(var f=0,g=h.length;f<g;f++)ia(a,h[f]);ka(a,b);V(a,!1)})}};y("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});y("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});y("ajax.reload()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});y("ajax.url()",function(a){var b=this.context;if(a===q){if(0===b.length)return q;
b=b[0];return b.ajax?l.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(c){l.isPlainObject(c.ajax)?c.ajax.url=a:c.ajax=a})});y("ajax.url().load()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});var ub=function(a,b,c,d,e){var h=[],f,g,k;var m=typeof b;b&&"string"!==m&&"function"!==m&&b.length!==q||(b=[b]);m=0;for(g=b.length;m<g;m++){var n=b[m]&&b[m].split&&!b[m].match(/[\[\(:]/)?b[m].split(","):[b[m]];var p=0;for(k=n.length;p<k;p++)(f=
c("string"===typeof n[p]?n[p].trim():n[p]))&&f.length&&(h=h.concat(f))}a=M.selector[a];if(a.length)for(m=0,g=a.length;m<g;m++)h=a[m](d,e,h);return Ma(h)},vb=function(a){a||(a={});a.filter&&a.search===q&&(a.search=a.filter);return l.extend({search:"none",order:"current",page:"all"},a)},wb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Wa=function(a,b){var c=[],d=a.aiDisplay;var e=a.aiDisplayMaster;
var h=b.search;var f=b.order;b=b.page;if("ssp"==Q(a))return"removed"===h?[]:ra(0,e.length);if("current"==b)for(f=a._iDisplayStart,a=a.fnDisplayEnd();f<a;f++)c.push(d[f]);else if("current"==f||"applied"==f)if("none"==h)c=e.slice();else if("applied"==h)c=d.slice();else{if("removed"==h){var g={};f=0;for(a=d.length;f<a;f++)g[d[f]]=null;c=l.map(e,function(k){return g.hasOwnProperty(k)?null:k})}}else if("index"==f||"original"==f)for(f=0,a=a.aoData.length;f<a;f++)"none"==h?c.push(f):(e=l.inArray(f,d),(-1===
e&&"removed"==h||0<=e&&"applied"==h)&&c.push(f));return c},xc=function(a,b,c){var d;return ub("row",b,function(e){var h=hc(e),f=a.aoData;if(null!==h&&!c)return[h];d||(d=Wa(a,c));if(null!==h&&-1!==l.inArray(h,d))return[h];if(null===e||e===q||""===e)return d;if("function"===typeof e)return l.map(d,function(k){var m=f[k];return e(k,m._aData,m.nTr)?k:null});if(e.nodeName){h=e._DT_RowIndex;var g=e._DT_CellIndex;if(h!==q)return f[h]&&f[h].nTr===e?[h]:[];if(g)return f[g.row]&&f[g.row].nTr===e.parentNode?
[g.row]:[];h=l(e).closest("*[data-dt-row]");return h.length?[h.data("dt-row")]:[]}if("string"===typeof e&&"#"===e.charAt(0)&&(h=a.aIds[e.replace(/^#/,"")],h!==q))return[h.idx];h=kc(Ea(a.aoData,d,"nTr"));return l(h).filter(e).map(function(){return this._DT_RowIndex}).toArray()},a,c)};y("rows()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=vb(b);var c=this.iterator("table",function(d){return xc(d,a,b)},1);c.selector.rows=a;c.selector.opts=b;return c});y("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||q},1)});y("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return Ea(a.aoData,b,"_aData")},1)});J("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){b=b.aoData[c];return"search"===a?b._aFilterData:b._aSortData},1)});J("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){wa(b,c,a)})});J("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,
b){return b},1)});J("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var h=0,f=this[d].length;h<f;h++){var g=c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);b.push((!0===a?"#":"")+g)}return new B(c,b)});J("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,h=e[c],f,g;e.splice(c,1);var k=0;for(f=e.length;k<f;k++){var m=e[k];var n=m.anCells;null!==m.nTr&&(m.nTr._DT_RowIndex=k);if(null!==n)for(m=0,g=n.length;m<
g;m++)n[m]._DT_CellIndex.row=k}La(b.aiDisplayMaster,c);La(b.aiDisplay,c);La(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;lb(b);c=b.rowIdFn(h._aData);c!==q&&delete b.aIds[c]});this.iterator("table",function(b){for(var c=0,d=b.aoData.length;c<d;c++)b.aoData[c].idx=c});return this});y("rows.add()",function(a){var b=this.iterator("table",function(d){var e,h=[];var f=0;for(e=a.length;f<e;f++){var g=a[f];g.nodeName&&"TR"===g.nodeName.toUpperCase()?h.push(Ja(d,g)[0]):h.push(ia(d,g))}return h},1),
c=this.rows(-1);c.pop();l.merge(c,b);return c});y("row()",function(a,b){return wb(this.rows(a,b))});y("row().data()",function(a){var b=this.context;if(a===q)return b.length&&this.length?b[0].aoData[this[0]]._aData:q;var c=b[0].aoData[this[0]];c._aData=a;Array.isArray(a)&&c.nTr&&c.nTr.id&&ha(b[0].rowId)(a,c.nTr.id);wa(b[0],this[0],"data");return this});y("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});y("row.add()",function(a){a instanceof
l&&a.length&&(a=a[0]);var b=this.iterator("table",function(c){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?Ja(c,a)[0]:ia(c,a)});return this.row(b[0])});l(A).on("plugin-init.dt",function(a,b){var c=new B(b);c.on("stateSaveParams",function(d,e,h){d=c.rows().iterator("row",function(f,g){return f.aoData[g]._detailsShow?g:q});h.childRows=c.rows(d).ids(!0).toArray()});(a=c.state.loaded())&&a.childRows&&c.rows(a.childRows).every(function(){F(b,null,"requestChild",[this])})});var yc=function(a,b,c,
d){var e=[],h=function(f,g){if(Array.isArray(f)||f instanceof l)for(var k=0,m=f.length;k<m;k++)h(f[k],g);else f.nodeName&&"tr"===f.nodeName.toLowerCase()?e.push(f):(k=l("<tr><td></td></tr>").addClass(g),l("td",k).addClass(g).html(f)[0].colSpan=oa(a),e.push(k[0]))};h(c,d);b._details&&b._details.detach();b._details=l(e);b._detailsShow&&b._details.insertAfter(b.nTr)},xb=function(a,b){var c=a.context;c.length&&(a=c[0].aoData[b!==q?b:a[0]])&&a._details&&(a._details.remove(),a._detailsShow=q,a._details=
q,l(a.nTr).removeClass("dt-hasChild"),qa(c[0]))},qc=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];d._details&&((d._detailsShow=b)?(d._details.insertAfter(d.nTr),l(d.nTr).addClass("dt-hasChild")):(d._details.detach(),l(d.nTr).removeClass("dt-hasChild")),F(c[0],null,"childRow",[b,a.row(a[0])]),zc(c[0]),qa(c[0]))}},zc=function(a){var b=new B(a),c=a.aoData;b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<U(c,"_details").length&&(b.on("draw.dt.DT_details",
function(d,e){a===e&&b.rows({page:"current"}).eq(0).each(function(h){h=c[h];h._detailsShow&&h._details.insertAfter(h.nTr)})}),b.on("column-visibility.dt.DT_details",function(d,e,h,f){if(a===e)for(e=oa(e),h=0,f=c.length;h<f;h++)d=c[h],d._details&&d._details.children("td[colspan]").attr("colspan",e)}),b.on("destroy.dt.DT_details",function(d,e){if(a===e)for(d=0,e=c.length;d<e;d++)c[d]._details&&xb(b,d)}))};y("row().child()",function(a,b){var c=this.context;if(a===q)return c.length&&this.length?c[0].aoData[this[0]]._details:
q;!0===a?this.child.show():!1===a?xb(this):c.length&&this.length&&yc(c[0],c[0].aoData[this[0]],a,b);return this});y(["row().child.show()","row().child().show()"],function(a){qc(this,!0);return this});y(["row().child.hide()","row().child().hide()"],function(){qc(this,!1);return this});y(["row().child.remove()","row().child().remove()"],function(){xb(this);return this});y("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var Ac=
/^([^:]+):(name|visIdx|visible)$/,rc=function(a,b,c,d,e){c=[];d=0;for(var h=e.length;d<h;d++)c.push(T(a,e[d],b));return c},Bc=function(a,b,c){var d=a.aoColumns,e=U(d,"sName"),h=U(d,"nTh");return ub("column",b,function(f){var g=hc(f);if(""===f)return ra(d.length);if(null!==g)return[0<=g?g:d.length+g];if("function"===typeof f){var k=Wa(a,c);return l.map(d,function(p,t){return f(t,rc(a,t,0,0,k),h[t])?t:null})}var m="string"===typeof f?f.match(Ac):"";if(m)switch(m[2]){case "visIdx":case "visible":g=parseInt(m[1],
10);if(0>g){var n=l.map(d,function(p,t){return p.bVisible?t:null});return[n[n.length+g]]}return[ua(a,g)];case "name":return l.map(e,function(p,t){return p===m[1]?t:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];g=l(h).filter(f).map(function(){return l.inArray(this,h)}).toArray();if(g.length||!f.nodeName)return g;g=l(f).closest("*[data-dt-column]");return g.length?[g.data("dt-column")]:[]},a,c)};y("columns()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,
a="");b=vb(b);var c=this.iterator("table",function(d){return Bc(d,a,b)},1);c.selector.cols=a;c.selector.opts=b;return c});J("columns().header()","column().header()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTh},1)});J("columns().footer()","column().footer()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTf},1)});J("columns().data()","column().data()",function(){return this.iterator("column-rows",rc,1)});J("columns().dataSrc()",
"column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});J("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,h){return Ea(b.aoData,h,"search"===a?"_aFilterData":"_aSortData",c)},1)});J("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return Ea(a.aoData,e,"anCells",b)},1)});J("columns().visible()","column().visible()",function(a,b){var c=
this,d=this.iterator("column",function(e,h){if(a===q)return e.aoColumns[h].bVisible;var f=e.aoColumns,g=f[h],k=e.aoData,m;if(a!==q&&g.bVisible!==a){if(a){var n=l.inArray(!0,U(f,"bVisible"),h+1);f=0;for(m=k.length;f<m;f++){var p=k[f].nTr;e=k[f].anCells;p&&p.insertBefore(e[h],e[n]||null)}}else l(U(e.aoData,"anCells",h)).detach();g.bVisible=a}});a!==q&&this.iterator("table",function(e){ya(e,e.aoHeader);ya(e,e.aoFooter);e.aiDisplay.length||l(e.nTBody).find("td[colspan]").attr("colspan",oa(e));qa(e);c.iterator("column",
function(h,f){F(h,null,"column-visibility",[h,f,a,b])});(b===q||b)&&c.columns.adjust()});return d});J("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?va(b,c):c},1)});y("columns.adjust()",function(){return this.iterator("table",function(a){ta(a)},1)});y("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ua(c,b);if("fromData"===a||"toVisible"===a)return va(c,b)}});
y("column()",function(a,b){return wb(this.columns(a,b))});var Cc=function(a,b,c){var d=a.aoData,e=Wa(a,c),h=kc(Ea(d,e,"anCells")),f=l(lc([],h)),g,k=a.aoColumns.length,m,n,p,t,v,x;return ub("cell",b,function(w){var r="function"===typeof w;if(null===w||w===q||r){m=[];n=0;for(p=e.length;n<p;n++)for(g=e[n],t=0;t<k;t++)v={row:g,column:t},r?(x=d[g],w(v,T(a,g,t),x.anCells?x.anCells[t]:null)&&m.push(v)):m.push(v);return m}if(l.isPlainObject(w))return w.column!==q&&w.row!==q&&-1!==l.inArray(w.row,e)?[w]:[];
r=f.filter(w).map(function(C,G){return{row:G._DT_CellIndex.row,column:G._DT_CellIndex.column}}).toArray();if(r.length||!w.nodeName)return r;x=l(w).closest("*[data-dt-row]");return x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[]},a,c)};y("cells()",function(a,b,c){l.isPlainObject(a)&&(a.row===q?(c=a,a=null):(c=b,b=null));l.isPlainObject(b)&&(c=b,b=null);if(null===b||b===q)return this.iterator("table",function(n){return Cc(n,a,vb(c))});var d=c?{page:c.page,order:c.order,search:c.search}:
{},e=this.columns(b,d),h=this.rows(a,d),f,g,k,m;d=this.iterator("table",function(n,p){n=[];f=0;for(g=h[p].length;f<g;f++)for(k=0,m=e[p].length;k<m;k++)n.push({row:h[p][f],column:e[p][k]});return n},1);d=c&&c.selected?this.cells(d,c):d;l.extend(d.selector,{cols:b,rows:a,opts:c});return d});J("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:q},1)});y("cells().data()",function(){return this.iterator("cell",function(a,
b,c){return T(a,b,c)},1)});J("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});J("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return T(b,c,d,a)},1)});J("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:va(a,c)}},1)});J("cells().invalidate()","cell().invalidate()",
function(a){return this.iterator("cell",function(b,c,d){wa(b,c,a,d)})});y("cell()",function(a,b,c){return wb(this.cells(a,b,c))});y("cell().data()",function(a){var b=this.context,c=this[0];if(a===q)return b.length&&c.length?T(b[0],c[0].row,c[0].column):q;Eb(b[0],c[0].row,c[0].column,a);wa(b[0],c[0].row,"data",c[0].column);return this});y("order()",function(a,b){var c=this.context;if(a===q)return 0!==c.length?c[0].aaSorting:q;"number"===typeof a?a=[[a,b]]:a.length&&!Array.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));
return this.iterator("table",function(d){d.aaSorting=a.slice()})});y("order.listener()",function(a,b,c){return this.iterator("table",function(d){fb(d,a,b,c)})});y("order.fixed()",function(a){if(!a){var b=this.context;b=b.length?b[0].aaSortingFixed:q;return Array.isArray(b)?{pre:b}:b}return this.iterator("table",function(c){c.aaSortingFixed=l.extend(!0,{},a)})});y(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];l.each(b[d],function(h,
f){e.push([f,a])});c.aaSorting=e})});y("search()",function(a,b,c,d){var e=this.context;return a===q?0!==e.length?e[0].oPreviousSearch.sSearch:q:this.iterator("table",function(h){h.oFeatures.bFilter&&za(h,l.extend({},h.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});J("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,h){var f=e.aoPreSearchCols;if(a===q)return f[h].sSearch;e.oFeatures.bFilter&&
(l.extend(f[h],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),za(e,e.oPreviousSearch,1))})});y("state()",function(){return this.context.length?this.context[0].oSavedState:null});y("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});y("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});y("state.save()",function(){return this.iterator("table",function(a){qa(a)})});
u.versionCheck=u.fnVersionCheck=function(a){var b=u.version.split(".");a=a.split(".");for(var c,d,e=0,h=a.length;e<h;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};u.isDataTable=u.fnIsDataTable=function(a){var b=l(a).get(0),c=!1;if(a instanceof u.Api)return!0;l.each(u.settings,function(d,e){d=e.nScrollHead?l("table",e.nScrollHead)[0]:null;var h=e.nScrollFoot?l("table",e.nScrollFoot)[0]:null;if(e.nTable===b||d===b||h===b)c=!0});return c};u.tables=u.fnTables=function(a){var b=
!1;l.isPlainObject(a)&&(b=a.api,a=a.visible);var c=l.map(u.settings,function(d){if(!a||a&&l(d.nTable).is(":visible"))return d.nTable});return b?new B(c):c};u.camelToHungarian=P;y("$()",function(a,b){b=this.rows(b).nodes();b=l(b);return l([].concat(b.filter(a).toArray(),b.find(a).toArray()))});l.each(["on","one","off"],function(a,b){y(b+"()",function(){var c=Array.prototype.slice.call(arguments);c[0]=l.map(c[0].split(/\s/),function(e){return e.match(/\.dt\b/)?e:e+".dt"}).join(" ");var d=l(this.tables().nodes());
d[b].apply(d,c);return this})});y("clear()",function(){return this.iterator("table",function(a){Ka(a)})});y("settings()",function(){return new B(this.context,this.context)});y("init()",function(){var a=this.context;return a.length?a[0].oInit:null});y("data()",function(){return this.iterator("table",function(a){return U(a.aoData,"_aData")}).flatten()});y("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,h=b.nTBody,f=b.nTHead,
g=b.nTFoot,k=l(e);h=l(h);var m=l(b.nTableWrapper),n=l.map(b.aoData,function(t){return t.nTr}),p;b.bDestroying=!0;F(b,"aoDestroyCallback","destroy",[b]);a||(new B(b)).columns().visible(!0);m.off(".DT").find(":not(tbody *)").off(".DT");l(z).off(".DT-"+b.sInstance);e!=f.parentNode&&(k.children("thead").detach(),k.append(f));g&&e!=g.parentNode&&(k.children("tfoot").detach(),k.append(g));b.aaSorting=[];b.aaSortingFixed=[];Sa(b);l(n).removeClass(b.asStripeClasses.join(" "));l("th, td",f).removeClass(d.sSortable+
" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);h.children().detach();h.append(n);f=a?"remove":"detach";k[f]();m[f]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),k.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&h.children().each(function(t){l(this).addClass(b.asDestroyStripes[t%p])}));c=l.inArray(b,u.settings);-1!==c&&u.settings.splice(c,1)})});l.each(["column","row","cell"],function(a,b){y(b+"s().every()",function(c){var d=this.selector.opts,e=
this;return this.iterator(b,function(h,f,g,k,m){c.call(e[b](f,"cell"===b?g:d,"cell"===b?d:q),f,g,k,m)})})});y("i18n()",function(a,b,c){var d=this.context[0];a=na(a)(d.oLanguage);a===q&&(a=b);c!==q&&l.isPlainObject(a)&&(a=a[c]!==q?a[c]:a._);return a.replace("%d",c)});u.version="1.11.4";u.settings=[];u.models={};u.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,"return":!1};u.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",
src:null,idx:-1};u.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};u.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,
25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,
fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},
fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",
sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:l.extend({},u.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};E(u.defaults);u.defaults.column={aDataSort:null,
iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};E(u.defaults.column);u.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,
iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],
aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:q,oAjaxData:q,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,
bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Q(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Q(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,h=
e.bPaginate;return e.bServerSide?!1===h||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!h||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};u.ext=M={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:u.fnVersionCheck,
iApiIndex:0,oJUIClasses:{},sVersion:u.version};l.extend(M,{afnFiltering:M.search,aTypes:M.type.detect,ofnSearch:M.type.search,oSort:M.type.order,afnSortData:M.order,aoFeatures:M.feature,oApi:M.internal,oStdClasses:M.classes,oPagination:M.pager});l.extend(u.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",
sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var ec=u.ext.pager;l.extend(ec,{simple:function(a,b){return["previous","next"]},full:function(a,b){return["first","previous","next","last"]},numbers:function(a,b){return[Da(a,b)]},simple_numbers:function(a,b){return["previous",Da(a,b),"next"]},
full_numbers:function(a,b){return["first","previous",Da(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",Da(a,b),"last"]},_numbers:Da,numbers_length:7});l.extend(!0,u.ext.renderer,{pageButton:{_:function(a,b,c,d,e,h){var f=a.oClasses,g=a.oLanguage.oPaginate,k=a.oLanguage.oAria.paginate||{},m,n,p=0,t=function(x,w){var r,C=f.sPageButtonDisabled,G=function(I){Ra(a,I.data.action,!0)};var aa=0;for(r=w.length;aa<r;aa++){var L=w[aa];if(Array.isArray(L)){var O=l("<"+(L.DT_el||"div")+"/>").appendTo(x);
t(O,L)}else{m=null;n=L;O=a.iTabIndex;switch(L){case "ellipsis":x.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=g.sFirst;0===e&&(O=-1,n+=" "+C);break;case "previous":m=g.sPrevious;0===e&&(O=-1,n+=" "+C);break;case "next":m=g.sNext;if(0===h||e===h-1)O=-1,n+=" "+C;break;case "last":m=g.sLast;if(0===h||e===h-1)O=-1,n+=" "+C;break;default:m=a.fnFormatNumber(L+1),n=e===L?f.sPageButtonActive:""}null!==m&&(O=l("<a>",{"class":f.sPageButton+" "+n,"aria-controls":a.sTableId,"aria-label":k[L],
"data-dt-idx":p,tabindex:O,id:0===c&&"string"===typeof L?a.sTableId+"_"+L:null}).html(m).appendTo(x),ob(O,{action:L},G),p++)}}};try{var v=l(b).find(A.activeElement).data("dt-idx")}catch(x){}t(l(b).empty(),d);v!==q&&l(b).find("[data-dt-idx="+v+"]").trigger("focus")}}});l.extend(u.ext.type.detect,[function(a,b){b=b.oLanguage.sDecimal;return tb(a,b)?"num"+b:null},function(a,b){if(a&&!(a instanceof Date)&&!uc.test(a))return null;b=Date.parse(a);return null!==b&&!isNaN(b)||Z(a)?"date":null},function(a,
b){b=b.oLanguage.sDecimal;return tb(a,b,!0)?"num-fmt"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b)?"html-num"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b,!0)?"html-num-fmt"+b:null},function(a,b){return Z(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);l.extend(u.ext.type.search,{html:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," ").replace(Va,""):""},string:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," "):a}});var Ua=function(a,
b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=ic(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};l.extend(M.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return Z(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return Z(a)?"":"string"===typeof a?a.toLowerCase():a.toString?a.toString():""},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<
b?1:a>b?-1:0}});Xa("");l.extend(!0,u.ext.renderer,{header:{_:function(a,b,c,d){l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass))})},jqueryui:function(a,b,c,d){l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+
" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass),b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass("asc"==g[e]?d.sSortJUIAsc:"desc"==g[e]?d.sSortJUIDesc:c.sSortingClassJUI))})}}});var yb=function(a){Array.isArray(a)&&(a=a.join(","));return"string"===typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};u.render=
{number:function(a,b,c,d,e){return{display:function(h){if("number"!==typeof h&&"string"!==typeof h)return h;var f=0>h?"-":"",g=parseFloat(h);if(isNaN(g))return yb(h);g=g.toFixed(c);h=Math.abs(g);g=parseInt(h,10);h=c?b+(h-g).toFixed(c).substring(2):"";0===g&&0===parseFloat(h)&&(f="");return f+(d||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+h+(e||"")}}},text:function(){return{display:yb,filter:yb}}};l.extend(u.ext.internal,{_fnExternApiFunc:fc,_fnBuildAjax:Oa,_fnAjaxUpdate:Gb,_fnAjaxParameters:Pb,
_fnAjaxUpdateDraw:Qb,_fnAjaxDataSrc:Aa,_fnAddColumn:Ya,_fnColumnOptions:Ga,_fnAdjustColumnSizing:ta,_fnVisibleToColumnIndex:ua,_fnColumnIndexToVisible:va,_fnVisbleColumns:oa,_fnGetColumns:Ia,_fnColumnTypes:$a,_fnApplyColumnDefs:Db,_fnHungarianMap:E,_fnCamelToHungarian:P,_fnLanguageCompat:ma,_fnBrowserDetect:Bb,_fnAddData:ia,_fnAddTr:Ja,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==q?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return l.inArray(c,a.aoData[b].anCells)},_fnGetCellData:T,
_fnSetCellData:Eb,_fnSplitObjNotation:cb,_fnGetObjectDataFn:na,_fnSetObjectDataFn:ha,_fnGetDataMaster:db,_fnClearTable:Ka,_fnDeleteIndex:La,_fnInvalidate:wa,_fnGetRowElements:bb,_fnCreateTr:ab,_fnBuildHead:Fb,_fnDrawHead:ya,_fnDraw:ja,_fnReDraw:ka,_fnAddOptionsHtml:Ib,_fnDetectHeader:xa,_fnGetUniqueThs:Na,_fnFeatureHtmlFilter:Kb,_fnFilterComplete:za,_fnFilterCustom:Tb,_fnFilterColumn:Sb,_fnFilter:Rb,_fnFilterCreateSearch:ib,_fnEscapeRegex:jb,_fnFilterData:Ub,_fnFeatureHtmlInfo:Nb,_fnUpdateInfo:Xb,
_fnInfoMacros:Yb,_fnInitialise:Ba,_fnInitComplete:Pa,_fnLengthChange:kb,_fnFeatureHtmlLength:Jb,_fnFeatureHtmlPaginate:Ob,_fnPageChange:Ra,_fnFeatureHtmlProcessing:Lb,_fnProcessingDisplay:V,_fnFeatureHtmlTable:Mb,_fnScrollDraw:Ha,_fnApplyToChildren:ca,_fnCalculateColumnWidths:Za,_fnThrottle:hb,_fnConvertToWidth:Zb,_fnGetWidestNode:$b,_fnGetMaxLenString:ac,_fnStringToCss:K,_fnSortFlatten:pa,_fnSort:Hb,_fnSortAria:cc,_fnSortListener:nb,_fnSortAttachListener:fb,_fnSortingClasses:Sa,_fnSortData:bc,_fnSaveState:qa,
_fnLoadState:dc,_fnImplementState:pb,_fnSettingsFromNode:Ta,_fnLog:da,_fnMap:X,_fnBindAction:ob,_fnCallbackReg:R,_fnCallbackFire:F,_fnLengthOverflow:lb,_fnRenderer:gb,_fnDataSource:Q,_fnRowAttributes:eb,_fnExtend:qb,_fnCalculateEnd:function(){}});l.fn.dataTable=u;u.$=l;l.fn.dataTableSettings=u.settings;l.fn.dataTableExt=u.ext;l.fn.DataTable=function(a){return l(this).dataTable(a).api()};l.each(u,function(a,b){l.fn.DataTable[a]=b});return u});

/*!
   Copyright 2014-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.2.9
 2014-2021 SpryMedia Ltd - datatables_1.11.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(b,k,m){b instanceof String&&(b=String(b));for(var n=b.length,p=0;p<n;p++){var y=b[p];if(k.call(m,y,p,b))return{i:p,v:y}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,k,m){if(b==Array.prototype||b==Object.prototype)return b;b[k]=m.value;return b};$jscomp.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var k=0;k<b.length;++k){var m=b[k];if(m&&m.Math==Math)return m}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(b,k){var m=$jscomp.propertyToPolyfillSymbol[k];if(null==m)return b[k];m=b[m];return void 0!==m?m:b[k]};
$jscomp.polyfill=function(b,k,m,n){k&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(b,k,m,n):$jscomp.polyfillUnisolated(b,k,m,n))};$jscomp.polyfillUnisolated=function(b,k,m,n){m=$jscomp.global;b=b.split(".");for(n=0;n<b.length-1;n++){var p=b[n];if(!(p in m))return;m=m[p]}b=b[b.length-1];n=m[b];k=k(n);k!=n&&null!=k&&$jscomp.defineProperty(m,b,{configurable:!0,writable:!0,value:k})};
$jscomp.polyfillIsolated=function(b,k,m,n){var p=b.split(".");b=1===p.length;n=p[0];n=!b&&n in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var y=0;y<p.length-1;y++){var z=p[y];if(!(z in n))return;n=n[z]}p=p[p.length-1];m=$jscomp.IS_SYMBOL_NATIVE&&"es6"===m?n[p]:null;k=k(m);null!=k&&(b?$jscomp.defineProperty($jscomp.polyfills,p,{configurable:!0,writable:!0,value:k}):k!==m&&($jscomp.propertyToPolyfillSymbol[p]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(p):$jscomp.POLYFILL_PREFIX+p,p=
$jscomp.propertyToPolyfillSymbol[p],$jscomp.defineProperty(n,p,{configurable:!0,writable:!0,value:k})))};$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(k,m){return $jscomp.findInternal(this,k,m).v}},"es6","es3");
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables_1.11.net"],function(k){return b(k,window,document)}):"object"===typeof exports?module.exports=function(k,m){k||(k=window);m&&m.fn.dataTable||(m=require("datatables_1.11.net")(k,m).$);return b(m,k,k.document)}:b(jQuery,window,document)})(function(b,k,m,n){function p(a,c,d){var f=c+"-"+d;if(A[f])return A[f];var g=[];a=a.cell(c,d).node().childNodes;c=0;for(d=a.length;c<d;c++)g.push(a[c]);return A[f]=g}function y(a,c,d){var f=c+"-"+
d;if(A[f]){a=a.cell(c,d).node();d=A[f][0].parentNode.childNodes;c=[];for(var g=0,l=d.length;g<l;g++)c.push(d[g]);d=0;for(g=c.length;d<g;d++)a.appendChild(c[d]);A[f]=n}}var z=b.fn.dataTable,u=function(a,c){if(!z.versionCheck||!z.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={dt:new z.Api(a),columns:[],current:[]};this.s.dt.settings()[0].responsive||(c&&"string"===typeof c.details?c.details={type:c.details}:c&&!1===c.details?c.details={type:!1}:c&&
!0===c.details&&(c.details={type:"inline"}),this.c=b.extend(!0,{},u.defaults,z.defaults.responsive,c),a.responsive=this,this._constructor())};b.extend(u.prototype,{_constructor:function(){var a=this,c=this.s.dt,d=c.settings()[0],f=b(k).innerWidth();c.settings()[0]._responsive=this;b(k).on("resize.dtr orientationchange.dtr",z.util.throttle(function(){var g=b(k).innerWidth();g!==f&&(a._resize(),f=g)}));d.oApi._fnCallbackReg(d,"aoRowCreatedCallback",function(g,l,h){-1!==b.inArray(!1,a.s.current)&&b(">td, >th",
g).each(function(e){e=c.column.index("toData",e);!1===a.s.current[e]&&b(this).css("display","none")})});c.on("destroy.dtr",function(){c.off(".dtr");b(c.table().body()).off(".dtr");b(k).off("resize.dtr orientationchange.dtr");c.cells(".dtr-control").nodes().to$().removeClass("dtr-control");b.each(a.s.current,function(g,l){!1===l&&a._setColumnVis(g,!0)})});this.c.breakpoints.sort(function(g,l){return g.width<l.width?1:g.width>l.width?-1:0});this._classLogic();this._resizeAuto();d=this.c.details;!1!==
d.type&&(a._detailsInit(),c.on("column-visibility.dtr",function(){a._timer&&clearTimeout(a._timer);a._timer=setTimeout(function(){a._timer=null;a._classLogic();a._resizeAuto();a._resize(!0);a._redrawChildren()},100)}),c.on("draw.dtr",function(){a._redrawChildren()}),b(c.table().node()).addClass("dtr-"+d.type));c.on("column-reorder.dtr",function(g,l,h){a._classLogic();a._resizeAuto();a._resize(!0)});c.on("column-sizing.dtr",function(){a._resizeAuto();a._resize()});c.on("preXhr.dtr",function(){var g=
[];c.rows().every(function(){this.child.isShown()&&g.push(this.id(!0))});c.one("draw.dtr",function(){a._resizeAuto();a._resize();c.rows(g).every(function(){a._detailsDisplay(this,!1)})})});c.on("draw.dtr",function(){a._controlClass()}).on("init.dtr",function(g,l,h){"dt"===g.namespace&&(a._resizeAuto(),a._resize(),b.inArray(!1,a.s.current)&&c.columns.adjust())});this._resize()},_columnsVisiblity:function(a){var c=this.s.dt,d=this.s.columns,f,g=d.map(function(t,v){return{columnIdx:v,priority:t.priority}}).sort(function(t,
v){return t.priority!==v.priority?t.priority-v.priority:t.columnIdx-v.columnIdx}),l=b.map(d,function(t,v){return!1===c.column(v).visible()?"not-visible":t.auto&&null===t.minWidth?!1:!0===t.auto?"-":-1!==b.inArray(a,t.includeIn)}),h=0;var e=0;for(f=l.length;e<f;e++)!0===l[e]&&(h+=d[e].minWidth);e=c.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;h=c.table().container().offsetWidth-e-h;e=0;for(f=l.length;e<f;e++)d[e].control&&(h-=d[e].minWidth);var r=!1;e=0;for(f=g.length;e<f;e++){var q=g[e].columnIdx;
"-"===l[q]&&!d[q].control&&d[q].minWidth&&(r||0>h-d[q].minWidth?(r=!0,l[q]=!1):l[q]=!0,h-=d[q].minWidth)}g=!1;e=0;for(f=d.length;e<f;e++)if(!d[e].control&&!d[e].never&&!1===l[e]){g=!0;break}e=0;for(f=d.length;e<f;e++)d[e].control&&(l[e]=g),"not-visible"===l[e]&&(l[e]=!1);-1===b.inArray(!0,l)&&(l[0]=!0);return l},_classLogic:function(){var a=this,c=this.c.breakpoints,d=this.s.dt,f=d.columns().eq(0).map(function(h){var e=this.column(h),r=e.header().className;h=d.settings()[0].aoColumns[h].responsivePriority;
e=e.header().getAttribute("data-priority");h===n&&(h=e===n||null===e?1E4:1*e);return{className:r,includeIn:[],auto:!1,control:!1,never:r.match(/\bnever\b/)?!0:!1,priority:h}}),g=function(h,e){h=f[h].includeIn;-1===b.inArray(e,h)&&h.push(e)},l=function(h,e,r,q){if(!r)f[h].includeIn.push(e);else if("max-"===r)for(q=a._find(e).width,e=0,r=c.length;e<r;e++)c[e].width<=q&&g(h,c[e].name);else if("min-"===r)for(q=a._find(e).width,e=0,r=c.length;e<r;e++)c[e].width>=q&&g(h,c[e].name);else if("not-"===r)for(e=
0,r=c.length;e<r;e++)-1===c[e].name.indexOf(q)&&g(h,c[e].name)};f.each(function(h,e){for(var r=h.className.split(" "),q=!1,t=0,v=r.length;t<v;t++){var B=r[t].trim();if("all"===B){q=!0;h.includeIn=b.map(c,function(w){return w.name});return}if("none"===B||h.never){q=!0;return}if("control"===B||"dtr-control"===B){q=!0;h.control=!0;return}b.each(c,function(w,D){w=D.name.split("-");var x=B.match(new RegExp("(min\\-|max\\-|not\\-)?("+w[0]+")(\\-[_a-zA-Z0-9])?"));x&&(q=!0,x[2]===w[0]&&x[3]==="-"+w[1]?l(e,
D.name,x[1],x[2]+x[3]):x[2]!==w[0]||x[3]||l(e,D.name,x[1],x[2]))})}q||(h.auto=!0)});this.s.columns=f},_controlClass:function(){if("inline"===this.c.details.type){var a=this.s.dt,c=b.inArray(!0,this.s.current);a.cells(null,function(d){return d!==c},{page:"current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control");a.cells(null,c,{page:"current"}).nodes().to$().addClass("dtr-control")}},_detailsDisplay:function(a,c){var d=this,f=this.s.dt,g=this.c.details;if(g&&!1!==g.type){var l=g.display(a,
c,function(){return g.renderer(f,a[0],d._detailsObj(a[0]))});!0!==l&&!1!==l||b(f.table().node()).triggerHandler("responsive-display.dt",[f,a,l,c])}},_detailsInit:function(){var a=this,c=this.s.dt,d=this.c.details;"inline"===d.type&&(d.target="td.dtr-control, th.dtr-control");c.on("draw.dtr",function(){a._tabIndexes()});a._tabIndexes();b(c.table().body()).on("keyup.dtr","td, th",function(g){13===g.keyCode&&b(this).data("dtr-keyboard")&&b(this).click()});var f=d.target;d="string"===typeof f?f:"td, th";
if(f!==n||null!==f)b(c.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",d,function(g){if(b(c.table().node()).hasClass("collapsed")&&-1!==b.inArray(b(this).closest("tr").get(0),c.rows().nodes().toArray())){if("number"===typeof f){var l=0>f?c.columns().eq(0).length+f:f;if(c.cell(this).index().column!==l)return}l=c.row(b(this).closest("tr"));"click"===g.type?a._detailsDisplay(l,!1):"mousedown"===g.type?b(this).css("outline","none"):"mouseup"===g.type&&b(this).trigger("blur").css("outline","")}})},
_detailsObj:function(a){var c=this,d=this.s.dt;return b.map(this.s.columns,function(f,g){if(!f.never&&!f.control)return f=d.settings()[0].aoColumns[g],{className:f.sClass,columnIndex:g,data:d.cell(a,g).render(c.c.orthogonal),hidden:d.column(g).visible()&&!c.s.current[g],rowIndex:a,title:null!==f.sTitle?f.sTitle:b(d.column(g).header()).text()}})},_find:function(a){for(var c=this.c.breakpoints,d=0,f=c.length;d<f;d++)if(c[d].name===a)return c[d]},_redrawChildren:function(){var a=this,c=this.s.dt;c.rows({page:"current"}).iterator("row",
function(d,f){c.row(f);a._detailsDisplay(c.row(f),!0)})},_resize:function(a){var c=this,d=this.s.dt,f=b(k).innerWidth(),g=this.c.breakpoints,l=g[0].name,h=this.s.columns,e,r=this.s.current.slice();for(e=g.length-1;0<=e;e--)if(f<=g[e].width){l=g[e].name;break}var q=this._columnsVisiblity(l);this.s.current=q;g=!1;e=0;for(f=h.length;e<f;e++)if(!1===q[e]&&!h[e].never&&!h[e].control&&!1===!d.column(e).visible()){g=!0;break}b(d.table().node()).toggleClass("collapsed",g);var t=!1,v=0;d.columns().eq(0).each(function(B,
w){!0===q[w]&&v++;if(a||q[w]!==r[w])t=!0,c._setColumnVis(B,q[w])});t&&(this._redrawChildren(),b(d.table().node()).trigger("responsive-resize.dt",[d,this.s.current]),0===d.page.info().recordsDisplay&&b("td",d.table().body()).eq(0).attr("colspan",v));c._controlClass()},_resizeAuto:function(){var a=this.s.dt,c=this.s.columns;if(this.c.auto&&-1!==b.inArray(!0,b.map(c,function(e){return e.auto}))){b.isEmptyObject(A)||b.each(A,function(e){e=e.split("-");y(a,1*e[0],1*e[1])});a.table().node();var d=a.table().node().cloneNode(!1),
f=b(a.table().header().cloneNode(!1)).appendTo(d),g=b(a.table().body()).clone(!1,!1).empty().appendTo(d);d.style.width="auto";var l=a.columns().header().filter(function(e){return a.column(e).visible()}).to$().clone(!1).css("display","table-cell").css("width","auto").css("min-width",0);b(g).append(b(a.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(g=a.table().footer()){g=b(g.cloneNode(!1)).appendTo(d);var h=a.columns().footer().filter(function(e){return a.column(e).visible()}).to$().clone(!1).css("display",
"table-cell");b("<tr/>").append(h).appendTo(g)}b("<tr/>").append(l).appendTo(f);"inline"===this.c.details.type&&b(d).addClass("dtr-inline collapsed");b(d).find("[name]").removeAttr("name");b(d).css("position","relative");d=b("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(d);d.insertBefore(a.table().node());l.each(function(e){e=a.column.index("fromVisible",e);c[e].minWidth=this.offsetWidth||0});d.remove()}},_responsiveOnlyHidden:function(){var a=this.s.dt;return b.map(this.s.current,
function(c,d){return!1===a.column(d).visible()?!0:c})},_setColumnVis:function(a,c){var d=this.s.dt;c=c?"":"none";b(d.column(a).header()).css("display",c);b(d.column(a).footer()).css("display",c);d.column(a).nodes().to$().css("display",c);b.isEmptyObject(A)||d.cells(null,a).indexes().each(function(f){y(d,f.row,f.column)})},_tabIndexes:function(){var a=this.s.dt,c=a.cells({page:"current"}).nodes().to$(),d=a.settings()[0],f=this.c.details.target;c.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
"number"===typeof f?a.cells(null,f,{page:"current"}).nodes().to$().attr("tabIndex",d.iTabIndex).data("dtr-keyboard",1):("td:first-child, th:first-child"===f&&(f=">td:first-child, >th:first-child"),b(f,a.rows({page:"current"}).nodes()).attr("tabIndex",d.iTabIndex).data("dtr-keyboard",1))}});u.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];u.display={childRow:function(a,c,d){if(c){if(b(a.node()).hasClass("parent"))return a.child(d(),
"child").show(),!0}else{if(a.child.isShown())return a.child(!1),b(a.node()).removeClass("parent"),!1;a.child(d(),"child").show();b(a.node()).addClass("parent");return!0}},childRowImmediate:function(a,c,d){if(!c&&a.child.isShown()||!a.responsive.hasHidden())return a.child(!1),b(a.node()).removeClass("parent"),!1;a.child(d(),"child").show();b(a.node()).addClass("parent");return!0},modal:function(a){return function(c,d,f){if(d)b("div.dtr-modal-content").empty().append(f());else{var g=function(){l.remove();
b(m).off("keypress.dtr")},l=b('<div class="dtr-modal"/>').append(b('<div class="dtr-modal-display"/>').append(b('<div class="dtr-modal-content"/>').append(f())).append(b('<div class="dtr-modal-close">&times;</div>').click(function(){g()}))).append(b('<div class="dtr-modal-background"/>').click(function(){g()})).appendTo("body");b(m).on("keyup.dtr",function(h){27===h.keyCode&&(h.stopPropagation(),g())})}a&&a.header&&b("div.dtr-modal-content").prepend("<h2>"+a.header(c)+"</h2>")}}};var A={};u.renderer=
{listHiddenNodes:function(){return function(a,c,d){var f=b('<ul data-dtr-index="'+c+'" class="dtr-details"/>'),g=!1;b.each(d,function(l,h){h.hidden&&(b("<li "+(h.className?'class="'+h.className+'"':"")+' data-dtr-index="'+h.columnIndex+'" data-dt-row="'+h.rowIndex+'" data-dt-column="'+h.columnIndex+'"><span class="dtr-title">'+h.title+"</span> </li>").append(b('<span class="dtr-data"/>').append(p(a,h.rowIndex,h.columnIndex))).appendTo(f),g=!0)});return g?f:!1}},listHidden:function(){return function(a,
c,d){return(a=b.map(d,function(f){var g=f.className?'class="'+f.className+'"':"";return f.hidden?"<li "+g+' data-dtr-index="'+f.columnIndex+'" data-dt-row="'+f.rowIndex+'" data-dt-column="'+f.columnIndex+'"><span class="dtr-title">'+f.title+'</span> <span class="dtr-data">'+f.data+"</span></li>":""}).join(""))?b('<ul data-dtr-index="'+c+'" class="dtr-details"/>').append(a):!1}},tableAll:function(a){a=b.extend({tableClass:""},a);return function(c,d,f){c=b.map(f,function(g){return"<tr "+(g.className?
'class="'+g.className+'"':"")+' data-dt-row="'+g.rowIndex+'" data-dt-column="'+g.columnIndex+'"><td>'+g.title+":</td> <td>"+g.data+"</td></tr>"}).join("");return b('<table class="'+a.tableClass+' dtr-details" width="100%"/>').append(c)}}};u.defaults={breakpoints:u.breakpoints,auto:!0,details:{display:u.display.childRow,renderer:u.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var C=b.fn.dataTable.Api;C.register("responsive()",function(){return this});C.register("responsive.index()",
function(a){a=b(a);return{column:a.data("dtr-index"),row:a.parent().data("dtr-index")}});C.register("responsive.rebuild()",function(){return this.iterator("table",function(a){a._responsive&&a._responsive._classLogic()})});C.register("responsive.recalc()",function(){return this.iterator("table",function(a){a._responsive&&(a._responsive._resizeAuto(),a._responsive._resize())})});C.register("responsive.hasHidden()",function(){var a=this.context[0];return a._responsive?-1!==b.inArray(!1,a._responsive._responsiveOnlyHidden()):
!1});C.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(a,c){return a._responsive?a._responsive._responsiveOnlyHidden()[c]:!1},1)});u.version="2.2.9";b.fn.dataTable.Responsive=u;b.fn.DataTable.Responsive=u;b(m).on("preInit.dt.dtr",function(a,c,d){"dt"===a.namespace&&(b(c.nTable).hasClass("responsive")||b(c.nTable).hasClass("dt-responsive")||c.oInit.responsive||z.defaults.responsive)&&(a=c.oInit.responsive,!1!==a&&new u(c,
b.isPlainObject(a)?a:{}))});return u});

// UMD
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], function ($) {
            return factory($, window, document);
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }

            if (!$) {
                $ = typeof window !== 'undefined' ?
                    require('jquery') :
                    require('jquery')(root);
            }

            return factory($, root, root.document);
        };
    } else {
        // Browser
        factory(jQuery, window, document);
    }
}
(function ($, window, document) {


    $.fn.dataTable.render.moment = function (from, to, locale) {
        // Argument shifting
        if (arguments.length === 1) {
            locale = 'en';
            to = from;
            from = 'YYYY-MM-DD';
        } else if (arguments.length === 2) {
            locale = 'en';
        }

        return function (d, type, row) {
            if (!d) {
                return type === 'sort' || type === 'type' ? 0 : d;
            }

            var m = window.moment(d, from, locale, true);

            // Order and type get a number value from Moment, everything else
            // sees the rendered value
            return m.format(type === 'sort' || type === 'type' ? 'x' : to);
        };
    };
}));
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
/**
 * jquery.mask.js
 * @version: v1.14.15
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any customer
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function() {
                var oldVal = el.data('mask-previus-value') || '',
                    newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret();

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition());
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));
