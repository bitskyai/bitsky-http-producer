const Baseservice = require("bitspider-agent-baseservice");
const _ = require('lodash');
const { getAgentConfigs } = require("./utils");

let __baseservice = undefined;

module.exports = {
  startServer: async function startServer(
    configs,
    exprssOptions,
    indexOptions
  ) {
    try {
      // get default configurations
      const defaultConfigs = getAgentConfigs();
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
      if(__baseservice.server){
        __baseservice.server.destroy();
      }
      __baseservice.server = undefined;
    } catch (err) {
      throw err;
    }
  },
};
