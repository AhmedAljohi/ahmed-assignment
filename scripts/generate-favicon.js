/**
 * Generates a minimal 16x16 favicon.ico from the brand color #0B4332.
 * Run: node scripts/generate-favicon.js
 */
const fs = require('fs');
const path = require('path');

// Brand color #0B4332 -> BGR (little-endian) + A
const R = 0x0b, G = 0x43, B = 0x32, A = 0xff;
const bgra = Buffer.from([B, G, R, A]);

// ICO: 6-byte header + 16-byte directory entry + image data
const width = 16;
const height = 16;
const bpp = 32;
const xorSize = width * height * (bpp / 8); // 1024
const andRowBytes = Math.ceil(width / 32) * 4; // 4
const andSize = andRowBytes * height; // 64
const dibHeaderSize = 40;
const imageSize = dibHeaderSize + xorSize + andSize;
const offset = 6 + 16; // 22

const out = [];

// ICONDIR
out.push(Buffer.from([0, 0, 1, 0, 1, 0]));

// ICONDIRENTRY
const entry = Buffer.alloc(16);
entry.writeUInt8(width, 0);
entry.writeUInt8(height, 1);
entry.writeUInt8(0, 2);
entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4);  // color planes
entry.writeUInt16LE(bpp, 6);
entry.writeUInt32LE(imageSize, 8);
entry.writeUInt32LE(offset, 12);
out.push(entry);

// BITMAPINFOHEADER (40 bytes)
const dib = Buffer.alloc(dibHeaderSize);
dib.writeUInt32LE(40, 0);           // header size
dib.writeInt32LE(width, 4);
dib.writeInt32LE(height * 2, 8);    // height * 2 for XOR+AND
dib.writeUInt16LE(1, 12);           // planes
dib.writeUInt16LE(bpp, 14);
dib.writeUInt32LE(0, 16);           // compression
dib.writeUInt32LE(xorSize + andSize, 20);
out.push(dib);

// XOR mask (32bpp, bottom-up): 16*16 pixels in brand color
const xorMask = Buffer.alloc(xorSize);
for (let i = 0; i < xorSize; i += 4) {
  bgra.copy(xorMask, i);
}
out.push(xorMask);

// AND mask (1bpp, all transparent)
out.push(Buffer.alloc(andSize, 0));

const ico = Buffer.concat(out);
const outPath = path.join(__dirname, '..', 'src', 'app', 'favicon.ico');
fs.writeFileSync(outPath, ico);
console.log('Written:', outPath);
