!function e(n,t,o){function r(i,u){if(!t[i]){if(!n[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[i]={exports:{}};n[i][0].call(s.exports,(function(e){return r(n[i][1][e]||e)}),s,s.exports,e,n,t,o)}return t[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e("./Game")),i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"create",value:function(e){var n=document.createElement("div");return n.className="game-block",n.setAttribute("data-id",JSON.stringify(e.id)),n.setAttribute("data-name",e.icon),n.innerHTML='\n      <div class="game-block__front"></div>\n      <div class="game-block__back">\n        <img class="game-block__img" src="./assets/icons/'+e.icon+'.svg" alt="'+e.icon+'">\n      </div>\n    ',n}},{key:"flip",value:function(e,n){var t=e.classList.contains("flipped"),o=parseInt(e.dataset.id),r=e.dataset.name,i=a.default.prevBlock;if(!t&&!a.default.isGameBlocked){if(e.classList.add("flipped"),a.default.isGameBlocked=!0,!i)return a.default.prevBlock={id:o,icon:r},void(a.default.isGameBlocked=!1);r===i.icon?a.default.success(n):a.default.fail(n,e)}}}]),e}();t.default=i},{"./Game":2}],2:[function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e("./UI")),i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"init",value:function(){a.default.displayBlocks()}},{key:"fireSound",value:function(e){var n=new Audio("./assets/sounds/"+e+".mp3");n.volume=.6,n.play()}},{key:"fail",value:function(n,t){var o=document.querySelectorAll('[data-name="'+e.prevBlock.icon+'"]');e.prevBlock=null,n.updateRetries(),n.checkRetries()||setTimeout((function(){t.classList.remove("flipped"),o.forEach((function(e){return e.classList.remove("flipped")})),e.isGameBlocked=!1,e.fireSound("fail")}),800)}},{key:"success",value:function(n){e.fireSound("success"),e.prevBlock=null,e.isGameBlocked=!1,n.updateScore()}},{key:"over",value:function(){a.default.showModal("fail"),e.fireSound("over"),document.querySelector("body").scrollTo({top:0,behavior:"smooth"})}},{key:"won",value:function(){a.default.showModal("success"),e.fireSound("won"),document.querySelector("body").scrollTo({top:0,behavior:"smooth"})}},{key:"restart",value:function(n){e.prevBlock=null,e.isGameBlocked=!1,n.resetInfo(),a.default.resetBlocks(),a.default.hideModal(null)}}]),e}();t.default=i,i.isGameBlocked=!1,i.maxRetries=15},{"./UI":4}],3:[function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e("./Game")),i=document.querySelector("#playerName"),u=document.querySelector("#playerScore"),l=document.querySelector("#playerRetries"),c=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.tries=0,this.score=0}return o(e,[{key:"displayInfo",value:function(){i.textContent=this.name,u.innerHTML='\n      <span>Score: </span>\n      <span class="text-brand">'+this.score+"</span> /\n      <span>10</span>\n    ",l.innerHTML='\n      <span>Retries: </span>\n      <span class="text-brand">'+this.tries+"</span> /\n      <span>"+a.default.maxRetries+"</span>\n    "}},{key:"resetInfo",value:function(){this.tries=0,this.score=0,this.displayInfo()}},{key:"checkRetries",value:function(){var e=a.default.maxRetries===this.tries;return e&&a.default.over(),e}},{key:"updateRetries",value:function(){this.tries++,this.displayInfo()}},{key:"updateScore",value:function(){this.score<10&&(this.score++,this.displayInfo()),10===this.score&&a.default.won()}}]),e}();t.default=c},{"./Game":2}],4:[function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(e("../helpers/data")),i=r(e("./Block")),u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"getRandomIndex",value:function(e){return Math.floor(Math.random()*(e+1))}},{key:"orderDataRandomly",value:function(){for(var n=[],t=[],o=function(){var o=e.getRandomIndex(a.default.length);if(!t.includes(o)){var r=a.default.find((function(e){return e.id===o}));r&&(n.push(r),t.push(r.id))}};n.length<20;)o();return n}},{key:"displayBlocks",value:function(){e.orderDataRandomly().forEach((function(e){var n=i.default.create(e);document.querySelector("#blockContainer").appendChild(n)}))}},{key:"resetBlocks",value:function(){var e=Array.from(document.querySelectorAll(".game-block")),n=Array.from({length:20},(function(e,n){return n+1}));n=n.sort((function(e,n){return.5-Math.random()})),e.forEach((function(e,t){var o=e;o.classList.contains("flipped")&&o.classList.remove("flipped"),o.style.order=""+n[t]}))}},{key:"showModal",value:function(e){var n=document.querySelector("#"+e+"Modal");n&&(n.classList.remove("hidden"),document.querySelector("body").style.overflow="hidden")}},{key:"hideModal",value:function(e){if(e){var n=document.querySelector("#"+e+"Modal");if(!n)return;n.classList.add("hidden")}else document.querySelectorAll(".modal").forEach((function(e){e.classList.add("hidden")}));document.querySelector("body").style.overflow="auto"}}]),e}();t.default=u},{"../helpers/data":5,"./Block":1}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:1,icon:"youtube"},{id:2,icon:"youtube"},{id:3,icon:"wordpress"},{id:4,icon:"wordpress"},{id:5,icon:"windows"},{id:6,icon:"windows"},{id:7,icon:"wifi"},{id:8,icon:"wifi"},{id:9,icon:"whatsapp"},{id:10,icon:"whatsapp"},{id:11,icon:"webcam"},{id:12,icon:"webcam"},{id:13,icon:"wallet"},{id:14,icon:"wallet"},{id:15,icon:"vimeo"},{id:16,icon:"vimeo"},{id:17,icon:"usb"},{id:18,icon:"usb"},{id:19,icon:"twitter"},{id:20,icon:"twitter"}]},{}],6:[function(e,n,t){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(e("./classes/Game")),a=o(e("./classes/UI")),i=o(e("./classes/Player")),u=o(e("./classes/Block")),l=o(e("./classes/Game")),c=void 0;document.addEventListener("DOMContentLoaded",(function(){r.default.init(),document.querySelectorAll(".game-block").forEach((function(e){e.addEventListener("click",(function(){return u.default.flip(e,c)}))})),document.querySelector("#try-again").addEventListener("click",(function(){l.default.restart(c)})),document.querySelector("#play-again").addEventListener("click",(function(){l.default.restart(c)}))}));var s=document.querySelector("#formData");s.addEventListener("submit",(function(e){e.preventDefault();var n=s.getElementsByClassName("player-name")[0];n.value&&((c=new i.default(n.value)).displayInfo(),a.default.hideModal("welcome"))}))},{"./classes/Block":1,"./classes/Game":2,"./classes/Player":3,"./classes/UI":4}]},{},[6]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmJ1bmRsZS5qcyIsInNyYy9qcy9jbGFzc2VzL0Jsb2NrLnRzIiwic3JjL2pzL2NsYXNzZXMvR2FtZS50cyIsInNyYy9qcy9jbGFzc2VzL1BsYXllci50cyIsInNyYy9qcy9jbGFzc2VzL1VJLnRzIiwic3JjL2pzL2hlbHBlcnMvZGF0YS50cyIsInNyYy9qcy9tYWluLnRzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwibW9kdWxlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInZhbHVlIiwiR2FtZV8xIiwiQmxvY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJibG9ja0luZm8iLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJpY29uIiwiaW5uZXJIVE1MIiwiZWxlIiwicGxheWVyIiwiZmxpcHBlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwibmFtZSIsInByZXZCbG9jayIsImlzR2FtZUJsb2NrZWQiLCJhZGQiLCJzdWNjZXNzIiwiZmFpbCIsIlVJXzEiLCJHYW1lIiwiZGlzcGxheUJsb2NrcyIsInNvdW5kVHlwZSIsImF1ZGlvIiwiQXVkaW8iLCJ2b2x1bWUiLCJwbGF5IiwiZmxpcHBlZEJsb2NrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1cGRhdGVSZXRyaWVzIiwiY2hlY2tSZXRyaWVzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImZvckVhY2giLCJmaXJlU291bmQiLCJ1cGRhdGVTY29yZSIsInNob3dNb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicmVzZXRJbmZvIiwicmVzZXRCbG9ja3MiLCJoaWRlTW9kYWwiLCJtYXhSZXRyaWVzIiwibmFtZUNvbnRhaW5lciIsInNjb3JlQ29udGFpbmVyIiwicmV0cmllc0NvbnRhaW5lciIsIlBsYXllciIsInRyaWVzIiwic2NvcmUiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlJbmZvIiwiaXNPdmVyIiwib3ZlciIsIndvbiIsImRhdGFfMSIsIkJsb2NrXzEiLCJVSSIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9yZGVyZWREYXRhIiwiaW5jbHVkZWREYXRhIiwiX2xvb3AiLCJyYW5kb21JbmRleCIsImdldFJhbmRvbUluZGV4IiwiaW5jbHVkZXMiLCJibG9ja0RhdGEiLCJmaW5kIiwiYiIsInB1c2giLCJvcmRlckRhdGFSYW5kb21seSIsImJsb2NrIiwiYmxvY2tFbGUiLCJjcmVhdGUiLCJhcHBlbmRDaGlsZCIsImJsb2NrcyIsIkFycmF5IiwiZnJvbSIsIm9yZGVycyIsInYiLCJzb3J0IiwiaW5kZXgiLCJzdHlsZSIsIm9yZGVyIiwibW9kYWwiLCJvdmVyZmxvdyIsIlBsYXllcl8xIiwiR2FtZV8yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJmbGlwIiwicmVzdGFydCIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxT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LENBQUVFLFFBQVdGLEVBQ3RELEVBQ0FSLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFdUIsT0FBTyxJTTNZdEQsSUFBQUMsRUFBQUwsRUFBQXpCLEVBQUEsbUJBQ0E0RCxFQUFBbkMsRUFBQXpCLEVBQUEsaUJBQ0FrSSxFQUFBekcsRUFBQXpCLEVBQUEscUJBQ0FrRyxFQUFBekUsRUFBQXpCLEVBQUEsb0JBQ0FtSSxFQUFBMUcsRUFBQXpCLEVBQUEsbUJBRUlnRCxPQUFBLEVBR0pWLFNBQVM4RixpQkFBaUIsb0JBQW9CLFdBQzVDdEcsRUFBQUYsUUFBSXlHLE9BR0ovRixTQUFTK0IsaUJBQWlCLGVBQWVLLFNBQVEsU0FBQXlDLEdBQy9DQSxFQUFNaUIsaUJBQWlCLFNBQVMsV0FBQSxPQUFNbEMsRUFBQXRFLFFBQU0wRyxLQUFrQm5CLEVBQU9uRSxFQUFyQyxHQUNqQyxJQUdEVixTQUFTd0MsY0FBYyxjQUFjc0QsaUJBQWlCLFNBQVMsV0FDN0RELEVBQUF2RyxRQUFLMkcsUUFBUXZGLEVBQ2QsSUFHRFYsU0FBU3dDLGNBQWMsZUFBZXNELGlCQUFpQixTQUFTLFdBQzlERCxFQUFBdkcsUUFBSzJHLFFBQVF2RixFQUNkLEdBQ0YsSUFHRCxJQUFNd0YsRUFBeUJsRyxTQUFTd0MsY0FBYyxhQUN0RDBELEVBQUtKLGlCQUFpQixVQUFVLFNBQUMzSSxHQUMvQkEsRUFBRWdKLGlCQUVGLElBQU1DLEVBQTBCRixFQUFLRyx1QkFBdUIsZUFBZSxHQUV4RUQsRUFBTTdHLFNBQ1BtQixFQUFTLElBQUlrRixFQUFBdEcsUUFBTzhHLEVBQU03RyxRQUNuQmdFLGNBRVBqQyxFQUFBaEMsUUFBR3dELFVBQVUsV0FFaEIsR051WUQsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsS0FBSyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLG51bGwsImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayB7XHJcbiAgXHJcbiAgc3RhdGljIGNyZWF0ZSAoYmxvY2tJbmZvOiB7aWQ6IG51bWJlcjsgaWNvbjogc3RyaW5nfSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdnYW1lLWJsb2NrJztcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBKU09OLnN0cmluZ2lmeShibG9ja0luZm8uaWQpKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIGJsb2NrSW5mby5pY29uKTtcclxuXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ibG9ja19fZnJvbnRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYmxvY2tfX2JhY2tcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiZ2FtZS1ibG9ja19faW1nXCIgc3JjPVwiLi9hc3NldHMvaWNvbnMvJHtibG9ja0luZm8uaWNvbn0uc3ZnXCIgYWx0PVwiJHtibG9ja0luZm8uaWNvbn1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmxpcChlbGU6IEhUTUxFbGVtZW50LCBwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgXHJcbiAgICBsZXQgZmxpcHBlZCA9IGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaXBwZWQnKTtcclxuICAgIGxldCBpZCA9IHBhcnNlSW50KGVsZS5kYXRhc2V0LmlkKTtcclxuICAgIGxldCBuYW1lID0gZWxlLmRhdGFzZXQubmFtZTtcclxuICAgIGxldCBwcmV2QmxvY2sgPSBHYW1lLnByZXZCbG9jaztcclxuXHJcbiAgICBpZihmbGlwcGVkIHx8IEdhbWUuaXNHYW1lQmxvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKCdmbGlwcGVkJyk7XHJcbiAgICBHYW1lLmlzR2FtZUJsb2NrZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIGZpcnN0IGJsb2NrIGNoZWNrZWRcclxuICAgIGlmKCFwcmV2QmxvY2spIHtcclxuICAgICAgR2FtZS5wcmV2QmxvY2sgPSB7IGlkLCBpY29uOiBuYW1lIH07XHJcbiAgICAgIEdhbWUuaXNHYW1lQmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmxvY2tzIGNoZWNraW5nIGZhaWxkXHJcbiAgICBpZihuYW1lICE9PSBwcmV2QmxvY2suaWNvbikge1xyXG4gICAgICBHYW1lLmZhaWwocGxheWVyLCBlbGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmxvY2tzIGNoZWNraW5nIHN1Y2Nlc3NlZFxyXG4gICAgR2FtZS5zdWNjZXNzKHBsYXllcik7XHJcbiAgfVxyXG59OyIsImltcG9ydCB7IGJsb2NrVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvdHlwZXMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgc3RhdGljIHByZXZCbG9jazogYmxvY2tUeXBlIHwgbnVsbDtcclxuICBzdGF0aWMgaXNHYW1lQmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0YXRpYyBtYXhSZXRyaWVzOiBudW1iZXIgPSAxNTtcclxuXHJcblxyXG4gIHN0YXRpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgVUkuZGlzcGxheUJsb2NrcygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpcmVTb3VuZChzb3VuZFR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC4vYXNzZXRzL3NvdW5kcy8ke3NvdW5kVHlwZX0ubXAzYCk7XHJcbiAgICBhdWRpby52b2x1bWUgPSAwLjY7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmFpbChwbGF5ZXI6IFBsYXllciwgZWxlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZmxpcHBlZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW5hbWU9XCIke0dhbWUucHJldkJsb2NrLmljb259XCJdYCk7XHJcbiAgICAgICAgXHJcbiAgICBHYW1lLnByZXZCbG9jayA9IG51bGw7XHJcblxyXG4gICAgcGxheWVyLnVwZGF0ZVJldHJpZXMoKTtcclxuXHJcbiAgICBpZihwbGF5ZXIuY2hlY2tSZXRyaWVzKCkpIHJldHVybjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBwZWQnKTtcclxuICAgICAgZmxpcHBlZEJsb2Nrcy5mb3JFYWNoKGVsZSA9PiBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcHBlZCcpKTtcclxuICAgICAgR2FtZS5pc0dhbWVCbG9ja2VkID0gZmFsc2U7XHJcbiAgICAgIEdhbWUuZmlyZVNvdW5kKCdmYWlsJyk7XHJcbiAgICB9LCA4MDApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN1Y2Nlc3MocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgIEdhbWUuZmlyZVNvdW5kKCdzdWNjZXNzJyk7XHJcbiAgICBHYW1lLnByZXZCbG9jayA9IG51bGw7XHJcbiAgICBHYW1lLmlzR2FtZUJsb2NrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwbGF5ZXIudXBkYXRlU2NvcmUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvdmVyKCk6IHZvaWQge1xyXG4gICAgVUkuc2hvd01vZGFsKCdmYWlsJyk7XHJcbiAgICBHYW1lLmZpcmVTb3VuZCgnb3ZlcicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdvbigpOnZvaWQge1xyXG4gICAgVUkuc2hvd01vZGFsKCdzdWNjZXNzJyk7XHJcbiAgICBHYW1lLmZpcmVTb3VuZCgnd29uJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzdGFydChwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgR2FtZS5wcmV2QmxvY2sgPSBudWxsO1xyXG4gICAgR2FtZS5pc0dhbWVCbG9ja2VkID0gZmFsc2U7XHJcbiAgICBwbGF5ZXIucmVzZXRJbmZvKCk7XHJcbiAgICBVSS5yZXNldEJsb2NrcygpO1xyXG4gICAgVUkuaGlkZU1vZGFsKG51bGwpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IHBsYXllckludGVyZmFjZSB9IGZyb20gJy4vLi4vaGVscGVycy90eXBlcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuY29uc3QgbmFtZUNvbnRhaW5lciA9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck5hbWUnKTtcclxuY29uc3Qgc2NvcmVDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJTY29yZScpO1xyXG5jb25zdCByZXRyaWVzQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyUmV0cmllcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgcGxheWVySW50ZXJmYWNlIHtcclxuICBwcml2YXRlIHRyaWVzOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzY29yZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50cmllcyA9IDA7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlJbmZvKCk6IHZvaWQge1xyXG4gICAgbmFtZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcclxuICAgIHNjb3JlQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4+U2NvcmU6IDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJyYW5kXCI+JHt0aGlzLnNjb3JlfTwvc3Bhbj4gL1xyXG4gICAgICA8c3Bhbj4xMDwvc3Bhbj5cclxuICAgIGA7XHJcbiAgICByZXRyaWVzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4+UmV0cmllczogPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtYnJhbmRcIj4ke3RoaXMudHJpZXN9PC9zcGFuPiAvXHJcbiAgICAgIDxzcGFuPiR7R2FtZS5tYXhSZXRyaWVzfTwvc3Bhbj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICByZXNldEluZm8oKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWVzID0gMDtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheUluZm8oKTtcclxuICB9XHJcblxyXG4gIGNoZWNrUmV0cmllcygpOiBib29sZWFuIHtcclxuICAgIGxldCBpc092ZXIgPSBHYW1lLm1heFJldHJpZXMgPT09IHRoaXMudHJpZXM7XHJcblxyXG4gICAgaWYoaXNPdmVyKVxyXG4gICAgICBHYW1lLm92ZXIoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGlzT3ZlcjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJldHJpZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWVzKys7XHJcbiAgICB0aGlzLmRpc3BsYXlJbmZvKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuc2NvcmUgPCAxMCkge1xyXG4gICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgIHRoaXMuZGlzcGxheUluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnNjb3JlID09PSAxMClcclxuICAgICAgR2FtZS53b24oKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBibG9ja1R5cGUgfSBmcm9tICcuLy4uL2hlbHBlcnMvdHlwZXMnO1xyXG5pbXBvcnQgc3RvcmVkRGF0YSBmcm9tIFwiLi4vaGVscGVycy9kYXRhXCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRSYW5kb21JbmRleChtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG9yZGVyRGF0YVJhbmRvbWx5KCk6IGJsb2NrVHlwZVtdIHtcclxuICAgIGNvbnN0IG9yZGVyZWREYXRhOiBibG9ja1R5cGVbXSA9IFtdO1xyXG4gICAgY29uc3QgaW5jbHVkZWREYXRhOiBudW1iZXJbXSA9IFtdOyBcclxuICAgIFxyXG4gICAgd2hpbGUgKG9yZGVyZWREYXRhLmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgIGxldCByYW5kb21JbmRleCA9IFVJLmdldFJhbmRvbUluZGV4KHN0b3JlZERhdGEubGVuZ3RoKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghaW5jbHVkZWREYXRhLmluY2x1ZGVzKHJhbmRvbUluZGV4KSkge1xyXG4gICAgICAgIGxldCBibG9ja0RhdGEgPSBzdG9yZWREYXRhLmZpbmQoYiA9PiBiLmlkID09PSByYW5kb21JbmRleCk7XHJcblxyXG4gICAgICAgIGlmKGJsb2NrRGF0YSkge1xyXG4gICAgICAgICAgb3JkZXJlZERhdGEucHVzaChibG9ja0RhdGEpO1xyXG4gICAgICAgICAgaW5jbHVkZWREYXRhLnB1c2goYmxvY2tEYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JkZXJlZERhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzcGxheUJsb2NrcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJsb2Nrc0RhdGEgPSBVSS5vcmRlckRhdGFSYW5kb21seSgpO1xyXG4gICAgXHJcbiAgICBibG9ja3NEYXRhLmZvckVhY2goYmxvY2sgPT4ge1xyXG4gICAgICBsZXQgYmxvY2tFbGUgPSBCbG9jay5jcmVhdGUoYmxvY2spO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tDb250YWluZXInKS5hcHBlbmRDaGlsZChibG9ja0VsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNldEJsb2NrcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJsb2NrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtYmxvY2snKSk7XHJcbiAgICBsZXQgb3JkZXJzOiBudW1iZXJbXSA9IEFycmF5LmZyb20oe2xlbmd0aDogMjB9LCAodiwgaSkgPT4gaSArIDEpO1xyXG4gICAgb3JkZXJzID0gb3JkZXJzLnNvcnQoKGEsIGIpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgZWxlID0gPEhUTUxFbGVtZW50PmJsb2NrO1xyXG4gICAgICBpZihlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwcGVkJykpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJyk7XHJcblxyXG4gICAgICBlbGUuc3R5bGUub3JkZXIgPSBgJHtvcmRlcnNbaW5kZXhdfWA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93TW9kYWwoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kYWwgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9TW9kYWxgKTtcclxuICAgIGlmKCFtb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBoaWRlTW9kYWwoaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmKGlkKSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfU1vZGFsYCk7XHJcbiAgICAgIGlmKCFtb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBoaWRlIGFueSBhY3RpdmUgbW9kYWxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykuZm9yRWFjaChtb2RhbCA9PiB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaWNvbjogJ3lvdXR1YmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpY29uOiAneW91dHViZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaWNvbjogJ3dvcmRwcmVzcydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaWNvbjogJ3dvcmRwcmVzcydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaWNvbjogJ3dpbmRvd3MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGljb246ICd3aW5kb3dzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBpY29uOiAnd2lmaSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4LFxyXG4gICAgaWNvbjogJ3dpZmknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIGljb246ICd3aGF0c2FwcCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMCxcclxuICAgIGljb246ICd3aGF0c2FwcCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGljb246ICd3ZWJjYW0nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBpY29uOiAnd2ViY2FtJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgaWNvbjogJ3dhbGxldCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNCxcclxuICAgIGljb246ICd3YWxsZXQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBpY29uOiAndmltZW8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBpY29uOiAndmltZW8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBpY29uOiAndXNiJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgaWNvbjogJ3VzYidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOSxcclxuICAgIGljb246ICd0d2l0dGVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgaWNvbjogJ3R3aXR0ZXInXHJcbiAgfVxyXG5dIiwiaW1wb3J0IEFwcCBmcm9tICcuL2NsYXNzZXMvR2FtZSc7XG5pbXBvcnQgVUkgZnJvbSAnLi9jbGFzc2VzL1VJJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jbGFzc2VzL1BsYXllcic7XG5pbXBvcnQgQmxvY2sgZnJvbSAnLi9jbGFzc2VzL0Jsb2NrJztcbmltcG9ydCBHYW1lIGZyb20gJy4vY2xhc3Nlcy9HYW1lJztcblxubGV0IHBsYXllcjogUGxheWVyO1xuXG4vLyBpbml0IGFwcFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXBwLmluaXQoKTtcblxuICAvLyBjaGVjayBibG9ja3NcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtYmxvY2snKS5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEJsb2NrLmZsaXAoPEhUTUxFbGVtZW50PmJsb2NrLCBwbGF5ZXIpKTtcbiAgfSk7XG5cbiAgLy8gdHJ5IGFnYWluXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnktYWdhaW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBHYW1lLnJlc3RhcnQocGxheWVyKTtcbiAgfSk7XG5cbiAgLy8gcGxheSBhZ2FpblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIEdhbWUucmVzdGFydChwbGF5ZXIpO1xuICB9KTtcbn0pO1xuXG4vLyBpbml0IHBsYXllclxuY29uc3QgZm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtRGF0YScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5mb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXllci1uYW1lJylbMF07XG5cbiAgaWYoaW5wdXQudmFsdWUpIHtcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKGlucHV0LnZhbHVlKTtcbiAgICBwbGF5ZXIuZGlzcGxheUluZm8oKTtcblxuICAgIFVJLmhpZGVNb2RhbCgnd2VsY29tZScpO1xuICB9XG59KTtcblxuXG4iXX0=
