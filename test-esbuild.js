const { execSync } = require('child_process');
execSync('node dist/server.cjs', {stdio: 'inherit'});
