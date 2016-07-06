//var h1 = require('highlight').Highlight;

require('./style.css');
//require('./node_modules/highlight.js/styles/default.css');
//require('./node_modules/highlight.js/styles/rainbow.css');

var hljs = require('highlight.js');
//var hljs = require("./node_modules/highlight.js/lib/highlight.js");

//require("./node_modules/highlight/lib/highlight.js");
//require('file?name=[name].[ext]!./index.html';
//require('./index.html');
document.write(require("./content.js"));

hljs.initHighlightingOnLoad();
