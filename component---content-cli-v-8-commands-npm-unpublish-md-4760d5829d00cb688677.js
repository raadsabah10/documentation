(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var w=N,v=n("MfeC");function k(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,k=o.status,A=o.source,D=o.additionalContributors,W=void 0===D?[]:D,P=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=P?r.a.createElement(I,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,k||A?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(j.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),A?r.a.createElement(g.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},PT8D:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm unpublish [<package-spec>]\n")),Object(l.b)("p",null,"To learn more about how the npm registry treats unpublish, see our ",Object(l.b)("a",{href:"https://docs.npmjs.com/policies/unpublish",target:"_blank",rel:"noopener noreferrer"}," unpublish policies")),Object(l.b)("h3",null,"Warning"),Object(l.b)("p",null,"Consider using the ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-deprecate"},Object(l.b)("inlineCode",{parentName:"a"},"deprecate"))," command instead,\nif your intent is to encourage users to upgrade, or if you no longer\nwant to maintain a package."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This removes a package version from the registry, deleting its entry and\nremoving the tarball."),Object(l.b)("p",null,"The npm registry will return an error if you are not ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-adduser"},"logged\nin"),"."),Object(l.b)("p",null,"If you do not specify a version or if you remove all of a package's\nversions then the registry will remove the root package entry entirely."),Object(l.b)("p",null,"Even if you unpublish a package version, that specific name and version\ncombination can never be reused. In order to publish the package again,\nyou must use a new version number. If you unpublish the entire package,\nyou may not publish any new versions of that package until 24 hours have\npassed."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"force")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Removes various protections against unfortunate side effects, common\nmistakes, unnecessary performance degradation, and malicious input."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Allow clobbering non-npm files in global installs."),Object(l.b)("li",{parentName:"ul"},"Allow the ",Object(l.b)("inlineCode",{parentName:"li"},"npm version")," command to work on an unclean git repository."),Object(l.b)("li",{parentName:"ul"},"Allow deleting the cache folder with ",Object(l.b)("inlineCode",{parentName:"li"},"npm cache clean"),"."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of npm."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of ",Object(l.b)("inlineCode",{parentName:"li"},"node"),", even if ",Object(l.b)("inlineCode",{parentName:"li"},"--engine-strict")," is enabled."),Object(l.b)("li",{parentName:"ul"},"Allow ",Object(l.b)("inlineCode",{parentName:"li"},"npm audit fix")," to install modules outside your stated dependency\nrange (including SemVer-major changes)."),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing all versions of a published package."),Object(l.b)("li",{parentName:"ul"},"Allow conflicting peerDependencies to be installed in the root project."),Object(l.b)("li",{parentName:"ul"},"Implicitly set ",Object(l.b)("inlineCode",{parentName:"li"},"--yes")," during ",Object(l.b)("inlineCode",{parentName:"li"},"npm init"),"."),Object(l.b)("li",{parentName:"ul"},"Allow clobbering existing values in ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg")),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing of entire packages (not just a single version).")),Object(l.b)("p",null,"If you don't have a clear idea of what you want to do, it is strongly\nrecommended that you do not use this option!"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/package-spec"},"package spec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-deprecate"},"npm deprecate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm adduser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm login"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-unpublish-md-4760d5829d00cb688677.js.map