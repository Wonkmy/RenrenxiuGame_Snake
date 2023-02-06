
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Food');
require('./assets/scripts/Main');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a8a0FAPtVLkaKkP6aohY7H', 'Main');
// scripts/Main.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = require("./Food");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bigfruit = null;
        _this.bigFruitOrgin_sprite = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent = this.node;
                newBlock.setPosition(j * newBlock.width, -i * newBlock.height);
                newBlock.getComponent(Food_1.default).init(this.bigFruitOrgin_sprite.getTexture(), new cc.Vec2(j, i));
            }
        }
    };
    __decorate([
        property({ type: cc.Prefab })
    ], Main.prototype, "bigfruit", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], Main.prototype, "bigFruitOrgin_sprite", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrQkM7UUFmRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLDBCQUFvQixHQUFtQixJQUFJLENBQUM7O0lBWWhELENBQUM7SUFWRyxxQkFBTSxHQUFOO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RjtTQUNKO0lBQ0wsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzswQ0FDQTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7c0RBQ1k7SUFOM0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtCeEI7SUFBRCxXQUFDO0NBbEJELEFBa0JDLENBbEJpQyxFQUFFLENBQUMsU0FBUyxHQWtCN0M7a0JBbEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4vRm9vZFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuUHJlZmFifSlcclxuICAgIGJpZ2ZydWl0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBiaWdGcnVpdE9yZ2luX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJpZ2ZydWl0KTtcclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnBhcmVudD10aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihqICogbmV3QmxvY2sud2lkdGgsLWkgKiBuZXdCbG9jay5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suZ2V0Q29tcG9uZW50KEZvb2QpLmluaXQodGhpcy5iaWdGcnVpdE9yZ2luX3Nwcml0ZS5nZXRUZXh0dXJlKCksbmV3IGNjLlZlYzIoaixpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc8a6Rw5qJOQYSnRZbtJFDE', 'Platform');
// scripts/Utils/Platform.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Cocos框架人人秀开放接口API
 * API文件是建立游戏引擎和人人秀平台游戏框架 打通数据交互提供的统一方法；
  - 分为3个部分：
  - 第一部分 游戏资源、环境接口
  - 第二部分 游戏开始、结束、提示接口
  - 第三部分 高级API接口
 */
