
# Huffman Compression Tool (hct)

Huffman Compression Tool (hct) is a command-line tool for Huffman encoding and decoding in NodeJS. Huffman coding is a popular algorithm for lossless data compression.
Create by David Albert Huffman in 1952.


## 📝 Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Huff Command](#huff-command)
    - [Unhuff Command](#unhuff-command)
3. [Code Examples](#code-examples)
4. [Video Example](#video-example)

## 📥 Installation

```bash
npm install -g https://github.com/th3fr3dy/HuffmanCompressionTool.git
```
This will install the hct tool globally 💻

## 👨‍💻 Usage

### Huff command 
To compress a file :

```bash
hct huff <filePath>
```
This will automatically create a filename_compressed.huff file in your current working directory.

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

## ♻️ Code examples

### huff - To compress 🗜️
```bash
hct huff test.txt
```

### unhuff - To decompress 🔩
```bash
hct unhuff test_compressed.huff
```

## 🎥 Video example 
