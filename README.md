# Sites to PDF
A PhantomJS script to print a list of sites into PDF files.

## Usage

Copy all files in this repository, as well as [phantomjs](http://phantomjs.org/), to a single directory and run the following command in your terminal.

```
./phantomjs sitestopdf.js SITELIST
```

A sample site list text file is provided in this repository.  All PDF files will be created in a new subfolder called `pdfs/`.

## Arguments
__FILELIST__: A text file containing a list of sites to be converted.  Sites should be separated by line breaks.
