(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_model_use-local-model_mdx"],{57751:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return a},default:function(){return r}});var c=s("12151"),d=s("21447"),o=s.ir(s("67291"));let l={sidebar_position:4,title:"useLocalModel"},t="useLocalModel",a=[{text:"示例",depth:4,id:"示例"}];function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h4:"h4",div:"div",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"uselocalmodel",children:["useLocalModel",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocalmodel",children:"#"})]}),"\n","\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsxs)(n.p,{children:["用于把 Model 中的 State 作为局部状态使用，效果类似 React 的 ",(0,c.jsx)(n.code,{children:"useState"}),"。",(0,c.jsx)(n.code,{children:"useLocalModel"})," API 形式上与 ",(0,c.jsx)(n.code,{children:"useModel"})," 完全一致。具体使用请参考 ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/model/use-model",children:(0,c.jsx)(n.code,{children:"useModel"})}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["上面通过 ",(0,c.jsx)(n.code,{children:"useLocalModel"})," 加载了两次 ",(0,c.jsx)(n.code,{children:"modelA"}),"，因为 ",(0,c.jsx)(n.code,{children:"useLocalModel"})," 消费的是局部状态，所以 ",(0,c.jsx)(n.code,{children:"state"})," 和 ",(0,c.jsx)(n.code,{children:"state1"})," 也是完全隔离的。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"}),"\n"]})]})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);