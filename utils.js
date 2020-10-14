/* eslint-disable no-process-env */
// Env vars should be casted to correct types

// Get Specific Producer Configuration
function getProducerConfigs() {
  try {
    // add configurations specific for this producer type
    return {
      SERVICE_NAME: "bitsky-service-producer"
    };
  } catch (err) {
    console.error("service->getProducerConfigs fail!", err);
  }
}

module.exports = {
  getProducerConfigs,
};
