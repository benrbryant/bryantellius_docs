# Node Streams

## What are streams?

- Streams are collections of data that are available as **chunks**, opposed to available as a whole.
- Built-in Node modules have streaming interfaces
- All streams are instances of an EventEmitter
- 4 types of streams:
  1. Readable - read only
  2. Writable - write only
  3. Duplex - read and write
  4. Transform - read, transform, then write
- `pipe()` method moves chunks from readable (source) to writable (destination) streams
  - Returns the destination stream, which enables pipe chaining
  - Easiest way to 'consume' streams
  - Automatically handles errors, end-of-files, and mixed speed streams (one stream is faster than the other)
- Streams can also be consumed with events
  - Readable stream events and methods:
    1. "data", "end", "error", "close", "readable"
    2. `pipe()`, `unpipe()`, `wrap()`, `destroy()`, `read()`, `unshift()`, `resume()`, `pause()`, `isPaused()`, `setEncoding()`
  - Writable stream events and methods:
    1. "drain", "finish", "error", "close", "pipe", "unpipe"
    2. `write()`, `destroy()`, `end()`, `cork()`, `uncork()`, `setDefaultEncoding()`
- Readable streams have two main modes, **paused** and **flowing**
  - Start in **paused** by default, but switches to **flowing** when we add a event listening for thad read "data" event
- Writable streams can be implemented by importing the 'Writable' class and using the constructor

  - Pass in an object similiar to the following, with `chunk`, `encoding`, and `callback` as parameters

  ```js
  const { Writable } = require("stream");
  const outStream = new Writable({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    },
  });

  process.stdin.pipe(outStream);
  ```

- Readable streams can be implemented by importing the 'Readable' class and using the constructor

  - Pass in an object similiar to the following, with `chunk`, `encoding`, and `callback` as parameters

  ```js
  const inStream = new Readable({
    read(size) {
      this.push(String.fromCharCode(this.currentCharCode++));
      if (this.currentCharCode > 90) {
        this.push(null);
      }
    },
  });
  ```

- Transform streams can be implemented by importing the 'Transform' class and using the constructor

  - Pass in an object similiar to the following, with `chunk`, `encoding`, and `callback` as parameters

  ```js
  const { Transform } = require("stream");
  const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    },
  });
  process.stdin.pipe(upperCaseTr).pipe(process.stdout);
  ```

- Duplex streams can be implemented by importing the 'Duplex' class and using the constructor

  - Pass in an object similiar to the following, with `chunk`, `encoding`, and `callback` as parameters

  ```js
  const { Duplex } = require("stream");

  const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    },

    read(size) {
      this.push(String.fromCharCode(this.currentCharCode++));
      if (this.currentCharCode > 90) {
        this.push(null);
      }
    },
  });

  inoutStream.currentCharCode = 65;

  process.stdin.pipe(inoutStream).pipe(process.stdout);
  ```

- Streams accept Buffer/String values, but there is an `objectMode` flag when implementing streams to accept objects. Below is an example:

```js
const { Transform } = require("stream");

const commaSplitter = new Transform({
  readableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split(","));
    callback();
  },
});

const arrayToObject = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    const obj = {};
    for (let i = 0; i < chunk.length; i += 2) {
      obj[chunk[i]] = chunk[i + 1];
    }
    this.push(obj);
    callback();
  },
});

const objectToString = new Transform({
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    this.push(JSON.stringify(chunk) + "\n");
    callback();
  },
});
```

- From [jscomplete]("https://jscomplete.com/learn/node-beyond-basics/node-streams")
