(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_model_use-static-model_mdx"],{92940:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return l}});var t=s("12151"),c=s("21447"),d=s.ir(s("67291"));let i={sidebar_position:3,title:"useStaticModel"},o="useStaticModel",a=[{text:"示例",depth:4,id:"示例"}];function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"usestaticmodel",children:["useStaticModel",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"})]}),"\n","\n",(0,t.jsx)(d.default,{}),"\n",(0,t.jsxs)(n.p,{children:["如果想在组件里以 React Hook 的形式消费某个 Model，并能随时获取到当前最新的状态，但又不希望 Model 状态更新的时候，引起组件的重新渲染，可以使用 ",(0,t.jsx)(n.code,{children:"useStaticModel"}),"。",(0,t.jsx)(n.code,{children:"useStaticModel"})," API 形式上与 ",(0,t.jsx)(n.code,{children:"useModel"})," 完全一致。具体使用请参考 ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/model/use-model",children:(0,t.jsx)(n.code,{children:"useModel"})}),"。"]}),"\n",(0,t.jsxs)(n.p,{children:["为了保证总是能获取到最新状态，注意不要对返回的 ",(0,t.jsx)(n.code,{children:"state"})," 解构。"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function App() {\n  // ❌ 不能解构 state，但可以解构 actions。\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // ✅ 这才是正确使用姿势。\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username;\n  }, []);\n}\n"})})]})}),"\n",(0,t.jsxs)(n.h4,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["如下 ",(0,t.jsx)(n.code,{children:"App"})," 组件消费了 ",(0,t.jsx)(n.code,{children:"userModel"})," 的状态，但没有直接在 JSX 里使用。可以发现，",(0,t.jsx)(n.code,{children:"userModel"})," 状态的改变没有必要引起组件重新渲染，这种情况可以使用 ",(0,t.jsx)(n.code,{children:"useStaticModel"})," 进行优化。"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    // 统计 UV 数据\n    send('pageview', { user: state.user });\n  }, [state]);\n\n  return <div>Hello</div>;\n}\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"更多参考"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"}),"\n"]})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}}]);