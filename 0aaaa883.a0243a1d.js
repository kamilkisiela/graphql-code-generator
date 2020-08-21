(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(9),o=(n(0),n(320)),c={id:"add",title:"Add"},p={unversionedId:"plugins/add",id:"plugins/add",isDocsHomePage:!1,title:"Add",description:"add plugin adds custom text to your output file.",source:"@site/docs/plugins/add.md",permalink:"/docs/plugins/add",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/add.md",sidebar:"sidebar",previous:{title:"JSDoc",permalink:"/docs/plugins/jsdoc"},next:{title:"Time",permalink:"/docs/plugins/time"}},i=[{value:"Examples",id:"examples",children:[]}],l={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"add")," plugin adds custom text to your output file."),Object(o.b)("p",null,"You can use this plugin to add custom code, imports, comments and more to your output file."),Object(o.b)("p",null,Object(o.b)("h2",{parentName:"p"},"Installation"),Object(o.b)("img",{alt:"add plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/add?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/add\n")))),Object(o.b)("h2",{parentName:"p"},"API Reference"),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"placement")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string (values: append, content, prepend)"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"prepend")),Object(o.b)("p",{parentName:"p"},"Allow you to choose where to add the content."),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"content")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string[] | string")),Object(o.b)("p",{parentName:"p"},"The actual content you wish to add, either a string or array of strings.\nYou can also specify a path to a local file and the content if it will be loaded by codegen.")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\ngenerates:\n  path/to/file.ts:\n    plugins:\n      - add:\n          content: '/* eslint-disable */'\n      - typescript\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\ngenerates:\n  path/to/file.ts:\n    plugins:\n      - add:\n          content:\n            - 'declare namespace GraphQL {'\n      - add:\n          placement: 'append'\n          content: '}'\n      - typescript\n")))}d.isMDXComponent=!0},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?r.a.createElement(u,p(p({ref:t},l),{},{components:n})):r.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);