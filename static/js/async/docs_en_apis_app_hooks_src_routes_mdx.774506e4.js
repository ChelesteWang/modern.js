(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_hooks_src_routes_mdx"],{75306:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return c},default:function(){return d}});var t=s("12151"),r=s("21447");let a={title:"routes/",sidebar_position:2},o="routes/",c=[{text:"basic example",depth:2,id:"basic-example"},{text:"Dynamic Route",depth:2,id:"dynamic-route"},{text:"Layout component",depth:2,id:"layout-component"}];function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2",ul:"ul",li:"li"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"routes/",children:["routes/",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes/",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The entry identifier when the application uses file system-based routing."}),"\n",(0,t.jsxs)(n.p,{children:["When the project structure is of type ",(0,t.jsx)(n.code,{children:"Routes directory entry"}),", the files in the ",(0,t.jsx)(n.code,{children:"src/routes"})," directory are parsed to get the client-side routing configuration. See ",(0,t.jsx)(n.a,{href:"/en/guides/basic-features/routes",children:"Routing by convention"})," for more details on usage."]}),"\n",(0,t.jsxs)(n.p,{children:["Any ",(0,t.jsx)(n.code,{children:"layout.[tj]sx"})," and ",(0,t.jsx)(n.code,{children:"page.[tj]sx"})," under ",(0,t.jsx)(n.code,{children:"src/routes"})," will be used as a route to the application:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",meta:"{3}",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"basic-example",children:["basic example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The directory names in the ",(0,t.jsx)(n.code,{children:"routes"})," directory will be used as a mapping of the route url, where ",(0,t.jsx)(n.code,{children:"layout.tsx"})," is used as the layout component and ",(0,t.jsx)(n.code,{children:"page.tsx"})," as the content component, which is a leaf node of the whole route, for example the following directory structure:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"The following two routes are produced:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"dynamic-route",children:["Dynamic Route",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-route",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the directory name of the route file is named with ",(0,t.jsx)(n.code,{children:"[]"}),", the generated route will be used as a dynamic route. For example, the following file directories:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"routes/[id]/page.tsx"})," file will be converted to a ",(0,t.jsx)(n.code,{children:"/:id"})," route. All ",(0,t.jsx)(n.code,{children:"/xxx"})," will match that route, except for the ",(0,t.jsx)(n.code,{children:"/blog"})," route, which can be matched exactly."]}),"\n",(0,t.jsxs)(n.p,{children:["In the component, you can get the corresponding parameters by ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/router/router#useparams",children:"useParams"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the loader, params will be used as input to ",(0,t.jsx)(n.a,{href:"/en/guides/basic-features/data-fetch#loader-function",children:"loader"}),", and the corresponding parameters can be retrieved through the property ",(0,t.jsx)(n.code,{children:"params"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"layout-component",children:["Layout component",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout-component",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["As in the example below, you can add a common layout component for all routing components by adding ",(0,t.jsx)(n.code,{children:"layout.tsx"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["You can represent child components in layout components by using ",(0,t.jsx)(n.code,{children:"<Outlet>"}),":"]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"routes/layout.tsx"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})})]})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.code,{children:"<Outlet>"})," is a new API in React Router 6, see [Outlet] for details(",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"https://reactrouter.com/en/main/components/outlet#outlet"}),").","\n"]})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);