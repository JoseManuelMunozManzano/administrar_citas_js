!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/js",n(n.s=0)}([function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var l,d=document.querySelector("#mascota"),f=document.querySelector("#propietario"),p=document.querySelector("#telefono"),m=document.querySelector("#fecha"),v=document.querySelector("#hora"),h=document.querySelector("#sintomas"),b=document.querySelector("#citas"),y=document.querySelector("#nueva-cita");y.addEventListener("submit",(function(e){e.preventDefault();var t=w.mascota,n=w.propietario,o=w.telefono,a=w.fecha,i=w.hora,c=w.sintomas;if(""===t||""===n||""===o||""===a||""===i||""===c)return void x.imprimirAlerta("Todos los mensajes son Obligatorios","error");if(C){L.editarCita(r({},w));var u=l.transaction("citas","readwrite");u.objectStore("citas").put(w),u.oncomplete=function(){x.imprimirAlerta("Guardado Correctamente"),y.querySelector('button[type="submit"]').textContent="Crear Cita",C=!1},u.onerror=function(){console.log("Hubo un error")}}else{w.id=Date.now(),L.agregarCita(r({},w));var s=l.transaction(["citas"],"readwrite");s.objectStore("citas").add(w),s.oncomplete=function(){console.log("Cita Agregada"),x.imprimirAlerta("Se agregó correctamente")}}x.imprimirCitas(),w.mascota="",w.propietario="",w.telefono="",w.fecha="",w.hora="",w.sintomas="",y.reset()}));var g=document.querySelector("#administra"),C=!1;window.onload=function(){d.addEventListener("change",j),f.addEventListener("change",j),p.addEventListener("change",j),m.addEventListener("change",j),v.addEventListener("change",j),h.addEventListener("change",j),function(){var e=window.indexedDB.open("citas",1);e.onerror=function(){console.log("Hubo un error")},e.onsuccess=function(){console.log("BD Creada"),l=e.result,x.imprimirCitas()},e.onupgradeneeded=function(e){var t=e.target.result.createObjectStore("citas",{keyPath:"id",autoIncrement:!0});t.createIndex("mascota","mascota",{unique:!1}),t.createIndex("propietario","propietario",{unique:!1}),t.createIndex("telefono","telefono",{unique:!1}),t.createIndex("fecha","fecha",{unique:!1}),t.createIndex("hora","hora",{unique:!1}),t.createIndex("sintomas","sintomas",{unique:!1}),t.createIndex("id","id",{unique:!0}),console.log("DB Creada y Lista")}}()};var w={mascota:"",propietario:"",telefono:"",fecha:"",hora:"",sintomas:""};function j(e){w[e.target.name]=e.target.value}var S=function(){function e(){c(this,e),this.citas=[]}return s(e,[{key:"agregarCita",value:function(e){this.citas=[].concat(a(this.citas),[e])}},{key:"editarCita",value:function(e){this.citas=this.citas.map((function(t){return t.id===e.id?e:t}))}},{key:"eliminarCita",value:function(e){this.citas=this.citas.filter((function(t){return t.id!==e}))}}]),e}(),O=function(){function e(t){var n=t.citas;c(this,e),this.textoHeading(n)}return s(e,[{key:"imprimirAlerta",value:function(e,t){var n=document.createElement("div");n.classList.add("text-center","alert","d-block","col-12"),"error"===t?n.classList.add("alert-danger"):n.classList.add("alert-success"),n.textContent=e,document.querySelector("#contenido").insertBefore(n,document.querySelector(".agregar-cita")),setTimeout((function(){n.remove()}),3e3)}},{key:"imprimirCitas",value:function(){var e=this;this.limpiarHTML(),this.textoHeading(citas);var t=l.transaction("citas").objectStore("citas"),n=t.count();n.onsuccess=function(){e.textoHeading(n.result)},t.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value,r=n.mascota,o=n.propietario,a=n.telefono,i=n.fecha,c=n.hora,u=n.sintomas,s=n.id,g=document.createElement("div");g.classList.add("cita","p-3"),g.dataset.id=s;var j=document.createElement("h2");j.classList.add("card-title","font-weight-bolder"),j.innerHTML="".concat(r);var S=document.createElement("p");S.innerHTML='<span class="font-weight-bolder">Propietario: </span> '.concat(o);var O=document.createElement("p");O.innerHTML='<span class="font-weight-bolder">Teléfono: </span> '.concat(a);var L=document.createElement("p");L.innerHTML='<span class="font-weight-bolder">Fecha: </span> '.concat(i);var E=document.createElement("p");E.innerHTML='<span class="font-weight-bolder">Hora: </span> '.concat(c);var k=document.createElement("p");k.innerHTML='<span class="font-weight-bolder">Síntomas: </span> '.concat(u);var q=document.createElement("button");q.onclick=function(){return function(e){var t=l.transaction("citas","readwrite");t.objectStore("citas").delete(e),t.oncomplete=function(){console.log("Cita ".concat(e," eliminada")),x.imprimirCitas()},t.onerror=function(){console.log("Hubo un error")}}(s)},q.classList.add("btn","btn-danger","mr-2"),q.innerHTML='Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';var H=document.createElement("button"),M=t.value;H.onclick=function(){return function(e){var t=e.mascota,n=e.propietario,r=e.telefono,o=e.fecha,a=e.hora,i=e.sintomas,c=e.id;w.mascota=t,w.propietario=n,w.telefono=r,w.fecha=o,w.hora=a,w.sintomas=i,w.id=c,d.value=t,f.value=n,p.value=r,m.value=o,v.value=a,h.value=i,y.querySelector('button[type="submit"]').textContent="Guardar Cambios",C=!0}(M)},H.classList.add("btn","btn-info"),H.innerHTML='Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>',g.appendChild(j),g.appendChild(S),g.appendChild(O),g.appendChild(L),g.appendChild(E),g.appendChild(k),g.appendChild(q),g.appendChild(H),b.appendChild(g),t.continue()}}}},{key:"textoHeading",value:function(e){g.textContent=e>0?"Administra tus Citas ":"No hay Citas, comienza creando una"}},{key:"limpiarHTML",value:function(){for(;b.firstChild;)b.removeChild(b.firstChild)}}]),e}(),L=new S,x=new O(L)}]);
//# sourceMappingURL=4424f584c2ae285427d8.js.map