const https = require('https');
const urls = [
  'https://www.lokmat.com/assets/images/lokmat-logo.png',
  'https://www.lokmat.com/assets/images/lokmat-logo.svg',
  'https://www.lokmat.com/static/images/logo.png',
  'https://www.lokmat.com/static/images/logo.svg',
  'https://cdn.lokmat.com/images/lokmat-logo.png',
  'https://cdn.lokmat.com/images/lokmat-logo.svg',
  'https://english.lokmat.com/assets/images/logo.svg',
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 500 }));
  });
}

async function run() {
  for (const url of urls) {
    const { status } = await checkUrl(url);
    if (status === 200) {
      console.log('SUCCESS: ' + url);
      return;
    }
  }
  console.log('NONE FOUND');
}
run();
