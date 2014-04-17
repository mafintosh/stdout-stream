var fs = require('fs');

var exists = function(path) {
	try {
		return fs.existsSync(path);
	} catch (err) {
		return false;
	}
};

module.exports = function() {
	if (!exists('/dev/stdout')) return process.stdout;

	var stream = fs.createWriteStream('/dev/stdout');
	stream._isStdio = true;
	stream.isTTY = process.stdout.isTTY;
	stream.end = function() {
		throw new Error('process.stdout cannot be closed.');
	};

	return stream;
}();
