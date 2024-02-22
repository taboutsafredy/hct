
# Huffman Compression Tool (hct)

**hct** is a command-line tool for test file encoding and decoding in NodeJS.<br>
Huffman coding is a popular algorithm for lossless data compression, create by David Albert Huffman in 1952.

![Hct Github Demo](./assets/hct-github-demo.gif)

## Features

- Take screenshots of nodes in the canvas.
- Easy-to-use plugin.

## Installation

```bash
npm install -g https://github.com/th3fr3dy/hct.git
```
This will install the hct tool globally 💻

## Usage

### Huff command 
To compress a file :

```bash
hct huff <filePath>
```
This will automatically create `filename.huff` file in your current working directory.

### Unhuff command
To decompress a file:

```bash
hct unhuff <filePath>
```
This will automatically create a `filename.unhuff.${orginal extension}` file in your current working directory.

### Compare file sizes

```bash
ls -lh <filePath> filename.huff
```
You will see like size of *filename.huff* is ~ **56.7%** of original file size.🗃️

## Support

If you find this plugin helpful and want to support my work, you can just **Star ⭐** this repository.

