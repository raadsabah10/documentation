(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{O6H6:function(e,t,n){"use strict";var o=n("vOnD"),a=n("u9kb"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),s=n("7ljp"),c=n("pD55"),p=n("8Aig"),m=n("ReZb"),u=n("GCVy"),b=n("+6vE");var h=function(e){var t=e.children;return l.a.createElement(a.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(a.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return l.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),O=Object(o.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(a.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var v=w,k=n("MfeC");function E(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var o=k.a.getVariantsForPage(e.root,n.page),r=[],i=o[0];return 0===o.length?null:(o.forEach((function(e){e.page.url===t&&(i=e),r.push(l.a.createElement(a.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(a.i,{overlay:e.overlay},l.a.createElement(a.i.Button,null,i.variant.title),l.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},r)))}E.Menu=Object(o.f)(a.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,x=Object(o.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),I=Object(o.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(o.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(o.f)(a.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),W=Object(o.f)(a.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(o.f)(a.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,o=e.location,i=n.frontmatter,O=i.title,w=i.description,E=i.status,S=i.source,A=i.additionalContributors,L=void 0===A?[]:A,z=k.a.getVariantRoot(o.pathname);return l.a.createElement(s.a,{components:{Index:m.a,Note:u.a,Prompt:h,PromptReply:d,Screenshot:f.a}},l.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(c.a,{title:O,description:w}),l.a.createElement(p.b,{location:o,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(a.e,{display:["none",null,null,"block"]},l.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:o})),l.a.createElement(I,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(C,null,l.a.createElement(a.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(a.e,null,l.a.createElement(a.e,null,l.a.createElement(a.m,{as:"h1"},O),w))),null!=z?l.a.createElement(_,null,l.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:o})):null),n.tableOfContents.items?l.a.createElement(W,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(a.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(v,{items:n.tableOfContents.items})):null,l.a.createElement(T,null,E||S?l.a.createElement(a.k,{mb:3,alignItems:"center"},E?l.a.createElement(j.a,{status:E}):null,l.a.createElement(a.e,{mx:"auto"}),S?l.a.createElement(g.a,{href:S}):null):null,n.tableOfContents.items?l.a.createElement(a.e,{display:["block",null,"none"],mb:3},l.a.createElement(a.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(a.r,{icon:r.b,mr:2}):l.a.createElement(a.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(a.e,{pt:1},l.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(L.map((function(e){return{login:e}})))}))))))}},pF2e:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));var o=n("zLVn"),a=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This policy describes npm logos and trademarks and how you may use them.\nFor information on what to do if someone infringes a trademark of\n",Object(a.b)("em",{parentName:"p"},"yours")," with a confusing package name, see the ",Object(a.b)("a",{parentName:"p",href:"/policies/disputes"},"Disputes policy"),"."),Object(a.b)("h2",null,"What is npm?"),Object(a.b)("p",null,"The npm project contains two main parts:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The npm client. It is a command line tool to install and publish packages."),Object(a.b)("li",{parentName:"ol"},"The npm registry service. npm, Inc. runs the registry as a free (as in beer) public service for anyone\nwanting to publish an open source package and for anyone to install an open source package.")),Object(a.b)("h2",null,"Why npm, Inc. has a logo policy"),Object(a.b)("p",null,'"npm" and the npm logos are trademarks owned by npm, Inc. We have developed this policy to make it clear how other businesses and projects can (and cannot) use the npm name and logos.'),Object(a.b)("h2",null,"General rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'When referring to the npm software in body text, the first usage should be followed by a generic term such as "package manager," "services" or "client" to provide context.'),Object(a.b)("li",{parentName:"ul"},'"npm" should never be used or explained as an acronym.'),Object(a.b)("li",{parentName:"ul"},'When referring to the npm public registry, please follow npm with the word "registry" or the phrase "public registry".'),Object(a.b)("li",{parentName:"ul"},'When referring to a private registry for npm packages, please describe it as "private registry for npm packages" or a "proxy of the npm registry".'),Object(a.b)("li",{parentName:"ul"},'References to the owner of the npm client software and the operator of the npm public registry should be to "npm, Inc."'),Object(a.b)("li",{parentName:"ul"},'Any materials referring to npm should include the following notice in the footer or wherever you may have your own trademark notice: "npm is a registered trademark of npm, Inc."')),Object(a.b)("h2",null,"Nominative use - No need to type ™ on Twitter","®"),Object(a.b)("p",null,'"Nominative" or "referential" use means to refer to something or someone else by their trademark. So it\'s perfectly OK to use "npm" to refer to npm, Inc., the npm client, npm code, and the npm public registry. A referential use is generally going to be in a sentence or sentence fragment, like "first install the npm client," or in a book or article title. The use should not be attention-getting or potentially misperceived as suggesting "npm" is your own name, project, product or services.'),Object(a.b)("p",null,'It is not a referential use to incorporate the letters "npm" or any of the npm logos in the name or logo for your own company or its projects, products, services or social media handles.'),Object(a.b)("p",null,'If you need to use "npm" to indicate compatibility, you should use "npm" after your own product or service name and an accurate preposition:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pink Unicorn Consulting Ltd. services ",Object(a.b)("strong",null,"for")," npm"),Object(a.b)("li",{parentName:"ul"},"Purple Unicorn Inc. private registry server ",Object(a.b)("strong",null,"compatible with")," the npm client"),Object(a.b)("li",{parentName:"ul"},"Kappa, a hirearchical proxy ",Object(a.b)("strong",null,"of")," the npm registry")),Object(a.b)("p",null,"You need to ask for permission for any uses not described. When in doubt about your use of the npm name or logo, please contact ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/contact"},"npm, Inc.")," for clarification."),Object(a.b)("h2",null,"Requesting permission"),Object(a.b)("p",null,"We like to make it easy for anyone to use the npm name or logo for community-oriented efforts that help spread and improve npm. We are therefore likely to grant permission to use the npm name and logo in the following ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For projects where:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The primary purpose of your project is to promote the spread and\nimprovement of the npm client software or the npm registry service."),Object(a.b)("li",{parentName:"ul"},"Your project is non-commercial in nature (it can make money to cover\nits costs or contribute to non-profit entities, but it cannot be run\nas a for-profit project or business)."),Object(a.b)("li",{parentName:"ul"},"Your project neither promotes nor is associated with entities that\ncurrently fail to comply with the Artistic License 2.0 under which\nnpm is distributed, or which are in violation of this policy."))),Object(a.b)("li",{parentName:"ul"},"For a user group name where:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The main focus of the group is the software."),Object(a.b)("li",{parentName:"ul"},"Any software or services the group provides are without cost."),Object(a.b)("li",{parentName:"ul"},"The group does not make a profit."),Object(a.b)("li",{parentName:"ul"},"Any charge to attend meetings are to cover the cost of the venue, food and drink only.")))),Object(a.b)("p",null,"Any other requests are not likely to be granted licenses, but feel free to ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/contact"},"ask"),"."),Object(a.b)("h2",null,"The npm Logos"),Object(a.b)("p",null,"Our npm Logos are very recognizable and deserve special treatment. In short, the npm logos represent only npm and should not be used to represent your products. The\nnpm Logos signify us, or a special relationship with us, and you\nmay use them only with our permission. Since the goal is to avoid\nconfusion about you being us, or your relationship with us, context\ncounts. We will ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/contact"},"consider requests")," on a case-by-case basis. "),Object(a.b)("h2",null,"The npm Wombat Mascot"),Object(a.b)("p",null,"Like the npm Logo, the npm Wombat graphic is a very recognizable\npart of the npm brand, and signifies a special relationship with\nthe npm project, service, or company.  It should never be used except\nwith explicit written permission.  We will ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/contact"},"consider requests")," on a\ncase-by-case basis."),Object(a.b)("p",null,"Please be advised that the Wombat and the logos generally may\n",Object(a.b)("strong",{parentName:"p"},"not")," be used to refer to the project, service, or company in a\nnominative sense, as any usage will almost always imply a special\nrelationship with npm."),Object(a.b)("h2",null,"Changes"),Object(a.b)("p",null,"This is a living document and may be updated from time to time.\nPlease refer to the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/npm/documentation/blob/main/content/policies/logos-and-usage.mdx"},"git history for this\ndocument"),"\nto view the changes."),Object(a.b)("h2",null,"License"),Object(a.b)("p",null,"Copyright ","©"," npm, Inc."),Object(a.b)("p",null,"This document may be reused under a ",Object(a.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons\nAttribution-ShareAlike\nLicense"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-logos-and-usage-mdx-1def6b97fe5745d94efd.js.map