"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l,a){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,l.default)(i,a.default.modulePrefix),e.default=i}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,n){var l=require("highlight.js");e.default=t.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,l=e.split("\n"),a=0;a<l.length;a++)t=/^\s*/.exec(l[a]),t&&("undefined"==typeof n||n>t[0].length)&&(n=t[0].length);return"undefined"!=typeof n&&n>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+n+"}","g"),"$1")),e},source:t.default.computed("name",function(){return this._unindent((n.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){l.highlightBlock(this.get("element"))},language:t.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"coffee":return"coffeescript";case"hbs":return"htmlbars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem";case"ts":return"typescript"}})})}),define("dummy/components/tf-checkbox",["exports","ember-ticketfly-checkbox/components/tf-checkbox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/index",["exports","ember-controller"],function(e,t){e.default=t.default.extend({actions:{alertHello:function(e,t){alert("Hello, friend! "+t+" is "+e)}}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){return a}e.appVersion=l;var a=n.default.APP.version;e.default=t.default.Helper.helper(l)}),define("dummy/helpers/hook",["exports","ember-hook/helpers/hook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hook",{enumerable:!0,get:function(){return t.hook}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var l=n.default.APP,a=l.name,i=l.version;e.default={name:"App Version",initialize:(0,t.default)(a,i)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/ember-hook/initialize",["exports","ember-hook/initializers/ember-hook/initialize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var a,i=n.default.exportApplicationGlobal;a="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),l[a]||(l[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[a]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){}),e.default=l}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/snippets",["exports"],function(e){e.default={"alert-hello.js":"  actions: {\n    alertHello(checked, value) {\n      alert(`Hello, friend! ${value} is ${checked}`);\n    }\n  }","block-form.hbs":'  {{#tf-checkbox}}\n    Square Checkbox\n  {{/tf-checkbox}}\n\n  {{#tf-checkbox checked=true}}\n    Square Checked\n  {{/tf-checkbox}}\n\n  {{#tf-checkbox shapeStyle="round"}}\n    Round Checkbox\n  {{/tf-checkbox}}\n\n  {{#tf-checkbox shapeStyle="round" checked=true}}\n    Round Checked\n  {{/tf-checkbox}}',"disabled.hbs":'  {{tf-checkbox disabled=true}}\n  {{tf-checkbox shapeStyle="round" disabled=true}}',"no-params.hbs":"  {{tf-checkbox}}","passing-action.hbs":'  {{#tf-checkbox onClick=(action "alertHello") value="Checky"}}\n    Click Me To Say Hi\n  {{/tf-checkbox}}',"shape-style.hbs":'  {{tf-checkbox}}\n  {{tf-checkbox checked=true}}\n  {{tf-checkbox shapeStyle="round"}}\n  {{tf-checkbox shapeStyle="round" checked=true}}'}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"v33rXOE2",block:'{"statements":[["open-element","div",[]],["static-attr","class","u-mh-lg u-mb-xl"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mJxgtHOS",block:'{"statements":[["append",["unknown",["source"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"LDeUxzFm",block:'{"statements":[["open-element","h1",[]],["flush-element"],["text","tf-checkbox"],["close-element"],["text","\\n\\n"],["open-element","p",[]],["static-attr","class","u-m-0"],["flush-element"],["text","Min-width: 17px | Min-height: 17px | Border radius: 2px."],["close-element"],["text","\\n"],["open-element","p",[]],["static-attr","class","u-m-0 u-mb-md"],["flush-element"],["text","Default shapeStyle is \\"square\\"."],["close-element"],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","No parameters"],["close-element"],["text","\\n\\n"],["text","  "],["append",["unknown",["tf-checkbox"]],false],["text","\\n"],["text","\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["no-params.hbs","u-mv-md u-p-md"]]],false],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Shape style"],["close-element"],["text","\\n\\n"],["text","  "],["append",["unknown",["tf-checkbox"]],false],["text","\\n  "],["append",["helper",["tf-checkbox"],null,[["checked"],[true]]],false],["text","\\n  "],["append",["helper",["tf-checkbox"],null,[["shapeStyle"],["round"]]],false],["text","\\n  "],["append",["helper",["tf-checkbox"],null,[["shapeStyle","checked"],["round",true]]],false],["text","\\n"],["text","\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["shape-style.hbs","u-mv-md u-p-md"]]],false],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Block form"],["close-element"],["text","\\n\\n"],["block",["tf-checkbox"],null,null,4],["text","\\n"],["block",["tf-checkbox"],null,[["checked"],[true]],3],["text","\\n"],["block",["tf-checkbox"],null,[["shapeStyle"],["round"]],2],["text","\\n"],["block",["tf-checkbox"],null,[["shapeStyle","checked"],["round",true]],1],["text","\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["block-form.hbs","u-mv-md u-p-md"]]],false],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Disabled"],["close-element"],["text","\\n\\n"],["text","  "],["append",["helper",["tf-checkbox"],null,[["disabled"],[true]]],false],["text","\\n  "],["append",["helper",["tf-checkbox"],null,[["shapeStyle","disabled"],["round",true]]],false],["text","\\n"],["text","\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["disabled.hbs","u-mv-md u-p-md"]]],false],["text","\\n\\n"],["open-element","h2",[]],["flush-element"],["text","Passing in an action"],["close-element"],["text","\\n\\n"],["block",["tf-checkbox"],null,[["onClick","value"],[["helper",["action"],[["get",[null]],"alertHello"],null],"Checky"]],0],["text","\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["passing-action.hbs","u-mv-md u-p-md"]]],false],["text","\\n\\n"],["append",["helper",["code-snippet"],null,[["name","class"],["alert-hello.js","u-mv-md u-p-md"]]],false],["text","\\n\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    Click Me To Say Hi\\n"]],"locals":[]},{"statements":[["text","    Round Checked\\n"]],"locals":[]},{"statements":[["text","    Round Checkbox\\n"]],"locals":[]},{"statements":[["text","    Square Checked\\n"]],"locals":[]},{"statements":[["text","    Square Checkbox\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",l=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(l)),i={default:a};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-ticketfly-checkbox",version:"0.0.0+1f21f94c"});