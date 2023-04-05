(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-output_mdx22"],{15842:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return r},toc:function(){return t},default:function(){return o}});var c=s("12151"),l=s("21447");let i={},r="",t=[{text:"示例",depth:3,id:"示例"}];function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"'linked' | 'inline' | 'none'"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"'linked'"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"配置 legal comment 的处理方式。"}),"\n",(0,c.jsxs)(n.p,{children:["legal comment 是 JS 或 CSS 文件中的一些特殊注释，这些注释包含 ",(0,c.jsx)(n.code,{children:"@license"})," 或 ",(0,c.jsx)(n.code,{children:"@preserve"}),"，或是以 ",(0,c.jsx)(n.code,{children:"//!"})," 开头。默认情况下，这些注释保留在输出文件中，因为这遵循了代码原作者的意图。"]}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过 ",(0,c.jsx)(n.code,{children:"legalComments"})," 来配置相关行为："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"linked"}),"：将所有 legal comments 移至 .LEGAL.txt 文件并通过注释链接到它们。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"inline"}),"：保留所有 legal comments。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"none"}),"：移除所有 legal comments。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"移除所有 legal comments。"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    legalComments: 'none',\n  },\n};\n"})})]})})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);