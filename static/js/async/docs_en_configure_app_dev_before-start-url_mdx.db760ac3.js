(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_dev_before-start-url_mdx"],{40566:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=r("12151"),s=r("21447");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"() => Promise<void> | void"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.beforeStartUrl"})," is used to execute a callback function before opening the ",(0,t.jsx)(n.code,{children:"startUrl"}),", this config needs to be used together with ",(0,t.jsx)(n.code,{children:"dev.startUrl"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: true,\n    beforeStartUrl: async () => {\n      await doSomeThing();\n    },\n  },\n};\n"})})]})})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},43430:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return c},default:function(){return a}});var t=r("12151"),s=r("21447"),i=r.ir(r("40566"));let o={sidebar_label:"beforeStartUrl"},d="dev.beforeStartUrl",c=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"dev.beforestarturl",children:["dev.beforeStartUrl",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev.beforestarturl",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devbeforestarturl",target:"_blank",rel:"noopener noreferrer",children:"dev.beforeStartUrl"}),".\n"]})]}),"\n","\n",(0,t.jsx)(i.default,{})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);