const port = require('./ecosystem.ports.js');
const project = require('./package.json');

module.exports = {
  apps: [
    {
      name: `${project.name}:app`,
      script: 'node_modules/@angular/cli/bin/ng',
      args: `serve --port ${port.app}`,
      exec_mode: 'fork'
    },
    {
      name: `${project.name}:api`,
      script: 'src/api/api.js',
      exec_mode: 'fork',
      watch: 'src/api',
      env: {
        PORT: port.api
      }
    },
    {
      name: `${project.name}:proxy`,
      script: 'src/proxy/proxy.js',
      exec_mode: 'fork',
      watch: 'src/proxy',
      env: {
        PORT: port.proxy
      }
    }
  ]
};
