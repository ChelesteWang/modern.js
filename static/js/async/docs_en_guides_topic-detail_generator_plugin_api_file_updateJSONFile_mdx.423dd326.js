(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_updateJSONFile_mdx"],{90857:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return l},default:function(){return c}});var a=i("12151"),s=i("21447");let t={sidebar_position:6},d="updateJSONFile",l=[{text:"fileName",depth:2,id:"filename"},{text:"updateInfo",depth:2,id:"updateinfo"}];function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"updatejsonfile",children:["updateJSONFile",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatejsonfile",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Update the JSON file fields."}),"\n",(0,a.jsx)(n.p,{children:"This method is suitable for JSON file types, and can batch update field values in JSON files."}),"\n",(0,a.jsxs)(n.p,{children:["This method is available on the ",(0,a.jsx)(n.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,a.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  updateJSONFile: (\n    fileName: string,\n    updateInfo: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h2,{id:"filename",children:["fileName",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"The filename or file path of the JSON file."}),"\n",(0,a.jsxs)(n.h2,{id:"updateinfo",children:["updateInfo",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinfo",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Field update information."}),"\n",(0,a.jsx)(n.p,{children:"This information is represented in Record form."}),"\n",(0,a.jsx)(n.p,{children:"For example, the name field needs to be updated:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  name: 'new name',\n});\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"Nested fields need to be updated:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  'dependencies.name': 'new name',\n});\n"})})]})}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive warning",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:["Pay attention to the field name when updating the nested field. If it is not a total volume update, the nested key should also be written into the field name.","\n"]})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}}}]);