(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_tools_css-extract_mdx"],{93694:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("12151"),c=s("21447");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  // The loader options\n  loaderOptions: {},\n  // The plugin options\n  pluginOptions: {\n    // The default value of cssPath is `static/css`\n    // while the default value of cssFilename is `[name].[contenthash:8].css`\n    filename: `${cssPath}/${cssFilename}`,\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\n    ignoreOrder: true,\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The config of ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," can be modified through ",(0,t.jsx)(n.code,{children:"tools.cssExtract"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign. For example:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: {\n      pluginOptions: {\n        filename: 'static/css/[name].[contenthash:8].css',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When the value a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: config => {\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["For more config details, please refer to ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"}),"."]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}},27400:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return o},default:function(){return d}});var t=s("12151"),c=s("21447"),r=s.ir(s("93694"));let i={sidebar_label:"cssExtract"},a="tools.cssExtract",o=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"tools.cssextract",children:["tools.cssExtract",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools.cssextract",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolscssextract",target:"_blank",rel:"noopener noreferrer",children:"tools.cssExtract"}),".\n"]})]}),"\n","\n",(0,t.jsx)(r.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);