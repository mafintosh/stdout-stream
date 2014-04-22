# stdout-stream

Non-blocking stdout stream

	npm install stdout-stream

[![build status](https://secure.travis-ci.org/mafintosh/stdout-stream.png)](http://travis-ci.org/mafintosh/stdout-stream)

## Rant

Try saving this example as `example.js`

``` js
console.error('start');
process.stdout.write(new Buffer(1024*1024));
console.error('end');
```

And run the following program

```
node example.js | sleep 1000
```

The program will never print `end` since stdout in node currently is blocking - even when its being piped (!).

stdout-stream tries to fix this by being a stream that writes to stdout but never blocks

## Usage

``` js
var stdout = require('stdout-stream');

stdout.write('hello\n'); // write should NEVER block
stdout.write('non-blocking\n')
stdout.write('world\n');
```

`stdout-stream` should behave in the same way as `process.stdout` (i.e. do not end on pipe etc)

## License

MIT
