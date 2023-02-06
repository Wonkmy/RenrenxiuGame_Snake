"use strict";
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