define("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/services/htmlHover",function(e,n){"use strict";function t(e,n,t){function s(e,n,t){e=e.toLowerCase();for(var a=function(a){var r=null;return a.provideTags().forEach(function(a){if(a.name.toLowerCase()===e.toLowerCase()){var l=t?"<"+e+">":"</"+e+">",s=a.description||"";r={contents:[{language:"html",value:l},o.MarkedString.fromPlainText(s)],range:n}}}),r?{value:r}:void 0},r=0,l=i;r<l.length;r++){var s=l[r],d=a(s);if("object"==typeof d)return d.value}return null}function d(n,t){for(var o=a.createScanner(e.getText(),t),l=o.scan();l!==r.TokenType.EOS&&(o.getTokenEnd()<g||o.getTokenEnd()===g&&l!==n);)l=o.scan();return l===n&&g<=o.getTokenEnd()?{start:e.positionAt(o.getTokenOffset()),end:e.positionAt(o.getTokenEnd())}:null}var g=e.offsetAt(n),u=t.findNodeAt(g);if(!u||!u.tag)return null;var i=l.getAllDataProviders().filter(function(n){return n.isApplicable(e.languageId)});if(u.endTagStart&&g>=u.endTagStart){var v=d(r.TokenType.EndTag,u.endTagStart);return v?s(u.tag,v,!1):null}var c=d(r.TokenType.StartTag,u.start);return c?s(u.tag,c,!0):null}Object.defineProperty(n,"__esModule",{value:!0});var a=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/parser/htmlScanner"),o=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main"),r=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/htmlLanguageTypes"),l=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/languageFacts/builtinDataProviders");n.doHover=t});