google.maps.__gjsload__('infowindow', function(_){var SM=function(a){return!!a.infoWindow.get("logAsInternal")},xOa=function(a,b){if(a.Eg.size===1){const c=Array.from(a.Eg.values())[0];c.sv!==b.sv&&(c.set("map",null),a.Eg.delete(c))}a.Eg.add(b)},zOa=function(a,b){var c=a.__gm;a=c.get("panes");c=c.get("innerContainer");b={wl:a,Cj:_.dB.Cj(),kx:c,shouldFocus:b};return new yOa(b)},TM=function(a,b){a.Yg.style.visibility=b?"":"hidden";b&&a.shouldFocus&&(a.focus(),a.shouldFocus=!1);b?AOa(a):a.Pg=!1},BOa=function(a){a.nj.setAttribute("aria-labelledby",a.Kg.id)},
COa=function(a){const b=!!a.get("open");var c=a.get("content");c=b?c:null;if(c==a.Ig)TM(a,b&&a.get("position"));else{if(a.Ig){const d=a.Ig.parentNode;d==a.Eg&&d.removeChild(a.Ig)}c&&(a.Og=!1,a.Eg.appendChild(c));TM(a,b&&a.get("position"));a.Ig=c;UM(a)}},VM=function(a){var b=!!a.get("open"),c=a.get("headerContent");const d=!!a.get("ariaLabel"),e=!a.get("headerDisabled");b=b?c:null;a.nj.style.paddingTop=e?"0":"12px";b===a.Jg?a.Hg.style.display=e?"":"none":(a.Jg&&(c=a.Jg.parentNode,c===a.Kg&&c.removeChild(a.Jg)),
b&&(a.Og=!1,a.Kg.appendChild(b),e&&!d&&BOa(a)),a.Hg.style.display=e?"":"none",a.Jg=b,UM(a))},UM=function(a){var b=a.getSize();if(b){var c=b.jm;b=b.minWidth;a.nj.style.maxWidth=_.au(c.width);a.nj.style.maxHeight=_.au(c.height);a.nj.style.minWidth=_.au(b);a.Eg.style.maxHeight=_.Oo.Eg?_.au(c.height-18):_.au(c.height-36);WM(a);a.Ng.start()}},DOa=function(a){const b=a.get("pixelOffset")||new _.bn(0,0);var c=new _.bn(a.nj.offsetWidth,a.nj.offsetHeight);a=-b.height+c.height+11+60;let d=b.height+60;const e=
-b.width+c.width/2+60;c=b.width+c.width/2+60;b.height<0&&(d-=b.height);return{top:a,bottom:d,left:e,right:c}},AOa=function(a){!a.Pg&&a.get("open")&&a.get("visible")&&a.get("position")&&(_.P(a,"visible"),a.Pg=!0)},WM=function(a){var b=a.get("position");if(b&&a.get("pixelOffset")){var c=DOa(a);const d=b.x-c.left,e=b.y-c.top,f=b.x+c.right;c=b.y+c.bottom;_.xu(a.anchor,b);b=a.get("zIndex");_.zu(a.Yg,_.Yk(b)?b:e+60);a.set("pixelBounds",_.Zn(d,e,f,c))}},FOa=function(a,b,c){return b instanceof _.Em?new EOa(a,
b,c):new EOa(a,b)},HOa=function(a){a.Eg&&a.pi.push(_.lm(a.Eg,"pixelposition_changed",()=>{GOa(a)}))},GOa=function(a){const b=a.model.get("pixelPosition")||a.Eg&&a.Eg.get("pixelPosition");a.Ig.set("position",b)},JOa=function(a){a=a.__gm;a.get("IW_AUTO_CLOSER")||a.set("IW_AUTO_CLOSER",new IOa);return a.get("IW_AUTO_CLOSER")},IOa=class{constructor(){this.Eg=new Set}};var yOa=class extends _.pm{constructor(a){super();this.Ig=this.Jg=this.Mg=null;this.Pg=this.Og=!1;this.kx=a.kx;this.shouldFocus=a.shouldFocus;this.Yg=document.createElement("div");this.Yg.style.cursor="default";this.Yg.style.position="absolute";this.Yg.style.left=this.Yg.style.top="0";a.wl.floatPane.appendChild(this.Yg);this.anchor=_.yu("div",this.Yg);this.Lg=_.yu("div",this.anchor);this.nj=_.yu("div",this.Lg);this.nj.setAttribute("role","dialog");this.nj.tabIndex=-1;this.Hg=_.yu("div",this.nj);this.Kg=
_.yu("div",this.Hg);this.Sg=_.yu("div",this.Lg);this.Eg=_.yu("div",this.nj);_.yEa(this.Yg);_.su(this.nj,"gm-style-iw");_.su(this.anchor,"gm-style-iw-a");_.su(this.Lg,"gm-style-iw-t");_.su(this.Sg,"gm-style-iw-tc");_.su(this.nj,"gm-style-iw-c");_.su(this.Hg,"gm-style-iw-chr");_.su(this.Kg,"gm-style-iw-ch");_.su(this.Eg,"gm-style-iw-d");this.Kg.setAttribute("id",_.Dm());_.Oo.Eg&&!_.Oo.Mg&&(this.nj.style.paddingInlineEnd="0",this.nj.style.paddingBottom="0",this.Eg.style.overflow="scroll");TM(this,!1);
_.hm(this.Yg,"mousedown",_.$l);_.hm(this.Yg,"mouseup",_.$l);_.hm(this.Yg,"mousemove",_.$l);_.hm(this.Yg,"pointerdown",_.$l);_.hm(this.Yg,"pointerup",_.$l);_.hm(this.Yg,"pointermove",_.$l);_.hm(this.Yg,"dblclick",_.$l);_.hm(this.Yg,"click",_.$l);_.hm(this.Yg,"touchstart",_.$l);_.hm(this.Yg,"touchend",_.$l);_.hm(this.Yg,"touchmove",_.$l);_.eu(this.Yg,"contextmenu",this,this.Rg);_.eu(this.Yg,"wheel",this,_.$l);_.eu(this.Yg,"mousewheel",this,_.Xl);_.eu(this.Yg,"MozMousePixelScroll",this,_.Xl);this.Fg=
new _.nA({Bq:new _.$m(12,12),Tr:new _.bn(24,24),offset:new _.$m(-6,-6),EB:!0,ownerElement:this.Hg});this.Hg.appendChild(this.Fg.element);_.hm(this.Fg.element,"click",b=>{_.$l(b);_.P(this,"closeclick");this.set("open",!1)});this.Ng=new _.zo(()=>{!this.Og&&this.get("content")&&this.get("visible")&&(_.P(this,"domready"),this.Og=!0)},0);this.Qg=_.hm(this.Yg,"keydown",b=>{b.key!=="Escape"&&b.key!=="Esc"||!this.nj.contains(document.activeElement)||(b.stopPropagation(),_.P(this,"closeclick"),this.set("open",
!1))})}ariaLabel_changed(){const a=this.get("ariaLabel");a?this.nj.setAttribute("aria-label",a):(this.nj.removeAttribute("aria-label"),this.get("headerDisabled")||BOa(this))}open_changed(){COa(this);VM(this)}headerContent_changed(){VM(this)}headerDisabled_changed(){VM(this)}content_changed(){COa(this)}pendingFocus_changed(){this.get("pendingFocus")&&(this.get("open")&&this.get("visible")&&this.get("position")?_.Ro(this.nj,!0):console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."),
this.set("pendingFocus",!1))}dispose(){setTimeout(()=>{document.activeElement&&document.activeElement!==document.body||(this.Mg&&this.Mg!==document.body?_.Ro(this.Mg,!0)||_.Ro(this.kx,!0):_.Ro(this.kx,!0))});this.Qg&&_.dm(this.Qg);this.Yg.parentNode.removeChild(this.Yg);this.Ng.stop();this.Ng.dispose()}getSize(){var a=this.get("layoutPixelBounds"),b=this.get("pixelOffset");const c=this.get("maxWidth")||648,d=this.get("minWidth")||0;if(!b)return null;a?(b=a.maxY-a.minY-(11+-b.height),a=a.maxX-a.minX-
6,a>=240&&(a-=120),b>=240&&(b-=120)):(a=648,b=654);a=Math.min(a,c);a=Math.max(d,a);a=Math.max(0,a);b=Math.max(0,b);return{jm:new _.bn(a,b),minWidth:d}}pixelOffset_changed(){const a=this.get("pixelOffset")||new _.bn(0,0);this.Lg.style.right=_.au(-a.width);this.Lg.style.bottom=_.au(-a.height+11);UM(this)}layoutPixelBounds_changed(){UM(this)}position_changed(){this.get("position")?(WM(this),TM(this,!!this.get("open"))):TM(this,!1)}zIndex_changed(){WM(this)}visible_changed(){this.Yg.style.display=this.get("visible")?
"":"none";this.Ng.start();if(this.get("visible")){const a=this.Fg.element.style.display;this.Fg.element.style.display="none";this.Fg.element.getBoundingClientRect();this.Fg.element.style.display=a;AOa(this)}else this.Pg=!1}Rg(a){let b=!1;const c=this.get("content");let d=a.target;for(;!b&&d;)b=d==c,d=d.parentNode;b?_.Xl(a):_.Zl(a)}focus(){this.Mg=document.activeElement;let a;_.Oo.Ng&&(a=this.Eg.getBoundingClientRect());if(this.get("disableAutoPan"))_.Ro(this.nj,!0);else{var b=_.Eu(this.Eg);if(b.length){b=
b[0];a=a||this.Eg.getBoundingClientRect();var c=b.getBoundingClientRect();_.Ro(c.bottom<=a.bottom&&c.right<=a.right?b:this.nj,!0)}else _.Ro(this.Fg.element,!0)}}};var EOa=class{constructor(a,b,c){this.model=a;this.isOpen=!0;this.Eg=this.Hg=this.ah=null;this.pi=[];var d=a.get("shouldFocus");this.Ig=zOa(b,d);const e=b.__gm;(d=b instanceof _.Em)&&c?c.then(h=>{this.isOpen&&(this.ah=h,this.Eg=new _.hK(l=>{this.Hg=new _.hA(b,h,l,()=>{});h.Ii(this.Hg);return this.Hg}),this.Eg.bindTo("latLngPosition",a,"position"),HOa(this))}):(this.Eg=new _.hK,this.Eg.bindTo("latLngPosition",a,"position"),this.Eg.bindTo("center",e,"projectionCenterQ"),this.Eg.bindTo("zoom",e),this.Eg.bindTo("offset",
e),this.Eg.bindTo("projection",b),this.Eg.bindTo("focus",b,"position"),HOa(this));this.Jg=d?SM(a)?"Ia":"Id":null;this.Kg=d?SM(a)?148284:148285:null;const f=new _.TJ(["scale"],"visible",h=>h==null||h>=.3);this.Eg&&f.bindTo("scale",this.Eg);const g=this.Ig;g.set("logAsInternal",SM(a));g.bindTo("ariaLabel",a);g.bindTo("zIndex",a);g.bindTo("layoutPixelBounds",e,"pixelBounds");g.bindTo("disableAutoPan",a);g.bindTo("pendingFocus",a);g.bindTo("maxWidth",a);g.bindTo("minWidth",a);g.bindTo("content",a);g.bindTo("headerContent",
a);g.bindTo("headerDisabled",a);g.bindTo("pixelOffset",a);g.bindTo("visible",f);this.Fg=new _.zo(()=>{if(b instanceof _.Em)if(this.ah){var h=a.get("position");h&&(0,_.Nma.KE)(b,this.ah,new _.Lm(h),DOa(g))}else c.then(()=>{this.Fg.start()});else(h=g.get("pixelBounds"))?_.P(e,"pantobounds",h):this.Fg.start()},150);if(d){let h=null;this.pi.push(_.lm(a,"position_changed",()=>{const l=a.get("position");!l||a.get("disableAutoPan")||l.equals(h)||(this.Fg.start(),h=l)}))}else a.get("disableAutoPan")||this.Fg.start();
g.set("open",!0);this.pi.push(_.bm(g,"domready",()=>{a.trigger("domready")}));this.pi.push(_.bm(g,"visible",()=>{a.trigger("visible")}));this.pi.push(_.bm(g,"closeclick",()=>{a.close();a.trigger("closeclick")}));this.pi.push(_.lm(a,"pixelposition_changed",()=>{GOa(this)}));this.Jg&&_.Um(b,this.Jg);this.Kg&&_.N(b,this.Kg)}close(){if(this.isOpen){this.isOpen=!1;this.model.trigger("close");for(var a of this.pi)_.dm(a);this.pi.length=0;this.Fg.stop();this.Fg.dispose();this.ah&&this.Hg&&this.ah.yl(this.Hg);
a=this.Ig;a.unbindAll();a.set("open",!1);a.dispose();this.Eg&&this.Eg.unbindAll()}}};_.Ik("infowindow",{JG:function(a){let b=null;_.lm(a,"map_changed",function d(){const e=a.get("map");b&&(b.KC.Eg.delete(a),b.GK.close(),b=null);if(e){const f=e.__gm;f.get("panes")?f.get("innerContainer")?(b={GK:FOa(a,e,e instanceof _.Em?f.Fg.then(({ah:g})=>g):void 0),KC:JOa(e)},xOa(b.KC,a)):_.km(f,"innercontainer_changed",d):_.km(f,"panes_changed",d)}})}});});
