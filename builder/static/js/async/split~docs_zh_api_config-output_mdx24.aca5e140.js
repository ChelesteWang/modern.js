(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-output_mdx24"],{91008:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},title:function(){return c},toc:function(){return d},default:function(){return l}});var t=n("12151"),r=n("21447");let a={},c="",d=[{text:"assetsRetry.max",depth:3,id:"assetsretry.max"},{text:"assetsRetry.domain",depth:3,id:"assetsretry.domain"},{text:"assetsRetry.type",depth:3,id:"assetsretry.type"},{text:"assetsRetry.test",depth:3,id:"assetsretry.test"},{text:"assetsRetry.crossOrigin",depth:3,id:"assetsretry.crossorigin"},{text:"assetsRetry.onRetry",depth:3,id:"assetsretry.onretry"},{text:"assetsRetry.onSuccess",depth:3,id:"assetsretry.onsuccess"},{text:"assetsRetry.onFail",depth:3,id:"assetsretry.onfail"}];function i(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"output.assetsRetry"})," 用于配置资源加载失败时的重试逻辑。配置类型如下:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"由于该能力会往 HTML 中注入额外的一些运行时代码，因此我们默认关闭了该能力，如果需要开启该能力，你可以配置成对象的形式，比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["当你开启该能力后，",(0,t.jsx)(s.code,{children:"assetsRetry"})," 的默认配置如下："]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"同时你也可以根据接下来的一些配置说明，来定制你的重试逻辑。"}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.max",children:["assetsRetry.max",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.max",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"number"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"默认值："})," ",(0,t.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"单个资源的最大重试次数。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 3,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.domain",children:["assetsRetry.domain",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.domain",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"默认值："})," ",(0,t.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"指定资源加载失败时的重试域名，如果为空则使用当前页面的域名。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.example.com', 'https://cdn2.example.com'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.type",children:["assetsRetry.type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.type",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"默认值："})," ",(0,t.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"可重试的资源类型。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.test",children:["assetsRetry.test",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.test",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"默认值："})," ",(0,t.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"匹配资源 URL 的正则表达式或函数，默认匹配所有资源。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.crossorigin",children:["assetsRetry.crossOrigin",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.crossorigin",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"undefined | boolean"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"默认值："})," false"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["用于向 ",(0,t.jsx)(s.code,{children:"<script>"})," 资源标签中注入 crossorigin 属性，传入 true 则会启用默认值 anonymous。比如："]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onretry",children:["assetsRetry.onRetry",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onretry",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"资源重试时的回调函数。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onsuccess",children:["assetsRetry.onSuccess",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onsuccess",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"资源重试成功时的回调函数。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onfail",children:["assetsRetry.onFail",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onfail",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"类型："})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"资源重试超过最大重试次数时的回调函数。比如："}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);