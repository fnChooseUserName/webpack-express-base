(()=>{"use strict";var e,t,n,_,l,r,o,u,i,s,c,a={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function d(e,t){for(var n in t)e[n]=t[n];return e}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function y(t,n,_){var l,r,o,u={};for(o in n)"key"==o?l=n[o]:"ref"==o?r=n[o]:u[o]=n[o];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===u[o]&&(u[o]=t.defaultProps[o]);return g(t,u,l,r,null)}function g(e,_,l,r,o){var u={type:e,props:_,key:l,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++n:o,__i:-1,__u:0};return null==o&&null!=t.vnode&&t.vnode(u),u}function m(e){return e.children}function b(e,t){this.props=e,this.context=t}function k(e,t){if(null==t)return e.__?k(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?k(e):null}function w(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return w(e)}}function x(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!S.__r++||l!==t.debounceRendering)&&((l=t.debounceRendering)||r)(S)}function S(){var e,n,l,r,u,i,s,c;for(_.sort(o);e=_.shift();)e.__d&&(n=_.length,r=void 0,i=(u=(l=e).__v).__e,s=[],c=[],l.__P&&((r=d({},u)).__v=u.__v+1,t.vnode&&t.vnode(r),E(l.__P,r,u,l.__n,l.__P.namespaceURI,32&u.__u?[i]:null,s,null==i?k(u):i,!!(32&u.__u),c),r.__v=u.__v,r.__.__k[r.__i]=r,L(s,r,c),r.__e!=i&&w(r)),_.length>n&&_.sort(o));S.__r=0}function P(e,t,n,_,l,r,o,u,i,s,c){var f,h,d,v,y,g,m=_&&_.__k||p,b=t.length;for(i=C(n,t,m,i,b),f=0;f<b;f++)null!=(d=n.__k[f])&&(h=-1===d.__i?a:m[d.__i]||a,d.__i=f,g=E(e,d,h,l,r,o,u,i,s,c),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&A(h.ref,null,d),c.push(d.ref,d.__c||v,d)),null==y&&null!=v&&(y=v),4&d.__u||h.__k===d.__k?i=U(d,i,e):"function"==typeof d.type&&void 0!==g?i=g:v&&(i=v.nextSibling),d.__u&=-7);return n.__e=y,i}function C(e,t,n,_,l){var r,o,u,i,s,c=n.length,a=c,p=0;for(e.__k=new Array(l),r=0;r<l;r++)null!=(o=t[r])&&"boolean"!=typeof o&&"function"!=typeof o?(i=r+p,(o=e.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):h(o)?g(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,u=null,-1!==(s=o.__i=M(o,n,i,a))&&(a--,(u=n[s])&&(u.__u|=2)),null==u||null===u.__v?(-1==s&&p--,"function"!=typeof o.type&&(o.__u|=4)):s!=i&&(s==i-1?p--:s==i+1?p++:(s>i?p--:p++,o.__u|=4))):e.__k[r]=null;if(a)for(r=0;r<c;r++)null!=(u=n[r])&&!(2&u.__u)&&(u.__e==_&&(_=k(u)),F(u,u));return _}function U(e,t,n){var _,l;if("function"==typeof e.type){for(_=e.__k,l=0;_&&l<_.length;l++)_[l]&&(_[l].__=e,t=U(_[l],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=k(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function M(e,t,n,_){var l,r,o=e.key,u=e.type,i=t[n];if(null===i||i&&o==i.key&&u===i.type&&!(2&i.__u))return n;if(_>(null==i||2&i.__u?0:1))for(l=n-1,r=n+1;l>=0||r<t.length;){if(l>=0){if((i=t[l])&&!(2&i.__u)&&o==i.key&&u===i.type)return l;l--}if(r<t.length){if((i=t[r])&&!(2&i.__u)&&o==i.key&&u===i.type)return r;r++}}return-1}function T(e,t,n){"-"==t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||f.test(t)?n:n+"px"}function D(e,t,n,_,l){var r;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||T(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||T(e.style,t,n[t])}else if("o"==t[0]&&"n"==t[1])r=t!=(t=t.replace(u,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_?n.u=_.u:(n.u=i,e.addEventListener(t,r?c:s,r)):e.removeEventListener(t,r?c:s,r);else{if("http://www.w3.org/2000/svg"==l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function $(e){return function(n){if(this.l){var _=this.l[n.type+e];if(null==n.t)n.t=i++;else if(n.t<_.u)return;return _(t.event?t.event(n):n)}}}function E(e,n,_,l,r,o,u,i,s,c){var a,p,f,y,g,k,w,x,S,C,U,M,T,D,$,E,L,A=n.type;if(void 0!==n.constructor)return null;128&_.__u&&(s=!!(32&_.__u),o=[i=n.__e=_.__e]),(a=t.__b)&&a(n);e:if("function"==typeof A)try{if(x=n.props,S="prototype"in A&&A.prototype.render,C=(a=A.contextType)&&l[a.__c],U=a?C?C.props.value:a.__:l,_.__c?w=(p=n.__c=_.__c).__=p.__E:(S?n.__c=p=new A(x,U):(n.__c=p=new b(x,U),p.constructor=A,p.render=N),C&&C.sub(p),p.props=x,p.state||(p.state={}),p.context=U,p.__n=l,f=p.__d=!0,p.__h=[],p._sb=[]),S&&null==p.__s&&(p.__s=p.state),S&&null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,A.getDerivedStateFromProps(x,p.__s))),y=p.props,g=p.state,p.__v=n,f)S&&null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),S&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(S&&null==A.getDerivedStateFromProps&&x!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,U),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,U)||n.__v==_.__v)){for(n.__v!=_.__v&&(p.props=x,p.state=p.__s,p.__d=!1),n.__e=_.__e,n.__k=_.__k,n.__k.some((function(e){e&&(e.__=n)})),M=0;M<p._sb.length;M++)p.__h.push(p._sb[M]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,U),S&&null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,g,k)}))}if(p.context=U,p.props=x,p.__P=e,p.__e=!1,T=t.__r,D=0,S){for(p.state=p.__s,p.__d=!1,T&&T(n),a=p.render(p.props,p.state,p.context),$=0;$<p._sb.length;$++)p.__h.push(p._sb[$]);p._sb=[]}else do{p.__d=!1,T&&T(n),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++D<25);p.state=p.__s,null!=p.getChildContext&&(l=d(d({},l),p.getChildContext())),S&&!f&&null!=p.getSnapshotBeforeUpdate&&(k=p.getSnapshotBeforeUpdate(y,g)),i=P(e,h(E=null!=a&&a.type===m&&null==a.key?a.props.children:a)?E:[E],n,_,l,r,o,u,i,s,c),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),w&&(p.__E=p.__=null)}catch(e){if(n.__v=null,s||null!=o)if(e.then){for(n.__u|=s?160:128;i&&8==i.nodeType&&i.nextSibling;)i=i.nextSibling;o[o.indexOf(i)]=null,n.__e=i}else for(L=o.length;L--;)v(o[L]);else n.__e=_.__e,n.__k=_.__k;t.__e(e,n,_)}else null==o&&n.__v==_.__v?(n.__k=_.__k,n.__e=_.__e):i=n.__e=W(_.__e,n,_,l,r,o,u,s,c);return(a=t.diffed)&&a(n),128&n.__u?void 0:i}function L(e,n,_){for(var l=0;l<_.length;l++)A(_[l],_[++l],_[++l]);t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function W(n,_,l,r,o,u,i,s,c){var p,f,d,y,g,m,b,w=l.props,x=_.props,S=_.type;if("svg"==S?o="http://www.w3.org/2000/svg":"math"==S?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=u)for(p=0;p<u.length;p++)if((g=u[p])&&"setAttribute"in g==!!S&&(S?g.localName==S:3==g.nodeType)){n=g,u[p]=null;break}if(null==n){if(null==S)return document.createTextNode(x);n=document.createElementNS(o,S,x.is&&x),s&&(t.__m&&t.__m(_,u),s=!1),u=null}if(null===S)w===x||s&&n.data===x||(n.data=x);else{if(u=u&&e.call(n.childNodes),w=l.props||a,!s&&null!=u)for(w={},p=0;p<n.attributes.length;p++)w[(g=n.attributes[p]).name]=g.value;for(p in w)if(g=w[p],"children"==p);else if("dangerouslySetInnerHTML"==p)d=g;else if(!(p in x)){if("value"==p&&"defaultValue"in x||"checked"==p&&"defaultChecked"in x)continue;D(n,p,null,g,o)}for(p in x)g=x[p],"children"==p?y=g:"dangerouslySetInnerHTML"==p?f=g:"value"==p?m=g:"checked"==p?b=g:s&&"function"!=typeof g||w[p]===g||D(n,p,g,w[p],o);if(f)s||d&&(f.__html===d.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),_.__k=[];else if(d&&(n.innerHTML=""),P(n,h(y)?y:[y],_,l,r,"foreignObject"==S?"http://www.w3.org/1999/xhtml":o,u,i,u?u[0]:l.__k&&k(l,0),s,c),null!=u)for(p=u.length;p--;)v(u[p]);s||(p="value","progress"==S&&null==m?n.removeAttribute("value"):void 0!==m&&(m!==n[p]||"progress"==S&&!m||"option"==S&&m!==w[p])&&D(n,p,m,w[p],o),p="checked",void 0!==b&&b!==n[p]&&D(n,p,b,w[p],o))}return n}function A(e,n,_){try{if("function"==typeof e){var l="function"==typeof e.__u;l&&e.__u(),l&&null==n||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,_)}}function F(e,n,_){var l,r;if(t.unmount&&t.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||A(l,null,n)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){t.__e(e,n)}l.base=l.__P=null}if(l=e.__k)for(r=0;r<l.length;r++)l[r]&&F(l[r],n,_||"function"!=typeof e.type);_||v(e.__e),e.__c=e.__=e.__e=void 0}function N(e,t,n){return this.constructor(e,n)}e=p.slice,t={__e:function(e,t,n,_){for(var l,r,o;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&null!=r.getDerivedStateFromError&&(l.setState(r.getDerivedStateFromError(e)),o=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,_||{}),o=l.__d),o)return l.__E=l}catch(t){e=t}throw e}},n=0,b.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),x(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),x(this))},b.prototype.render=m,_=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(e,t){return e.__v.__b-t.__v.__b},S.__r=0,u=/(PointerCapture)$|Capture$/i,i=0,s=$(!1),c=$(!0);var H=function(e,t,n,_){var l;t[0]=0;for(var r=1;r<t.length;r++){var o=t[r++],u=t[r]?(t[0]|=o?1:2,n[t[r++]]):t[++r];3===o?_[0]=u:4===o?_[1]=Object.assign(_[1]||{},u):5===o?(_[1]=_[1]||{})[t[++r]]=u:6===o?_[1][t[++r]]+=u+"":o?(l=e.apply(u,H(e,u,n,["",null])),_.push(l),u[0]?t[0]|=2:(t[r-2]=0,t[r]=l)):_.push(u)}return _},I=new Map,R=function(e){var t=I.get(this);return t||(t=new Map,I.set(this,t)),(t=H(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,_=1,l="",r="",o=[0],u=function(e){1===_&&(e||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,e,l):3===_&&(e||l)?(o.push(3,e,l),_=2):2===_&&"..."===l&&e?o.push(4,e,0):2===_&&l&&!e?o.push(5,0,!0,l):_>=5&&((l||!e&&5===_)&&(o.push(_,0,l,n),_=6),e&&(o.push(_,e,0,n),_=6)),l=""},i=0;i<e.length;i++){i&&(1===_&&u(),u(i));for(var s=0;s<e[i].length;s++)t=e[i][s],1===_?"<"===t?(u(),o=[o],_=3):l+=t:4===_?"--"===l&&">"===t?(_=1,l=""):l=t+l[0]:r?t===r?r="":l+=t:'"'===t||"'"===t?r=t:">"===t?(u(),_=1):_&&("="===t?(_=5,n=l,l=""):"/"===t&&(_<5||">"===e[i][s+1])?(u(),3===_&&(o=o[0]),_=o,(o=o[0]).push(2,0,_),_=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(u(),_=2):l+=t),3===_&&"!--"===l&&(_=4,o=o[0])}return u(),o}(e)),t),arguments,[])).length>1?t:t[0]}.bind(y);const B=()=>R`
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      Webpack Express Template
    </a>
  </div>
</nav>`;!function(n,_,l){var r,o,u,i;_==document&&(_=document.documentElement),t.__&&t.__(n,_),o=(r="function"==typeof l)?null:l&&l.__k||_.__k,u=[],i=[],E(_,n=(!r&&l||_).__k=y(m,null,[n]),o||a,a,_.namespaceURI,!r&&l?[l]:o?null:_.firstChild?e.call(_.childNodes):null,u,!r&&l?l:o?o.__e:_.firstChild,r,i),L(u,n,i)}(R`<${class extends b{addUser(){const{users:e=[]}=this.state;this.setState({users:e.concat(`User ${e.length}`)})}render({page:e},{users:t=[]}){return R`
      <${B}/>
      <div class="container">
        <div class="notification">
          <h3 class="title">Welcome to Users page!</h3>
          <p class="subtitle">Click a button to add more users!</p>
          <ul>
            ${t.map((e=>R`
              <li>${e}</li>
            `))}
          </ul>
          <div class="buttons">
            <button 
              class="button is-success" 
              onClick=${()=>this.addUser()}>
                Add User
            </button>
            <a class="button is-link is-light" href="/">Go back Home</a>
          </div>
        </div>        
      </div>
    `}}} />`,document.getElementById("app"))})();