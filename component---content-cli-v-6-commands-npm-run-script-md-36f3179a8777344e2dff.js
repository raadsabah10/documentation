(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),g=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return o.a.createElement(g,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var C=N,w=n("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},l)))}v.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=v,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,g=r.title,N=r.description,v=r.status,A=r.source,H=r.additionalContributors,z=void 0===H?[]:H,P=w.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:f.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(p.a,{title:g,description:N}),o.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},g),N))),null!=P?o.a.createElement(I,null,o.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?o.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(C,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,v||A?o.a.createElement(i.k,{mb:3,alignItems:"center"},v?o.a.createElement(j.a,{status:v}):null,o.a.createElement(i.e,{mx:"auto"}),A?o.a.createElement(y.a,{href:A}):null):null,n.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(C,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},yNFv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},o={_frontmatter:r},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run-script <command> [--silent] [-- <args>...]\n\nalias: npm run\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"This runs an arbitrary command from a package's ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," object.  If no\n",Object(i.b)("inlineCode",{parentName:"p"},'"command"')," is provided, it will list the available scripts.  ",Object(i.b)("inlineCode",{parentName:"p"},"run[-script]")," is\nused by the test, start, restart, and stop commands, but can be called\ndirectly, as well. When the scripts in the package are printed out, they're\nseparated into lifecycle (test, start, restart) and directly-run scripts."),Object(i.b)("p",null,"As of ",Object(i.b)("a",{parentName:"p",href:"https://blog.npmjs.org/post/98131109725/npm-2-0-0"},Object(i.b)("inlineCode",{parentName:"a"},"npm@2.0.0")),", you can\nuse custom arguments when executing scripts. The special option ",Object(i.b)("inlineCode",{parentName:"p"},"--")," is used by\n",Object(i.b)("a",{parentName:"p",href:"https://goo.gl/KxMmtG"},"getopt")," to delimit the end of the options. npm will pass\nall the arguments after the ",Object(i.b)("inlineCode",{parentName:"p"},"--")," directly to your script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'npm run test -- --grep="pattern"\n')),Object(i.b)("p",null,"The arguments will only be passed to the script specified after ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),"\nand not to any pre or post script."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"env"),' script is a special built-in command that can be used to list\nenvironment variables that will be available to the script at runtime. If an\n"env" command is defined in your package, it will take precedence over the\nbuilt-in.'),Object(i.b)("p",null,"In addition to the shell's pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm run")," adds\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," provided to scripts. Any binaries provided by\nlocally-installed dependencies can be used without the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nprefix. For example, if there is a ",Object(i.b)("inlineCode",{parentName:"p"},"devDependency")," on ",Object(i.b)("inlineCode",{parentName:"p"},"tap")," in your package,\nyou should write:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'"scripts": {"test": "tap test/\\*.js"}\n')),Object(i.b)("p",null,"instead of"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'"scripts": {"test": "node_modules/.bin/tap test/\\*.js"}\n')),Object(i.b)("p",null,"to run your tests."),Object(i.b)("p",null,"The actual shell your script is run within is platform dependent. By default,\non Unix-like systems it is the ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/sh")," command, on Windows it is the ",Object(i.b)("inlineCode",{parentName:"p"},"cmd.exe"),".\nThe actual shell referred to by ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/sh")," also depends on the system.\nAs of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/releases/tag/v5.1.0"},Object(i.b)("inlineCode",{parentName:"a"},"npm@5.1.0"))," you can\ncustomize the shell with the ",Object(i.b)("inlineCode",{parentName:"p"},"script-shell")," configuration."),Object(i.b)("p",null,"Scripts are run from the root of the module, regardless of what your current\nworking directory is when you call ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),". If you want your script to\nuse different behavior based on what subdirectory you're in, you can use the\n",Object(i.b)("inlineCode",{parentName:"p"},"INIT_CWD")," environment variable, which holds the full path you were in when\nyou ran ",Object(i.b)("inlineCode",{parentName:"p"},"npm run"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run")," sets the ",Object(i.b)("inlineCode",{parentName:"p"},"NODE")," environment variable to the ",Object(i.b)("inlineCode",{parentName:"p"},"node")," executable with\nwhich ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," is executed. Also, if the ",Object(i.b)("inlineCode",{parentName:"p"},"--scripts-prepend-node-path")," is passed,\nthe directory within which ",Object(i.b)("inlineCode",{parentName:"p"},"node")," resides is added to the\n",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"--scripts-prepend-node-path=auto")," is passed (which has been the\ndefault in ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," v3), this is only performed when that ",Object(i.b)("inlineCode",{parentName:"p"},"node")," executable is\nnot found in the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),"."),Object(i.b)("p",null,"If you try to run a script without having a ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," directory and it fails,\nyou will be given a warning to run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", just in case you've forgotten."),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--silent")," flag to prevent showing ",Object(i.b)("inlineCode",{parentName:"p"},"npm ERR!")," output on error."),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code\nwhen the script is undefined. This lets you run potentially undefined scripts\nwithout breaking the execution chain."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-test"},"npm test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-start"},"npm start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-restart"},"npm restart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-stop"},"npm stop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-config"},"npm config"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-run-script-md-36f3179a8777344e2dff.js.map