var fs = require('fs');

module.exports = function() {
	if (!fs.existsSync('/dev/stdout')) return process.stdout;

	var stream = fs.createWriteStream('/dev/stdout');
	stream._isStdio = true;
	stream.isTTY = process.stdout.isTTY;
	stream.end = function() {
		throw new Error('process.stdout cannot be closed.');
	};

	return stream;
}();
