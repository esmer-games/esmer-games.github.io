(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t);a(28);var n=a(180),r=a.n(n),i=(a(235),a(67)),o=a(0),c=a.n(o),s=a(158),l=a(271),m=a(179),p=a(6),d=a.n(p),u=a(545),A=a(160),g=a(142),f=a(163),h=a.n(f),b=a(161),E=a(350),v=a.n(E),x=(a(546),{});x.titleWrapper=Object(i.css)("width:100%;height:calc(100% - 110px);display:flex;top:0;left:0;position:absolute;justify-content:center;.icon-wrapper{display:flex;flex-flow:column;justify-content:center;img{border-radius:50%;box-shadow:0 0 32px 18px black;background-color:rgba(0,0,0,0.8);width:","200px",";height:","200px",";}}"),x.wrapper=Object(i.css)("@import url('https://fonts.googleapis.com/css?family=Kanit');",A.b.wrapper," min-height:","400px",";max-height:","400px",";.container-wrapper{a{transition:color 0.5s;}background-color:transparent;transition:background-color 0.5s;z-index:10;}.container-wrapper.sticky{position:fixed;top:0;width:100%;background-color:white;a{color:black;transition:color 0.5s;}transition:background-color 0.5s;}.title-wrapper{",x.titleWrapper," z-index:10;h1{position:absolute;text-align:center;color:white;font-family:'Kanit',sans-serif;font-size:64px;bottom:25%;text-shadow:16px 0 16px black,0 16px 16px black;small{font-size:32px;color:red;position:absolute;right:-30px;bottom:-30px;transform:rotate(-30deg);@media (max-width:430px){display:none;}}}}");var y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1,stickNav:!1},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;document.onscroll=function(){var t=document.documentElement.scrollTop;e.setState({stickNav:t>290,scrolled:t})}},a.render=function(){var e=this.props.title,t=this.state,a=t.scrolled,n=t.stickNav;return c.a.createElement(g.StaticQuery,{query:"1331359220",render:function(t){return c.a.createElement("div",{className:x.wrapper},c.a.createElement(h.a,{fluid:t.file.data.fluid,style:A.b.headerImageStyle}),c.a.createElement("div",{className:"shade"}),c.a.createElement("div",{className:"title-wrapper"},c.a.createElement("div",{className:"icon-wrapper"},c.a.createElement("img",{src:v.a,alt:"Site logo"})),c.a.createElement("h1",{className:a?"animated fadeOut":"animated fadeIn"},"Esmer Games ",c.a.createElement("small",null,"Blog"))),c.a.createElement("div",{className:["container-wrapper",n&&"sticky"].join(" ")},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{style:{margin:0},className:a?"animated fadeIn":"animated fadeOut"},c.a.createElement(g.Link,{to:"/"},e)),c.a.createElement(b.a,null))))},data:u})},t}(c.a.Component),w=a(565),k=a(571),j=a(272),N=a(547);function C(){var e=r()(["node"]);return C=function(){return e},e}a.d(t,"styles",function(){return Q}),a.d(t,"query",function(){return B});var Q={};Q.container=Object(i.css)({name:"hboir5",styles:"display:flex;width:100%;"}),Q.avatar=Object(i.css)({name:"jqzv6a",styles:"img{border-radius:50%;}margin:auto;"}),Q.floatingMessage=Object(i.css)({name:"1f78t55",styles:"position:fixed;top:20px;right:20px;border-radius:50%;background-color:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;width:64px;height:64px;z-index:100;opacity:0.5;box-shadow:0 0 12px black;i{margin:0;}transition-property:opacity;transition-duration:500ms;:hover{opacity:1;transition-property:opacity;transition-duration:500ms;cursor:help;}"});t.default=function(e){var t,a=e.data,n=a.posts,r=a.avatar;return c.a.createElement(m.a,{header:y,right:(t=r,c.a.createElement(w.a,null,c.a.createElement(h.a,{className:Q.avatar,fixed:t.childImageSharp.fixed}),c.a.createElement(w.a.Content,null,c.a.createElement(w.a.Header,null,"Pablo Blanco"),c.a.createElement(w.a.Meta,null,c.a.createElement("span",{className:"date"},"Author")),c.a.createElement(w.a.Description,null,c.a.createElement("p",null,"Hey! I'm Pablo Blanco Celdrán, the author of this blog and I'm excited about the idea of making posts of my progress as an artist, game developer and person."),c.a.createElement("p",null,"I have few years of programming experience. I've been leader of some projects as full stack developer, and I have years of experimenting in the field at personal level. I'm trying to make my personal career grow towards a more artistic perspective."))))),meta:[{property:"og:url",content:"https://esmer-games.github.io"+v.a},{property:"og:title",content:N.siteMetadata.title},{property:"og:description",content:N.siteMetadata.description},{property:"og:type",content:"article"},{property:"og:image",content:"https://esmer-games.github.io"+v.a},{name:"description",content:N.siteMetadata.description},{name:"author",content:"Pablo Blanco Celdrán"},{name:"copyright",content:"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:N.siteMetadata.title},{name:"twitter:description",content:N.siteMetadata.description},{name:"twitter:image",content:"https://esmer-games.github.io"+v.a}]},c.a.createElement(k.a,{trigger:c.a.createElement("div",{className:Q.floatingMessage},c.a.createElement(j.a,{name:"exclamation triangle",size:"large",inverted:!0}))},"Some features like ",c.a.createElement("b",null,"pagination")," are still under development! This warning will disappear when main functionalities are implemented."),n.edges.map(Object(s.a)(C())).map(function(e){return c.a.createElement(l.a,Object.assign({},e,{key:e.id}))}))};var B="1693180162"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return A}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(141),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(152),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var p=a(29);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){return t[e]}}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return p});var n=a(67),r=a(0),i=a.n(r),o=a(142),c=a(161),s=a(163),l=a.n(s),m={};m.wrapper=Object(n.css)("background:black;min-height:","256px",";max-height:","256px",";display:flex;justify-content:flex-end;flex-direction:column;position:relative;.container{width:100%;margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;padding-bottom:0;z-index:10;}a{color:white;text-decoration:none;}.shade{position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0px -250px 100px -100px black inset;content:'';}"),m.headerImageStyle={position:"absolute",width:"100%",height:"100%"};var p=function(e){var t=e.title,a=e.active,n=e.image;return i.a.createElement("div",{className:m.wrapper},function(e){return e?"string"==typeof e||e.src?i.a.createElement(l.a,{fluid:e,style:m.headerImageStyle}):e:null}(n),i.a.createElement("div",{className:"shade"}),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/"},t)),i.a.createElement(c.a,{active:a})))}},161:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(180),r=a.n(n),i=(a(30),a(68),a(67)),o=a(168),c=a(0),s=a.n(c),l=a(142),m=a(158),p=a(14),d=a(567);function u(){var e=r()(["name"]);return u=function(){return e},e}function A(){var e=r()(["node"]);return A=function(){return e},e}var g={};g.linkContainer=Object(i.css)({name:"1s780nm",styles:"display:flex;.active.item a{color:black;}.ui.menu{width:100%;}"});var f=function(e){var t=e.active;return s.a.createElement(l.StaticQuery,{query:"740653928",render:function(e){var a=e.pages;return s.a.createElement("div",{className:g.linkContainer},s.a.createElement(d.a,{tabular:!0},a.edges.map(Object(m.a)(A())).map(Object(m.a)(u())).map(function(e){return s.a.createElement(d.a.Item,{key:e,active:t===e},s.a.createElement(p.Link,{to:e},function(e){return e.replace(/-/g," ").split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")}(e)))})))},data:o})}},164:function(e){e.exports={data:{site:{meta:{title:{short:"Esmer Games",full:"Esmer Games Blog"}}}}}},165:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},166:function(e,t,a){},167:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(28);var n=a(0),r=a.n(n),i=a(196),o=function(e){var t=e.title,a=e.extra,n=void 0===a?[]:a;return r.a.createElement(i.Helmet,{title:t},r.a.createElement("html",{lang:"en"}),n.map(function(e,t){return r.a.createElement("meta",Object.assign({},e,{key:t}))}))}},168:function(e){e.exports={data:{pages:{edges:[{node:{name:"about"}}]}}}},173:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(6),r=a.n(n),i=a(0),o=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return null},t}(a.n(i).a.Component)},174:function(e,t,a){"use strict";var n=a(67),r=a(0),i=a.n(r),o=a(568),c=a(558),s=a(569),l=a(570),m=a(564),p=a(272),d=a(563),u=a(562),A=a(560),g=a(561),f=a(566),h=a(142),b=(a(28),{});b.container=Object(n.css)({name:"1b8utac",styles:"margin-top:12px;padding-top:12px;color:#494c4f;a{color:#4c5b69;}"});var E=function(){return i.a.createElement("div",{className:b.container},i.a.createElement(p.a,{name:"creative commons"}),i.a.createElement("span",Object.assign({"xmlns:dct":"http://purl.org/dc/terms/"},{property:"dct:title"}),"Esmer Games Blog")," by ",i.a.createElement("a",Object.assign({"xmlns:cc":"http://creativecommons.org/ns#"},{href:"https://github.com/sigmasoldi3r",property:"cc:attributionName",rel:"cc:attributionURL"}),"Pablo Blanco Celdrán")," is licensed under a ",i.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License"),".")};a.d(t,"a",function(){return x});var v={};v.footer=Object(n.css)({name:"1ocwi5b",styles:"width:100%;display:flex;justify-content:space-around;section{border-right:1px solid black;width:100%;padding:10px;margin:10px;}section:last-child{border-right:0 transparent;}button.link-like-button{background:none;border:none;padding-left:0;color:#4183c4;:hover{color:#1e70bf;cursor:pointer;}}"});var x=function(){return i.a.createElement(o.a,{as:"footer",vertical:!0,inverted:!0,className:v.footer},i.a.createElement(c.a,null,i.a.createElement(s.a,{columns:3,inverted:!0,stackable:!0,divided:!0},i.a.createElement(s.a.Column,null,i.a.createElement(l.a,{inverted:!0},"Esmer games"),i.a.createElement(m.a,null,i.a.createElement(m.a.Item,null,i.a.createElement(h.Link,{to:"/about"},i.a.createElement(p.a,{name:"question"})," About")),i.a.createElement(m.a.Item,null,i.a.createElement(d.a,{trigger:i.a.createElement("button",{className:"link-like-button"},i.a.createElement(p.a,{name:"envelope"})," Contact me")},i.a.createElement(d.a.Header,null,"Contact me"),i.a.createElement(d.a.Content,null,i.a.createElement(d.a.Description,null,i.a.createElement(u.a,{action:"https://formspree.io/esmer.games.blog@gmail.com",method:"POST"},i.a.createElement(u.a.Field,{name:"name",control:A.a,label:"Name",placeholder:"Your name or something to identify you"}),i.a.createElement(u.a.Field,{name:"body",control:g.a,label:"Message body",placeholder:"Your message"}),i.a.createElement(f.a,{type:"submit"},"Submit")))))))),i.a.createElement(s.a.Column,null,i.a.createElement(l.a,{inverted:!0},"Social"),i.a.createElement("a",{href:"https://www.instagram.com/esmergames"},i.a.createElement(p.a,{size:"big",name:"instagram"})),i.a.createElement("a",{href:"https://twitter.com/BlogEsmer"},i.a.createElement(p.a,{size:"big",name:"twitter"})),i.a.createElement("a",{href:"https://www.facebook.com/Esmer-Games-348138162663198/"},i.a.createElement(p.a,{size:"big",name:"facebook"}))),i.a.createElement(s.a.Column,null,i.a.createElement(l.a,{inverted:!0},"Technologies"),i.a.createElement(m.a,null,i.a.createElement(m.a.Item,null,i.a.createElement("a",{href:"https://reactjs.org/"},i.a.createElement(p.a,{name:"react"}),"React")),i.a.createElement(m.a.Item,null,i.a.createElement("a",{href:"https://nodejs.org/"},i.a.createElement(p.a,{name:"node js"}),"NodeJS")),i.a.createElement(m.a.Item,null,i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")),i.a.createElement(m.a.Item,null,i.a.createElement("a",{href:"https://react.semantic-ui.com/"},"Semantic UI React")),i.a.createElement(m.a.Item,null,i.a.createElement("a",{href:"https://pages.github.com/"},"Hosted at ",i.a.createElement(p.a,{name:"github"}),"Github pages"))))),i.a.createElement(E,null)))}},179:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(67),r=a(164),i=a(0),o=a.n(i),c=a(142),s=(a(192),a(193),a(194),a(195),a(166),a(167)),l=a(160),m=a(174),p=a(173),d={};d.wrapper=Object(n.css)("font-size:1.5em;h1{font-size:2em;}.container h1{font-size:1.5em;}min-height:100vh;display:flex;flex-flow:column;justify-content:space-between;.page-content{display:flex;justify-content:space-between;@media (max-width:","980px","){padding-top:16px;display:block;}.side-bar{@media (max-width:","980px","){display:none;}}.center-bar{@media (max-width:","980px","){margin:0;}padding:0px 1.0875rem 1.45rem;padding-top:0;margin:32px;max-width:","980px",";}}");var u=function(e){var t=e.left,a=e.right,n=e.active,i=e.image,u=e.children,A=e.meta,g=e.title,f=e.header,h=void 0===f?l.a:f;return o.a.createElement(c.StaticQuery,{query:"2920417930",render:function(e){var r=e.site.meta,c=g||r.title.full;return o.a.createElement("div",{className:d.wrapper},o.a.createElement(p.a,null),o.a.createElement(s.a,{title:c,extra:A}),o.a.createElement(h,{title:c,image:i,active:n}),o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{className:"side-bar"},t),o.a.createElement("div",{className:"center-bar"},u),o.a.createElement("div",{className:"side-bar"},a)),o.a.createElement(m.a,null))},data:r})}},271:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(67),r=a(0),i=a.n(r),o=a(142),c=a(163),s=a.n(c),l=a(570),m=a(351),p={};p.postLinkContainer=Object(n.css)(".content{margin-bottom:12px;margin-top:12px;position:relative;display:flex;}.link-content{margin-left:22px;}.gatsby-image-wrapper{min-width:","300px",";}@media (max-width:",550,"px){& > .content{min-height:300px;display:block;}img{border-top-right-radius:8px;}position:relative;.link-content{box-shadow:0 -280px 32px -32px rgba(255,255,255,0.9) inset;margin-left:0;position:absolute;bottom:0;width:100%;p,h1{padding:6px;}h1{margin:0;}}}.ui.label{color:#4183c4;}border-radius:8px;img{border-top-left-radius:8px;}.tag-container{padding-bottom:32px;width:100%;border-bottom:1px solid grey;border-radius:8px;}");var d="undefined"!=typeof window,u=function(e){var t=e.fields,a=e.meta,n=e.excerptShort,r=e.excerpt;return i.a.createElement("div",{className:p.postLinkContainer},i.a.createElement("div",{className:"content"},i.a.createElement(s.a,{fluid:a.thumbnail.data.fluid}),i.a.createElement("div",{className:"link-content"},i.a.createElement(l.a,{as:"h1"},i.a.createElement(l.a.Content,null,i.a.createElement(o.Link,{to:t.slug},a.title),i.a.createElement(l.a.Subheader,null,a.date))),i.a.createElement("p",null,d&&window.innerWidth<=550?n:r))),i.a.createElement("div",{className:"tag-container"},a.tags.map(function(e){return i.a.createElement(m.a,{as:"a",href:"/tags/"+e,key:e,tag:!0},"#",e)})))}},350:function(e,t,a){e.exports=a.p+"static/esmer-logo-7c573eef4a192db14e59317cacd4285d.svg"},545:function(e){e.exports={data:{file:{data:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHPTMr2Yr//xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIxAxP/2gAIAQEAAQUCVojoj1lCxaf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAARARITL/2gAIAQEABj8Cs06YxR//xAAaEAEAAgMBAAAAAAAAAAAAAAABABExQaGR/9oACAEBAAE/IVOVywOlkBV4E4pyxyz/2gAMAwEAAgADAAAAECjP/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EAB0QAQEBAAAHAAAAAAAAAAAAAAERABAhMUFRkbH/2gAIAQEAAT8Qp0+NtzE5EA6r3wqdAHk3gHtv65IQoV3/2Q==",aspectRatio:1.9486203615604187,src:"/static/aabc165dc81c761c951194d41a5f32f5/1893e/home-header-bg.jpeg",srcSet:"/static/aabc165dc81c761c951194d41a5f32f5/eab85/home-header-bg.jpeg 512w,\n/static/aabc165dc81c761c951194d41a5f32f5/d28b5/home-header-bg.jpeg 1024w,\n/static/aabc165dc81c761c951194d41a5f32f5/1893e/home-header-bg.jpeg 2048w",sizes:"(max-width: 2048px) 100vw, 2048px"}}}}}},547:function(e,t){(function(t){e.exports={siteMetadata:{description:"A personal blog that revolves around the development of my personalprojects, my development as an amateur artist and programmer.Weekend DIY projects, game development and probably, my dogs.",title:{full:"Esmer Games Blog",short:"Esmer Games"}},plugins:[{resolve:"gatsby-plugin-emotion",options:{}},"gatsby-plugin-react-helmet",{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex","gatsby-remark-prismjs",{resolve:"gatsby-remark-images",options:{maxWidth:590,showCaptions:!0,quality:100}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}}]}},{resolve:"gatsby-source-filesystem",options:{name:"posts",path:t+"/src/posts"}},{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-source-filesystem",options:{name:"pages",path:t+"/src/pages"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"esmer-games-blog",short_name:"esmer-games",start_url:"/",background_color:"#663399",theme_color:"#700000",display:"minimal-ui",icon:"src/images/logo.png"}}]}}).call(this,"/")}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e11c21e4120a576b65de.js.map