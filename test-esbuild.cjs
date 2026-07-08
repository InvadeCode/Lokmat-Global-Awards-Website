const { execSync } = require('child_process');
execSync('PORT=3005 node dist/server.cjs', {stdio: 'inherit'});
