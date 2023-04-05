(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_html_favicon-by-entries_mdx"],{47970:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("12151"),i=s("21447");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Set different favicon for different pages."}),"\n",(0,r.jsxs)(n.p,{children:["The usage is same as ",(0,r.jsx)(n.code,{children:"favicon"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"faviconByEntries"})," will overrides the value set in ",(0,r.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/default.png',\n    faviconByEntries: {\n      foo: './src/assets/foo.png',\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"After recompiling, you will see:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The favicon for page ",(0,r.jsx)(n.code,{children:"foo"})," is ",(0,r.jsx)(n.code,{children:"./src/assets/foo.png"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The favicon for other pages is ",(0,r.jsx)(n.code,{children:"./src/assets/default.png"}),"."]}),"\n"]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},33704:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return o},default:function(){return d}});var r=s("12151"),i=s("21447"),t=s.ir(s("47970"));let c={sidebar_label:"faviconByEntries"},a="html.faviconByEntries",o=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"html.faviconbyentries",children:["html.faviconByEntries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html.faviconbyentries",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlfaviconbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.faviconByEntries"}),".\n"]})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);