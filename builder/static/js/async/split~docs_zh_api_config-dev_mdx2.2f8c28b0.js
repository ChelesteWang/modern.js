(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-dev_mdx2"],{46040:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return o},default:function(){return a}});var t=s("12151"),r=s("21447");let c={},l="",o=[{text:"端口号占位符",depth:3,id:"端口号占位符"}];function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.startUrl"})," 用于设置 Dev Server 启动时自动在浏览器中打开的页面 URL。"]}),"\n",(0,t.jsx)(n.p,{children:"默认情况下，Dev Server 启动时不会打开任何页面。"}),"\n",(0,t.jsx)(n.p,{children:"你可以设置为如下的值："}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // 打开项目的默认页面，等价于 `http://localhost:<port>`\n    startUrl: true,\n    // 打开指定的页面\n    startUrl: 'http://localhost:8080',\n    // 打开多个页面\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"端口号占位符",children:["端口号占位符",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#端口号占位符",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["由于端口号可能会发生变动，你可以使用 ",(0,t.jsx)(n.code,{children:"<port>"})," 占位符来指代当前端口号，Builder 会自动将占位符替换为实际监听的端口号。"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);