(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{UCKN:function(e,t,n){"use strict";n.r(t);var o=n("Valr"),c=n("TYT/"),i=n("QJY3"),l=n("cUzu"),r=(n("ED2X"),n("lWO2"),n("mrSG")),a=(n("67Y/"),n("9Z1F"),n("15JJ"),n("XlPw"),n("F/XL")),u=new c.w("GTTranslation");const s=[3,"ngIf"],f=[3,"ngStyle","ngSwitch"],g=[4,"ngSwitchCase"],b=[4,"ngSwitchDefault"],m=[4,"ngTemplateOutlet","ngTemplateOutletContext"];function p(e,t){1&e&&c.Qb(0)}const y=function(e,t,n){return{row:e,columnConfig:t,value:n}};function d(e,t){if(1&e&&(c.Sb(0),c.yc(1,p,1,0,"ng-container",m),c.Rb()),2&e){const e=c.ec(2);c.sc(1),c.kc("ngTemplateOutlet",e.columnConfig.tableCellTemplate)("ngTemplateOutletContext",c.nc(2,y,e.row,e.columnConfig,e.value))}}const h=["type","checkbox",3,"checked","disabled"];function C(e,t){if(1&e&&(c.Sb(0),c.Pb(1,"input",h),c.Rb()),2&e){const e=c.ec(2);c.sc(1),c.kc("checked",e.value)("disabled",!e.edited)}}function w(e,t){if(1&e&&(c.Sb(0),c.Ac(1),c.fc(2,"date"),c.Rb()),2&e){const e=c.ec(2);c.sc(1),c.Cc(" ",c.hc(2,1,e.value,e.columnConfig.format)," ")}}function k(e,t){if(1&e&&(c.Sb(0),c.Ac(1),c.Rb()),2&e){const e=c.ec(2);c.sc(1),c.Cc(" ",e.value," ")}}const v=function(e){return{"text-align":e}};function S(e,t){if(1&e&&(c.Vb(0,"div",f),c.yc(1,d,2,6,"ng-container",g),c.yc(2,C,2,2,"ng-container",g),c.yc(3,w,3,4,"ng-container",g),c.yc(4,k,2,1,"ng-container",b),c.Tb()),2&e){const e=c.ec();c.kc("ngStyle",c.lc(5,v,e.contentAlign))("ngSwitch",e.type),c.sc(1),c.kc("ngSwitchCase","template"),c.sc(2),c.kc("ngSwitchCase","boolean"),c.sc(3),c.kc("ngSwitchCase","date")}}const I=[3,"ngSwitch",4,"ngIf"],x=[3,"ngSwitch"],T=[3,"ngSwitchCase"],D=["ngSwitchDefault",""],O=["type","date",2,"width","45%",3,"min"],R=["type","date",2,"width","45%",3,"max"];function A(e,t){if(1&e&&(c.Pb(0,"input",O),c.Pb(1,"input",R)),2&e){const e=c.ec(2);c.kc("min",e.filterConfig.min),c.sc(1),c.kc("max",e.filterConfig.max)}}const M=["type","number",2,"width","45%",3,"min"],N=["type","number",2,"width","45%",3,"max"];function V(e,t){if(1&e&&(c.Pb(0,"input",M),c.Pb(1,"input",N)),2&e){const e=c.ec(2);c.kc("min",e.filterConfig.min),c.sc(1),c.kc("max",e.filterConfig.max)}}const E=[3,"value",4,"ngFor","ngForOf"],K=[3,"value"];function P(e,t){if(1&e&&(c.Vb(0,"option",K),c.Ac(1),c.Tb()),2&e){const e=t.$implicit;c.kc("value",e.value),c.sc(1),c.Cc(" ",e.key," ")}}function _(e,t){if(1&e&&(c.Vb(0,"select"),c.yc(1,P,2,2,"option",E),c.Tb()),2&e){const e=c.ec(2);c.sc(1),c.kc("ngForOf",e.filterConfig.selectValues)}}const G=[3,"ngStyle","type"],F=function(e){return{width:e}};function L(e,t){if(1&e&&c.Pb(0,"input",G),2&e){const e=c.ec(2);c.kc("ngStyle",c.lc(2,F,e.width))("type",e.filterConfig.type.toLowerCase())}}function U(e,t){if(1&e&&(c.Sb(0,x),c.yc(1,A,2,2,"ng-template",T),c.yc(2,V,2,2,"ng-template",T),c.yc(3,_,2,1,"ng-template",T),c.yc(4,L,1,4,"ng-template",D),c.Rb()),2&e){const e=c.ec();c.kc("ngSwitch",e.filterConfig.type),c.sc(1),c.kc("ngSwitchCase","DATE_RANGE"),c.sc(2),c.kc("ngSwitchCase","NUMBER_RANGE"),c.sc(3),c.kc("ngSwitchCase","SELECT")}}const j=["selectionCheckbox"],$=["style","width: 100%;",4,"ngIf"],B=[2,"width","100%"],X=["width","20px",4,"ngIf"],J=[3,"ngStyle","width",4,"ngFor","ngForOf"],Q=[4,"ngIf"],q=[3,"ngClass","click",4,"ngFor","ngForOf"],z=["width","20px"];function W(e,t){1&e&&c.Pb(0,"th",z)}const Y=[3,"ngStyle","width"];function Z(e,t){if(1&e&&(c.Vb(0,"th",Y),c.Ac(1),c.fc(2,"async"),c.Tb()),2&e){const e=t.$implicit,n=c.ec(2);c.kc("ngStyle",c.lc(5,v,e.align))("width",e.width),c.sc(1),c.Cc(" ",c.gc(2,3,n.getLabel(e))," ")}}const H=["type","checkbox",3,"change",4,"ngIf"],ee=["type","checkbox",3,"change"],te=["selectAll",""];function ne(e,t){if(1&e){const e=c.Wb();c.Vb(0,"input",ee,te),c.bc("change",function(t){c.qc(e);const n=c.pc(1);return c.ec(3).onSelectAll(n.checked)}),c.Tb()}}function oe(e,t){if(1&e&&(c.Vb(0,"th"),c.yc(1,ne,2,0,"input",H),c.Tb()),2&e){const e=c.ec(2);c.sc(1),c.kc("ngIf","MULTI"===e.tableConfig.selectable)}}const ce=[3,"filterConfig","width"];function ie(e,t){if(1&e&&(c.Vb(0,"th",Y),c.Pb(1,"gt-core-table-filter",ce),c.Tb()),2&e){const e=t.$implicit;c.kc("ngStyle",c.lc(4,v,e.align))("width",e.width),c.sc(1),c.kc("filterConfig",e.filter)("width",e.width)}}const le=[3,"ngClass","click"],re=["actRow",""],ae=[3,"ngClass","ngStyle","width",4,"ngFor","ngForOf"],ue=["name","tableSelector","type","checkbox",3,"change"],se=["selectionCheckbox",""];function fe(e,t){if(1&e){const e=c.Wb();c.Vb(0,"td"),c.Vb(1,"input",ue,se),c.bc("change",function(t){c.qc(e);const n=c.pc(2),o=c.ec().$implicit;return c.ec(2).changeCheckbox(o,n)}),c.Tb(),c.Tb()}}const ge=[3,"ngClass","ngStyle","width"],be=[3,"columnConfig","columnIndex","edited","rowIndex","row",4,"ngIf"],me=[3,"columnConfig","columnIndex","edited","rowIndex","row"];function pe(e,t){if(1&e&&c.Pb(0,"gt-core-table-column",me),2&e){const e=c.ec(),t=e.$implicit,n=e.index,o=c.ec(),i=o.index,l=o.$implicit,r=c.pc(1);c.kc("columnConfig",t)("columnIndex",n)("edited",r.edited)("rowIndex",i)("row",l)}}function ye(e,t){if(1&e&&(c.Vb(0,"td",ge),c.yc(1,pe,1,5,"gt-core-table-column",be),c.Tb()),2&e){const e=t.$implicit,n=t.index,o=c.ec(),i=o.$implicit,l=o.index,r=c.ec(2);c.kc("ngClass",r.getCellClass(i,l,n,e))("ngStyle",c.lc(4,v,e.align))("width",e.width),c.sc(1),c.kc("ngIf",!1!==e.visible)}}function de(e,t){if(1&e){const e=c.Wb();c.Vb(0,"tr",le,re),c.bc("click",function(n){c.qc(e);const o=t.$implicit,i=t.index;return c.ec(2).onRowClick(o,i)}),c.yc(2,fe,3,0,"td",Q),c.yc(3,ye,2,6,"td",ae),c.Tb()}if(2&e){const e=t.$implicit,n=t.index,o=c.ec(2);c.kc("ngClass",o.getRowClass(e,n)),c.Eb("edited",!1),c.sc(2),c.kc("ngIf",o.hasSelection),c.sc(3),c.kc("ngForOf",o.tableConfig.columns)}}function he(e,t){if(1&e&&(c.Vb(0,"table",B),c.Vb(1,"thead"),c.Vb(2,"tr"),c.yc(3,W,1,0,"th",X),c.yc(4,Z,3,7,"th",J),c.Tb(),c.Vb(5,"tr"),c.yc(6,oe,2,1,"th",Q),c.yc(7,ie,2,6,"th",J),c.Tb(),c.Tb(),c.Vb(8,"tbody"),c.yc(9,de,4,4,"tr",q),c.fc(10,"async"),c.Tb(),c.Tb()),2&e){const e=c.ec();c.sc(3),c.kc("ngIf",e.hasSelection),c.sc(4),c.kc("ngForOf",e.tableConfig.columns),c.sc(6),c.kc("ngIf",e.hasSelection),c.sc(7),c.kc("ngForOf",e.tableConfig.columns),c.sc(9),c.kc("ngForOf",c.gc(10,5,e.data))}}var Ce=function(){function e(){this.edited=!0}return Object.defineProperty(e.prototype,"editable",{get:function(){return!(!this.columnConfig||this.columnConfig.customValue||this.columnConfig.tableCellTemplate||this.columnConfig.tableCellTemplate)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentAlign",{get:function(){if(!this.columnConfig.contentAlign)switch(this.type){case"boolean":return"center";case"number":return"right";default:return"left"}return this.columnConfig.contentAlign},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this.columnConfig.tableCellTemplate?"template":this.columnConfig.type?this.columnConfig.type:"string"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.columnConfig?"function"==typeof this.columnConfig.customValue?this.columnConfig.customValue(this.row):this.row[this.columnConfig.columnDef]:null},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){},e.ngComponentDef=c.Ib({type:e,selectors:[["gt-core-table-column"]],factory:function(t){return new(t||e)},inputs:{edited:"edited",columnConfig:"columnConfig",rowIndex:"rowIndex",columnIndex:"columnIndex",row:"row"},consts:1,vars:1,template:function(e,t){1&e&&c.yc(0,S,5,7,"ng-template",s),2&e&&c.kc("ngIf",t.columnConfig)},directives:[o.m,o.n,o.o,o.p,o.q,o.r],pipes:[o.e],styles:[""]}),e}(),we=function(){function e(){}return e.prototype.ngOnInit=function(){},e.ngComponentDef=c.Ib({type:e,selectors:[["gt-core-table-filter"]],factory:function(t){return new(t||e)},inputs:{filterConfig:"filterConfig",width:"width"},consts:1,vars:1,template:function(e,t){1&e&&c.yc(0,U,5,4,"ng-container",I),2&e&&c.kc("ngIf",t.filterConfig)},directives:[o.m,o.o,o.p,o.q,o.l,i.k,i.m,o.n],styles:[""]}),e}(),ke=function(){function e(e){this.translationService=e}return Object.defineProperty(e.prototype,"hasSelection",{get:function(){return!!this.tableConfig&&("MULTI"===this.tableConfig.selectable||"SINGLE"===this.tableConfig.selectable)},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){},e.prototype.getLabel=function(e){return e.labelKey?this.translationService?this.translationService.get(e.labelKey):Object(a.a)(e.labelKey):Object(a.a)(e.label)},e.prototype.onRowClick=function(e,t){"function"==typeof this.tableConfig.onRowClick&&this.tableConfig.onRowClick(e,t)},e.prototype.getCellClass=function(e,t,n,o){return"function"!=typeof o.cellClass?"":o.cellClass(e,t,n)},e.prototype.onSelectAll=function(e){this.checkboxes.forEach(function(t){t.nativeElement.checked=e})},e.prototype.changeCheckbox=function(e,t){if("SINGLE"===this.tableConfig.selectable){var n=t.checked;this.checkboxes.forEach(function(e){e.nativeElement.checked=!1}),t.checked=n}},e.prototype.getRowClass=function(e,t){switch(typeof this.tableConfig.rowClass){case"function":return this.tableConfig.rowClass(e,t);case"string":return this.tableConfig.rowClass;default:return""}},e.ngComponentDef=c.Ib({type:e,selectors:[["gt-core-table"]],factory:function(t){return new(t||e)(c.Ob(u,8))},viewQuery:function(e,t){var n;1&e&&c.Dc(j,!0),2&e&&c.oc(n=c.dc())&&(t.checkboxes=n)},inputs:{tableConfig:"tableConfig",data:"data"},consts:1,vars:1,template:function(e,t){1&e&&c.yc(0,he,11,7,"table",$),2&e&&c.kc("ngIf",t.tableConfig)},directives:[o.m,o.l,o.n,we,o.k,Ce],pipes:[o.b],styles:[".editButton[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.editButton[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000;overflow:hidden;border-radius:50%}"]}),e}(),ve=function(){function e(){}return e.ngModuleDef=c.Mb({type:e}),e.ngInjectorDef=c.Lb({factory:function(t){return new(t||e)},imports:[[o.c,i.g]]}),e}(),Se=function(){var e={SUM:1,AVG:2,MIN:4,MAX:8};return e[e.SUM]="SUM",e[e.AVG]="AVG",e[e.MIN]="MIN",e[e.MAX]="MAX",e}(),Ie=n("o8Qb"),xe=n("vyaW"),Te=n("mhX4"),De=function(e){function t(t,n){return e.call(this,t,n)||this}return r.c(t,e),t.prototype.getList=function(){return this.get({url:"/employees"})},t.ngInjectableDef=c.Kb({token:t,factory:function(e){return new(e||t)(c.Zb(l.c),c.Zb(Te.a))},providedIn:"root"}),t}(xe.b),Oe=["customColumn"],Re=[3,"data","tableConfig"],Ae=["customColumn",""];function Me(e,t){1&e&&(c.Ac(0),c.fc(1,"json")),2&e&&c.Bc(c.gc(1,1,t.row))}var Ne=function(){function e(e){this.employeeService=e,this.title="TableMaker"}return e.prototype.ngOnInit=function(){this.employees$=this.employeeService.getList(),this.tableConfig={selectable:"MULTI",rowClass:function(e,t){return"table-row-"+t+" hovered"},columns:[{labelKey:"employees.name",columnDef:"name",width:"100px",sort:!0,customFooter:function(e){for(var t=[],n=e.next();!n.done;n=e.next())t.push(n.value[1].surname);return t.join(", ")}},{labelKey:"employees.surName",columnDef:"surName",width:"100px",filter:{type:"STRING"}},{labelKey:"employees.frontend",columnDef:"frontend",type:"boolean",width:"70px",filter:{type:"STRING"}},{labelKey:"employees.age",columnDef:"age",type:"number",sort:!0,footer:Se.MAX,width:"100px",filter:{type:"NUMBER_RANGE",min:"0",max:"150"}},{labelKey:"employees.summary",customValue:function(e){return e.name+" "+e.surName+"("+e.age+")"},columnDef:"summary",width:"150px",filter:{type:"STRING"}},{labelKey:"employees.birthday",columnDef:"date",type:"date",format:"dd.mm.yyyy",width:"130px"},{labelKey:"employees.unFormattedBirthday",columnDef:"date",type:"date",width:"330px",filter:{type:"DATE_RANGE"}},{labelKey:"employees.level",columnDef:"level",width:"100px",filter:{type:"SELECT",selectValues:[{key:"",value:""},{key:"Junior",value:"JUNIOR"},{key:"Senior",value:"SENIOR"},{key:"\u0160tudent",value:"STUDENT"}]}},{columnDef:"something",visible:!1,tableCellTemplate:this.customColumn}]}},e.ngComponentDef=c.Ib({type:e,selectors:[["basic-table"]],factory:function(t){return new(t||e)(c.Ob(De))},viewQuery:function(e,t){var n;1&e&&c.uc(Oe,!0),2&e&&c.oc(n=c.dc())&&(t.customColumn=n.first)},consts:3,vars:2,template:function(e,t){1&e&&(c.Pb(0,"gt-core-table",Re),c.yc(1,Me,2,3,"ng-template",null,Ae,c.zc)),2&e&&c.kc("data",t.employees$)("tableConfig",t.tableConfig)},directives:[ke],pipes:[o.g],styles:[""]}),e}(),Ve=n("v0mH"),Ee=["grossColumn"],Ke=["budgetColumn"],Pe=["actorsColumn"],_e=[3,"data","tableConfig"],Ge=["budgetColumn",""],Fe=["grossColumn",""],Le=["actorsColumn",""];function Ue(e,t){1&e&&c.Ac(0),2&e&&c.Bc(t.row.budget+"\u20ac")}function je(e,t){1&e&&c.Ac(0),2&e&&c.Bc(t.row.gross+"\u20ac")}function $e(e,t){if(1&e&&c.Ac(0),2&e){var n=t.row;c.Bc(n.actor_1_name+", "+n.actor_2_name+", "+n.actor_3_name)}}var Be=function(){function e(){this.data=Object(a.a)(Ve.a.filter(function(e,t){return t<10})),this.title="TableMaker"}return e.prototype.ngOnInit=function(){this.tableConfig={columns:[{labelKey:"movies.title",columnDef:"movie_title",sort:!0,filter:{type:"STRING"}},{labelKey:"movies.actors",tableCellTemplate:this.actorsColumn,columnDef:"actors"},{labelKey:"movies.year",columnDef:"title_year",sort:!0,type:"number",width:"100px",filter:{type:"NUMBER_RANGE",min:"1800",max:"2100"}},{labelKey:"movies.budget",columnDef:"budget",tableCellTemplate:this.budgetColumn},{labelKey:"movies.gross",tableCellTemplate:this.grossColumn,columnDef:"gross"},{labelKey:"movies.contentRating",columnDef:"content_rating",width:"70px",sort:!0,filter:{type:"STRING"}},{labelKey:"movies.director",columnDef:"director_name",customValue:function(e){return e.director_name+"("+e.director_facebook_likes+")"},sort:!0,filter:{type:"STRING"}},{labelKey:"movies.duration",columnDef:"duration",width:"100px",sort:!0,customValue:function(e){return e.duration?e.duration+" min":e.duration},filter:{type:"NUMBER_RANGE",min:"0",max:"500"}},{labelKey:"movies.genres",columnDef:"genres",sort:!0,customValue:function(e){return e.genres?e.genres.replace(/\|/g,", "):e.genres},filter:{type:"STRING"}}]}},e.ngComponentDef=c.Ib({type:e,selectors:[["huge-table"]],factory:function(t){return new(t||e)},viewQuery:function(e,t){var n;1&e&&(c.uc(Ee,!0),c.uc(Ke,!0),c.uc(Pe,!0)),2&e&&(c.oc(n=c.dc())&&(t.grossColumn=n.first),c.oc(n=c.dc())&&(t.budgetColumn=n.first),c.oc(n=c.dc())&&(t.actorsColumn=n.first))},consts:7,vars:2,template:function(e,t){1&e&&(c.Pb(0,"gt-core-table",_e),c.yc(1,Ue,1,1,"ng-template",null,Ge,c.zc),c.yc(3,je,1,1,"ng-template",null,Fe,c.zc),c.yc(5,$e,1,1,"ng-template",null,Le,c.zc)),2&e&&c.kc("data",t.data)("tableConfig",t.tableConfig)},directives:[ke],styles:[""]}),e}(),Xe=n("DUip"),Je=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"overview",component:function(){function e(){}return e.prototype.ngOnInit=function(){},e.ngComponentDef=c.Ib({type:e,selectors:[["table-maker-example"]],factory:function(t){return new(t||e)},consts:4,vars:3,template:function(e,t){1&e&&(c.Ac(0),c.fc(1,"translate"),c.Pb(2,"basic-table"),c.Pb(3,"huge-table")),2&e&&c.Cc("",c.gc(1,1,"title")," ")},directives:[Ne,Be],pipes:[Ie.c],styles:[""]}),e}()}]}],Qe=function(){function e(){}return e.ngModuleDef=c.Mb({type:e}),e.ngInjectorDef=c.Lb({factory:function(t){return new(t||e)},imports:[[Xe.g.forChild(Je)],Xe.g]}),e}();Xe.g.forChild(Je),n.d(t,"TableMakerExampleModule",function(){return qe});var qe=function(){function e(){}return e.ngModuleDef=c.Mb({type:e}),e.ngInjectorDef=c.Lb({factory:function(t){return new(t||e)},imports:[[o.c,ve,Ie.b,Qe]]}),e}()}}]);