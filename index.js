const canned = require('canned')
,   http = require('http')
,   opts = {
  logger: process.stdout,
  cors: true,
  cors_headers: ['Content-Type', 'Location'],
  response_delay: 1500
}

can = canned('./server', opts)

http.createServer(can).listen(5000)