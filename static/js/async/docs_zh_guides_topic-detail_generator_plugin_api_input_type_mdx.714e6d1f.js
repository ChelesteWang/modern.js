(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_type_mdx"],{56262:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return t},toc:function(){return d},default:function(){return c}});var a=r("12151"),i=r("21447");let s={sidebar_position:1},t="自定义输入相关类型定义",d=[{text:"Input",depth:2,id:"input"},{text:"type",depth:3,id:"type"},{text:"name",depth:3,id:"name"},{text:"title",depth:3,id:"title"},{text:"default",depth:3,id:"default"},{text:"enum",depth:3,id:"enum"},{text:"x-validate",depth:3,id:"x-validate"},{text:"x-reactions",depth:3,id:"x-reactions"},{text:"properties",depth:3,id:"properties"},{text:"示例",depth:2,id:"示例"}];function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",code:"code",ul:"ul",li:"li",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"自定义输入相关类型定义",children:["自定义输入相关类型定义",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义输入相关类型定义",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"input",children:["Input",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js Input 输入类型采用了开源的 ",(0,a.jsx)(n.a,{href:"https://formilyjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Formily"})," Schema 结果，支持了部分其 Schema 字段。"]}),"\n",(0,a.jsxs)(n.h3,{id:"type",children:["type",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["schema 类型，目前生成器插件输入支持的类型为 ",(0,a.jsx)(n.code,{children:"string"}),"、",(0,a.jsx)(n.code,{children:"number"})," 和 ",(0,a.jsx)(n.code,{children:"object"})," 类型。其中 ",(0,a.jsx)(n.code,{children:"object"})," 用于实现 schema 嵌套，需要和 ",(0,a.jsx)(n.code,{children:"properties"})," 配合使用。"]}),"\n",(0,a.jsxs)(n.h3,{id:"name",children:["name",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"schema 的关键字。"}),"\n",(0,a.jsxs)(n.h3,{id:"title",children:["title",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"schema 的展示名称。"}),"\n",(0,a.jsxs)(n.h3,{id:"default",children:["default",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"schema 默认值。"}),"\n",(0,a.jsxs)(n.h3,{id:"enum",children:["enum",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"schema 如果为选择类型，该字段用于定义选项内容。"}),"\n",(0,a.jsx)(n.p,{children:"每个选项支持两个字段："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"value: 选项值。"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"label: 展示名称。"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"x-validate",children:["x-validate",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validate",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["schema 的验证规则。这里支持 Formily 的校验方式，具体可参考 ",(0,a.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"noopener noreferrer",children:"Formily 表单校验"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"x-reactions",children:["x-reactions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["schema 字段联动。这里支持 Formily 的联动方式，具体可参考 ",(0,a.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"noopener noreferrer",children:"Formily 实现联动逻辑"}),"。"]}),"\n",(0,a.jsxs)(n.h3,{id:"properties",children:["properties",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["当 schema 类型为 ",(0,a.jsx)(n.code,{children:"object"})," 时，定义其子表单。"]}),"\n",(0,a.jsxs)(n.h2,{id:"示例",children:["示例",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"const schema = {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '开发语言',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n};\n"})})]})})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}}}]);