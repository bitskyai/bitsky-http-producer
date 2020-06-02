const Baseservice = require("bitspider-agent-baseservice");
const _ = require('lodash');
const { getAgentConfigs } = require("./utils");

let server = undefined;

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
      const baseservice = new Baseservice(configs);
      baseservice.express(exprssOptions || {});
      baseservice.routers(indexOptions || {});
      server = baseservice.listen();
    } catch (err) {
      throw err;
    }
  },
  stopServer: async function stopServer() {
    try {
      server.destroy();
    } catch (err) {
      throw err;
    }
  },
};
