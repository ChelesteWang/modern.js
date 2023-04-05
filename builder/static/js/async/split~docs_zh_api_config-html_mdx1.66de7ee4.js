(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-html_mdx1"],{14263:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return r},toc:function(){return d},default:function(){return i}});var c=s("12151"),a=s("21447");let t={},r="",d=[{text:"对象形式",depth:4,id:"对象形式"},{text:"函数形式",depth:4,id:"函数形式"}];function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"添加和修改最终注入到 HTML 页面的标签。"}),"\n",(0,c.jsxs)(n.h4,{id:"对象形式",children:["对象形式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象形式",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export interface HtmlInjectTag {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /** @default false */\n  append?: boolean;\n  /**\n   * 仅对于允许包含在 head 中的元素会默认启用\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n}\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"对象形式的配置项可以用于描述需要注入的标签，并可以通过参数控制注入的位置："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["这样的配置将会在 HTML 的 ",(0,c.jsx)(n.code,{children:"head"})," 最后添加一个 ",(0,c.jsx)(n.code,{children:"script"})," 标签："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/a.js?8327ec63"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n  </body>\n</html>\n'})})]})}),"\n",(0,c.jsxs)(n.p,{children:["标签最终的插入位置由 ",(0,c.jsx)(n.code,{children:"head"})," 和 ",(0,c.jsx)(n.code,{children:"append"})," 选项决定，两个配置相同的元素将被插入到相同区域，并且维持彼此之间的相对位置。"]}),"\n",(0,c.jsxs)(n.p,{children:["标签中表示外部资源文件路径的字段会受到 ",(0,c.jsx)(n.code,{children:"publicPath"})," 和 ",(0,c.jsx)(n.code,{children:"hash"})," 选项的影响，\n这些字段包括 ",(0,c.jsx)(n.code,{children:"script"})," 标签的 ",(0,c.jsx)(n.code,{children:"src"})," 和 ",(0,c.jsx)(n.code,{children:"link"})," 标签的 ",(0,c.jsx)(n.code,{children:"href"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["启用 ",(0,c.jsx)(n.code,{children:"publicPath"})," 会让标签中表示路径的属性被拼接上 ",(0,c.jsx)(n.code,{children:"output.assetPrefix"})," 字段。\n而 ",(0,c.jsx)(n.code,{children:"hash"})," 字段会让文件名后多出一个哈希查询用于控制浏览器缓存，哈希字符串与 HTML 文件产物的哈希值相同。"]}),"\n",(0,c.jsx)(n.p,{children:"用户也可以向这两个配置传入函数，以自行控制路径拼接的逻辑。"}),"\n",(0,c.jsxs)(n.h4,{id:"函数形式",children:["函数形式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数形式",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export type HtmlInjectTagUtils = {\n  outputName: string;\n  publicPath: string;\n  hash: string;\n};\n\nexport type HtmlInjectTagHandler = (\n  tags: HtmlInjectTag[],\n  utils: HtmlInjectTagUtils,\n) => HtmlInjectTag[] | void;\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"html.tags"})," 也支持传入回调函数，通过在回调中编写逻辑可以任意修改标签列表，常用于修改标签列表或是在插入标签的同时确保其相对位置。"]}),"\n",(0,c.jsx)(n.p,{children:"回调函数接受 tags 列表作为参数，并需要修改或直接返回新的 tags 数组："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      /* ^?\n       *   { tag: 'script', attrs: { src: 'b.js' } },\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n      /* ^?\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n    ],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["函数将在 HTML 处理流程的最后被执行，即如下的例子中不管回调函数在配置项中的位置如何，\n参数 ",(0,c.jsx)(n.code,{children:"tags"})," 都会包含配置项中所有的对象形式配置。"]}),"\n",(0,c.jsxs)(n.p,{children:["也因此在回调中修改 ",(0,c.jsx)(n.code,{children:"append"})," ",(0,c.jsx)(n.code,{children:"publicPath"})," ",(0,c.jsx)(n.code,{children:"hash"})," 等属性都不会生效，因为这些属性都已经分别应用到了标签的位置和路径属性。"]}),"\n",(0,c.jsx)(n.p,{children:"于是最终产物将会类似："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/c.js"></script>\n    <script src="//example.com/d.js"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n    <script src="//example.com/a.js"></script>\n  </body>\n</html>\n'})})]})})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);