(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_plugins_plugin-node-polyfill_mdx"],{24138:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0});!function(e,l){for(var n in l)Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}(l,{frontmatter:function(){return d},title:function(){return r},toc:function(){return c},default:function(){return a}});var s=n("12151"),i=n("21447");let d={},r="Node Polyfill Plugin",c=[{text:"Quick Start",depth:2,id:"quick-start"},{text:"Install",depth:3,id:"install"},{text:"Register",depth:3,id:"register"},{text:"Node Polyfills",depth:2,id:"node-polyfills"},{text:"Globals",depth:3,id:"globals"},{text:"Modules",depth:3,id:"modules"},{text:"Fallbacks",depth:3,id:"fallbacks"}];function o(e){let l=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.h1,{id:"node-polyfill-plugin",children:["Node Polyfill Plugin",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfill-plugin",children:"#"})]}),"\n",(0,s.jsxs)(l.div,{className:"modern-directive tip",children:[(0,s.jsx)(l.div,{className:"modern-directive-title",children:"About Node Polyfill"}),(0,s.jsx)(l.div,{className:"modern-directive-content",children:"Normally, we don't need to use Node libs on the browser side. However, it is possible to use some Node libs when the code will run on both the Node side and the browser side, and Node Polyfill provides browser versions of polyfills for these Node libs."})]}),"\n",(0,s.jsx)(l.p,{children:"By using the Node Polyfill plugin, Node core libs polyfills are automatically injected into the browser-side, allowing you to use these modules on the browser side with confidence."}),"\n",(0,s.jsxs)(l.h2,{id:"quick-start",children:["Quick Start",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(l.h3,{id:"install",children:["Install",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,s.jsx)(l.p,{children:"You can install the plugin with the following command:"}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-node-polyfill -D\n\n# yarn\nyarn add @modern-js/builder-plugin-node-polyfill -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-node-polyfill -D\n"})})]})}),"\n",(0,s.jsxs)(l.h3,{id:"register",children:["Register",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,s.jsxs)(l.p,{children:["In upper-level frameworks such as Modern.js, you can register node polyfill plugins through the ",(0,s.jsx)(l.code,{children:"builderPlugins"})," config:"]}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { builderPluginNodePolyfill } from '@modern-js/builder-plugin-node-polyfill';\n\nexport default {\n  builderPlugins: [builderPluginNodePolyfill()],\n};\n"})})]})}),"\n",(0,s.jsxs)(l.p,{children:["If you are using the Builder's Node API, you can register node polyfill plugins through the ",(0,s.jsx)(l.code,{children:"addPlugins"})," method:"]}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-js",children:"import { builderPluginNodePolyfill } from '@modern-js/builder-plugin-node-polyfill';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginNodePolyfill()]);\n"})})]})}),"\n",(0,s.jsxs)(l.h2,{id:"node-polyfills",children:["Node Polyfills",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfills",children:"#"})]}),"\n",(0,s.jsxs)(l.h3,{id:"globals",children:["Globals",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#globals",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"Buffer"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"process"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"When the above global variables are used directly in code, the corresponding polyfill will be injected."}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-ts",children:"const bufferData = Buffer.from('xxxx');\n"})})]})}),"\n",(0,s.jsxs)(l.h3,{id:"modules",children:["Modules",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#modules",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"assert"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"buffer"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"console"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"constants"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"crypto"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"domain"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"events"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"http"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"https"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"os"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"path"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"punycode"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"process"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"querystring"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"stream"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_duplex"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_passthrough"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_readable"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_transform"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_writable"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"string_decoder"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"sys"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"timers"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"tty"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"url"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"util"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"vm"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"zlib"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"When the above module is referenced in code via import / require syntax, the corresponding polyfill will be injected."}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { Buffer } from 'buffer';\n\nconst bufferData = Buffer.from('xxxx');\n"})})]})}),"\n",(0,s.jsxs)(l.h3,{id:"fallbacks",children:["Fallbacks",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fallbacks",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"child_process"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"cluster"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"dgram"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"dns"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"fs"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"module"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"net"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"readline"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"repl"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"tls"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"Currently there is no polyfill for the above modules on the browser side, so when you import the above modules, it will automatically fallback to an empty object."}),"\n",(0,s.jsx)(l.div,{className:"language-",children:(0,s.jsxs)(l.div,{className:"modern-code-content",children:[(0,s.jsx)(l.button,{className:"copy"}),(0,s.jsx)(l.pre,{className:"code",children:(0,s.jsx)(l.code,{className:"language-ts",children:"import fs from 'fs';\n\nconsole.log(fs); // -> {}\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:l}=Object.assign({},(0,i.useMDXComponents)(),e.components);return l?(0,s.jsx)(l,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);