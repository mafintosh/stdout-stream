var tape = require('tape');
var proc = require('child_process');
var path = require('path');

tape('print to stdout', function(t) {
	proc.exec(process.execPath+' '+path.join(__dirname,'fixtures','hello-world.js'), function(err, stdout) {
		t.ok(!err);
		t.same(stdout,'hello\nworld\n');
		t.end();
	});
});