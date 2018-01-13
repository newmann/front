'use strict';

const proxyConfig = [
  {
    context: '/api',
    pathRewrite: { '^/api': '' },
    target: 'http://localhost:8030',
    changeOrigin: true,
    secure: false,
    logLevel: "debug"
  }
];

module.exports = proxyConfig;
