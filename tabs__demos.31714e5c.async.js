"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[29183],{775079:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(667294),t=e(945016),_=e(979331),n=e(468990),a=e(785893),s=function(){var o=i.useState(!0),P=u()(o,2),r=P[0],c=P[1],v=i.useState(!0),f=u()(v,2),E=f[0],M=f[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(_.Z,{checkedChildren:"inkBar",unCheckedChildren:"inkBar",checked:r,onChange:function(){return c(!r)}}),(0,a.jsx)(_.Z,{checkedChildren:"tabPane",unCheckedChildren:"tabPane",checked:E,onChange:function(){return M(!E)}})]}),(0,a.jsx)(n.Z,{animated:{inkBar:r,tabPane:E},items:[{label:"Bamboo",key:"1",children:"Hello Bamboo!",style:{height:200,boxShadow:"0 0 3px rgba(255, 0, 0, 0.5)"}},{label:"Little",key:"2",children:"Hi Little!",style:{height:300,boxShadow:"0 0 3px rgba(0, 255, 0, 0.5)"}},{label:"Light",key:"3",children:"Welcome Light!",style:{height:100,boxShadow:"0 0 3px rgba(0, 0, 255, 0.5)"}}]})]})};l.default=s},64692:function(C,l,e){e.r(l);var b=e(667294),u=e(468990),i=e(785893),t=function(s){console.log(s)},_=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],n=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:_,onChange:t})};l.default=n},901198:function(C,l,e){e.r(l);var b=e(168400),u=e.n(b),i=e(667294),t=e(65630),_=e(468990),n=e(785893),a,s=(0,t.kc)(function(P){var r=P.token,c=P.css,v=".ant-tabs";return c(a||(a=u()([`
    `,"",`-card {
      `,`-content {
        padding: `,`px;
        background: `,`;
      }

      `,`-nav {
        margin: 0;

        `,"-nav-wrap > ","-nav-list > ",`-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: `,`;
            background: `,`;
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `])),v,v,v,r.padding,r.colorBgContainer,v,v,v,v,r.colorBorderBg,r.colorBgContainer)}),d=new Array(3).fill(null).map(function(P,r){var c=String(r+1);return{label:"Tab Title ".concat(c),key:c,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Content of Tab Pane ",c]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",c]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",c]})]})}}),o=function(){var r=s(),c=r.styles;return(0,n.jsx)("div",{className:c,children:(0,n.jsx)(_.Z,{type:"card",items:d})})};l.default=o},448100:function(C,l,e){e.r(l);var b=e(667294),u=e(468990),i=e(785893),t=function(a){console.log(a)},_=function(){return(0,i.jsx)(u.Z,{onChange:t,type:"card",items:new Array(3).fill(null).map(function(a,s){var d=String(s+1);return{label:"Tab ".concat(d),key:d,children:"Content of Tab Pane ".concat(d)}})})};l.default=_},417704:function(C,l,e){e.r(l);var b=e(667294),u=e(468990),i=e(785893),t=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",centered:!0,items:new Array(3).fill(null).map(function(n,a){var s=String(a+1);return{label:"Tab ".concat(s),key:s,children:"Content of Tab Pane ".concat(s)}})})};l.default=t},847047:function(C,l,e){e.r(l);var b=e(667294),u=e(75529),i=e(468990),t=e(988872),_=e(785893),n=function(){return(0,_.jsx)(u.ZP,{theme:{components:{Tabs:{cardBg:"#f6ffed",cardHeight:60,cardPadding:"20px",cardPaddingSM:"20px",cardPaddingLG:"20px",titleFontSize:20,titleFontSizeLG:20,titleFontSizeSM:20,inkBarColor:"#52C41A",horizontalMargin:"0 0 12px 0",horizontalItemGutter:12,horizontalItemPadding:"20px",horizontalItemPaddingSM:"20px",horizontalItemPaddingLG:"20px",verticalItemPadding:"8px",verticalItemMargin:"4px 0 0 0",itemColor:"rgba(0,0,0,0.85)",itemSelectedColor:"#389e0d",itemHoverColor:"#d9f7be",itemActiveColor:"#b7eb8f",cardGutter:12}}},children:(0,_.jsxs)("div",{children:[(0,_.jsx)(i.Z,{defaultActiveKey:"1",tabBarExtraContent:(0,_.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,_.jsx)(i.Z,{tabPosition:"left",defaultActiveKey:"1",tabBarExtraContent:(0,_.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,_.jsx)(i.Z,{size:"small",defaultActiveKey:"1",tabBarExtraContent:(0,_.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,_.jsx)(i.Z,{size:"large",defaultActiveKey:"1",tabBarExtraContent:(0,_.jsx)(t.ZP,{children:"Extra Action"}),style:{marginBottom:32},items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{label:"Tab ".concat(o),key:o,children:"Content of tab ".concat(o)}})}),(0,_.jsx)(i.Z,{defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{disabled:d===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})}),(0,_.jsx)(i.Z,{size:"small",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{disabled:d===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})}),(0,_.jsx)(i.Z,{size:"large",defaultActiveKey:"1",centered:!0,type:"card",items:new Array(3).fill(null).map(function(s,d){var o=String(d+1);return{disabled:d===2,label:"Tab ".concat(o),key:o,children:"Content of Tab Pane ".concat(o)}})})]})})};l.default=n},214941:function(C,l,e){e.r(l);var b=e(719632),u=e.n(b),i=e(805574),t=e.n(i),_=e(667294),n=e(988872),a=e(468990),s=e(785893),d=new Array(2).fill(null).map(function(P,r){var c=String(r+1);return{label:"Tab ".concat(c),children:"Content of Tab Pane ".concat(r+1),key:c}}),o=function(){var r=(0,_.useState)(d[0].key),c=t()(r,2),v=c[0],f=c[1],E=(0,_.useState)(d),M=t()(E,2),g=M[0],y=M[1],O=(0,_.useRef)(0),j=function(m){f(m)},B=function(){var m="newTab".concat(O.current++);y([].concat(u()(g),[{label:"New Tab",children:"New Tab Pane",key:m}])),f(m)},x=function(m){var h=g.findIndex(function(I){return I.key===m}),D=g.filter(function(I){return I.key!==m});if(D.length&&m===v){var K=D[h===D.length?h-1:h].key;f(K)}y(D)},A=function(m,h){h==="add"?B():x(m)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{marginBottom:16},children:(0,s.jsx)(n.ZP,{onClick:B,children:"ADD"})}),(0,s.jsx)(a.Z,{hideAdd:!0,onChange:j,activeKey:v,type:"editable-card",onEdit:A,items:g})]})};l.default=o},415023:function(C,l,e){e.r(l);var b=e(667294),u=e(468990),i=e(785893),t=function(s){console.log(s)},_=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],n=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:_,onChange:t,indicatorSize:function(d){return d-16}})};l.default=n},657737:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(97857),t=e.n(i),_=e(513769),n=e.n(_),a=e(960887),s=e(245587),d=e(724285),o=e(667294),P=e(468990),r=e(785893),c=["className"],v=function(M){var g=M.className,y=n()(M,c),O=(0,s.nB)({id:y["data-node-key"]}),j=O.attributes,B=O.listeners,x=O.setNodeRef,A=O.transform,T=O.transition,m=t()(t()({},y.style),{},{transform:d.ux.Transform.toString(A&&t()(t()({},A),{},{scaleX:1})),transition:T,cursor:"move"});return o.cloneElement(y.children,t()(t()({ref:x,style:m},j),B))},f=function(){var M=(0,o.useState)([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),g=u()(M,2),y=g[0],O=g[1],j=(0,a.VT)(a.we,{activationConstraint:{distance:10}}),B=function(A){var T=A.active,m=A.over;T.id!==(m==null?void 0:m.id)&&O(function(h){var D=h.findIndex(function(I){return I.key===T.id}),K=h.findIndex(function(I){return I.key===(m==null?void 0:m.id)});return(0,s.Rp)(h,D,K)})};return(0,r.jsx)(P.Z,{items:y,renderTabBar:function(A,T){return(0,r.jsx)(a.LB,{sensors:[j],onDragEnd:B,children:(0,r.jsx)(s.Fo,{items:y.map(function(m){return m.key}),strategy:s.PG,children:(0,r.jsx)(T,t()(t()({},A),{},{children:function(h){return(0,o.createElement)(v,t()(t()({},h.props),{},{key:h.key}),h)}}))})})}})};l.default=f},679465:function(C,l,e){e.r(l);var b=e(97857),u=e.n(b),i=e(667294),t=e(965516),_=e(468990),n=e(577134),a=e(785893),s=new Array(3).fill(null).map(function(o,P){var r=String(P+1);return{label:"Tab ".concat(r),key:r,children:"Content of Tab Pane ".concat(r),style:P===0?{height:200}:void 0}}),d=function(){var P=t.Z.useToken(),r=P.token.colorBgContainer,c=function(f,E){return(0,a.jsx)(n.Z,{offsetTop:0,offsetBottom:20,style:{zIndex:1},children:(0,a.jsx)(E,u()(u()({},f),{},{style:{background:r}}))})};return(0,a.jsx)(_.Z,{defaultActiveKey:"1",renderTabBar:c,items:s})};l.default=d},291913:function(C,l,e){e.r(l);var b=e(667294),u=e(468990),i=e(785893),t=function(){return(0,i.jsx)(u.Z,{defaultActiveKey:"1",items:[{label:"Tab 1",key:"1",children:"Tab 1"},{label:"Tab 2",key:"2",children:"Tab 2",disabled:!0},{label:"Tab 3",key:"3",children:"Tab 3"}]})};l.default=t},405988:function(C,l,e){e.r(l);var b=e(719632),u=e.n(b),i=e(805574),t=e.n(i),_=e(667294),n=e(468990),a=e(785893),s=[{label:"Tab 1",children:"Content of Tab 1",key:"1"},{label:"Tab 2",children:"Content of Tab 2",key:"2"},{label:"Tab 3",children:"Content of Tab 3",key:"3",closable:!1}],d=function(){var P=(0,_.useState)(s[0].key),r=t()(P,2),c=r[0],v=r[1],f=(0,_.useState)(s),E=t()(f,2),M=E[0],g=E[1],y=(0,_.useRef)(0),O=function(T){v(T)},j=function(){var T="newTab".concat(y.current++),m=u()(M);m.push({label:"New Tab",children:"Content of new Tab",key:T}),g(m),v(T)},B=function(T){var m=c,h=-1;M.forEach(function(K,I){K.key===T&&(h=I-1)});var D=M.filter(function(K){return K.key!==T});D.length&&m===T&&(h>=0?m=D[h].key:m=D[0].key),g(D),v(m)},x=function(T,m){m==="add"?j():B(T)};return(0,a.jsx)(n.Z,{type:"editable-card",onChange:O,activeKey:c,onEdit:x,items:M})};l.default=d},790005:function(C,l,e){e.r(l);var b=e(9783),u=e.n(b),i=e(97857),t=e.n(i),_=e(805574),n=e.n(_),a=e(667294),s=e(7575),d=e(988872),o=e(468990),P=e(315816),r=e(785893),c=s.Z.Group,v=(0,r.jsx)(d.ZP,{children:"Extra Action"}),f={left:(0,r.jsx)(d.ZP,{className:"tabs-extra-demo-button",children:"Left Extra Action"}),right:(0,r.jsx)(d.ZP,{children:"Right Extra Action"})},E=["left","right"],M=new Array(3).fill(null).map(function(y,O){var j=String(O+1);return{label:"Tab ".concat(j),key:j,children:"Content of tab ".concat(j)}}),g=function(){var O=(0,a.useState)(["left","right"]),j=n()(O,2),B=j[0],x=j[1],A=(0,a.useMemo)(function(){return B.length===0?null:B.reduce(function(T,m){return t()(t()({},T),{},u()({},m,f[m]))},{})},[B]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{tabBarExtraContent:v,items:M}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"You can also specify its direction or both side"}),(0,r.jsx)(P.Z,{}),(0,r.jsx)(c,{options:E,value:B,onChange:function(m){x(m)}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{tabBarExtraContent:A,items:M})]})};l.default=g},434437:function(C,l,e){e.r(l);var b=e(667294),u=e(735603),i=e(161462),t=e(468990),_=e(785893),n=function(){return(0,_.jsx)(t.Z,{defaultActiveKey:"2",items:[u.Z,i.Z].map(function(s,d){var o=String(d+1);return{label:(0,_.jsxs)("span",{children:["Tab ",o]}),key:o,children:"Tab ".concat(o),icon:(0,_.jsx)(s,{})}})})};l.default=n},708009:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(667294),t=e(469181),_=e(468990),n=e(785893),a=t.Z.Option,s=["left","right","top","bottom"],d=function(){var P=(0,i.useState)(void 0),r=u()(P,2),c=r[0],v=r[1],f=(0,i.useState)(void 0),E=u()(f,2),M=E[0],g=E[1],y=(0,i.useState)(void 0),O=u()(y,2),j=O[0],B=O[1],x=(0,i.useState)(void 0),A=u()(x,2),T=A[0],m=A[1];return(0,n.jsxs)("div",{children:[(0,n.jsx)(t.Z,{style:{width:200},onChange:function(D){v(D)},children:s.map(function(h){return(0,n.jsxs)(a,{value:h,children:["Parent - ",h]},h)})}),(0,n.jsx)(t.Z,{style:{width:200},onChange:function(D){g(D)},children:s.map(function(h){return(0,n.jsxs)(a,{value:h,children:["Child - ",h]},h)})}),(0,n.jsxs)(t.Z,{style:{width:200},onChange:function(D){B(D)},children:[(0,n.jsx)(a,{value:"line",children:"Parent - line"}),(0,n.jsx)(a,{value:"card",children:"Parent - card"}),(0,n.jsx)(a,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsxs)(t.Z,{style:{width:200},onChange:function(D){m(D)},children:[(0,n.jsx)(a,{value:"line",children:"Child - line"}),(0,n.jsx)(a,{value:"card",children:"Child - card"}),(0,n.jsx)(a,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsx)(_.Z,{defaultActiveKey:"1",tabPosition:c,type:j,items:[{label:"Tab 1",key:"1",children:(0,n.jsx)(_.Z,{defaultActiveKey:"1",tabPosition:M,type:T,style:{height:300},items:new Array(20).fill(null).map(function(h,D){var K=String(D);return{label:"Tab ".concat(K),key:K,children:"TTTT ".concat(K)}})})},{label:"Tab 2",key:"2",children:"Content of Tab Pane 2"}]})]})};l.default=d},175833:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(667294),t=e(945016),_=e(371707),n=e(468990),a=e(785893),s=function(){var o=(0,i.useState)("left"),P=u()(o,2),r=P[0],c=P[1],v=function(E){c(E.target.value)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.Z,{style:{marginBottom:24},children:["Tab position:",(0,a.jsxs)(_.ZP.Group,{value:r,onChange:v,children:[(0,a.jsx)(_.ZP.Button,{value:"top",children:"top"}),(0,a.jsx)(_.ZP.Button,{value:"bottom",children:"bottom"}),(0,a.jsx)(_.ZP.Button,{value:"left",children:"left"}),(0,a.jsx)(_.ZP.Button,{value:"right",children:"right"})]})]}),(0,a.jsx)(n.Z,{tabPosition:r,items:new Array(3).fill(null).map(function(f,E){var M=String(E+1);return{label:"Tab ".concat(M),key:M,children:"Content of Tab ".concat(M)}})})]})};l.default=s},7942:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(667294),t=e(371707),_=e(468990),n=e(785893),a=function(){var d=(0,i.useState)("small"),o=u()(d,2),P=o[0],r=o[1],c=function(f){r(f.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.ZP.Group,{value:P,onChange:c,style:{marginBottom:16},children:[(0,n.jsx)(t.ZP.Button,{value:"small",children:"Small"}),(0,n.jsx)(t.ZP.Button,{value:"middle",children:"Middle"}),(0,n.jsx)(t.ZP.Button,{value:"large",children:"Large"})]}),(0,n.jsx)(_.Z,{defaultActiveKey:"1",size:P,style:{marginBottom:32},items:new Array(3).fill(null).map(function(v,f){var E=String(f+1);return{label:"Tab ".concat(E),key:E,children:"Content of tab ".concat(E)}})}),(0,n.jsx)(_.Z,{defaultActiveKey:"1",type:"card",size:P,items:new Array(3).fill(null).map(function(v,f){var E=String(f+1);return{label:"Card Tab ".concat(E),key:E,children:"Content of card tab ".concat(E)}})})]})};l.default=a},203582:function(C,l,e){e.r(l);var b=e(805574),u=e.n(b),i=e(667294),t=e(371707),_=e(468990),n=e(785893),a=function(){var d=(0,i.useState)("top"),o=u()(d,2),P=o[0],r=o[1],c=function(f){r(f.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.ZP.Group,{onChange:c,value:P,style:{marginBottom:8},children:[(0,n.jsx)(t.ZP.Button,{value:"top",children:"Horizontal"}),(0,n.jsx)(t.ZP.Button,{value:"left",children:"Vertical"})]}),(0,n.jsx)(_.Z,{defaultActiveKey:"1",tabPosition:P,style:{height:220},items:new Array(30).fill(null).map(function(v,f){var E=String(f);return{label:"Tab-".concat(E),key:E,disabled:f===28,children:"Content of tab ".concat(E)}})})]})};l.default=a}}]);
