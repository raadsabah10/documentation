(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{LvcS:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("O6H6"),r={},p={_frontmatter:r},b=l.a;function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(b,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," property of your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file supports a number\nof built-in scripts and their preset life cycle events as well as\narbitrary scripts. These all can be executed by running\n",Object(i.b)("inlineCode",{parentName:"p"},"npm run-script <stage>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm run <stage>")," for short. ",Object(i.b)("em",{parentName:"p"},"Pre")," and ",Object(i.b)("em",{parentName:"p"},"post"),"\ncommands with matching names will be run for those as well (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"premyscript"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"myscript"),", ",Object(i.b)("inlineCode",{parentName:"p"},"postmyscript"),"). Scripts from dependencies can be run with\n",Object(i.b)("inlineCode",{parentName:"p"},"npm explore <pkg> -- npm run <stage>"),"."),Object(i.b)("h3",null,"Pre & Post Scripts"),Object(i.b)("p",null,'To create "pre" or "post" scripts for any scripts defined in the\n',Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," section of the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", simply create another script\n",Object(i.b)("em",{parentName:"p"},"with a matching name"),' and add "pre" or "post" to the beginning of them.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "precompress": "{{ executes BEFORE the `compress` script }}",\n    "compress": "{{ run command to compress files }}",\n    "postcompress": "{{ executes AFTER `compress` script }}"\n  }\n}\n')),Object(i.b)("p",null,"In this example ",Object(i.b)("inlineCode",{parentName:"p"},"npm run compress")," would execute these scripts as\ndescribed."),Object(i.b)("h3",null,"Life Cycle Scripts"),Object(i.b)("p",null,"There are some special life cycle scripts that happen only in certain\nsituations. These scripts happen in addition to the ",Object(i.b)("inlineCode",{parentName:"p"},"pre<event>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"post<event>"),", and\n",Object(i.b)("inlineCode",{parentName:"p"},"<event>")," scripts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepublish"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepublishOnly"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepack"),", ",Object(i.b)("inlineCode",{parentName:"li"},"postpack"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepare")," (since ",Object(i.b)("inlineCode",{parentName:"p"},"npm@4.0.0"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Runs any time before the package is packed, i.e. during ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"npm pack"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Runs BEFORE the package is packed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Runs BEFORE the package is published")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Runs on local ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," without any arguments")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run AFTER ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish"),", but BEFORE ",Object(i.b)("inlineCode",{parentName:"p"},"prepublishOnly"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NOTE: If a package being installed through git contains a ",Object(i.b)("inlineCode",{parentName:"p"},"prepare"),"\nscript, its ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies")," will be installed, and\nthe prepare script will be run, before the package is packaged and\ninstalled.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@7")," these scripts run in the background.\nTo see the output, run with: ",Object(i.b)("inlineCode",{parentName:"p"},"--foreground-scripts"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepublish")," (DEPRECATED)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Does not run during ",Object(i.b)("inlineCode",{parentName:"li"},"npm publish"),", but does run during ",Object(i.b)("inlineCode",{parentName:"li"},"npm ci"),"\nand ",Object(i.b)("inlineCode",{parentName:"li"},"npm install"),". See below for more info.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepublishOnly")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Runs BEFORE the package is prepared and packed, ONLY on ",Object(i.b)("inlineCode",{parentName:"li"},"npm publish"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepack")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Runs BEFORE a tarball is packed (on "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'", "',Object(i.b)("inlineCode",{parentName:"li"},"npm publish"),'", and when installing a git dependencies).'),Object(i.b)("li",{parentName:"ul"},'NOTE: "',Object(i.b)("inlineCode",{parentName:"li"},"npm run pack"),'" is NOT the same as "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'". "',Object(i.b)("inlineCode",{parentName:"li"},"npm run pack"),'" is an arbitrary user defined script name, where as, "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'" is a CLI defined command.')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"postpack")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Runs AFTER the tarball has been generated but before it is moved to its final destination (if at all, publish does not save the tarball locally)")),Object(i.b)("h4",null,"Prepare and Prepublish"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Deprecation Note: prepublish")),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"npm@1.1.71"),", the npm CLI has run the ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," script for both ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", because it's a convenient way to prepare a package for use (some common use cases are described in the section below).  It has also turned out to be, in practice, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/10074"},"very confusing"),".  As of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@4.0.0"),", a new event has been introduced, ",Object(i.b)("inlineCode",{parentName:"p"},"prepare"),", that preserves this existing behavior. A ",Object(i.b)("em",{parentName:"p"},"new")," event, ",Object(i.b)("inlineCode",{parentName:"p"},"prepublishOnly")," has been added as a transitional strategy to allow users to avoid the confusing behavior of existing npm versions and only run on ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," (for instance, running the tests one last time to ensure they're in good shape)."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/10074"},"https://github.com/npm/npm/issues/10074")," for a much lengthier justification, with further reading, for this change."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use Cases")),Object(i.b)("p",null,"If you need to perform operations on your package before it is used, in a way that is not dependent on the operating system or architecture of the target system, use a ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," script. This includes tasks such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Compiling CoffeeScript source code into JavaScript."),Object(i.b)("li",{parentName:"ul"},"Creating minified versions of JavaScript source code."),Object(i.b)("li",{parentName:"ul"},"Fetching remote resources that your package will use.")),Object(i.b)("p",null,"The advantage of doing these things at ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," time is that they can be done once, in a single place, thus reducing complexity and variability. Additionally, this means that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can depend on ",Object(i.b)("inlineCode",{parentName:"li"},"coffee-script")," as a ",Object(i.b)("inlineCode",{parentName:"li"},"devDependency"),", and thus\nyour users don't need to have it installed."),Object(i.b)("li",{parentName:"ul"},"You don't need to include minifiers in your package, reducing\nthe size for your users."),Object(i.b)("li",{parentName:"ul"},"You don't need to rely on your users having ",Object(i.b)("inlineCode",{parentName:"li"},"curl")," or ",Object(i.b)("inlineCode",{parentName:"li"},"wget")," or\nother system tools on the target machines.")),Object(i.b)("h3",null,"Life Cycle Operation Order"),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-cache"},Object(i.b)("inlineCode",{parentName:"a"},"npm cache add"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-ci"},Object(i.b)("inlineCode",{parentName:"a"},"npm ci"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preinstall"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"install"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"postinstall"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"prepublish"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preprepare"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"prepare"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"postprepare")),Object(i.b)("p",{parentName:"li"},"These all run after the actual installation of modules into\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", in order, with no internal actions happening in between"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-diff"},Object(i.b)("inlineCode",{parentName:"a"},"npm diff"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-install"},Object(i.b)("inlineCode",{parentName:"a"},"npm install"))),Object(i.b)("p",null,"These also run when you run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install -g <pkg-name>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preinstall")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postinstall")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepublish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preprepare")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postprepare"))),Object(i.b)("p",null,"If there is a ",Object(i.b)("inlineCode",{parentName:"p"},"binding.gyp")," file in the root of your package and you\nhaven't defined your own ",Object(i.b)("inlineCode",{parentName:"p"},"install")," or ",Object(i.b)("inlineCode",{parentName:"p"},"preinstall")," scripts, npm will\ndefault the ",Object(i.b)("inlineCode",{parentName:"p"},"install")," command to compile using node-gyp via ",Object(i.b)("inlineCode",{parentName:"p"},"node-gyp\nrebuild")),Object(i.b)("p",null,"These are run from the scripts of ",Object(i.b)("inlineCode",{parentName:"p"},"<pkg-name>")),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-pack"},Object(i.b)("inlineCode",{parentName:"a"},"npm pack"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postpack"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-publish"},Object(i.b)("inlineCode",{parentName:"a"},"npm publish"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepublishOnly")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postpack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"publish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postpublish"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"prepare")," will not run during ",Object(i.b)("inlineCode",{parentName:"p"},"--dry-run")),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-rebuild"},Object(i.b)("inlineCode",{parentName:"a"},"npm rebuild"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preinstall")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postinstall")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"prepare")," is only run if the current directory is a symlink (e.g. with\nlinked packages)"),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-restart"},Object(i.b)("inlineCode",{parentName:"a"},"npm restart"))),Object(i.b)("p",null,"If there is a ",Object(i.b)("inlineCode",{parentName:"p"},"restart")," script defined, these events are run, otherwise\n",Object(i.b)("inlineCode",{parentName:"p"},"stop")," and ",Object(i.b)("inlineCode",{parentName:"p"},"start")," are both run if present, including their ",Object(i.b)("inlineCode",{parentName:"p"},"pre")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"post")," iterations)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prerestart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"restart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postrestart"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-run-script"},Object(i.b)("inlineCode",{parentName:"a"},"npm run <user defined>"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pre<user-defined>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<user-defined>")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"post<user-defined>"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-start"},Object(i.b)("inlineCode",{parentName:"a"},"npm start"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prestart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"poststart"))),Object(i.b)("p",null,"If there is a ",Object(i.b)("inlineCode",{parentName:"p"},"server.js")," file in the root of your package, then npm\nwill default the ",Object(i.b)("inlineCode",{parentName:"p"},"start")," command to ",Object(i.b)("inlineCode",{parentName:"p"},"node server.js"),".  ",Object(i.b)("inlineCode",{parentName:"p"},"prestart")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"poststart")," will still run in this case."),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-stop"},Object(i.b)("inlineCode",{parentName:"a"},"npm stop"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prestop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"poststop"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-test"},Object(i.b)("inlineCode",{parentName:"a"},"npm test"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pretest")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"posttest"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-version"},Object(i.b)("inlineCode",{parentName:"a"},"npm version"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preversion")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postversion"))),Object(i.b)("h4",null,"A Note on a lack of ",Object(i.b)("a",{parentName:"h4",href:"/cli/v8/commands/npm-uninstall"},Object(i.b)("inlineCode",{parentName:"a"},"npm uninstall"))," scripts"),Object(i.b)("p",null,"While npm v6 had ",Object(i.b)("inlineCode",{parentName:"p"},"uninstall")," lifecycle scripts, npm v7 does not. Removal of a package can happen for a wide variety of reasons, and there's no clear way to currently give the script enough context to be useful. "),Object(i.b)("p",null,"Reasons for a package removal include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a user directly uninstalled this package"),Object(i.b)("li",{parentName:"ul"},"a user uninstalled a dependant package and so this dependency is being uninstalled"),Object(i.b)("li",{parentName:"ul"},"a user uninstalled a dependant package but another package also depends on this version"),Object(i.b)("li",{parentName:"ul"},"this version has been merged as a duplicate with another version"),Object(i.b)("li",{parentName:"ul"},"etc.")),Object(i.b)("p",null,"Due to the lack of necessary context, ",Object(i.b)("inlineCode",{parentName:"p"},"uninstall")," lifecycle scripts are not implemented and will not function."),Object(i.b)("h3",null,"User"),Object(i.b)("p",null,"When npm is run as root, scripts are always run with the effective uid\nand gid of the working directory owner."),Object(i.b)("h3",null,"Environment"),Object(i.b)("p",null,"Package scripts run in an environment where many pieces of information\nare made available regarding the setup of npm and the current state of\nthe process."),Object(i.b)("h4",null,"path"),Object(i.b)("p",null,"If you depend on modules that define executable scripts, like test\nsuites, then those executables will be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," for\nexecuting the scripts.  So, if your package.json has this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "foo",\n  "dependencies" : {\n    "bar" : "0.1.x"\n  },\n  "scripts": {\n    "start" : "bar ./test"\n  }\n}\n')),Object(i.b)("p",null,"then you could run ",Object(i.b)("inlineCode",{parentName:"p"},"npm start")," to execute the ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," script, which is\nexported into the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," directory on ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(i.b)("h4",null,"package.json vars"),Object(i.b)("p",null,"The package.json fields are tacked onto the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_package_")," prefix. So,\nfor instance, if you had ",Object(i.b)("inlineCode",{parentName:"p"},'{"name":"foo", "version":"1.2.5"}')," in your\npackage.json file, then your package scripts would have the\n",Object(i.b)("inlineCode",{parentName:"p"},"npm_package_name"),' environment variable set to "foo", and the\n',Object(i.b)("inlineCode",{parentName:"p"},"npm_package_version"),' set to "1.2.5".  You can access these variables\nin your code with ',Object(i.b)("inlineCode",{parentName:"p"},"process.env.npm_package_name")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"process.env.npm_package_version"),", and so on for other fields."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," for more on package configs."),Object(i.b)("h4",null,"current lifecycle event"),Object(i.b)("p",null,"Lastly, the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_lifecycle_event")," environment variable is set to\nwhichever stage of the cycle is being executed. So, you could have a\nsingle script used for different parts of the process which switches\nbased on what's currently happening."),Object(i.b)("p",null,"Objects are flattened following this format, so if you had\n",Object(i.b)("inlineCode",{parentName:"p"},'{"scripts":{"install":"foo.js"}}')," in your package.json, then you'd\nsee this in the script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'process.env.npm_package_scripts_install === "foo.js"\n')),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"For example, if your package.json contains this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts" : {\n    "install" : "scripts/install.js",\n    "postinstall" : "scripts/install.js",\n    "uninstall" : "scripts/uninstall.js"\n  }\n}\n')),Object(i.b)("p",null,"then ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/install.js")," will be called for the install\nand post-install stages of the lifecycle, and ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/uninstall.js"),"\nwill be called when the package is uninstalled.  Since\n",Object(i.b)("inlineCode",{parentName:"p"},"scripts/install.js")," is running for two different phases, it would\nbe wise in this case to look at the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_lifecycle_event")," environment\nvariable."),Object(i.b)("p",null,"If you want to run a make command, you can do so.  This works just\nfine:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts" : {\n    "preinstall" : "./configure",\n    "install" : "make && make install",\n    "test" : "make test"\n  }\n}\n')),Object(i.b)("h3",null,"Exiting"),Object(i.b)("p",null,"Scripts are run by passing the line as a script argument to ",Object(i.b)("inlineCode",{parentName:"p"},"sh"),"."),Object(i.b)("p",null,"If the script exits with a code other than 0, then this will abort the\nprocess."),Object(i.b)("p",null,"Note that these script files don't have to be Node.js or even\nJavaScript programs. They just have to be some kind of executable\nfile."),Object(i.b)("h3",null,"Best Practices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't exit with a non-zero error code unless you ",Object(i.b)("em",{parentName:"li"},"really")," mean it.\nExcept for uninstall scripts, this will cause the npm action to\nfail, and potentially be rolled back.  If the failure is minor or\nonly will prevent some optional features, then it's better to just\nprint a warning and exit successfully."),Object(i.b)("li",{parentName:"ul"},"Try not to use scripts to do what npm can do for you.  Read through\n",Object(i.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," to see all the things that you can specify and enable\nby simply describing your package appropriately.  In general, this\nwill lead to a more robust and consistent state."),Object(i.b)("li",{parentName:"ul"},"Inspect the env to determine where to put things.  For instance, if\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"npm_config_binroot")," environment variable is set to ",Object(i.b)("inlineCode",{parentName:"li"},"/home/user/bin"),", then\ndon't try to install executables into ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/bin"),".  The user\nprobably set it up that way for a reason."),Object(i.b)("li",{parentName:"ul"},"Don't prefix your script commands with \"sudo\".  If root permissions\nare required for some reason, then it'll fail with that error, and\nthe user will sudo the npm command in question."),Object(i.b)("li",{parentName:"ul"},"Don't use ",Object(i.b)("inlineCode",{parentName:"li"},"install"),". Use a ",Object(i.b)("inlineCode",{parentName:"li"},".gyp")," file for compilation, and ",Object(i.b)("inlineCode",{parentName:"li"},"prepare"),"\nfor anything else. You should almost never have to explicitly set a\npreinstall or install script. If you are doing this, please consider if\nthere is another option. The only valid use of ",Object(i.b)("inlineCode",{parentName:"li"},"install")," or ",Object(i.b)("inlineCode",{parentName:"li"},"preinstall"),"\nscripts is for compilation which must be done on the target architecture."),Object(i.b)("li",{parentName:"ul"},"Scripts are run from the root of the package folder, regardless of what the\ncurrent working directory is when ",Object(i.b)("inlineCode",{parentName:"li"},"npm")," is invoked. If you want your\nscript to use different behavior based on what subdirectory you're in, you\ncan use the ",Object(i.b)("inlineCode",{parentName:"li"},"INIT_CWD")," environment variable, which holds the full path you\nwere in when you ran ",Object(i.b)("inlineCode",{parentName:"li"},"npm run"),".")),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-run-script"},"npm run-script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/developers"},"npm developers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install"))))}c.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),l=t("aOgs"),r=t("q1tI"),p=t.n(r),b=t("7ljp"),c=t("pD55"),o=t("8Aig"),s=t("ReZb"),m=t("GCVy"),u=t("+6vE");var d=function(e){var n=e.children;return p.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},p.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var j=function(e){var n=e.children;return p.a.createElement("strong",null,n)},O=t("gnlW"),h=t("mwnC"),N=t("/Rw0"),f=t("dVM4"),g=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function C(e){var n=e.items,t=e.depth;return p.a.createElement(g,{key:n,as:"ul",m:0,p:0},n.map((function(e){return p.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},p.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?p.a.createElement(C,{items:e.items,depth:t+1}):null)})))}C.defaultProps={depth:0};var y=C,v=t("MfeC");function k(e){var n=v.a.getPath(e.location.pathname),t=v.a.getVariantAndPage(e.root,n);if(!t)return null;var a=v.a.getVariantsForPage(e.root,t.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(r=e),l.push(p.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),p.a.createElement(i.i,{overlay:e.overlay},p.a.createElement(i.i.Button,null,r.variant.title),p.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,r=t.frontmatter,g=r.title,C=r.description,k=r.status,R=r.source,D=r.additionalContributors,A=void 0===D?[]:D,F=v.a.getVariantRoot(a.pathname);return p.a.createElement(b.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:j,Screenshot:O.a}},p.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},p.a.createElement(c.a,{title:g,description:C}),p.a.createElement(o.b,{location:a,isSearchEnabled:t.isSearchEnabled}),p.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},p.a.createElement(i.e,{display:["none",null,null,"block"]},p.a.createElement(h.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),p.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},p.a.createElement(_,null,p.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},p.a.createElement(i.e,null,p.a.createElement(i.e,null,p.a.createElement(i.m,{as:"h1"},g),C))),null!=F?p.a.createElement(I,null,p.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:F,location:a})):null),t.tableOfContents.items?p.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:o.a+24,mt:"6px",maxHeight:"calc(100vh - "+o.a+"px - 24px)"},p.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),p.a.createElement(y,{items:t.tableOfContents.items})):null,p.a.createElement(T,null,k||R?p.a.createElement(i.k,{mb:3,alignItems:"center"},k?p.a.createElement(f.a,{status:k}):null,p.a.createElement(i.e,{mx:"auto"}),R?p.a.createElement(N.a,{href:R}):null):null,t.tableOfContents.items?p.a.createElement(i.e,{display:["block",null,"none"],mb:3},p.a.createElement(i.h,null,(function(e){var n=e.open;return p.a.createElement(p.a.Fragment,null,p.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?p.a.createElement(i.r,{icon:l.b,mr:2}):p.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),p.a.createElement(i.e,{pt:1},p.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,p.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-scripts-md-07bcae5b68b3cc753b7c.js.map