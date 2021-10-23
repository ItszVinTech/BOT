const http = require("http");
http.createServer((_, res) => res.end('Bot is Active')).listen(8080)