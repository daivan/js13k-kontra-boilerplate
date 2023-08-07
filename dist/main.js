/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";let t=()=>{};let i,s,e={};function h(t,i){e[t]=e[t]||[],e[t].push(i)}function n(t,...i){(e[t]||[]).map((t=>t(...i)))}let r={get:(i,s)=>"_proxy"==s||t};function a(){return s}function c(t,i,s){return Math.min(Math.max(t,s),i)}class o{constructor(t=0,i=0,s={}){null!=t.x?(this.x=t.x,this.y=t.y):(this.x=t,this.y=i),s._c&&(this.clamp(s._a,s._b,s._d,s._e),this.x=t,this.y=i)}set(t){this.x=t.x,this.y=t.y}add(t){return new o(this.x+t.x,this.y+t.y,this)}subtract(t){return new o(this.x-t.x,this.y-t.y,this)}scale(t){return new o(this.x*t,this.y*t)}normalize(t=this.length()||1){return new o(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}direction(){return Math.atan2(this.y,this.x)}clamp(t,i,s,e){this._c=!0,this._a=t,this._b=i,this._d=s,this._e=e}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?c(this._a,this._d,t):t}set y(t){this._y=this._c?c(this._b,this._e,t):t}}function d(){return new o(...arguments)}class l{constructor(t){return this.init(t)}init(t={}){this.position=d(),this.velocity=d(),this.acceleration=d(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let i=this.acceleration;t&&(i=i.scale(t)),this.velocity=this.velocity.add(i);let s=this.velocity;t&&(s=s.scale(t)),this.position=this.position.add(s),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}class _ extends l{init({width:t=0,height:i=0,context:s=a(),render:e=this.draw,update:n=this.advance,children:r=[],anchor:c={x:0,y:0},opacity:o=1,rotation:d=0,scaleX:l=1,scaleY:_=1,...u}={}){this._c=[],super.init({width:t,height:i,context:s,anchor:c,opacity:o,rotation:d,scaleX:l,scaleY:_,...u}),this._di=!0,this._uw(),this.addChild(r),this._rf=e,this._uf=n,h("init",(()=>{this.context??=a()}))}update(t){this._uf(t),this.children.map((i=>i.update&&i.update(t)))}render(){let t=this.context;t.save(),(this.x||this.y)&&t.translate(this.x,this.y),this.rotation&&t.rotate(this.rotation),1==this.scaleX&&1==this.scaleY||t.scale(this.scaleX,this.scaleY);let i=-this.width*this.anchor.x,s=-this.height*this.anchor.y;(i||s)&&t.translate(i,s),this.context.globalAlpha=this.opacity,this._rf(),(i||s)&&t.translate(-i,-s),this.children.map((t=>t.render&&t.render())),t.restore()}draw(){}_pc(){this._uw(),this.children.map((t=>t._pc()))}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:i=0,_wo:s=1,_wr:e=0,_wsx:h=1,_wsy:n=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=s*this.opacity,this._wsx=h*this.scaleX,this._wsy=n*this.scaleY,this._wx=this._wx*h,this._wy=this._wy*n,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wr=e+this.rotation;let{x:r,y:a}=function(t,i){let s=Math.sin(i),e=Math.cos(i);return{x:t.x*e-t.y*s,y:t.x*s+t.y*e}}({x:this._wx,y:this._wy},e);this._wx=r,this._wy=a,this._wx+=t,this._wy+=i}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}set children(t){this.removeChild(this._c),this.addChild(t)}get children(){return this._c}addChild(...i){i.flat().map((i=>{this.children.push(i),i.parent=this,i._pc=i._pc||t,i._pc()}))}removeChild(...t){t.flat().map((t=>{(function(t,i){let s=t.indexOf(i);if(-1!=s)return t.splice(s,1),!0})(this.children,t)&&(t.parent=null,t._pc())}))}get opacity(){return this._opa}set opacity(t){this._opa=c(0,1,t),this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,i=t){this.scaleX=t,this.scaleY=i}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}class u extends _{init({image:t,width:i=(t?t.width:void 0),height:s=(t?t.height:void 0),...e}={}){super.init({image:t,width:i,height:s,...e})}get animations(){return this._a}set animations(t){let i,s;for(i in this._a={},t)this._a[i]=t[i].clone(),s=s||this._a[i];this.currentAnimation=s,this.width=this.width||s.width,this.height=this.height||s.height}playAnimation(t){this.currentAnimation?.stop(),this.currentAnimation=this.animations[t],this.currentAnimation.start()}advance(t){super.advance(t),this.currentAnimation?.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}function x(t){let i=t.canvas;t.clearRect(0,0,i.width,i.height)}new WeakMap;let{canvas:w}=function(t,{contextless:e=!1}={}){if(i=document.getElementById(t)||t||document.querySelector("canvas"),e&&(i=i||new Proxy({},r)),!i)throw Error("You must provide a canvas element for the game");return s=i.getContext("2d")||new Proxy({},r),s.imageSmoothingEnabled=!1,n("init"),{canvas:i,context:s}}(),y=function(){return new u(...arguments)}({x:100,y:80,color:"blue",width:20,height:40,dx:2});(function({fps:i=60,clearCanvas:s=!0,update:e=t,render:r,context:c=a(),blur:o=!1}={}){if(!r)throw Error("You must provide a render() function");let d,l,_,u,w,y=0,p=1e3/i,g=1/i,m=s?x:t,f=!0;function v(){if(l=requestAnimationFrame(v),f&&(_=performance.now(),u=_-d,d=_,!(u>1e3))){for(n("tick"),y+=u;y>=p;)w.update(g),y-=p;m(w.context),w.render()}}return o||(window.addEventListener("focus",(()=>{f=!0})),window.addEventListener("blur",(()=>{f=!1}))),h("init",(()=>{w.context??=a()})),w={update:e,render:r,isStopped:!0,context:c,start(){d=performance.now(),this.isStopped=!1,requestAnimationFrame(v)},stop(){this.isStopped=!0,cancelAnimationFrame(l)},_frame:v,set _last(t){d=t}},w})({update:function(){y.update(),y.x>w.width&&(y.x=-y.width)},render:function(){y.render()}}).start()})();