
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils/GameUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71950iPBwBP6oWGTxHySF/2', 'GameUtil');
// scripts/Utils/GameUtil.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GameUtil = cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    _isGameStart: false // 游戏开始标志

  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},

  /**
   * 设置游戏开始标志
   * @param {boolean} isStart 
   */
  setGameStart: function setGameStart(isStart) {
    this._isGameStart = isStart;
  },

  /**
   * 颜色转换成数字
   * @param {*} color 
   * @returns 
   */
  color2Num: function color2Num(color) {
    var that = color;
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    if (/^(rgb\(|RGB\()/.test(that)) {
      var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      var strHex = "0x";

      for (var i = 0; i < aColor.length; i++) {
        var hex = Number(aColor[i]).toString(16);

        if (hex === "0") {
          hex += hex;
        }

        strHex += hex;
      }

      if (strHex.length !== 7 + 1) {
        strHex = that;
      }

      return strHex;
    } else if (reg.test(that)) {
      var aNum = that.replace(/#/, "").split("");

      if (aNum.length === 6) {
        that = that.replace(/#/, "0x");
        return that;
      } else if (aNum.length === 3) {
        var numHex = "0x";

        for (var i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }

        return numHex;
      }
    } else if (/^(rgba\(|RGBA\()/.test(that)) {
      var aColor = that.replace(/(?:\(|\)|rgba|RGBA)*/g, "").split(",");
      var strHex = "0x";

      for (var i = 0; i < aColor.length - 1; i++) {
        var hex = Number(aColor[i]).toString(16);

        if (hex === "0") {
          hex += hex;
        }

        strHex += hex;
      }

      return strHex;
    } else {
      return that;
    }
  },

  /**
   * 颜色转换
   * @param {*} color 
   * @param {*} percent 
   * @returns 
   */
  color2Shade: function color2Shade(color, percent) {
    if (color.length > 7) return shadeRGBColor(color, percent);else return shadeColor2(color, percent);

    function shadeColor2(color, percent) {
      var f = parseInt(color.slice(1), 16),
          t = percent < 0 ? 0 : 255,
          p = percent < 0 ? percent * -1 : percent,
          R = f >> 16,
          G = f >> 8 & 0x00FF,
          B = f & 0x0000FF;
      return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    }

    function shadeRGBColor(color, percent) {
      var f = color.split(","),
          t = percent < 0 ? 0 : 255,
          p = percent < 0 ? percent * -1 : percent,
          R = parseInt(f[0].slice(4)),
          G = parseInt(f[1]),
          B = parseInt(f[2]);
      return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
    }
  }
});
console.log('开始挂载window.gameUtil');
window.gameUtil = new GameUtil();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHNcXEdhbWVVdGlsLmpzIl0sIm5hbWVzIjpbIkdhbWVVdGlsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfaXNHYW1lU3RhcnQiLCJzdGFydCIsInNldEdhbWVTdGFydCIsImlzU3RhcnQiLCJjb2xvcjJOdW0iLCJjb2xvciIsInRoYXQiLCJyZWciLCJ0ZXN0IiwiYUNvbG9yIiwicmVwbGFjZSIsInNwbGl0Iiwic3RySGV4IiwiaSIsImxlbmd0aCIsImhleCIsIk51bWJlciIsInRvU3RyaW5nIiwiYU51bSIsIm51bUhleCIsImNvbG9yMlNoYWRlIiwicGVyY2VudCIsInNoYWRlUkdCQ29sb3IiLCJzaGFkZUNvbG9yMiIsImYiLCJwYXJzZUludCIsInNsaWNlIiwidCIsInAiLCJSIiwiRyIsIkIiLCJNYXRoIiwicm91bmQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZ2FtZVV0aWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQixhQUFTRCxFQUFFLENBQUNFLFNBRFE7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsS0FoQk4sQ0FnQmdCOztBQWhCaEIsR0FIUTtBQXNCcEI7QUFFQTtBQUVBQyxFQUFBQSxLQTFCb0IsbUJBMEJYLENBRVIsQ0E1Qm1CO0FBOEJwQjs7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxZQXBDb0Isd0JBb0NQQyxPQXBDTyxFQW9DRTtBQUNsQixTQUFLSCxZQUFMLEdBQW9CRyxPQUFwQjtBQUNILEdBdENtQjs7QUF3Q3BCO0FBQ0o7QUFD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bi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgR2FtZVV0aWwgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBfaXNHYW1lU3RhcnQ6IGZhbHNlLCAgICAvLyDmuLjmiI/lvIDlp4vmoIflv5dcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7muLjmiI/lvIDlp4vmoIflv5dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3RhcnQgXG4gICAgICovXG4gICAgc2V0R2FtZVN0YXJ0KGlzU3RhcnQpIHtcbiAgICAgICAgdGhpcy5faXNHYW1lU3RhcnQgPSBpc1N0YXJ0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpopzoibLovazmjaLmiJDmlbDlrZdcbiAgICAgKiBAcGFyYW0geyp9IGNvbG9yIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGNvbG9yMk51bShjb2xvcikge1xuICAgICAgICB2YXIgdGhhdCA9IGNvbG9yO1xuXHRcdHZhciByZWcgPSAvXiMoWzAtOWEtZkEtZl17M318WzAtOWEtZkEtZl17Nn0pJC87XG5cblx0XHRpZiAoL14ocmdiXFwofFJHQlxcKCkvLnRlc3QodGhhdCkpIHtcblx0XHRcdHZhciBhQ29sb3IgPSB0aGF0LnJlcGxhY2UoLyg/OlxcKHxcXCl8cmdifFJHQikqL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcblx0XHRcdHZhciBzdHJIZXggPSBcIjB4XCI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFDb2xvci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaGV4ID0gTnVtYmVyKGFDb2xvcltpXSkudG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRpZiAoaGV4ID09PSBcIjBcIikge1xuXHRcdFx0XHRcdGhleCArPSBoZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RySGV4ICs9IGhleDtcblx0XHRcdH1cblx0XHRcdGlmIChzdHJIZXgubGVuZ3RoICE9PSA3ICsgMSkge1xuXHRcdFx0XHRzdHJIZXggPSB0aGF0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ckhleDtcblx0XHR9IGVsc2UgaWYgKHJlZy50ZXN0KHRoYXQpKSB7XG5cdFx0XHR2YXIgYU51bSA9IHRoYXQucmVwbGFjZSgvIy8sIFwiXCIpLnNwbGl0KFwiXCIpO1xuXHRcdFx0aWYgKGFOdW0ubGVuZ3RoID09PSA2KSB7XG5cdFx0XHRcdHRoYXQgPSB0aGF0LnJlcGxhY2UoLyMvLCBcIjB4XCIpO1xuXHRcdFx0XHRyZXR1cm4gdGhhdDtcblx0XHRcdH0gZWxzZSBpZiAoYU51bS5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0dmFyIG51bUhleCA9IFwiMHhcIjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhTnVtLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0bnVtSGV4ICs9IChhTnVtW2ldICsgYU51bVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bUhleDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKC9eKHJnYmFcXCh8UkdCQVxcKCkvLnRlc3QodGhhdCkpIHtcblx0XHRcdHZhciBhQ29sb3IgPSB0aGF0LnJlcGxhY2UoLyg/OlxcKHxcXCl8cmdiYXxSR0JBKSovZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuXHRcdFx0dmFyIHN0ckhleCA9IFwiMHhcIjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYUNvbG9yLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHR2YXIgaGV4ID0gTnVtYmVyKGFDb2xvcltpXSkudG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRpZiAoaGV4ID09PSBcIjBcIikge1xuXHRcdFx0XHRcdGhleCArPSBoZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RySGV4ICs9IGhleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHN0ckhleDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhhdDtcblx0XHR9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOminOiJsui9rOaNolxuICAgICAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gICAgICogQHBhcmFtIHsqfSBwZXJjZW50IFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuXHRjb2xvcjJTaGFkZShjb2xvciwgcGVyY2VudCkge1xuXHRcdGlmIChjb2xvci5sZW5ndGggPiA3KSByZXR1cm4gc2hhZGVSR0JDb2xvcihjb2xvciwgcGVyY2VudCk7XG5cdFx0ZWxzZSByZXR1cm4gc2hhZGVDb2xvcjIoY29sb3IsIHBlcmNlbnQpO1xuXG5cdFx0ZnVuY3Rpb24gc2hhZGVDb2xvcjIoY29sb3IsIHBlcmNlbnQpIHtcblx0XHRcdHZhciBmID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KSwgdCA9IHBlcmNlbnQgPCAwID8gMCA6IDI1NSwgcCA9IHBlcmNlbnQgPCAwID8gcGVyY2VudCAqIC0xIDogcGVyY2VudCwgUiA9IGYgPj4gMTYsIEcgPSBmID4+IDggJiAweDAwRkYsIEIgPSBmICYgMHgwMDAwRkY7XG5cdFx0XHRyZXR1cm4gXCIjXCIgKyAoMHgxMDAwMDAwICsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKiAweDEwMDAwICsgKE1hdGgucm91bmQoKHQgLSBHKSAqIHApICsgRykgKiAweDEwMCArIChNYXRoLnJvdW5kKCh0IC0gQikgKiBwKSArIEIpKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHNoYWRlUkdCQ29sb3IoY29sb3IsIHBlcmNlbnQpIHtcblx0XHRcdHZhciBmID0gY29sb3Iuc3BsaXQoXCIsXCIpLCB0ID0gcGVyY2VudCA8IDAgPyAwIDogMjU1LCBwID0gcGVyY2VudCA8IDAgPyBwZXJjZW50ICogLTEgOiBwZXJjZW50LCBSID0gcGFyc2VJbnQoZlswXS5zbGljZSg0KSksIEcgPSBwYXJzZUludChmWzFdKSwgQiA9IHBhcnNlSW50KGZbMl0pO1xuXHRcdFx0cmV0dXJuIFwicmdiKFwiICsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKyBcIixcIiArIChNYXRoLnJvdW5kKCh0IC0gRykgKiBwKSArIEcpICsgXCIsXCIgKyAoTWF0aC5yb3VuZCgodCAtIEIpICogcCkgKyBCKSArIFwiKVwiO1xuXHRcdH1cblx0fVxufSk7XG5cbmNvbnNvbGUubG9nKCflvIDlp4vmjILovb13aW5kb3cuZ2FtZVV0aWwnKTtcbndpbmRvdy5nYW1lVXRpbCA9IG5ldyBHYW1lVXRpbCgpO1xuIl19