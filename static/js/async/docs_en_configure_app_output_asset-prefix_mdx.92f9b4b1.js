(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_asset-prefix_mdx"],{52498:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var t=n("12151"),r=n("21447");function i(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When using CDN in the production environment, you can use this option to set the URL prefix of static assets, similar to the ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," config of webpack."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,t.jsxs)(s.p,{children:["This config is only used in the production environment. In the development environment, please use the ",(0,t.jsx)(s.code,{children:"dev.assetPrefix"})," to set the URL prefix."]}),"\n",(0,t.jsxs)(s.p,{children:["After setting, the URLs of JavaScript, CSS and other static files will be prefixed with ",(0,t.jsx)(s.code,{children:"output.assetPrefix"}),":"]}),"\n",(0,t.jsxs)(s.h3,{id:"example",children:["Example",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"After building, you can see that the JS files are loaded from:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"\n></script>\n'})})]})})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},39588:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return a},toc:function(){return o},default:function(){return d}});var t=n("12151"),r=n("21447"),i=n.ir(n("52498"));let c={sidebar_label:"assetPrefix"},a="output.assetPrefix",o=[];function l(e){let s=Object.assign({h1:"h1",a:"a",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"output.assetprefix",children:["output.assetPrefix",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output.assetprefix",children:"#"})]}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive tip",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(s.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputassetprefix",target:"_blank",rel:"noopener noreferrer",children:"output.assetPrefix"}),".\n"]})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);