(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_security_check-syntax_mdx"],{46384:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=s("12151"),c=s("21447");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets: string[];\n      exclude?: RegExp | Array<RegExp>;\n    };\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"打包工具："})," ",(0,r.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"分析构建产物中是否存在当前浏览器范围下不兼容的高级语法。如果存在，会将详细信息打印在终端。"}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n    exclude: /node_modules\\/foo/,\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["如果将 ",(0,r.jsx)(n.code,{children:"security.checkSyntax"})," 指定为 ",(0,r.jsx)(n.code,{children:"true"})," 的话，则 targets 会被认定为项目设定的 browserslist，详情请参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:"设置浏览器范围"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"开启后将在生产环境下进行检测，当检测到不兼容的高级语法后，会将错误日志打印在终端，并退出当前构建流程。"}),"\n",(0,r.jsxs)(n.h3,{id:"错误日志",children:["错误日志",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#错误日志",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"错误日志的格式如下所示，包含代码来源文件、产物位置、错误原因、源代码等信息："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"error   [Syntax Checker] Find some syntax errors after production build:\n\n  ERROR#1:\n  source - /node_modules/foo/index.js:1:0\n  output - /Project/dist/static/js/main.3f7a4d7e.js:2:39400\n  reason - The keyword 'const' is reserved (2:39400)\n  code   - const foo = 'bar';\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"解决方法",children:["解决方法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#解决方法",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当检测到语法错误后，你可以通过以下方式来处理："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["如果你希望降级该语法，以保证代码具备良好的兼容性，可以通过 ",(0,r.jsx)(n.code,{children:"source.include"})," 配置来编译相应的模块。"]}),"\n",(0,r.jsx)(n.li,{children:"如果你不希望降级该语法，可以调整项目的 browserslist 范围，调整至与该语法相匹配的范围。"}),"\n",(0,r.jsxs)(n.li,{children:["如果你不希望对某些产物进行语法检查，可用 ",(0,r.jsx)(n.code,{children:"checkSyntax.exclude"})," 配置排除要检查的文件。"]}),"\n"]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},95339:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return a},default:function(){return o}});var r=s("12151"),c=s("21447"),t=s.ir(s("46384"));let i={sidebar_label:"checkSyntax"},d="security.checkSyntax",a=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"security.checksyntax",children:["security.checkSyntax",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security.checksyntax",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-security.html#securitychecksyntax",target:"_blank",rel:"noopener noreferrer",children:"security.checkSyntax"}),"。\n"]})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);