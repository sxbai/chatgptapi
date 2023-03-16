const http = require('http');

const https = require('https');



export default function handler(req, res) {

  const options = {

   hostname: 'api.openai.com',

   protocol:'https:',

   port: 443,

   path: '/v1/chat/completions',

   method: 'post',

   headers: {'authorization':req.headers.authorization,

'Content-Type':req.headers['content-type']},

   json:true

  };

  

  const proxyReq = https.request(options, (proxyRes) => {

   res.writeHead(proxyRes.statusCode, proxyRes.headers);

   proxyRes.pipe(res);

  });

  

  req.pipe(proxyReq); 

}
