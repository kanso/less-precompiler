## Usage

Add `less-precompiler` to your dependencies section in `kanso.json`.

```javascript
  ...
  "dependencies": {
    "less-precompiler": null,
    ...
  }
```

To tell the precompiler which less files to transform, add a section called `less`
to `kanso.json` and put in the files you want to process.

```javascript
  ...
  "less": {
    "compile": [ "css/style.less", ... ]
  }
```

In this case, less will compile the file `css/style.less` to `css/style.css` and kanso will
upload it to `_attachments/css/style.css`.

###Compression

The less-preprocessor can be told to compress the output through the `compress` flag.

```javascript
  ...
  "less": {
    "compile": [ ... ],
    "compress": true
  }
```