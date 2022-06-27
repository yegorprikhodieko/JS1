const http = require('http')
const url = require('url')
let PORT = 3000
let userName = "Prikhodieko Yegor";
http
  .createServer(function (request, response) {
	const queryObject = url.parse(request.url, true).query;

	const a = Number(queryObject["a"]);
 	const b = Number(queryObject["b"]);
	const operations = {
		Summa: a + b,
		Substuct: a - b,
		Divide: a / b,
		Muliply: a * b,
	};
	if (!a || !b) {
		response.statusCode = 400;
		const error = {
			status: response.statusCode,
			message: "Write numbers: a, b",
		};
		response.end(JSON.stringify(error, null, 4));
	}
	response.statusCode = 200;
	response.write(userName);
	response.end(JSON.stringify(operations, null, 4));
  })
  .listen(PORT, '127.0.0.1', function () {
    console.log(
      `Сервер начал прослушивание запросов на порту ${PORT}`
    )
  })