
# Huffman Compression Tool (hct)

**hct** is a command-line tool for test file encoding and decoding in NodeJS.<br>
Huffman coding is a popular algorithm for lossless data compression, create by David Albert Huffman in 1952.


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
This will automatically create a filename_decompressed.txt file in your current working directory.

### Compare file sizes

```bash
ls -lh <filePath> filename_compressed.huff
```
You will see like size of *filename_compressed.huff* is ~ **43.37%** of original file size 🗃️

