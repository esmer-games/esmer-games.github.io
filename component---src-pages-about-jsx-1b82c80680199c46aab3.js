(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,a){"use strict";a.r(t);var n=a(67),r=a(0),o=a.n(r),i=a(179),l=a(142),c={};c.tagLinkContainer=Object(n.css)({name:"1q39ss8",styles:"color:#080808;font-weight:bold;"});var s=function(e){var t=e.tag,a=e.children;return o.a.createElement(l.Link,{to:"/tags/"+t,className:c.tagLinkContainer},a)};a.d(t,"styles",function(){return m}),a.d(t,"query",function(){return u});var m={};m.container=Object(n.css)({name:"1eubfpn",styles:"p{font-size:18px;}h3{font-size:32px;}margin-bottom:20px;"});t.default=function(e){var t=e.data.file;return o.a.createElement(i.a,{title:"About",active:"about",image:t.image.fluid},o.a.createElement("div",{className:m.container},o.a.createElement("i",null,"TODO: Yeah, definitely I have to improve this page..."),o.a.createElement("p",null,"This blog contains updates of any of my current primary interests."),o.a.createElement("p",null,"Those are: ",o.a.createElement(s,{tag:"gamedev"},"Game development"),", ",o.a.createElement(s,{tag:"programming"},"programming"),", ",o.a.createElement(s,{tag:"art"},"digital art"),", ",o.a.createElement(s,{tag:"diy"},"DIY electronics"),"  among others."),o.a.createElement("h3",null,"About me"),o.a.createElement("p",null,"I have few years of programming experience. I've been leader of some projects as full stack developer, and I have years of experimenting in the field at personal level. The technologies that make me feel more comfortable at this moment are NodeJS, React and the space surrounding them. Also I've worked for some time as Java Developer, and personally I enjoyed in the past programming JVM related languages (Kotlin, Clj and related). Despite of that, almost no content is visible, and there is where this blog kicks in!"),o.a.createElement("p",null,"Be a back-end developer is cool, but lately I'm staying at the front side, because I find it less painful (If you have a good designer by your side, of course!). But to be honest, I'm a little bit burnt-out of the programming world (professionally), so I'm trying to bring my personal career to an artistic plane. I still enjoy programming the most tho!"),o.a.createElement("h3",null,"Who's Esmer?"),o.a.createElement("p",null,o.a.createElement("i",null,"Esmer")," the name of a fictional character from a game that I'm planning to develop in a near future. Also the logo of this blog is related to that."),o.a.createElement("h3",null,"Artistic material posted"),o.a.createElement("p",null,"About the material posted, while most of them might be practice material, some others might contain drafts or previews from concepts for my future games."),o.a.createElement("p",null,"This means that, unless stated, the material should be shared under the same terms of the web page. This includes also images or other material outside of a post (Like the header or the logo of this blog)."),o.a.createElement("p",null,'If you want to use some of my material outside (Eg. reddit) and you\'re not sure of something, feel free to ask me (In the footer, go to "Contact me").'),o.a.createElement("p",null,"As a final line about this topic, I want to say that I don't want anyone to feel discouraged to share, rather the opposite! I would feel very comforted if I knew that someone, somewhere enjoys what I do and shares it and spreads it over the internet!")))};var u="4102223435"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(141),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(152),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(29);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){return t[e]}}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return u});var n=a(67),r=a(0),o=a.n(r),i=a(142),l=a(161),c=a(163),s=a.n(c),m={};m.wrapper=Object(n.css)("background:black;min-height:","256px",";max-height:","256px",";display:flex;justify-content:flex-end;flex-direction:column;position:relative;.container{width:100%;margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;padding-bottom:0;z-index:10;}a{color:white;text-decoration:none;}.shade{position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0px -250px 100px -100px black inset;content:'';}"),m.headerImageStyle={position:"absolute",width:"100%",height:"100%"};var u=function(e){var t=e.title,a=e.active,n=e.image;return o.a.createElement("div",{className:m.wrapper},function(e){return e?"string"==typeof e||e.src?o.a.createElement(s.a,{fluid:e,style:m.headerImageStyle}):e:null}(n),o.a.createElement("div",{className:"shade"}),o.a.createElement("div",{className:"container"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.Link,{to:"/"},t)),o.a.createElement(l.a,{active:a})))}},161:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(180),r=a.n(n),o=(a(30),a(68),a(67)),i=a(168),l=a(0),c=a.n(l),s=a(142),m=a(158),u=a(14),d=a(567);function p(){var e=r()(["name"]);return p=function(){return e},e}function f(){var e=r()(["node"]);return f=function(){return e},e}var h={};h.linkContainer=Object(o.css)({name:"1s780nm",styles:"display:flex;.active.item a{color:black;}.ui.menu{width:100%;}"});var g=function(e){var t=e.active;return c.a.createElement(s.StaticQuery,{query:"740653928",render:function(e){var a=e.pages;return c.a.createElement("div",{className:h.linkContainer},c.a.createElement(d.a,{tabular:!0},a.edges.map(Object(m.a)(f())).map(Object(m.a)(p())).map(function(e){return c.a.createElement(d.a.Item,{key:e,active:t===e},c.a.createElement(u.Link,{to:e},function(e){return e.replace(/-/g," ").split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")}(e)))})))},data:i})}},164:function(e){e.exports={data:{site:{meta:{title:{short:"Esmer Games",full:"Esmer Games Blog"}}}}}},165:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(48),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},166:function(e,t,a){},167:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(28);var n=a(0),r=a.n(n),o=a(196),i=function(e){var t=e.title,a=e.extra,n=void 0===a?[]:a;return r.a.createElement(o.Helmet,{title:t},r.a.createElement("html",{lang:"en"}),n.map(function(e,t){return r.a.createElement("meta",Object.assign({},e,{key:t}))}))}},168:function(e){e.exports={data:{pages:{edges:[{node:{name:"about"}}]}}}},173:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(6),r=a.n(n),o=a(0),i=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return null},t}(a.n(o).a.Component)},174:function(e,t,a){"use strict";var n=a(67),r=a(0),o=a.n(r),i=a(568),l=a(558),c=a(569),s=a(570),m=a(564),u=a(272),d=a(563),p=a(562),f=a(560),h=a(561),g=a(566),b=a(142),E=(a(28),{});E.container=Object(n.css)({name:"1b8utac",styles:"margin-top:12px;padding-top:12px;color:#494c4f;a{color:#4c5b69;}"});var v=function(){return o.a.createElement("div",{className:E.container},o.a.createElement(u.a,{name:"creative commons"}),o.a.createElement("span",Object.assign({"xmlns:dct":"http://purl.org/dc/terms/"},{property:"dct:title"}),"Esmer Games Blog")," by ",o.a.createElement("a",Object.assign({"xmlns:cc":"http://creativecommons.org/ns#"},{href:"https://github.com/sigmasoldi3r",property:"cc:attributionName",rel:"cc:attributionURL"}),"Pablo Blanco Celdrán")," is licensed under a ",o.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License"),".")};a.d(t,"a",function(){return w});var y={};y.footer=Object(n.css)({name:"1ocwi5b",styles:"width:100%;display:flex;justify-content:space-around;section{border-right:1px solid black;width:100%;padding:10px;margin:10px;}section:last-child{border-right:0 transparent;}button.link-like-button{background:none;border:none;padding-left:0;color:#4183c4;:hover{color:#1e70bf;cursor:pointer;}}"});var w=function(){return o.a.createElement(i.a,{as:"footer",vertical:!0,inverted:!0,className:y.footer},o.a.createElement(l.a,null,o.a.createElement(c.a,{columns:3,inverted:!0,stackable:!0,divided:!0},o.a.createElement(c.a.Column,null,o.a.createElement(s.a,{inverted:!0},"Esmer games"),o.a.createElement(m.a,null,o.a.createElement(m.a.Item,null,o.a.createElement(b.Link,{to:"/about"},o.a.createElement(u.a,{name:"question"})," About")),o.a.createElement(m.a.Item,null,o.a.createElement(d.a,{trigger:o.a.createElement("button",{className:"link-like-button"},o.a.createElement(u.a,{name:"envelope"})," Contact me")},o.a.createElement(d.a.Header,null,"Contact me"),o.a.createElement(d.a.Content,null,o.a.createElement(d.a.Description,null,o.a.createElement(p.a,{action:"https://formspree.io/esmer.games.blog@gmail.com",method:"POST"},o.a.createElement(p.a.Field,{name:"name",control:f.a,label:"Name",placeholder:"Your name or something to identify you"}),o.a.createElement(p.a.Field,{name:"body",control:h.a,label:"Message body",placeholder:"Your message"}),o.a.createElement(g.a,{type:"submit"},"Submit")))))))),o.a.createElement(c.a.Column,null,o.a.createElement(s.a,{inverted:!0},"Social"),o.a.createElement("a",{href:"https://www.instagram.com/esmergames"},o.a.createElement(u.a,{size:"big",name:"instagram"})),o.a.createElement("a",{href:"https://twitter.com/BlogEsmer"},o.a.createElement(u.a,{size:"big",name:"twitter"})),o.a.createElement("a",{href:"https://www.facebook.com/Esmer-Games-348138162663198/"},o.a.createElement(u.a,{size:"big",name:"facebook"}))),o.a.createElement(c.a.Column,null,o.a.createElement(s.a,{inverted:!0},"Technologies"),o.a.createElement(m.a,null,o.a.createElement(m.a.Item,null,o.a.createElement("a",{href:"https://reactjs.org/"},o.a.createElement(u.a,{name:"react"}),"React")),o.a.createElement(m.a.Item,null,o.a.createElement("a",{href:"https://nodejs.org/"},o.a.createElement(u.a,{name:"node js"}),"NodeJS")),o.a.createElement(m.a.Item,null,o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")),o.a.createElement(m.a.Item,null,o.a.createElement("a",{href:"https://react.semantic-ui.com/"},"Semantic UI React")),o.a.createElement(m.a.Item,null,o.a.createElement("a",{href:"https://pages.github.com/"},"Hosted at ",o.a.createElement(u.a,{name:"github"}),"Github pages"))))),o.a.createElement(v,null)))}},179:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(67),r=a(164),o=a(0),i=a.n(o),l=a(142),c=(a(192),a(193),a(194),a(195),a(166),a(167)),s=a(160),m=a(174),u=a(173),d={};d.wrapper=Object(n.css)("font-size:1.5em;h1{font-size:2em;}.container h1{font-size:1.5em;}min-height:100vh;display:flex;flex-flow:column;justify-content:space-between;.page-content{display:flex;justify-content:space-between;@media (max-width:","980px","){padding-top:16px;display:block;}.side-bar{@media (max-width:","980px","){display:none;}}.center-bar{@media (max-width:","980px","){margin:0;}padding:0px 1.0875rem 1.45rem;padding-top:0;margin:32px;max-width:","980px",";}}");var p=function(e){var t=e.left,a=e.right,n=e.active,o=e.image,p=e.children,f=e.meta,h=e.title,g=e.header,b=void 0===g?s.a:g;return i.a.createElement(l.StaticQuery,{query:"2920417930",render:function(e){var r=e.site.meta,l=h||r.title.full;return i.a.createElement("div",{className:d.wrapper},i.a.createElement(u.a,null),i.a.createElement(c.a,{title:l,extra:f}),i.a.createElement(b,{title:l,image:o,active:n}),i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"side-bar"},t),i.a.createElement("div",{className:"center-bar"},p),i.a.createElement("div",{className:"side-bar"},a)),i.a.createElement(m.a,null))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-1b82c80680199c46aab3.js.map