(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),d=t("GCVy"),u=t("+6vE");var m=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},O=t("gnlW"),j=t("mwnC"),f=t("/Rw0"),N=t("dVM4"),g=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var n=e.items,t=e.depth;return r.a.createElement(g,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:t+1}):null)})))}y.defaultProps={depth:0};var w=y,C=t("MfeC");function k(e){var n=C.a.getPath(e.location.pathname),t=C.a.getVariantAndPage(e.root,n);if(!t)return null;var a=C.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),D=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,g=o.title,y=o.description,k=o.status,S=o.source,B=o.additionalContributors,W=void 0===B?[]:B,z=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:m,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:g,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(T,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},g),y))),null!=z?r.a.createElement(_,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?r.a.createElement(D,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:t.tableOfContents.items})):null,r.a.createElement(I,null,k||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(N.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(f.a,{href:S}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},upUl:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm dedupe\n\nalias: ddp\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Searches the local package tree and attempts to simplify the overall\nstructure by moving dependencies further up the tree, where they can\nbe more effectively shared by multiple dependent packages."),Object(l.b)("p",null,"For example, consider this dependency graph:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"a\n+-- b <-- depends on c@1.0.x\n|   `-- c@1.0.3\n`-- d <-- depends on c@~1.0.9\n    `-- c@1.0.10\n")),Object(l.b)("p",null,"In this case, ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe")," will transform the tree to:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"a\n+-- b\n+-- d\n`-- c@1.0.10\n")),Object(l.b)("p",null,"Because of the hierarchical nature of node's module lookup, b and d\nwill both get their dependency met by the single c package at the root\nlevel of the tree."),Object(l.b)("p",null,"In some cases, you may have a dependency graph like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"a\n+-- b <-- depends on c@1.0.x\n+-- c@1.0.3\n`-- d <-- depends on c@1.x\n    `-- c@1.9.9\n")),Object(l.b)("p",null,"During the installation process, the ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.0.3")," dependency for ",Object(l.b)("inlineCode",{parentName:"p"},"b")," was\nplaced in the root of the tree.  Though ",Object(l.b)("inlineCode",{parentName:"p"},"d"),"'s dependency on ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.x")," could\nhave been satisfied by ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.0.3"),", the newer ",Object(l.b)("inlineCode",{parentName:"p"},"c@1.9.0")," dependency was used,\nbecause npm favors updates by default, even when doing so causes\nduplication."),Object(l.b)("p",null,"Running ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe")," will cause npm to note the duplication and\nre-evaluate, deleting the nested ",Object(l.b)("inlineCode",{parentName:"p"},"c")," module, because the one in the root is\nsufficient."),Object(l.b)("p",null,"To prefer deduplication over novelty during the installation process, run\n",Object(l.b)("inlineCode",{parentName:"p"},"npm install --prefer-dedupe")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm config set prefer-dedupe true"),"."),Object(l.b)("p",null,"Arguments are ignored. Dedupe always acts on the entire tree."),Object(l.b)("p",null,"Note that this operation transforms the dependency tree, but will never\nresult in new modules being installed."),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"npm find-dupes")," will run the command in ",Object(l.b)("inlineCode",{parentName:"p"},"--dry-run")," mode."),Object(l.b)("p",null,"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe")," will never update the semver values of direct\ndependencies in your project ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", if you want to update\nvalues in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," you can run: ",Object(l.b)("inlineCode",{parentName:"p"},"npm update --save")," instead."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global-style")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package into your local ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder with\nthe same layout it uses with the global ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder. Only your\ndirect dependencies will show in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," and everything they depend\non will be flattened in their ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders. This obviously will\neliminate some deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),", ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),"\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"legacy-bundling")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package such that versions of npm prior to 1.4,\nsuch as the one included with node 0.8, can install the package. This\neliminates all automatic deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"global-style")," this option\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"strict-peer-deps")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," is not set, then ",Object(l.b)("em",{parentName:"p"},"any"),"\nconflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," will be treated as an install failure, even\nif npm could reasonably guess the appropriate resolution based on non-peer\ndependency relationships."),Object(l.b)("p",null,"By default, conflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," deep in the dependency graph will\nbe resolved using the nearest non-peer dependency specification, even if\ndoing so will result in some packages receiving a peer dependency outside\nthe range set in their package's ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," object."),Object(l.b)("p",null,"When such and override is performed, a warning is printed, explaining the\nconflict and the packages involved. If ",Object(l.b)("inlineCode",{parentName:"p"},"--strict-peer-deps")," is set, then\nthis warning is treated as a failure."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"package-lock")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to false, then ignore ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files when installing. This\nwill also prevent ",Object(l.b)("em",{parentName:"p"},"writing")," ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if ",Object(l.b)("inlineCode",{parentName:"p"},"save")," is true."),Object(l.b)("p",null,"This configuration does not affect ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" submit audit reports alongside the current npm command to the\ndefault registry and all registries configured for scopes. See the\ndocumentation for ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-audit"},Object(l.b)("inlineCode",{parentName:"a"},"npm audit"))," for details on what is\nsubmitted."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"bin-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Tells npm to create symlinks (or ",Object(l.b)("inlineCode",{parentName:"p"},".cmd")," shims on Windows) for package\nexecutables."),Object(l.b)("p",null,"Set to false to have it not do this. This can be used to work around the\nfact that some file systems don't support symlinks, even on ostensibly Unix\nsystems."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"fund")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" displays the message at the end of each ',Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nacknowledging the number of dependencies looking for funding. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-fund"},Object(l.b)("inlineCode",{parentName:"a"},"npm\nfund"))," for details."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"install-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When set file: protocol dependencies that exist outside of the project root\nwill be packed and installed as regular dependencies instead of creating a\nsymlink. This option has no effect on workspaces."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-find-dupes"},"npm find-dupes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-ls"},"npm ls")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-update"},"npm update")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-dedupe-md-f6e4dd998993e6a9ad20.js.map