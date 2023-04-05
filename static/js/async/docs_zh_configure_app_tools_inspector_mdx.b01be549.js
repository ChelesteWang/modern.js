(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_tools_inspector_mdx"],{7193:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var c=s("12151"),r=s("21447");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过 ",(0,c.jsx)(n.code,{children:"tools.inspector"})," 开启或者配置 webpack 调试工具 ",(0,c.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["当配置不为 ",(0,c.jsx)(n.code,{children:"undefined"})," 时，则表示开启了 ",(0,c.jsx)(n.code,{children:"webpack-inspector"}),"，此时 ",(0,c.jsx)(n.code,{children:"tools.inspector"})," 的类型可以为 ",(0,c.jsx)(n.code,{children:"Object"})," 或者 ",(0,c.jsx)(n.code,{children:"Function"}),"。"]}),"\n",(0,c.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"tools.inspector"})," 的值为 ",(0,c.jsx)(n.code,{children:"Object"})," 类型时，会与默认配置通过 Object.assign 合并。比如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // 默认端口为 3333\n      port: 3334,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"tools.inspector"})," 为 Function 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果。比如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      // 修改端口号\n      config.port = 3333;\n    },\n  },\n};\n"})})]})})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}},3952:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return d},default:function(){return a}});var c=s("12151"),r=s("21447"),t=s.ir(s("7193"));let o={sidebar_label:"inspector"},i="tools.inspector",d=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"tools.inspector",children:["tools.inspector",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.inspector",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsinspector",target:"_blank",rel:"noopener noreferrer",children:"tools.inspector"}),"。\n"]})]}),"\n","\n",(0,c.jsx)(t.default,{})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);