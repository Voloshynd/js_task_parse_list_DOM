function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t,e=function(t){if(Array.isArray(t))return r(t)}(t=document.querySelectorAll("li"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=document.querySelector("ul");!function(r){var t=r.sort(function(r,t){return e(t.dataset.salary)-e(r.dataset.salary)});function e(r){return+r.slice(1).replace(",","")}n.innerHTML="",t.forEach(function(r){var t=document.createElement("li");t.innerText=r.innerText.replace(/(\r\n|\n|\r)/g,""),n.append(t)})}(e),function(r){var t=[],e=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var l=o.value,u={name:l.innerText.replace(/(\r\n|\n|\r)/g,"").trim(),position:l.dataset.position,salary:l.dataset.salary,age:l.dataset.age};t.push(u)}}catch(r){n=!0,a=r}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}}(e);
//# sourceMappingURL=index.a7bf29ad.js.map
