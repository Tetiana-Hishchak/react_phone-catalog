(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{41:function(e,t,c){},55:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var a=c(31),s=c.n(a),n=c(42),i=c(26),r=c(6),l=c(4),o=(c(55),function(){return Object(i.b)()}),d=i.c,j=c(15),u=c(21),b=Object(u.b)({name:"card",initialState:{cardPhones:[]},reducers:{addCard:function(e,t){e.cardPhones.push(Object(j.a)(Object(j.a)({},t.payload),{},{amount:1}))},removeCard:function(e,t){e.cardPhones=e.cardPhones.filter((function(e){return e.phoneId!==t.payload.phoneId}))},clearCard:function(e){e.cardPhones=[]},addAmount:function(e,t){e.cardPhones=e.cardPhones.map((function(e){return e.phoneId===t.payload.phoneId?Object(j.a)(Object(j.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount+1:1}):e}))},removeAmount:function(e,t){e.cardPhones=e.cardPhones.map((function(e){return e.phoneId===t.payload.phoneId?Object(j.a)(Object(j.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount-1:1}):e}))}}}),h=b.actions,m=h.addCard,_=h.removeCard,O=(h.clearCard,h.addAmount),x=h.removeAmount,v=b.reducer,p=(c(58),c(0)),f=function(){var e=d((function(e){return e.card.cardPhones})),t=o(),c=e.reduce((function(e,t){return void 0!==t.amount?e+t.amount*t.price:0}),0);return Object(p.jsx)("main",{children:Object(p.jsxs)("section",{children:[!e.length&&Object(p.jsx)("p",{children:"The basket is empty "}),Object(p.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"}),Object(p.jsx)("h1",{children:"Cart"}),Object(p.jsxs)("div",{className:"card__container",children:[Object(p.jsx)("ul",{className:"card__phones",children:e.map((function(e){return Object(p.jsxs)("li",{className:"card__item","data-cy":"item",children:[Object(p.jsx)("button",{className:"card__icon-close",type:"button","aria-label":"Decrement value",onClick:function(){return t(_(e))},children:Object(p.jsx)("img",{className:"card__icon-close-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB3VDBDcIwDHQsBuhCffDghdiBDYAJ0m7ALNC+UITULMQECXaUSlbrtH33pEiJ73yxD2Bf6N1w7b/+VuSJe5FG1lA+IkAVAzxJaJVmyxw1VLCE98c3nfNRmvCda8xN9aZkYhAsndRAPzd02sup3mYgTbKB2szAkgEeOJL5fdMEObA0dhLldc7HuoU1aIFpwaro3HAvpT2asEbWcbLPD4J5aIGlGnGBNfvCH6zpbv8cgfGJAAAAAElFTkSuQmCC",alt:"close"})}),Object(p.jsx)("div",{className:"card__img",children:Object(p.jsx)("img",{className:"card__img",src:"".concat("https://mate-academy.github.io/react_phone-catalog/_new/").concat(e.image),alt:e.name})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"card__phone-name",children:e.name})}),Object(p.jsxs)("div",{className:"card__amount",children:[Object(p.jsx)("button",{className:"card__button",type:"button","aria-label":"Decrement value",disabled:1===(null===e||void 0===e?void 0:e.amount),onClick:function(){return t(x(e))},children:"-"}),Object(p.jsx)("span",{className:"card__amount-text",children:null===e||void 0===e?void 0:e.amount}),Object(p.jsx)("button",{className:"card__button",type:"button","aria-label":"Increment value",onClick:function(){return t(O(e))},children:"+"})]}),e.amount&&Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"$".concat(e.price*(null===e||void 0===e?void 0:e.amount))})})]},e.phoneId)}))}),Object(p.jsxs)("div",{className:"card__sum",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"card__sum-total",children:"$".concat(c)}),Object(p.jsxs)("p",{className:"card__sum-text",children:["Total for ".concat(e.length),1===e.length?" item":" items"]})]}),Object(p.jsx)("button",{className:"card__checkout",type:"button","aria-label":"checkout",children:"Checkout"})]})]})]})})},N=c(3),g=c(1),A=c.n(g).a.createContext({phones:[],setPhones:function(){}}),P=function(e){var t=e.children,c=Object(g.useState)([]),a=Object(N.a)(c,2),s=a[0],n=a[1],i=Object(g.useMemo)((function(){return{phones:s,setPhones:n}}),[s]);return Object(p.jsx)(A.Provider,{value:i,children:t})},C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgB3YxNDoIwFISHygFcUn/uUB+RehxvoJ4AjsCRdEdcGA8BaZd6gT4JS1JDG3Z8q8lk5gOWiaLjOc/1JWQrvK1L145RExUlJlj5SmvbJpP7pI/VRm5hTPeIEgwS095DJH8FY0kmd19ruma8EZigH/AQHOIhOpUH0qyoqBDLrLMifQ09p97WJR8WfHu/njWWzw/MwzSDZx57zwAAAABJRU5ErkJggg==",y=(c(60),function(e){var t=e.title;return Object(p.jsxs)(r.b,{className:"homeIcon",to:"/",children:[Object(p.jsx)("img",{className:"home__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgBzVMxUsMwELxT0jAUqYEmP0B2gKTDPIEXYH4Av6BzTRU/IbwgcUUgM7aekIZJCZQUaDnZYIyJPaZjZ2zZp9vTnrQiaoHWk6F72nJU08RoNLlgZTNWyLR/HDbl9bYFfX8cgegGxLdEnDBxtL93QJvNU1LPZapJZsaUCBqsrk26jD/joaiJCLwG+NyY5fpXAa2PAla9KcnSknRWTaoUnzsGrJUiK1PugetRyHMACbDj1ckOLga8eS6HlZJ9GV+5eD+fBQey8J3JHkNqgTHmRYZQyAMZD78LFM08l3JFkSJ1WiVbsolJV3GxIF6Ji+63H6NTBArK3/z7Z8Ev9KkBYFpk6cNlrsg7iWsHVqLRSF3xjwowaNiZxDwoee4lLhMXisv+AFglbryfVazsru170I2+OzNm4UxFH/eVeqv5mCPWAAAAAElFTkSuQmCC",alt:"homeIcon"}),Object(p.jsx)("img",{className:"home__icon",src:C,alt:"homeIcon"}),Object(p.jsx)("p",{className:"page__title",children:t})]})}),w=c(12),k=c.n(w),S=(c(62),function(e){var t=e.phone,c=d((function(e){return e.card.cardPhones})),a=o(),s=c.find((function(e){return e.phoneId===(null===t||void 0===t?void 0:t.phoneId)}));return Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{"aria-label":"Mute volume",className:k()("button__link",{"button__link-active":s}),onClick:function(e){e.preventDefault(),e.stopPropagation(),t&&!s&&a(m(t)),t&&s&&a(_(t))},children:s?"Added to cart":"Add to cart"})})}),E=Object(u.b)({name:"favourites",initialState:{favouritesPhones:[],loaded:!1,hasError:!1},reducers:{addFavourites:function(e,t){e.favouritesPhones.push(t.payload)},removeFavourites:function(e,t){e.favouritesPhones=e.favouritesPhones.filter((function(e){return e.id!==t.payload.id}))},clearFavourites:function(e){e.favouritesPhones=[]}}}),B=E.actions,I=B.addFavourites,L=B.removeFavourites,U=(B.clearFavourites,E.reducer),R=(c(63),function(e){var t=e.phone,c=d((function(e){return e.favourites.favouritesPhones})),a=o();return Object(p.jsx)("button",{"aria-label":"Mute volume",className:k()("icon__favourites",{"icon__favourites-active":t&&c.includes(t)}),onClick:function(e){e.preventDefault(),e.stopPropagation(),t&&!c.includes(t)&&a(I(t)),t&&c.includes(t)&&a(L(t))}})}),D=(c(64),function(e){var t=e.phone,c=t.name,a=t.image,s=t.ram,n=t.capacity,i=t.screen,l=t.price,o=t.fullPrice,d=t.phoneId;return Object(p.jsxs)(r.b,{to:{pathname:"/phones/".concat(d)},className:"ProductCard",children:[Object(p.jsx)("div",{className:"ProductCard__photo",children:Object(p.jsx)("img",{className:"ProductCard__img",src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(a),alt:"".concat(c)})}),Object(p.jsxs)("div",{className:"ProductCard__wrap",children:[Object(p.jsx)("div",{className:"ProductCard__title",children:c}),Object(p.jsxs)("div",{className:"ProductCard__price",children:[Object(p.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(l)}),l&&Object(p.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(o)})]}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:i||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Capacity"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:n||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:s||"-"})]})]}),Object(p.jsxs)("div",{className:"ProductCard__buttons",children:[Object(p.jsx)(S,{phone:t}),Object(p.jsx)(R,{phone:t})]})]})]})}),F=(c(65),function(e){var t=e.query,c=e.setQuery,a=Object(l.m)(),s=Object(r.d)(),n=Object(N.a)(s,2),i=n[0],o=n[1];return Object(p.jsx)("div",{className:"search",children:Object(p.jsxs)("label",{className:"search__container",children:[Object(p.jsx)("input",{type:"search",className:"search__input",placeholder:"Search in ".concat(a.pathname.slice(1)),value:t,onChange:function(e){var t=new URLSearchParams(i);t.set("query",e.target.value),o(t),c(e.target.value)}}),!t.length&&Object(p.jsx)("img",{className:"search__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEzSURBVHgBlVLbbcMwDJRkD+AN6hFc2/91N8gGdSdoOkGcCYJM0GyQdoL43w9ohIygAfzoUaACJUgMhABBmeSRp5Ol8CxJkghhFQTBG31LKc0wDH9a61rcmPRABQDHeZ4JoJEy8JhK8Hocx08MOF8BsyxbIRzhezRUaDDewFgpdcIwgdqrqymu7+CHruvWPoiMtkzT9E5MwGjn8ipN05IoYdpWPDCmuIeXrIPdaO/g879n2HqgiK2FBYICTVgE8darKyiSnLcuGijaHu4XEEz9Uj7P82IJCIpfYHdu27a2QD7USP6Q9A+2FQgl/CKgfQ56XJb7RCo75WgQvjeU5/4XB/T/nBgNFY4f/jYMNLgObYpw3sCrvu+38g6tKAzDBPLTIN00jXY16FAx+FuKJw3gNYaaf5WemMn9KeqKAAAAAElFTkSuQmCC",alt:"search"})]})})}),J=(c(66),function(){var e=Object(r.d)(),t=Object(N.a)(e,1)[0],c=Object(g.useState)(t.get("query")||""),a=Object(N.a)(c,2),s=a[0],n=a[1],i=d((function(e){return e.favourites.favouritesPhones})),l=i.filter((function(e){return e.name.toLowerCase().includes(s.trim().toLowerCase())}));return Object(p.jsxs)("section",{children:[Object(p.jsx)(y,{title:"Favourites"}),Object(p.jsx)("h1",{children:"Favourites"}),Object(p.jsx)("p",{children:"".concat(i.length," items ")}),Object(p.jsx)(F,{query:s,setQuery:n}),0===l.length&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(p.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},className:"phones__list",children:l.map((function(e){return Object(p.jsx)("li",{className:"phones__item","data-cy":"item",children:Object(p.jsx)(D,{phone:e})},e.id)}))})]})}),V=(c(67),function(){var e=Object(g.useState)(!1),t=Object(N.a)(e,2),c=t[0],a=t[1];Object(g.useEffect)((function(){var e=function(){window.scrollY?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("div",{className:"header__logo"})}),Object(p.jsxs)("div",{className:"footer__link",children:[Object(p.jsx)(r.b,{className:"footer__text",to:"https://github.com/Tetiana-Hishchak",children:Object(p.jsx)("p",{className:"footer__text",children:"Github"})}),Object(p.jsx)(r.b,{className:"footer__text",to:"https://github.com/Tetiana-Hishchak",children:Object(p.jsx)("p",{className:"footer__text",children:"Contacts"})}),Object(p.jsx)(r.b,{to:"https://github.com/Tetiana-Hishchak",className:"footer__text",children:Object(p.jsx)("p",{className:"footer__text",children:"rights"})})]}),c?Object(p.jsxs)("div",{className:"footer__top",children:[Object(p.jsx)("p",{className:"footer__back",children:"Back to top"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"footer__button--top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]}):Object(p.jsx)("div",{className:"container__button--fake"})]})}),T=(c(41),function(){var e=function(e){var t=e.isActive;return k()("header__link",{"header__link-active":t})},t=d((function(e){return e.favourites.favouritesPhones})),c=d((function(e){return e.card.cardPhones})),a=Object(l.m)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsxs)("nav",{className:"header__nav",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("div",{className:"header__logo"})}),Object(p.jsxs)("div",{className:"header__main",children:[Object(p.jsx)(r.c,{to:"/",className:e,children:"Home"}),Object(p.jsx)(r.c,{to:"/phones",className:e,children:"Phones"}),Object(p.jsx)(r.c,{to:"/tablets",className:e,children:"Tablets"}),Object(p.jsx)(r.c,{to:"/accessories",className:e,children:"Accessories"})]})]}),Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsxs)("div",{className:"header__right",children:[Object(p.jsx)(r.c,{to:"/favourites",className:function(e){var t=e.isActive;return k()("header__favourites",{"header__favourites--active":t})}}),0!==t.length&&Object(p.jsx)("div",{className:"favourites__count",children:Object(p.jsx)("span",{className:"favourites__count-text",children:t.length})}),Object(p.jsx)(r.c,{to:"/cart",className:function(e){var t=e.isActive;return k()("header__bag",{"header__bag--active":t})}}),0!==c.length&&Object(p.jsx)("div",{className:"card__count",children:Object(p.jsx)("span",{className:"card__count-text",children:c.length})})]}),"/menu"===a.pathname?Object(p.jsx)(r.b,{to:"..",className:"icon icon__close"}):Object(p.jsx)(r.b,{to:"/menu",className:"icon icon__menu"})]})]})}),M=c(5),Q=c(14),H=c(9),Y=c(10),z=c(7),G=c.n(z),W="https://mate-academy.github.io/react_phone-catalog/_new/products.json";function X(e){return new Promise((function(t){return setTimeout(t,e)}))}function Z(){return K.apply(this,arguments)}function K(){return(K=Object(Y.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(500).then((function(){return fetch(W)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(Y.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(500).then((function(){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products/".concat(t,".json"))})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(28),c(29),c(30),c(68);var $=function(){var e=Object(g.useContext)(A),t=e.phones,c=e.setPhones,a=Object(g.useState)(!0),s=Object(N.a)(a,2),n=s[0],i=s[1],r=Object(g.useState)(!1),l=Object(N.a)(r,2),o=l[0],d=l[1];Object(g.useEffect)((function(){Z().then(c).catch((function(){return d(!0)})).finally((function(){return i(!1)}))}),[]);var j=Object(M.a)(t).sort((function(e,t){return t.price-e.price}));return Object(p.jsxs)("section",{className:"hot",children:[Object(p.jsxs)("div",{className:"brand__container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h2",{className:"brand__title",children:" Brand new models "})}),Object(p.jsxs)("div",{className:"brand__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button brand__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button brand__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(Q.a,{navigation:{nextEl:".brand__button--right",prevEl:".brand__button--left"},spaceBetween:40,slidesPerView:1,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4,spaceBetween:5}},modules:[H.b,H.c,H.d],className:"swiper",children:j.map((function(e){return Object(p.jsx)(Q.b,{className:"swiper-slider",children:Object(p.jsx)(D,{phone:e})},e.id)}))})}),!n&&o&&Object(p.jsx)("p",{children:"Something went wrong"})]})},ee=(c(69),["_new/img/banner-phones.png","_new/img/banner-tablets.png","_new/img/banner-accessories.png"]),te=function(){return Object(p.jsxs)("div",{className:"carousel",children:[Object(p.jsx)("button",{className:"carousel__button carousel__button--prev",type:"button",children:"<"}),Object(p.jsx)(Q.a,{navigation:{nextEl:".carousel__button--next",prevEl:".carousel__button--prev"},effect:"fade",pagination:{clickable:!0},slidesPerView:1,autoplay:{delay:500},modules:[H.b,H.c,H.d,H.a],className:"swiper",children:ee.map((function(e,t){return Object(p.jsx)(Q.b,{className:"swiper-slider",children:Object(p.jsx)("img",{className:"carousel__img",src:"".concat("https://mate-academy.github.io/react_phone-catalog/").concat(e),alt:"".concat(t+1)})},e)}))}),Object(p.jsx)("button",{className:"carousel__button carousel__button--next",type:"button","data-cy":"next",children:">"})]})},ce=(c(70),function(){var e=Object(g.useContext)(A).phones,t=Object(M.a)(e).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)}));return Object(p.jsxs)("section",{className:"hot",children:[Object(p.jsxs)("div",{className:"hot__container",children:[Object(p.jsx)("h2",{className:"hot__title",children:" Hot prices "}),Object(p.jsxs)("div",{className:"hot__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button hot__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"hot__button hot__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(Q.a,{"data-cy":"cardsContainer",navigation:{nextEl:".hot__button--right",prevEl:".hot__button--left"},spaceBetween:20,slidesPerView:1,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4,spaceBetween:5}},modules:[H.b,H.c,H.d],className:"swiper",children:t.map((function(e){return Object(p.jsx)(Q.b,{className:"swiper-slider",children:Object(p.jsx)(D,{phone:e})},e.id)}))})})]})}),ae=(c(71),function(){var e="https://mate-academy.github.io/react_phone-catalog/";return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(p.jsxs)("div",{className:"category","data-cy":"categoryLinksContainer",children:[Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"phones",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--1",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-phones.png"),alt:"phone"})}),Object(p.jsxs)("div",{children:["Mobile phones",Object(p.jsx)("p",{className:"category__description",children:" 95 models"})]})]})}),Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"tablets",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--2",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-tablets.png"),alt:"tablets"})}),Object(p.jsxs)("div",{children:["Tablets",Object(p.jsx)("p",{className:"category__description",children:"24 models"})]})]})}),Object(p.jsx)("div",{className:"category__box",children:Object(p.jsxs)(r.b,{to:"accessories",className:"category__link",children:[Object(p.jsx)("div",{className:"category__container category__container--3",children:Object(p.jsx)("img",{className:"category__img",src:"".concat(e,"_new/img/category-accessories.png"),alt:"accessories"})}),Object(p.jsxs)("div",{children:["Accessories",Object(p.jsx)("p",{className:"category__description",children:"100 models"})]})]})})]})]})}),se=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(te,{}),Object(p.jsx)(ce,{}),Object(p.jsx)(ae,{}),Object(p.jsx)($,{})]})};c(72);var ne,ie=function(e){var t=e.total,c=e.setCurrentPage,a=e.currentPage,s=e.itemOnPage,n=Object(r.d)(),i=Object(N.a)(n,2),l=i[0],o=i[1],d=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,Math.ceil(t/s)).map((function(e){return e})),j=function(e){return function(){if(e!==a&&e>0&&e<=d.length){var t=new URLSearchParams(l);t.set("currentPage","page"),o(t),c(e)}}};return Object(p.jsxs)("ul",{className:"pagination__button",children:[Object(p.jsx)("li",{className:k()("pagination__item",{disabled:1===a}),children:Object(p.jsx)(r.b,{"data-cy":"prevLink",className:"pagination__link",to:"#prev","aria-disabled":1===a,onClick:j(a-1),children:"\xab"})}),d.map((function(e){return Object(p.jsx)("li",{className:k()("pagination__item",{"pagination__item-active":e===a}),children:Object(p.jsx)(r.b,{"data-cy":"pageLink",className:k()("pagination__link",{"pagination__link-active":e===a}),to:"#".concat(e),onClick:j(e),children:"".concat(e)})},e)})),Object(p.jsx)("li",{className:k()("pagination__item",{disabled:a===d.length}),children:Object(p.jsx)(r.b,{"data-cy":"nextLink",className:"pagination__link",to:"#next","aria-disabled":a===d.length,onClick:j(a+1),children:"\xbb"})})]})},re=(c(73),function(e){var t=e.itemOnPage,c=e.setItemOnPage,a=Object(r.d)(),s=Object(N.a)(a,2),n=s[0],i=s[1];return Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("p",{children:" Items on page "}),Object(p.jsx)("select",{className:"pagination__select",value:t,onChange:function(e){var t=new URLSearchParams(n);c(+e.target.value),t.set("itemOnPage",e.target.value),i(t)},children:[4,8,16].map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]})}),le=(c(74),c(75),function(e){var t=e.sortValue,c=e.setSortValue,a=Object(r.d)(),s=Object(N.a)(a,2),n=s[0],i=s[1];return Object(p.jsxs)("div",{className:"sort",children:[Object(p.jsx)("p",{children:" Sort by "}),Object(p.jsx)("select",{className:"sort__select",value:t,onChange:function(e){var t=new URLSearchParams(n);c(e.target.value),t.set("sortValue",e.target.value),i(t)},children:["Newest","Alphabetically","Cheapest"].map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]})});!function(e){e.newest="Newest",e.alphabetically="Alphabetically",e.cheapest="Cheapest"}(ne||(ne={}));c(76);var oe=function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})},de=function(){var e=Object(g.useState)([]),t=Object(N.a)(e,2),c=t[0],a=t[1],s=Object(r.d)(),n=Object(N.a)(s,1)[0],i=Object(g.useState)(+(n.get("itemOnPage")||16)),l=Object(N.a)(i,2),o=l[0],d=l[1],j=Object(g.useState)(+(n.get("currentPage")||1)),u=Object(N.a)(j,2),b=u[0],h=u[1],m=Object(g.useState)(n.get("sortValue")||ne.newest),_=Object(N.a)(m,2),O=_[0],x=_[1],v=Object(g.useState)(n.get("query")||""),f=Object(N.a)(v,2),A=f[0],P=f[1],C=b*o,w=C-o,k=Object(g.useState)(!0),S=Object(N.a)(k,2),E=S[0],B=S[1];Object(g.useEffect)((function(){Z().then(a).catch().finally((function(){return B(!1)}))}),[]);var I=Object(g.useMemo)((function(){var e=c;return A&&(e=e.filter((function(e){return e.name.toLowerCase().includes(A.toLowerCase().trim())}))),O&&(e=Object(M.a)(e).sort((function(e,t){switch(O){case ne.alphabetically:return t.name.localeCompare(e.name);case ne.cheapest:return e.fullPrice-t.fullPrice;case ne.newest:return t.fullPrice-e.fullPrice;default:return 0}}))),e.slice(w,C)}),[c,O,b,o,A]);return Object(p.jsxs)("section",{className:"phones",children:[Object(p.jsx)(y,{title:"Phones"}),Object(p.jsx)("h1",{children:"Mobile phones"}),Object(p.jsx)("p",{className:"phone__text",children:"".concat(c.length,"  models")}),Object(p.jsx)(F,{query:A,setQuery:P}),E&&Object(p.jsx)(oe,{}),!E&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"phones__input",children:[Object(p.jsx)(le,{sortValue:O,setSortValue:x}),Object(p.jsx)(re,{itemOnPage:o,setItemOnPage:d})]}),Object(p.jsx)("ul",{className:"phones__list",children:I.map((function(e){return Object(p.jsx)("li",{className:"phones__item","data-cy":"item",children:Object(p.jsx)(D,{phone:e})},e.id)}))}),Object(p.jsx)(ie,{total:c.length,itemOnPage:o,currentPage:b,setCurrentPage:h})]})]})},je=(c(77),c(78),function(){var e=Object(g.useContext)(A),t=e.phones,c=e.setPhones,a=Object(g.useState)(!0),s=Object(N.a)(a,2),n=s[0],i=s[1],r=Object(g.useState)(!1),l=Object(N.a)(r,2),o=l[0],d=l[1];Object(g.useEffect)((function(){Z().then(c).catch((function(){return d(!0)})).finally((function(){return i(!1)}))}),[]);var j=t.filter((function(e){return e.fullPrice>1200})).sort((function(e,t){return t.fullPrice-e.fullPrice}));return Object(p.jsxs)("div",{className:"like",children:[Object(p.jsxs)("div",{className:"like__container",children:[Object(p.jsx)("h2",{className:"like__title",children:" You may also like "}),Object(p.jsxs)("div",{className:"like__button",children:[Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"like__button like__button--left"}),Object(p.jsx)("button",{type:"button","aria-label":"Mute volume",className:"like__button like__button--right"})]})]}),Object(p.jsx)("div",{className:"product",children:Object(p.jsx)(Q.a,{navigation:{nextEl:".like__button--right",prevEl:".like__button--left"},spaceBetween:20,slidesPerView:1,breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[H.b,H.c,H.d],className:"swiper",children:j.map((function(e){return Object(p.jsx)(Q.b,{className:"swiper-slider",children:Object(p.jsx)(D,{phone:e})},e.id)}))})}),!n&&o&&Object(p.jsx)("p",{children:"Something went wrong"})]})}),ue={rosegold:"#F9D2CD",gold:"#F3DBC4",silver:"#D9DADB",black:"#363539",green:"#BEE8D5",yellow:"#FEE889",white:"#FCF7F4",purple:"#CCC2D6",red:"#CD283F",spacegray:"#4E4D4B",midnightgreen:"#5F6960",coral:"#FD6A56"},be=function(){var e,t,c,a,s,n,i=Object(g.useState)(!0),o=Object(N.a)(i,2),d=o[0],j=o[1],u=Object(g.useState)(null),b=Object(N.a)(u,2),h=b[0],m=b[1],_=Object(l.q)().idPhone,O=Object(g.useState)(0),x=Object(N.a)(O,2),v=x[0],f=x[1],A=Object(g.useState)([]),P=Object(N.a)(A,2),w=P[0],E=P[1],B="https://mate-academy.github.io/react_phone-catalog/_new/";function I(){var e=w.find((function(e){return e.phoneId===_}));return void 0!==e?e:null}Object(g.useEffect)((function(){Z().then(E).catch().finally()}),[]),Object(g.useEffect)((function(){_&&function(e){return q.apply(this,arguments)}(_).then(m).finally((function(){return j(!1)}))}),[_,h]);return Object(p.jsxs)("div",{children:[d&&Object(p.jsx)(oe,{}),!d&&Object(p.jsxs)("section",{className:"details",children:[Object(p.jsxs)("div",{className:"details__title--main",children:[Object(p.jsx)(y,{title:"Phones"}),Object(p.jsx)("img",{className:"details__arrow",src:C,alt:"homeIcon"}),Object(p.jsx)("span",{className:"details__subtitle",children:null===h||void 0===h?void 0:h.name})]}),Object(p.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"}),Object(p.jsx)("h1",{className:"details__title--name",children:null===h||void 0===h?void 0:h.name}),Object(p.jsxs)("div",{className:"details__container",children:[Object(p.jsxs)("div",{className:"photos",children:[Object(p.jsx)("div",{className:"photos__side",children:null===h||void 0===h?void 0:h.images.map((function(e,t){return Object(p.jsx)("button",{type:"button",className:"photos__buttons",onClick:function(){return f(t)},children:Object(p.jsx)("img",{src:"".concat(B).concat(e),alt:"side_photo",className:"photos__sidePhoto"})},e)}))}),Object(p.jsx)("div",{className:"photos__main",children:Object(p.jsx)("img",{className:"photos__main__img",src:"".concat(B).concat(null===h||void 0===h?void 0:h.images[v]),alt:"main_photo"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"params__color",children:[Object(p.jsx)("p",{className:"params__color--heading",children:"Available colors"}),Object(p.jsx)("div",{className:"colors__list",children:null===h||void 0===h?void 0:h.colorsAvailable.map((function(e){return Object(p.jsx)("div",{className:"colors__item",children:Object(p.jsx)("div",{className:k()("colors__border",{"colors__border--selected":e===h.color}),children:Object(p.jsx)(r.b,{to:"/phones/".concat(h.namespaceId,"-").concat(h.capacity.toLocaleLowerCase(),"-").concat(e),className:"colors__circle",style:{backgroundColor:"".concat(ue[e])}})})},e)}))})]}),Object(p.jsxs)("div",{className:"params__capacity",children:[Object(p.jsx)("p",{className:"params__capacity--heading",children:"Select capacity"}),Object(p.jsx)("div",{className:"capacities__list",children:null===h||void 0===h?void 0:h.capacityAvailable.map((function(e){return Object(p.jsx)(r.b,{to:"/phones/".concat(h.namespaceId,"-").concat(e.toLocaleLowerCase(),"-").concat(h.color),className:k()("capacities__link",{"capacities__link--selected":e===h.capacity}),children:e},e)}))})]}),Object(p.jsxs)("div",{className:"ProductCard__price",children:[Object(p.jsx)("div",{className:"ProductCard__price-normal",children:"$".concat(null===h||void 0===h?void 0:h.priceDiscount)}),(null===h||void 0===h?void 0:h.priceDiscount)&&Object(p.jsx)("div",{className:"ProductCard__price-discounted",children:"$".concat(h.priceRegular)})]}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__buttons",children:[Object(p.jsx)(S,{phone:I()}),Object(p.jsx)(R,{phone:I()})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.screen)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Resolution"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.resolution)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Processor"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.processor)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.ram)||"-"})]})]})]})]}),Object(p.jsxs)("div",{className:"details__container",children:[Object(p.jsxs)("div",{className:"details__about",children:[Object(p.jsx)("h2",{className:"details__about-title",children:"About"}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(e=h.description[0])||void 0===e?void 0:e.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(t=h.description[0])||void 0===t?void 0:t.text}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(c=h.description[1])||void 0===c?void 0:c.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(a=h.description[1])||void 0===a?void 0:a.text}),Object(p.jsx)("h3",{children:null===h||void 0===h||null===(s=h.description[2])||void 0===s?void 0:s.title}),Object(p.jsx)("span",{className:"details__description",children:null===h||void 0===h||null===(n=h.description[2])||void 0===n?void 0:n.text})]}),Object(p.jsxs)("div",{className:"details__tech",children:[Object(p.jsx)("h2",{className:"details__title",children:"Tech specs"}),Object(p.jsxs)("div",{className:"ProductCard__details",children:[Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Screen"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.screen)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Resolution"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.resolution)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Processor"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.processor)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"RAM"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.ram)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Built in memory"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.capacity)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Camera"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.camera)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Zoom"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.zoom)||"-"})]}),Object(p.jsxs)("div",{className:"ProductCard__details-item",children:[Object(p.jsx)("div",{className:"ProductCard__details-item__name",children:"Cell"}),Object(p.jsx)("div",{className:"ProductCard__details-item__value",children:(null===h||void 0===h?void 0:h.cell)||"-"})]})]})]})]}),Object(p.jsx)(je,{})]})]})},he=(c(79),function(){var e=Object(g.useState)([]),t=Object(N.a)(e,2),c=t[0],a=t[1],s=Object(g.useState)(!0),n=Object(N.a)(s,2),i=n[0],r=n[1],l=Object(g.useState)(!1),o=Object(N.a)(l,2),d=o[0],j=o[1];Object(g.useEffect)((function(){Z().then(a).catch((function(){return j(!0)})).finally((function(){return r(!1)}))}),[]);var u=Object(M.a)(c).filter((function(e){return"tablet"===e.name}));return Object(p.jsx)("main",{children:Object(p.jsxs)("section",{children:[i&&Object(p.jsx)(oe,{}),!i&&0===u.length&&Object(p.jsxs)("div",{className:"tablets__container",children:[Object(p.jsx)(y,{title:"Tablets"}),Object(p.jsx)("h2",{children:"Tablets"}),Object(p.jsx)("p",{children:"Tablets are not available yet "})]}),0!==u.length&&Object(p.jsx)("h2",{children:"Tablets"}),!i&&d&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})}),me=(c(80),function(){var e=function(e){var t=e.isActive;return k()("menu__link",{"menu__link-active":t})};return Object(p.jsx)("header",{className:"menu",children:Object(p.jsx)("nav",{className:"menu__nav",children:Object(p.jsxs)("div",{className:"menu__main",children:[Object(p.jsx)(r.c,{to:"/",className:e,children:"Home"}),Object(p.jsx)(r.c,{to:"/phones",className:e,children:"Phones"}),Object(p.jsx)(r.c,{to:"/tablets",className:e,children:"Tablets"}),Object(p.jsx)(r.c,{to:"/accessories",className:e,children:"Accessories"})]})})})}),_e=function(){var e=Object(g.useState)([]),t=Object(N.a)(e,2),c=t[0],a=t[1],s=Object(g.useState)(!0),n=Object(N.a)(s,2),i=n[0],r=n[1],l=Object(g.useState)(!1),o=Object(N.a)(l,2),d=o[0],j=o[1];Object(g.useEffect)((function(){Z().then(a).catch((function(){return j(!0)})).finally((function(){return r(!1)}))}),[]);var u=Object(M.a)(c).filter((function(e){return"accessories"===e.name}));return Object(p.jsx)("main",{children:Object(p.jsxs)("section",{children:[i&&Object(p.jsx)(oe,{}),!i&&0===u.length&&Object(p.jsxs)("div",{className:"tablets__container",children:[Object(p.jsx)(y,{title:"Accessories"}),Object(p.jsx)("h2",{children:"Accessories"}),Object(p.jsx)("p",{children:"Accessories are not available yet "})]}),0!==u.length&&Object(p.jsx)("h2",{children:"Tablets"}),!i&&d&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})},Oe=function(){return Object(p.jsx)(P,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(T,{}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/",element:Object(p.jsx)(se,{})}),Object(p.jsx)(l.b,{path:"/home",element:Object(p.jsx)(l.a,{to:"/",replace:!0})}),Object(p.jsx)(l.b,{path:"/menu",element:Object(p.jsx)(me,{})}),Object(p.jsxs)(l.b,{path:"/phones",children:[Object(p.jsx)(l.b,{index:!0,element:Object(p.jsx)(de,{})}),Object(p.jsx)(l.b,{path:":idPhone",element:Object(p.jsx)(be,{})})]}),Object(p.jsx)(l.b,{path:"/tablets",element:Object(p.jsx)(he,{})}),Object(p.jsx)(l.b,{path:"/accessories",element:Object(p.jsx)(_e,{})}),Object(p.jsx)(l.b,{path:"/favourites",element:Object(p.jsx)(J,{})}),Object(p.jsx)(l.b,{path:"/cart",element:Object(p.jsx)(f,{})}),Object(p.jsx)(l.b,{path:"*",element:Object(p.jsx)("h1",{className:"title",children:"Page not found"})})]}),Object(p.jsx)(V,{})]})})},xe=c(13),ve=c(18),pe=c(45),fe=c.n(pe),Ne=Object(xe.b)({favourites:U,card:v}),ge={key:"root",storage:fe.a},Ae=Object(ve.g)(ge,Ne),Pe=Object(u.a)({reducer:Ae,middleware:function(e){return e({serializableCheck:{ignoredActions:[ve.a,ve.f,ve.b,ve.c,ve.d,ve.e]}})}}),Ce=Object(ve.h)(Pe),ye=Pe;s.a.render(Object(p.jsx)(n.a,{loading:null,persistor:Ce,children:Object(p.jsx)(i.a,{store:ye,children:Object(p.jsx)(r.a,{children:Object(p.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c9f0091f.chunk.js.map