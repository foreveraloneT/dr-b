import pjson from '../../../../package.json'

class GlobalConfig {
  static _config = {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    APP_VERSION: pjson.version,
    ..._globalConfig,
  }

  static get(key = '') {
    if (key === '') {
      return this._config
    }
    return this._config[key]
  }
}

export default GlobalConfig
