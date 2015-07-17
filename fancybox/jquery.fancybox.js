/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(e){var t,n,r,i,s,o,u,a,f,l,c=0,h={},p=[],d=0,v={},m=[],g=null,y=new Image,b=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,w=/[^\.]\.(swf)\s*$/i,E,S=1,x=0,T="",N,C,k=false,L=e.extend(e("<div/>")[0],{prop:0}),A=e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest,O=function(){n.hide();y.onerror=y.onload=null;g&&g.abort();t.empty()},M=function(){if(false===h.onError(p,c,h)){n.hide();k=false}else{h.titleShow=false;h.width="auto";h.height="auto";t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');D()}},_=function(){var r=p[c],i,s,u,a,f,l;O();h=e.extend({},e.fn.fancybox.defaults,typeof e(r).data("fancybox")=="undefined"?h:e(r).data("fancybox"));l=h.onStart(p,c,h);if(l===false)k=false;else{if(typeof l=="object")h=e.extend(h,l);u=h.title||(r.nodeName?e(r).attr("title"):r.title)||"";if(r.nodeName&&!h.orig)h.orig=e(r).children("img:first").length?e(r).children("img:first"):e(r);if(u===""&&h.orig&&h.titleFromAlt)u=h.orig.attr("alt");i=h.href||(r.nodeName?e(r).attr("href"):r.href)||null;if(/^(?:javascript)/i.test(i)||i=="#")i=null;if(h.type){s=h.type;if(!i)i=h.content}else if(h.content)s="html";else if(i)s=i.toString().match(b)?"image":i.toString().match(w)?"swf":e(r).hasClass("iframe")?"iframe":i.indexOf("#")===0?"inline":"ajax";if(s){if(s=="inline"){r=i.substr(i.indexOf("#"));s=e(r).length>0?"inline":"ajax"}h.type=s;h.href=i;h.title=u;if(h.autoDimensions)if(h.type=="html"||h.type=="inline"||h.type=="ajax"){h.width="auto";h.height="auto"}else h.autoDimensions=false;if(h.modal){h.overlayShow=true;h.hideOnOverlayClick=false;h.hideOnContentClick=false;h.enableEscapeButton=false;h.showCloseButton=false}h.padding=parseInt(h.padding,10);h.margin=parseInt(h.margin,10);t.css("padding",h.padding+h.margin);e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(o.children())});switch(s){case"html":t.html(h.content);D();break;case"inline":if(e(r).parent().is("#fancybox-content")===true){k=false;break}e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(r)).bind("fancybox-cleanup",function(){e(this).replaceWith(o.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())});e(r).appendTo(t);D();break;case"image":k=false;e.fancybox.showActivity();y=new Image;y.onerror=function(){M()};y.onload=function(){k=true;y.onerror=y.onload=null;h.width=y.width;h.height=y.height;e("<img />").attr({id:"fancybox-img",src:y.src,alt:h.title}).appendTo(t);P()};y.src=i;break;case"swf":h.scrolling="no";a='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+h.width+'" height="'+h.height+'"><param name="movie" value="'+i+'"></param>';f="";e.each(h.swf,function(e,t){a+='<param name="'+e+'" value="'+t+'"></param>';f+=" "+e+'="'+t+'"'});a+='<embed src="'+i+'" type="application/x-shockwave-flash" width="'+h.width+'" height="'+h.height+'"'+f+"></embed></object>";t.html(a);D();break;case"ajax":k=false;e.fancybox.showActivity();h.ajax.win=h.ajax.success;g=e.ajax(e.extend({},h.ajax,{url:i,data:h.ajax.data||{},error:function(e){e.status>0&&M()},success:function(e,r,s){if((typeof s=="object"?s:g).status==200){if(typeof h.ajax.win=="function"){l=h.ajax.win(i,e,r,s);if(l===false){n.hide();return}else if(typeof l=="string"||typeof l=="object")e=l}t.html(e);D()}}}));break;case"iframe":P()}}else M()}},D=function(){var n=h.width,r=h.height;n=n.toString().indexOf("%")>-1?parseInt((e(window).width()-h.margin*2)*parseFloat(n)/100,10)+"px":n=="auto"?"auto":n+"px";r=r.toString().indexOf("%")>-1?parseInt((e(window).height()-h.margin*2)*parseFloat(r)/100,10)+"px":r=="auto"?"auto":r+"px";t.wrapInner('<div style="width:'+n+";height:"+r+";overflow: "+(h.scrolling=="auto"?"auto":h.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');h.width=t.width();h.height=t.height();P()},P=function(){var g,y;n.hide();if(i.is(":visible")&&false===v.onCleanup(m,d,v)){e.event.trigger("fancybox-cancel");k=false}else{k=true;e(o.add(r)).unbind();e(window).unbind("resize.fb scroll.fb");e(document).unbind("keydown.fb");i.is(":visible")&&v.titlePosition!=="outside"&&i.css("height",i.height());m=p;d=c;v=h;if(v.overlayShow){r.css({"background-color":v.overlayColor,opacity:v.overlayOpacity,cursor:v.hideOnOverlayClick?"pointer":"auto",height:e(document).height()});if(!r.is(":visible")){A&&e("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});r.show()}}else r.hide();C=I();T=v.title||"";x=0;a.empty().removeAttr("style").removeClass();if(v.titleShow!==false){if(e.isFunction(v.titleFormat))g=v.titleFormat(T,m,d,v);else g=T&&T.length?v.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+T+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+v.titlePosition+'">'+T+"</div>":false;T=g;if(!(!T||T==="")){a.addClass("fancybox-title-"+v.titlePosition).html(T).appendTo("body").show();switch(v.titlePosition){case"inside":a.css({width:C.width-v.padding*2,marginLeft:v.padding,marginRight:v.padding});x=a.outerHeight(true);a.appendTo(s);C.height+=x;break;case"over":a.css({marginLeft:v.padding,width:C.width-v.padding*2,bottom:v.padding}).appendTo(s);break;case"float":a.css("left",parseInt((a.width()-C.width-40)/2,10)*-1).appendTo(i);break;default:a.css({width:C.width-v.padding*2,paddingLeft:v.padding,paddingRight:v.padding}).appendTo(i)}}}a.hide();if(i.is(":visible")){e(u.add(f).add(l)).hide();g=i.position();N={top:g.top,left:g.left,width:i.width(),height:i.height()};y=N.width==C.width&&N.height==C.height;o.fadeTo(v.changeFade,.3,function(){var n=function(){o.html(t.contents()).fadeTo(v.changeFade,1,B)};e.event.trigger("fancybox-change");o.empty().removeAttr("filter").css({"border-width":v.padding,width:C.width-v.padding*2,height:h.autoDimensions?"auto":C.height-x-v.padding*2});if(y)n();else{L.prop=0;e(L).animate({prop:1},{duration:v.changeSpeed,easing:v.easingChange,step:j,complete:n})}})}else{i.removeAttr("style");o.css("border-width",v.padding);if(v.transitionIn=="elastic"){N=q();o.html(t.contents());i.show();if(v.opacity)C.opacity=0;L.prop=0;e(L).animate({prop:1},{duration:v.speedIn,easing:v.easingIn,step:j,complete:B})}else{v.titlePosition=="inside"&&x>0&&a.show();o.css({width:C.width-v.padding*2,height:h.autoDimensions?"auto":C.height-x-v.padding*2}).html(t.contents());i.css(C).fadeIn(v.transitionIn=="none"?0:v.speedIn,B)}}}},H=function(){if(v.enableEscapeButton||v.enableKeyboardNav)e(document).bind("keydown.fb",function(t){if(t.keyCode==27&&v.enableEscapeButton){t.preventDefault();e.fancybox.close()}else if((t.keyCode==37||t.keyCode==39)&&v.enableKeyboardNav&&t.target.tagName!=="INPUT"&&t.target.tagName!=="TEXTAREA"&&t.target.tagName!=="SELECT"){t.preventDefault();e.fancybox[t.keyCode==37?"prev":"next"]()}});if(v.showNavArrows){if(v.cyclic&&m.length>1||d!==0)f.show();if(v.cyclic&&m.length>1||d!=m.length-1)l.show()}else{f.hide();l.hide()}},B=function(){if(!e.support.opacity){o.get(0).style.removeAttribute("filter");i.get(0).style.removeAttribute("filter")}h.autoDimensions&&o.css("height","auto");i.css("height","auto");T&&T.length&&a.show();v.showCloseButton&&u.show();H();v.hideOnContentClick&&o.bind("click",e.fancybox.close);v.hideOnOverlayClick&&r.bind("click",e.fancybox.close);e(window).bind("resize.fb",e.fancybox.resize);v.centerOnScroll&&e(window).bind("scroll.fb",e.fancybox.center);if(v.type=="iframe")e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="'+h.scrolling+'" src="'+v.href+'"></iframe>').appendTo(o);i.show();k=false;e.fancybox.center();v.onComplete(m,d,v);var t,n;if(m.length-1>d){t=m[d+1].href;if(typeof t!=="undefined"&&t.toString().match(b)){n=new Image;n.src=t}}if(d>0){t=m[d-1].href;if(typeof t!=="undefined"&&t.toString().match(b)){n=new Image;n.src=t}}},j=function(e){var t={width:parseInt(N.width+(C.width-N.width)*e,10),height:parseInt(N.height+(C.height-N.height)*e,10),top:parseInt(N.top+(C.top-N.top)*e,10),left:parseInt(N.left+(C.left-N.left)*e,10)};if(typeof C.opacity!=="undefined")t.opacity=e<.5?.5:e;i.css(t);o.css({width:t.width-v.padding*2,height:t.height-x*e-v.padding*2})},F=function(){return[e(window).width()-v.margin*2,e(window).height()-v.margin*2,e(document).scrollLeft()+v.margin,e(document).scrollTop()+v.margin]},I=function(){var e=F(),t={},n=v.autoScale,r=v.padding*2;t.width=v.width.toString().indexOf("%")>-1?parseInt(e[0]*parseFloat(v.width)/100,10):v.width+r;t.height=v.height.toString().indexOf("%")>-1?parseInt(e[1]*parseFloat(v.height)/100,10):v.height+r;if(n&&(t.width>e[0]||t.height>e[1]))if(h.type=="image"||h.type=="swf"){n=v.width/v.height;if(t.width>e[0]){t.width=e[0];t.height=parseInt((t.width-r)/n+r,10)}if(t.height>e[1]){t.height=e[1];t.width=parseInt((t.height-r)*n+r,10)}}else{t.width=Math.min(t.width,e[0]);t.height=Math.min(t.height,e[1])}t.top=parseInt(Math.max(e[3]-20,e[3]+(e[1]-t.height-40)*.5),10);t.left=parseInt(Math.max(e[2]-20,e[2]+(e[0]-t.width-40)*.5),10);return t},q=function(){var t=h.orig?e(h.orig):false,n={};if(t&&t.length){n=t.offset();n.top+=parseInt(t.css("paddingTop"),10)||0;n.left+=parseInt(t.css("paddingLeft"),10)||0;n.top+=parseInt(t.css("border-top-width"),10)||0;n.left+=parseInt(t.css("border-left-width"),10)||0;n.width=t.width();n.height=t.height();n={width:n.width+v.padding*2,height:n.height+v.padding*2,top:n.top-v.padding-20,left:n.left-v.padding-20}}else{t=F();n={width:v.padding*2,height:v.padding*2,top:parseInt(t[3]+t[1]*.5,10),left:parseInt(t[2]+t[0]*.5,10)}}return n},R=function(){if(n.is(":visible")){e("div",n).css("top",S*-40+"px");S=(S+1)%12}else clearInterval(E)};e.fn.fancybox=function(t){if(!e(this).length)return this;e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault();if(!k){k=true;e(this).blur();p=[];c=0;t=e(this).attr("rel")||"";if(!t||t==""||t==="nofollow")p.push(this);else{p=e("a[rel="+t+"], area[rel="+t+"]");c=p.index(this)}_()}});return this};e.fancybox=function(t,n){var r;if(!k){k=true;r=typeof n!=="undefined"?n:{};p=[];c=parseInt(r.index,10)||0;if(e.isArray(t)){for(var i=0,s=t.length;i<s;i++)if(typeof t[i]=="object")e(t[i]).data("fancybox",e.extend({},r,t[i]));else t[i]=e({}).data("fancybox",e.extend({content:t[i]},r));p=jQuery.merge(p,t)}else{if(typeof t=="object")e(t).data("fancybox",e.extend({},r,t));else t=e({}).data("fancybox",e.extend({content:t},r));p.push(t)}if(c>p.length||c<0)c=0;_()}};e.fancybox.showActivity=function(){clearInterval(E);n.show();E=setInterval(R,66)};e.fancybox.hideActivity=function(){n.hide()};e.fancybox.next=function(){return e.fancybox.pos(d+1)};e.fancybox.prev=function(){return e.fancybox.pos(d-1)};e.fancybox.pos=function(e){if(!k){e=parseInt(e);p=m;if(e>-1&&e<m.length){c=e;_()}else if(v.cyclic&&m.length>1){c=e>=m.length?0:m.length-1;_()}}};e.fancybox.cancel=function(){if(!k){k=true;e.event.trigger("fancybox-cancel");O();h.onCancel(p,c,h);k=false}};e.fancybox.close=function(){function t(){r.fadeOut("fast");a.empty().hide();i.hide();e.event.trigger("fancybox-cleanup");o.empty();v.onClosed(m,d,v);m=h=[];d=c=0;v=h={};k=false}if(!(k||i.is(":hidden"))){k=true;if(v&&false===v.onCleanup(m,d,v))k=false;else{O();e(u.add(f).add(l)).hide();e(o.add(r)).unbind();e(window).unbind("resize.fb scroll.fb");e(document).unbind("keydown.fb");o.find("iframe").attr("src",A&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");v.titlePosition!=="inside"&&a.empty();i.stop();if(v.transitionOut=="elastic"){N=q();var n=i.position();C={top:n.top,left:n.left,width:i.width(),height:i.height()};if(v.opacity)C.opacity=1;a.empty().hide();L.prop=1;e(L).animate({prop:0},{duration:v.speedOut,easing:v.easingOut,step:j,complete:t})}else i.fadeOut(v.transitionOut=="none"?0:v.speedOut,t)}}};e.fancybox.resize=function(){r.is(":visible")&&r.css("height",e(document).height());e.fancybox.center(true)};e.fancybox.center=function(e){var t,n;if(!k){n=e===true?1:0;t=F();!n&&(i.width()>t[0]||i.height()>t[1])||i.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+(t[1]-o.height()-40)*.5-v.padding)),left:parseInt(Math.max(t[2]-20,t[2]+(t[0]-o.width()-40)*.5-v.padding))},typeof e=="number"?e:200)}};e.fancybox.init=function(){if(!e("#fancybox-wrap").length){e("body").append(t=e('<div id="fancybox-tmp"></div>'),n=e('<div id="fancybox-loading"><div></div></div>'),r=e('<div id="fancybox-overlay"></div>'),i=e('<div id="fancybox-wrap"></div>'));s=e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(i);s.append(o=e('<div id="fancybox-content"></div>'),u=e('<a id="fancybox-close" class="btn"><i class="icon"></i></a>'),a=e('<div id="fancybox-title"></div>'),f=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico btn" id="fancybox-left-ico"><i class="icon"></i></span></a>'),l=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico btn" id="fancybox-right-ico"><i class="icon"></i></span></a>'));u.click(e.fancybox.close);n.click(e.fancybox.cancel);f.click(function(t){t.preventDefault();e.fancybox.prev()});l.click(function(t){t.preventDefault();e.fancybox.next()});e.fn.mousewheel&&i.bind("mousewheel.fb",function(t,n){if(k)t.preventDefault();else if(e(t.target).get(0).clientHeight==0||e(t.target).get(0).scrollHeight===e(t.target).get(0).clientHeight){t.preventDefault();e.fancybox[n>0?"prev":"next"]()}});e.support.opacity||i.addClass("fancybox-ie");if(A){n.addClass("fancybox-ie6");i.addClass("fancybox-ie6");e('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(s)}}};e.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};e(document).ready(function(){e.fancybox.init()})})(jQuery)