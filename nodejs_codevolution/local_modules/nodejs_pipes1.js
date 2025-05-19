const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("file1.txt", { encoding: "utf-8" });

readableStream.pipe(gzip).pipe(fs.WriteStream("file2.txt.gz"));

const writableStream = fs.createWriteStream("file5.txt", { encoding: "utf-8" });

readableStream.pipe(writableStream);
