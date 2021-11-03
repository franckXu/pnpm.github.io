"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5205],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5571:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var r=n(98),i=n(6862),l=(n(9496),n(9613)),a=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,c={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.3.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/ja/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/ja/next/cli/install-test"},next:{title:"pnpm list",permalink:"/ja/next/cli/list"}},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[],level:3},{value:"--fix",id:"--fix",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.3.0"),(0,l.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u65e2\u77e5\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u554f\u984c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u554f\u984c\u304c\u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u5358\u7d14\u306a\u66f4\u65b0\u3067\u3059\u3079\u3066\u306e\u554f\u984c\u304c\u4fee\u6b63\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/package_json#pnpmoverrides"},"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9")," \u3092\u4f7f\u7528\u3057\u3066\u3001\u8106\u5f31\u6027\u306e\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5f37\u5236\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \u306b\u8106\u5f31\u6027\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u4f7f\u7528\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0")," \u3092\u5f37\u5236\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u307e\u305f\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"low"),", ",(0,l.kt)("strong",{parentName:"li"},"moderate"),", ",(0,l.kt)("strong",{parentName:"li"},"high"),", ",(0,l.kt)("strong",{parentName:"li"},"critical")),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"low"))),(0,l.kt)("p",null,"\u76e3\u67fb\u30ec\u30d9\u30eb\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"<severity>")," \u4ee5\u4e0a\u306e\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u306e\u307f\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--fix"},"--fix"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.11.0"),(0,l.kt)("p",null,"\u8106\u5f31\u3067\u306a\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u3092\u5f37\u5236\u3059\u308b\u305f\u3081\u306b\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u30d5\u30a1\u30a4\u30eb\u306b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u30fb\u8ffd\u8a18\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"JSON\u5f62\u5f0f\u3067\u76e3\u67fb\u30ec\u30dd\u30fc\u30c8\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"devDependencies \u306e\u307f\u3092\u76e3\u67fb\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u306e dependencies \u306e\u307f\u3092\u76e3\u67fb\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306e\u76e3\u67fb\u3092\u3057\u307e\u305b\u3093\u3002"),(0,l.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.7.1"),(0,l.kt)("p",null,"\u30ec\u30b8\u30b9\u30c8\u30ea\u304c200\u4ee5\u5916\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3067\u5fdc\u7b54\u3059\u308b\u5834\u5408\u3067\u3042\u3063\u3066\u3082\u3001\u30d7\u30ed\u30bb\u30b9\u30920\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u5b9f\u969b\u306b\u898b\u3064\u304b\u3063\u305f\u8106\u5f31\u6027\u3092\u6b63\u5e38\u306b\u8fd4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5931\u6557\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);