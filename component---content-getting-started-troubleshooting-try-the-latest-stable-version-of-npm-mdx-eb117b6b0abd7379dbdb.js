(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),p=n("7ljp"),c=n("pD55"),m=n("8Aig"),s=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},O=n("gnlW"),g=n("mwnC"),f=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,C=n("MfeC");function E(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},o)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),A=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),P=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,w=i.description,E=i.status,I=i.source,T=i.additionalContributors,W=void 0===T?[]:T,D=C.a.getVariantRoot(a.pathname);return r.a.createElement(p.a,{components:{Index:s.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:y,description:w}),r.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),w))),null!=D?r.a.createElement(A,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(P,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,E||I?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(j.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),I?r.a.createElement(f.a,{href:I}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},R83s:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},p=o.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(p,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"See what version of npm you're running"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm -v\n")),Object(l.b)("h2",null,"Upgrading on ",Object(l.b)("inlineCode",{parentName:"h2"},"*nix")," (OSX, Linux, etc.)"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"(You may need to prefix these commands with ",Object(l.b)("inlineCode",{parentName:"em"},"sudo"),", especially on Linux, or OS X if you installed Node using its default installer.)")),Object(l.b)("p",null,"You can upgrade to the latest version of npm using:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm install -g npm@latest\n")),Object(l.b)("h2",null,"Upgrading on Windows"),Object(l.b)("p",null,"By default, npm is installed alongside node in"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\nodejs")),Object(l.b)("p",null,"npm's globally installed packages (including, potentially, npm itself) are stored separately in a user-specific directory (which is currently"),Object(l.b)("p",null," ",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Users\\<username>\\AppData\\Roaming\\npm"),")."),Object(l.b)("p",null," Because the installer puts"),Object(l.b)("p",null," ",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\nodejs"),"  "),Object(l.b)("p",null," before"),Object(l.b)("p",null," ",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Users\\<username>\\AppData\\Roaming\\npm")),Object(l.b)("p",null," on your ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),", it will always use the version of npm installed with node instead of the version of npm you installed using ",Object(l.b)("inlineCode",{parentName:"p"},"npm -g install npm@<version>"),"."),Object(l.b)("p",null," To get around this, you can do ",Object(l.b)("strong",{parentName:"p"},"one")," of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Option 1: ",Object(l.b)("a",{parentName:"p",href:"http://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them"},"edit your Windows installation's ",Object(l.b)("inlineCode",{parentName:"a"},"PATH"))," to put ",Object(l.b)("inlineCode",{parentName:"p"},"%appdata%\\npm")," before ",Object(l.b)("inlineCode",{parentName:"p"},"%ProgramFiles%\\nodejs"),".\nRemember that you'll need to restart ",Object(l.b)("inlineCode",{parentName:"p"},"cmd.exe")," (and potentially restart Windows) when you make changes to ",Object(l.b)("inlineCode",{parentName:"p"},"PATH")," or how npm is installed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Option 2: remove both of"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"%ProgramFiles%\\nodejs\\npm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"%ProgramFiles%\\nodejs\\npm.cmd")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Option 3: Navigate to ",Object(l.b)("inlineCode",{parentName:"p"},"%ProgramFiles%\\nodejs\\node_modules\\npm")," and copy the ",Object(l.b)("inlineCode",{parentName:"p"},"npmrc"),"file to another folder or the desktop.\nThen open ",Object(l.b)("inlineCode",{parentName:"p"},"cmd.exe")," as an administrator and run the following commands:"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd %ProgramFiles%\\nodejs\nnpm install npm@latest\n")),Object(l.b)("p",null,"If you installed npm with the node.js installer, after doing one of the previous steps, do the following."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Option 1 or 2"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Go into ",Object(l.b)("inlineCode",{parentName:"li"},"%ProgramFiles%\\nodejs\\node_modules\\npm")," and copy the file named ",Object(l.b)("inlineCode",{parentName:"li"},"npmrc")," in the new npm folder, which should be ",Object(l.b)("inlineCode",{parentName:"li"},"%appdata%\\npm\\node_modules\\npm"),". This will tell the new npm where the global installed packages are."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Option 3"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Copy the npmrc file back into ",Object(l.b)("inlineCode",{parentName:"li"},"%ProgramFiles%\\nodejs\\node_modules\\npm"))))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"(See also the ",Object(l.b)("a",{parentName:"em",href:"https://docs.npmjs.com/common-errors#error-enoent-stat-cusersuserappdataroamingnpm-on-windows-7"},"point below")," if you're running Windows 7 and don't have the directory ",Object(l.b)("inlineCode",{parentName:"em"},"%appdata%\\npm"),".)")),Object(l.b)("h3",null,"A brief note on the built-in Windows configuration"),Object(l.b)("p",null,"The Node installer installs, directly into the npm folder, a special piece of Windows-specific configuration that tells npm where to install global packages. When npm is used to install itself, it is supposed to copy this special ",Object(l.b)("inlineCode",{parentName:"p"},"builtin")," configuration into the new install. There was a bug in some versions of npm that kept this from working, so you may need to go in and fix that up by hand. Run the following command to see where npm will  install global packages to verify it is correct."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm config get prefix -g\n")),Object(l.b)("p",null,"If it isn't set to ",Object(l.b)("inlineCode",{parentName:"p"},"<X>:\\Users\\<user>\\AppData\\Roaming\\npm"),", you can run the below command to correct it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm config set prefix %APPDATA%\\npm -g\n")),Object(l.b)("p",null,"Incidentally, if you would prefer that packages not be installed to your roaming profile (because you have a quota on your shared network, or it makes logging in or out from a domain sluggish), you can put it in your local app data instead:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm config set prefix %LOCALAPPDATA%\\npm -g\n")),Object(l.b)("p",null,"...as well as copying ",Object(l.b)("inlineCode",{parentName:"p"},"%APPDATA%\\npm")," to ",Object(l.b)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%\\npm")," (and updating your ",Object(l.b)("inlineCode",{parentName:"p"},"%PATH%"),", of course)."),Object(l.b)("p",null,"Everyone who works on npm knows that this process is complicated and fraught, and we're working on making it simpler. Stay tuned."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-troubleshooting-try-the-latest-stable-version-of-npm-mdx-eb117b6b0abd7379dbdb.js.map