webpackJsonp([1],{"0PCI":function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pos"},[s("div",[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",{staticClass:"style1"},[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(a.row)}}},[t._v("增加")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(a.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[t._v("数量")]),t._v("："),s("span",[t._v(t._s(t.totalCount))]),t._v("    \n                "),s("small",[t._v("金额")]),t._v(" "),s("span",[t._v(t._s(t.totalMoney)+"元")])]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.delAllGoods}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n             挂单\n            ")]),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n             外卖\n            ")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(a){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(a.price)+"元")])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(a){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{width:"100%",src:a.goodsImg,alt:""}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(a){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{width:"100%",src:a.goodsImg,alt:""}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(a){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{width:"100%",src:a.goodsImg,alt:""}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(a){return s("li",{on:{click:function(s){t.addOrderList(a)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{width:"100%",src:a.goodsImg,alt:""}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(a.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(a.price)+"元")])])}))])])],1)],1)])],1)],1)])},e=[],n={render:o,staticRenderFns:e};a.a=n},"0R1U":function(t,a){},"0tA5":function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"iconfont icon-goumai"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-dianpu"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-hanbao"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-huiyuanqia"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-gongnengjianyi"}),t._v(" "),s("div",[t._v("统计")])])])])}],n={render:o,staticRenderFns:e};a.a=n},"4bvI":function(t,a,s){"use strict";function o(t){s("OzYq")}var e=s("bxkQ"),n=s("0PCI"),i=s("46Yf"),l=o,c=i(e.a,n.a,!1,l,"data-v-ce7c6a28",null);a.a=c.exports},DICR:function(t,a,s){"use strict";var o=s("YcAy");a.a={name:"app",components:{leftNav:o.a}}},IkBl:function(t,a,s){"use strict";a.a={name:"leftNav",data:function(){return{}}}},M93x:function(t,a,s){"use strict";function o(t){s("eTMq")}var e=s("DICR"),n=s("uwtV"),i=s("46Yf"),l=o,c=i(e.a,n.a,!1,l,null,null);a.a=c.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=s("MVSX"),e=s("smwL"),n=s.n(e),i=s("s06w"),l=(s.n(i),s("M93x")),c=s("YaEn");o.default.config.productionTip=!1,o.default.use(n.a),new o.default({el:"#app",router:c.a,template:"<App/>",components:{App:l.a}})},OzYq:function(t,a){},YaEn:function(t,a,s){"use strict";var o=s("MVSX"),e=s("zO6J"),n=s("4bvI");o.default.use(e.a),a.a=new e.a({routes:[{path:"/",name:"Pos",component:n.a}]})},YcAy:function(t,a,s){"use strict";function o(t){s("0R1U")}var e=s("IkBl"),n=s("0tA5"),i=s("46Yf"),l=o,c=i(e.a,n.a,!1,l,null,null);a.a=c.exports},bxkQ:function(t,a,s){"use strict";var o=s("yEoQ"),e=s.n(o);a.a={name:"pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;e.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(a){t.oftenGoods=a.data}).catch(function(t){alert("网络错误，不能访问")}),e.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(a){t.type0Goods=a.data[0],t.type1Goods=a.data[1],t.type2Goods=a.data[2],t.type3Goods=a.data[3]}).catch(function(t){alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var a=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(a=!0);if(a){this.tableData.filter(function(a){return a.goodsId==t.goodsId})[0].count++}else{var o={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(o)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(a){return a.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(a){t.totalCount+=a.count,t.totalMoney=t.totalMoney+a.price*a.count})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功！",type:"success"})):this.$message.error("不能空结~")}}}},eTMq:function(t,a){},s06w:function(t,a){},uwtV:function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("leftNav"),t._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},e=[],n={render:o,staticRenderFns:e};a.a=n}},["NHnr"]);
//# sourceMappingURL=app.32d049400bd8834c020f.js.map