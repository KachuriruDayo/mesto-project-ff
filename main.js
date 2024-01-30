/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:q(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",_={};function b(){}function g(){}function w(){}var L={};f(L,u,(function(){return this}));var k=Object.getPrototypeOf,S=k&&k(k(T([])));S&&S!==o&&a.call(S,u)&&(L=S);var E=w.prototype=b.prototype=Object.create(L);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,i,c,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function q(t,e,n){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function C(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,_;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},x(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(p(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-5",headers:{authorization:"8d6d9f66-054b-4611-9c99-4a20074e4dd8","Content-Type":"application/json"}},a=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка вывода карточек: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка вывода данных о пользователе: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка получения данных о пользователе: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка получения данных о аватаре пользователе: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка получения данных о новой карточке: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:o.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка лайка карточки: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка отмены лайка карточки: ".concat(t.status))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=document.querySelector("#card-template").content,h=function(t,e,r,n,o){var a=d.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),c=a.querySelector(".card__title"),u=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),l=a.querySelector(".like__score");return e._id!==t.owner._id&&u.classList.add("card__delete-button-disabled"),t.likes.forEach((function(t){t._id===e._id&&s.classList.add("card__like-button_is-active")})),i.src=t.link,i.alt=t.name,c.textContent=t.name,l.textContent=Object.keys(t.likes).length,u.addEventListener("click",(function(){return r(a,t)})),s.addEventListener("click",(function(){return n(s,t,l)})),i.addEventListener("click",(function(){return o(t)})),a},v=function(t,e,r){t.classList.contains("card__like-button_is-active")?p(e._id).then((function(e){r.textContent=Object.keys(e.likes).length,t.classList.remove("card__like-button_is-active")})):f(e._id).then((function(e){r.textContent=Object.keys(e.likes).length,t.classList.add("card__like-button_is-active")}))};function y(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",_)}function m(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",_)}function _(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&m(e)}}function b(t){t.target.classList.contains("popup_is-opened")&&m(t.target)}function g(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?e.classList.remove(r.inactiveButtonClass):e.classList.add(r.inactiveButtonClass)}function w(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}function L(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){w(t,r,e)})),n.classList.add(e.inactiveButtonClass)}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E,x=document.querySelector(".places__list"),j={fieldsetSelector:".form__set",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},q=document.querySelector(".profile__edit-button"),C=document.querySelector(".popup_type_edit"),O=C.querySelector(".popup__close"),P=document.forms.edit_profile,A=P.elements.name,T=P.elements.description,N=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),G=document.querySelector(".profile__image"),I=document.querySelector(".popup_type_edit-avatar"),B=document.querySelector(".profile__avatar-button"),D=I.querySelector(".popup__close"),F=document.forms.new_avatar,M=F.elements.avatar_link,J=document.querySelector(".popup_type_delete-card"),H=J.querySelector(".popup__close"),V=document.forms.delete_card,Y=document.querySelector(".popup_type_new-card"),z=document.querySelector(".profile__add-button"),$=Y.querySelector(".popup__close"),K=document.forms.new_place,Q=K.elements.place_name,R=K.elements.link,W=document.querySelector(".popup_type_image"),X=W.querySelector(".popup__image"),Z=W.querySelector(".popup__caption"),tt=W.querySelector(".popup__close");Promise.all([a(),i()]).then((function(t){var e=k(t,2),r=e[0],n=e[1];console.log(r,n),r.forEach((function(t){return x.append(h(t,n,rt,v,et))})),N.textContent=n.name,U.textContent=n.about,G.style.backgroundImage="url(".concat(n.avatar,")")})),E=j,Array.from(document.querySelectorAll(E.formSelector)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),Array.from(t.querySelectorAll(E.fieldsetSelector)).forEach((function(t){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);g(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?w(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage,r)}(t,o,e),g(r,n,e)}))}))}(t,E)}))}));var et=function(t){X.src=t.link,X.alt=t.name,Z.textContent=t.name,y(W)},rt=function(t,e){y(J),V.addEventListener("submit",(function(){!function(t,e){l(e._id).then((function(e){e.ok?t.remove():console.log("Карточка не удалена! :".concat(e.status))}))}(t,e),m(J)}))};q.addEventListener("click",(function(){var t;L(C,j),t=C,A.value=N.textContent,T.value=U.textContent,y(t)})),P.addEventListener("submit",(function(t){t.preventDefault();var e=A.value,r=T.value;c(e,r).then((function(t){N.textContent=t.name,U.textContent=t.about})),P.reset(),m(C)})),O.addEventListener("click",(function(){return m(C)})),C.addEventListener("click",b),B.addEventListener("click",(function(){L(I,j),y(I)})),F.addEventListener("submit",(function(t){t.preventDefault();var e=M.value;u(e).then((function(t){G.style.backgroundImage="url(".concat(t.avatar,")")})),F.reset(),m(I)})),D.addEventListener("click",(function(){return m(I)})),I.addEventListener("click",b),z.addEventListener("click",(function(){var t;L(Y,j),t=Y,Q.value="",R.value="",y(t)})),K.addEventListener("submit",(function(t){t.preventDefault();var e=Q.value,r=R.value;Promise.all([s(e,r),i()]).then((function(t){var e=k(t,2),r=e[0],n=e[1];x.prepend(h(r,n,rt,v,et))})),K.reset(),m(Y)})),Y.addEventListener("click",b),$.addEventListener("click",(function(){return m(Y)})),W.addEventListener("click",b),tt.addEventListener("click",(function(){return m(W)})),J.addEventListener("click",b),H.addEventListener("click",(function(){return m(J)}))})();