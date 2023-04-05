(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_updateModernConfig_mdx"],{39380:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return r},default:function(){return c}});var t=i("12151"),d=i("21447");let o={sidebar_position:8},a="updateModernConfig",r=[{text:"updateInfo",depth:2,id:"updateinfo"}];function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"updatemodernconfig",children:["updateModernConfig",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatemodernconfig",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Update the ",(0,t.jsx)(n.code,{children:"modernConfig"})," field in ",(0,t.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This method is available on the ",(0,t.jsx)(n.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,t.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"updateinfo",children:["updateInfo",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinfo",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Field update information."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This function is the package of updateJSONFile, which will automatically update the ",(0,t.jsx)(n.code,{children:"modernConfig"})," field of ",(0,t.jsx)(n.code,{children:"package.json"}),". Just fill in the update information relative to ",(0,t.jsx)(n.code,{children:"modernConfig"})," in the updateInfo.","\n"]})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}}}]);