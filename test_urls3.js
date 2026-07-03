const https = require('https');
https.get('https://assets.mixkit.co/videos/preview/mixkit-abstract-gradient-background-in-red-and-orange-hues-11586-large.mp4', (res) => {
  console.log(res.statusCode);
});
