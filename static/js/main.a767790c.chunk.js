(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{41:function(e,t,c){},55:function(e,t,c){},58:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(31),s=c.n(a),n=c(42),i=c(26),r=c(6),l=c(4),o=(c(55),function(){return Object(i.b)()}),d=i.c,j=c(15),u=c(21),b=Object(u.b)({name:"card",initialState:{cardPhones:[]},reducers:{addCard:function(e,t){e.cardPhones.push(Object(j.a)(Object(j.a)({},t.payload),{},{amount:1}))},removeCard:function(e,t){e.cardPhones=e.cardPhones.filter((function(e){return e.phoneId!==t.payload.phoneId}))},clearCard:function(e){e.cardPhones=[]},addAmount:function(e,t){e.cardPhones=e.cardPhones.map((function(e){return e.phoneId===t.payload.phoneId?Object(j.a)(Object(j.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount+1:1}):e}))},removeAmount:function(e,t){e.cardPhones=e.cardPhones.map((function(e){return e.phoneId===t.payload.phoneId?Object(j.a)(Object(j.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount-1:1}):e}))}}}),h=b.actions,m=h.addCard,_=h.removeCard,O=(h.clearCard,h.addAmount),x=h.removeAmount,v=b.reducer,p=(c(58),c(0)),N=function(){var e=d((function(e){return e.card.cardPhones})),t=o(),c=e.reduce((function(e,t){return void 0!==t.amount?e+t.amount*t.price:0}),0),a=e.reduce((function(e,t){return void 0!==t.amount?e+t.amount:0}),0);return Object(p.jsx)("main",{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"}),Object(p.jsx)("h1",{children:"Cart"}),!e.length&&Object(p.jsx)("h2",{children:"The basket is empty "}),Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsx)("ul",{className:"card__phones",children:e.map((function(e){return Object(p.jsxs)("li",{className:"card__item","data-cy":"item",children:[Object(p.jsx)("button",{className:"card__icon-close",type:"button","aria-label":"Decrement value",onClick:function(){return t(_(e))}}),Object(p.jsx)("div",{className:"card__img",children:Object(p.jsx)("img",{className:"card__img",src:"".concat("https://mate-academy.github.io/react_phone-catalog/_new/").concat(e.image),alt:e.name})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"card__phone-name",children:e.name})}),Object(p.jsxs)("div",{className:"card__amount",children:[Object(p.jsx)("button",{className:"card__button card__button-minus",type:"button","aria-label":"Decrement value",disabled:1===(null===e||void 0===e?void 0:e.amount),onClick:function(){return t(x(e))}}),Object(p.jsx)("span",{className:"card__amount-text",children:null===e||void 0===e?void 0:e.amount}),Object(p.jsx)("button",{className:"card__button card__button-plus",type:"button","aria-label":"Increment value",onClick:function(){return t(O(e))}})]}),e.amount&&Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"$".concat(e.price*(null===e||void 0===e?void 0:e.amount))})})]},e.phoneId)}))}),Object(p.jsxs)("div",{className:"card__sum",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"card__sum-total",children:"$".concat(c)}),Object(p.jsxs)("p",{className:"card__sum-text",children:["Total for ".concat(a),1===a?" item":" items"]})]}),Object(p.jsx)(r.b,{to:"/cartbuy",children:Object(p.jsx)("button",{className:"card__checkout",type:"button","aria-label":"checkout",children:"Checkout"})})]})]})]})})})},f=c(3),g=c(1),A=c.n(g),P=c(10),C=c(7),y=c.n(C),w="https://mate-academy.github.io/react_phone-catalog/_new/products.json";function k(e){return new Promise((function(t){return setTimeout(t,e)}))}function S(){return E.apply(this,arguments)}function E(){return(E=Object(P.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch(w)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(P.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products/".concat(t,".json"))})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=A.a.createContext({phones:[],isLoading:!0,isError:!1}),I=function(e){var t=e.children,c=Object(g.useState)([]),a=Object(f.a)(c,2),s=a[0],n=a[1],i=Object(g.useState)(!0),r=Object(f.a)(i,2),l=r[0],o=r[1],d=Object(g.useState)(!1),j=Object(f.a)(d,2),u=j[0],b=j[1];return Object(g.useEffect)((function(){S().then(n).catch((function(){return b(!0)})).finally((function(){return o(!1)}))}),[]),Object(p.jsx)(L.Provider,{value:{phones:s,isLoading:l,isError:u},children:t})},R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgB3YxNDoIwFISHygFcUn/uUB+RehxvoJ4AjsCRdEdcGA8BaZd6gT4JS1JDG3Z8q8lk5gOWiaLjOc/1JWQrvK1L145RExUlJlj5SmvbJpP7pI/VRm5hTPeIEgwS095DJH8FY0kmd19ruma8EZigH/AQHOIhOpUH0qyoqBDLrLMifQ09p97WJR8WfHu/njWWzw/MwzSDZx57zwAAAABJRU5ErkJggg==",U=(c(61),function(e){var t=e.title;return Object(p.jsxs)(r.b,{className:"homeIcon",to:"/",children:[Object(p.jsx)("img",{className:"home__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBzVMxUsMwELxT0jAUqYEmP0B2gKTDPIEXYH4Av6BzTRU/IbwgcUUgM7aekIZJCZQUaDnZYIyJPaZjZ2zZp9vTnrQiaoHWk6F72nJU08RoNLlgZTNWyLR/HDbl9bYFfX8cgegGxLdEnDBxtL93QJvNU1LPZapJZsaUCBqsrk26jD/joaiJCLwG+NyY5fpXAa2PAla9KcnSknRWTaoUnzsGrJUiK1PugetRyHMACbDj1ckOLga8eS6HlZJ9GV+5eD+fBQey8J3JHkNqgTHmRYZQyAMZD78LFM08l3JFkSJ1WiVbsolJV3GxIF6Ji+63H6NTBArK3/z7Z8Ev9KkBYFpk6cNlrsg7iWsHVqLRSF3xjwowaNiZxDwoee4lLhMXisv+AFglbryfVazsru170I2+OzNm4UxFH/eVeqv5mCPWAAAAAElFTkSuQmCC",alt:"homeIcon"}),Object(p.jsx)("img",{className:"home__icon",src:R,alt:"homeIcon"}),Object(p.jsx)("p",{className:"page__title",children:t})]})}),F=c(12),D=c.n(F),T=(c(62),function(e){var t=e.phone,c=d((function(e){return e.card.cardPhones})),a=o(),s=c.find((function(e){return e.phoneId===(null===t||void 0===t?void 0:t.phoneId)}));return Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{"aria-label":"Mute volume",className:D()("button__link",{"button__link-active":s}),onClick:function(e){e.preventDefault(),e.stopPropagation(),t&&!s&&a(m(t)),t&&s&&a(_(t))},children:s?"Added to cart":"Add to cart"})})}),J=Object(u.b)({name:"favourites",initialState:{favouritesPhones:[],loaded:!1,hasError:!1},reducers:{addFavourites:function(e,t){e.favouritesPhones.push(t.payload)},removeFavourites:function(e,t){e.favouritesPhones=e.favouritesPhones.filter((function(e){return e.id!==t.payload.id}))},clearFavourites:function(e){e.favouritesPhones=[]}}}),M=J.actions,V=M.addFavourites,H=M.removeFavourites,Q=(M.clearFavourites,J.reducer),Y=(c(63),function(e){var t=e.phone,c=d((function(e){return e.favourites.favouritesPhones})),a=o();return Object(p.jsx)("button",{"aria-label":"Mute volume",className:D()("icon__favourites",{"icon__favourites-active":t&&c.includes(t)}),onClick:function(e){e.preventDefault(),e.stopPropagation(),t&&!c.includes(t)&&a(V(t)),t&&c.includes(t)&&a(H(t))}})}),W=(c(64),function(e){var t=e.phone,c=t.name,a=t.image,s=t.ram,n=t.capacity,i=t.screen,l=t.price,o=t.fullPrice,d=t.phoneId;return Object(p.jsxs)(r.b,{to:{pathname:"/phones/".concat(d)},className:"ProductCard",children:[Object(p.jsx)("div",{className:"ProductCard__photo",children:Object(p.jsx)("img",{className:"ProductCard__img",src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(a),alt:"".concat(c)})}),Object(p.jsxs)("div",{className:"ProductCard__wrap",children:[Object(p.jsx)("div",{className:"ProductCard__title",children:c}),Object(p.jsxs)("div",{className:"ProductCard__price",children:[Object(p.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(l)}),l&&Object(p.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(o)})]}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:i||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:n||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:s||"-"})]})]}),Object(p.jsxs)("div",{className:"ProductCard__buttons",children:[Object(p.jsx)(T,{phone:t}),Object(p.jsx)(Y,{phone:t})]})]})]})}),Z=(c(65),function(e){var t=e.query,c=e.setQuery,a=Object(l.m)(),s=Object(r.d)(),n=Object(f.a)(s,2),i=n[0],o=n[1];return Object(p.jsx)("div",{className:"search",children:Object(p.jsxs)("label",{className:"search__container",children:[Object(p.jsx)("input",{type:"search",className:"search__input",placeholder:"Search in ".concat(a.pathname.slice(1)),value:t,onChange:function(e){var t=new URLSearchParams(i);t.set("query",e.target.value),o(t),c(e.target.value)}}),!t.length&&Object(p.jsx)("img",{className:"search__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEzSURBVHgBlVLbbcMwDJRkD+AN6hFc2/91N8gGdSdoOkGcCYJM0GyQdoL43w9ohIygAfzoUaACJUgMhABBmeSRp5Ol8CxJkghhFQTBG31LKc0wDH9a61rcmPRABQDHeZ4JoJEy8JhK8Hocx08MOF8BsyxbIRzhezRUaDDewFgpdcIwgdqrqymu7+CHruvWPoiMtkzT9E5MwGjn8ipN05IoYdpWPDCmuIeXrIPdaO/g879n2HqgiK2FBYICTVgE8darKyiSnLcuGijaHu4XEEz9Uj7P82IJCIpfYHdu27a2QD7USP6Q9A+2FQgl/CKgfQ56XJb7RCo75WgQvjeU5/4XB/T/nBgNFY4f/jYMNLgObYpw3sCrvu+38g6tKAzDBPLTIN00jXY16FAx+FuKJw3gNYaaf5WemMn9KeqKAAAAAElFTkSuQmCC",alt:"search"})]})})}),q=(c(66),function(){var e=Object(r.d)(),t=Object(f.a)(e,1)[0],c=Object(g.useState)(t.get("query")||""),a=Object(f.a)(c,2),s=a[0],n=a[1],i=d((function(e){return e.favourites.favouritesPhones})),l=i.filter((function(e){return e.name.toLowerCase().includes(s.trim().toLowerCase())}));return Object(p.jsx)("main",{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(U,{title:"Favourites"}),l.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Favourites"}),Object(p.jsx)("p",{children:"".concat(i.length," items ")}),Object(p.jsx)(Z,{query:s,setQuery:n})]}),0===l.length&&Object(p.jsx)("h2",{children:"The favourites is empty"}),Object(p.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},className:"phones__list",children:l.map((function(e){return Object(p.jsx)("li",{className:"phones__item","data-cy":"item",children:Object(p.jsx)(W,{phone:e})},e.id)}))})]})})})}),z=(c(67),function(){var e=Object(g.useState)(!1),t=Object(f.a)(e,2),c=t[0],a=t[1];Object(g.useEffect)((function(){var e=function(){window.scrollY?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"footer__content",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("div",{className:"header__logo"})}),Object(p.jsxs)("div",{className:"footer__link",children:[Object(p.jsx)(r.b,{className:"footer__text",to:"https://github.com/Tetiana-Hishchak",children:Object(p.jsx)("p",{className:"footer__text",children:"Github"})}),Object(p.jsx)(r.b,{className:"footer__text",to:"https://github.com/Tetiana-Hishchak",children:Object(p.jsx)("p",{className:"footer__text",children:"Contacts"})}),Object(p.jsx)(r.b,{to:"https://github.com/Tetiana-Hishchak",className:"footer__text",children:Object(p.jsx)("p",{className:"footer__text",children:"rights"})})]}),c?Object(p.jsxs)("div",{className:"footer__top",children:[Object(p.jsx)("p",{className:"footer__back",children:"Back to top"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"footer__button--top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]}):Object(p.jsx)("div",{className:"container__button--fake"})]})})})}),K=(c(41),function(){var e=function(e){var t=e.isActive;return D()("header__link",{"header__link-active":t})},t=d((function(e){return e.favourites.favouritesPhones})),c=d((function(e){return e.card.cardPhones})),a=Object(l.m)();return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("div",{className:"headercontainer",children:Object(p.jsxs)("div",{className:"header__content",children:[Object(p.jsxs)("nav",{className:"header__nav",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("div",{className:"header__logo"})}),Object(p.jsxs)("div",{className:"header__main",children:[Object(p.jsx)(r.c,{to:"/",className:e,children:"Home"}),Object(p.jsx)(r.c,{to:"/phones",className:e,children:"Phones"}),Object(p.jsx)(r.c,{to:"/tablets",className:e,children:"Tablets"}),Object(p.jsx)(r.c,{to:"/accessories",className:e,children:"Accessories"})]})]}),Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsxs)("div",{className:"header__right",children:[Object(p.jsxs)("div",{className:"header__ff",children:[Object(p.jsx)(r.c,{to:"/favourites",className:function(e){var t=e.isActive;return D()("header__favourites",{"header__favourites--active":t})}}),0!==t.length&&Object(p.jsx)("div",{className:"favourites__count",children:Object(p.jsx)("span",{className:"favourites__count-text",children:t.length})})]}),Object(p.jsxs)("div",{className:"header__ff",children:[Object(p.jsx)(r.c,{to:"/cart",className:function(e){var t=e.isActive;return D()("header__bag",{"header__bag--active":t})}}),0!==c.length&&Object(p.jsx)("div",{className:"card__count",children:Object(p.jsx)("span",{className:"card__count-text",children:c.length})})]})]}),"/menu"===a.pathname?Object(p.jsx)(r.b,{to:"..",className:"icon icon__close"}):Object(p.jsx)(r.b,{to:"/menu",className:"icon icon__menu"})]})]})})})}),X=c(5),G=c(14),$=c(9),ee=(c(28),c(29),c(30),c(68),function(){var e=Object(g.useContext)(L),t=e.phones,c=e.isLoading,a=e.isError,s=Object(X.a)(t).sort((function(e,t){return t.price-e.price}));return Object(p.jsx)("section",{className:"hot",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"brand__container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h2",{className:"brand__title",children:" Brand new models "})}),Object(p.jsxs)("div",{className:"brand__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button brand__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button brand__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(G.a,{navigation:{nextEl:".brand__button--right",prevEl:".brand__button--left"},spaceBetween:40,slidesPerView:1,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4,spaceBetween:5}},modules:[$.b,$.c,$.d],className:"swiper",children:s.map((function(e){return Object(p.jsx)(G.b,{className:"swiper-slider",children:Object(p.jsx)(W,{phone:e})},e.id)}))})}),!c&&a&&Object(p.jsx)("p",{children:"Something went wrong"})]})})}),te=(c(69),["_new/img/banner-phones.png","_new/img/banner-tablets.png","_new/img/banner-accessories.png"]),ce=function(){return Object(p.jsx)("section",{className:"carousel",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"carousel__content",children:[Object(p.jsx)("button",{className:"carousel__button carousel__button--prev",type:"button",children:"<"}),Object(p.jsx)(G.a,{navigation:{nextEl:".carousel__button--next",prevEl:".carousel__button--prev"},effect:"fade",pagination:{clickable:!0},slidesPerView:1,loop:!0,autoplay:{delay:500},modules:[$.b,$.c,$.d,$.a],className:"mySwiper",children:te.map((function(e,t){return Object(p.jsx)(G.b,{className:"swiper-slider",children:Object(p.jsx)("img",{className:"carousel__img",src:"".concat("https://mate-academy.github.io/react_phone-catalog/").concat(e),alt:"".concat(t+1)})},e)}))}),Object(p.jsx)("button",{className:"carousel__button carousel__button--next",type:"button","data-cy":"next",children:">"})]})})})},ae=(c(70),function(){var e=Object(g.useContext)(L).phones,t=Object(X.a)(e).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)}));return Object(p.jsx)("section",{className:"hot",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"hot__container",children:[Object(p.jsx)("h2",{className:"hot__title",children:" Hot prices "}),Object(p.jsxs)("div",{className:"hot__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button hot__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button hot__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(G.a,{"data-cy":"cardsContainer",navigation:{nextEl:".hot__button--right",prevEl:".hot__button--left"},slidesPerView:1,spaceBetween:6,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[$.b,$.c,$.d],className:"hot__swiper",children:t.map((function(e){return Object(p.jsx)(G.b,{className:"swiper-slider",children:Object(p.jsx)(W,{phone:e})},e.id)}))})})]})})}),se=(c(71),function(){var e="https://mate-academy.github.io/react_phone-catalog/";return Object(p.jsx)("section",{className:"shopcategory",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(p.jsxs)("div",{className:"category","data-cy":"categoryLinksContainer",children:[Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"phones",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--1",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-phones.png"),alt:"phone"})}),Object(p.jsxs)("div",{children:["Mobile phones",Object(p.jsx)("p",{className:"category__description",children:" 95 models"})]})]})}),Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"tablets",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--2",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-tablets.png"),alt:"tablets"})}),Object(p.jsxs)("div",{children:["Tablets",Object(p.jsx)("p",{className:"category__description",children:"24 models"})]})]})}),Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"accessories",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--3",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-accessories.png"),alt:"accessories"})}),Object(p.jsxs)("div",{children:["Accessories",Object(p.jsx)("p",{className:"category__description",children:"100 models"})]})]})})]})]})})}),ne=(c(72),function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(ce,{}),Object(p.jsx)(ae,{}),Object(p.jsx)(se,{}),Object(p.jsx)(ee,{})]})});c(73);var ie,re=function(e){var t=e.total,c=e.setCurrentPage,a=e.currentPage,s=e.itemOnPage,n=Object(r.d)(),i=Object(f.a)(n,2),l=i[0],o=i[1],d=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,Math.ceil(t/s)).map((function(e){return e})),j=function(e){return function(){if(e!==a&&e>0&&e<=d.length){var t=new URLSearchParams(l);t.set("currentPage","page"),o(t),c(e)}}};return Object(p.jsxs)("ul",{className:"pagination__button",children:[Object(p.jsx)("li",{className:D()("pagination__item",{disabled:1===a}),children:Object(p.jsx)(r.b,{"data-cy":"prevLink",className:"pagination__link",to:"#prev","aria-disabled":1===a,onClick:j(a-1),children:"\xab"})}),d.map((function(e){return Object(p.jsx)("li",{className:D()("pagination__item",{"pagination__item-active":e===a}),children:Object(p.jsx)(r.b,{"data-cy":"pageLink",className:D()("pagination__link",{"pagination__link-active":e===a}),to:"#".concat(e),onClick:j(e),children:"".concat(e)})},e)})),Object(p.jsx)("li",{className:D()("pagination__item",{disabled:a===d.length}),children:Object(p.jsx)(r.b,{"data-cy":"nextLink",className:"pagination__link",to:"#next","aria-disabled":a===d.length,onClick:j(a+1),children:"\xbb"})})]})},le=(c(74),function(e){var t=e.itemOnPage,c=e.setItemOnPage,a=Object(r.d)(),s=Object(f.a)(a,2),n=s[0],i=s[1];return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{children:" Items on page "}),Object(p.jsx)("select",{className:"pagination__select",value:t,onChange:function(e){var t=new URLSearchParams(n);c(+e.target.value),t.set("itemOnPage",e.target.value),i(t)},children:[4,8,16].map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]})}),oe=(c(75),c(76),function(e){var t=e.sortValue,c=e.setSortValue,a=Object(r.d)(),s=Object(f.a)(a,2),n=s[0],i=s[1];return Object(p.jsxs)("div",{className:"sort",children:[Object(p.jsx)("p",{children:" Sort by "}),Object(p.jsx)("select",{className:"sort__select",value:t,onChange:function(e){var t=new URLSearchParams(n);c(e.target.value),t.set("sortValue",e.target.value),i(t)},children:["Newest","Alphabetically","Cheapest"].map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]})});!function(e){e.newest="Newest",e.alphabetically="Alphabetically",e.cheapest="Cheapest"}(ie||(ie={}));var de=function(){var e=Object(g.useContext)(L).phones,t=Object(r.d)(),c=Object(f.a)(t,1)[0],a=Object(g.useState)(+(c.get("itemOnPage")||16)),s=Object(f.a)(a,2),n=s[0],i=s[1],l=Object(g.useState)(+(c.get("currentPage")||1)),o=Object(f.a)(l,2),d=o[0],j=o[1],u=Object(g.useState)(c.get("sortValue")||ie.newest),b=Object(f.a)(u,2),h=b[0],m=b[1],_=Object(g.useState)(c.get("query")||""),O=Object(f.a)(_,2),x=O[0],v=O[1],N=d*n,A=N-n,P=Object(g.useMemo)((function(){var t=e;return x&&(t=t.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase().trim())}))),h&&(t=Object(X.a)(t).sort((function(e,t){switch(h){case ie.alphabetically:return t.name.localeCompare(e.name);case ie.cheapest:return e.fullPrice-t.fullPrice;case ie.newest:return t.fullPrice-e.fullPrice;default:return 0}}))),t.slice(A,N)}),[e,h,d,n,x]);return Object(p.jsx)("main",{children:Object(p.jsx)("section",{className:"phones",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(U,{title:"Phones"}),Object(p.jsx)("h1",{children:"Mobile phones"}),0===P.length&&Object(p.jsx)("p",{className:"phone__text",children:" There are not  models"}),P.length>0&&Object(p.jsx)("p",{className:"phone__text",children:"".concat(P.length,"  models")}),Object(p.jsx)(Z,{query:x,setQuery:v}),P.length>8&&Object(p.jsxs)("div",{className:"phones__input",children:[Object(p.jsx)(oe,{sortValue:h,setSortValue:m}),Object(p.jsx)(le,{itemOnPage:n,setItemOnPage:i})]}),Object(p.jsx)("ul",{className:"phones__list",children:P.map((function(e){return Object(p.jsx)("li",{className:"phones__item","data-cy":"item",children:Object(p.jsx)(W,{phone:e})},e.id)}))}),P.length>5&&Object(p.jsx)(re,{total:e.length,itemOnPage:n,currentPage:d,setCurrentPage:j})]})})})},je=(c(77),c(78),function(){var e=Object(g.useContext)(L),t=e.phones,c=e.isLoading,a=e.isError,s=t.filter((function(e){return e.fullPrice>1200})).sort((function(e,t){return t.fullPrice-e.fullPrice}));return Object(p.jsxs)("div",{className:"like",children:[Object(p.jsxs)("div",{className:"like__container",children:[Object(p.jsx)("h2",{className:"like__title",children:" You may also like "}),Object(p.jsxs)("div",{className:"like__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"like__button like__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"like__button like__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(G.a,{navigation:{nextEl:".like__button--right",prevEl:".like__button--left"},spaceBetween:20,slidesPerView:1,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[$.b,$.c,$.d],className:"swiper",children:s.map((function(e){return Object(p.jsx)(G.b,{className:"swiper-slider",children:Object(p.jsx)(W,{phone:e})},e.id)}))})}),!c&&a&&Object(p.jsx)("p",{children:"Something went wrong"})]})}),ue=(c(79),function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),be={rosegold:"#F9D2CD",gold:"#F3DBC4",silver:"#D9DADB",black:"#363539",green:"#BEE8D5",yellow:"#FEE889",white:"#FCF7F4",purple:"#CCC2D6",red:"#CD283F",spacegray:"#4E4D4B",midnightgreen:"#5F6960",coral:"#FD6A56"},he=function(){var e,t,c,a,s,n,i=Object(g.useState)(!0),o=Object(f.a)(i,2),d=o[0],j=o[1],u=Object(g.useState)(null),b=Object(f.a)(u,2),h=b[0],m=b[1],_=Object(l.q)().idPhone,O=Object(g.useState)(0),x=Object(f.a)(O,2),v=x[0],N=x[1],A=Object(g.useContext)(L).phones,P="https://mate-academy.github.io/react_phone-catalog/_new/";function C(){var e=A.find((function(e){return e.phoneId===_}));return void 0!==e?e:null}Object(g.useEffect)((function(){_&&function(e){return B.apply(this,arguments)}(_).then(m).finally((function(){return j(!1)}))}),[_,h]);return Object(p.jsxs)("div",{children:[d&&Object(p.jsx)(ue,{}),!d&&Object(p.jsx)("section",{className:"details",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"details__title--main",children:[Object(p.jsx)(U,{title:"Phones"}),Object(p.jsx)("img",{className:"details__arrow",src:R,alt:"homeIcon"}),Object(p.jsx)("span",{className:"details__subtitle",children:null===h||void 0===h?void 0:h.name})]}),Object(p.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"}),Object(p.jsx)("h1",{className:"details__title--name",children:null===h||void 0===h?void 0:h.name}),Object(p.jsxs)("div",{className:"details__container",children:[Object(p.jsxs)("div",{className:"photos",children:[Object(p.jsx)("div",{className:"photos__side",children:null===h||void 0===h?void 0:h.images.map((function(e,t){return Object(p.jsx)("button",{type:"button",className:"photos__buttons",onClick:function(){return N(t)},children:Object(p.jsx)("img",{src:"".concat(P).concat(e),alt:"side_photo",className:"photos__sidePhoto"})},e)}))}),Object(p.jsx)("div",{className:"photos__main",children:Object(p.jsx)("img",{className:"photos__main__img",src:"".concat(P).concat(null===h||void 0===h?void 0:h.images[v]),alt:"main_photo"})})]}),Object(p.jsxs)("div",{className:"params__container",children:[Object(p.jsxs)("div",{className:"params__color",children:[Object(p.jsx)("p",{className:"params__color--heading",children:"Available colors"}),Object(p.jsx)("div",{className:"colors__list",children:null===h||void 0===h?void 0:h.colorsAvailable.map((function(e){return Object(p.jsx)("div",{className:"colors__item",children:Object(p.jsx)("div",{className:D()("colors__border",{"colors__border--selected":e===h.color}),children:Object(p.jsx)(r.b,{to:"/phones/".concat(h.namespaceId,"-").concat(h.capacity.toLocaleLowerCase(),"-").concat(e),className:"colors__circle",style:{backgroundColor:"".concat(be[e])}})})},e)}))})]}),Object(p.jsxs)("div",{className:"params__capacity",children:[Object(p.jsx)("p",{className:"params__capacity--heading",children:"Select capacity"}),Object(p.jsx)("div",{className:"capacities__list",children:null===h||void 0===h?void 0:h.capacityAvailable.map((function(e){return Object(p.jsx)(r.b,{to:"/phones/".concat(h.namespaceId,"-").concat(e.toLocaleLowerCase(),"-").concat(h.color),className:D()("capacities__link",{"capacities__link--selected":e===h.capacity}),children:e},e)}))})]}),Object(p.jsxs)("div",{className:"ProductCard__price",children:[Object(p.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(null===h||void 0===h?void 0:h.priceDiscount)}),(null===h||void 0===h?void 0:h.priceDiscount)&&Object(p.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(h.priceRegular)})]}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__buttons",children:[Object(p.jsx)(T,{phone:C()}),Object(p.jsx)(Y,{phone:C()})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.screen)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Resolution"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.resolution)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Processor"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.processor)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.ram)||"-"})]})]})]})]}),Object(p.jsxs)("div",{className:"details__container",children:[Object(p.jsxs)("div",{className:"details__about",children:[Object(p.jsx)("h2",{className:"details__about-title",children:"About"}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(e=h.description[0])||void 0===e?void 0:e.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(t=h.description[0])||void 0===t?void 0:t.text}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(c=h.description[1])||void 0===c?void 0:c.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(a=h.description[1])||void 0===a?void 0:a.text}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(s=h.description[2])||void 0===s?void 0:s.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(n=h.description[2])||void 0===n?void 0:n.text})]}),Object(p.jsxs)("div",{className:"details__tech",children:[Object(p.jsx)("h2",{className:"details__title",children:"Tech specs"}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.screen)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Resolution"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.resolution)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Processor"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.processor)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.ram)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Built in memory"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.capacity)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Camera"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.camera)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Zoom"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.zoom)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Cell"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.cell)||"-"})]})]})]})]}),Object(p.jsx)(je,{})]})})]})},me=(c(80),function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],s=Object(g.useState)(!0),n=Object(f.a)(s,2),i=n[0],r=n[1],l=Object(g.useState)(!1),o=Object(f.a)(l,2),d=o[0],j=o[1];Object(g.useEffect)((function(){S().then(a).catch((function(){return j(!0)})).finally((function(){return r(!1)}))}),[]);var u=Object(X.a)(c).filter((function(e){return"tablet"===e.name}));return Object(p.jsx)("main",{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"container",children:[i&&Object(p.jsx)(ue,{}),!i&&0===u.length&&Object(p.jsxs)("div",{className:"tablets__container",children:[Object(p.jsx)(U,{title:"Tablets"}),Object(p.jsx)("h2",{children:"Tablets"}),Object(p.jsx)("p",{children:"Tablets are not available yet "})]}),0!==u.length&&Object(p.jsx)("h2",{children:"Tablets"}),!i&&d&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})})}),_e=(c(81),function(){var e=function(e){var t=e.isActive;return D()("menu__link",{"menu__link-active":t})};return Object(p.jsx)("header",{className:"menu",children:Object(p.jsx)("nav",{className:"menu__nav",children:Object(p.jsxs)("div",{className:"menu__main",children:[Object(p.jsx)(r.c,{to:"/",className:e,children:"Home"}),Object(p.jsx)(r.c,{to:"/phones",className:e,children:"Phones"}),Object(p.jsx)(r.c,{to:"/tablets",className:e,children:"Tablets"}),Object(p.jsx)(r.c,{to:"/accessories",className:e,children:"Accessories"})]})})})}),Oe=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],s=Object(g.useState)(!0),n=Object(f.a)(s,2),i=n[0],r=n[1],l=Object(g.useState)(!1),o=Object(f.a)(l,2),d=o[0],j=o[1];Object(g.useEffect)((function(){S().then(a).catch((function(){return j(!0)})).finally((function(){return r(!1)}))}),[]);var u=Object(X.a)(c).filter((function(e){return"accessories"===e.name}));return Object(p.jsx)("main",{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"container",children:[i&&Object(p.jsx)(ue,{}),!i&&0===u.length&&Object(p.jsxs)("div",{className:"tablets__container",children:[Object(p.jsx)(U,{title:"Accessories"}),Object(p.jsx)("h2",{children:"Accessories"}),Object(p.jsx)("p",{children:"Accessories are not available yet "})]}),0!==u.length&&Object(p.jsx)("h2",{children:"Tablets"}),!i&&d&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})})},xe=function(){return Object(p.jsx)("main",{children:Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"}),Object(p.jsxs)("div",{children:["Apologies for the inconvenience, but this page",Object(p.jsx)("br",{}),"are not available yet!"]})]})})})},ve=function(){return Object(p.jsx)(I,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(K,{}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/",element:Object(p.jsx)(ne,{})}),Object(p.jsx)(l.b,{path:"/home",element:Object(p.jsx)(l.a,{to:"/",replace:!0})}),Object(p.jsx)(l.b,{path:"/menu",element:Object(p.jsx)(_e,{})}),Object(p.jsxs)(l.b,{path:"/phones",children:[Object(p.jsx)(l.b,{index:!0,element:Object(p.jsx)(de,{})}),Object(p.jsx)(l.b,{path:":idPhone",element:Object(p.jsx)(he,{})})]}),Object(p.jsx)(l.b,{path:"/tablets",element:Object(p.jsx)(me,{})}),Object(p.jsx)(l.b,{path:"/accessories",element:Object(p.jsx)(Oe,{})}),Object(p.jsx)(l.b,{path:"/favourites",element:Object(p.jsx)(q,{})}),Object(p.jsx)(l.b,{path:"/cart",element:Object(p.jsx)(N,{})}),Object(p.jsx)(l.b,{path:"/cartbuy",element:Object(p.jsx)(xe,{})}),Object(p.jsx)(l.b,{path:"*",element:Object(p.jsx)("h1",{className:"title",children:"Page not found"})})]}),Object(p.jsx)(z,{})]})})},pe=c(13),Ne=c(18),fe=c(45),ge=c.n(fe),Ae=Object(pe.b)({favourites:Q,card:v}),Pe={key:"root",storage:ge.a},Ce=Object(Ne.g)(Pe,Ae),ye=Object(u.a)({reducer:Ce,middleware:function(e){return e({serializableCheck:{ignoredActions:[Ne.a,Ne.f,Ne.b,Ne.c,Ne.d,Ne.e]}})}}),we=Object(Ne.h)(ye),ke=ye;s.a.render(Object(p.jsx)(n.a,{loading:null,persistor:we,children:Object(p.jsx)(i.a,{store:ke,children:Object(p.jsx)(r.a,{children:Object(p.jsx)(ve,{})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.a767790c.chunk.js.map