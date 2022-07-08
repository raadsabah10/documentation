(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{"6aAq":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The npm registry contains packages, many of which are also Node modules, or contain Node modules. Read on to understand how they differ and how they interact."),Object(l.b)("h2",null,"About packages"),Object(l.b)("p",null,"A ",Object(l.b)("strong",{parentName:"p"},"package")," is a file or directory that is described by a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file. A package must contain a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file in order to be published to the npm registry. For more information on creating a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),' file, see "',Object(l.b)("a",{parentName:"p",href:"creating-a-package-json-file"},"Creating a package.json file"),'".'),Object(l.b)("p",null,"Packages can be unscoped or scoped to a user or organization, and scoped packages can be private or public. For more information, see"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",{parentName:"li",href:"about-scopes"},"About scopes"),'"'),Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",{parentName:"li",href:"about-private-packages"},"About private packages"),'"'),Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",{parentName:"li",href:"package-scope-access-level-and-visibility"},"Package scope, access level, and visibility"),'"')),Object(l.b)("h3",null,"About package formats"),Object(l.b)("p",null,"A package is any of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a) A folder containing a program described by a ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," file."),Object(l.b)("li",{parentName:"ul"},"b) A gzipped tarball containing (a)."),Object(l.b)("li",{parentName:"ul"},"c) A URL that resolves to (b)."),Object(l.b)("li",{parentName:"ul"},"d) A ",Object(l.b)("inlineCode",{parentName:"li"},"<name>@<version>")," that is published on the registry with (c)."),Object(l.b)("li",{parentName:"ul"},"e) A ",Object(l.b)("inlineCode",{parentName:"li"},"<name>@<tag>")," that points to (d)."),Object(l.b)("li",{parentName:"ul"},"f) A ",Object(l.b)("inlineCode",{parentName:"li"},"<name>")," that has a ",Object(l.b)("inlineCode",{parentName:"li"},"latest")," tag satisfying (e)."),Object(l.b)("li",{parentName:"ul"},"g) A ",Object(l.b)("inlineCode",{parentName:"li"},"git")," url that, when cloned, results in (a).")),Object(l.b)("h3",null,"npm package git URL formats"),Object(l.b)("p",null,"Git URLs used for npm packages can be formatted in the following ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git://github.com/user/project.git#commit-ish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git+ssh://user@hostname:project.git#commit-ish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git+http://user@hostname/project/blah.git#commit-ish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git+https://user@hostname/project/blah.git#commit-ish"))),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"commit-ish")," can be any tag, sha, or branch that can be supplied as\nan argument to ",Object(l.b)("inlineCode",{parentName:"p"},"git checkout"),". The default ",Object(l.b)("inlineCode",{parentName:"p"},"commit-ish")," is ",Object(l.b)("inlineCode",{parentName:"p"},"master"),"."),Object(l.b)("h2",null,"About modules"),Object(l.b)("p",null,"A ",Object(l.b)("strong",{parentName:"p"},"module")," is any file or directory in the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," directory that can be loaded by the Node.js ",Object(l.b)("inlineCode",{parentName:"p"},"require()")," function."),Object(l.b)("p",null,"To be loaded by the Node.js ",Object(l.b)("inlineCode",{parentName:"p"},"require()")," function, a module must be one of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A folder with a ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," file containing a ",Object(l.b)("inlineCode",{parentName:"li"},'"main"')," field."),Object(l.b)("li",{parentName:"ul"},"A JavaScript file.")),Object(l.b)("div",{className:"note"},Object(l.b)("span",{className:"bold"},"**Note:** "),"Since modules are not required to have a `package.json` file, not all modules are packages. Only modules that have a `package.json` file are also packages."),Object(l.b)("p",null,"In the context of a Node program, the ",Object(l.b)("inlineCode",{parentName:"p"},"module")," is also the thing that\nwas loaded ",Object(l.b)("em",{parentName:"p"},"from")," a file. For example, in the following program:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"var req = require('request')\n")),Object(l.b)("p",null,'we might say that "The variable ',Object(l.b)("inlineCode",{parentName:"p"},"req")," refers to the ",Object(l.b)("inlineCode",{parentName:"p"},"request"),' module".'))}b.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),o=a("q1tI"),r=a.n(o),c=a("7ljp"),b=a("pD55"),m=a("8Aig"),p=a("ReZb"),s=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),j=a("/Rw0"),O=a("dVM4"),y=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,a=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:a+1}):null)})))}N.defaultProps={depth:0};var k=N,C=a("MfeC");function E(e){var t=C.a.getPath(e.location.pathname),a=C.a.getVariantAndPage(e.root,t);if(!a)return null;var n=C.a.getVariantsForPage(e.root,a.page),i=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,w=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),A=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,y=o.title,N=o.description,E=o.status,q=o.source,z=o.additionalContributors,R=void 0===z?[]:z,T=C.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:s.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=T?r.a.createElement(A,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:n})):null),a.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:a.tableOfContents.items})):null,r.a.createElement(S,null,E||q?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(O.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),q?r.a.createElement(j.a,{href:q}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-introduction-to-packages-and-modules-about-packages-and-modules-mdx-d64704470b492de84490.js.map