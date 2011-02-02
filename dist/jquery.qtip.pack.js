/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: 2.0.0pre
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Tue Feb 1 23:35:43 2011 +0000
*/

"use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false */

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"7C 5b",I(a,b,c){I w(b){K c=N,d=b.1d,e=d.1l,f=".1S-"+b.1e,g="3Z"+f+" 2T"+f;a.1n(c,{1U:I(){d.1S=a(\'<40 1L="1v-1l-1S" 5c="0" 5d="-1" 7t="5e:\\\'\\\';"  14="2h:2D; 15:3z; z-3Q:-1; 34:7k(45=0);"></40>\'),d.1S.2B(e),e.19(g,c.2v)},2v:I(){K a=b.3G("4N"),c=b.Y.16,f=b.1d.16,g,h;h=1z(e.X("1a-P-V"),10)||0,h={P:-h,O:-h},c&&f&&(g=c.1g.1r==="x"?["V","P"]:["U","O"],h[g[1]]-=f[g[0]]()),d.1S.X(h).X(a)},1Y:I(){c.40.1K(),e.1E(g)}}),c.1U()}I v(c){K f=N,g=c.28.M.1t,h=c.1d,i=h.1l,j="#L-23",k=".7H",l="2T"+k+" 4M"+k;c.2z.1t={"^M.1t.(2K|22)$":I(){f.1U(),h.23.1W(i.42(":73"))}},a.1n(f,{1U:I(){g.2K&&(i.1E(k).19(l,I(b,c,d){K e=b.1F.2i("1l","");a.26(g[e])?g[e].1J(h.23,d,c):f[e](d)}),f.2g(),g.22===d&&h.23.1E(k+c.1e).19("3R"+k+c.1e,I(){c.R.1J(c)}))},2g:I(){K c=a(j),d;Q(c.17){h.23=c;J c}d=h.23=a("<2j />",{1e:j.2n(1),X:{15:"3z",O:0,P:0,2h:"4k"}}).2B(1C.2I),a(b).19("2r"+k,I(){d.X({U:1b.2L(a(b).U(),a(1C).U()),V:1b.2L(a(b).V(),a(1C).V())})}).2e("2r");J d},1W:I(b){K g=h.23,j=c.28.M.1t.1T,k=b?"M":"R",l;g||(g=f.2g());Q(!g.42(":5i")||b)g.3B(d,e),b&&(l=1z(a.X(i[0],"z-3Q"),10),g.X("z-3Q",(l||a.S.L.3K)-1)),a.26(j)?j.1J(g,b):j===e?g[k]():g.4S(3q,b?.7:0,I(){b||a(N).R()})},M:I(){f.1W(d)},R:I(){f.1W(e)},1Y:I(){K f=d;a("*").1k(I(){K b=a(N).1A("L");Q(b&&b.1e!==c.1e&&b.28.M.1t)J f=e}),f?(h.23.1K(),a(b).1E(k)):h.23.1E(k+c.1e),i.1E(l)}}),f.1U()}I u(b,g){I v(a){K b=a.1r==="y",c=m[b?"V":"U"],d=m[b?"U":"V"],e=a.1m().3D("1s")>-1,f=c*(e?.5:1),g=1b.5l,h=1b.3T,i,j,k,l=1b.3M(g(f,2)+g(d,2)),n=[o/f*l,o/d*l];n[2]=1b.3M(g(n[0],2)-g(o,2)),n[3]=1b.3M(g(n[1],2)-g(o,2)),i=l+n[2]+n[3]+(e?0:n[0]),j=i/l,k=[h(j*d),h(j*c)];J{U:k[b?0:1],V:k[b?1:0]}}I u(b){K c=j.1w&&b.y==="O",d=c?j.1w:j.T,e=a.1H.5m,f=e?"-5n-":a.1H.4y?"-4y-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"1a-4t-"+g:"1a-"+g+"-4t");J 1z(d.X(h),10)||1z(k.X(h),10)||0}I s(a,b,c){b=b?b:a[a.1r];K d=j.1w&&a.y==="O",e=d?j.1w:j.T,f="1a-"+b+"-V",g=1z(e.X(f),10);J(c?g||1z(k.X(f),10):g)||0}I r(b,e,f,g){Q(j.16){K k=a.1n({},h.1g),m=f.3r,n;h.1g.24!==d&&(m.P&&(k.x=k.x==="1s"?m.P>0?"P":"1i":k.x==="P"?"1i":"P"),m.O&&(k.y=k.y==="1s"?m.O>0?"O":"1j":k.y==="O"?"1j":"O"),k.1m()!==l.1g&&(l.O!==m.O||l.P!==m.P)&&(n=h.2M(k))),n||(n=h.15(k,0)),n.1i!==c&&(n.P=n.1i),n.1j!==c&&(n.O=n.1j),n.3e=1b.2L(0,i.W),f.P-=n.P.2X?n.3e:(n.1i?-1:1)*n.P,f.O-=n.O.2X?n.3e:(n.1j?-1:1)*n.O,l.P=m.P,l.O=m.O,l.1g=k.1m()}}K h=N,i=b.28.14.16,j=b.1d,k=j.1l,l={O:0,P:0,1g:""},m={V:i.V,U:i.U},n={},o=i.1a||0,p=".L-16",q=a("<4d />")[0].3A;h.1g=f,h.3o=f,b.2z.16={"^15.1M|14.16.(1g|3o|1a)$":I(){h.1U()||h.1Y(),b.1R()},"^14.16.(U|V)$":I(){m={V:i.V,U:i.U},h.2g(),h.2M(),b.1R()},"^T.13.1o|14.(31|2c)$":I(){j.16&&h.2M()}},a.1n(h,{1U:I(){K b=h.4c()&&(q||a.1H.2w);b&&(h.2g(),h.2M(),k.1E(p).19("3Z"+p,r));J b},4c:I(){K c=i.1g,f=b.28.15,g=f.2f,j=f.1M.1m?f.1M.1m():f.1M;Q(c===e||j===e&&g===e)J e;c===d?h.1g=1D a.S.L.Y.2t(j):c.1m||(h.1g=1D a.S.L.Y.2t(c),h.1g.24=d);J h.1g.1m()!=="4X"},4f:I(){K c=j.16.X({75:"",1a:""}),d=h.1g,e=d[d.1r],f="1a-"+e+"-32",g="1a"+e.2X(0)+e.2n(1)+"5p",l=/5W?\\(0, 0, 0(, 0)?\\)|2V/i,o="5r-32",p="2V",q=j.1w&&(d.y==="O"||d.y==="1s"&&c.15().O+m.U/2+i.W<j.1w.2F(1)),r=q?j.1w:j.T;n.27=c.X(o)||p,n.1a=c[0].14[g];Q(!n.27||l.1x(n.27))n.27=r.X(o),l.1x(n.27)&&(n.27=k.X(o));Q(!n.1a||l.1x(n.1a)){n.1a=k.X(f);Q(l.1x(n.1a)||n.1a===a(1C.2I).X("32"))n.1a=r.X(f)!==a(b.1d.T).X("32")?r.X(f):p}a("*",c).2p(c).X(o,p).X("1a","5X 4h 2V")},2g:I(){K b=m.V,c=m.U,d;j.16&&j.16.1K(),j.16=a("<2j />",{"1L":"1v-1l-16"}).X({V:b,U:c}).5s(k),q?a("<4d />").2B(j.16)[0].3A("2d").4b():(d=\'<3V:3S 5u="0,0" 14="2h:2D; 15:3z; 4R:2l(#3l#4n);"></3V:3S>\',j.16.2H(o?d+=d:d))},2M:I(b){K c=j.16,g=c.5v(),k=m.V,l=m.U,p="3C 5w ",r="3C 4h 2V",u=i.3o,w=1b.3T,x,y,z,A,B;b||(b=h.1g),u===e?u=b:(u=1D a.S.L.Y.2t(u),u.1r=b.1r,u.x==="3i"?u.x=b.x:u.y==="3i"?u.y=b.y:u.x===u.y&&(u[b.1r]=b[b.1r])),x=u.1r,h.4f(),o=n.1a==="2V"||n.1a==="#5x"?0:i.1a===d?s(b,f,d):i.1a,z=t(u,k,l),B=v(b),c.X(B),b.1r==="y"?A=[w(u.x==="P"?o:u.x==="1i"?B.V-k-o:(B.V-k)/2),w(u.y==="O"?B.U-l:0)]:A=[w(u.x==="P"?B.V-k:0),w(u.y==="O"?o:u.y==="1j"?B.U-l-o:(B.U-l)/2)],q?(g.18(B),y=g[0].3A("2d"),y.5y(),y.4b(),y.5z(0,0,4g,4g),y.5A(A[0],A[1]),y.5B(),y.5C(z[0][0],z[0][1]),y.4i(z[1][0],z[1][1]),y.4i(z[2][0],z[2][1]),y.7I(),y.5D=n.27,y.5E=n.1a,y.5F=o*2,y.7E="4m",y.5G=5H,y.4l(),y.27()):(z="m"+z[0][0]+","+z[0][1]+" l"+z[1][0]+","+z[1][1]+" "+z[2][0]+","+z[2][1]+" 5I",A[2]=o&&/^(r|b)/i.1x(b.1m())?1:0,g.X({5J:""+(u.1m().3D("1s")>-1),P:A[0]-A[2]*4V(x==="x"),O:A[1]-A[2]*4V(x==="y"),V:k+o,U:l+o}).1k(I(b){K c=a(N);c.18({5K:k+o+" "+(l+o),5L:z,5M:n.27,5N:!!b,5O:!b}).X({2h:o||b?"2D":"4k"}),!b&&o>0&&c.2H()===""&&c.2H(\'<3V:4l 5P="\'+o*2+\'3C" 32="\'+n.1a+\'" 5Q="5R" 5T="4m"  14="4R:2l(#3l#4n); 2h:2D;" />\')}));J h.15(b,1)},15:I(b,c){K f=j.16,g={},k=1b.2L(0,i.W),l,m,n;Q(i.1g===e||!f)J e;b=b||h.1g,l=b.1r,m=v(b),n=a.1H.2w&&o&&/^(b|r)/i.1x(b.1m())?1:0,a.1k(l==="y"?[b.x,b.y]:[b.y,b.x],I(a,c){K e,f;c==="1s"?(e=l==="y"?"P":"O",g[e]="50%",g["4o-"+e]=-1b.3T(m[l==="y"?"V":"U"]/2)+k):(e=s(b,c,d),f=u(b),g[c]=a||!o?s(b,c):k+(f>e?f:0))}),g[b[l]]-=m[l==="x"?"V":"U"]+n,c&&f.X({O:"",1j:"",P:"",1i:"",4o:""}).X(g);J g},1Y:I(){j.16&&j.16.1K(),k.1E(p)}}),h.1U()}I t(a,b,c){K d=1b.3h(b/2),e=1b.3h(c/2),f={4p:[[0,0],[b,c],[b,0]],4q:[[0,0],[b,0],[0,c]],4K:[[0,c],[b,0],[b,c]],4L:[[0,0],[0,c],[b,c]],5V:[[0,c],[d,0],[b,c]],7c:[[0,0],[b,0],[d,c]],5Y:[[0,0],[b,e],[0,c]],5Z:[[b,0],[b,c],[0,e]]};f.60=f.4p,f.61=f.4q,f.62=f.4K,f.63=f.4L;J f[a.1m()]}I s(b){K c=N,d=b.1d.1l,e=b.28.T.1y,f=".L-1y",g=/<3N\\b[^<]*(?:(?!<\\/3N>)<[^<]*)*<\\/3N>/4v;b.2z.1y={"^T.1y":I(a,b){b==="21"?c.21():e&&e.2l&&c.2A()}},a.1n(c,{1U:I(){e&&e.2l&&(c.2A(),d.66("2T",c.21))},21:I(){e.21?c.1Y():d.19("2T"+f,c.2A)},2A:I(){I j(a,c,d){b.2J("T.1o",c+": "+d)}I i(c){h&&(c=a("<2j/>").30(c.2i(g,"")).4E(h)),b.2J("T.1o",c)}K d=e.2l.3D(" "),f=e.2l,h;d>-1&&(h=f.2n(d),f=f.2n(0,d)),a.1y(a.1n({68:i,3y:j,69:b},e,{2l:f}));J c},1Y:I(){d.1E(f)}}),c.1U()}I r(b,c){K g,h,i,j,k=a(N),l=a(1C.2I),m=N===1C?l:k,r=k.1Z?k.1Z(c.1Z):f,s=c.1Z.1F==="6a"&&r?r[c.1Z.3J]:f,t=k.1A(c.1Z.3J||"6b");6c{t=12 t==="1m"?(1D 6S("J "+t))():t}6R(u){o("6e 6f 6O 6h 6M 1A: "+t)}j=a.1n(d,{},a.S.L.35,c,12 t==="1f"?p(t):f,p(s||r)),r&&a.48(N,"1Z"),h=j.15,j.1e=b;Q("2Q"===12 j.T.1o){i=k.18(j.T.18);Q(j.T.18!==e&&i)j.T.1o=i;3j J e}h.1u===e&&(h.1u=l),h.11===e&&(h.11=m),j.M.11===e&&(j.M.11=m),j.R.11===e&&(j.R.11=m),j.15.1V===d&&(j.15.1V=h.1u),h.2f=1D a.S.L.Y.2t(h.2f),h.1M=1D a.S.L.Y.2t(h.1M);Q(a.1A(N,"L"))Q(j.3Y)k.L("1Y");3j Q(j.3Y===e)J e;a.18(N,"13")&&(a.1A(N,n,a.18(N,"13")),k.3d("13")),g=1D q(k,j,b,!!i),a.1A(N,"L",g),k.19("1K.L",I(){g.1Y()});J g}I q(m,o,q,r){I H(c,d,e,g){g=1z(g,10)!==0;K h=".L-"+q,i={M:c?o.M.11:f,R:d?o.R.11:f,1l:e?s.1d.1l:f,T:e?s.1d.T:f,1u:g?o.15.1u[0]===t?1C:o.15.1u:f,43:g?b:f};s.1h?a([]).6i(a.6K([i.M,i.R,i.1l,i.1u,i.T,i.43],I(){J N!==49})).1E(h):c&&i.M.1E(h+"-2g")}I G(c,d,f,g){I z(a){y()&&s.1R(a)}I x(a){Q(w.2a(i))J e;1G(s.1p.1Q),s.1p.1Q=2S(I(){s.R(a)},o.R.1Q)}I v(b){Q(w.2a(i))J e;K c=a(b.4Q||b.11),d=c.6k(j)[0]===w[0],f=c[0]===l.M[0];1G(s.1p.M),1G(s.1p.R);Q(k.11==="1X"&&d||o.R.24&&(/1X(4O|4P|3x)/.1x(b.1F)&&(d||f))){b.6l(),b.6m();J e}w.3B(1,1),o.R.25>0?s.1p.R=2S(I(){s.R(b)},o.R.25):s.R(b)}I u(a){Q(w.2a(i))J e;l.M.2e("L-"+q+"-1Q"),1G(s.1p.M),1G(s.1p.R);K b=I(){s.M(a)};o.M.25>0?s.1p.M=2S(b,o.M.25):b()}K h=".L-"+q,k=o.15,l={M:o.M.11,R:o.R.11,1u:k.1u[0]===t?1C:k.1u},n={M:2C(o.M.1c).2Y(" "),R:2C(o.R.1c).2Y(" ")},p=a(1C),r=a.1H.2w&&1z(a.1H.3k,10)===6;f&&(o.R.24&&(l.R=l.R.2p(w),w.19("6G"+h,I(){w.2a(i)||1G(s.1p.R)})),w.19("2N"+h+" 47"+h,I(a){s[a.1F==="2N"?"2q":"22"](a)})),d&&("2y"===12 o.R.1Q&&(l.M.19("L-"+q+"-1Q",x),a.1k(a.S.L.4G,I(a,b){l.R.2p(s.1d.1l).19(b+h+"-1Q",x)})),a.1k(n.R,I(b,c){K d=a.6o(c,n.M),e=a(l.R);d>-1&&e.2p(l.M).17===e.17||c==="4u"?(l.M.19(c+h,I(a){y()?v(a):u(a)}),2x n.M[d]):l.R.19(c+h,v)})),c&&a.1k(n.M,I(a,b){l.M.19(b+h,u)}),g&&((k.2v.2r||k.1V)&&a(a.1c.6p.2r?k.1V:b).19("2r"+h,z),(k.1V||r&&w.X("15")==="24")&&a(k.1V).19("41"+h,z),/4u/i.1x(o.R.1c)&&p.19("3F"+h,I(b){K c=a(b.11);c.6q(j).17===0&&c.2p(m).17>1&&y()&&!w.2a(i)&&s.R(b)}),k.11==="1X"&&p.19("3L"+h,I(b){k.2v.1X&&!w.2a(i)&&y()&&s.1R(b||a.S.L.1X)}))}I F(b,c){K f=s.1d.T;Q(!s.1h||!b)J e;a.26(b)&&(b=b.1J(m,s)||""),b.1I&&b.17>0?f.4w().30(b.X({2h:"2D"})):f.2H(b),w.3s("3W",I(b){I e(a){c=c.3c(a),c.17===0&&(s.38(),s.1h&&y()&&s.1R(s.1q.1c),b())}K c=f.4E("2Z:3c([U]):3c([V])");c.1k(I(b,c){K f=["6r","3y","2A","6s",""].6t(".L-6u ");a(N).19(f,I(){1G(s.1p.2Z[b]),e(N)}),I g(){Q(c.U)J e(c);s.1p.2Z[b]=2S(g,20)}();J d}),c.17===0&&e(c)});J s}I E(b){K c=s.1d.13;Q(!s.1h||!b)J e;a.26(b)&&(b=b.1J(m,s)||""),b.1I&&b.17>0?c.4w().30(b.X({2h:"2D"})):c.2H(b),s.38(),s.1h&&y()&&s.1R(s.1q.1c)}I D(a){K b=s.1d.1B,c=s.1d.13;Q(!s.1h)J e;a?(c||C(),B()):b.1K()}I C(){K b=s.1d,c=u+"-13";b.1w&&A(),b.1w=a("<2j />",{"1L":g+"-1w "+(o.14.2c?"1v-2c-4C":"")}).30(b.13=a("<2j />",{1e:c,"1L":g+"-13","1P-3O":d})).6w(b.T),o.T.13.1B?B():s.1h&&s.38()}I B(){K b=s.1d,c=o.T.13.1B;b.1B&&b.1B.1K(),c.1I?b.1B=c:b.1B=a("<a />",{"1L":"1v-39-3l "+(o.14.2c?"":g+"-3g"),13:"4x 1l","1P-6x":"4x 1l"}).6y(a("<6z />",{"1L":"1v-3g 1v-3g-6A",2H:"&6B;"})),b.1B.2B(b.1w).18("4H","1B").4z(I(b){a(N).2b("1v-39-4z",b.1F==="2N")}).3R(I(a){w.2a(i)||s.R(a);J e}).19("3F 6D 4B 6E 6F",I(b){a(N).2b("1v-39-6H 1v-39-2q",b.1F.2n(-4)==="6I")}),s.38()}I A(){K a=s.1d;a.13&&(a.1w.1K(),a.1w=a.13=a.1B=f,s.1R())}I z(){K a=s.1d,b=o.14.2c;w.2b(h,b),a.T.2b(h+"-T",b),a.1w&&a.1w.2b(h+"-4C",b),a.1B&&a.1B.2b(g+"-3g",!b)}I y(){J w.X("P")!==l&&w.X("3b")!=="2R"}I x(a){K b,d,e=a.2Y("."),f=o[e[0]];3m(b=1;b<e.17;b+=1){d=f[e[b]];Q(12 d!=="1f"||d.1I||d.1r)2u;f=f[e[b]]}J e[b]!==c?[f,e[b]]:[o,e[0]]}K s=N,t=1C.2I,u=g+"-"+q,v=0,w;s.1e=q,s.1h=e,s.1d={11:m},s.1p={2Z:[]},s.28=o,s.2z={},s.Y={},s.1q={1c:{},11:f,2s:e,18:r},s.2z.6J={"^1e$":I(b,c,f){K h=f===d?a.S.L.3E:f,i=g+"-"+h;h!==e&&h.17>0&&!a("#"+i).17&&(w[0].1e=i,s.1d.T[0].1e=i+"-T",s.1d.13[0].1e=i+"-13")},"^T.1o$":I(a,b,c){F(c)},"^T.13.1o$":I(a,b,c){Q(!c)J A();!s.1d.13&&c&&C(),E(c)},"^T.13.1B$":I(a,b,c){D(c)},"^15.(1M|2f)$":I(b,c,d){"1m"===12 d&&(b[c]=1D a.S.L.Y.2t(d))},"^15.1u$":I(a,b,c){s.1h&&w.2B(c)},"^(M|R).(1c|11|24|25|1Q)$":I(a,b,c,d){K e=b.3I(/24/i)>-1?[0,[0,1,1,1]]:[b.2n(0,3),b.2X(0)==="s"?[1,0,0,0]:[0,1,0,0]];e[0]&&(a[b]=d),H.2o(s,e[1]),e[0]&&(a[b]=c),G.2o(s,e[1])},"^M.37$":I(){s.1h||s.M()},"^14.31$":I(b,c,d){a.18(w[0],"1L",g+" L 1v-4s-4F "+d)},"^14.2c|T.13":z,"^3w.(1N|M|3x|R|2q|22)$":I(b,c,d){w[(a.26(d)?"":"6N")+"19"]("1l"+c,d)}},a.1n(s,{1N:I(b){Q(s.1h)J e;K c=s.1d,f=o.T.1o,h=o.T.13.1o,j=a.2O("6P");a.18(m[0],"1P-3v",u),w=c.1l=a("<2j/>").18({1e:u,"1L":g+" L 1v-4s-4F "+o.14.31,4H:"6Q","1P-6U":"6V","1P-3O":e,"1P-3v":u+"-T","1P-2R":d}).2b(i,s.1q.2s).1A("L",s).2B(o.15.1u).30(c.T=a("<2j />",{"1L":g+"-T",1e:u+"-T","1P-3O":d})),s.1h=d,h&&(C(),E(h)),F(f),z(),a.1k(a.S.L.Y,I(){N.2m==="1N"&&N(s)}),G(1,1,1,1),a.1k(o.3w,I(a,b){Q(b){K c=a==="1W"?"2T 4M":"1l"+a;w.19(c,b)}}),w.X("3b","2R").3s("3W",I(a){j.36=s.1q.1c,w.2e(j,[s]),(o.M.37||b)&&s.M(s.1q.1c),a()});J s},3G:I(b){K c,d;4J(b.2k()){2P"4N":c={U:w.2F(),V:w.2W()};2u;2P"W":c=a.S.L.Y.W(w,o.15.1u);2u;3l:d=x(b.2k()),c=d[0].1r?d[0].1m():d[0].1I?d[0]:d[0][d[1]]}J c},2J:I(b,c){I j(b,c){b=b.2k();K d=x(b),e,f,g;e=d[0][d[1]],d[0][d[1]]=c.77?a(c):c;3m(f 1O h)3m(g 1O h[f])(1D 79(g,"i")).1x(b)&&h[f][g].1J(s,d[0],d[1],c,e)}K d=s.1d,f=/^15.(1M|2f|2v|11|1u)|14|T/i,g=e,h=s.2z,i;"1m"===12 b&&(i=b,b={},b[i]=c),v=1;3m(i 1O b)j(i,b[i]),g=f.1x(i)||g;v=0,g&&y()&&s.1h&&s.1R(),p(o);J s},1W:I(b,c){I k(){b?a.1H.2w&&w[0].14.52("34"):w.X({2h:"",3b:"2R",V:"",45:"",P:"",O:""})}Q(!s.1h)J e;K d=b?"M":"R",g=o[d],h=y(),i;(12 b).3I("2Q|2y")&&(b=!h);Q(h===b)J s;Q(c){Q(/7e|7g/.1x(c.1F)&&/4O|4P/.1x(s.1q.1c.1F)&&c.11===o.M.11[0]&&w.7i(c.4Q).17)J s;s.1q.1c=a.1n({},c)}i=a.2O("1l"+d),i.36=c?s.1q.1c:f,w.2e(i,[s,3q]);Q(i.44())J s;a.18(w[0],"1P-2R",!b),b?(w.R().X({3b:""}),s.2q(c),s.1R(c,0),g.51&&a(j).3c(w).L("R",i)):(1G(s.1p.M),s.22(c)),w.3B(1,1),a.26(g.1T)?(g.1T.1J(w,s),w.3s("3W",I(a){k.1J(N,a),a()})):g.1T===e?(w[d](),k.1J(w)):w.4S(3q,b?1:0,k),b&&g.11.2e("L-"+q+"-1Q");J s},M:I(a){s.1W(d,a)},R:I(a){s.1W(e,a)},2q:I(b){Q(!s.1h)J e;K c=a(j),d=1z(w[0].14.33,10),f=a.S.L.3K+c.17,g=a.1n({},b),h,i;w.2a(k)||(d!==f&&(c.1k(I(){N.14.33>d&&(N.14.33=N.14.33-1)}),c.34("."+k).L("22",g)),i=a.2O("7n"),i.36=g,w.2e(i,[s,f]),i.44()||(w.46(k)[0].14.33=f));J s},22:I(b){K c=a.1n({},b),d;w.56(k),d=a.2O("7o"),d.36=c,w.2e(d,[s])},1R:I(f,h){Q(!s.1h||v)J e;v=d;K i=o.15.11,j=o.15,k=j.1M,l=j.2f,m=j.2v,n=w.2W(),p=w.2F(),q=0,r=0,u=a.2O("3Z"),x=w.X("15")==="24",z=j.1V.1I?j.1V:a(b),A={P:0,O:0},B={P:I(a){K b=z.2G,c=k.x==="P"?n:k.x==="1i"?-n:-n/2,d=l.x==="P"?q:l.x==="1i"?-q:-q/2,e=b-a,f=a+n-z.V-b,g=c-(k.1r==="x"||k.x===k.y?d:0);e>0&&(k.x!=="P"||f>0)?A.P-=g:f>0&&(k.x!=="1i"||e>0)&&(A.P-=(k.x==="1s"?-1:1)*g+2*m.x),A.P<0&&-A.P>f&&(A.P=a);J A.P-a},O:I(a){K b=z.2E,c=k.y==="O"?p:k.y==="1j"?-p:-p/2,d=l.y==="O"?r:l.y==="1j"?-r:-r/2,e=b-a,f=a+p-z.U-b,g=c-(k.1r==="y"||k.x===k.y?d:0);e>0&&(k.y!=="O"||f>0)?A.O-=g:f>0&&(k.y!=="1j"||e>0)&&(A.O-=(k.y==="1s"?-1:1)*g+2*m.y),A.O<0&&-A.O>f&&(A.O=a);J A.O-a}};h=h===c||!!h||e,z=z?{4Z:z,U:z[(z[0]===b?"h":"7p")+"7q"](),V:z[(z[0]===b?"w":"7r")+"7s"](),2G:z.2G(),2E:z.2E()}:e;Q(i==="1X")l={x:"P",y:"O"},f=f&&(f.1F==="2r"||f.1F==="41")?s.1q.1c:m.1X||!f||!f.3t?a.1n({},a.S.L.1X):f,A={O:f.3P,P:f.3t};3j{i==="1c"&&(f&&f.11&&f.1F!=="41"&&f.1F!=="2r"?i=s.1q.11=a(f.11):i=s.1q.11),i=a(i).7u(0);Q(i.17===0)J s;i[0]===1C||i[0]===b?(q=i.V(),r=i.U(),i[0]===b&&(A={O:x?0:z.2E,P:x?0:z.2G})):i.42("7v")&&a.S.L.Y.3X?(A=a.S.L.Y.3X(i,l),q=A.V,r=A.U,A=A.W):i[0].7w=="7x://7y.7z.7A/7B/3u"&&a.S.L.Y.3u?(A=a.S.L.Y.3u(i,l),q=A.V,r=A.U,A=A.W):(q=i.2W(),r=i.2F(),A=a.S.L.Y.W(i,j.1u)),A.P+=l.x==="1i"?q:l.x==="1s"?q/2:0,A.O+=l.y==="1j"?r:l.y==="1s"?r/2:0}A.P+=m.x+(k.x==="1i"?-n:k.x==="1s"?-n/2:0),A.O+=m.y+(k.y==="1j"?-p:k.y==="1s"?-p/2:0),j.1V.1I&&i[0]!==b&&i[0]!==t?A.3r={P:B.P(A.P),O:B.O(A.O)}:A.3r={P:0,O:0},w.18("1L",I(b,c){J a.18(N,"1L").2i(/1v-1l-4W-\\w+/i,"")}).46(g+"-4W-"+k.4A()),u.36=a.1n({},f),w.2e(u,[s,A,z.4Z]);Q(u.44())J s;2x A.3r,h&&7D(A.P,A.O)?y()&&a.26(j.1T)&&(j.1T.1J(w,s,A),w.3s(I(b){K c=a(N);c.X({45:"",U:""}),a.1H.2w&&N.14&&N.14.52("34"),b()})):w.X(A),v=e;J s},38:I(){Q(!s.1h||(!a.1H.2w||a.1H.3k>=8))J e;K b=g+"-7F",c;w.X({V:"54",U:"54"}).46(b),c={U:w.2F(),V:w.2W()},a.1k(["V","U"],I(a,b){K d=1z(w.X("2L-"+b),10)||0,e=1z(w.X("55-"+b),10)||0;c[b]=d+e?1b.55(1b.2L(c[b],e),d):c[b]}),w.X(c).56(b)},3U:I(b){K c=i;"2Q"!==12 b&&(b=!w.2a(c)&&!s.1q.2s),s.1h?(w.2b(c,b),a.18(w[0],"1P-2s",b)):s.1q.2s=!!b;J s},1Y:I(){K b=m[0],c=a.1A(b,n);s.1h&&(w.1K(),a.1k(s.Y,I(){N.2m==="1N"&&N.1Y()})),1G(s.1p.M),1G(s.1p.R),H(1,1,1,1),a.48(b,"L"),c&&a.18(b,"13",c),m.3d("1P-3v");J m}})}I p(b){K c;Q(!b||"1f"!==12 b)J e;"1f"!==12 b.1Z&&(b.1Z={1F:b.1Z});Q("T"1O b){Q("1f"!==12 b.T||b.T.1I)b.T={1o:b.T};c=b.T.1o||e,!a.26(c)&&(!c&&!c.18||c.17<1||"1f"===12 c&&!c.1I)&&(b.T.1o=e),"13"1O b.T&&("1f"!==12 b.T.13&&(b.T.13={1o:b.T.13}),c=b.T.13.1o||e,!a.26(c)&&(!c&&!c.18||c.17<1||"1f"===12 c&&!c.1I)&&(b.T.13.1o=e))}"15"1O b&&("1f"!==12 b.15&&(b.15={1M:b.15,2f:b.15})),"M"1O b&&("1f"!==12 b.M&&(b.M.1I?b.M={11:b.M}:b.M={1c:b.M})),"R"1O b&&("1f"!==12 b.R&&(b.R.1I?b.R={11:b.R}:b.R={1c:b.R})),"14"1O b&&("1f"!==12 b.14&&(b.14={31:b.14})),a.1k(a.S.L.Y,I(){N.2U&&N.2U(b)});J b}I o(){K c=b.57;J c&&(c.3y||c.59||a.5a).2o(c,29)}K d=!0,e=!1,f=49,g="1v-1l",h="1v-2c",i="1v-39-2s",j="2j.L."+g,k=g+"-2q",l="-5f",m="5h",n="5j";a.S.L=I(b,g,h){K i=2C(b).2k(),j=f,k=i==="3U"?[d]:a.6X(29).53(1,10),l=k[k.17-1],m=N[0]?a.1A(N[0],"L"):f;Q(!29.17&&m||i==="74")J m;Q("1m"===12 b){N.1k(I(){K b=a.1A(N,"L");Q(!b)J d;/3e|2J/.1x(i)&&g?a.5o(g)||h!==c?b.2J(g,h):j=b.3G(g):(b.1h||i!=="M"&&i!=="1W"?i==="5q"&&(i="3U",k=[e]):(l&&l.5t&&(b.1q.1c=l),b.1N(1)),b[i]&&b[i].2o(b[i],k))});J j!==f?j:N}Q("1f"===12 b||!29.17){m=p(a.1n(d,{},b));J a.S.L.19.1J(N,m,l)}},a.S.L.19=I(b,c){J N.1k(I(f){I n(b){I c(){m.1N(12 b==="1f"||h.M.37),i.M.1E(j.M),i.R.1E(j.R)}Q(m.1q.2s)J e;m.1q.1c=a.1n({},b),h.M.25>0?(1G(m.1p.M),m.1p.M=2S(c,h.M.25),j.M!==j.R&&i.R.19(j.R,I(){1G(m.1p.M)})):c()}K h,i,j,k=!b.1e||b.1e===e||b.1e.17<1||a("#"+g+"-"+b.1e).17?a.S.L.3E++:b.1e,l=".L-"+k+"-2g",m=r.1J(N,k,b);Q(m===e)J d;h=m.28,a.1k(a.S.L.Y,I(){N.2m==="2m"&&N(m)}),i={M:h.M.11,R:h.R.11},j={M:2C(h.M.1c).2i(" ",l+" ")+l,R:2C(h.R.1c).2i(" ",l+" ")+l},i.M.19(j.M,n),(h.M.37||h.4T)&&n(c)})},a.1k({18:I(b,c){Q(N.17){K d=N[0],e="13",f=a.1A(d,"L");Q(b===e){Q(29.17<2)J a.1A(d,n);Q(12 f==="1f"){f&&f.1h&&f.28.T.18===e&&f.1q.18&&f.2J("T.1o",c),a.S["18"+m].2o(N,29),a.1A(d,n,a.18(d,e));J N.3d("13")}}}},4Y:I(b){K c=a([]),d;a("*",N).2p(N).1k(I(){K b=a.1A(N,n);b&&(a.18(N,"13",b),c=c.2p(N))}),d=a.S["4Y"+m].2o(N,29),c.3d("13");J d},1K:a.1v?f:I(b,c){a(N).1k(I(){c||(!b||a.34(b,[N]).17)&&a("*",N).2p(N).1k(I(){a(N).5S("1K")})})}},I(b,c){Q(!c)J d;K e=a.S[b+m]=a.S[b];a.S[b]=I(){J c.2o(N,29)||e.2o(N,29)}}),a(b).2A(I(){K b=1C,d=b.2I;a(b).19("3L.L",I(b){a.S.L.1X={3t:b.3t,3P:b.3P}}),b.4r===c&&b.64("2q",I(a){a&&a.11&&(b.4r=a.11===b?d:a.11)},!0)}),a.S.L.3k="2.0.67",a.S.L.3E=0,a.S.L.4G="3R 6d 3F 4B 3L 47 2N".2Y(" "),a.S.L.3K=6n,a.S.L.Y={2t:I(a){a=2C(a).2i(/([A-Z])/," $1").2i(/6v/4v,"1s").2k(),N.x=(a.3H(/P|1i/i)||a.3H(/1s/)||["3i"])[0].2k(),N.y=(a.3H(/O|1j|1s/i)||["3i"])[0].2k(),N.1r=a.2X(0).3I(/^(t|b)/)>-1?"y":"x",N.1m=I(){J N.1r==="y"?N.y+N.x:N.x+N.y},N.4A=I(){K a=N.x.2n(0,1),b=N.y.2n(0,1);J a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b}},W:I(b,c){K d=b.W(),e=c,f=0,g=!a.S.L.Y.4I,h;Q(e){6L{Q(e[0]===1C.2I)2u;e.X("15")!=="6T"&&(h=e.15(),d.P-=h.P,d.O-=h.O,f++)}3f(e=e.6W());Q(!g||f>1)h=g?1:-1,d.P+=h*c.2G(),d.O+=h*c.2E()}J d},4I:6Y((/70.+71 ([0-76]{3}).*78.*7a/i.7b(7f.7h)||[0,"7j"])[1].2i("7l","."))<4.1},a.S.L.35={4T:e,1e:e,3Y:d,T:{1o:d,18:"13",13:{1o:e,1B:e}},15:{1M:"O P",2f:"1j 1i",11:e,1u:e,1V:e,2v:{x:0,y:0,1X:d,2r:d},1T:d},M:{11:e,1c:"2N",1T:d,25:3q,51:e,37:e},R:{11:e,1c:"47",1T:d,25:0,24:e,1Q:e},14:{31:"",2c:e},3w:{1N:f,3x:f,M:f,R:f,1W:f,2q:f,22:f}},a.S.L.Y.1y=I(a){K b=a.Y.1y;J"1f"===12 b?b:a.Y.1y=1D s(a)},a.S.L.Y.1y.2m="1N",a.S.L.Y.1y.2U=I(a){K b=a.T,c;b&&"1y"1O b&&(c=b.1y,12 c!=="1f"&&(c=a.T.1y={2l:c}),"2Q"!==12 c.21&&c.21&&(c.21=!!c.21))},a.1n(d,a.S.L.35,{T:{1y:{21:d}}}),a.S.L.Y.16=I(a){K b=a.Y.16;J"1f"===12 b?b:a.Y.16=1D u(a)},a.S.L.Y.16.2m="1N",a.S.L.Y.16.2U=I(a){K b=a.14,c;b&&"16"1O b&&(c=a.14.16,12 c!=="1f"&&(a.14.16={1g:c}),/1m|2Q/i.1x(12 c.1g)||(c.1g=d),12 c.V!=="2y"&&2x c.V,12 c.U!=="2y"&&2x c.U,12 c.1a!=="2y"&&c.1a!==d&&2x c.1a,12 c.W!=="2y"&&2x c.W)},a.1n(d,a.S.L.35,{14:{16:{1g:d,3o:e,V:6,U:6,1a:d,W:0}}}),a.S.L.Y.3X=I(b,c){I l(a,b){K d=0,e=1,f=1,g=0,h=0,i=a.V,j=a.U;3f(i>0&&j>0&&e>0&&f>0){i=1b.3n(i/2),j=1b.3n(j/2),c.x==="P"?e=i:c.x==="1i"?e=a.V-i:e+=1b.3n(i/2),c.y==="O"?f=j:c.y==="1j"?f=a.U-j:f+=1b.3n(j/2),d=b.17;3f(d--){Q(b.17<2)2u;g=b[d][0]-a.W.P,h=b[d][1]-a.W.O,(c.x==="P"&&g>=e||c.x==="1i"&&g<=e||c.x==="1s"&&(g<e||g>a.V-e)||c.y==="O"&&h>=f||c.y==="1j"&&h<=f||c.y==="1s"&&(h<f||h>a.U-f))&&b.5U(d,1)}}J{P:b[0][0],O:b[0][1]}}K d=b.18("3S").2k(),e=b.18("65").2Y(","),f=[],g=a(\'2Z[6g="#\'+b.6j("4D").18("3J")+\'"]\'),h=g.W(),i={V:0,U:0,W:{O:3a,1i:0,1j:0,P:3a}},j=0,k=0;h.P+=1b.3h((g.2W()-g.V())/2),h.O+=1b.3h((g.2F()-g.U())/2);Q(d==="4U"){j=e.17;3f(j--)k=[1z(e[--j],10),1z(e[j+1],10)],k[0]>i.W.1i&&(i.W.1i=k[0]),k[0]<i.W.P&&(i.W.P=k[0]),k[1]>i.W.1j&&(i.W.1j=k[1]),k[1]<i.W.O&&(i.W.O=k[1]),f.6C(k)}3j f=a.4D(e,I(a){J 1z(a,10)});4J(d){2P"72":i={V:1b.3p(f[2]-f[0]),U:1b.3p(f[3]-f[1]),W:{P:f[0],O:f[1]}};2u;2P"7d":i={V:f[2]+2,U:f[2]+2,W:{P:f[0],O:f[1]}};2u;2P"4U":a.1n(i,{V:1b.3p(i.W.1i-i.W.P),U:1b.3p(i.W.1j-i.W.O)}),c.1m()==="4X"?i.W={P:i.W.P+i.V/2,O:i.W.O+i.U/2}:i.W=l(i,f.53()),i.V=i.U=0}i.W.P+=h.P,i.W.O+=h.O;J i},a.S.L.Y.3u=I(b,c){K d=a(1C),e=b[0],f={V:0,U:0,W:{O:3a,P:3a}},g,h,i,j,k;Q(e.4a&&e.58){g=e.4a(),h=e.5g(),i=e.5k||e;Q(!i.4e)J f;j=i.4e(),j.x=g.x,j.y=g.y,k=j.4j(h),f.W.P=k.x,f.W.O=k.y,j.x+=g.V,j.y+=g.U,k=j.4j(h),f.V=k.x-f.W.P,f.U=k.y-f.W.O,f.W.P+=d.2G(),f.W.O+=d.2E()}J f},a.S.L.Y.1t=I(a){K b=a.Y.1t;J"1f"===12 b?b:a.Y.1t=1D v(a)},a.S.L.Y.1t.2m="1N",a.S.L.Y.1t.2U=I(a){a.M&&(12 a.M.1t!=="1f"?a.M.1t={2K:!!a.M.1t}:12 a.M.1t.2K==="7m"&&(a.M.1t.2K=d))},a.1n(d,a.S.L.35,{M:{1t:{2K:e,1T:d,22:d}}}),a.S.L.Y.1S=I(b){Q(!(a.1H.2w&&/^6\\.[0-9]/.1x(a.1H.3k)&&a("6Z, 1f").17))J e;K c=b.Y.1S;Q(c)J c;b.Y.1S=1D w(b);J b.Y.1S},a.S.L.Y.1S.2m="1N"}(7G,43)',62,479,'||||||||||||||||||||||||||||||||||||||||||||function|return|var|qtip|show|this|top|left|if|hide|fn|content|height|width|offset|css|plugins|||target|typeof|title|style|position|tip|length|attr|bind|border|Math|event|elements|id|object|corner|rendered|right|bottom|each|tooltip|string|extend|text|timers|cache|precedance|center|modal|container|ui|titlebar|test|ajax|parseInt|data|button|document|new|unbind|type|clearTimeout|browser|jquery|call|remove|class|my|render|in|aria|inactive|reposition|bgiframe|effect|init|viewport|toggle|mouse|destroy|metadata||once|blur|overlay|fixed|delay|isFunction|fill|options|arguments|hasClass|toggleClass|widget||trigger|at|create|display|replace|div|toLowerCase|url|initialize|substr|apply|add|focus|resize|disabled|Corner|break|adjust|msie|delete|number|checks|load|appendTo|String|block|scrollTop|outerHeight|scrollLeft|html|body|set|on|max|update|mouseenter|Event|case|boolean|hidden|setTimeout|tooltipshow|sanitize|transparent|outerWidth|charAt|split|img|append|classes|color|zIndex|filter|defaults|originalEvent|ready|redraw|state|1e10|visibility|not|removeAttr|option|while|icon|ceil|inherit|else|version|default|for|floor|mimic|abs|90|adjusted|queue|pageX|svg|describedby|events|move|error|absolute|getContext|stop|px|indexOf|nextid|mousedown|get|match|search|name|zindex|mousemove|sqrt|script|atomic|pageY|index|click|shape|round|disable|vml|fx|imagemap|overwrite|tooltipmove|iframe|scroll|is|window|isDefaultPrevented|opacity|addClass|mouseleave|removeData|null|getBBox|save|detectCorner|canvas|createSVGPoint|detectColours|3e3|dashed|lineTo|matrixTransform|none|stroke|miter|VML|margin|bottomright|bottomleft|activeElement|helper|radius|unfocus|gi|empty|Close|webkit|hover|abbreviation|mouseup|header|map|find|reset|inactiveEvents|role|iOS|switch|topright|topleft|tooltiphide|dimensions|out|leave|relatedTarget|behavior|fadeTo|prerender|poly|Number|pos|centercenter|clone|elem||solo|removeAttribute|slice|auto|min|removeClass|console|parentNode|log|noop|strict|frameborder|tabindex|javascript|31000px|getScreenCTM|_replacedByqTip|animated|oldtitle|farthestViewportElement|pow|mozilla|moz|isPlainObject|Color|enable|background|prependTo|timeStamp|coordorigin|children|solid|123456|restore|clearRect|translate|beginPath|moveTo|fillStyle|strokeStyle|lineWidth|miterLimit|100|xe|antialias|coordsize|path|fillcolor|filled|stroked|weight|miterlimit|1000|triggerHandler|joinstyle|splice|topcenter|rgba|0px|rightcenter|leftcenter|lefttop|righttop|leftbottom|rightbottom|addEventListener|coords|one|0pre|success|context|html5|qtipopts|try|dblclick|Unable|to|usemap|HTML5|pushStack|parent|closest|stopPropagation|preventDefault|15e3|inArray|special|parents|abort|unload|join|image|middle|insertBefore|label|prepend|span|close|times|push|keydown|keyup|mouseout|mouseover|active|down|builtin|grep|do|attribute|un|parse|tooltiprender|alert|catch|Function|static|live|polite|offsetParent|makeArray|parseFloat|select|CPU|OS|rect|visible|api|backgroundColor|9_|nodeType|AppleWebkit|RegExp|Mobile|exec|bottomcenter|circle|over|navigator|enter|userAgent|has|4_2|alpha|_|undefined|tooltipfocus|tooltipblur|outerH|eight|outerW|idth|src|eq|area|namespaceURI|http|www|w3|org|2000|use|isNaN|lineJoin|fluid|jQuery|qtipmodal|closePath'.split('|'),0,{}))
