!function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,(function(e){return o(t[i][1][e]||e)}),s,s.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(e("./Game")),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"create",value:function(e){var t=document.createElement("div");return t.className="game-block",t.setAttribute("data-id",JSON.stringify(e.id)),t.setAttribute("data-name",e.icon),t.innerHTML='\n      <div class="game-block__front"></div>\n      <div class="game-block__back">\n        <img class="game-block__img" src="./assets/icons/'+e.icon+'.svg" alt="'+e.icon+'">\n      </div>\n    ',t}},{key:"flip",value:function(e,t){var n=e.classList.contains("flipped"),r=parseInt(e.dataset.id),o=e.dataset.name,i=a.default.prevBlock;if(!n&&!a.default.isGameBlocked){if(e.classList.add("flipped"),a.default.isGameBlocked=!0,!i)return a.default.prevBlock={id:r,icon:o},void(a.default.isGameBlocked=!1);o===i.icon?a.default.success(t):a.default.fail(t,e)}}}]),e}();n.default=i},{"./Game":2}],2:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(e("./UI")),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"init",value:function(){a.default.displayBlocks()}},{key:"fireSound",value:function(e){var t=new Audio("./assets/sounds/"+e+".mp3");t.volume=.6,t.play()}},{key:"fail",value:function(t,n){var r=document.querySelectorAll('[data-name="'+e.prevBlock.icon+'"]');e.prevBlock=null,t.updateRetries(),t.checkRetries()||setTimeout((function(){n.classList.remove("flipped"),r.forEach((function(e){return e.classList.remove("flipped")})),e.isGameBlocked=!1,e.fireSound("fail")}),800)}},{key:"success",value:function(t){e.fireSound("success"),e.prevBlock=null,e.isGameBlocked=!1,t.updateScore()}},{key:"over",value:function(){a.default.showModal("fail"),e.fireSound("over"),document.querySelector("body").scrollTo({top:0,behavior:"smooth"})}},{key:"won",value:function(){a.default.showModal("success"),e.fireSound("won"),document.querySelector("body").scrollTo({top:0,behavior:"smooth"})}},{key:"restart",value:function(t){e.prevBlock=null,e.isGameBlocked=!1,t.resetInfo(),a.default.resetBlocks(),a.default.hideModal(null)}}]),e}();n.default=i,i.isGameBlocked=!1,i.maxRetries=15},{"./UI":4}],3:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(e("./Game")),i=o(e("./UI")),u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.tries=0,this.score=0}return r(e,[{key:"getInfo",value:function(){return{name:this.name,tries:this.tries,score:this.score}}},{key:"resetInfo",value:function(){this.tries=0,this.score=0,i.default.updatePlayerInfo(this.getInfo())}},{key:"checkRetries",value:function(){var e=a.default.maxRetries===this.tries;return e&&a.default.over(),e}},{key:"updateRetries",value:function(){this.tries++,i.default.updatePlayerInfo(this.getInfo())}},{key:"updateScore",value:function(){this.score<10&&(this.score++,i.default.updatePlayerInfo(this.getInfo())),10===this.score&&a.default.won()}}]),e}();n.default=u},{"./Game":2,"./UI":4}],4:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(e("../helpers/data")),i=o(e("./Block")),u=o(e("./Game")),l=document.querySelector("#playerName"),c=document.querySelector("#playerScore"),s=document.querySelector("#playerRetries"),d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"getRandomIndex",value:function(e){return Math.floor(Math.random()*(e+1))}},{key:"orderDataRandomly",value:function(){for(var t=[],n=[],r=function(){var r=e.getRandomIndex(a.default.length);if(!n.includes(r)){var o=a.default.find((function(e){return e.id===r}));o&&(t.push(o),n.push(o.id))}};t.length<20;)r();return t}},{key:"updatePlayerInfo",value:function(e){l.textContent=e.name,c.innerHTML='\n      <span>Score: </span>\n      <span class="text-brand">'+e.score+"</span> /\n      <span>10</span>\n    ",s.innerHTML='\n      <span>Retries: </span>\n      <span class="text-brand">'+e.tries+"</span> /\n      <span>"+u.default.maxRetries+"</span>\n    "}},{key:"displayBlocks",value:function(){e.orderDataRandomly().forEach((function(e){var t=i.default.create(e);document.querySelector("#blockContainer").appendChild(t)}))}},{key:"resetBlocks",value:function(){var e=Array.from(document.querySelectorAll(".game-block")),t=Array.from({length:20},(function(e,t){return t+1}));t=t.sort((function(e,t){return.5-Math.random()})),e.forEach((function(e,n){var r=e;r.classList.contains("flipped")&&r.classList.remove("flipped"),r.style.order=""+t[n]}))}},{key:"showModal",value:function(e){var t=document.querySelector("#"+e+"Modal");t&&(t.classList.remove("hidden"),document.querySelector("body").style.overflow="hidden")}},{key:"hideModal",value:function(e){if(e){var t=document.querySelector("#"+e+"Modal");if(!t)return;t.classList.add("hidden")}else document.querySelectorAll(".modal").forEach((function(e){e.classList.add("hidden")}));document.querySelector("body").style.overflow="auto"}}]),e}();n.default=d},{"../helpers/data":6,"./Block":1,"./Game":2}],5:[function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Block=n.Player=n.UI=n.Game=void 0;var o=r(e("./Game"));n.Game=o.default;var a=r(e("./UI"));n.UI=a.default;var i=r(e("./Player"));n.Player=i.default;var u=r(e("./Block"));n.Block=u.default},{"./Block":1,"./Game":2,"./Player":3,"./UI":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{id:1,icon:"youtube"},{id:2,icon:"youtube"},{id:3,icon:"wordpress"},{id:4,icon:"wordpress"},{id:5,icon:"windows"},{id:6,icon:"windows"},{id:7,icon:"wifi"},{id:8,icon:"wifi"},{id:9,icon:"whatsapp"},{id:10,icon:"whatsapp"},{id:11,icon:"webcam"},{id:12,icon:"webcam"},{id:13,icon:"wallet"},{id:14,icon:"wallet"},{id:15,icon:"vimeo"},{id:16,icon:"vimeo"},{id:17,icon:"usb"},{id:18,icon:"usb"},{id:19,icon:"twitter"},{id:20,icon:"twitter"}]},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./classes"),o=document.querySelector("#formData"),a=document.querySelector("#try-again"),i=document.querySelector("#play-again"),u=null;document.addEventListener("DOMContentLoaded",(function(){r.Game.init(),document.querySelectorAll(".game-block").forEach((function(e){e.addEventListener("click",(function(){return r.Block.flip(e,u)}))})),a.addEventListener("click",(function(){return r.Game.restart(u)})),i.addEventListener("click",(function(){return r.Game.restart(u)}))})),o.addEventListener("submit",(function(e){e.preventDefault();var t=o.getElementsByClassName("player-name")[0];t.value&&(u=new r.Player(t.value),r.UI.updatePlayerInfo(u.getInfo()),r.UI.hideModal("welcome"))}))},{"./classes":5}]},{},[7]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmJ1bmRsZS5qcyIsInNyYy9qcy9jbGFzc2VzL0Jsb2NrLnRzIiwic3JjL2pzL2NsYXNzZXMvR2FtZS50cyIsInNyYy9qcy9jbGFzc2VzL1BsYXllci50cyIsInNyYy9qcy9jbGFzc2VzL1VJLnRzIiwic3JjL2pzL2NsYXNzZXMvaW5kZXgudHMiLCJzcmMvanMvaGVscGVycy9kYXRhLnRzIiwic3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiciIsImUiLCJuIiwidCIsIm8iLCJpIiwiZiIsImMiLCJyZXF1aXJlIiwidSIsImEiLCJFcnJvciIsImNvZGUiLCJwIiwiZXhwb3J0cyIsImNhbGwiLCJsZW5ndGgiLCJtb2R1bGUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidmFsdWUiLCJHYW1lXzEiLCJCbG9jayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsImJsb2NrSW5mbyIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsImljb24iLCJpbm5lckhUTUwiLCJlbGUiLCJwbGF5ZXIiLCJmbGlwcGVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJzZUludCIsImRhdGFzZXQiLCJuYW1lIiwicHJldkJsb2NrIiwiaXNHYW1lQmxvY2tlZCIsImFkZCIsInN1Y2Nlc3MiLCJmYWlsIiwiVUlfMSIsIkdhbWUiLCJkaXNwbGF5QmxvY2tzIiwic291bmRUeXBlIiwiYXVkaW8iLCJBdWRpbyIsInZvbHVtZSIsInBsYXkiLCJmbGlwcGVkQmxvY2tzIiwicXVlcnlTZWxlY3RvckFsbCIsInVwZGF0ZVJldHJpZXMiLCJjaGVja1JldHJpZXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZm9yRWFjaCIsImZpcmVTb3VuZCIsInVwZGF0ZVNjb3JlIiwic2hvd01vZGFsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZXNldEluZm8iLCJyZXNldEJsb2NrcyIsImhpZGVNb2RhbCIsIm1heFJldHJpZXMiLCJQbGF5ZXIiLCJ0cmllcyIsInNjb3JlIiwidXBkYXRlUGxheWVySW5mbyIsImdldEluZm8iLCJpc092ZXIiLCJvdmVyIiwid29uIiwiZGF0YV8xIiwiQmxvY2tfMSIsIm5hbWVDb250YWluZXIiLCJzY29yZUNvbnRhaW5lciIsInJldHJpZXNDb250YWluZXIiLCJVSSIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9yZGVyZWREYXRhIiwiaW5jbHVkZWREYXRhIiwiX2xvb3AiLCJyYW5kb21JbmRleCIsImdldFJhbmRvbUluZGV4IiwiaW5jbHVkZXMiLCJibG9ja0RhdGEiLCJmaW5kIiwiYiIsInB1c2giLCJ1c2VyIiwidGV4dENvbnRlbnQiLCJvcmRlckRhdGFSYW5kb21seSIsImJsb2NrIiwiYmxvY2tFbGUiLCJjcmVhdGUiLCJhcHBlbmRDaGlsZCIsImJsb2NrcyIsIkFycmF5IiwiZnJvbSIsIm9yZGVycyIsInYiLCJzb3J0IiwiaW5kZXgiLCJzdHlsZSIsIm9yZGVyIiwibW9kYWwiLCJvdmVyZmxvdyIsIlBsYXllcl8xIiwiY2xhc3Nlc18xIiwiZm9ybSIsInRyeUJ1dHRvbiIsInBsYXlCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImZsaXAiLCJyZXN0YXJ0IiwicHJldmVudERlZmF1bHQiLCJwbGF5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RyxTQUFTd0MsY0FBYyxjQUNuQzBELEVBQWFsRyxTQUFTd0MsY0FBYyxlQUN0QzlCLEVBQWlCLEtBMEJyQlYsU0FBU21HLGlCQUFpQixvQkF4QjFCLFdBQ0VKLEVBQUF4RSxLQUFLNkUsT0FHTHBHLFNBQVMrQixpQkFBaUIsZUFBZUssU0FBUSxTQUFDMkMsR0FDaERBLEVBQU1vQixpQkFBaUIsU0FBUyxXQUFBLE9BQU1KLEVBQUF0RyxNQUFNNEcsS0FBS3RCLEVBQXNCckUsRUFBdkMsR0FDakMsSUFFRHVGLEVBQVVFLGlCQUFpQixTQUFTLFdBQUEsT0FBTUosRUFBQXhFLEtBQUsrRSxRQUFRNUYsRUFBbkIsSUFDcEN3RixFQUFXQyxpQkFBaUIsU0FBUyxXQUFBLE9BQU1KLEVBQUF4RSxLQUFLK0UsUUFBUTVGLEVBQW5CLEdBQ3RDLElBZURzRixFQUFLRyxpQkFBaUIsVUFidEIsU0FBb0JoSixHQUNsQkEsRUFBRW9KLGlCQUVGLElBQU1DLEVBQWtCUixFQUFLUyx1QkFBdUIsZUFBZSxHQUUvREQsRUFBZ0JqSCxRQUNsQm1CLEVBQVMsSUFBSXFGLEVBQUEvQyxPQUFPd0QsRUFBZ0JqSCxPQUNwQ3dHLEVBQUFsQyxHQUFHVixpQkFBaUJ6QyxFQUFPMEMsV0FDM0IyQyxFQUFBbEMsR0FBR2YsVUFBVSxXQUVoQixHUHlhRCxFQUFFLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsbnVsbCwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrIHtcclxuICBcclxuICBzdGF0aWMgY3JlYXRlIChibG9ja0luZm86IHtpZDogbnVtYmVyOyBpY29uOiBzdHJpbmd9KTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2dhbWUtYmxvY2snO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIEpTT04uc3RyaW5naWZ5KGJsb2NrSW5mby5pZCkpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgYmxvY2tJbmZvLmljb24pO1xyXG5cclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJsb2NrX19mcm9udFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ibG9ja19fYmFja1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJnYW1lLWJsb2NrX19pbWdcIiBzcmM9XCIuL2Fzc2V0cy9pY29ucy8ke2Jsb2NrSW5mby5pY29ufS5zdmdcIiBhbHQ9XCIke2Jsb2NrSW5mby5pY29ufVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmbGlwKGVsZTogSFRNTEVsZW1lbnQsIHBsYXllcjogUGxheWVyKTogdm9pZCB7XHJcbiAgICBcclxuICAgIGxldCBmbGlwcGVkID0gZWxlLmNsYXNzTGlzdC5jb250YWlucygnZmxpcHBlZCcpO1xyXG4gICAgbGV0IGlkID0gcGFyc2VJbnQoZWxlLmRhdGFzZXQuaWQpO1xyXG4gICAgbGV0IG5hbWUgPSBlbGUuZGF0YXNldC5uYW1lO1xyXG4gICAgbGV0IHByZXZCbG9jayA9IEdhbWUucHJldkJsb2NrO1xyXG5cclxuICAgIGlmKGZsaXBwZWQgfHwgR2FtZS5pc0dhbWVCbG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoJ2ZsaXBwZWQnKTtcclxuICAgIEdhbWUuaXNHYW1lQmxvY2tlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gZmlyc3QgYmxvY2sgY2hlY2tlZFxyXG4gICAgaWYoIXByZXZCbG9jaykge1xyXG4gICAgICBHYW1lLnByZXZCbG9jayA9IHsgaWQsIGljb246IG5hbWUgfTtcclxuICAgICAgR2FtZS5pc0dhbWVCbG9ja2VkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBibG9ja3MgY2hlY2tpbmcgZmFpbGRcclxuICAgIGlmKG5hbWUgIT09IHByZXZCbG9jay5pY29uKSB7XHJcbiAgICAgIEdhbWUuZmFpbChwbGF5ZXIsIGVsZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBibG9ja3MgY2hlY2tpbmcgc3VjY2Vzc2VkXHJcbiAgICBHYW1lLnN1Y2Nlc3MocGxheWVyKTtcclxuICB9XHJcbn07IiwiaW1wb3J0IHsgYmxvY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgc3RhdGljIHByZXZCbG9jazogYmxvY2tUeXBlIHwgbnVsbDtcclxuICBzdGF0aWMgaXNHYW1lQmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0YXRpYyBtYXhSZXRyaWVzOiBudW1iZXIgPSAxNTtcclxuXHJcblxyXG4gIHN0YXRpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgVUkuZGlzcGxheUJsb2NrcygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpcmVTb3VuZChzb3VuZFR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC4vYXNzZXRzL3NvdW5kcy8ke3NvdW5kVHlwZX0ubXAzYCk7XHJcbiAgICBhdWRpby52b2x1bWUgPSAwLjY7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmFpbChwbGF5ZXI6IFBsYXllciwgZWxlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZmxpcHBlZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW5hbWU9XCIke0dhbWUucHJldkJsb2NrLmljb259XCJdYCk7XHJcblxyXG4gICAgR2FtZS5wcmV2QmxvY2sgPSBudWxsO1xyXG5cclxuICAgIHBsYXllci51cGRhdGVSZXRyaWVzKCk7XHJcblxyXG4gICAgaWYgKHBsYXllci5jaGVja1JldHJpZXMoKSkgcmV0dXJuO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcHBlZCcpO1xyXG4gICAgICBmbGlwcGVkQmxvY2tzLmZvckVhY2goZWxlID0+IGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJykpO1xyXG4gICAgICBHYW1lLmlzR2FtZUJsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgR2FtZS5maXJlU291bmQoJ2ZhaWwnKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VjY2VzcyhwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgR2FtZS5maXJlU291bmQoJ3N1Y2Nlc3MnKTtcclxuICAgIEdhbWUucHJldkJsb2NrID0gbnVsbDtcclxuICAgIEdhbWUuaXNHYW1lQmxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIHBsYXllci51cGRhdGVTY29yZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG92ZXIoKTogdm9pZCB7XHJcbiAgICBVSS5zaG93TW9kYWwoJ2ZhaWwnKTtcclxuICAgIEdhbWUuZmlyZVNvdW5kKCdvdmVyJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd29uKCk6IHZvaWQge1xyXG4gICAgVUkuc2hvd01vZGFsKCdzdWNjZXNzJyk7XHJcbiAgICBHYW1lLmZpcmVTb3VuZCgnd29uJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzdGFydChwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgR2FtZS5wcmV2QmxvY2sgPSBudWxsO1xyXG4gICAgR2FtZS5pc0dhbWVCbG9ja2VkID0gZmFsc2U7XHJcbiAgICBwbGF5ZXIucmVzZXRJbmZvKCk7XHJcbiAgICBVSS5yZXNldEJsb2NrcygpO1xyXG4gICAgVUkuaGlkZU1vZGFsKG51bGwpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBsYXllciBhcyBQbGF5ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgcHJpdmF0ZSB0cmllczogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyaWVzID0gMDtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5mbygpOiBQbGF5ZXJUeXBlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdHJpZXM6IHRoaXMudHJpZXMsXHJcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0SW5mbygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZXMgPSAwO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgVUkudXBkYXRlUGxheWVySW5mbyh0aGlzLmdldEluZm8oKSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1JldHJpZXMoKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNPdmVyID0gR2FtZS5tYXhSZXRyaWVzID09PSB0aGlzLnRyaWVzO1xyXG5cclxuICAgIGlmIChpc092ZXIpXHJcbiAgICAgIEdhbWUub3ZlcigpO1xyXG5cclxuICAgIHJldHVybiBpc092ZXI7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXRyaWVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmllcysrO1xyXG4gICAgVUkudXBkYXRlUGxheWVySW5mbyh0aGlzLmdldEluZm8oKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNjb3JlIDwgMTApIHtcclxuICAgICAgdGhpcy5zY29yZSsrO1xyXG4gICAgICBVSS51cGRhdGVQbGF5ZXJJbmZvKHRoaXMuZ2V0SW5mbygpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zY29yZSA9PT0gMTApXHJcbiAgICAgIEdhbWUud29uKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgYmxvY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgc3RvcmVkRGF0YSBmcm9tIFwiLi4vaGVscGVycy9kYXRhXCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IG5hbWVDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck5hbWUnKTtcclxuY29uc3Qgc2NvcmVDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclNjb3JlJyk7XHJcbmNvbnN0IHJldHJpZXNDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclJldHJpZXMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmFuZG9tSW5kZXgobWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggKyAxKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBvcmRlckRhdGFSYW5kb21seSgpOiBibG9ja1R5cGVbXSB7XHJcbiAgICBjb25zdCBvcmRlcmVkRGF0YTogYmxvY2tUeXBlW10gPSBbXTtcclxuICAgIGNvbnN0IGluY2x1ZGVkRGF0YTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICB3aGlsZSAob3JkZXJlZERhdGEubGVuZ3RoIDwgMjApIHtcclxuICAgICAgbGV0IHJhbmRvbUluZGV4ID0gVUkuZ2V0UmFuZG9tSW5kZXgoc3RvcmVkRGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKCFpbmNsdWRlZERhdGEuaW5jbHVkZXMocmFuZG9tSW5kZXgpKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrRGF0YSA9IHN0b3JlZERhdGEuZmluZChiID0+IGIuaWQgPT09IHJhbmRvbUluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrRGF0YSkge1xyXG4gICAgICAgICAgb3JkZXJlZERhdGEucHVzaChibG9ja0RhdGEpO1xyXG4gICAgICAgICAgaW5jbHVkZWREYXRhLnB1c2goYmxvY2tEYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JkZXJlZERhdGE7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlUGxheWVySW5mbyh1c2VyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgIG5hbWVDb250YWluZXIudGV4dENvbnRlbnQgPSB1c2VyLm5hbWU7XHJcbiAgICBzY29yZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuPlNjb3JlOiA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1icmFuZFwiPiR7dXNlci5zY29yZX08L3NwYW4+IC9cclxuICAgICAgPHNwYW4+MTA8L3NwYW4+XHJcbiAgICBgO1xyXG4gICAgcmV0cmllc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuPlJldHJpZXM6IDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJyYW5kXCI+JHt1c2VyLnRyaWVzfTwvc3Bhbj4gL1xyXG4gICAgICA8c3Bhbj4ke0dhbWUubWF4UmV0cmllc308L3NwYW4+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BsYXlCbG9ja3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBibG9ja3NEYXRhID0gVUkub3JkZXJEYXRhUmFuZG9tbHkoKTtcclxuXHJcbiAgICBibG9ja3NEYXRhLmZvckVhY2goYmxvY2sgPT4ge1xyXG4gICAgICBsZXQgYmxvY2tFbGUgPSBCbG9jay5jcmVhdGUoYmxvY2spO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tDb250YWluZXInKS5hcHBlbmRDaGlsZChibG9ja0VsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNldEJsb2NrcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJsb2NrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtYmxvY2snKSk7XHJcbiAgICBsZXQgb3JkZXJzOiBudW1iZXJbXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIwIH0sICh2LCBpKSA9PiBpICsgMSk7XHJcbiAgICBvcmRlcnMgPSBvcmRlcnMuc29ydCgoYSwgYikgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGUgPSA8SFRNTEVsZW1lbnQ+YmxvY2s7XHJcbiAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwcGVkJykpXHJcbiAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBwZWQnKTtcclxuXHJcbiAgICAgIGVsZS5zdHlsZS5vcmRlciA9IGAke29yZGVyc1tpbmRleF19YDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNob3dNb2RhbChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1Nb2RhbGApO1xyXG4gICAgaWYgKCFtb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGlkZU1vZGFsKGlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgY29uc3QgbW9kYWwgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9TW9kYWxgKTtcclxuICAgICAgaWYgKCFtb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBoaWRlIGFueSBhY3RpdmUgbW9kYWxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykuZm9yRWFjaChtb2RhbCA9PiB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2snO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEdhbWUsXHJcbiAgICBVSSxcclxuICAgIFBsYXllcixcclxuICAgIEJsb2NrLFxyXG59OyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGljb246ICd5b3V0dWJlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaWNvbjogJ3lvdXR1YmUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGljb246ICd3b3JkcHJlc3MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGljb246ICd3b3JkcHJlc3MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGljb246ICd3aW5kb3dzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpY29uOiAnd2luZG93cydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA3LFxyXG4gICAgaWNvbjogJ3dpZmknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIGljb246ICd3aWZpJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBpY29uOiAnd2hhdHNhcHAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBpY29uOiAnd2hhdHNhcHAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBpY29uOiAnd2ViY2FtJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgaWNvbjogJ3dlYmNhbSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMyxcclxuICAgIGljb246ICd3YWxsZXQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBpY29uOiAnd2FsbGV0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE1LFxyXG4gICAgaWNvbjogJ3ZpbWVvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgaWNvbjogJ3ZpbWVvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgaWNvbjogJ3VzYidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOCxcclxuICAgIGljb246ICd1c2InXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTksXHJcbiAgICBpY29uOiAndHdpdHRlcidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMCxcclxuICAgIGljb246ICd0d2l0dGVyJ1xyXG4gIH1cclxuXSIsImltcG9ydCB7IEdhbWUsIFVJLCBQbGF5ZXIsIEJsb2NrIH0gZnJvbSAnLi9jbGFzc2VzJztcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtRGF0YScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuY29uc3QgdHJ5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyeS1hZ2FpbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxubGV0IHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgR2FtZS5pbml0KCk7XHJcblxyXG4gIC8vIGNoZWNrIGJsb2Nrc1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWJsb2NrJykuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQmxvY2suZmxpcChibG9jayBhcyBIVE1MRWxlbWVudCwgcGxheWVyKSk7XHJcbiAgfSk7XHJcblxyXG4gIHRyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEdhbWUucmVzdGFydChwbGF5ZXIpKTsgLy8gdHJ5IGFnYWluXHJcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEdhbWUucmVzdGFydChwbGF5ZXIpKTsgLy8gcGxheSBhZ2FpblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXROYW1lKGU6IEV2ZW50KSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJOYW1lSW5wdXQgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXllci1uYW1lJylbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgaWYgKHBsYXllck5hbWVJbnB1dC52YWx1ZSkge1xyXG4gICAgcGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lSW5wdXQudmFsdWUpO1xyXG4gICAgVUkudXBkYXRlUGxheWVySW5mbyhwbGF5ZXIuZ2V0SW5mbygpKTtcclxuICAgIFVJLmhpZGVNb2RhbCgnd2VsY29tZScpO1xyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpOyAvLyBJbml0IEdhbWVcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXROYW1lKTsgLy8gSW5pdCBQbGF5ZXJcclxuXHJcblxyXG4iXX0=