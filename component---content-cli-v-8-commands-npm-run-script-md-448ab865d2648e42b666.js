(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},j=n("gnlW"),O=n("mwnC"),f=n("/Rw0"),g=n("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return o.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var y=w,C=n("MfeC");function k(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,N=r.title,w=r.description,k=r.status,W=r.source,D=r.additionalContributors,A=void 0===D?[]:D,B=C.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(p.a,{title:N,description:w}),o.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},N),w))),null!=B?o.a.createElement(I,null,o.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?o.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(y,{items:n.tableOfContents.items})):null,o.a.createElement(S,null,k||W?o.a.createElement(i.k,{mb:3,alignItems:"center"},k?o.a.createElement(g.a,{status:k}):null,o.a.createElement(i.e,{mx:"auto"}),W?o.a.createElement(f.a,{href:W}):null):null,n.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(y,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},mClO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},o={_frontmatter:r},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run-script <command> [-- <args>]\n\naliases: run, rum, urn\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"This runs an arbitrary command from a package's ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," object.  If no\n",Object(i.b)("inlineCode",{parentName:"p"},'"command"')," is provided, it will list the available scripts."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"run[-script]")," is used by the test, start, restart, and stop commands, but\ncan be called directly, as well. When the scripts in the package are\nprinted out, they're separated into lifecycle (test, start, restart) and\ndirectly-run scripts."),Object(i.b)("p",null,"Any positional arguments are passed to the specified script.  Use ",Object(i.b)("inlineCode",{parentName:"p"},"--")," to\npass ",Object(i.b)("inlineCode",{parentName:"p"},"-"),"-prefixed flags and options which would otherwise be parsed by npm."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'npm run test -- --grep="pattern"\n')),Object(i.b)("p",null,"The arguments will only be passed to the script specified after ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),"\nand not to any ",Object(i.b)("inlineCode",{parentName:"p"},"pre")," or ",Object(i.b)("inlineCode",{parentName:"p"},"post")," script."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"env"),' script is a special built-in command that can be used to list\nenvironment variables that will be available to the script at runtime. If an\n"env" command is defined in your package, it will take precedence over the\nbuilt-in.'),Object(i.b)("p",null,"In addition to the shell's pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm run")," adds\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," provided to scripts. Any binaries\nprovided by locally-installed dependencies can be used without the\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," prefix. For example, if there is a ",Object(i.b)("inlineCode",{parentName:"p"},"devDependency")," on\n",Object(i.b)("inlineCode",{parentName:"p"},"tap")," in your package, you should write:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'"scripts": {"test": "tap test/*.js"}\n')),Object(i.b)("p",null,"instead of"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'"scripts": {"test": "node_modules/.bin/tap test/*.js"}\n')),Object(i.b)("p",null,"The actual shell your script is run within is platform dependent. By default,\non Unix-like systems it is the ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/sh")," command, on Windows it is\n",Object(i.b)("inlineCode",{parentName:"p"},"cmd.exe"),".\nThe actual shell referred to by ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/sh")," also depends on the system.\nYou can customize the shell with the ",Object(i.b)("inlineCode",{parentName:"p"},"script-shell")," configuration."),Object(i.b)("p",null,"Scripts are run from the root of the package folder, regardless of what the\ncurrent working directory is when ",Object(i.b)("inlineCode",{parentName:"p"},"npm run")," is called. If you want your\nscript to use different behavior based on what subdirectory you're in, you\ncan use the ",Object(i.b)("inlineCode",{parentName:"p"},"INIT_CWD")," environment variable, which holds the full path you\nwere in when you ran ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run")," sets the ",Object(i.b)("inlineCode",{parentName:"p"},"NODE")," environment variable to the ",Object(i.b)("inlineCode",{parentName:"p"},"node")," executable\nwith which ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," is executed."),Object(i.b)("p",null,"If you try to run a script without having a ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," directory and it\nfails, you will be given a warning to run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", just in case you've\nforgotten."),Object(i.b)("h3",null,"Workspaces support"),Object(i.b)("p",null,"You may use the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," or ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," configs in order to run an\narbitrary command from a package's ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," object in the context of the\nspecified workspaces. If no ",Object(i.b)("inlineCode",{parentName:"p"},'"command"')," is provided, it will list the available\nscripts for each of these configured workspaces."),Object(i.b)("p",null,"Given a project with configured workspaces, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   +-- b\n   |   `-- package.json\n   `-- c\n       `-- package.json\n")),Object(i.b)("p",null,"Assuming the workspace configuration is properly set up at the root level\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file. e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "workspaces": [ "./packages/*" ]\n}\n')),Object(i.b)("p",null,"And that each of the configured workspaces has a configured ",Object(i.b)("inlineCode",{parentName:"p"},"test")," script,\nwe can run tests in all of them using the ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm test --workspaces\n")),Object(i.b)("h4",null,"Filtering workspaces"),Object(i.b)("p",null,"It's also possible to run a script in a single workspace using the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace"),"\nconfig along with a name or directory path:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm test --workspace=a\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config can also be specified multiple times in order to run a\nspecific script in the context of multiple workspaces. When defining values for\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config in the command line, it also possible to use ",Object(i.b)("inlineCode",{parentName:"p"},"-w")," as a\nshorthand, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm test -w a -w b\n")),Object(i.b)("p",null,"This last command will run ",Object(i.b)("inlineCode",{parentName:"p"},"test")," in both ",Object(i.b)("inlineCode",{parentName:"p"},"./packages/a")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./packages/b"),"\npackages."),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspace")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default:"),Object(i.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(i.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(i.b)("p",null,"Valid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Workspace names"),Object(i.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(i.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(i.b)("p",null,"When set for the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: null"),Object(i.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(i.b)("p",null,"Set to true to run the command in the context of ",Object(i.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(i.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(i.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(i.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(i.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(i.b)("p",null,"When false, specifying individual workspaces via the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"if-present")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"If true, npm will not exit with an error code when ",Object(i.b)("inlineCode",{parentName:"p"},"run-script")," is invoked\nfor a script that isn't defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," section of ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),".\nThis option can be used when it's desirable to optionally run a script when\nit's present and fail if the script fails. This is useful, for example, when\nrunning scripts that may only apply for some builds in an otherwise generic\nCI setup."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(i.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(i.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(i.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(i.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Run all build scripts (ie, ",Object(i.b)("inlineCode",{parentName:"p"},"preinstall"),", ",Object(i.b)("inlineCode",{parentName:"p"},"install"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall"),")\nscripts for installed packages in the foreground process, sharing standard\ninput, output, and error with the main npm process."),Object(i.b)("p",null,"Note that this will generally make installs run slower, and be much noisier,\nbut can be useful for debugging."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"script-shell")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows"),Object(i.b)("li",{parentName:"ul"},"Type: null or String")),Object(i.b)("p",null,"The shell to use for scripts run with the ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm run")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm\ninit <package-spec>")," commands."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-test"},"npm test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-start"},"npm start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-restart"},"npm restart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-stop"},"npm stop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/workspaces"},"npm workspaces"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-run-script-md-448ab865d2648e42b666.js.map