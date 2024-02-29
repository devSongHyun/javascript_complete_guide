const http = require("http");

const server = http.createServer((request, response) => {
  let body = [];
  // on - 리스너 추가
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    let userName = "Unknown user";
    if (body) {
      userName = body.split("=")[1];
    }
    response.setHeader("Content-TYpe", "text/html");
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);