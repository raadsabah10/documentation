(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"9TJQ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},o={_frontmatter:r},p=l.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff [...<paths>]\nnpm diff --diff=<pkg-name> [...<paths>]\nnpm diff --diff=<version-a> [--diff=<version-b>] [...<paths>]\nnpm diff --diff=<spec-a> [--diff=<spec-b>] [...<paths>]\nnpm diff [--diff-ignore-all-space] [--diff-name-only] [...<paths>]\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Similar to its ",Object(i.b)("inlineCode",{parentName:"p"},"git diff")," counterpart, this command will print diff patches\nof files for packages published to the npm registry."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=<spec-a> --diff=<spec-b>")),Object(i.b)("p",{parentName:"li"},"  Compares two package versions using their registry specifiers, e.g:\n",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=pkg@1.0.0 --diff=pkg@^2.0.0"),". It's also possible to\ncompare across forks of any package,\ne.g: ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=pkg@1.0.0 --diff=pkg-fork@1.0.0"),"."),Object(i.b)("p",{parentName:"li"},"  Any valid spec can be used, so that it's also possible to compare\ndirectories or git repositories,\ne.g: ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=pkg@latest --diff=./packages/pkg")),Object(i.b)("p",{parentName:"li"},"  Here's an example comparing two different versions of a package named\n",Object(i.b)("inlineCode",{parentName:"p"},"abbrev")," from the registry:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=abbrev@1.1.0 --diff=abbrev@1.1.1\n")),Object(i.b)("p",{parentName:"li"},"  On success, output looks like:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'diff --git a/package.json b/package.json\nindex v1.1.0..v1.1.1 100644\n--- a/package.json\n+++ b/package.json\n@@ -1,6 +1,6 @@\n {\n   "name": "abbrev",\n-  "version": "1.1.0",\n+  "version": "1.1.1",\n   "description": "Like ruby\'s abbrev module, but in js",\n   "author": "Isaac Z. Schlueter <i@izs.me>",\n   "main": "abbrev.js",\n')),Object(i.b)("p",{parentName:"li"},"  Given the flexible nature of npm specs, you can also target local\ndirectories or git repos just like when using ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=https://github.com/npm/libnpmdiff --diff=./local-path\n")),Object(i.b)("p",{parentName:"li"},"  In the example above we can compare the contents from the package installed\nfrom the git repo at ",Object(i.b)("inlineCode",{parentName:"p"},"github.com/npm/libnpmdiff")," with the contents of the\n",Object(i.b)("inlineCode",{parentName:"p"},"./local-path")," that contains a valid package, such as a modified copy of\nthe original.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," (in a package directory, no arguments):"),Object(i.b)("p",{parentName:"li"},"  If the package is published to the registry, ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," will fetch the\ntarball version tagged as ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," (this value can be configured using the\n",Object(i.b)("inlineCode",{parentName:"p"},"tag")," option) and proceed to compare the contents of files present in that\ntarball, with the current files in your local file system."),Object(i.b)("p",{parentName:"li"},"  This workflow provides a handy way for package authors to see what\npackage-tracked files have been changed in comparison with the latest\npublished version of that package.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=<pkg-name>")," (in a package directory):"),Object(i.b)("p",{parentName:"li"},"  When using a single package name (with no version or tag specifier) as an\nargument, ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," will work in a similar way to\n",Object(i.b)("a",{parentName:"p",href:"npm-outdated"},Object(i.b)("inlineCode",{parentName:"a"},"npm-outdated"))," and reach for the registry to figure out\nwhat current published version of the package named ",Object(i.b)("inlineCode",{parentName:"p"},"<pkg-name>"),"\nwill satisfy its dependent declared semver-range. Once that specific\nversion is known ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," will print diff patches comparing the\ncurrent version of ",Object(i.b)("inlineCode",{parentName:"p"},"<pkg-name>")," found in the local file system with\nthat specific version returned by the registry."),Object(i.b)("p",{parentName:"li"},"  Given a package named ",Object(i.b)("inlineCode",{parentName:"p"},"abbrev")," that is currently installed:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=abbrev\n")),Object(i.b)("p",{parentName:"li"},"  That will request from the registry its most up to date version and\nwill print a diff output comparing the currently installed version to this\nnewer one if the version numbers are not the same.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=<spec-a>")," (in a package directory):"),Object(i.b)("p",{parentName:"li"},"  Similar to using only a single package name, it's also possible to declare\na full registry specifier version if you wish to compare the local version\nof an installed package with the specific version/tag/semver-range provided\nin ",Object(i.b)("inlineCode",{parentName:"p"},"<spec-a>"),"."),Object(i.b)("p",{parentName:"li"},"  An example: assuming ",Object(i.b)("inlineCode",{parentName:"p"},"pkg@1.0.0")," is installed in the current ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"\nfolder, running:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=pkg@2.0.0\n")),Object(i.b)("p",{parentName:"li"},"  It will effectively be an alias to\n",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=pkg@1.0.0 --diff=pkg@2.0.0"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=<semver-a> [--diff=<semver-b>]")," (in a package directory):"),Object(i.b)("p",{parentName:"li"},"  Using ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," along with semver-valid version numbers is a shorthand\nto compare different versions of the current package."),Object(i.b)("p",{parentName:"li"},"  It needs to be run from a package directory, such that for a package named\n",Object(i.b)("inlineCode",{parentName:"p"},"pkg")," running ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=1.0.0 --diff=1.0.1")," is the same as running\n",Object(i.b)("inlineCode",{parentName:"p"},"npm diff --diff=pkg@1.0.0 --diff=pkg@1.0.1"),"."),Object(i.b)("p",{parentName:"li"},"  If only a single argument ",Object(i.b)("inlineCode",{parentName:"p"},"<version-a>")," is provided, then the current local\nfile system is going to be compared against that version."),Object(i.b)("p",{parentName:"li"},"  Here's an example comparing two specific versions (published to the\nconfigured registry) of the current project directory:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=1.0.0 --diff=1.1.0\n")))),Object(i.b)("p",null,"Note that tag names are not valid ",Object(i.b)("inlineCode",{parentName:"p"},"--diff")," argument values, if you wish to\ncompare to a published tag, you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"pkg@tagname")," syntax."),Object(i.b)("h4",null,"Filtering files"),Object(i.b)("p",null,"It's possible to also specify positional arguments using file names or globs\npattern matching in order to limit the result of diff patches to only a subset\nof files for a given package, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm diff --diff=pkg@2 ./lib/ CHANGELOG.md\n")),Object(i.b)("p",null,"In the example above the diff output is only going to print contents of files\nlocated within the folder ",Object(i.b)("inlineCode",{parentName:"p"},"./lib/")," and changed lines of code within the\n",Object(i.b)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file."),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default:"),Object(i.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(i.b)("p",null,"Define arguments to compare in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-name-only")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Prints only filenames when using ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-unified")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: 3"),Object(i.b)("li",{parentName:"ul"},"Type: Number")),Object(i.b)("p",null,"The number of lines of context to print in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-ignore-all-space")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Ignore whitespace when comparing lines in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-no-prefix")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Do not show any source or destination prefix in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," output."),Object(i.b)("p",null,"Note: this causes ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," to ignore the ",Object(i.b)("inlineCode",{parentName:"p"},"--diff-src-prefix")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"--diff-dst-prefix")," configs."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-src-prefix")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Default: "a/"'),Object(i.b)("li",{parentName:"ul"},"Type: String")),Object(i.b)("p",null,"Source prefix to be used in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," output."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-dst-prefix")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Default: "b/"'),Object(i.b)("li",{parentName:"ul"},"Type: String")),Object(i.b)("p",null,"Destination prefix to be used in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," output."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"diff-text")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Treat all files as text in ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"global")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(i.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(i.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"packages are installed into the ",Object(i.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(i.b)("li",{parentName:"ul"},"bin files are linked to ",Object(i.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(i.b)("li",{parentName:"ul"},"man pages are linked to ",Object(i.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"tag")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Default: "latest"'),Object(i.b)("li",{parentName:"ul"},"Type: String")),Object(i.b)("p",null,"If you ask npm to install a package and don't tell it a specific version,\nthen it will install the specified tag."),Object(i.b)("p",null,"Also the tag that is added to the package@version specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"npm tag"),"\ncommand, if no explicit tag is given."),Object(i.b)("p",null,"When used by the ",Object(i.b)("inlineCode",{parentName:"p"},"npm diff")," command, this is the tag used to fetch the\ntarball that will be compared with the local files by default."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspace")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default:"),Object(i.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(i.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(i.b)("p",null,"Valid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Workspace names"),Object(i.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(i.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nnested workspaces)")),Object(i.b)("p",null,"When set for the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Enable running a command in the context of ",Object(i.b)("strong",{parentName:"p"},"all")," the configured\nworkspaces."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h2",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-outdated"},"npm outdated")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry"))))}c.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),r=n("q1tI"),o=n.n(r),p=n("7ljp"),c=n("pD55"),b=n("8Aig"),s=n("ReZb"),m=n("GCVy"),d=n("+6vE");var f=function(e){var t=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var u=function(e){var t=e.children;return o.a.createElement("strong",null,t)},h=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return o.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var k=y,v=n("MfeC");function C(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=C,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,N=r.title,y=r.description,C=r.status,D=r.source,G=r.additionalContributors,H=void 0===G?[]:G,A=v.a.getVariantRoot(a.pathname);return o.a.createElement(p.a,{components:{Index:s.a,Note:m.a,Prompt:f,PromptReply:u,Screenshot:h.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:N,description:y}),o.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},N),y))),null!=A?o.a.createElement(I,null,o.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?o.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(k,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,C||D?o.a.createElement(i.k,{mb:3,alignItems:"center"},C?o.a.createElement(g.a,{status:C}):null,o.a.createElement(i.e,{mx:"auto"}),D?o.a.createElement(j.a,{href:D}):null):null,n.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-diff-md-f2570a435c33d661c6fe.js.map