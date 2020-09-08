/* eslint-disable no-process-env */
// Env vars should be casted to correct types

// Get Specific Agent Configuration
function getAgentConfigs() {
  try {
    // add configurations specific for this agent type
    return {
      SERVICE_NAME: "bitsky-service-producer"
    };
  } catch (err) {
    console.error("service->getAgentConfigs fail!", err);
  }
}

module.exports = {
  getAgentConfigs,
};
