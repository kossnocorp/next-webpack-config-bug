const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) config.resolve.mainFields.splice(0, 0, "ssr");

    config.resolve.alias["alias-local/message$"] = path.resolve(
      __dirname,
      "alias.js"
    );

    config.resolve.alias["alias-modules/message$"] = path.resolve(
      __dirname,
      "alias.js"
    );

    return config;
  },
};
