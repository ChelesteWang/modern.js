(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_hooks_config_upload_mdx"],{48541:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return t},toc:function(){return a},default:function(){return o}});var i=n("12151"),r=n("21447");let c={title:"upload/",sidebar_position:4},t="upload/",a=[{text:"Description",depth:2,id:"description"},{text:"Scene",depth:2,id:"scene"},{text:"Compression",depth:2,id:"compression"},{text:"More Usage",depth:2,id:"more-usage"}];function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"upload/",children:["upload/",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upload/",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Static resource files in any format can be placed in the ",(0,i.jsx)(s.code,{children:"upload/"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"description",children:["Description",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"In the development environment, the static resource files in this directory will be hosted in the '/upload' path. After building the application product, the files in this directory will be copied to the dist path."}),"\n",(0,i.jsx)(s.p,{children:"This file convention is mainly used for developers to use plugins to upload static resource files to the CDN."}),"\n",(0,i.jsxs)(s.h2,{id:"scene",children:["Scene",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#scene",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["For example, the SDK used by the project such as ",(0,i.jsx)(s.code,{children:"google-analysis.js"})," (usually requires http caching)."]}),"\n",(0,i.jsx)(s.p,{children:"Images, font files, generic CSS, etc."}),"\n",(0,i.jsxs)(s.h2,{id:"compression",children:["Compression",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#compression",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["If the file is a ",(0,i.jsx)(s.code,{children:".js"})," file, it will be automatically compressed when the production environment is built."]}),"\n",(0,i.jsxs)(s.p,{children:["If the file ends with ",(0,i.jsx)(s.code,{children:".min.js"}),", it will not compression."]}),"\n",(0,i.jsxs)(s.h2,{id:"more-usage",children:["More Usage",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#more-usage",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["In React components, this prefix can be added via ",(0,i.jsx)(s.a,{href:"/en/guides/basic-features/env-vars",children:"built-in environment variables"}),":"]}),"\n",(0,i.jsx)(s.div,{className:"language-",children:(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"code",children:(0,i.jsx)(s.code,{className:"language-tsx",children:"export default () => {\n  return (\n    <img src={`${process.env.ASSET_PREFIX}/upload/banner.png`}></img>\n  );\n};\n"})})]})}),"\n",(0,i.jsxs)(s.p,{children:["Whether in ",(0,i.jsx)(s.a,{href:"/en/guides/basic-features/html",children:"custom HTML"}),", or in any HTML file under ",(0,i.jsx)(s.a,{href:"/en/apis/app/hooks/config/public",children:"'config/public/'"}),", you can directly use the HTML tag to refer to the resources in the ",(0,i.jsx)(s.code,{children:"config/upload/"}),":"]}),"\n",(0,i.jsx)(s.div,{className:"language-",children:(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"code",children:(0,i.jsx)(s.code,{className:"language-html",children:'<script src="/upload/index.js"></script>\n'})})]})}),"\n",(0,i.jsxs)(s.p,{children:["if ",(0,i.jsx)(s.a,{href:"/en/configure/app/output/asset-prefix",children:(0,i.jsx)(s.code,{children:"output.assetPrefix"})})," is configured，add this prefix directly using template syntax:"]}),"\n",(0,i.jsx)(s.div,{className:"language-",children:(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"code",children:(0,i.jsx)(s.code,{className:"language-html",children:'<script src="<%=assetPrefix %>/upload/index.js"></script>\n'})})]})}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(s.div,{className:"modern-directive-content",children:["Modern.js does not support the use files under ",(0,i.jsx)(s.code,{children:"upload/"})," in ",(0,i.jsx)(s.code,{children:"config/public/*.css"})," via URL.","\n"]})]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);