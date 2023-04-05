(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_advanced_rspack-start_mdx"],{39328:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return d},default:function(){return t}});var r=i("12151"),s=i("21447"),o=i.ir(i("87820"));let a={},c="Using Rspack",d=[{text:"Enable Rspack",depth:2,id:"enable-rspack"},{text:"Enable in Modern.js framework",depth:3,id:"enable-in-modern.js-framework"},{text:"Use Builder in a front-end framework",depth:3,id:"use-builder-in-a-front-end-framework"},{text:"Migrating from webpack to Rspack",depth:2,id:"migrating-from-webpack-to-rspack"},{text:"Builder configuration differences",depth:3,id:"builder-configuration-differences"},{text:"Source Config",depth:4,id:"source-config"},{text:"Html Config",depth:4,id:"html-config"},{text:"Security Config",depth:4,id:"security-config"},{text:"Dev Config",depth:4,id:"dev-config"},{text:"Output Config",depth:4,id:"output-config"},{text:"Experiments Config",depth:4,id:"experiments-config"},{text:"Performance Config",depth:4,id:"performance-config"},{text:"Tools Config",depth:4,id:"tools-config"},{text:"Modify the Rspack Configuration Object",depth:3,id:"modify-the-rspack-configuration-object"},{text:"A more flexible way to modify Rspack configuration",depth:3,id:"a-more-flexible-way-to-modify-rspack-configuration"}];function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",code:"code",div:"div",button:"button",pre:"pre",ul:"ul",h4:"h4",blockquote:"blockquote",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in the Builder."}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"enable-rspack",children:["Enable Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"enable-in-modern.js-framework",children:["Enable in Modern.js framework",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-in-modern.js-framework",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["We recommend enabling Rspack as the bundler for Modern.js framework through the ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/en/guides/advanced-features/rspack-start.html#initializing-an-rspack-project",target:"_blank",rel:"noopener noreferrer",children:"Modern.js generator"})," if you prefer it over the default webpack bundler."]}),"\n",(0,r.jsx)(n.p,{children:"Of course, you can also access it manually by following the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"（The version needs to be the same as the Modern.js version)."]}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"pnpm add @modern-js/builder-rspack-provider -D\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"Confirm the Modern.js version via package.json or lock file:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "devDependencies": {\n    "@modern-js/app-tools": "2.8.0"\n  }\n}\n'})})]})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Declare the use of Rspack in the Modern.js configuration file:"}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"use-builder-in-a-front-end-framework",children:["Use Builder in a front-end framework",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Integrating rspack-provider into a frontend framework is similar to integrating webpack-provider. You only need to change the dependency from ",(0,r.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," to ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=modern.config.ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:["Migrating from webpack to Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder aims to eliminate the main differences between different bundlers and help users migrate at a lower cost. However, due to the different capabilities of each bundler, you still need to be aware of some differences."}),"\n",(0,r.jsxs)(n.p,{children:["This article will introduce the differences between webpack and Rspack from the perspective of Builder. If you need to know more in-depth differences, please refer to the ",(0,r.jsx)(n.a,{href:"http://rspack.dev/guide/migrate-from-webpack.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack documentation"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"builder-configuration-differences",children:["Builder configuration differences",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-configuration-differences",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Currently, most of configuration options in Builder have been adapted for Rspack.\nThroughout this process, Builder's work includes but is not limited to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Replace features that rely on webpack loader/plugin (which are not supported in Rspack) with alternative solutions provided by Rspack. For example, use ",(0,r.jsx)(n.code,{children:"css/module"})," instead of ",(0,r.jsx)(n.code,{children:"css-loader"})," modules."]}),"\n",(0,r.jsxs)(n.li,{children:["Validating and encapsulating webpack plugins such as ",(0,r.jsx)(n.code,{children:"@svgr/webpack"})," and ",(0,r.jsx)(n.code,{children:"webpack-bundle-analyzer"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Encapsulating Rspack built-in features such as ",(0,r.jsx)(n.code,{children:"css"})," and ",(0,r.jsx)(n.code,{children:"minify"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"source-config",children:["Source Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Source code parsing and compilation related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-source",children:"source.moduleScopes"})}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"html-config",children:["Html Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"HTML related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All configurations and capabilities under html are available within rspack."}),"\n",(0,r.jsxs)(n.h4,{id:"security-config",children:["Security Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Security related configurations in Builder."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["All configurations and capabilities under security are ",(0,r.jsx)(n.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,r.jsxs)(n.h4,{id:"dev-config",children:["Dev Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Dev related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All configurations and capabilities under dev are available within rspack."}),"\n",(0,r.jsxs)(n.h4,{id:"output-config",children:["Output Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Output related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.disableCssExtract"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.enableAssetManifest"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.enableCssModuleTSDeclaration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.legalComments"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.enableInlineScripts"})}),"\n",(0,r.jsxs)(n.li,{children:["tsChecker ability","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-output",children:"output.disableTsChecker"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"experiments-config",children:["Experiments Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Experimental related configurations in the Builder"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["All configurations and capabilities under experiments are ",(0,r.jsx)(n.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,r.jsxs)(n.h4,{id:"performance-config",children:["Performance Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Performance related configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-performance",children:"performance.profile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-performance",children:"performance.removeMomentLocale"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-performance",children:"performance.buildCache"})}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"tools-config",children:["Tools Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Low-level tools configurations in Builder."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.terser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.cssExtract"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.cssLoader"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.inspector"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.minifyCss"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.pug"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.styleLoader"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.styledComponents"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.tsLoader"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.tsChecker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.webpack"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.webpackChain"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:"In addition to the above configurations, some of the supported configurations may have differences in their capabilities. For specific differences in configurations, please refer to the corresponding API for each configuration."})]}),"\n",(0,r.jsxs)(n.h3,{id:"modify-the-rspack-configuration-object",children:["Modify the Rspack Configuration Object",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-rspack-configuration-object",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Before modify the Rspack configuration object, you may should know ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/guide/config-diff.html",target:"_blank",rel:"noopener noreferrer",children:"the config diff between Rspack and Webapck"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.rspack"})," to modify the Rspack configuration object."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["More information about Rspack, please refer to the ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack website"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"a-more-flexible-way-to-modify-rspack-configuration",children:["A more flexible way to modify Rspack configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#a-more-flexible-way-to-modify-rspack-configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder supports modifying Rspack config via ",(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"bundler-chain"}),". Configurations modified via bundler chain will take effect on both webpack and Rspack builds."]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);