var Platform = cc.Class({
  // 第一部分 游戏资源、环境接口
  // 属性值人人秀框架自动注入
  properties: {
    _engineVersion: 0,
    // 引擎版本
    _basePath: '',
    // 人人秀资源根目录
    _enviormentType: 1,
    // 默认环境类型
    enviormentType_cocos: 1,
    // cocos本地环境
    enviormentType_rrxiu: 2,
    // 在线人人秀环境
    _pluginGameHelper: null,
    // 人人秀游戏辅助对象
    // 游戏基本配色
    _gameColor: '',
    // 基本配色-相近浅色
    _gameThinColor: '',
    // 游戏皮肤资源
    _gameSkins: {
      "default": function _default() {
        return {
          images: {},
          audios: {},
          texts: {},
          jsons: {}
        };
      }
    },
    _gameMode: 1,
    // 关卡模式:1=无尽模式，2=关卡模式
    _gameLevel: 1,
    // 游戏关卡
    _gameLevelTotal: 12,
    // 游戏总关卡
    _cocosResourcePath: '',
    // cocos本地资源路径  assets/resources
    resourceVersion: null // 资源版本

  },

  /**
   * 构造函数
   */
  ctor: function ctor() {
    this._engineVersion = parseInt(cc.ENGINE_VERSION.split('.').join('')); // 引擎版本号(数字)

    console.log('当前引擎版本号数字: ' + this._engineVersion);
  },

  /** 是否是人人秀 */
  isRRX: function isRRX() {
    return this._enviormentType == this.enviormentType_rrxiu;
  },

  /** 是否允许人人秀事件 */
  canRRXEvent: function canRRXEvent() {
    if (this._isEdit) {
      return false;
    }

    return this.isRRX();
  },
  // 设置插件空间上下文
  setPluginContext: function setPluginContext(pluginContext, callback) {
    if (callback === void 0) {
      callback = null;
    }

    this.setContext(pluginContext, callback);
  },
  // 全局注入需要参数
  setContext: function setContext(options) {
    this._enviormentType = this.enviormentType_rrxiu;
    this._pluginContext = options;
    this._basePath = this._pluginContext._basePath;
    this._isEdit = this._pluginContext.isEdit;
    this._api = this._pluginContext.api;
    this._pluginGameHelper = this._pluginContext.pluginGameHelper;

    if (this._pluginGameHelper.gameMode) {
      this._gameMode = this._pluginGameHelper.gameMode; // 关卡模式

      console.log('注入当前游戏模式: ' + this._gameMode);
      console.log(typeof this._gameMode);
    }

    if (this._pluginGameHelper.gameLevel) {
      this._gameLevel = this._pluginGameHelper.gameLevel; // 当前关卡
    }

    if (this._pluginGameHelper.gameLevelTotal) {
      this._gameLevelTotal = this._pluginGameHelper.gameLevelTotal; // 总关卡
    }

    this.resourceVersion = this._pluginContext.resourceVersion ? this._pluginContext.resourceVersion : '';
  },
  getContext: function getContext() {
    return this._pluginContext;
  },

  /** 获取策略游戏数据支持 */
  getGameStrategyApi: function getGameStrategyApi() {
    return this._pluginGameHelper.strategyEvent;
  },

  /**
   * 获取游戏模式
   * @returns
   */
  getGameMode: function getGameMode() {
    console.log('获取当前游戏模式: ' + this._gameMode);
    console.log(typeof this._gameMode);
    return this._gameMode;
  },

  /**
   * 获取游戏关卡
   * @returns
   */
  getGameLevel: function getGameLevel() {
    return this._gameLevel;
  },

  /**
   * 获取游戏总关卡
   * @returns
   */
  getGameLevelTotal: function getGameLevelTotal() {
    return this._gameLevelTotal;
  },
  // 加载资源数据，统一管理
  initPluginResource: function initPluginResource(callback) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var that, isRRX;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (callback === void 0) {
                callback = null;
              }

              that = _this;
              isRRX = _this.isRRX();
              console.log('是否是RRX:' + isRRX);
              _context.next = 6;
              return that.cocosEnviormentLoad(isRRX);

            case 6:
              if (!isRRX) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return _this.rrxiuEnviormentLoad();

            case 9:
              callback && callback();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // 预加载cocos本地资源
  cocosEnviormentLoad: function cocosEnviormentLoad(isRRX) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('开始加载Cocos资源');

              try {} catch (e) {
                console.error(e);
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  // 人人秀环境加载资源
  rrxiuEnviormentLoad: function rrxiuEnviormentLoad() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var that;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              that = _this2;
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var sourceDict = that.getGameAPI().themeDict;

                if (sourceDict) {
                  that._gameSkins.texts = sourceDict.dict;
                  console.log(sourceDict.courseStyle);
                  that.getAllRemoteImageResource(sourceDict.courseStyle, function (reSource) {
                    that._gameSkins.images = reSource;
                    that.getAllRemoteAudioResource(sourceDict.audioStyle, function (reSource) {
                      that._gameSkins.audios = reSource;
                      that.loadGameResourceJson(function (reJsons) {
                        that._gameSkins.jsons = reJsons;
                        resolve(that._gameSkins);
                        console.info('游戏皮肤_gameSkins', that._gameSkins);
                        setTimeout(function () {
                          that.isLoadOver();
                        }, 500);
                      });
                    });
                  });
                } else {
                  reject('解析资源失败');
                }
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // 加载Loading结束消失
  isLoadOver: function isLoadOver() {
    if (!this.canRRXEvent()) {
      return true;
    }

    this.getGameStrategyApi().isLoadOver();
  },
  // 获取资源文件路径
  getPluginFiles: function getPluginFiles(fileName, path) {
    if (this.isRRX()) {
      return this.getContext().getFile(fileName, path);
    }

    return path + '/' + fileName;
  },

  /**
   * 获取所有远程图片资源
   * @param {*} resourceList 
   * @param {*} callback 
   * @returns 
   */
  getAllRemoteImageResource: function getAllRemoteImageResource(resourceList, callback) {
    var sourceDict = {};

    if (!resourceList || resourceList.length == 0) {
      if (callback) callback(sourceDict);
      return;
    }

    var that = this;
    var loadIndex = 0;

    function loadResource() {
      that.getRemoteImageResource(resourceList[loadIndex].value, function (data) {
        if (data) {
          sourceDict[resourceList[loadIndex].key] = data;
        }

        loadIndex++;

        if (loadIndex > resourceList.length - 1) {
          if (callback) callback(sourceDict);
        } else {
          loadResource();
        }
      });
    }

    loadResource();
  },

  /**
   * 获取远程图片资源
   * @param {*} imageUrl 
   * @param {*} callback 
   */
  getRemoteImageResource: function getRemoteImageResource(imageUrl, callback) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('加载远程图片地址:' + imageUrl);
              _context4.next = 3;
              return _this3.loadRemoteResource(imageUrl, 'image').then(function (texture) {
                if (callback) callback(texture);
              })["catch"](function (err) {
                if (callback) callback();
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },

  /**
   * 获取所有远程音频资源
   * @param {*} resourceList 
   * @param {*} callback 
   * @returns 
   */
  getAllRemoteAudioResource: function getAllRemoteAudioResource(resourceList, callback) {
    var sourceDict = {};

    if (!resourceList || resourceList.length == 0) {
      if (callback) callback(sourceDict);
      return;
    }

    var that = this;
    var loadIndex = 0;

    function loadResource() {
      that.getRemoteAudioResource(resourceList[loadIndex].value, function (data) {
        sourceDict[resourceList[loadIndex].key] = data;
        loadIndex++;

        if (loadIndex > resourceList.length - 1) {
          if (callback) callback(sourceDict);
        } else {
          loadResource();
        }
      });
    }

    loadResource();
  },

  /**
   * 获取远程音频资源
   * @param {*} audioUrl 
   * @param {*} callback 
   */
  getRemoteAudioResource: function getRemoteAudioResource(audioUrl, callback) {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log('加载远程音频地址:' + audioUrl);
              _context5.next = 3;
              return _this4.loadRemoteResource(audioUrl, 'audio').then(function (res) {
                if (callback) callback(res);
              })["catch"](function (err) {
                if (callback) callback();
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  // 加载序列帧文件，部分游戏需要加载
  loadGameResourceJson: function loadGameResourceJson(callback) {
    var loadJons = [// { id: 'b_balloonSkinRun_json', src: "b_balloonSkinRun.json" },

      /*  { id: 'NewProject_tex_json', src: "NewProject_tex.json" }*/
    ];
    var jonsDict = {};

    if (!loadJons || loadJons.length == 0) {
      if (callback) {
        callback(jonsDict);
      }

      return;
    }

    var that = this;
    var loadIndex = 0;

    function loadResource() {
      var loadUrl = that.getPluginFiles(loadJons[loadIndex].src, 'resource/assets') + '?v=' + location.host;
      console.log(loadUrl);
      that.getResourceJson(loadUrl, function (data) {
        jonsDict[loadJons[loadIndex].id] = data;
        loadIndex++;

        if (loadIndex > loadJons.length - 1) {
          if (callback) {
            callback(jonsDict);
          }
        } else {
          loadResource();
        }
      });
    }

    loadResource();
  },

  /**
   * 获取资源
   * @param {*} sourceName        资源名称
   * @param {*} type              资源类型
   * @param {*} path              本地资源相对路径，path为空时默认查找路径,图片是images，音频是audios
   * @returns                     Cocos资源对象
   */
  getRes: function getRes(sourceName, type, path) {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var self;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (type === void 0) {
                type = 'image';
              }

              if (path === void 0) {
                path = '';
              }

              self = _this5;
              return _context6.abrupt("return", new Promise(function (resolve, reject) {
                if (self.isRRX()) {
                  resolve(self.getGameSkins(sourceName, type));
                } else {
                  switch (type) {
                    case 'image':
                      if (path == '') path = 'images';
                      break;

                    case 'audio':
                      if (path == '') path = 'audios';
                      break;
                  }

                  self.loadLocalResource(path + '/' + sourceName, type).then(function (res) {
                    resolve(res);
                  })["catch"](function (err) {
                    reject(err);
                  });
                }
              }));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },

  /**
   * 加载远程资源
   */
  loadRemoteResource: function loadRemoteResource(resourceUrl, resourceType) {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var self, suffix;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (resourceType === void 0) {
                resourceType = 'image';
              }

              self = _this6;
              suffix = self.resourceVersion ? '?v=' + self.resourceVersion : '';
              console.log('加载远程资源：' + resourceUrl + suffix);
              return _context7.abrupt("return", new Promise(function (resolve, reject) {
                // 处理不同引擎版本加载资源
                if (self._engineVersion >= 300) {
                  assetManager.loadRemote(resourceUrl + suffix, function (err, res) {
                    if (!err) {
                      console.log(res, '加载远程资源成功');
                      resolve(res);
                    } else {
                      console.log(err, '加载远程资源失败');
                      reject(err);
                    }
                  });
                } else if (self._engineVersion >= 240) {
                  var extObj = {};

                  if (resourceType == 'image') {
                    extObj = {
                      ext: '.png'
                    };
                    cc.assetManager.loadRemote(resourceUrl + suffix, extObj, function (err, res) {
                      if (!err) {
                        console.log(res, '加载远程资源成功');
                        resolve(res);
                      } else {
                        console.log(err, '加载远程资源失败');
                        reject(err);
                      }
                    });
                  } else {
                    cc.assetManager.loadRemote(resourceUrl + suffix, function (err, res) {
                      if (!err) {
                        console.log(res, '加载远程资源成功');
                        resolve(res);
                      } else {
                        console.log(err, '加载远程资源失败');
                        reject(err);
                      }
                    });
                  }
                } else if (self._engineVersion >= 200) {
                  var resourceObj = resourceUrl;

                  if (resourceType == 'image') {
                    resourceObj = {
                      url: resourceUrl + suffix,
                      type: 'png'
                    };
                  }

                  cc.loader.load(resourceObj, function (err, res) {
                    if (!err) {
                      console.log(res, '加载远程资源成功');
                      resolve(res);
                    } else {
                      console.log(err, '加载远程资源失败');
                      reject(err);
                    }
                  });
                }
              }));

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },

  /**
   * 加载本地资源
   */
  loadLocalResource: function loadLocalResource(resourcePath) {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var self;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              self = _this7;
              console.log('加载本地资源路径: ' + resourcePath);
              return _context8.abrupt("return", new Promise(function (resolve, reject) {
                // 处理不同引擎版本加载资源
                if (self._engineVersion >= 300) {
                  resources.load(resourcePath, function (err, res) {
                    if (!err) {
                      console.log(res, '加载本地资源成功');
                      resolve(res);
                    } else {
                      console.log(err, '加载本地资源失败');
                      reject(err);
                    }
                  });
                } else if (self._engineVersion >= 240) {
                  cc.resources.load(resourcePath, function (err, res) {
                    if (!err) {
                      console.log(res, '加载本地资源成功');
                      resolve(res);
                    } else {
                      console.log(err, '加载本地资源失败');
                      reject(err);
                    }
                  });
                } else if (self._engineVersion >= 200) {
                  cc.loader.loadRes(resourcePath, function (err, res) {
                    if (!err) {
                      console.log(res, '加载本地资源成功');
                      resolve(res);
                    } else {
                      console.log(err, '加载本地资源失败');
                      reject(err);
                    }
                  });
                }
              }));

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  // 获取游戏资源配置 key:,type: ‘image/audio/text’
  getGameSkins: function getGameSkins(name, type) {
    if (type === void 0) {
      type = 'image';
    }

    if (this._gameSkins) {
      switch (type) {
        case 'image':
          {
            if (this._gameSkins.images && this._gameSkins.images[name]) {
              return this._gameSkins.images[name];
            }

            break;
          }

        case 'audio':
          {
            if (this._gameSkins.audios && this._gameSkins.audios[name]) {
              return this._gameSkins.audios[name];
            }

            break;
          }

        case 'text':
          {
            var themeName = 'skinPage';

            if (this._gameSkins.texts) {
              if (name) {
                return this._gameSkins.texts[name];
              }
            }

            break;
          }

        case 'json':
          {
            if (this._gameSkins.jsons && this._gameSkins.jsons[name]) {
              return this._gameSkins.jsons[name];
            }

            break;
          }
      }
    }

    console.error('获取游戏资源错误：' + name + ', 类型：'.type);
    return null;
  },

  /**
   * 获取游戏基本配色
   */
  getColor: function getColor() {
    if (!this._gameColor) {
      if (this.isRRX()) {
        this._gameColor = this.getGamePageApi().getBasicColor();
        this._gameColor = GameUtils.color2Num(this._gameColor);
      } else {
        this._gameColor = '#d16b1e';
        this._gameColor = GameUtils.color2Num(this._gameColor);
      }
    }

    return this._gameColor;
  },

  /**
   * 获取默认游戏配色
   */
  getThinColor: function getThinColor() {
    if (!this._gameThinColor) {
      this._gameThinColor = GameUtils.color2Shade(this.getColor(), 0.4);
    }

    return this._gameThinColor;
  },

  /*
  * 获得线的颜色
  */
  getWireColor: function getWireColor() {
    var wireColor = "#8fd6ff";

    if (this.isRRX()) {
      var textKey = "tx_wire";
      var textData = this.getGameSkins(textKey, 'text'); // console.log(textData);

      wireColor = textData.color;
    }

    wireColor = GameUtils.color2Num(wireColor);
    return wireColor;
  },
  // 第二部分 游戏开始、结束、提示接口
  startGame: function startGame() {
    window.gameUtil.setGameStart(true);
  },

  /**
   * 提交游戏分数
   * @param {*} gameScore 游戏分数
   * @param {*} gameWin   游戏过关 1：过关，0：未过关
   * @param {*} gameGrade 游戏评星 0~3：数字标识星级
   * @param {*} memo      游戏备注 比如 步数：10
   * @returns             cocos环境返回Ture，需完善自有逻辑；人人秀环境无需处理
   */
  submitGameScore: function submitGameScore(gameScore, gameWin, gameGrade, memo) {
    if (gameWin === void 0) {
      gameWin = 1;
    }

    if (gameGrade === void 0) {
      gameGrade = 0;
    }

    if (memo === void 0) {
      memo = '';
    }

    console.log('提交分数:' + gameScore + '，是否过关：' + gameWin + ', 游戏评星:' + gameGrade + ', 备注：' + memo);

    if (!this.isRRX()) {
      console.log('这是Cocos本地环境，请自行随便处理提交分数逻辑');

      if (this._gameMode == 2) {
        this._gameLevel++;
        console.log('这是闯关模式，提交分数后进入下一关' + this._gameLevel);
      }

      return true;
    }

    this.getGameStrategyApi().addScore(gameScore, {
      gameWin: gameWin,
      gameGrade: gameGrade,
      memo: memo
    });
  },
  showMsg: function showMsg(msg) {
    if (this.canMiniEvent()) {
      this.getGamePageApi().infoMsg(msg);
    } else {
      alert(msg);
    }
  },
  // 第三部分 高级API接口
  // 获取插件游戏API辅助接口
  getGameAPI: function getGameAPI() {
    return this._pluginGameHelper;
  }
});
console.log('开始挂载window.Platform');
window.platform = new Platform();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHNcXFBsYXRmb3JtLmpzIl0sIm5hbWVzIjpbIlBsYXRmb3JtIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfZW5naW5lVmVyc2lvbiIsIl9iYXNlUGF0aCIsIl9lbnZpb3JtZW50VHlwZSIsImVudmlvcm1lbnRUeXBlX2NvY29zIiwiZW52aW9ybWVudFR5cGVfcnJ4aXUiLCJfcGx1Z2luR2FtZUhlbHBlciIsIl9nYW1lQ29sb3IiLCJfZ2FtZVRoaW5Db2xvciIsIl9nYW1lU2tpbnMiLCJpbWFnZXMiLCJhdWRpb3MiLCJ0ZXh0cyIsImpzb25zIiwiX2dhbWVNb2RlIiwiX2dhbWVMZXZlbCIsIl9nYW1lTGV2ZWxUb3RhbCIsIl9jb2Nvc1Jlc291cmNlUGF0aCIsInJlc291cmNlVmVyc2lvbiIsImN0b3IiLCJwYXJzZUludCIsIkVOR0lORV9WRVJTSU9OIiwic3BsaXQiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImlzUlJYIiwiY2FuUlJYRXZlbnQiLCJfaXNFZGl0Iiwic2V0UGx1Z2luQ29udGV4dCIsInBsdWdpbkNvbnRleHQiLCJjYWxsYmFjayIsInNldENvbnRleHQiLCJvcHRpb25zIiwiX3BsdWdpbkNvbnRleHQiLCJpc0VkaXQiLCJfYXBpIiwiYXBpIiwicGx1Z2luR2FtZUhlbHBlciIsImdhbWVNb2RlIiwiZ2FtZUxldmVsIiwiZ2FtZUxldmVsVG90YWwiLCJnZXRDb250ZXh0IiwiZ2V0R2FtZVN0cmF0ZWd5QXBpIiwic3RyYXRlZ3lFdmVudCIsImdldEdhbWVNb2RlIiwiZ2V0R2FtZUxldmVsIiwiZ2V0R2FtZUxldmVsVG90YWwiLCJpbml0UGx1Z2luUmVzb3VyY2UiLCJ0aGF0IiwiY29jb3NFbnZpb3JtZW50TG9hZCIsInJyeGl1RW52aW9ybWVudExvYWQiLCJlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNvdXJjZURpY3QiLCJnZXRHYW1lQVBJIiwidGhlbWVEaWN0IiwiZGljdCIsImNvdXJzZVN0eWxlIiwiZ2V0QWxsUmVtb3RlSW1hZ2VSZXNvdXJjZSIsInJlU291cmNlIiwiZ2V0QWxsUmVtb3RlQXVkaW9SZXNvdXJjZSIsImF1ZGlvU3R5bGUiLCJsb2FkR2FtZVJlc291cmNlSnNvbiIsInJlSnNvbnMiLCJpbmZvIiwic2V0VGltZW91dCIsImlzTG9hZE92ZXIiLCJnZXRQbHVnaW5GaWxlcyIsImZpbGVOYW1lIiwicGF0aCIsImdldEZpbGUiLCJyZXNvdXJjZUxpc3QiLCJsZW5ndGgiLCJsb2FkSW5kZXgiLCJsb2FkUmVzb3VyY2UiLCJnZXRSZW1vdGVJbWFnZVJlc291cmNlIiwidmFsdWUiLCJkYXRhIiwia2V5IiwiaW1hZ2VVcmwiLCJsb2FkUmVtb3RlUmVzb3VyY2UiLCJ0aGVuIiwidGV4dHVyZSIsImVyciIsImdldFJlbW90ZUF1ZGlvUmVzb3VyY2UiLCJhdWRpb1VybCIsInJlcyIsImxvYWRKb25zIiwiam9uc0RpY3QiLCJsb2FkVXJsIiwic3JjIiwibG9jYXRpb24iLCJob3N0IiwiZ2V0UmVzb3VyY2VKc29uIiwiaWQiLCJnZXRSZXMiLCJzb3VyY2VOYW1lIiwidHlwZSIsInNlbGYiLCJnZXRHYW1lU2tpbnMiLCJsb2FkTG9jYWxSZXNvdXJjZSIsInJlc291cmNlVXJsIiwicmVzb3VyY2VUeXBlIiwic3VmZml4IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImV4dE9iaiIsImV4dCIsInJlc291cmNlT2JqIiwidXJsIiwibG9hZGVyIiwibG9hZCIsInJlc291cmNlUGF0aCIsInJlc291cmNlcyIsImxvYWRSZXMiLCJuYW1lIiwidGhlbWVOYW1lIiwiZ2V0Q29sb3IiLCJnZXRHYW1lUGFnZUFwaSIsImdldEJhc2ljQ29sb3IiLCJHYW1lVXRpbHMiLCJjb2xvcjJOdW0iLCJnZXRUaGluQ29sb3IiLCJjb2xvcjJTaGFkZSIsImdldFdpcmVDb2xvciIsIndpcmVDb2xvciIsInRleHRLZXkiLCJ0ZXh0RGF0YSIsImNvbG9yIiwic3RhcnRHYW1lIiwid2luZG93IiwiZ2FtZVV0aWwiLCJzZXRHYW1lU3RhcnQiLCJzdWJtaXRHYW1lU2NvcmUiLCJnYW1lU2NvcmUiLCJnYW1lV2luIiwiZ2FtZUdyYWRlIiwibWVtbyIsImFkZFNjb3JlIiwic2hvd01zZyIsIm1zZyIsImNhbk1pbmlFdmVudCIsImluZm9Nc2ciLCJhbGVydCIsInBsYXRmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUV0QjtBQUdBO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxjQUFjLEVBQUUsQ0FGUjtBQUVZO0FBRXBCQyxJQUFBQSxTQUFTLEVBQUUsRUFKSDtBQUlRO0FBQ2hCQyxJQUFBQSxlQUFlLEVBQUUsQ0FMVDtBQUtnQjtBQUN4QkMsSUFBQUEsb0JBQW9CLEVBQUUsQ0FOZDtBQU1vQjtBQUM1QkMsSUFBQUEsb0JBQW9CLEVBQUUsQ0FQZDtBQU9vQjtBQUM1QkMsSUFBQUEsaUJBQWlCLEVBQUUsSUFSWDtBQVFvQjtBQUU1QjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsRUFYSjtBQVlSO0FBQ0FDLElBQUFBLGNBQWMsRUFBRSxFQWJSO0FBZVI7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsb0JBQVk7QUFDakIsZUFBTztBQUNIQyxVQUFBQSxNQUFNLEVBQUUsRUFETDtBQUVIQyxVQUFBQSxNQUFNLEVBQUUsRUFGTDtBQUdIQyxVQUFBQSxLQUFLLEVBQUUsRUFISjtBQUlIQyxVQUFBQSxLQUFLLEVBQUU7QUFKSixTQUFQO0FBTUg7QUFSTyxLQWhCSjtBQTJCUkMsSUFBQUEsU0FBUyxFQUFFLENBM0JIO0FBMkJRO0FBQ2hCQyxJQUFBQSxVQUFVLEVBQUUsQ0E1Qko7QUE0QmE7QUFDckJDLElBQUFBLGVBQWUsRUFBRSxFQTdCVDtBQTZCYTtBQUVyQkMsSUFBQUEsa0JBQWtCLEVBQUUsRUEvQlo7QUEr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dXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29jb3PmoYbmnrbkurrkurrnp4DlvIDmlL7mjqXlj6NBUElcbiAqIEFQSeaWh+S7tuaYr+W7uueri+a4uOaIj+W8leaTjuWSjOS6uuS6uuengOW5s+WPsOa4uOaIj+ahhuaetiDmiZPpgJrmlbDmja7kuqTkupLmj5DkvpvnmoTnu5/kuIDmlrnms5XvvJtcbiAgLSDliIbkuLoz5Liq6YOo5YiG77yaXG4gIC0g56ys5LiA6YOo5YiGIOa4uOaIj+i1hOa6kOOAgeeOr+Wig+aOpeWPo1xuICAtIOesrOS6jOmDqOWIhiDmuLjmiI/lvIDlp4vjgIHnu5PmnZ/jgIHmj5DnpLrmjqXlj6NcbiAgLSDnrKzkuInpg6jliIYg6auY57qnQVBJ5o6l5Y+jXG4gKi9cbiAgdmFyIFBsYXRmb3JtID0gY2MuQ2xhc3Moe1xuXG4gICAgLy8g56ys5LiA6YOo5YiGIOa4uOaIj+i1hOa6kOOAgeeOr+Wig+aOpeWPo1xuXG5cbiAgICAvLyDlsZ7mgKflgLzkurrkurrnp4DmoYbmnrboh6rliqjms6jlhaVcbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgX2VuZ2luZVZlcnNpb246IDAsICAvLyDlvJXmk47niYjmnKxcblxuICAgICAgICBfYmFzZVBhdGg6ICcnLCAgLy8g5Lq65Lq656eA6LWE5rqQ5qC555uu5b2VXG4gICAgICAgIF9lbnZpb3JtZW50VHlwZTogMSwgICAgIC8vIOm7mOiupOeOr+Wig+exu+Wei1xuICAgICAgICBlbnZpb3JtZW50VHlwZV9jb2NvczogMSwgICAgLy8gY29jb3PmnKzlnLDnjq/looNcbiAgICAgICAgZW52aW9ybWVudFR5cGVfcnJ4aXU6IDIsICAgIC8vIOWcqOe6v+S6uuS6uuengOeOr+Wig1xuICAgICAgICBfcGx1Z2luR2FtZUhlbHBlcjogbnVsbCwgICAgLy8g5Lq65Lq656eA5ri45oiP6L6F5Yqp5a+56LGhXG5cbiAgICAgICAgLy8g5ri45oiP5Z+65pys6YWN6ImyXG4gICAgICAgIF9nYW1lQ29sb3I6ICcnLFxuICAgICAgICAvLyDln7rmnKzphY3oibIt55u46L+R5rWF6ImyXG4gICAgICAgIF9nYW1lVGhpbkNvbG9yOiAnJyxcblxuICAgICAgICAvLyDmuLjmiI/nmq7ogqTotYTmupBcbiAgICAgICAgX2dhbWVTa2luczogeyBcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBhdWRpb3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0czoge30sXG4gICAgICAgICAgICAgICAgICAgIGpzb25zOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfZ2FtZU1vZGU6IDEsICAgLy8g5YWz5Y2h5qih5byPOjE95peg5bC95qih5byP77yMMj3lhbPljaHmqKHlvI9cbiAgICAgICAgX2dhbWVMZXZlbDogMSwgICAgICAgLy8g5ri45oiP5YWz5Y2hXG4gICAgICAgIF9nYW1lTGV2ZWxUb3RhbDogMTIsIC8vIOa4uOaIj+aAu+WFs+WNoVxuXG4gICAgICAgIF9jb2Nvc1Jlc291cmNlUGF0aDogJycsICAgICAvLyBjb2Nvc+acrOWcsOi1hOa6kOi3r+W+hCAgYXNzZXRzL3Jlc291cmNlc1xuXG4gICAgICAgIHJlc291cmNlVmVyc2lvbjogbnVsbCwgICAgICAgICAvLyDotYTmupDniYjmnKxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICovXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gcGFyc2VJbnQoY2MuRU5HSU5FX1ZFUlNJT04uc3BsaXQoJy4nKS5qb2luKCcnKSk7ICAvLyDlvJXmk47niYjmnKzlj7co5pWw5a2XKVxuICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN5byV5pOO54mI5pys5Y+35pWw5a2XOiAnICsgdGhpcy5fZW5naW5lVmVyc2lvbik7XG4gICAgfSxcblxuICAgIC8qKiDmmK/lkKbmmK/kurrkurrnp4AgKi9cbiAgICBpc1JSWCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnZpb3JtZW50VHlwZSA9PSB0aGlzLmVudmlvcm1lbnRUeXBlX3JyeGl1O1xuICAgIH0sXG5cbiAgICAvKiog5piv5ZCm5YWB6K645Lq65Lq656eA5LqL5Lu2ICovXG4gICAgY2FuUlJYRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0VkaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc1JSWCgpO1xuICAgIH0sXG5cbiAgICAgLy8g6K6+572u5o+S5Lu256m66Ze05LiK5LiL5paHXG4gICAgc2V0UGx1Z2luQ29udGV4dChwbHVnaW5Db250ZXh0LCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KHBsdWdpbkNvbnRleHQsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgLy8g5YWo5bGA5rOo5YWl6ZyA6KaB5Y+C5pWwXG4gICAgc2V0Q29udGV4dChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2Vudmlvcm1lbnRUeXBlICAgID0gdGhpcy5lbnZpb3JtZW50VHlwZV9ycnhpdTtcbiAgICAgICAgdGhpcy5fcGx1Z2luQ29udGV4dCAgICAgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9iYXNlUGF0aCAgICAgICAgICA9IHRoaXMuX3BsdWdpbkNvbnRleHQuX2Jhc2VQYXRoO1xuICAgICAgICB0aGlzLl9pc0VkaXQgICAgICAgICAgICA9IHRoaXMuX3BsdWdpbkNvbnRleHQuaXNFZGl0O1xuICAgICAgICB0aGlzLl9hcGkgICAgICAgICAgICAgICA9IHRoaXMuX3BsdWdpbkNvbnRleHQuYXBpO1xuICAgICAgICB0aGlzLl9wbHVnaW5HYW1lSGVscGVyICA9IHRoaXMuX3BsdWdpbkNvbnRleHQucGx1Z2luR2FtZUhlbHBlcjtcblxuICAgICAgICBpZiAodGhpcy5fcGx1Z2luR2FtZUhlbHBlci5nYW1lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZU1vZGUgPSB0aGlzLl9wbHVnaW5HYW1lSGVscGVyLmdhbWVNb2RlOyAgICAvLyDlhbPljaHmqKHlvI9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhaXlvZPliY3muLjmiI/mqKHlvI86ICcgKyB0aGlzLl9nYW1lTW9kZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5fZ2FtZU1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wbHVnaW5HYW1lSGVscGVyLmdhbWVMZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZUxldmVsID0gdGhpcy5fcGx1Z2luR2FtZUhlbHBlci5nYW1lTGV2ZWw7ICAgIC8vIOW9k+WJjeWFs+WNoVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wbHVnaW5HYW1lSGVscGVyLmdhbWVMZXZlbFRvdGFsKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTGV2ZWxUb3RhbCA9IHRoaXMuX3BsdWdpbkdhbWVIZWxwZXIuZ2FtZUxldmVsVG90YWw7ICAvLyDmgLvlhbPljaFcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb3VyY2VWZXJzaW9uID0gdGhpcy5fcGx1Z2luQ29udGV4dC5yZXNvdXJjZVZlcnNpb24gPyB0aGlzLl9wbHVnaW5Db250ZXh0LnJlc291cmNlVmVyc2lvbiA6ICcnO1xuICAgIH0sXG5cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Z2luQ29udGV4dDtcbiAgICB9LFxuXG4gICAgLyoqIOiOt+WPluetlueVpea4uOaIj+aVsOaNruaUr+aMgSAqL1xuICAgIGdldEdhbWVTdHJhdGVneUFwaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWdpbkdhbWVIZWxwZXIuc3RyYXRlZ3lFdmVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5ri45oiP5qih5byPXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRHYW1lTW9kZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluW9k+WJjea4uOaIj+aooeW8jzogJyArIHRoaXMuX2dhbWVNb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuX2dhbWVNb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVNb2RlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5ri45oiP5YWz5Y2hXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRHYW1lTGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lTGV2ZWw7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmuLjmiI/mgLvlhbPljaFcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldEdhbWVMZXZlbFRvdGFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZUxldmVsVG90YWw7XG4gICAgfSxcblxuICAgIC8vIOWKoOi9vei1hOa6kOaVsOaNru+8jOe7n+S4gOeuoeeQhlxuICAgIGFzeW5jIGluaXRQbHVnaW5SZXNvdXJjZShjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgaXNSUlggPSB0aGlzLmlzUlJYKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfmmK/lkKbmmK9SUlg6JyArIGlzUlJYKTtcbiAgICAgICAgYXdhaXQgdGhhdC5jb2Nvc0Vudmlvcm1lbnRMb2FkKGlzUlJYKTtcbiAgICAgICAgLy8g5LqS5Yqo5Yqg6L295Zu+54mH5YWI5Y675o6JXG4gICAgICAgIGlmIChpc1JSWCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ycnhpdUVudmlvcm1lbnRMb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSxcblxuICAgIC8vIOmihOWKoOi9vWNvY29z5pys5Zyw6LWE5rqQXG4gICAgYXN5bmMgY29jb3NFbnZpb3JtZW50TG9hZChpc1JSWCkge1xuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5Yqg6L29Q29jb3PotYTmupAnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIOS6uuS6uuengOeOr+Wig+WKoOi9vei1hOa6kFxuICAgIGFzeW5jIHJyeGl1RW52aW9ybWVudExvYWQoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VEaWN0ID0gIHRoYXQuZ2V0R2FtZUFQSSgpLnRoZW1lRGljdDtcbiAgICAgICAgICAgIGlmIChzb3VyY2VEaWN0KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5fZ2FtZVNraW5zLnRleHRzID0gc291cmNlRGljdC5kaWN0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZURpY3QuY291cnNlU3R5bGUpO1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0QWxsUmVtb3RlSW1hZ2VSZXNvdXJjZShzb3VyY2VEaWN0LmNvdXJzZVN0eWxlLCBmdW5jdGlvbiAocmVTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fZ2FtZVNraW5zLmltYWdlcyA9IHJlU291cmNlO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdldEFsbFJlbW90ZUF1ZGlvUmVzb3VyY2Uoc291cmNlRGljdC5hdWRpb1N0eWxlLCBmdW5jdGlvbiAocmVTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX2dhbWVTa2lucy5hdWRpb3MgPSByZVNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubG9hZEdhbWVSZXNvdXJjZUpzb24oZnVuY3Rpb24gKHJlSnNvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9nYW1lU2tpbnMuanNvbnMgPSByZUpzb25zO1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIHJlc29sdmUodGhhdC5fZ2FtZVNraW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+a4uOaIj+earuiCpF9nYW1lU2tpbnMnLCB0aGF0Ll9nYW1lU2tpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmlzTG9hZE92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCgn6Kej5p6Q6LWE5rqQ5aSx6LSlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyDliqDovb1Mb2FkaW5n57uT5p2f5raI5aSxXG4gICAgaXNMb2FkT3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblJSWEV2ZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0R2FtZVN0cmF0ZWd5QXBpKCkuaXNMb2FkT3ZlcigpO1xuXHR9LFxuXG4gICAgLy8g6I635Y+W6LWE5rqQ5paH5Lu26Lev5b6EXG4gICAgZ2V0UGx1Z2luRmlsZXMoZmlsZU5hbWUsIHBhdGgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSUlgoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dCgpLmdldEZpbGUoZmlsZU5hbWUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nICsgZmlsZU5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOaciei/nOeoi+WbvueJh+i1hOa6kFxuICAgICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VMaXN0IFxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZ2V0QWxsUmVtb3RlSW1hZ2VSZXNvdXJjZShyZXNvdXJjZUxpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzb3VyY2VEaWN0ID0ge307XG4gICAgICAgIGlmICghcmVzb3VyY2VMaXN0IHx8IHJlc291cmNlTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzb3VyY2VEaWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIGxvYWRJbmRleCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZFJlc291cmNlKCkge1xuICAgICAgICAgICAgdGhhdC5nZXRSZW1vdGVJbWFnZVJlc291cmNlKHJlc291cmNlTGlzdFtsb2FkSW5kZXhdLnZhbHVlLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZURpY3RbcmVzb3VyY2VMaXN0W2xvYWRJbmRleF0ua2V5XSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmIChsb2FkSW5kZXggPiByZXNvdXJjZUxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNvdXJjZURpY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRSZXNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRSZXNvdXJjZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bov5znqIvlm77niYfotYTmupBcbiAgICAgKiBAcGFyYW0geyp9IGltYWdlVXJsIFxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVtb3RlSW1hZ2VSZXNvdXJjZShpbWFnZVVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9vei/nOeoi+WbvueJh+WcsOWdgDonICsgaW1hZ2VVcmwpO1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRSZW1vdGVSZXNvdXJjZShpbWFnZVVybCwgJ2ltYWdlJykudGhlbih0ZXh0dXJlID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodGV4dHVyZSk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInov5znqIvpn7PpopHotYTmupBcbiAgICAgKiBAcGFyYW0geyp9IHJlc291cmNlTGlzdCBcbiAgICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgICBnZXRBbGxSZW1vdGVBdWRpb1Jlc291cmNlKHJlc291cmNlTGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNvdXJjZURpY3QgPSB7fTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZUxpc3QgfHwgcmVzb3VyY2VMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHNvdXJjZURpY3QpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgbG9hZEluZGV4ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2UoKSB7XG4gICAgICAgICAgICB0aGF0LmdldFJlbW90ZUF1ZGlvUmVzb3VyY2UocmVzb3VyY2VMaXN0W2xvYWRJbmRleF0udmFsdWUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgc291cmNlRGljdFtyZXNvdXJjZUxpc3RbbG9hZEluZGV4XS5rZXldID0gZGF0YTtcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAobG9hZEluZGV4ID4gcmVzb3VyY2VMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhzb3VyY2VEaWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2FkUmVzb3VyY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkUmVzb3VyY2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6L+c56iL6Z+z6aKR6LWE5rqQXG4gICAgICogQHBhcmFtIHsqfSBhdWRpb1VybCBcbiAgICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrIFxuICAgICAqL1xuICAgIGFzeW5jIGdldFJlbW90ZUF1ZGlvUmVzb3VyY2UoYXVkaW9VcmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3ov5znqIvpn7PpopHlnLDlnYA6JyArIGF1ZGlvVXJsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUmVtb3RlUmVzb3VyY2UoYXVkaW9VcmwsICdhdWRpbycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOWKoOi9veW6j+WIl+W4p+aWh+S7tu+8jOmDqOWIhua4uOaIj+mcgOimgeWKoOi9vVxuICAgIGxvYWRHYW1lUmVzb3VyY2VKc29uKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBsb2FkSm9ucyA9IFtcbiAgICAgICAgICAgIC8vIHsgaWQ6ICdiX2JhbGxvb25Ta2luUnVuX2pzb24nLCBzcmM6IFwiYl9iYWxsb29uU2tpblJ1bi5qc29uXCIgfSxcbiAgICAgICAgICAgIC8qICB7IGlkOiAnTmV3UHJvamVjdF90ZXhfanNvbicsIHNyYzogXCJOZXdQcm9qZWN0X3RleC5qc29uXCIgfSovXG4gICAgICAgIF07XG4gICAgICAgIGxldCBqb25zRGljdCA9IHt9O1xuICAgICAgICBpZiAoIWxvYWRKb25zIHx8IGxvYWRKb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqb25zRGljdCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBsb2FkSW5kZXggPSAwO1xuICAgICAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2UoKSB7XG4gICAgICAgICAgICBsZXQgbG9hZFVybCA9IHRoYXQuZ2V0UGx1Z2luRmlsZXMobG9hZEpvbnNbbG9hZEluZGV4XS5zcmMsICdyZXNvdXJjZS9hc3NldHMnKSArICc/dj0nICsgbG9jYXRpb24uaG9zdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvYWRVcmwpO1xuICAgICAgICAgICAgdGhhdC5nZXRSZXNvdXJjZUpzb24obG9hZFVybCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBqb25zRGljdFtsb2FkSm9uc1tsb2FkSW5kZXhdLmlkXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgbG9hZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRJbmRleCA+IGxvYWRKb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhqb25zRGljdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2FkUmVzb3VyY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkUmVzb3VyY2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6LWE5rqQXG4gICAgICogQHBhcmFtIHsqfSBzb3VyY2VOYW1lICAgICAgICDotYTmupDlkI3np7BcbiAgICAgKiBAcGFyYW0geyp9IHR5cGUgICAgICAgICAgICAgIOi1hOa6kOexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gcGF0aCAgICAgICAgICAgICAg5pys5Zyw6LWE5rqQ55u45a+56Lev5b6E77yMcGF0aOS4uuepuuaXtum7mOiupOafpeaJvui3r+W+hCzlm77niYfmmK9pbWFnZXPvvIzpn7PpopHmmK9hdWRpb3NcbiAgICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgICAgIENvY29z6LWE5rqQ5a+56LGhXG4gICAgICovXG4gICAgYXN5bmMgZ2V0UmVzKHNvdXJjZU5hbWUsIHR5cGUgPSAnaW1hZ2UnLCBwYXRoID0gJycpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNSUlgoKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi5nZXRHYW1lU2tpbnMoc291cmNlTmFtZSwgdHlwZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGggPT0gJycpIHBhdGggPSAnaW1hZ2VzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCA9PSAnJykgcGF0aCA9ICdhdWRpb3MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkTG9jYWxSZXNvdXJjZShwYXRoICsgJy8nICsgc291cmNlTmFtZSwgdHlwZSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei/nOeoi+i1hOa6kFxuICAgICAqL1xuICAgICBhc3luYyBsb2FkUmVtb3RlUmVzb3VyY2UocmVzb3VyY2VVcmwsIHJlc291cmNlVHlwZSA9ICdpbWFnZScpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgc3VmZml4ID0gc2VsZi5yZXNvdXJjZVZlcnNpb24gPyAnP3Y9JyArIHNlbGYucmVzb3VyY2VWZXJzaW9uIDogJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3ov5znqIvotYTmupDvvJonICsgcmVzb3VyY2VVcmwgKyBzdWZmaXgpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyDlpITnkIbkuI3lkIzlvJXmk47niYjmnKzliqDovb3otYTmupBcbiAgICAgICAgICAgIGlmIChzZWxmLl9lbmdpbmVWZXJzaW9uID49IDMwMCkge1xuICAgICAgICAgICAgICAgIGFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlc291cmNlVXJsICsgc3VmZml4LCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+WKoOi9vei/nOeoi+i1hOa6kOaIkOWKnycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICfliqDovb3ov5znqIvotYTmupDlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX2VuZ2luZVZlcnNpb24gPj0gMjQwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dE9iaiA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZVR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgICBleHRPYmogPSB7IGV4dDogJy5wbmcnfTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVzb3VyY2VVcmwgKyBzdWZmaXgsIGV4dE9iaiwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+WKoOi9vei/nOeoi+i1hOa6kOaIkOWKnycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICfliqDovb3ov5znqIvotYTmupDlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVzb3VyY2VVcmwgKyBzdWZmaXgsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfliqDovb3ov5znqIvotYTmupDmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAn5Yqg6L296L+c56iL6LWE5rqQ5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5fZW5naW5lVmVyc2lvbiA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb3VyY2VPYmogPSByZXNvdXJjZVVybDtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VUeXBlID09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VPYmogPSB7IHVybDogcmVzb3VyY2VVcmwgKyBzdWZmaXgsIHR5cGU6ICdwbmcnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHJlc291cmNlT2JqLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ+WKoOi9vei/nOeoi+i1hOa6kOaIkOWKnycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICfliqDovb3ov5znqIvotYTmupDlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliqDovb3mnKzlnLDotYTmupBcbiAgICAgKi9cbiAgICAgYXN5bmMgbG9hZExvY2FsUmVzb3VyY2UocmVzb3VyY2VQYXRoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9veacrOWcsOi1hOa6kOi3r+W+hDogJyArIHJlc291cmNlUGF0aCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyDlpITnkIbkuI3lkIzlvJXmk47niYjmnKzliqDovb3otYTmupBcbiAgICAgICAgICAgIGlmIChzZWxmLl9lbmdpbmVWZXJzaW9uID49IDMwMCkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlcy5sb2FkKHJlc291cmNlUGF0aCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfliqDovb3mnKzlnLDotYTmupDmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAn5Yqg6L295pys5Zyw6LWE5rqQ5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLl9lbmdpbmVWZXJzaW9uID49IDI0MCkge1xuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc291cmNlUGF0aCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfliqDovb3mnKzlnLDotYTmupDmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAn5Yqg6L295pys5Zyw6LWE5rqQ5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLl9lbmdpbmVWZXJzaW9uID49IDIwMCkge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHJlc291cmNlUGF0aCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICfliqDovb3mnKzlnLDotYTmupDmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAn5Yqg6L295pys5Zyw6LWE5rqQ5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g6I635Y+W5ri45oiP6LWE5rqQ6YWN572uIGtleTosdHlwZTog4oCYaW1hZ2UvYXVkaW8vdGV4dOKAmVxuICAgIGdldEdhbWVTa2lucyhuYW1lLCB0eXBlID0gJ2ltYWdlJykge1xuICAgICAgICBpZiAodGhpcy5fZ2FtZVNraW5zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTa2lucy5pbWFnZXMgJiYgdGhpcy5fZ2FtZVNraW5zLmltYWdlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTa2lucy5pbWFnZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVNraW5zLmF1ZGlvcyAmJiB0aGlzLl9nYW1lU2tpbnMuYXVkaW9zW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVNraW5zLmF1ZGlvc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoZW1lTmFtZSA9ICdza2luUGFnZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU2tpbnMudGV4dHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lU2tpbnMudGV4dHNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU2tpbnMuanNvbnMgJiYgdGhpcy5fZ2FtZVNraW5zLmpzb25zW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVNraW5zLmpzb25zW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKCfojrflj5bmuLjmiI/otYTmupDplJnor6/vvJonICsgbmFtZSArICcsIOexu+Wei++8micgLiB0eXBlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPlua4uOaIj+WfuuacrOmFjeiJslxuICAgICAqL1xuICAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9nYW1lQ29sb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUlJYKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQ29sb3IgPSB0aGlzLmdldEdhbWVQYWdlQXBpKCkuZ2V0QmFzaWNDb2xvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVDb2xvciA9IEdhbWVVdGlscy5jb2xvcjJOdW0odGhpcy5fZ2FtZUNvbG9yKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQ29sb3IgPSAnI2QxNmIxZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUNvbG9yID0gR2FtZVV0aWxzLmNvbG9yMk51bSh0aGlzLl9nYW1lQ29sb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb2xvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6buY6K6k5ri45oiP6YWN6ImyXG4gICAgICovXG4gICAgIGdldFRoaW5Db2xvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9nYW1lVGhpbkNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lVGhpbkNvbG9yID0gR2FtZVV0aWxzLmNvbG9yMlNoYWRlKHRoaXMuZ2V0Q29sb3IoKSwgMC40KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVRoaW5Db2xvcjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAqIOiOt+W+l+e6v+eahOminOiJslxuICAgICovXG4gICAgZ2V0V2lyZUNvbG9yKCkge1xuICAgICAgICBsZXQgd2lyZUNvbG9yID0gXCIjOGZkNmZmXCI7XG4gICAgICAgIGlmICh0aGlzLmlzUlJYKCkpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0S2V5ID0gXCJ0eF93aXJlXCI7XG4gICAgICAgICAgICB2YXIgdGV4dERhdGEgPSB0aGlzLmdldEdhbWVTa2lucyh0ZXh0S2V5LCAndGV4dCcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGV4dERhdGEpO1xuICAgICAgICAgICAgd2lyZUNvbG9yID0gdGV4dERhdGEuY29sb3I7XG5cbiAgICAgICAgfVxuICAgICAgICB3aXJlQ29sb3IgPSBHYW1lVXRpbHMuY29sb3IyTnVtKHdpcmVDb2xvcik7XG4gICAgICAgIHJldHVybiB3aXJlQ29sb3JcbiAgICB9LFxuXG5cbiAgICAvLyDnrKzkuozpg6jliIYg5ri45oiP5byA5aeL44CB57uT5p2f44CB5o+Q56S65o6l5Y+jXG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHdpbmRvdy5nYW1lVXRpbC5zZXRHYW1lU3RhcnQodHJ1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaPkOS6pOa4uOaIj+WIhuaVsFxuICAgICAqIEBwYXJhbSB7Kn0gZ2FtZVNjb3JlIOa4uOaIj+WIhuaVsFxuICAgICAqIEBwYXJhbSB7Kn0gZ2FtZVdpbiAgIOa4uOaIj+i/h+WFsyAx77ya6L+H5YWz77yMMO+8muacqui/h+WFs1xuICAgICAqIEBwYXJhbSB7Kn0gZ2FtZUdyYWRlIOa4uOaIj+ivhOaYnyAwfjPvvJrmlbDlrZfmoIfor4bmmJ/nuqdcbiAgICAgKiBAcGFyYW0geyp9IG1lbW8gICAgICDmuLjmiI/lpIfms6gg5q+U5aaCIOatpeaVsO+8mjEwXG4gICAgICogQHJldHVybnMgICAgICAgICAgICAgY29jb3Pnjq/looPov5Tlm55UdXJl77yM6ZyA5a6M5ZaE6Ieq5pyJ6YC76L6R77yb5Lq65Lq656eA546v5aKD5peg6ZyA5aSE55CGXG4gICAgICovXG4gICAgc3VibWl0R2FtZVNjb3JlKGdhbWVTY29yZSwgZ2FtZVdpbiA9IDEsIGdhbWVHcmFkZSA9IDAsIG1lbW8gPSAnJykge1xuICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5YiG5pWwOicgKyBnYW1lU2NvcmUgKyAn77yM5piv5ZCm6L+H5YWz77yaJyArIGdhbWVXaW4gKyAnLCDmuLjmiI/or4TmmJ86JyArIGdhbWVHcmFkZSArICcsIOWkh+azqO+8micgKyBtZW1vKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUlJYKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5nmmK9Db2Nvc+acrOWcsOeOr+Wig++8jOivt+iHquihjOmaj+S+v+WkhOeQhuaPkOS6pOWIhuaVsOmAu+i+kScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVNb2RlID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lTGV2ZWwrKztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+Z5piv6Zev5YWz5qih5byP77yM5o+Q5Lqk5YiG5pWw5ZCO6L+b5YWl5LiL5LiA5YWzJyArIHRoaXMuX2dhbWVMZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEdhbWVTdHJhdGVneUFwaSgpLmFkZFNjb3JlKGdhbWVTY29yZSwge1xuICAgICAgICAgICAgZ2FtZVdpbjogZ2FtZVdpbixcbiAgICAgICAgICAgIGdhbWVHcmFkZTogZ2FtZUdyYWRlLFxuICAgICAgICAgICAgbWVtbzogbWVtb1xuICAgICAgICB9KTtcblx0fSxcblxuICAgIHNob3dNc2cobXNnKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbk1pbmlFdmVudCgpKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdhbWVQYWdlQXBpKCkuaW5mb01zZyhtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQobXNnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDnrKzkuInpg6jliIYg6auY57qnQVBJ5o6l5Y+jXG5cbiAgICAvLyDojrflj5bmj5Lku7bmuLjmiI9BUEnovoXliqnmjqXlj6NcbiAgICBnZXRHYW1lQVBJKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Z2luR2FtZUhlbHBlcjtcbiAgICB9LFxufSk7XG5cbmNvbnNvbGUubG9nKCflvIDlp4vmjILovb13aW5kb3cuUGxhdGZvcm0nKTtcbndpbmRvdy5wbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSgpOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHNcXEdhbWVVdGlsLmpzIl0sIm5hbWVzIjpbIkdhbWVVdGlsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfaXNHYW1lU3RhcnQiLCJzdGFydCIsInNldEdhbWVTdGFydCIsImlzU3RhcnQiLCJjb2xvcjJOdW0iLCJjb2xvciIsInRoYXQiLCJyZWciLCJ0ZXN0IiwiYUNvbG9yIiwicmVwbGFjZSIsInNwbGl0Iiwic3RySGV4IiwiaSIsImxlbmd0aCIsImhleCIsIk51bWJlciIsInRvU3RyaW5nIiwiYU51bSIsIm51bUhleCIsImNvbG9yMlNoYWRlIiwicGVyY2VudCIsInNoYWRlUkdCQ29sb3IiLCJzaGFkZUNvbG9yMiIsImYiLCJwYXJzZUludCIsInNsaWNlIiwidCIsInAiLCJSIiwiRyIsIkIiLCJNYXRoIiwicm91bmQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZ2FtZVV0aWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQixhQUFTRCxFQUFFLENBQUNFLFNBRFE7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsS0FoQk4sQ0FnQmdCOztBQWhCaEIsR0FIUTtBQXNCcEI7QUFFQTtBQUVBQyxFQUFBQSxLQTFCb0IsbUJBMEJYLENBRVIsQ0E1Qm1CO0FBOEJwQjs7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxZQXBDb0Isd0JBb0NQQyxPQXBDTyxFQW9DRTtBQUNsQixTQUFLSCxZQUFMLEdBQW9CRyxPQUFwQjtBQUNILEdBdENtQjs7QUF3Q3BCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSUMsRUFBQUEsU0E3Q29CLHFCQTZDVkMsS0E3Q1UsRUE2Q0g7QUFDYixRQUFJQyxJQUFJLEdBQUdELEtBQVg7QUFDTixRQUFJRSxHQUFHLEdBQUcsb0NBQVY7O0FBRUEsUUFBSSxpQkFBaUJDLElBQWpCLENBQXNCRixJQUF0QixDQUFKLEVBQWlDO0FBQ2hDLFVBQUlHLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxPQUFMLENBQWEscUJBQWIsRUFBb0MsRUFBcEMsRUFBd0NDLEtBQXhDLENBQThDLEdBQTlDLENBQWI7QUFDQSxVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDdkMsWUFBSUUsR0FBRyxHQUFHQyxNQUFNLENBQUNQLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFQLENBQU4sQ0FBa0JJLFFBQWxCLENBQTJCLEVBQTNCLENBQVY7O0FBQ0EsWUFBSUYsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDaEJBLFVBQUFBLEdBQUcsSUFBSUEsR0FBUDtBQUNBOztBQUNESCxRQUFBQSxNQUFNLElBQUlHLEdBQVY7QUFDQTs7QUFDRCxVQUFJSCxNQUFNLENBQUNFLE1BQVAsS0FBa0IsSUFBSSxDQUExQixFQUE2QjtBQUM1QkYsUUFBQUEsTUFBTSxHQUFHTixJQUFUO0FBQ0E7O0FBQ0QsYUFBT00sTUFBUDtBQUNBLEtBZEQsTUFjTyxJQUFJTCxHQUFHLENBQUNDLElBQUosQ0FBU0YsSUFBVCxDQUFKLEVBQW9CO0FBQzFCLFVBQUlZLElBQUksR0FBR1osSUFBSSxDQUFDSSxPQUFMLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQkMsS0FBdEIsQ0FBNEIsRUFBNUIsQ0FBWDs7QUFDQSxVQUFJTyxJQUFJLENBQUNKLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDdEJSLFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxPQUFMLENBQWEsR0FBYixFQUFrQixJQUFsQixDQUFQO0FBQ0EsZUFBT0osSUFBUDtBQUNBLE9BSEQsTUFHTyxJQUFJWSxJQUFJLENBQUNKLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDN0IsWUFBSUssTUFBTSxHQUFHLElBQWI7O0FBQ0EsYUFBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSyxJQUFJLENBQUNKLE1BQXpCLEVBQWlDRCxDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFDeENNLFVBQUFBLE1BQU0sSUFBS0QsSUFBSSxDQUFDTCxDQUFELENBQUosR0FBVUssSUFBSSxDQUFDTCxDQUFELENBQXpCO0FBQ0E7O0FBQ0QsZUFBT00sTUFBUDtBQUNBO0FBQ0QsS0FaTSxNQVlBLElBQUksbUJBQW1CWCxJQUFuQixDQUF3QkYsSUFBeEIsQ0FBSixFQUFtQztBQUN6QyxVQUFJRyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhLHVCQUFiLEVBQXNDLEVBQXRDLEVBQTBDQyxLQUExQyxDQUFnRCxHQUFoRCxDQUFiO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDM0MsWUFBSUUsR0FBRyxHQUFHQyxNQUFNLENBQUNQLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFQLENBQU4sQ0FBa0JJLFFBQWxCLENBQTJCLEVBQTNCLENBQVY7O0FBQ0EsWUFBSUYsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDaEJBLFVBQUFBLEdBQUcsSUFBSUEsR0FBUDtBQUNBOztBQUNESCxRQUFBQSxNQUFNLElBQUlHLEdBQVY7QUFDQTs7QUFFRCxhQUFPSCxNQUFQO0FBRUEsS0FiTSxNQWFBO0FBQ04sYUFBT04sSUFBUDtBQUNBO0FBQ0UsR0EzRm1COztBQTZGcEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NjLEVBQUFBLFdBbkd1Qix1QkFtR1hmLEtBbkdXLEVBbUdKZ0IsT0FuR0ksRUFtR0s7QUFDM0IsUUFBSWhCLEtBQUssQ0FBQ1MsTUFBTixHQUFlLENBQW5CLEVBQXNCLE9BQU9RLGFBQWEsQ0FBQ2pCLEtBQUQsRUFBUWdCLE9BQVIsQ0FBcEIsQ0FBdEIsS0FDSyxPQUFPRSxXQUFXLENBQUNsQixLQUFELEVBQVFnQixPQUFSLENBQWxCOztBQUVMLGFBQVNFLFdBQVQsQ0FBcUJsQixLQUFyQixFQUE0QmdCLE9BQTVCLEVBQXFDO0FBQ3BDLFVBQUlHLENBQUMsR0FBR0MsUUFBUSxDQUFDcEIsS0FBSyxDQUFDcUIsS0FBTixDQUFZLENBQVosQ0FBRCxFQUFpQixFQUFqQixDQUFoQjtBQUFBLFVBQXNDQyxDQUFDLEdBQUdOLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBZCxHQUFrQixHQUE1RDtBQUFBLFVBQWlFTyxDQUFDLEdBQUdQLE9BQU8sR0FBRyxDQUFWLEdBQWNBLE9BQU8sR0FBRyxDQUFDLENBQXpCLEdBQTZCQSxPQUFsRztBQUFBLFVBQTJHUSxDQUFDLEdBQUdMLENBQUMsSUFBSSxFQUFwSDtBQUFBLFVBQXdITSxDQUFDLEdBQUdOLENBQUMsSUFBSSxDQUFMLEdBQVMsTUFBckk7QUFBQSxVQUE2SU8sQ0FBQyxHQUFHUCxDQUFDLEdBQUcsUUFBcko7QUFDQSxhQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUNRLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNOLENBQUMsR0FBR0UsQ0FBTCxJQUFVRCxDQUFyQixJQUEwQkMsQ0FBM0IsSUFBZ0MsT0FBNUMsR0FBc0QsQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sQ0FBQyxHQUFHRyxDQUFMLElBQVVGLENBQXJCLElBQTBCRSxDQUEzQixJQUFnQyxLQUF0RixJQUErRkUsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sQ0FBQyxHQUFHSSxDQUFMLElBQVVILENBQXJCLElBQTBCRyxDQUF6SCxDQUFELEVBQThIZCxRQUE5SCxDQUF1SSxFQUF2SSxFQUEySVMsS0FBM0ksQ0FBaUosQ0FBakosQ0FBYjtBQUNBOztBQUNELGFBQVNKLGFBQVQsQ0FBdUJqQixLQUF2QixFQUE4QmdCLE9BQTlCLEVBQXVDO0FBQ3RDLFVBQUlHLENBQUMsR0FBR25CLEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosQ0FBUjtBQUFBLFVBQTBCZ0IsQ0FBQyxHQUFHTixPQUFPLEdBQUcsQ0FBVixHQUFjLENBQWQsR0FBa0IsR0FBaEQ7QUFBQSxVQUFxRE8sQ0FBQyxHQUFHUCxPQUFPLEdBQUcsQ0FBVixHQUFjQSxPQUFPLEdBQUcsQ0FBQyxDQUF6QixHQUE2QkEsT0FBdEY7QUFBQSxVQUErRlEsQ0FBQyxHQUFHSixRQUFRLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0UsS0FBTCxDQUFXLENBQVgsQ0FBRCxDQUEzRztBQUFBLFVBQTRISSxDQUFDLEdBQUdMLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUF4STtBQUFBLFVBQWdKTyxDQUFDLEdBQUdOLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUE1SjtBQUNBLGFBQU8sVUFBVVEsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sQ0FBQyxHQUFHRSxDQUFMLElBQVVELENBQXJCLElBQTBCQyxDQUFwQyxJQUF5QyxHQUF6QyxJQUFnREcsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sQ0FBQyxHQUFHRyxDQUFMLElBQVVGLENBQXJCLElBQTBCRSxDQUExRSxJQUErRSxHQUEvRSxJQUFzRkUsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ04sQ0FBQyxHQUFHSSxDQUFMLElBQVVILENBQXJCLElBQTBCRyxDQUFoSCxJQUFxSCxHQUE1SDtBQUNBO0FBQ0Q7QUEvR3NCLENBQVQsQ0FBZjtBQWtIQUcsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQUMsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLElBQUkxQyxRQUFKLEVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgR2FtZVV0aWwgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBfaXNHYW1lU3RhcnQ6IGZhbHNlLCAgICAvLyDmuLjmiI/lvIDlp4vmoIflv5dcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7muLjmiI/lvIDlp4vmoIflv5dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3RhcnQgXG4gICAgICovXG4gICAgc2V0R2FtZVN0YXJ0KGlzU3RhcnQpIHtcbiAgICAgICAgdGhpcy5faXNHYW1lU3RhcnQgPSBpc1N0YXJ0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpopzoibLovazmjaLmiJDmlbDlrZdcbiAgICAgKiBAcGFyYW0geyp9IGNvbG9yIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGNvbG9yMk51bShjb2xvcikge1xuICAgICAgICB2YXIgdGhhdCA9IGNvbG9yO1xuXHRcdHZhciByZWcgPSAvXiMoWzAtOWEtZkEtZl17M318WzAtOWEtZkEtZl17Nn0pJC87XG5cblx0XHRpZiAoL14ocmdiXFwofFJHQlxcKCkvLnRlc3QodGhhdCkpIHtcblx0XHRcdHZhciBhQ29sb3IgPSB0aGF0LnJlcGxhY2UoLyg/OlxcKHxcXCl8cmdifFJHQikqL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcblx0XHRcdHZhciBzdHJIZXggPSBcIjB4XCI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFDb2xvci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaGV4ID0gTnVtYmVyKGFDb2xvcltpXSkudG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRpZiAoaGV4ID09PSBcIjBcIikge1xuXHRcdFx0XHRcdGhleCArPSBoZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RySGV4ICs9IGhleDtcblx0XHRcdH1cblx0XHRcdGlmIChzdHJIZXgubGVuZ3RoICE9PSA3ICsgMSkge1xuXHRcdFx0XHRzdHJIZXggPSB0aGF0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ckhleDtcblx0XHR9IGVsc2UgaWYgKHJlZy50ZXN0KHRoYXQpKSB7XG5cdFx0XHR2YXIgYU51bSA9IHRoYXQucmVwbGFjZSgvIy8sIFwiXCIpLnNwbGl0KFwiXCIpO1xuXHRcdFx0aWYgKGFOdW0ubGVuZ3RoID09PSA2KSB7XG5cdFx0XHRcdHRoYXQgPSB0aGF0LnJlcGxhY2UoLyMvLCBcIjB4XCIpO1xuXHRcdFx0XHRyZXR1cm4gdGhhdDtcblx0XHRcdH0gZWxzZSBpZiAoYU51bS5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0dmFyIG51bUhleCA9IFwiMHhcIjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhTnVtLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0bnVtSGV4ICs9IChhTnVtW2ldICsgYU51bVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bUhleDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKC9eKHJnYmFcXCh8UkdCQVxcKCkvLnRlc3QodGhhdCkpIHtcblx0XHRcdHZhciBhQ29sb3IgPSB0aGF0LnJlcGxhY2UoLyg/OlxcKHxcXCl8cmdiYXxSR0JBKSovZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuXHRcdFx0dmFyIHN0ckhleCA9IFwiMHhcIjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYUNvbG9yLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHR2YXIgaGV4ID0gTnVtYmVyKGFDb2xvcltpXSkudG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRpZiAoaGV4ID09PSBcIjBcIikge1xuXHRcdFx0XHRcdGhleCArPSBoZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RySGV4ICs9IGhleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHN0ckhleDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhhdDtcblx0XHR9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOminOiJsui9rOaNolxuICAgICAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gICAgICogQHBhcmFtIHsqfSBwZXJjZW50IFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuXHRjb2xvcjJTaGFkZShjb2xvciwgcGVyY2VudCkge1xuXHRcdGlmIChjb2xvci5sZW5ndGggPiA3KSByZXR1cm4gc2hhZGVSR0JDb2xvcihjb2xvciwgcGVyY2VudCk7XG5cdFx0ZWxzZSByZXR1cm4gc2hhZGVDb2xvcjIoY29sb3IsIHBlcmNlbnQpO1xuXG5cdFx0ZnVuY3Rpb24gc2hhZGVDb2xvcjIoY29sb3IsIHBlcmNlbnQpIHtcblx0XHRcdHZhciBmID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMSksIDE2KSwgdCA9IHBlcmNlbnQgPCAwID8gMCA6IDI1NSwgcCA9IHBlcmNlbnQgPCAwID8gcGVyY2VudCAqIC0xIDogcGVyY2VudCwgUiA9IGYgPj4gMTYsIEcgPSBmID4+IDggJiAweDAwRkYsIEIgPSBmICYgMHgwMDAwRkY7XG5cdFx0XHRyZXR1cm4gXCIjXCIgKyAoMHgxMDAwMDAwICsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKiAweDEwMDAwICsgKE1hdGgucm91bmQoKHQgLSBHKSAqIHApICsgRykgKiAweDEwMCArIChNYXRoLnJvdW5kKCh0IC0gQikgKiBwKSArIEIpKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHNoYWRlUkdCQ29sb3IoY29sb3IsIHBlcmNlbnQpIHtcblx0XHRcdHZhciBmID0gY29sb3Iuc3BsaXQoXCIsXCIpLCB0ID0gcGVyY2VudCA8IDAgPyAwIDogMjU1LCBwID0gcGVyY2VudCA8IDAgPyBwZXJjZW50ICogLTEgOiBwZXJjZW50LCBSID0gcGFyc2VJbnQoZlswXS5zbGljZSg0KSksIEcgPSBwYXJzZUludChmWzFdKSwgQiA9IHBhcnNlSW50KGZbMl0pO1xuXHRcdFx0cmV0dXJuIFwicmdiKFwiICsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKyBcIixcIiArIChNYXRoLnJvdW5kKCh0IC0gRykgKiBwKSArIEcpICsgXCIsXCIgKyAoTWF0aC5yb3VuZCgodCAtIEIpICogcCkgKyBCKSArIFwiKVwiO1xuXHRcdH1cblx0fVxufSk7XG5cbmNvbnNvbGUubG9nKCflvIDlp4vmjILovb13aW5kb3cuZ2FtZVV0aWwnKTtcbndpbmRvdy5nYW1lVXRpbCA9IG5ldyBHYW1lVXRpbCgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d96b8DxB9Dg5rzyh0PD9YX', 'Food');
// scripts/Food.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Food.prototype.init = function (picTexture, pos) {
        var sprite = this.node.getComponent(cc.Sprite);
        var width = this.node.width;
        var height = this.node.height;
        var frame = new cc.SpriteFrame(picTexture, cc.rect(pos.x * width, pos.y * height, width, height));
        sprite.spriteFrame = frame;
    };
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRm9vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFTQSxDQUFDO0lBUEcsbUJBQUksR0FBSixVQUFLLFVBQVUsRUFBQyxHQUFHO1FBQ2YsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksS0FBSyxHQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RixNQUFNLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBUmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FTeEI7SUFBRCxXQUFDO0NBVEQsQUFTQyxDQVRpQyxFQUFFLENBQUMsU0FBUyxHQVM3QztrQkFUb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgaW5pdChwaWNUZXh0dXJlLHBvcyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzcHJpdGU9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICBsZXQgZnJhbWU9bmV3IGNjLlNwcml0ZUZyYW1lKHBpY1RleHR1cmUsY2MucmVjdChwb3MueCAqIHdpZHRoLHBvcy55ICogaGVpZ2h0LHdpZHRoLGhlaWdodCkpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZT1mcmFtZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
