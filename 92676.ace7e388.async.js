"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[92676],{33413:function(_t,dt,h){var Ae=h(487462),N=h(204942),D=h(297685),V=h(912402),F=h(667294),st=h(294184),Re=h.n(st),ft=h(821770),ie=h(915105),He=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],z=F.forwardRef(function(t,vt){var oe,We=t.prefixCls,_=We===void 0?"rc-switch":We,ht=t.className,mt=t.checked,gt=t.defaultChecked,X=t.disabled,Ct=t.loadingIcon,$e=t.checkedChildren,Ce=t.unCheckedChildren,pe=t.onClick,ye=t.onChange,ue=t.onKeyDown,pt=(0,V.Z)(t,He),yt=(0,ft.default)(!1,{value:mt,defaultValue:gt}),Fe=(0,D.Z)(yt,2),q=Fe[0],U=Fe[1];function Se(K,Ee){var B=q;return X||(B=K,U(B),ye==null||ye(B,Ee)),B}function St(K){K.which===ie.Z.LEFT?Se(!1,K):K.which===ie.Z.RIGHT&&Se(!0,K),ue==null||ue(K)}function Et(K){var Ee=Se(!q,K);pe==null||pe(Ee,K)}var _e=Re()(_,ht,(oe={},(0,N.Z)(oe,"".concat(_,"-checked"),q),(0,N.Z)(oe,"".concat(_,"-disabled"),X),oe));return F.createElement("button",(0,Ae.Z)({},pt,{type:"button",role:"switch","aria-checked":q,disabled:X,className:_e,ref:vt,onKeyDown:St,onClick:Et}),Ct,F.createElement("span",{className:"".concat(_,"-inner")},F.createElement("span",{className:"".concat(_,"-inner-checked")},$e),F.createElement("span",{className:"".concat(_,"-inner-unchecked")},Ce)))});z.displayName="Switch",dt.Z=z},79841:function(_t,dt,h){h.d(dt,{Qw:function(){return bt},FJ:function(){return Ue},hT:function(){return kt},OF:function(){return X},ZP:function(){return Xt}});var Ae=h(487462),N=h(974902),D=h(601413),V=h(297685),F=h(912402),st=h(671002),Re=h(388905),ft=h(88708),ie=h(517341),He=h(821770),z=h(580334),t=h(667294),vt=function(e){var n=t.useRef({valueLabels:new Map});return t.useMemo(function(){var r=n.current.valueLabels,u=new Map,a=e.map(function(i){var l,o=i.value,c=(l=i.label)!==null&&l!==void 0?l:r.get(o);return u.set(o,c),(0,D.Z)((0,D.Z)({},i),{},{label:c})});return n.current.valueLabels=u,[a]},[e])},oe=function(e,n,r,u){return t.useMemo(function(){var a=e.map(function(c){var s=c.value;return s}),i=n.map(function(c){var s=c.value;return s}),l=a.filter(function(c){return!u[c]});if(r){var o=(0,ie.S)(a,!0,u);a=o.checkedKeys,i=o.halfCheckedKeys}return[Array.from(new Set([].concat((0,N.Z)(l),(0,N.Z)(a)))),i]},[e,n,r,u])},We=h(501089),_=function(e,n){return t.useMemo(function(){var r=(0,We.I8)(e,{fieldNames:n,initWrapper:function(a){return(0,D.Z)((0,D.Z)({},a),{},{valueEntities:new Map})},processEntity:function(a,i){var l=a.node[n.value];if(!1)var o;i.valueEntities.set(l,a)}});return r},[e,n])},ht=h(204942),mt=h(850344),gt=function(){return null},X=gt,Ct=["children","value"];function $e(e){return(0,mt.Z)(e).map(function(n){if(!t.isValidElement(n)||!n.type)return null;var r=n,u=r.key,a=r.props,i=a.children,l=a.value,o=(0,F.Z)(a,Ct),c=(0,D.Z)({key:u,value:l},o),s=$e(i);return s.length&&(c.children=s),c}).filter(function(n){return n})}function Ce(e){if(!e)return e;var n=(0,D.Z)({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return(0,z.ZP)(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),n}}),n}function pe(e,n,r,u,a,i){var l=null,o=null;function c(){function s(f){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return f.map(function(E,W){var T="".concat(M,"-").concat(W),Z=E[i.value],j=r.includes(Z),ee=s(E[i.children]||[],T,j),G=t.createElement(X,E,ee.map(function(P){return P.node}));if(n===Z&&(l=G),j){var S={pos:T,node:G,children:ee};return I||o.push(S),S}return null}).filter(function(E){return E})}o||(o=[],s(u),o.sort(function(f,M){var I=f.node.props.value,E=M.node.props.value,W=r.indexOf(I),T=r.indexOf(E);return W-T}))}Object.defineProperty(e,"triggerNode",{get:function(){return(0,z.ZP)(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),l}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return(0,z.ZP)(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),a?o:o.map(function(f){var M=f.node;return M})}})}var ye=function(e,n,r){var u=r.treeNodeFilterProp,a=r.filterTreeNode,i=r.fieldNames,l=i.children;return t.useMemo(function(){if(!n||a===!1)return e;var o;if(typeof a=="function")o=a;else{var c=n.toUpperCase();o=function(M,I){var E=I[u];return String(E).toUpperCase().includes(c)}}function s(f){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return f.reduce(function(I,E){var W=E[l],T=M||o(n,Ce(E)),Z=s(W||[],T);return(T||Z.length)&&I.push((0,D.Z)((0,D.Z)({},E),{},(0,ht.Z)({isLeaf:void 0},l,Z))),I},[])}return s(e)},[e,n,l,u,a])};function ue(e){var n=t.useRef();n.current=e;var r=t.useCallback(function(){return n.current.apply(n,arguments)},[]);return r}function pt(e,n){var r=n.id,u=n.pId,a=n.rootPId,i={},l=[],o=e.map(function(c){var s=(0,D.Z)({},c),f=s[r];return i[f]=s,s.key=s.key||f,s});return o.forEach(function(c){var s=c[u],f=i[s];f&&(f.children=f.children||[],f.children.push(c)),(s===a||!f&&a===null)&&l.push(c)}),l}function yt(e,n,r){return t.useMemo(function(){return e?r?pt(e,(0,D.Z)({id:"id",pId:"pId",rootPId:null},r!==!0?r:{})):e:$e(n)},[n,r,e])}var Fe=t.createContext(null),q=Fe,U=h(915105),Se=h(456982),St=h(125530),Et=t.createContext(null),_e=Et;function K(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Ee(e){var n=e||{},r=n.label,u=n.value,a=n.children,i=u||"value";return{_title:r?[r]:["title","label"],value:i,key:i,children:a||"children"}}function B(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function Ut(e,n){var r=[];function u(a){a.forEach(function(i){var l=i[n.children];l&&(r.push(i[n.value]),u(l))})}return u(e),r}function Pt(e){return e==null}var Bt={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},jt=function(n,r){var u=(0,Re.lk)(),a=u.prefixCls,i=u.multiple,l=u.searchValue,o=u.toggleOpen,c=u.open,s=u.notFoundContent,f=t.useContext(_e),M=f.virtual,I=f.listHeight,E=f.listItemHeight,W=f.listItemScrollOffset,T=f.treeData,Z=f.fieldNames,j=f.onSelect,ee=f.dropdownMatchSelectWidth,G=f.treeExpandAction,S=t.useContext(q),P=S.checkable,x=S.checkedKeys,Be=S.halfCheckedKeys,ce=S.treeExpandedKeys,Dt=S.treeDefaultExpandAll,It=S.treeDefaultExpandedKeys,je=S.onTreeExpand,Ge=S.treeIcon,Je=S.showTreeIcon,Ye=S.switcherIcon,Qe=S.treeLine,ze=S.treeNodeFilterProp,Xe=S.loadData,ke=S.treeLoadedKeys,qe=S.treeMotion,et=S.onTreeLoad,tt=S.keyEntities,te=t.useRef(),De=(0,Se.Z)(function(){return T},[c,T],function(b,m){return m[0]&&b[1]!==m[1]}),nt=t.useState(null),Ie=(0,V.Z)(nt,2),de=Ie[0],se=Ie[1],$=tt[de],xe=t.useMemo(function(){return P?{checked:x,halfChecked:Be}:null},[P,x,Be]);t.useEffect(function(){if(c&&!i&&x.length){var b;(b=te.current)===null||b===void 0||b.scrollTo({key:x[0]}),se(x[0])}},[c]);var Te=String(l).toLowerCase(),rt=function(m){return Te?String(m[ze]).toLowerCase().includes(Te):!1},at=t.useState(It),Le=(0,V.Z)(at,2),Ke=Le[0],xt=Le[1],Tt=t.useState(null),ne=(0,V.Z)(Tt,2),re=ne[0],Me=ne[1],A=t.useMemo(function(){return ce?(0,N.Z)(ce):l?re:Ke},[Ke,re,ce,l]);t.useEffect(function(){l&&Me(Ut(T,Z))},[l]);var Lt=function(m){xt(m),Me(m),je&&je(m)},Pe=function(m){m.preventDefault()},J=function(m,fe){var R=fe.node;P&&B(R)||(j(R.key,{selected:!x.includes(R.key)}),i||o(!1))};if(t.useImperativeHandle(r,function(){var b;return{scrollTo:(b=te.current)===null||b===void 0?void 0:b.scrollTo,onKeyDown:function(fe){var R,lt=fe.which;switch(lt){case U.Z.UP:case U.Z.DOWN:case U.Z.LEFT:case U.Z.RIGHT:(R=te.current)===null||R===void 0||R.onKeyDown(fe);break;case U.Z.ENTER:{if($){var Ne=($==null?void 0:$.node)||{},Kt=Ne.selectable,ve=Ne.value;Kt!==!1&&J(null,{node:{key:de},selected:!x.includes(ve)})}break}case U.Z.ESC:o(!1)}},onKeyUp:function(){}}}),De.length===0)return t.createElement("div",{role:"listbox",className:"".concat(a,"-empty"),onMouseDown:Pe},s);var we={fieldNames:Z};return ke&&(we.loadedKeys=ke),A&&(we.expandedKeys=A),t.createElement("div",{onMouseDown:Pe},$&&c&&t.createElement("span",{style:Bt,"aria-live":"assertive"},$.node.value),t.createElement(St.Z,(0,Ae.Z)({ref:te,focusable:!1,prefixCls:"".concat(a,"-tree"),treeData:De,height:I,itemHeight:E,itemScrollOffset:W,virtual:M!==!1&&ee!==!1,multiple:i,icon:Ge,showIcon:Je,switcherIcon:Ye,showLine:Qe,loadData:l?null:Xe,motion:qe,activeKey:de,checkable:P,checkStrictly:!0,checkedKeys:xe,selectedKeys:P?[]:x,defaultExpandAll:Dt},we,{onActiveChange:se,onSelect:J,onCheck:J,onExpand:Lt,onLoad:et,filterTreeNode:rt,expandAction:G})))},wt=t.forwardRef(jt);wt.displayName="OptionList";var Gt=wt,bt="SHOW_ALL",kt="SHOW_PARENT",Ue="SHOW_CHILD";function Nt(e,n,r,u){var a=new Set(e);return n===Ue?e.filter(function(i){var l=r[i];return!(l&&l.children&&l.children.some(function(o){var c=o.node;return a.has(c[u.value])})&&l.children.every(function(o){var c=o.node;return B(c)||a.has(c[u.value])}))}):n===kt?e.filter(function(i){var l=r[i],o=l?l.parent:null;return!(o&&!B(o.node)&&a.has(o.key))}):e}function dn(e){var n=e.searchPlaceholder,r=e.treeCheckStrictly,u=e.treeCheckable,a=e.labelInValue,i=e.value,l=e.multiple;warning(!n,"`searchPlaceholder` has been removed."),r&&a===!1&&warning(!1,"`treeCheckStrictly` will force set `labelInValue` to `true`."),(a||r)&&warning(toArray(i).every(function(o){return o&&_typeof(o)==="object"&&"value"in o}),"Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."),r||l||u?warning(!i||Array.isArray(i),"`value` should be an array when `TreeSelect` is checkable or multiple."):warning(!Array.isArray(i),"`value` should not be array when `TreeSelect` is single mode.")}var sn=null,Jt=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Yt(e){return!e||(0,st.Z)(e)!=="object"}var Qt=t.forwardRef(function(e,n){var r=e.id,u=e.prefixCls,a=u===void 0?"rc-tree-select":u,i=e.value,l=e.defaultValue,o=e.onChange,c=e.onSelect,s=e.onDeselect,f=e.searchValue,M=e.inputValue,I=e.onSearch,E=e.autoClearSearchValue,W=E===void 0?!0:E,T=e.filterTreeNode,Z=e.treeNodeFilterProp,j=Z===void 0?"value":Z,ee=e.showCheckedStrategy,G=e.treeNodeLabelProp,S=e.multiple,P=e.treeCheckable,x=e.treeCheckStrictly,Be=e.labelInValue,ce=e.fieldNames,Dt=e.treeDataSimpleMode,It=e.treeData,je=e.children,Ge=e.loadData,Je=e.treeLoadedKeys,Ye=e.onTreeLoad,Qe=e.treeDefaultExpandAll,ze=e.treeExpandedKeys,Xe=e.treeDefaultExpandedKeys,ke=e.onTreeExpand,qe=e.treeExpandAction,et=e.virtual,tt=e.listHeight,te=tt===void 0?200:tt,De=e.listItemHeight,nt=De===void 0?20:De,Ie=e.listItemScrollOffset,de=Ie===void 0?0:Ie,se=e.onDropdownVisibleChange,$=e.dropdownMatchSelectWidth,xe=$===void 0?!0:$,Te=e.treeLine,rt=e.treeIcon,at=e.showTreeIcon,Le=e.switcherIcon,Ke=e.treeMotion,xt=(0,F.Z)(e,Jt),Tt=(0,ft.ZP)(r),ne=P&&!x,re=P||x,Me=x||Be,A=re||S,Lt=(0,He.default)(l,{value:i}),Pe=(0,V.Z)(Lt,2),J=Pe[0],we=Pe[1],b=t.useMemo(function(){return P?ee||Ue:bt},[ee,P]),m=t.useMemo(function(){return Ee(ce)},[JSON.stringify(ce)]),fe=(0,He.default)("",{value:f!==void 0?f:M,postState:function(d){return d||""}}),R=(0,V.Z)(fe,2),lt=R[0],Ne=R[1],Kt=function(d){Ne(d),I==null||I(d)},ve=yt(It,je,Dt),Zt=_(ve,m),w=Zt.keyEntities,ae=Zt.valueEntities,Ot=t.useCallback(function(v){var d=[],g=[];return v.forEach(function(C){ae.has(C)?g.push(C):d.push(C)}),{missingRawValues:d,existRawValues:g}},[ae]),Vt=ye(ve,lt,{fieldNames:m,treeNodeFilterProp:j,filterTreeNode:T}),At=t.useCallback(function(v){if(v){if(G)return v[G];for(var d=m._title,g=0;g<d.length;g+=1){var C=v[d[g]];if(C!==void 0)return C}}},[m,G]),Ze=t.useCallback(function(v){var d=K(v);return d.map(function(g){return Yt(g)?{value:g}:g})},[]),it=t.useCallback(function(v){var d=Ze(v);return d.map(function(g){var C=g.label,L=g.value,k=g.halfChecked,p,y=ae.get(L);if(y){var O;C=(O=C)!==null&&O!==void 0?O:At(y.node),p=y.node.disabled}else if(C===void 0){var Y=Ze(J).find(function(Oe){return Oe.value===L});C=Y.label}return{label:C,value:L,halfChecked:k,disabled:p}})},[ae,At,Ze,J]),Rt=t.useMemo(function(){return Ze(J)},[Ze,J]),qt=t.useMemo(function(){var v=[],d=[];return Rt.forEach(function(g){g.halfChecked?d.push(g):v.push(g)}),[v,d]},[Rt]),Ht=(0,V.Z)(qt,2),he=Ht[0],Wt=Ht[1],$t=t.useMemo(function(){return he.map(function(v){return v.value})},[he]),en=oe(he,Wt,ne,w),Ft=(0,V.Z)(en,2),me=Ft[0],ot=Ft[1],tn=t.useMemo(function(){var v=Nt(me,b,w,m),d=v.map(function(k){var p,y;return(p=(y=w[k])===null||y===void 0||(y=y.node)===null||y===void 0?void 0:y[m.value])!==null&&p!==void 0?p:k}),g=d.map(function(k){var p=he.find(function(y){return y.value===k});return{value:k,label:p==null?void 0:p.label}}),C=it(g),L=C[0];return!A&&L&&Pt(L.value)&&Pt(L.label)?[]:C.map(function(k){var p;return(0,D.Z)((0,D.Z)({},k),{},{label:(p=k.label)!==null&&p!==void 0?p:k.value})})},[m,A,me,he,it,b,w]),nn=vt(tn),rn=(0,V.Z)(nn,1),an=rn[0],ut=ue(function(v,d,g){var C=it(v);if(we(C),W&&Ne(""),o){var L=v;if(ne){var k=Nt(v,b,w,m);L=k.map(function(H){var Q=ae.get(H);return Q?Q.node[m.value]:H})}var p=d||{triggerValue:void 0,selected:void 0},y=p.triggerValue,O=p.selected,Y=L;if(x){var Oe=Wt.filter(function(H){return!L.includes(H.value)});Y=[].concat((0,N.Z)(Y),(0,N.Z)(Oe))}var Ve=it(Y),le={preValue:he,triggerValue:y},ge=!0;(x||g==="selection"&&!O)&&(ge=!1),pe(le,y,v,ve,ge,m),re?le.checked=O:le.selected=O;var ct=Me?Ve:Ve.map(function(H){return H.value});o(A?ct:ct[0],Me?null:Ve.map(function(H){return H.label}),le)}}),Mt=t.useCallback(function(v,d){var g,C=d.selected,L=d.source,k=w[v],p=k==null?void 0:k.node,y=(g=p==null?void 0:p[m.value])!==null&&g!==void 0?g:v;if(!A)ut([y],{selected:!0,triggerValue:y},"option");else{var O=C?[].concat((0,N.Z)($t),[y]):me.filter(function(Q){return Q!==y});if(ne){var Y=Ot(O),Oe=Y.missingRawValues,Ve=Y.existRawValues,le=Ve.map(function(Q){return ae.get(Q).key}),ge;if(C){var ct=(0,ie.S)(le,!0,w);ge=ct.checkedKeys}else{var H=(0,ie.S)(le,{checked:!1,halfCheckedKeys:ot},w);ge=H.checkedKeys}O=[].concat((0,N.Z)(Oe),(0,N.Z)(ge.map(function(Q){return w[Q].node[m.value]})))}ut(O,{selected:C,triggerValue:y},L||"option")}C||!A?c==null||c(y,Ce(p)):s==null||s(y,Ce(p))},[Ot,ae,w,m,A,$t,ut,ne,c,s,me,ot]),ln=t.useCallback(function(v){if(se){var d={};Object.defineProperty(d,"documentClickClose",{get:function(){return(0,z.ZP)(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),se(v,d)}},[se]),on=ue(function(v,d){var g=v.map(function(C){return C.value});if(d.type==="clear"){ut(g,{},"selection");return}d.values.length&&Mt(d.values[0].value,{selected:!1,source:"selection"})}),un=t.useMemo(function(){return{virtual:et,dropdownMatchSelectWidth:xe,listHeight:te,listItemHeight:nt,listItemScrollOffset:de,treeData:Vt,fieldNames:m,onSelect:Mt,treeExpandAction:qe}},[et,xe,te,nt,de,Vt,m,Mt,qe]),cn=t.useMemo(function(){return{checkable:re,loadData:Ge,treeLoadedKeys:Je,onTreeLoad:Ye,checkedKeys:me,halfCheckedKeys:ot,treeDefaultExpandAll:Qe,treeExpandedKeys:ze,treeDefaultExpandedKeys:Xe,onTreeExpand:ke,treeIcon:rt,treeMotion:Ke,showTreeIcon:at,switcherIcon:Le,treeLine:Te,treeNodeFilterProp:j,keyEntities:w}},[re,Ge,Je,Ye,me,ot,Qe,ze,Xe,ke,rt,Ke,at,Le,Te,j,w]);return t.createElement(_e.Provider,{value:un},t.createElement(q.Provider,{value:cn},t.createElement(Re.Ac,(0,Ae.Z)({ref:n},xt,{id:Tt,prefixCls:a,mode:A?"multiple":void 0,displayValues:an,onDisplayValuesChange:on,searchValue:lt,onSearch:Kt,OptionList:Gt,emptyOptions:!ve.length,onDropdownVisibleChange:ln,dropdownMatchSelectWidth:xe}))))}),be=Qt;be.TreeNode=X,be.SHOW_ALL=bt,be.SHOW_PARENT=kt,be.SHOW_CHILD=Ue;var zt=be,Xt=zt}}]);
