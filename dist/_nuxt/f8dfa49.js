(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,7],{381:function(t,e,r){"use strict";r.r(e);var n={name:"Template"},o=r(97),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Transition",{attrs:{name:"template"}},[r("div",{staticClass:"main"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(8),r(16),r(12),r(17);var n=r(3);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Card",props:["data"],data:function(){return{count:1}},computed:{showPrice:function(){var t=(new Intl.NumberFormat).format(this.data.price);return"$".concat(t)},showCount:function(){return this.count}},methods:{sendProduct:function(t){var e=c(c({},this.data),{},{type:t,count:this.count});this.$emit("sendProduct",e)}}},d=r(97),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card__p"},[r("div",{staticClass:"card__header"},[r("img",{staticClass:"w-25",attrs:{src:t.data.image_url,alt:"img"}})]),t._v(" "),r("div",{staticClass:"card__body"},[r("p",{staticClass:"body__p"},[t._v(t._s(t.data.name))]),t._v(" "),r("p",{staticClass:"body__p--price"},[t._v(t._s(t.showPrice))])]),t._v(" "),r("div",{staticClass:"card__footer"},[r("div",{staticClass:"footer__button--amount"},[r("div",{staticClass:"button__remove",on:{click:function(e){1!==t.count&&t.count--}}},[t._v("-")]),t._v(" "),r("div",{staticClass:"amount"},[r("span",{staticClass:"amount__title"},[t._v("Cantidad")]),t._v("\n        "+t._s(t.showCount)+"\n      ")]),t._v(" "),r("div",{staticClass:"button__add",on:{click:function(e){8!==t.count&&t.count++}}},[t._v("+")])]),t._v(" "),r("div",{staticClass:"footer__button--add",on:{click:function(e){return t.sendProduct(1)}}},[r("p",{staticClass:"m-0 mr-2"},[t._v("Agregar")]),t._v(" "),r("lord-icon",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"https://cdn.lordicon.com/cgwdruiv.json",trigger:"loop",colors:"primary:#f76b5b,secondary:#f76b5b",stroke:"80"}})],1),t._v(" "),r("div",{staticClass:"footer__button",on:{click:function(e){return t.sendProduct(2)}}},[r("p",{staticClass:"m-0 mr-2"},[t._v("Ver Detalle")]),t._v(" "),r("lord-icon",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"https://cdn.lordicon.com/riwgnrrz.json",trigger:"loop",colors:"primary:#ffffff,secondary:#ffffff"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},422:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(56),c=r(30),l=(r(57),r(36),r(8),r(382),r(12),r(43),r(386),r(46),r(390),r(392),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(54),r(63),r(171),r(170),r(34),r(11),r(15),r(14),r(16),r(17),r(279)),d=r(419),_=r(383),h=r(206),f=r.n(h),v="https://proveedor-api.herokuapp.com/api/v1/stock",m=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(v,"/products")).then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(new Intl.NumberFormat).format(e.price),body={name:"".concat(e.name),slug:"p-".concat(e.name),description:"Producto enviado desde Proveedor",price:r,quantity:e.count,subcategory_id:"5"},t.abrupt("return",f.a.post("".concat(v,"/products"),body).then((function(t){return t})).catch((function(t){return t})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C={index:m,store:w},k=r(381),x="https://proveedor-api.herokuapp.com/api/v1",y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(x,"/tickets")).then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,r,n){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={name:"Proovedor",send_to:"Stock",total_price:e,amount:n},t.next=3,f.a.post("".concat(x,"/tickets"),data).then((function(t){return t.data})).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),j={get:y,post:P},O=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e,localStorage.setItem("ticket_id",n),r.forEach((function(t){var data={ticket_id:n,product_id:t};return f.a.post("".concat("https://proveedor-api.herokuapp.com/api/v1","/products_tickets"),data).then((function(t){return 201})).catch((function(t){return console.error(t)}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),S={post:O};function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var T={name:"IndexPage",components:{Template:k.default,Card:_.default,BounceLoader:d.a},data:function(){return{products:[],productsSet:[],showSuccess:!1,brands:[],carts:[],filters:[],showFilter:!1,showSpinner:!1,selectedBrand:"",isLogged:!1,from:0,to:4,fromProduct:0,toProduct:4,showSend:!1,showFilterBrand:!1,showButtonMore:!1,showMessage:!1,productSelected:{},ticketId:0,totalPrice:0,view:"Products",tickets:[]}},computed:{showProducts:function(){return this.showFilter?this.productsSet.slice(this.fromProduct,this.toProduct):this.products.slice(this.fromProduct,this.toProduct)},showProductsLength:function(){return this.showFilter?this.productsSet.length:this.products.length},showTotalPrice:function(){var t=this.carts.reduce((function(t,e){return t+e.totalPrice}),0);this.totalPrice=t;var e=(new Intl.NumberFormat).format(t);return"$".concat(e)},showBrands:function(){return this.brands.slice(this.from,this.to)}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.values(t.$route.params).length>0)){e.next=7;break}return e.next=3,l.a.getProducts().then((function(e){t.products=e.data,e.data.forEach((function(e){t.brands.push(e.brand.name)}))}));case 3:t.showButtonMore=!0,t.brands=Object(o.a)(new Set(t.brands)),e.next=8;break;case 7:t.$router.push({path:"/"});case 8:case"end":return e.stop()}}),e)})))()},methods:{showMoreProducts:function(){this.toProduct<this.products.length?(this.fromProduct=0,this.toProduct+=6):this.toProduct=this.products.length},actionBrands:function(t){var e=this;"reduce"==t?0!==this.from&&(this.from-=4,this.to-=4,this.showFilterBrand=!0,setTimeout((function(){e.showFilterBrand=!1}),1e3)):this.to<this.brands.length&&(this.from+=4,this.to+=4,this.showFilterBrand=!0,setTimeout((function(){e.showFilterBrand=!1}),1e3))},removeCart:function(t){var e=this;this.carts.find((function(r,n){r===t&&e.carts.splice(n,1)}))},sendToStock:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showSend=!0,e.prev=1,e.next=4,t.carts.forEach((function(e){C.store(e).then((function(e){return t.showSuccess=!0})).catch((function(e){t.showSuccess=!1,console.error(e)})),setTimeout((function(){t.showSend=!1,t.carts=[],t.showMessage=!0}),2e3)}));case 4:return e.next=6,t.createTicket();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))()},createTicket:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.carts.map((function(t){return t.id})),n=t.carts.reduce((function(t,e){return t+e.count}),0),e.next=4,j.post(t.totalPrice,r,n).then((function(e){t.ticketId=e.data.id}));case 4:return e.next=6,S.post(t.ticketId,r).then((function(t){return console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()},getTickets:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get().then((function(e){t.tickets=e.data,t.tickets=t.tickets.map((function(t){return{ID:t.id,nro_ticket:t.nro_ticket,destino:t.send_to,cantidad_de_productos:t.amount,precio_total:"$".concat((new Intl.NumberFormat).format(t.total_price)),estado:"Enviado"}}))}));case 2:case"end":return e.stop()}}),e)})))()},filterBrand:function(t){this.selectedBrand=t,this.filters=t,this.showFilter=!0,this.productsSet=Object(o.a)(this.products),this.productsSet=this.productsSet.filter((function(e){if(e.brand.name===t)return e})),this.showSpinner=!0,this.toProduct=4},listeningSendProduct:function(t){if(1===t.type){this.$bvModal.show("modal__prov--carrito");var e=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({totalPrice:t.price*t.count},t),r=this.carts.find((function(e){return e.name===t.name}));r?r.count+t.count>8||(r.count+=t.count,r.totalPrice=r.price*r.count):this.carts.push(e)}else this.productSelected=t,this.$bvModal.show("modal__prov")},removeFilter:function(){this.filters=[],this.showFilter=!1,this.selectedBrand="",this.showSpinner=!0}},watch:{showSpinner:function(){var t=this;this.showSpinner&&setTimeout((function(){t.showSpinner=!1}),1e3)},toProduct:function(){this.toProduct<58?this.showButtonMore=!0:this.showButtonMore=!1},view:function(){"Tickets"===this.view&&this.getTickets()}}},F=T,R=r(97),component=Object(R.a)(F,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("main",{staticClass:"d-flex justify-content-between"},[r("div",{staticClass:"menu__slide"},[r("div",{staticClass:"slide__header"},[t._v("\n        Logo\n      ")]),t._v(" "),r("div",{staticClass:"slide__links"},[r("div",{staticClass:"links",on:{click:function(e){t.view="Products"}}},[r("b-icon",{staticClass:"text-white",attrs:{animation:"pulse","font-scale":"1.5",icon:"house-door"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Dashboard")])],1),t._v(" "),r("div",{staticClass:"links"},[r("b-icon",{staticClass:"text-white",attrs:{"font-scale":"1.5",icon:"person"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Perfil")])],1),t._v(" "),r("div",{staticClass:"links",on:{click:function(e){t.view="Tickets"}}},[r("b-icon",{staticClass:"text-white",attrs:{"font-scale":"1.5",icon:"clipboard-data"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Ordenes")])],1),t._v(" "),r("div",{staticClass:"links"},[r("b-icon",{staticClass:"text-white",attrs:{"font-scale":"1.5",icon:"people"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Usuarios")])],1),t._v(" "),r("div",{staticClass:"links"},[r("b-icon",{staticClass:"text-white",attrs:{"font-scale":"1.5",icon:"card-text"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Categorias")])],1)]),t._v(" "),r("div",{staticClass:"slide__footer"},[r("div",{staticClass:"links"},[r("b-icon",{staticClass:"text-white",attrs:{"font-scale":"1.5",icon:"signpost"}}),t._v(" "),r("p",{staticClass:"p__link"},[t._v("Salir")])],1)])]),t._v(" "),"Products"===t.view?r("Template",{scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"mt-5 d-flex justify-content-between align-items-center"},[r("h3",{staticClass:"ml-5 color__proveedor font-weight-bold bagde--prov"},[t._v("Dashboard")]),t._v(" "),r("div",{staticClass:"user"},[r("h5",{staticClass:"color__red"},[t._v("Gonzalo")]),t._v(" "),r("h6",{staticClass:"bagde--prov"},[t._v("Admin")])])]),t._v(" "),t.brands.length>1?r("div",{staticClass:"filter__brand"},[t.from>0?r("div",{staticClass:"button__brand",on:{click:function(e){return t.actionBrands("reduce")}}},[r("b-icon",{attrs:{icon:"arrow-left-circle-fill","font-scale":"2"}})],1):t._e(),t._v(" "),t._l(t.showBrands,(function(b){return r("div",{key:b.id,class:t.selectedBrand===b?"brand__card--active brand":"brand__card brand",on:{click:function(e){return t.filterBrand(b)}}},[b.length>0?r("img",{class:t.showFilterBrand?"w-75 filter__gray--not":"w-75",attrs:{src:t.showFilterBrand?"/gif/loader.gif":"/img/brands/"+b+".webp",alt:""}}):t._e()])})),t._v(" "),t.to<t.brands.length?r("div",{staticClass:"button__brand",on:{click:function(e){return t.actionBrands("increment")}}},[r("b-icon",{attrs:{icon:"arrow-right-circle-fill","font-scale":"2"}})],1):t._e()],2):t._e(),t._v(" "),r("div",{staticClass:"result"},[r("div",{staticClass:"result__texts"},[r("div",{staticClass:"texts_div"},[t._v("\n              "+t._s(t.showProductsLength)+"\n            ")]),t._v(" "),r("h4",{staticClass:"color__proveedor m-0"},[t._v(t._s(t.showProductsLength>1?"Resultados":"Resultado"))])])]),t._v(" "),r("div",{staticClass:"products"},[r("div",{staticClass:"product__filters"},[r("p",{staticClass:"color__proveedor font-weight-bold m-0"},[t._v("Filtros seleccionados")]),t._v(" "),t.filters.length>0?r("div",{staticClass:"filter"},[r("div",{staticClass:"mr-3"},[t._v("\n                "+t._s(t.filters)+"\n              ")]),t._v(" "),r("div",{staticClass:"filter__x",on:{click:function(e){return t.removeFilter()}}},[t._v("\n                X\n              ")])]):t._e()]),t._v(" "),t.showSpinner?r("div",{staticClass:"d-flex justify-content-center align-items-center flex-grow-1"},[r("BounceLoader",{attrs:{loading:!0,color:"#fe6563",size:"120px"}})],1):r("div",{staticClass:"product__list"},[t._l(t.showProducts,(function(p,e){return r("Card",{key:e,attrs:{data:p},on:{sendProduct:t.listeningSendProduct}})})),t._v(" "),t.showButtonMore&&t.toProduct>=4&&t.showProductsLength>=4?r("button",{staticClass:"button__list--add",attrs:{type:"button"},on:{click:function(e){return t.showMoreProducts()}}},[t._v("\n              Mostrar mas\n            ")]):t._e()],2)]),t._v(" "),r("b-modal",{attrs:{id:"modal__prov",size:"lg","hide-footer":""},scopedSlots:t._u([{key:"modal-header",fn:function(e){var n=e.close;return[r("div",[r("h4",{staticClass:"text-white font-weight-bold text-center"},[t._v("Detalle del producto")])]),t._v(" "),r("div",{on:{click:function(t){return n()}}},[r("b-icon",{staticClass:"x__close",attrs:{icon:"x-lg","font-scale":"1.5"}})],1)]}}],null,!1,7435429)},[t._v(" "),r("div",{staticClass:"modal__body"},[r("div",{staticClass:"body__header"},[r("b-img",{staticClass:"img-fluid",attrs:{src:t.productSelected.image_url}})],1),t._v(" "),r("div",{staticClass:"body__texts"},[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h6",[t._v("Nombre: ")]),r("h6",{staticClass:"color__proveedor ml-3 flex-grow-1"},[t._v(t._s(t.productSelected.name))])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h6",[t._v("Codigo: ")]),r("h6",{staticClass:"color__proveedor ml-3  flex-grow-1"},[t._v(t._s(t.productSelected.product_code))])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h6",[t._v("Categoria: ")]),t.productSelected.category?r("h6",{staticClass:"color__proveedor ml-3  flex-grow-1"},[t._v(t._s(t.productSelected.category.name))]):t._e()]),t._v(" "),r("div",{staticClass:"d-flex flex-column justify-content-between align-items-center"},[r("h6",[t._v("Descripción: ")]),t.productSelected.description?r("h6",{staticClass:"color__proveedor ml-3  flex-grow-1"},[t._v(t._s(t.productSelected.description.substr(0,700)))]):t._e()])])])]),t._v(" "),r("b-modal",{attrs:{id:"modal__prov--carrito",size:"xl","no-close-on-backdrop":!0,"hide-footer":""},scopedSlots:t._u([{key:"modal-header",fn:function(e){var n=e.close;return[r("div",[t.carts.length>0?r("h4",{staticClass:"text-white font-weight-bold text-center"},[t._v("Precio total: "+t._s(t.showTotalPrice))]):r("h4",{staticClass:"text-white font-weight-bold text-center"},[t._v("Carrito de compra")])]),t._v(" "),r("div",{on:{click:function(e){n(),t.showMessage=!1}}},[r("b-icon",{staticClass:"x__close",attrs:{icon:"x-lg","font-scale":"1.5"}})],1)]}}],null,!1,2722306092)},[t._v(" "),r("div",{staticClass:"modal__body--carrito"},[t._l(t.carts,(function(e){return t.carts.length>0&&!t.showSend&&!t.showMessage?r("div",{staticClass:"cart__list "},[r("b-img",{staticClass:"w-8",attrs:{src:e.image_url}}),t._v(" "),r("span",{staticClass:"flex-grow-1 text-center color__proveedor"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"mr-3 font-weight-bold"},[t._v(" Precio: "+t._s("$"+(new Intl.NumberFormat).format(e.totalPrice)))]),t._v(" "),r("span",{staticClass:"mr-3 font-weight-bold"},[t._v(" Cantidad: "+t._s(e.count))]),t._v(" "),r("b-icon",{staticClass:"icon__delete",attrs:{icon:"dash-circle-fill","font-scale":"1.5"},on:{click:function(r){return t.removeCart(e)}}})],1):t._e()})),t._v(" "),0!==t.carts.length||t.showSend||t.showMessage?t._e():r("div",{staticClass:"d-flex justify-content-center align-items-center"},[r("h5",{staticClass:"color__proveedor"},[t._v("No hay productos en su carrito.")])]),t._v(" "),t.showSend?r("div",{staticClass:"d-flex justify-content-center align-items-center"},[r("lord-icon",{staticStyle:{width:"250px",height:"250px"},attrs:{src:"https://cdn.lordicon.com/ukodqrxd.json",trigger:"loop",colors:"primary:#e55958,secondary:#e55958",stroke:"100"}})],1):t._e(),t._v(" "),t.showMessage?r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("h4",{staticClass:"bagde--prov"},[t._v("Compra exitosa")]),t._v(" "),r("lord-icon",{staticStyle:{width:"250px",height:"250px"},attrs:{src:"https://cdn.lordicon.com/dlhcdyui.json",trigger:"loop",colors:"primary:#e55958,secondary:#e55958"}}),t._v(" "),r("div",{staticClass:"message--success"},[t._v("Se ha registrado el ticket N°"+t._s(t.ticketId)+' en el sistema, para más detalles vaya a la página "Ordenes", muchas gracias.')])],1):t._e()],2),t._v(" "),t.carts.length>0?r("div",{staticClass:"modal__footer--carrito"},[r("div",{staticClass:"footer__button--carrito",on:{click:function(e){return t.sendToStock()}}},[t.showSend?r("span",[t._v("Enviando... ")]):r("div",{staticClass:"d-flex justify-content-center align-items-center"},[r("span",[t._v("Enviar")])])])]):t._e()])]},proxy:!0}],null,!1,1407200870)}):t._e(),t._v(" "),"Tickets"===t.view?r("Template",{scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"mt-5 d-flex justify-content-between align-items-center"},[r("h3",{staticClass:"ml-5 color__proveedor font-weight-bold bagde--prov"},[t._v("Ordenes")]),t._v(" "),r("div",{staticClass:"user"},[r("h5",{staticClass:"color__red"},[t._v("Gonzalo")]),t._v(" "),r("h6",{staticClass:"bagde--prov"},[t._v("Admin")])])]),t._v(" "),r("div",{staticClass:"tickets"},[t.tickets.length>0?r("div",{staticClass:"tickets__table"},[r("b-table",{attrs:{striped:"",hover:"",items:t.tickets}})],1):r("div",{staticClass:"mt-5 mb-5 d-flex flex-column justify-content-center align-items-center"},[r("lord-icon",{staticStyle:{width:"250px",height:"250px"},attrs:{src:"https://cdn.lordicon.com/nlzvfogq.json",trigger:"loop",colors:"primary:#e55958,secondary:#e55958"}}),t._v(" "),r("h4",{staticClass:"bagde--prov"},[t._v("No hay ordenes creadas, muchas gracias.")])],1)])]},proxy:!0}],null,!1,2912949451)}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(383).default,Template:r(381).default,Template:r(381).default})}}]);