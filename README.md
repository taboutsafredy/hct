
# Huffman Compression Tool (hct)

**hct** is a command-line tool for text file encoding and decoding in NodeJS.<br>
Huffman coding is a popular algorithm for lossless data compression, create by David Albert Huffman in 1952.

![Hct Github Demo](./assets/hct-github-demo.gif)

## Features

- **Efficient Compression and Decompression**<br>
Employs the Huffman coding algorithm to efficiently compress and decompress text files, C, JS, PHP, and other text-based files, providing significant size reduction without data loss. **Inspired by the algorithm created by David Albert Huffman in 1952**.

- **Support for Multiple File Types**<br>
Handles various file types, including text files, **C**, **JavaScript**, **PHP**, and more.

- **Simple Command Line Usage**<br>
The streamlined command-line interface makes hct accessible to users of all levels, offering intuitive commands and key options for precise control over the compression and decompression processes.

- **Cross-Platform Support**<br>
hct is compatible with multiple operating systems, offering complete flexibility for users. Whether you're working on **Windows**, **Linux**, or **macOS**.

## Installation

To install the hct tool globally 💻
```bash
npm install -g https://github.com/taboutsafredy/hct.git
```

## Usage

- **Huff** command<br>
To compress file :
```bash
hct huff <filePath>
```
This will automatically create `filename.huff` file in your current working directory.<br>

- **Unhuff** command<br>
To decompress .huff file:
```bash
hct unhuff <filePath>
```
This will automatically create `filename.unhuff.${orginal extension}` file in your current working directory.<br>

- **Compare file sizes**<br>

```bash
ls -lh <filePath> filename.huff
```
You will see like size of *filename.huff* is ~ **56.7%** of original file size.🗃️

## Support

If you find this plugin helpful and want to support my work, you can just **Star ⭐** this repository.

