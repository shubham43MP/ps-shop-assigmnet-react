const canned = require('canned')
,   http = require('http')
,   opts = {
  logger: process.stdout,
  cors: true,
  cors_headers: ['Content-Type', 'Location'],
  response_delay: 800
}

can = canned('./server', opts)

http.createServer(can).listen(5000)