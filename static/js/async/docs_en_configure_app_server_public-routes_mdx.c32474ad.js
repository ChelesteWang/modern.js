(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_server_public-routes_mdx"],{18007:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return c},default:function(){return u}});var r=t("12151"),s=t("21447");let o={sidebar_label:"publicRoutes"},i="server.publicRoutes",c=[];function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"server.publicroutes",children:["server.publicRoutes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#server.publicroutes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," Automatic generation of server-level routing rules based on file conventions: One routing rule is generated per file of the application."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This configuration option only applies to server-level routing, and you can customize the access route of resources in ",(0,r.jsx)(n.code,{children:"config/public/"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," of the object is the relative file path of the current application (not used ",(0,r.jsx)(n.code,{children:"./"}),"), value can be ",(0,r.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    publicRoutes: {\n      // Set up a long route\n      'index.json': '/user-config/card-info/extra/help.json',\n\n      // Set up a route without a suffix\n      'robot.txt': '/app/authentication',\n    },\n  },\n});\n"})})]})]})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);