(()=>{"use strict";var e,l={720:()=>{const e=window.wp.blocks,l=window.React,t=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,a=window.wp.data,r=window.wp.primitives,i=(0,l.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(r.Path,{d:"M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"})),d=(0,l.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(r.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),c=JSON.parse('{"N9":"maxgruson/downloads-gallery-item"}');(0,e.registerBlockType)(c.N9,{edit:function({attributes:e,setAttributes:r}){const c=(0,o.useBlockProps)({className:"downloads-gallery__item"}),s=!!e.dl_link&&!!e.dl_id,w=(0,a.useSelect)((l=>{const t=e.dl_id&&l("core").getMedia(e.dl_id);return t?t.title.rendered:0}),[e.dl_id]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(o.BlockControls,null,(0,l.createElement)(n.ToolbarGroup,null,!s&&(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(o.MediaUpload,{onSelect:e=>{r({dl_id:e.id,dl_link:e.url})},value:e.dl_link,render:({open:e})=>(0,l.createElement)(n.ToolbarButton,{label:(0,t.__)("Bestand","downloads-gallery"),onClick:e,icon:i})})),s&&(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(n.ToolbarButton,{name:"link",icon:d,title:(0,t.__)("Unlink"),onClick:()=>{r({dl_link:void 0,dl_id:void 0})},text:w,isActive:!0})))),(0,l.createElement)("li",{...c},(0,l.createElement)(o.RichText,{tagName:"h3",allowedFormats:[],value:e.dl_title,onChange:e=>{r({dl_title:e})},placeholder:(0,t.__)("Titel (bijv. Jaarverslag)","downloads-gallery"),required:!0}),(0,l.createElement)(o.RichText,{tagName:"div",className:"wp-element-button wp-block-button__link",allowedFormats:[],value:e.dl_button_text,onChange:e=>{r({dl_button_text:e})},placeholder:(0,t.__)("Knoptekst (bijv. Downloaden)","downloads-gallery"),required:!0})))}})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return l[e](a,a.exports,o),a.exports}o.m=l,e=[],o.O=(l,t,n,a)=>{if(!t){var r=1/0;for(s=0;s<e.length;s++){for(var[t,n,a]=e[s],i=!0,d=0;d<t.length;d++)(!1&a||r>=a)&&Object.keys(o.O).every((e=>o.O[e](t[d])))?t.splice(d--,1):(i=!1,a<r&&(r=a));if(i){e.splice(s--,1);var c=n();void 0!==c&&(l=c)}}return l}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,n,a]},o.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={480:0,724:0};o.O.j=l=>0===e[l];var l=(l,t)=>{var n,a,[r,i,d]=t,c=0;if(r.some((l=>0!==e[l]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(d)var s=d(o)}for(l&&l(t);c<r.length;c++)a=r[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},t=globalThis.webpackChunkdownloads_gallery=globalThis.webpackChunkdownloads_gallery||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var n=o.O(void 0,[724],(()=>o(720)));n=o.O(n)})();