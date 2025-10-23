const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const port = 8123;

const server = http.createServer((req, res) => {
  const requestPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(rootDir, requestPath);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = ext === '.html' ? 'text/html; charset=utf-8' :
      ext === '.css' ? 'text/css; charset=utf-8' :
      ext === '.js' ? 'application/javascript; charset=utf-8' :
      'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
});

server.listen(port, '127.0.0.1', () => {
  http.get(`http://127.0.0.1:${port}/index.html`, (response) => {
    const { statusCode } = response;
    if (statusCode !== 200) {
      console.error(`Échec: statut ${statusCode}`);
      server.close(() => process.exit(1));
      return;
    }
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end', () => {
      const hasMeta = body.includes('<meta name="offline-ready" content="true"');
      if (!hasMeta) {
        console.error('La balise <meta name="offline-ready" content="true"> est absente.');
        server.close(() => process.exit(1));
        return;
      }
      console.log('Test réussi: index.html répond et contient la balise meta offline-ready.');
      server.close(() => process.exit(0));
    });
  }).on('error', (error) => {
    console.error('Erreur de requête HTTP:', error);
    server.close(() => process.exit(1));
  });
});
