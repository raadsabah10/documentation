(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),s=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var O=function(e){var t=e.children;return o.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var E=N,C=n("MfeC");function v(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=v,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,N=i.description,v=i.status,D=i.source,H=i.additionalContributors,T=void 0===H?[]:H,W=C.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:O,Screenshot:h.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(p.a,{title:y,description:N}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},y),N))),null!=W?o.a.createElement(I,null,o.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?o.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(z,null,v||D?o.a.createElement(l.k,{mb:3,alignItems:"center"},v?o.a.createElement(g.a,{status:v}):null,o.a.createElement(l.e,{mx:"auto"}),D?o.a.createElement(j.a,{href:D}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},e96p:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},o={_frontmatter:i},c=r.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm restart [-- <args>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This restarts a project.  It is equivalent to running ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script\nrestart"),"."),Object(l.b)("p",null,"If the current project has a ",Object(l.b)("inlineCode",{parentName:"p"},'"restart"')," script specified in\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", then the following scripts will be run:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"prerestart"),Object(l.b)("li",{parentName:"ol"},"restart"),Object(l.b)("li",{parentName:"ol"},"postrestart")),Object(l.b)("p",null,"If it does ",Object(l.b)("em",{parentName:"p"},"not")," have a ",Object(l.b)("inlineCode",{parentName:"p"},'"restart"')," script specified, but it does have\n",Object(l.b)("inlineCode",{parentName:"p"},"stop")," and/or ",Object(l.b)("inlineCode",{parentName:"p"},"start")," scripts, then the following scripts will be run:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"prerestart"),Object(l.b)("li",{parentName:"ol"},"prestop"),Object(l.b)("li",{parentName:"ol"},"stop"),Object(l.b)("li",{parentName:"ol"},"poststop"),Object(l.b)("li",{parentName:"ol"},"prestart"),Object(l.b)("li",{parentName:"ol"},"start"),Object(l.b)("li",{parentName:"ol"},"poststart"),Object(l.b)("li",{parentName:"ol"},"postrestart")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"script-shell")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"The shell to use for scripts run with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm exec"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm run")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm\ninit <package-spec>")," commands."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-run-script"},"npm run-script")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/scripts"},"npm scripts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-test"},"npm test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-start"},"npm start")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-stop"},"npm stop")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-restart"},"npm restart"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-restart-md-cb68066a6133ccb6f19b.js.map