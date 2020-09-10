const Baseservice = require("@bitskyai/producer-sdk");
const _ = require('lodash');
const { getProducerConfigs } = require("./utils");

let __baseservice = undefined;

module.exports = {
  startServer: async function startServer(
    configs,
    exprssOptions,
    indexOptions
  ) {
    try {
      // get default configurations
      const defaultConfigs = getProducerConfigs();
      // merge with customer configs
      configs = _.merge({}, defaultConfigs, configs);
      let baseservice = __baseservice;
      baseservice = new Baseservice(configs);
      __baseservice = baseservice;
      baseservice.express(exprssOptions || {});
      baseservice.routers(indexOptions || {})
      await baseservice.listen();
    } catch (err) {
      throw err;
    }
  },
  stopServer: async function stopServer() {
    try {
      await __baseservice.stop();
      __baseservice = undefined;
    } catch (err) {
      throw err;
    }
  },
};
