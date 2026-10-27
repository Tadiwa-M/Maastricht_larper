var hy=Object.defineProperty;var Nt=(i,t)=>()=>(i&&(t=i(i=0)),t);var fp=(i,t)=>{for(var e in t)hy(i,e,{get:t[e],enumerable:!0})};function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function $f(i,t){return(i%t+t)%t}function Hy(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vy(i,t,e){return i!==t?(e-i)/(t-i):0}function xo(i,t,e){return(1-e)*i+e*t}function Gy(i,t,e,n){return xo(i,t,1-Math.exp(-e*n))}function Wy(i,t=1){return t-Math.abs($f(i,t*2)-t)}function Xy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qy(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $y(i,t){return i+Math.random()*(t-i)}function jy(i){return i*(.5-Math.random())}function Ky(i){i!==void 0&&(Mp=i);let t=Mp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zy(i){return i*go}function Jy(i){return i*wo}function Qy(i){return(i&i-1)===0&&i!==0}function tv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ev(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nv(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Vm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function il(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iv(){let i=il("canvas");return i.style.display="block",i}function po(i){i in bp||(bp[i]=!0,console.warn(i))}function sv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rv(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ov(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ih(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Gh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function yv(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;La.copy(a),La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:i}}function Ua(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ca),i.getVertexPosition(l,Ia),i.getVertexPosition(c,Pa);let h=yv(i,t,e,n,Ca,Ia,Pa,Bp);if(h){let u=new T;Wi.getBarycoord(Bp,Ca,Ia,Pa,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,l,c,u,new j)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,l,c,u,new j)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new T,materialIndex:0};Wi.getNormal(Ca,Ia,Pa,f.normal),h.face=f,h.barycoord=u}return h}function _r(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=_r(i[e]);for(let s in n)t[s]=n[s]}return t}function vv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wm(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}function Xm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ev(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function rM(i,t,e,n,s,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,y=p(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){let y=p(v);y&&(y.isCubeTexture||y.mapping===Dl)?(h===void 0&&(h=new pe(new Vn(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:_r(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(v.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(Ms)),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==de,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pe(new Ri(2,2),new _e({name:"BackgroundMaterial",uniforms:_r(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=oe.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(Oa,Wm(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:x,addToRenderList:m}}function oM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,C,L,U,O){let $=!1,H=u(U,L,C);r!==H&&(r=H,c(r.object)),$=d(_,U,L,O),$&&p(_,U,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(_,C,L,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,C,L){let U=L.wireframe===!0,O=n[_.id];O===void 0&&(O={},n[_.id]=O);let $=O[C.id];$===void 0&&($={},O[C.id]=$);let H=$[U];return H===void 0&&(H=f(l()),$[U]=H),H}function f(_){let C=[],L=[],U=[];for(let O=0;O<e;O++)C[O]=0,L[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:U,object:_,attributes:{},index:null}}function d(_,C,L,U){let O=r.attributes,$=C.attributes,H=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let dt=O[V],gt=$[V];if(gt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function p(_,C,L,U){let O={},$=C.attributes,H=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let dt=$[V];dt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor));let gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),O[V]=gt,H++}r.attributes=O,r.attributesNum=H,r.index=U}function x(){let _=r.newAttributes;for(let C=0,L=_.length;C<L;C++)_[C]=0}function m(_){g(_,0)}function g(_,C){let L=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;L[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),O[_]!==C&&(i.vertexAttribDivisor(_,C),O[_]=C)}function M(){let _=r.newAttributes,C=r.enabledAttributes;for(let L=0,U=C.length;L<U;L++)C[L]!==_[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function v(_,C,L,U,O,$,H){H===!0?i.vertexAttribIPointer(_,C,L,O,$):i.vertexAttribPointer(_,C,L,U,O,$)}function y(_,C,L,U){x();let O=U.attributes,$=L.getAttributes(),H=C.defaultAttributeValues;for(let Z in $){let V=$[Z];if(V.location>=0){let rt=O[Z];if(rt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){let dt=rt.normalized,gt=rt.itemSize,et=t.get(rt);if(et===void 0)continue;let Et=et.buffer,X=et.type,at=et.bytesPerElement,St=X===i.INT||X===i.UNSIGNED_INT||rt.gpuType===zf;if(rt.isInterleavedBufferAttribute){let ht=rt.data,ut=ht.stride,K=rt.offset;if(ht.isInstancedInterleavedBuffer){for(let F=0;F<V.locationSize;F++)g(V.location+F,ht.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let F=0;F<V.locationSize;F++)v(V.location+F,gt/V.locationSize,X,dt,ut*at,(K+gt/V.locationSize*F)*at,St)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)g(V.location+ht,rt.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ht=0;ht<V.locationSize;ht++)v(V.location+ht,gt/V.locationSize,X,dt,gt*at,gt/V.locationSize*ht*at,St)}}else if(H!==void 0){let dt=H[Z];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}M()}function R(){I();for(let _ in n){let C=n[_];for(let L in C){let U=C[L];for(let O in U)h(U[O].object),delete U[O];delete C[L]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let L in C){let U=C[L];for(let O in U)h(U[O].object),delete U[O];delete C[L]}delete n[_.id]}function S(_){for(let C in n){let L=n[C];if(L[_.id]===void 0)continue;let U=L[_.id];for(let O in U)h(U[O].object),delete U[O];delete L[_.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function aM(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==on&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let I=S===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Hn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ei&&!I)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function cM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ne,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,v=M*4,y=g.clippingState||null;l.value=y,y=h(p,f,v,d);for(let R=0;R!==v;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hM(i){let t=new WeakMap;function e(o,a){return a===pu?o.mapping=yr:a===mu&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pu||a===mu)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ju(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function uM(i){let t=[],e=[],n=[],s=i,r=i-ur+1+Vp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ur?l=Vp[o-i+ur-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,m=2,g=1,M=new Float32Array(x*p*d),v=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,I=w>2?0:-1,b=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];M.set(b,x*p*w),v.set(f,m*p*w);let _=[w,w,w,w,w,w];y.set(_,g*p*w)}let R=new Pe;R.setAttribute("position",new ae(M,x)),R.setAttribute("uv",new ae(v,m)),R.setAttribute("faceIndex",new ae(y,g)),t.push(R),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xp(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fM(i,t,e){let n=new Float32Array(Es),s=new T(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function Yp(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function qp(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pu||l===mu,h=l===yr||l===vr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new br(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new br(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mM(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){let R=M[v+0],w=M[v+1],S=M[v+2];f.push(R,w,w,S,S,R)}}else if(p!==void 0){let M=p.array;x=p.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let R=v+0,w=v+1,S=v+2;f.push(R,w,w,S,S,R)}}else return;let m=new(Vm(f)?al:ol)(f,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gM(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,n,1)}function u(f,d,p,x){if(p===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let g=0;for(let M=0;M<p;M++)g+=d[M]*x[M];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,t,e){let n=new WeakMap,s=new De;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*R*4*u),S=new rl(w,y,R,u);S.type=ei,S.needsUpdate=!0;let I=v*4;for(let _=0;_<u;_++){let C=m[_],L=g[_],U=M[_],O=y*R*4*_;for(let $=0;$<C.count;$++){let H=$*I;d===!0&&(s.fromBufferAttribute(C,$),w[O+H+0]=s.x,w[O+H+1]=s.y,w[O+H+2]=s.z,w[O+H+3]=0),p===!0&&(s.fromBufferAttribute(L,$),w[O+H+4]=s.x,w[O+H+5]=s.y,w[O+H+6]=s.z,w[O+H+7]=0),x===!0&&(s.fromBufferAttribute(U,$),w[O+H+8]=s.x,w[O+H+9]=s.y,w[O+H+10]=s.z,w[O+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new j(y,R)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vM(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function Ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jp[s];if(r===void 0&&(r=new Float32Array(s),jp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ul(i,t){let e=Kp[t];e===void 0&&(e=new Int32Array(t),Kp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _M(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function EM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),Ve(e,n)}}function SM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Jp.set(n),i.uniformMatrix3fv(this.addr,!1,Jp),Ve(e,n)}}function TM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Zp.set(n),i.uniformMatrix4fv(this.addr,!1,Zp),Ve(e,n)}}function AM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function RM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function CM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function IM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function PM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function DM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function LM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function UM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function NM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($p.compareFunction=Hm,r=$p):r=Ym,e.setTexture2D(t||r,s)}function OM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$m,s)}function kM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jm,s)}function FM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qm,s)}function BM(i){switch(i){case 5126:return _M;case 35664:return MM;case 35665:return bM;case 35666:return wM;case 35674:return EM;case 35675:return SM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return IM;case 5125:return PM;case 36294:return DM;case 36295:return LM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return FM}}function zM(i,t){i.uniform1fv(this.addr,t)}function HM(i,t){let e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function VM(i,t){let e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function GM(i,t){let e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function WM(i,t){let e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function XM(i,t){let e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function YM(i,t){let e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qM(i,t){i.uniform1iv(this.addr,t)}function $M(i,t){i.uniform2iv(this.addr,t)}function jM(i,t){i.uniform3iv(this.addr,t)}function KM(i,t){i.uniform4iv(this.addr,t)}function ZM(i,t){i.uniform1uiv(this.addr,t)}function JM(i,t){i.uniform2uiv(this.addr,t)}function QM(i,t){i.uniform3uiv(this.addr,t)}function tb(i,t){i.uniform4uiv(this.addr,t)}function eb(i,t,e){let n=this.cache,s=t.length,r=Ul(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ym,r[o])}function nb(i,t,e){let n=this.cache,s=t.length,r=Ul(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$m,r[o])}function ib(i,t,e){let n=this.cache,s=t.length,r=Ul(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jm,r[o])}function sb(i,t,e){let n=this.cache,s=t.length,r=Ul(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qm,r[o])}function rb(i){switch(i){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return YM;case 5124:case 35670:return qM;case 35667:case 35671:return $M;case 35668:case 35672:return jM;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return JM;case 36295:return QM;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}function tm(i,t){i.seq.push(t),i.map[t.id]=t}function ob(i,t,e){let n=i.name,s=n.length;for(Jh.lastIndex=0;;){let r=Jh.exec(n),o=Jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tm(e,c===void 0?new Ku(a,i,t):new Zu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ju(a),tm(e,u)),e=u}}}function em(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function cb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hb(i){oe._getMatrix(nm,oe.workingColorSpace,i);let t=`mat3( ${nm.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ll:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function im(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cb(i.getShaderSource(t),o)}else return s}function ub(i,t){let e=hb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fb(i,t){let e;switch(t){case Nf:e="Linear";break;case Of:e="Reinhard";break;case kf:e="Cineon";break;case Lo:e="ACESFilmic";break;case Ff:e="AgX";break;case Bf:e="Neutral";break;case Cy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function db(){oe.getLuminanceCoefficients(Fa);let i=Fa.x.toFixed(4),t=Fa.y.toFixed(4),e=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function mb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mo(i){return i!==""}function sm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Qu(i){return i.replace(xb,vb)}function vb(i,t){let e=ne[t];if(e===void 0){let n=yb.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qu(e)}function om(i){return i.replace(_b,Mb)}function Mb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function am(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bb(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function wb(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case vr:t="ENVMAP_TYPE_CUBE";break;case Dl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eb(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function Sb(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Im:t="ENVMAP_BLENDING_MULTIPLY";break;case Ay:t="ENVMAP_BLENDING_MIX";break;case Ry:t="ENVMAP_BLENDING_ADD";break}return t}function Tb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ab(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bb(e),c=wb(e),h=Eb(e),u=Sb(e),f=Tb(e),d=pb(e),p=mb(r),x=s.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mo).join(`
`),g.length>0&&(g+=`
`)):(m=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),g=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Xi?fb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,ub("linearToOutputTexel",e.outputColorSpace),db(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),o=Qu(o),o=sm(o,e),o=rm(o,e),a=Qu(a),a=sm(a,e),a=rm(a,e),o=om(o),a=om(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=M+m+o,y=M+g+a,R=em(s,s.VERTEX_SHADER,v),w=em(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(w).trim(),$=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,w);else{let Z=im(s,R,"vertex"),V=im(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+Z+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||O==="")&&(H=!1);H&&(C.diagnostics={runnable:$,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(R),s.deleteShader(w),I=new gr(s,x),b=gb(s,x)}let I;this.getUniforms=function(){return I===void 0&&S(this),I};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,ab)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}function Cb(i,t,e,n,s,r,o){let a=new Eo,l=new tf,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,C,L,U){let O=L.fog,$=U.geometry,H=b.isMeshStandardMaterial?L.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=Z&&Z.mapping===Dl?Z.image.height:null,rt=p[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=dt!==void 0?dt.length:0,et=0;$.morphAttributes.position!==void 0&&(et=1),$.morphAttributes.normal!==void 0&&(et=2),$.morphAttributes.color!==void 0&&(et=3);let Et,X,at,St;if(rt){let ee=ti[rt];Et=ee.vertexShader,X=ee.fragmentShader}else Et=b.vertexShader,X=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);let ht=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),K=U.isInstancedMesh===!0,F=U.isBatchedMesh===!0,ot=!!b.map,k=!!b.matcap,Q=!!Z,D=!!b.aoMap,yt=!!b.lightMap,tt=!!b.bumpMap,Mt=!!b.normalMap,vt=!!b.displacementMap,zt=!!b.emissiveMap,It=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,G=b.clearcoat>0,nt=b.dispersion>0,pt=b.iridescence>0,it=b.sheen>0,Lt=b.transmission>0,bt=E&&!!b.anisotropyMap,Tt=G&&!!b.clearcoatMap,$t=G&&!!b.clearcoatNormalMap,mt=G&&!!b.clearcoatRoughnessMap,Pt=pt&&!!b.iridescenceMap,Vt=pt&&!!b.iridescenceThicknessMap,Wt=it&&!!b.sheenColorMap,Ut=it&&!!b.sheenRoughnessMap,ie=!!b.specularMap,J=!!b.specularColorMap,At=!!b.specularIntensityMap,N=Lt&&!!b.transmissionMap,ct=Lt&&!!b.thicknessMap,W=!!b.gradientMap,lt=!!b.alphaMap,wt=b.alphaTest>0,Rt=!!b.alphaHash,Yt=!!b.extensions,ce=Xi;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ce=i.toneMapping);let te={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:X,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:F,batchingColor:F&&U._colorsTexture!==null,instancing:K,instancingColor:K&&U.instanceColor!==null,instancingMorph:K&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Cr,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:k,envMap:Q,envMapMode:Q&&Z.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:yt,bumpMap:tt,normalMap:Mt,displacementMap:f&&vt,emissiveMap:zt,normalMapObjectSpace:Mt&&b.normalMapType===Ly,normalMapTangentSpace:Mt&&b.normalMapType===qf,metalnessMap:It,roughnessMap:P,anisotropy:E,anisotropyMap:bt,clearcoat:G,clearcoatMap:Tt,clearcoatNormalMap:$t,clearcoatRoughnessMap:mt,dispersion:nt,iridescence:pt,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Wt,sheenRoughnessMap:Ut,specularMap:ie,specularColorMap:J,specularIntensityMap:At,transmission:Lt,transmissionMap:N,thicknessMap:ct,gradientMap:W,opaque:b.transparent===!1&&b.blending===dr&&b.alphaToCoverage===!1,alphaMap:lt,alphaTest:wt,alphaHash:Rt,combine:b.combine,mapUv:ot&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:yt&&x(b.lightMap.channel),bumpMapUv:tt&&x(b.bumpMap.channel),normalMapUv:Mt&&x(b.normalMap.channel),displacementMapUv:vt&&x(b.displacementMap.channel),emissiveMapUv:zt&&x(b.emissiveMap.channel),metalnessMapUv:It&&x(b.metalnessMap.channel),roughnessMapUv:P&&x(b.roughnessMap.channel),anisotropyMapUv:bt&&x(b.anisotropyMap.channel),clearcoatMapUv:Tt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(b.sheenRoughnessMap.channel),specularMapUv:ie&&x(b.specularMap.channel),specularColorMapUv:J&&x(b.specularColorMap.channel),specularIntensityMapUv:At&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:ct&&x(b.thicknessMap.channel),alphaMapUv:lt&&x(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Mt||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(ot||lt),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ut,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:et,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bi,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Yt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&b.extensions.multiDraw===!0||F)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function g(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(_,b),v(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function v(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=p[b.type],C;if(_){let L=ti[_];C=mn.clone(L.uniforms)}else C=b.uniforms;return C}function R(b,_){let C;for(let L=0,U=h.length;L<U;L++){let O=h[L];if(O.cacheKey===_){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Ab(i,_,b,r),h.push(C)),C}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:I}}function Ib(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,p,x,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=x,g.group=m),t++,g}function a(u,f,d,p,x,m){let g=o(u,f,d,p,x,m);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,p,x,m){let g=o(u,f,d,p,x,m);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Pb),n.length>1&&n.sort(f||lm),s.length>1&&s.sort(f||lm)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Db(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cm,i.set(n,[o])):s>=r.length?(o=new cm,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new ft};break;case"SpotLight":e={position:new T,direction:new T,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Ub(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Ob(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kb(i){let t=new Lb,e=Ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new Ot,o=new Ot;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,M=0,v=0,y=0,R=0,w=0,S=0;c.sort(Ob);for(let b=0,_=c.length;b<_;b++){let C=c[b],L=C.color,U=C.intensity,O=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],U);S++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,V=e.get(C);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=H,d++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(L).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[x]=H;let Z=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,Z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=Z.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=$,y++}x++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(L).multiplyScalar(U),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let Z=C.shadow,V=e.get(C);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=C.shadow.matrix,v++}n.point[p]=H,p++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(U),H.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[g]=H,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,I.directionalLength=d,I.pointLength=p,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=S,n.version=Nb++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let v=c[g];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function hm(i){let t=new kb(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Fb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hm(i),t.set(s,[a])):r>=o.length?(a=new hm(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hb(i,t,e){let n=new Ai,s=new j,r=new j,o=new De,a=new nf({depthPacking:Dy}),l=new sf,c={},h=e.maxTextureSize,u={[Yi]:Je,[Je]:Yi,[bi]:bi},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Bb,fragmentShader:zb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Pe;p.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let g=this.type;this.render=function(w,S,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Be),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=g!==Mi&&this.type===Mi,O=g===Mi&&this.type!==Mi;for(let $=0,H=w.length;$<H;$++){let Z=w[$],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||U===!0||O===!0){let gt=this.type!==Mi?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new Xe(s.x,s.y,gt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let dt=V.getViewportCount();for(let gt=0;gt<dt;gt++){let et=V.getViewport(gt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),L.viewport(o),V.updateMatrices(Z,gt),n=V.getFrustum(),y(S,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Mi&&M(V,I),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,C)};function M(w,S){let I=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xe(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,I,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,I,d,x,null)}function v(w,S,I,b){let _=null,C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)_=C;else if(_=I.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=_.uuid,U=S.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let $=O[U];$===void 0&&($=_.clone(),O[U]=$,S.addEventListener("dispose",R)),_=$}if(_.visible=S.visible,_.wireframe=S.wireframe,b===Mi?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:u[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=i.properties.get(_);L.light=I}return _}function y(w,S,I,b,_){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let U=t.update(w),O=w.material;if(Array.isArray(O)){let $=U.groups;for(let H=0,Z=$.length;H<Z;H++){let V=$[H],rt=O[V.materialIndex];if(rt&&rt.visible){let dt=v(w,rt,b,_);w.onBeforeShadow(i,w,S,I,U,dt,V),i.renderBufferDirect(I,null,U,dt,w,V),w.onAfterShadow(i,w,S,I,U,dt,V)}}}else if(O.visible){let $=v(w,O,b,_);w.onBeforeShadow(i,w,S,I,U,$,null),i.renderBufferDirect(I,null,U,$,w,null),w.onAfterShadow(i,w,S,I,U,$,null)}}let L=w.children;for(let U=0,O=L.length;U<O;U++)y(L[U],S,I,b,_)}function R(w){w.target.removeEventListener("dispose",R);for(let I in c){let b=c[I],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}function Gb(i,t){function e(){let N=!1,ct=new De,W=null,lt=new De(0,0,0,0);return{setMask:function(wt){W!==wt&&!N&&(i.colorMask(wt,wt,wt,wt),W=wt)},setLocked:function(wt){N=wt},setClear:function(wt,Rt,Yt,ce,te){te===!0&&(wt*=ce,Rt*=ce,Yt*=ce),ct.set(wt,Rt,Yt,ce),lt.equals(ct)===!1&&(i.clearColor(wt,Rt,Yt,ce),lt.copy(ct))},reset:function(){N=!1,W=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,W=null,lt=null,wt=null;return{setReversed:function(Rt){if(ct!==Rt){let Yt=t.get("EXT_clip_control");ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let ce=wt;wt=null,this.setClear(ce)}ct=Rt},getReversed:function(){return ct},setTest:function(Rt){Rt?ht(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Rt){W!==Rt&&!N&&(i.depthMask(Rt),W=Rt)},setFunc:function(Rt){if(ct&&(Rt=Vb[Rt]),lt!==Rt){switch(Rt){case au:i.depthFunc(i.NEVER);break;case lu:i.depthFunc(i.ALWAYS);break;case cu:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case hu:i.depthFunc(i.EQUAL);break;case uu:i.depthFunc(i.GEQUAL);break;case fu:i.depthFunc(i.GREATER);break;case du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Rt}},setLocked:function(Rt){N=Rt},setClear:function(Rt){wt!==Rt&&(ct&&(Rt=1-Rt),i.clearDepth(Rt),wt=Rt)},reset:function(){N=!1,W=null,lt=null,wt=null,ct=!1}}}function s(){let N=!1,ct=null,W=null,lt=null,wt=null,Rt=null,Yt=null,ce=null,te=null;return{setTest:function(ee){N||(ee?ht(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!N&&(i.stencilMask(ee),ct=ee)},setFunc:function(ee,yn,Nn){(W!==ee||lt!==yn||wt!==Nn)&&(i.stencilFunc(ee,yn,Nn),W=ee,lt=yn,wt=Nn)},setOp:function(ee,yn,Nn){(Rt!==ee||Yt!==yn||ce!==Nn)&&(i.stencilOp(ee,yn,Nn),Rt=ee,Yt=yn,ce=Nn)},setLocked:function(ee){N=ee},setClear:function(ee){te!==ee&&(i.clearStencil(ee),te=ee)},reset:function(){N=!1,ct=null,W=null,lt=null,wt=null,Rt=null,Yt=null,ce=null,te=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,m=null,g=null,M=null,v=null,y=null,R=null,w=null,S=new ft(0,0,0),I=0,b=!1,_=null,C=null,L=null,U=null,O=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let rt=null,dt={},gt=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),Et=new De().fromArray(gt),X=new De().fromArray(et);function at(N,ct,W,lt){let wt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(N,Rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<W;Yt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Rt}let St={};St[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(xr),tt(!1),Mt(dp),ht(i.CULL_FACE),D(Be);function ht(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ut(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function K(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function F(N,ct){let W=d,lt=!1;if(N){W=f.get(ct),W===void 0&&(W=[],f.set(ct,W));let wt=N.textures;if(W.length!==wt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Yt=wt.length;Rt<Yt;Rt++)W[Rt]=i.COLOR_ATTACHMENT0+Rt;W.length=wt.length,lt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,lt=!0);lt&&i.drawBuffers(W)}function ot(N){return p!==N?(i.useProgram(N),p=N,!0):!1}let k={[Cn]:i.FUNC_ADD,[dy]:i.FUNC_SUBTRACT,[py]:i.FUNC_REVERSE_SUBTRACT};k[my]=i.MIN,k[gy]=i.MAX;let Q={[Rr]:i.ZERO,[xy]:i.ONE,[yy]:i.SRC_COLOR,[ru]:i.SRC_ALPHA,[by]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[vy]:i.ONE_MINUS_SRC_COLOR,[ou]:i.ONE_MINUS_SRC_ALPHA,[My]:i.ONE_MINUS_DST_COLOR,[_y]:i.ONE_MINUS_DST_ALPHA,[wy]:i.CONSTANT_COLOR,[Ey]:i.ONE_MINUS_CONSTANT_COLOR,[Sy]:i.CONSTANT_ALPHA,[Ty]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ct,W,lt,wt,Rt,Yt,ce,te,ee){if(N===Be){x===!0&&(ut(i.BLEND),x=!1);return}if(x===!1&&(ht(i.BLEND),x=!0),N!==Uf){if(N!==m||ee!==b){if((g!==Cn||y!==Cn)&&(i.blendEquation(i.FUNC_ADD),g=Cn,y=Cn),ee)switch(N){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,v=null,R=null,w=null,S.set(0,0,0),I=0,m=N,b=ee}return}wt=wt||ct,Rt=Rt||W,Yt=Yt||lt,(ct!==g||wt!==y)&&(i.blendEquationSeparate(k[ct],k[wt]),g=ct,y=wt),(W!==M||lt!==v||Rt!==R||Yt!==w)&&(i.blendFuncSeparate(Q[W],Q[lt],Q[Rt],Q[Yt]),M=W,v=lt,R=Rt,w=Yt),(ce.equals(S)===!1||te!==I)&&(i.blendColor(ce.r,ce.g,ce.b,te),S.copy(ce),I=te),m=N,b=!1}function yt(N,ct){N.side===bi?ut(i.CULL_FACE):ht(i.CULL_FACE);let W=N.side===Je;ct&&(W=!W),tt(W),N.blending===dr&&N.transparent===!1?D(Be):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let lt=N.stencilWrite;a.setTest(lt),lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function Mt(N){N!==uy?(ht(i.CULL_FACE),N!==C&&(N===dp?i.cullFace(i.BACK):N===fy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),C=N}function vt(N){N!==L&&(H&&i.lineWidth(N),L=N)}function zt(N,ct,W){N?(ht(i.POLYGON_OFFSET_FILL),(U!==ct||O!==W)&&(i.polygonOffset(ct,W),U=ct,O=W)):ut(i.POLYGON_OFFSET_FILL)}function It(N){N?ht(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+$-1),rt!==N&&(i.activeTexture(N),rt=N)}function E(N,ct,W){W===void 0&&(rt===null?W=i.TEXTURE0+$-1:W=rt);let lt=dt[W];lt===void 0&&(lt={type:void 0,texture:void 0},dt[W]=lt),(lt.type!==N||lt.texture!==ct)&&(rt!==W&&(i.activeTexture(W),rt=W),i.bindTexture(N,ct||St[N]),lt.type=N,lt.texture=ct)}function G(){let N=dt[rt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(N){Et.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function Ut(N){X.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),X.copy(N))}function ie(N,ct){let W=c.get(ct);W===void 0&&(W=new WeakMap,c.set(ct,W));let lt=W.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(ct,N.name),W.set(N,lt))}function J(N,ct){let lt=c.get(ct).get(N);l.get(ct)!==lt&&(i.uniformBlockBinding(ct,lt,N.__bindingPointIndex),l.set(ct,lt))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,dt={},u={},f=new WeakMap,d=[],p=null,x=!1,m=null,g=null,M=null,v=null,y=null,R=null,w=null,S=new ft(0,0,0),I=0,b=!1,_=null,C=null,L=null,U=null,O=null,Et.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:ut,bindFramebuffer:K,drawBuffers:F,useProgram:ot,setBlending:D,setMaterial:yt,setFlipSided:tt,setCullFace:Mt,setLineWidth:vt,setPolygonOffset:zt,setScissorTest:It,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:nt,compressedTexImage3D:pt,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:ie,uniformBlockBinding:J,texStorage2D:$t,texStorage3D:mt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Tt,scissor:Wt,viewport:Ut,reset:At}}function um(i,t,e,n){let s=Wb(n);switch(e){case Nm:return i*t;case km:return i*t;case Fm:return i*t*2;case Gf:return i*t/s.components*s.byteLength;case Wf:return i*t/s.components*s.byteLength;case Bm:return i*t*2/s.components*s.byteLength;case Xf:return i*t*2/s.components*s.byteLength;case Om:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Yf:return i*t*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yu:case _u:return Math.max(i,16)*Math.max(t,8)/4;case xu:case vu:return Math.max(i,8)*Math.max(t,8)/2;case Mu:case bu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Au:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Du:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ku:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Fu:case Bu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zm:case zu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hu:case Vu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wb(i){switch(i){case Hn:case Dm:return{byteLength:1,components:1};case bo:case Lm:case pn:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case Ts:case zf:case ei:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,E){return d?new OffscreenCanvas(P,E):il("canvas")}function x(P,E,G){let nt=1,pt=It(P);if((pt.width>G||pt.height>G)&&(nt=G/Math.max(pt.width,pt.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let it=Math.floor(nt*pt.width),Lt=Math.floor(nt*pt.height);u===void 0&&(u=p(it,Lt));let bt=E?p(it,Lt):u;return bt.width=it,bt.height=Lt,bt.getContext("2d").drawImage(P,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+it+"x"+Lt+")."),bt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,G,nt,pt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=E;if(E===i.RED&&(G===i.FLOAT&&(it=i.R32F),G===i.HALF_FLOAT&&(it=i.R16F),G===i.UNSIGNED_BYTE&&(it=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.R8UI),G===i.UNSIGNED_SHORT&&(it=i.R16UI),G===i.UNSIGNED_INT&&(it=i.R32UI),G===i.BYTE&&(it=i.R8I),G===i.SHORT&&(it=i.R16I),G===i.INT&&(it=i.R32I)),E===i.RG&&(G===i.FLOAT&&(it=i.RG32F),G===i.HALF_FLOAT&&(it=i.RG16F),G===i.UNSIGNED_BYTE&&(it=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RG8UI),G===i.UNSIGNED_SHORT&&(it=i.RG16UI),G===i.UNSIGNED_INT&&(it=i.RG32UI),G===i.BYTE&&(it=i.RG8I),G===i.SHORT&&(it=i.RG16I),G===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGB8UI),G===i.UNSIGNED_SHORT&&(it=i.RGB16UI),G===i.UNSIGNED_INT&&(it=i.RGB32UI),G===i.BYTE&&(it=i.RGB8I),G===i.SHORT&&(it=i.RGB16I),G===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),G===i.UNSIGNED_INT&&(it=i.RGBA32UI),G===i.BYTE&&(it=i.RGBA8I),G===i.SHORT&&(it=i.RGBA16I),G===i.INT&&(it=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),E===i.RGBA){let Lt=pt?Ll:oe.getTransfer(nt);G===i.FLOAT&&(it=i.RGBA32F),G===i.HALF_FLOAT&&(it=i.RGBA16F),G===i.UNSIGNED_BYTE&&(it=Lt===de?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(P,E){let G;return P?E===null||E===Ts||E===qi?G=i.DEPTH24_STENCIL8:E===ei?G=i.DEPTH32F_STENCIL8:E===bo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===qi?G=i.DEPTH_COMPONENT24:E===ei?G=i.DEPTH_COMPONENT32F:E===bo&&(G=i.DEPTH_COMPONENT16),G}function R(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qe&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){let E=P.target;E.removeEventListener("dispose",w),I(E),E.isVideoTexture&&h.delete(E)}function S(P){let E=P.target;E.removeEventListener("dispose",S),_(E)}function I(P){let E=n.get(P);if(E.__webglInit===void 0)return;let G=P.source,nt=f.get(G);if(nt){let pt=nt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&b(P),Object.keys(nt).length===0&&f.delete(G)}n.remove(P)}function b(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let G=P.source,nt=f.get(G);delete nt[E.__cacheKey],o.memory.textures--}function _(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let pt=0;pt<E.__webglFramebuffer[nt].length;pt++)i.deleteFramebuffer(E.__webglFramebuffer[nt][pt]);else i.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[nt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=P.textures;for(let nt=0,pt=G.length;nt<pt;nt++){let it=n.get(G[nt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(G[nt])}n.remove(P)}let C=0;function L(){C=0}function U(){let P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function O(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){let G=n.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,P,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function H(P,E){let G=n.get(P);if(P.version>0&&G.__version!==P.version){X(G,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function Z(P,E){let G=n.get(P);if(P.version>0&&G.__version!==P.version){X(G,P,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function V(P,E){let G=n.get(P);if(P.version>0&&G.__version!==P.version){at(G,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let rt={[bn]:i.REPEAT,[Ss]:i.CLAMP_TO_EDGE,[gu]:i.MIRRORED_REPEAT},dt={[Qe]:i.NEAREST,[Iy]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Sh]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},gt={[Uy]:i.NEVER,[zy]:i.ALWAYS,[Ny]:i.LESS,[Hm]:i.LEQUAL,[Oy]:i.EQUAL,[By]:i.GEQUAL,[ky]:i.GREATER,[Fy]:i.NOTEQUAL};function et(P,E){if(E.type===ei&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Sh||E.magFilter===ya||E.magFilter===wi||E.minFilter===In||E.minFilter===Sh||E.minFilter===ya||E.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,rt[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,rt[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,rt[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,dt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qe||E.minFilter!==ya&&E.minFilter!==wi||E.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Et(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));let nt=E.source,pt=f.get(nt);pt===void 0&&(pt={},f.set(nt,pt));let it=O(E);if(it!==P.__cacheKey){pt[it]===void 0&&(pt[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pt[it].usedTimes++;let Lt=pt[P.__cacheKey];Lt!==void 0&&(pt[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&b(E)),P.__cacheKey=it,P.__webglTexture=pt[it].texture}return G}function X(P,E,G){let nt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=i.TEXTURE_3D);let pt=Et(P,E),it=E.source;e.bindTexture(nt,P.__webglTexture,i.TEXTURE0+G);let Lt=n.get(it);if(it.version!==Lt.__version||pt===!0){e.activeTexture(i.TEXTURE0+G);let bt=oe.getPrimaries(oe.workingColorSpace),Tt=E.colorSpace===Gi?null:oe.getPrimaries(E.colorSpace),$t=E.colorSpace===Gi||bt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let mt=x(E.image,!1,s.maxTextureSize);mt=zt(E,mt);let Pt=r.convert(E.format,E.colorSpace),Vt=r.convert(E.type),Wt=v(E.internalFormat,Pt,Vt,E.colorSpace,E.isVideoTexture);et(nt,E);let Ut,ie=E.mipmaps,J=E.isVideoTexture!==!0,At=Lt.__version===void 0||pt===!0,N=it.dataReady,ct=R(E,mt);if(E.isDepthTexture)Wt=y(E.format===$i,E.type),At&&(J?e.texStorage2D(i.TEXTURE_2D,1,Wt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Wt,mt.width,mt.height,0,Pt,Vt,null));else if(E.isDataTexture)if(ie.length>0){J&&At&&e.texStorage2D(i.TEXTURE_2D,ct,Wt,ie[0].width,ie[0].height);for(let W=0,lt=ie.length;W<lt;W++)Ut=ie[W],J?N&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ut.width,Ut.height,Pt,Vt,Ut.data):e.texImage2D(i.TEXTURE_2D,W,Wt,Ut.width,Ut.height,0,Pt,Vt,Ut.data);E.generateMipmaps=!1}else J?(At&&e.texStorage2D(i.TEXTURE_2D,ct,Wt,mt.width,mt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Pt,Vt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,mt.width,mt.height,0,Pt,Vt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){J&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Wt,ie[0].width,ie[0].height,mt.depth);for(let W=0,lt=ie.length;W<lt;W++)if(Ut=ie[W],E.format!==on)if(Pt!==null)if(J){if(N)if(E.layerUpdates.size>0){let wt=um(Ut.width,Ut.height,E.format,E.type);for(let Rt of E.layerUpdates){let Yt=Ut.data.subarray(Rt*wt/Ut.data.BYTES_PER_ELEMENT,(Rt+1)*wt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Rt,Ut.width,Ut.height,1,Pt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ut.width,Ut.height,mt.depth,Pt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Wt,Ut.width,Ut.height,mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ut.width,Ut.height,mt.depth,Pt,Vt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Wt,Ut.width,Ut.height,mt.depth,0,Pt,Vt,Ut.data)}else{J&&At&&e.texStorage2D(i.TEXTURE_2D,ct,Wt,ie[0].width,ie[0].height);for(let W=0,lt=ie.length;W<lt;W++)Ut=ie[W],E.format!==on?Pt!==null?J?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Ut.width,Ut.height,Pt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Wt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?N&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ut.width,Ut.height,Pt,Vt,Ut.data):e.texImage2D(i.TEXTURE_2D,W,Wt,Ut.width,Ut.height,0,Pt,Vt,Ut.data)}else if(E.isDataArrayTexture)if(J){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Wt,mt.width,mt.height,mt.depth),N)if(E.layerUpdates.size>0){let W=um(mt.width,mt.height,E.format,E.type);for(let lt of E.layerUpdates){let wt=mt.data.subarray(lt*W/mt.data.BYTES_PER_ELEMENT,(lt+1)*W/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,Pt,Vt,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Vt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,mt.width,mt.height,mt.depth,0,Pt,Vt,mt.data);else if(E.isData3DTexture)J?(At&&e.texStorage3D(i.TEXTURE_3D,ct,Wt,mt.width,mt.height,mt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Vt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,mt.width,mt.height,mt.depth,0,Pt,Vt,mt.data);else if(E.isFramebufferTexture){if(At)if(J)e.texStorage2D(i.TEXTURE_2D,ct,Wt,mt.width,mt.height);else{let W=mt.width,lt=mt.height;for(let wt=0;wt<ct;wt++)e.texImage2D(i.TEXTURE_2D,wt,Wt,W,lt,0,Pt,Vt,null),W>>=1,lt>>=1}}else if(ie.length>0){if(J&&At){let W=It(ie[0]);e.texStorage2D(i.TEXTURE_2D,ct,Wt,W.width,W.height)}for(let W=0,lt=ie.length;W<lt;W++)Ut=ie[W],J?N&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Pt,Vt,Ut):e.texImage2D(i.TEXTURE_2D,W,Wt,Pt,Vt,Ut);E.generateMipmaps=!1}else if(J){if(At){let W=It(mt);e.texStorage2D(i.TEXTURE_2D,ct,Wt,W.width,W.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Vt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Pt,Vt,mt);m(E)&&g(nt),Lt.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function at(P,E,G){if(E.image.length!==6)return;let nt=Et(P,E),pt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let it=n.get(pt);if(pt.version!==it.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);let Lt=oe.getPrimaries(oe.workingColorSpace),bt=E.colorSpace===Gi?null:oe.getPrimaries(E.colorSpace),Tt=E.colorSpace===Gi||Lt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let $t=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let lt=0;lt<6;lt++)!$t&&!mt?Pt[lt]=x(E.image[lt],!0,s.maxCubemapSize):Pt[lt]=mt?E.image[lt].image:E.image[lt],Pt[lt]=zt(E,Pt[lt]);let Vt=Pt[0],Wt=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type),ie=v(E.internalFormat,Wt,Ut,E.colorSpace),J=E.isVideoTexture!==!0,At=it.__version===void 0||nt===!0,N=pt.dataReady,ct=R(E,Vt);et(i.TEXTURE_CUBE_MAP,E);let W;if($t){J&&At&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ie,Vt.width,Vt.height);for(let lt=0;lt<6;lt++){W=Pt[lt].mipmaps;for(let wt=0;wt<W.length;wt++){let Rt=W[wt];E.format!==on?Wt!==null?J?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt,0,0,Rt.width,Rt.height,Wt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt,ie,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt,0,0,Rt.width,Rt.height,Wt,Ut,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt,ie,Rt.width,Rt.height,0,Wt,Ut,Rt.data)}}}else{if(W=E.mipmaps,J&&At){W.length>0&&ct++;let lt=It(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,ie,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){J?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Pt[lt].width,Pt[lt].height,Wt,Ut,Pt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ie,Pt[lt].width,Pt[lt].height,0,Wt,Ut,Pt[lt].data);for(let wt=0;wt<W.length;wt++){let Yt=W[wt].image[lt].image;J?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt+1,0,0,Yt.width,Yt.height,Wt,Ut,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt+1,ie,Yt.width,Yt.height,0,Wt,Ut,Yt.data)}}else{J?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Wt,Ut,Pt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ie,Wt,Ut,Pt[lt]);for(let wt=0;wt<W.length;wt++){let Rt=W[wt];J?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt+1,0,0,Wt,Ut,Rt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt+1,ie,Wt,Ut,Rt.image[lt])}}}m(E)&&g(i.TEXTURE_CUBE_MAP),it.__version=pt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function St(P,E,G,nt,pt,it){let Lt=r.convert(G.format,G.colorSpace),bt=r.convert(G.type),Tt=v(G.internalFormat,Lt,bt,G.colorSpace),$t=n.get(E),mt=n.get(G);if(mt.__renderTarget=E,!$t.__hasExternalTextures){let Pt=Math.max(1,E.width>>it),Vt=Math.max(1,E.height>>it);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,it,Tt,Pt,Vt,E.depth,0,Lt,bt,null):e.texImage2D(pt,it,Tt,Pt,Vt,0,Lt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,pt,mt.__webglTexture,0,tt(E)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,pt,mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let nt=E.depthTexture,pt=nt&&nt.isDepthTexture?nt.type:null,it=y(E.stencilBuffer,pt),Lt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=tt(E);Mt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,it,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,P)}else{let nt=E.textures;for(let pt=0;pt<nt.length;pt++){let it=nt[pt],Lt=r.convert(it.format,it.colorSpace),bt=r.convert(it.type),Tt=v(it.internalFormat,Lt,bt,it.colorSpace),$t=tt(E);G&&Mt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Tt,E.width,E.height):Mt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);let pt=nt.__webglTexture,it=tt(E);if(E.depthTexture.format===pr)Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(E.depthTexture.format===$i)Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function K(P){let E=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let nt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){let pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",pt)};nt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=nt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ut(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[nt],P,!1);else{let pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,P,!1);else{let nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(P,E,G){let nt=n.get(P);E!==void 0&&St(nt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&K(P)}function ot(P){let E=P.texture,G=n.get(P),nt=n.get(E);P.addEventListener("dispose",S);let pt=P.textures,it=P.isWebGLCubeRenderTarget===!0,Lt=pt.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=E.version,o.memory.textures++),it){G.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[bt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)G.__webglFramebuffer[bt][Tt]=i.createFramebuffer()}else G.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)G.__webglFramebuffer[bt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let bt=0,Tt=pt.length;bt<Tt;bt++){let $t=n.get(pt[bt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Mt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let bt=0;bt<pt.length;bt++){let Tt=pt[bt];G.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[bt]);let $t=r.convert(Tt.format,Tt.colorSpace),mt=r.convert(Tt.type),Pt=v(Tt.internalFormat,$t,mt,Tt.colorSpace,P.isXRRenderTarget===!0),Vt=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Pt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,G.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)St(G.__webglFramebuffer[bt][Tt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Tt);else St(G.__webglFramebuffer[bt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let bt=0,Tt=pt.length;bt<Tt;bt++){let $t=pt[bt],mt=n.get($t);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),et(i.TEXTURE_2D,$t),St(G.__webglFramebuffer,P,$t,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m($t)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,nt.__webglTexture),et(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)St(G.__webglFramebuffer[Tt],P,E,i.COLOR_ATTACHMENT0,bt,Tt);else St(G.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,bt,0);m(E)&&g(bt),e.unbindTexture()}P.depthBuffer&&K(P)}function k(P){let E=P.textures;for(let G=0,nt=E.length;G<nt;G++){let pt=E[G];if(m(pt)){let it=M(P),Lt=n.get(pt).__webglTexture;e.bindTexture(it,Lt),g(it),e.unbindTexture()}}}let Q=[],D=[];function yt(P){if(P.samples>0){if(Mt(P)===!1){let E=P.textures,G=P.width,nt=P.height,pt=i.COLOR_BUFFER_BIT,it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(P),bt=E.length>1;if(bt)for(let Tt=0;Tt<E.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let $t=n.get(E[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,G,nt,0,0,G,nt,pt,i.NEAREST),l===!0&&(Q.length=0,D.length=0,Q.push(i.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push(it),D.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Tt=0;Tt<E.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let $t=n.get(E[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function tt(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function zt(P,E){let G=P.colorSpace,nt=P.format,pt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Cr&&G!==Gi&&(oe.getTransfer(G)===de?(nt!==on||pt!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=F,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Mt}function Yb(i,t){function e(n,s=Gi){let r,o=oe.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Hf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Um)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dm)return i.BYTE;if(n===Lm)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===zf)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Nm)return i.ALPHA;if(n===Om)return i.RGB;if(n===on)return i.RGBA;if(n===km)return i.LUMINANCE;if(n===Fm)return i.LUMINANCE_ALPHA;if(n===pr)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Gf)return i.RED;if(n===Wf)return i.RED_INTEGER;if(n===Bm)return i.RG;if(n===Xf)return i.RG_INTEGER;if(n===Yf)return i.RGBA_INTEGER;if(n===ja||n===Ka||n===Za||n===Ja)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xu||n===yu||n===vu||n===_u)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mu||n===bu||n===wu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mu||n===bu)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eu||n===Su||n===Tu||n===Au||n===Ru||n===Cu||n===Iu||n===Pu||n===Du||n===Lu||n===Uu||n===Nu||n===Ou||n===ku)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Su)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Iu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ku)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Fu||n===Bu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zm||n===zu||n===Hu||n===Vu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Zb(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wm(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Je&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Je&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,bs.copy(y),bs.x*=-1,bs.y*=-1,bs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(bs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Je&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(p(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(M,R);let w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function h(M){let v=u();M.__bindingPointIndex=v;let y=i.createBuffer(),R=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,S=y.length;w<S;w++){let I=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,_=I.length;b<_;b++){let C=I[b];if(d(C,w,b,R)===!0){let L=C.__offset,U=Array.isArray(C.value)?C.value:[C.value],O=0;for(let $=0;$<U.length;$++){let H=U[$],Z=x(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+O,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,R){let w=M.value,S=v+"_"+y;if(R[S]===void 0)return typeof w=="number"||typeof w=="boolean"?R[S]=w:R[S]=w.clone(),!0;{let I=R[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function p(M){let v=M.uniforms,y=0,R=16;for(let S=0,I=v.length;S<I;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,C=b.length;_<C;_++){let L=b[_],U=Array.isArray(L.value)?L.value:[L.value];for(let O=0,$=U.length;O<$;O++){let H=U[O],Z=x(H),V=y%R,rt=V%Z.boundary,dt=V+rt;y+=rt,dt!==0&&R-dt<Z.storage&&(y+=R-dt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Z.storage}}}let w=y%R;return w>0&&(y+=R-w),M.__size=y,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}function Ha(i,t,e,n,s,r){cr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lo.x=r*cr.x-s*cr.y,lo.y=s*cr.x+r*cr.y):lo.copy(cr),i.copy(t),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(Km)}function Wa(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ml.fromBufferAttribute(o,s),gl.fromBufferAttribute(o,r),e.distanceSqToSegment(ml,gl,tu,xm)>n)return;tu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tu);if(!(l<t.near||l>t.far))return{distance:l,point:xm.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Kf(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function _m(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function tw(i,t){let e=1-i;return e*e*t}function ew(i,t){return 2*(1-i)*i*t}function nw(i,t){return i*i*t}function vo(i,t,e,n){return tw(i,t)+ew(i,e)+nw(i,n)}function iw(i,t){let e=1-i;return e*e*e*t}function sw(i,t){let e=1-i;return 3*e*e*i*t}function rw(i,t){return 3*(1-i)*i*i*t}function ow(i,t){return i*i*i*t}function _o(i,t,e,n,s){return iw(i,t)+sw(i,e)+rw(i,n)+ow(i,s)}function Zm(i,t,e,n,s){let r,o;if(s===ww(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Mm(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mm(r,i[r],i[r+1],o);return o&&Nl(o,o.next)&&(Po(o),o=o.next),o}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Nl(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Po(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xw(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?cw(i,n,s,r):lw(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Po(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hw(Cs(i),t,e),Co(i,t,e,n,s,r,2)):o===2&&uw(i,t,e,n,s,r):Co(Cs(i),t,e,n,s,r,1);break}}}function lw(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&fr(s,a,r,l,o,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cw(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=xf(d,p,t,e,n),M=xf(x,m,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&fr(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&fr(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hw(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Nl(s,r)&&Jm(s,n,n.next,r)&&Io(s,r)&&Io(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Po(n),Po(n.next),n=i=r),n=n.next}while(n!==i);return Cs(n)}function uw(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_w(o,a)){let l=Qm(o,a);o=Cs(o,o.next),l=Cs(l,l.next),Co(o,t,e,n,s,r,0),Co(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fw(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Zm(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(vw(c));for(s.sort(dw),r=0;r<s.length;r++)e=pw(s[r],e);return e}function dw(i,t){return i.x-t.x}function pw(i,t){let e=mw(i,t);if(!e)return t;let n=Qm(e,i);return Cs(n,n.next),Cs(e,e.next)}function mw(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&fr(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Io(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&gw(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function gw(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function xw(i,t,e,n){let s=i;do s.z===0&&(s.z=xf(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yw(s)}function yw(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function xf(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vw(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function _w(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mw(i,t)&&(Io(i,t)&&Io(t,i)&&bw(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Nl(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Nl(i,t){return i.x===t.x&&i.y===t.y}function Jm(i,t,e,n){let s=qa(Ce(i,t,e)),r=qa(Ce(i,t,n)),o=qa(Ce(e,n,i)),a=qa(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Ya(i,e,t)||r===0&&Ya(i,n,t)||o===0&&Ya(e,i,n)||a===0&&Ya(e,t,n))}function Ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function Mw(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Io(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function bw(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qm(i,t){let e=new yf(i.i,i.x,i.y),n=new yf(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mm(i,t,e,n){let s=new yf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yf(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ww(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function bm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Sw(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function $a(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tm(){return performance.now()}function Rm(i,t){return i.distance-t.distance}function Pf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Pf(r[o],t,e,!0)}}var Df,Wn,ai,uy,dp,fy,Cm,Lf,Mi,Yi,Je,bi,Be,dr,tl,pp,mp,Uf,Cn,dy,py,my,gy,Rr,xy,yy,vy,ru,ou,Il,_y,Pl,My,by,wy,Ey,Sy,Ty,au,lu,cu,xr,hu,uu,fu,du,Im,Ay,Ry,Xi,Nf,Of,kf,Lo,Cy,Ff,Bf,Pm,yr,vr,pu,mu,Dl,bn,Ss,gu,Qe,Iy,ya,In,Sh,wi,Hn,Dm,Lm,bo,zf,Ts,ei,pn,Hf,Vf,qi,Um,Nm,Om,on,km,Fm,pr,$i,Gf,Wf,Bm,Xf,Yf,ja,Ka,Za,Ja,xu,yu,vu,_u,Mu,bu,wu,Eu,Su,Tu,Au,Ru,Cu,Iu,Pu,Du,Lu,Uu,Nu,Ou,ku,Qa,Fu,Bu,zm,zu,Hu,Vu,el,Gu,Th,gp,xp,yp,Py,Dy,qf,Ly,Gi,ke,Cr,Ll,de,Ys,vp,Uy,Ny,Oy,Hm,ky,Fy,By,zy,Wu,Ds,_p,Ei,nl,Ti,Ke,Mp,go,wo,se,j,Jt,Ah,bp,oe,wp,Ep,Sp,Tp,Ap,qs,Xu,av,sl,lv,fn,De,Yu,Xe,rl,qu,Ie,T,Ch,Rp,ve,gi,kn,va,$s,js,Ks,ki,Fi,xs,io,_a,Ma,ys,cv,so,Ph,ji,xi,Dh,ba,Bi,Lh,wa,Uh,As,Ot,Zs,Fn,hv,uv,zi,Ea,_n,Cp,Ip,ii,Eo,fv,Pp,Js,yi,Sa,ro,dv,pv,Dp,Lp,Up,Np,mv,Qs,Nh,ze,Bn,vi,Oh,_i,tr,er,Op,kh,Fh,Bh,zh,Hh,Vh,Wi,Gm,Hi,Ta,ft,Ze,gv,si,Ki,Oe,Aa,ae,ol,al,me,xv,Rn,Wh,nr,Mn,oo,We,Pe,kp,vs,Ra,Fp,Ca,Ia,Pa,Xh,Da,Bp,La,pe,Vn,mn,_v,Mv,_e,ll,Vi,zp,Hp,rn,ir,sr,$u,cl,ju,Yh,bv,wv,Ne,_s,Na,Ai,Ri,Sv,Tv,Av,Rv,Cv,Iv,Pv,Dv,Lv,Uv,Nv,Ov,kv,Fv,Bv,zv,Hv,Vv,Gv,Wv,Xv,Yv,qv,$v,jv,Kv,Zv,Jv,Qv,t_,e_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,x_,y_,v_,__,M_,b_,w_,E_,S_,T_,A_,R_,C_,I_,P_,D_,L_,U_,N_,O_,k_,F_,B_,z_,H_,V_,G_,W_,X_,Y_,q_,$_,j_,K_,Z_,J_,Q_,t1,e1,n1,i1,s1,r1,o1,a1,l1,c1,h1,u1,f1,d1,p1,m1,g1,x1,y1,v1,_1,M1,b1,w1,E1,S1,T1,A1,R1,C1,I1,P1,D1,L1,U1,N1,O1,k1,F1,B1,z1,H1,V1,G1,W1,X1,Y1,q1,$1,j1,K1,Z1,J1,Q1,tM,eM,nM,iM,ne,Ct,ti,Oa,Ms,sM,Mr,ur,Vp,Es,qh,Gp,$h,jh,Kh,Zh,ws,rr,Wp,br,wr,Ym,$p,qm,$m,jm,jp,Kp,Zp,Jp,Qp,Ku,Zu,Ju,Jh,gr,ab,lb,nm,Fa,xb,yb,_b,Rb,tf,ef,Nb,nf,sf,Bb,zb,Vb,rf,Qt,qb,yo,$b,jb,of,af,bs,Kb,hl,ul,Rs,fl,nn,So,To,or,ao,ar,lr,cr,lo,Km,Ba,co,za,fm,Qh,dm,dl,Ci,Ii,hr,pm,Va,mm,Qb,ho,uo,dn,pl,ml,gl,gm,fo,Ga,tu,xm,lf,ym,vm,cf,Zi,Pn,Ao,hf,Xa,eu,nu,iu,uf,xl,ff,yl,df,vl,pf,_l,mf,gf,Ro,ri,Ml,Ji,bl,Er,aw,Mo,Do,Ew,Pi,Qi,wl,oi,Sr,El,Tr,vf,_f,Mf,Gn,Is,bf,wf,Ef,Sl,Ps,Sf,Tf,Aw,Af,Tl,Al,su,Em,Sm,Rf,Cf,Rl,ts,Zf,Rw,Jf,Cw,Iw,Pw,Dw,Lw,Uw,Nw,If,Re,q2,Am,es,Di,Ar,Cl,Xt=Nt(()=>{Df="170",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uy=0,dp=1,fy=2,Cm=1,Lf=2,Mi=3,Yi=0,Je=1,bi=2,Be=0,dr=1,tl=2,pp=3,mp=4,Uf=5,Cn=100,dy=101,py=102,my=103,gy=104,Rr=200,xy=201,yy=202,vy=203,ru=204,ou=205,Il=206,_y=207,Pl=208,My=209,by=210,wy=211,Ey=212,Sy=213,Ty=214,au=0,lu=1,cu=2,xr=3,hu=4,uu=5,fu=6,du=7,Im=0,Ay=1,Ry=2,Xi=0,Nf=1,Of=2,kf=3,Lo=4,Cy=5,Ff=6,Bf=7,Pm=300,yr=301,vr=302,pu=303,mu=304,Dl=306,bn=1e3,Ss=1001,gu=1002,Qe=1003,Iy=1004,ya=1005,In=1006,Sh=1007,wi=1008,Hn=1009,Dm=1010,Lm=1011,bo=1012,zf=1013,Ts=1014,ei=1015,pn=1016,Hf=1017,Vf=1018,qi=1020,Um=35902,Nm=1021,Om=1022,on=1023,km=1024,Fm=1025,pr=1026,$i=1027,Gf=1028,Wf=1029,Bm=1030,Xf=1031,Yf=1033,ja=33776,Ka=33777,Za=33778,Ja=33779,xu=35840,yu=35841,vu=35842,_u=35843,Mu=36196,bu=37492,wu=37496,Eu=37808,Su=37809,Tu=37810,Au=37811,Ru=37812,Cu=37813,Iu=37814,Pu=37815,Du=37816,Lu=37817,Uu=37818,Nu=37819,Ou=37820,ku=37821,Qa=36492,Fu=36494,Bu=36495,zm=36283,zu=36284,Hu=36285,Vu=36286,el=2300,Gu=2301,Th=2302,gp=2400,xp=2401,yp=2402,Py=3200,Dy=3201,qf=0,Ly=1,Gi="",ke="srgb",Cr="srgb-linear",Ll="linear",de="srgb",Ys=7680,vp=519,Uy=512,Ny=513,Oy=514,Hm=515,ky=516,Fy=517,By=518,zy=519,Wu=35044,Ds=35048,_p="300 es",Ei=2e3,nl=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mp=1234567,go=Math.PI/180,wo=180/Math.PI;se={DEG2RAD:go,RAD2DEG:wo,generateUUID:ni,clamp:Fe,euclideanModulo:$f,mapLinear:Hy,inverseLerp:Vy,lerp:xo,damp:Gy,pingpong:Wy,smoothstep:Xy,smootherstep:Yy,randInt:qy,randFloat:$y,randFloatSpread:jy,seededRandom:Ky,degToRad:Zy,radToDeg:Jy,isPowerOfTwo:Qy,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:ge,denormalize:zn},j=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],M=s[1],v=s[4],y=s[7],R=s[2],w=s[5],S=s[8];return r[0]=o*x+a*M+l*R,r[3]=o*m+a*v+l*w,r[6]=o*g+a*y+l*S,r[1]=c*x+h*M+u*R,r[4]=c*m+h*v+u*w,r[7]=c*g+h*y+u*S,r[2]=f*x+d*M+p*R,r[5]=f*m+d*v+p*w,r[8]=f*g+d*y+p*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ah.makeScale(t,e)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ah.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new Jt;bp={};oe={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Ll:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};wp=[.64,.33,.3,.6,.15,.06],Ep=[.2126,.7152,.0722],Sp=[.3127,.329],Tp=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Cr]:{primaries:wp,whitePoint:Sp,transfer:Ll,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:Ep,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:wp,whitePoint:Sp,transfer:de,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:Ep,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});Xu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qs===void 0&&(qs=il("canvas")),qs.width=t.width,qs.height=t.height;let n=qs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=il("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},av=0,sl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rh(s[o].image)):r.push(Rh(s[o]))}else r=Rh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};lv=0,fn=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ss,s=Ss,r=In,o=wi,a=on,l=Hn,c=i.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ni(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Pm;fn.DEFAULT_ANISOTROPY=1;De=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,R=(g+1)/2,w=(h+f)/4,S=(u+x)/4,I=(p+m)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=S/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yu=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},qu=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ie=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let m=1-a,g=l*f+c*d+h*p+u*x,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let R=Math.sqrt(v),w=Math.atan2(R,g*M);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}let y=a*M;if(l=l*m+f*y,c=c*m+d*y,h=h*m+p*y,u=u*m+x*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ch=new T,Rp=new Ie,ve=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),_a.subVectors(this.max,io),$s.subVectors(t.a,io),js.subVectors(t.b,io),Ks.subVectors(t.c,io),ki.subVectors(js,$s),Fi.subVectors(Ks,js),xs.subVectors($s,Ks);let e=[0,-ki.z,ki.y,0,-Fi.z,Fi.y,0,-xs.z,xs.y,ki.z,0,-ki.x,Fi.z,0,-Fi.x,xs.z,0,-xs.x,-ki.y,ki.x,0,-Fi.y,Fi.x,0,-xs.y,xs.x,0];return!Ih(e,$s,js,Ks,_a)||(e=[1,0,0,0,1,0,0,0,1],!Ih(e,$s,js,Ks,_a))?!1:(Ma.crossVectors(ki,Fi),e=[Ma.x,Ma.y,Ma.z],Ih(e,$s,js,Ks,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new T,new T,new T,new T,new T,new T,new T,new T],kn=new T,va=new ve,$s=new T,js=new T,Ks=new T,ki=new T,Fi=new T,xs=new T,io=new T,_a=new T,Ma=new T,ys=new T;cv=new ve,so=new T,Ph=new T,ji=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Ph)),this.expandByPoint(so.copy(t.center).sub(Ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new T,Dh=new T,ba=new T,Bi=new T,Lh=new T,wa=new T,Uh=new T,As=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dh.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(Dh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ba),a=Bi.dot(this.direction),l=-Bi.dot(ba),c=Bi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dh).addScaledVector(ba,f),d}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){Lh.subVectors(e,t),wa.subVectors(n,t),Uh.crossVectors(Lh,wa);let o=this.direction.dot(Uh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);let l=a*this.direction.dot(wa.crossVectors(Bi,wa));if(l<0)return null;let c=a*this.direction.dot(Lh.cross(Bi));if(c<0||l+c>o)return null;let h=-a*Bi.dot(Uh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hv,t,uv)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),zi.crossVectors(n,_n),zi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),zi.crossVectors(n,_n)),zi.normalize(),Ea.crossVectors(_n,zi),s[0]=zi.x,s[4]=Ea.x,s[8]=_n.x,s[1]=zi.y,s[5]=Ea.y,s[9]=_n.y,s[2]=zi.z,s[6]=Ea.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],v=n[7],y=n[11],R=n[15],w=s[0],S=s[4],I=s[8],b=s[12],_=s[1],C=s[5],L=s[9],U=s[13],O=s[2],$=s[6],H=s[10],Z=s[14],V=s[3],rt=s[7],dt=s[11],gt=s[15];return r[0]=o*w+a*_+l*O+c*V,r[4]=o*S+a*C+l*$+c*rt,r[8]=o*I+a*L+l*H+c*dt,r[12]=o*b+a*U+l*Z+c*gt,r[1]=h*w+u*_+f*O+d*V,r[5]=h*S+u*C+f*$+d*rt,r[9]=h*I+u*L+f*H+d*dt,r[13]=h*b+u*U+f*Z+d*gt,r[2]=p*w+x*_+m*O+g*V,r[6]=p*S+x*C+m*$+g*rt,r[10]=p*I+x*L+m*H+g*dt,r[14]=p*b+x*U+m*Z+g*gt,r[3]=M*w+v*_+y*O+R*V,r[7]=M*S+v*C+y*$+R*rt,r[11]=M*I+v*L+y*H+R*dt,r[15]=M*b+v*U+y*Z+R*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=u*m*c-x*f*c+x*l*d-a*m*d-u*l*g+a*f*g,v=p*f*c-h*m*c-p*l*d+o*m*d+h*l*g-o*f*g,y=h*x*c-p*u*c+p*a*d-o*x*d-h*a*g+o*u*g,R=p*u*l-h*x*l-p*a*f+o*x*f+h*a*m-o*u*m,w=e*M+n*v+s*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return t[0]=M*S,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*g-n*f*g)*S,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*g+n*l*g)*S,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*S,t[4]=v*S,t[5]=(h*m*r-p*f*r+p*s*d-e*m*d-h*s*g+e*f*g)*S,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*S,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*S,t[8]=y*S,t[9]=(p*u*r-h*x*r-p*n*d+e*x*d+h*n*g-e*u*g)*S,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*g+e*a*g)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*S,t[12]=R*S,t[13]=(h*x*s-p*u*s+p*n*f-e*x*f-h*n*m+e*u*m)*S,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*m-e*a*m)*S,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,M=l*c,v=l*h,y=l*u,R=n.x,w=n.y,S=n.z;return s[0]=(1-(x+g))*R,s[1]=(d+y)*R,s[2]=(p-v)*R,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+g))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(p+v)*S,s[9]=(m-M)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);let c=1/r,h=1/o,u=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,p;if(a===Ei)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===nl)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,p,x;if(a===Ei)p=(o+r)*u,x=-2*u;else if(a===nl)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zs=new T,Fn=new Ot,hv=new T(0,0,0),uv=new T(1,1,1),zi=new T,Ea=new T,_n=new T,Cp=new Ot,Ip=new Ie,ii=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";Eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fv=0,Pp=new T,Js=new Ie,yi=new Ot,Sa=new T,ro=new T,dv=new T,pv=new Ie,Dp=new T(1,0,0),Lp=new T(0,1,0),Up=new T(0,0,1),Np={type:"added"},mv={type:"removed"},Qs={type:"childadded",child:null},Nh={type:"childremoved",child:null},ze=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new ii,n=new Ie,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Jt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Dp,t)}rotateY(t){return this.rotateOnAxis(Lp,t)}rotateZ(t){return this.rotateOnAxis(Up,t)}translateOnAxis(t,e){return Pp.copy(t).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dp,t)}translateY(t){return this.translateOnAxis(Lp,t)}translateZ(t){return this.translateOnAxis(Up,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ro,Sa,this.up):yi.lookAt(Sa,ro,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Np),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mv),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Np),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,dv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,pv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new T(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Bn=new T,vi=new T,Oh=new T,_i=new T,tr=new T,er=new T,Op=new T,kh=new T,Fh=new T,Bh=new T,zh=new De,Hh=new De,Vh=new De,Wi=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),vi.subVectors(n,e),Oh.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(vi),l=Bn.dot(Oh),c=vi.dot(vi),h=vi.dot(Oh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return zh.setScalar(0),Hh.setScalar(0),Vh.setScalar(0),zh.fromBufferAttribute(t,e),Hh.fromBufferAttribute(t,n),Vh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(zh,r.x),o.addScaledVector(Hh,r.y),o.addScaledVector(Vh,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),vi.subVectors(t,e),Bn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Bn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),er.subVectors(r,n),kh.subVectors(t,n);let l=tr.dot(kh),c=er.dot(kh);if(l<=0&&c<=0)return e.copy(n);Fh.subVectors(t,s);let h=tr.dot(Fh),u=er.dot(Fh);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(tr,o);Bh.subVectors(t,r);let d=tr.dot(Bh),p=er.dot(Bh);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(er,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Op.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Op,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=$f(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gh(o,r,t+1/3),this.g=Gh(o,r,t),this.b=Gh(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Gm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return oe.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Fe(Ze.r*255,0,255))*65536+Math.round(Fe(Ze.g*255,0,255))*256+Math.round(Fe(Ze.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=ke){oe.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ta);let n=xo(Hi.h,Ta.h,e),s=xo(Hi.s,Ta.s,e),r=xo(Hi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new ft;ft.NAMES=Gm;gv=0,si=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ni(),this.name="",this.blending=dr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=ou,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ru&&(n.blendSrc=this.blendSrc),this.blendDst!==ou&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ki=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Oe=new T,Aa=new j,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wu&&(t.usage=this.usage),t}},ol=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}},al=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}},me=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},xv=0,Rn=new Ot,Wh=new ze,nr=new T,Mn=new ve,oo=new ve,We=new T,Pe=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vm(t)?al:ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(Mn.min,oo.min),Mn.expandByPoint(We),We.addVectors(Mn.max,oo.max),Mn.expandByPoint(We)):(Mn.expandByPoint(oo.min),Mn.expandByPoint(oo.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(t,c),We.add(nr)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new T,l[I]=new T;let c=new T,h=new T,u=new T,f=new j,d=new j,p=new j,x=new T,m=new T;function g(I,b,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[I].add(x),a[b].add(x),a[_].add(x),l[I].add(m),l[b].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){let _=M[I],C=_.start,L=_.count;for(let U=C,O=C+L;U<O;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let v=new T,y=new T,R=new T,w=new T;function S(I){R.fromBufferAttribute(s,I),w.copy(R);let b=a[I];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(w,b);let C=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,b=M.length;I<b;++I){let _=M[I],C=_.start,L=_.count;for(let U=C,O=C+L;U<O;U+=3)S(t.getX(U+0)),S(t.getX(U+1)),S(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kp=new Ot,vs=new As,Ra=new ji,Fp=new T,Ca=new T,Ia=new T,Pa=new T,Xh=new T,Da=new T,Bp=new T,La=new T,pe=class extends ze{constructor(t=new Pe,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xh.fromBufferAttribute(u,t),o?Da.addScaledVector(Xh,h):Da.addScaledVector(Xh.sub(e),h))}e.add(Da)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(Ra.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ra,Fp)===null||vs.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(kp.copy(r).invert(),vs.copy(t.ray).applyMatrix4(kp),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){let w=a.getX(y),S=a.getX(y+1),I=a.getX(y+2);s=Ua(this,g,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Ua(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){let w=y,S=y+1,I=y+2;s=Ua(this,g,t,n,c,h,u,w,S,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let M=m,v=m+1,y=m+2;s=Ua(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Vn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function p(x,m,g,M,v,y,R,w,S,I,b){let _=y/S,C=R/I,L=y/2,U=R/2,O=w/2,$=S+1,H=I+1,Z=0,V=0,rt=new T;for(let dt=0;dt<H;dt++){let gt=dt*C-U;for(let et=0;et<$;et++){let Et=et*_-L;rt[x]=Et*M,rt[m]=gt*v,rt[g]=O,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[g]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(et/S),u.push(1-dt/I),Z+=1}}for(let dt=0;dt<I;dt++)for(let gt=0;gt<S;gt++){let et=f+gt+$*dt,Et=f+gt+$*(dt+1),X=f+(gt+1)+$*(dt+1),at=f+(gt+1)+$*dt;l.push(et,Et,at),l.push(Et,X,at),V+=6}a.addGroup(d,V,b),d+=V,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};mn={clone:_r,merge:sn},_v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=vv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ll=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new T,zp=new j,Hp=new j,rn=class extends ll{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,zp,Hp),e.subVectors(Hp,zp)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ir=-90,sr=1,$u=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new rn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new rn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new rn(ir,sr,t,e);a.layers=this.layers,this.add(a);let l=new rn(ir,sr,t,e);l.layers=this.layers,this.add(l);let c=new rn(ir,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},cl=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ju=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Be});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=In),new $u(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Yh=new T,bv=new T,wv=new Jt,Ne=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yh.subVectors(n,e).cross(bv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wv.getNormalMatrix(t),s=this.coplanarPoint(Yh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new ji,Na=new T,Ai=class{constructor(t=new Ne,e=new Ne,n=new Ne,s=new Ne,r=new Ne,o=new Ne){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],p=s[9],x=s[10],m=s[11],g=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-d,y-g).normalize(),n[1].setComponents(l+r,f+c,m+d,y+g).normalize(),n[2].setComponents(l+o,f+h,m+p,y+M).normalize(),n[3].setComponents(l-o,f-h,m-p,y-M).normalize(),n[4].setComponents(l-a,f-u,m-x,y-v).normalize(),e===Ei)n[5].setComponents(l+a,f+u,m+x,y+v).normalize();else if(e===nl)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ri=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let M=g*f-o;for(let v=0;v<c;v++){let y=v*u-r;p.push(y,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let v=M+c*g,y=M+c*(g+1),R=M+1+c*(g+1),w=M+1+c*g;d.push(v,y,w),d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,__=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Sv,alphahash_pars_fragment:Tv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Iv,aomap_fragment:Pv,aomap_pars_fragment:Dv,batching_pars_vertex:Lv,batching_vertex:Uv,begin_vertex:Nv,beginnormal_vertex:Ov,bsdfs:kv,iridescence_fragment:Fv,bumpmap_pars_fragment:Bv,clipping_planes_fragment:zv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:Yv,color_vertex:qv,common:$v,cube_uv_reflection_fragment:jv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:x_,envmap_vertex:a_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:y_,lights_toon_pars_fragment:v_,lights_phong_fragment:__,lights_phong_pars_fragment:M_,lights_physical_fragment:b_,lights_physical_pars_fragment:w_,lights_fragment_begin:E_,lights_fragment_maps:S_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:I_,map_fragment:P_,map_pars_fragment:D_,map_particle_fragment:L_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:O_,morphinstance_vertex:k_,morphcolor_vertex:F_,morphnormal_vertex:B_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:Y_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:Z_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:t1,project_vertex:e1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:a1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:h1,skinning_pars_vertex:u1,skinning_vertex:f1,skinnormal_vertex:d1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:x1,transmission_fragment:y1,transmission_pars_fragment:v1,uv_pars_fragment:_1,uv_pars_vertex:M1,uv_vertex:b1,worldpos_vertex:w1,background_vert:E1,background_frag:S1,backgroundCube_vert:T1,backgroundCube_frag:A1,cube_vert:R1,cube_frag:C1,depth_vert:I1,depth_frag:P1,distanceRGBA_vert:D1,distanceRGBA_frag:L1,equirect_vert:U1,equirect_frag:N1,linedashed_vert:O1,linedashed_frag:k1,meshbasic_vert:F1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:X1,meshphong_vert:Y1,meshphong_frag:q1,meshphysical_vert:$1,meshphysical_frag:j1,meshtoon_vert:K1,meshtoon_frag:Z1,points_vert:J1,points_frag:Q1,shadow_vert:tM,shadow_frag:eM,sprite_vert:nM,sprite_frag:iM},Ct={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ti={basic:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:sn([Ct.lights,Ct.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};Oa={r:0,b:0,g:0},Ms=new ii,sM=new Ot;Mr=class extends ll{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ur=4,Vp=[.125,.215,.35,.446,.526,.582],Es=20,qh=new Mr,Gp=new ft,$h=null,jh=0,Kh=0,Zh=!1,ws=(1+Math.sqrt(5))/2,rr=1/ws,Wp=[new T(-ws,rr,0),new T(ws,rr,0),new T(-rr,0,ws),new T(rr,0,ws),new T(0,ws,-rr),new T(0,ws,rr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$h=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($h,jh,Kh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:pn,format:on,colorSpace:Cr,depthBuffer:!1},s=Xp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(r)),this._blurMaterial=fM(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,qh)}_sceneToCubeUV(t,e,n,s){let a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Gp),h.toneMapping=Xi,h.autoClear=!1;let d=new Ki({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),p=new pe(new Vn,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Gp),x=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let v=this._cubeSize;ka(s,M*v,g>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===yr||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ka(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wp[(s-r-1)%Wp.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let g=[],M=0;for(let S=0;S<Es;++S){let I=S/x,b=Math.exp(-I*I/2);g.push(b),S===0?M+=b:S<m&&(M+=2*b)}for(let S=0;S<g.length;S++)g[S]=g[S]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let y=this._sizeLods[s],R=3*y*(s>v-ur?s-v+ur:0),w=4*(this._cubeSize-y);ka(e,R,w,3*y,2*y),l.setRenderTarget(e),l.render(u,qh)}};wr=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h=pr){if(h!==pr&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pr&&(n=Ts),n===void 0&&h===$i&&(n=qi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ym=new fn,$p=new wr(1,1),qm=new rl,$m=new qu,jm=new cl,jp=[],Kp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),Qp=new Float32Array(4);Ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BM(e.type)}},Zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rb(e.type)}},Ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Jh=/(\w+)(\])?(\[|\.)?/g;gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ob(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};ab=37297,lb=0;nm=new Jt;Fa=new T;xb=/^[ \t]*#include +<([\w\d./]+)>/gm;yb=new Map;_b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Rb=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ef(t),e.set(t,n)),n}},ef=class{constructor(t){this.id=Rb++,this.code=t,this.usedTimes=0}};Nb=0;nf=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sf=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Vb={[au]:lu,[cu]:fu,[hu]:du,[xr]:uu,[lu]:au,[fu]:cu,[du]:hu,[uu]:xr};rf=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},qb={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:$b,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=new of,m=e.getContextAttributes(),g=null,M=null,v=[],y=[],R=new j,w=null,S=new rn;S.viewport=new De;let I=new rn;I.viewport=new De;let b=[S,I],_=new rf,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=v[X];return at===void 0&&(at=new yo,v[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=v[X];return at===void 0&&(at=new yo,v[X]=at),at.getGripSpace()},this.getHand=function(X){let at=v[X];return at===void 0&&(at=new yo,v[X]=at),at.getHandSpace()};function U(X){let at=y.indexOf(X.inputSource);if(at===-1)return;let St=v[at];St!==void 0&&(St.update(X.inputSource,X.frame,c||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){let at=y[X];at!==null&&(y[X]=null,v[X].disconnect(at))}C=null,L=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,M=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Xe(d.framebufferWidth,d.framebufferHeight,{format:on,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,St=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?$i:pr,St=m.stencil?qi:Ts);let ut={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Xe(f.textureWidth,f.textureHeight,{format:on,type:Hn,depthTexture:new wr(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(X){for(let at=0;at<X.removed.length;at++){let St=X.removed[at],ht=y.indexOf(St);ht>=0&&(y[ht]=null,v[ht].disconnect(St))}for(let at=0;at<X.added.length;at++){let St=X.added[at],ht=y.indexOf(St);if(ht===-1){for(let K=0;K<v.length;K++)if(K>=y.length){y.push(St),ht=K;break}else if(y[K]===null){y[K]=St,ht=K;break}if(ht===-1)break}let ut=v[ht];ut&&ut.connect(St)}}let H=new T,Z=new T;function V(X,at,St){H.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);let ht=H.distanceTo(Z),ut=at.projectionMatrix.elements,K=St.projectionMatrix.elements,F=ut[14]/(ut[10]-1),ot=ut[14]/(ut[10]+1),k=(ut[9]+1)/ut[5],Q=(ut[9]-1)/ut[5],D=(ut[8]-1)/ut[0],yt=(K[8]+1)/K[0],tt=F*D,Mt=F*yt,vt=ht/(-D+yt),zt=vt*-D;if(at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(zt),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ut[10]===-1)X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let It=F+vt,P=ot+vt,E=tt-zt,G=Mt+(ht-zt),nt=k*ot/P*It,pt=Q*ot/P*It;X.projectionMatrix.makePerspective(E,G,nt,pt,It,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let at=X.near,St=X.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(St=x.depthFar)),_.near=I.near=S.near=at,_.far=I.far=S.far=St,(C!==_.near||L!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,L=_.far),S.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,_.layers.mask=S.layers.mask|I.layers.mask;let ht=X.parent,ut=_.cameras;rt(_,ht);for(let K=0;K<ut.length;K++)rt(ut[K],ht);ut.length===2?V(_,S,I):_.projectionMatrix.copy(S.projectionMatrix),dt(X,_,ht)};function dt(X,at,St){St===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let gt=null;function et(X,at){if(h=at.getViewerPose(c||o),p=at,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ht=!1;St.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let K=0;K<St.length;K++){let F=St[K],ot=null;if(d!==null)ot=d.getViewport(F);else{let Q=u.getViewSubImage(f,F);ot=Q.viewport,K===0&&(t.setRenderTargetTextures(M,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(M))}let k=b[K];k===void 0&&(k=new rn,k.layers.enable(K),k.viewport=new De,b[K]=k),k.matrix.fromArray(F.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(F.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ot.x,ot.y,ot.width,ot.height),K===0&&(_.matrix.copy(k.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(k)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){let K=u.getDepthInformation(St[0]);K&&K.isValid&&K.texture&&x.init(t,K,s.renderState)}}for(let St=0;St<v.length;St++){let ht=y[St],ut=v[St];ht!==null&&ut!==void 0&&ut.update(ht,at,c||o)}gt&&gt(X,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}let Et=new Xm;Et.setAnimationLoop(et),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}},bs=new ii,Kb=new Ot;hl=class{constructor(t={}){let{canvas:e=iv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Xi,this.toneMappingExposure=1;let y=this,R=!1,w=0,S=0,I=null,b=-1,_=null,C=new De,L=new De,U=null,O=new ft(0),$=0,H=e.width,Z=e.height,V=1,rt=null,dt=null,gt=new De(0,0,H,Z),et=new De(0,0,H,Z),Et=!1,X=new Ai,at=!1,St=!1,ht=new Ot,ut=new Ot,K=new T,F=new De,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},k=!1;function Q(){return I===null?V:1}let D=n;function yt(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Df}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),D===null){let B="webgl2";if(D=yt(B,A),D===null)throw yt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,Mt,vt,zt,It,P,E,G,nt,pt,it,Lt,bt,Tt,$t,mt,Pt,Vt,Wt,Ut,ie,J,At,N;function ct(){tt=new pM(D),tt.init(),J=new Yb(D,tt),Mt=new lM(D,tt,t,J),vt=new Gb(D,tt),Mt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),zt=new xM(D),It=new Ib,P=new Xb(D,tt,vt,It,Mt,J,zt),E=new hM(y),G=new dM(y),nt=new Ev(D),At=new oM(D,nt),pt=new mM(D,nt,zt,At),it=new vM(D,pt,nt,zt),Wt=new yM(D,Mt,P),mt=new cM(It),Lt=new Cb(y,E,G,tt,Mt,At,mt),bt=new Zb(y,It),Tt=new Db,$t=new Fb(tt),Vt=new rM(y,E,G,vt,it,d,l),Pt=new Hb(y,it,Mt),N=new Jb(D,zt,Mt,vt),Ut=new aM(D,tt,zt),ie=new gM(D,tt,zt),zt.programs=Lt.programs,y.capabilities=Mt,y.extensions=tt,y.properties=It,y.renderLists=Tt,y.shadowMap=Pt,y.state=vt,y.info=zt}ct();let W=new af(y,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(H,Z,!1))},this.getSize=function(A){return A.set(H,Z)},this.setSize=function(A,B,Y=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,Z=B,e.width=Math.floor(A*V),e.height=Math.floor(B*V),Y===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(A,B,Y){H=A,Z=B,V=Y,e.width=Math.floor(A*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,B,Y,q){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,B,Y,q),vt.viewport(C.copy(gt).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,B,Y,q){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,B,Y,q),vt.scissor(L.copy(et).multiplyScalar(V).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){vt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,B=!0,Y=!0){let q=0;if(A){let z=!1;if(I!==null){let _t=I.texture.format;z=_t===Yf||_t===Xf||_t===Wf}if(z){let _t=I.texture.type,Dt=_t===Hn||_t===Ts||_t===bo||_t===qi||_t===Hf||_t===Vf,kt=Vt.getClearColor(),Ft=Vt.getClearAlpha(),Kt=kt.r,Zt=kt.g,Bt=kt.b;Dt?(p[0]=Kt,p[1]=Zt,p[2]=Bt,p[3]=Ft,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Kt,x[1]=Zt,x[2]=Bt,x[3]=Ft,D.clearBufferiv(D.COLOR,0,x))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),Y&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Tt.dispose(),$t.dispose(),It.dispose(),E.dispose(),G.dispose(),it.dispose(),At.dispose(),N.dispose(),Lt.dispose(),W.dispose(),W.removeEventListener("sessionstart",sp),W.removeEventListener("sessionend",rp),gs.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=zt.autoReset,B=Pt.enabled,Y=Pt.autoUpdate,q=Pt.needsUpdate,z=Pt.type;ct(),zt.autoReset=A,Pt.enabled=B,Pt.autoUpdate=Y,Pt.needsUpdate=q,Pt.type=z}function Rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){let B=A.target;B.removeEventListener("dispose",Yt),ce(B)}function ce(A){te(A),It.remove(A)}function te(A){let B=It.get(A).programs;B!==void 0&&(B.forEach(function(Y){Lt.releaseProgram(Y)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,q,z,_t){B===null&&(B=ot);let Dt=z.isMesh&&z.matrixWorld.determinant()<0,kt=ay(A,B,Y,q,z);vt.setMaterial(q,Dt);let Ft=Y.index,Kt=1;if(q.wireframe===!0){if(Ft=pt.getWireframeAttribute(Y),Ft===void 0)return;Kt=2}let Zt=Y.drawRange,Bt=Y.attributes.position,le=Zt.start*Kt,Me=(Zt.start+Zt.count)*Kt;_t!==null&&(le=Math.max(le,_t.start*Kt),Me=Math.min(Me,(_t.start+_t.count)*Kt)),Ft!==null?(le=Math.max(le,0),Me=Math.min(Me,Ft.count)):Bt!=null&&(le=Math.max(le,0),Me=Math.min(Me,Bt.count));let Ee=Me-le;if(Ee<0||Ee===1/0)return;At.setup(z,q,kt,Y,Ft);let un,ue=Ut;if(Ft!==null&&(un=nt.get(Ft),ue=ie,ue.setIndex(un)),z.isMesh)q.wireframe===!0?(vt.setLineWidth(q.wireframeLinewidth*Q()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(z.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),vt.setLineWidth(Ht*Q()),z.isLineSegments?ue.setMode(D.LINES):z.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else z.isPoints?ue.setMode(D.POINTS):z.isSprite&&ue.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ht=z._multiDrawStarts,mi=z._multiDrawCounts,fe=z._multiDrawCount,On=Ft?nt.get(Ft).bytesPerElement:1,Xs=It.get(q).currentProgram.getUniforms();for(let vn=0;vn<fe;vn++)Xs.setValue(D,"_gl_DrawID",vn),ue.render(Ht[vn]/On,mi[vn])}else if(z.isInstancedMesh)ue.renderInstances(le,Ee,z.count);else if(Y.isInstancedBufferGeometry){let Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mi=Math.min(Y.instanceCount,Ht);ue.renderInstances(le,Ee,mi)}else ue.render(le,Ee)};function ee(A,B,Y){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,xa(A,B,Y),A.side=Yi,A.needsUpdate=!0,xa(A,B,Y),A.side=bi):xa(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),g=$t.get(Y),g.init(B),v.push(g),Y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),A!==Y&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();let q=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let _t=z.material;if(_t)if(Array.isArray(_t))for(let Dt=0;Dt<_t.length;Dt++){let kt=_t[Dt];ee(kt,Y,z),q.add(kt)}else ee(_t,Y,z),q.add(_t)}),v.pop(),g=null,q},this.compileAsync=function(A,B,Y=null){let q=this.compile(A,B,Y);return new Promise(z=>{function _t(){if(q.forEach(function(Dt){It.get(Dt).currentProgram.isReady()&&q.delete(Dt)}),q.size===0){z(A);return}setTimeout(_t,10)}tt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let yn=null;function Nn(A){yn&&yn(A)}function sp(){gs.stop()}function rp(){gs.start()}let gs=new Xm;gs.setAnimationLoop(Nn),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(A){yn=A,W.setAnimationLoop(A),A===null?gs.stop():gs.start()},W.addEventListener("sessionstart",sp),W.addEventListener("sessionend",rp),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(B),B=W.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,I),g=$t.get(A,v.length),g.init(B),v.push(g),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(ut),St=this.localClippingEnabled,at=mt.init(this.clippingPlanes,St),m=Tt.get(A,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){let _t=y.xr.getDepthSensingMesh();_t!==null&&Eh(_t,B,-1/0,y.sortObjects)}Eh(A,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,dt),k=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,k&&Vt.addToRenderList(m,A),this.info.render.frame++,at===!0&&mt.beginShadows();let Y=g.state.shadowsArray;Pt.render(Y,A,B),at===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(g.setupLights(),B.isArrayCamera){let _t=B.cameras;if(z.length>0)for(let Dt=0,kt=_t.length;Dt<kt;Dt++){let Ft=_t[Dt];ap(q,z,A,Ft)}k&&Vt.render(A);for(let Dt=0,kt=_t.length;Dt<kt;Dt++){let Ft=_t[Dt];op(m,A,Ft,Ft.viewport)}}else z.length>0&&ap(q,z,A,B),k&&Vt.render(A),op(m,A,B);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,B),At.resetDefaultState(),b=-1,_=null,v.pop(),v.length>0?(g=v[v.length-1],at===!0&&mt.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Eh(A,B,Y,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){q&&F.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);let Dt=it.update(A),kt=A.material;kt.visible&&m.push(A,Dt,kt,Y,F.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){let Dt=it.update(A),kt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),F.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),F.copy(Dt.boundingSphere.center)),F.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(kt)){let Ft=Dt.groups;for(let Kt=0,Zt=Ft.length;Kt<Zt;Kt++){let Bt=Ft[Kt],le=kt[Bt.materialIndex];le&&le.visible&&m.push(A,Dt,le,Y,F.z,Bt)}}else kt.visible&&m.push(A,Dt,kt,Y,F.z,null)}}let _t=A.children;for(let Dt=0,kt=_t.length;Dt<kt;Dt++)Eh(_t[Dt],B,Y,q)}function op(A,B,Y,q){let z=A.opaque,_t=A.transmissive,Dt=A.transparent;g.setupLightsView(Y),at===!0&&mt.setGlobalState(y.clippingPlanes,Y),q&&vt.viewport(C.copy(q)),z.length>0&&ga(z,B,Y),_t.length>0&&ga(_t,B,Y),Dt.length>0&&ga(Dt,B,Y),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ap(A,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Xe(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?pn:Hn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let _t=g.state.transmissionRenderTarget[q.id],Dt=q.viewport||C;_t.setSize(Dt.z,Dt.w);let kt=y.getRenderTarget();y.setRenderTarget(_t),y.getClearColor(O),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),k&&Vt.render(Y);let Ft=y.toneMapping;y.toneMapping=Xi;let Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),at===!0&&mt.setGlobalState(y.clippingPlanes,q),ga(A,Y,q),P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Bt=0,le=B.length;Bt<le;Bt++){let Me=B[Bt],Ee=Me.object,un=Me.geometry,ue=Me.material,Ht=Me.group;if(ue.side===bi&&Ee.layers.test(q.layers)){let mi=ue.side;ue.side=Je,ue.needsUpdate=!0,lp(Ee,Y,q,un,ue,Ht),ue.side=mi,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t))}y.setRenderTarget(kt),y.setClearColor(O,$),Kt!==void 0&&(q.viewport=Kt),y.toneMapping=Ft}function ga(A,B,Y){let q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,_t=A.length;z<_t;z++){let Dt=A[z],kt=Dt.object,Ft=Dt.geometry,Kt=q===null?Dt.material:q,Zt=Dt.group;kt.layers.test(Y.layers)&&lp(kt,B,Y,Ft,Kt,Zt)}}function lp(A,B,Y,q,z,_t){A.onBeforeRender(y,B,Y,q,z,_t),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(y,B,Y,q,A,_t),z.transparent===!0&&z.side===bi&&z.forceSinglePass===!1?(z.side=Je,z.needsUpdate=!0,y.renderBufferDirect(Y,B,q,z,A,_t),z.side=Yi,z.needsUpdate=!0,y.renderBufferDirect(Y,B,q,z,A,_t),z.side=bi):y.renderBufferDirect(Y,B,q,z,A,_t),A.onAfterRender(y,B,Y,q,z,_t)}function xa(A,B,Y){B.isScene!==!0&&(B=ot);let q=It.get(A),z=g.state.lights,_t=g.state.shadowsArray,Dt=z.state.version,kt=Lt.getParameters(A,z.state,_t,B,Y),Ft=Lt.getProgramCacheKey(kt),Kt=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Yt),Kt=new Map,q.programs=Kt);let Zt=Kt.get(Ft);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===Dt)return hp(A,kt),Zt}else kt.uniforms=Lt.getUniforms(A),A.onBeforeCompile(kt,y),Zt=Lt.acquireProgram(kt,Ft),Kt.set(Ft,Zt),q.uniforms=kt.uniforms;let Bt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),hp(A,kt),q.needsLights=cy(A),q.lightsStateVersion=Dt,q.needsLights&&(Bt.ambientLightColor.value=z.state.ambient,Bt.lightProbe.value=z.state.probe,Bt.directionalLights.value=z.state.directional,Bt.directionalLightShadows.value=z.state.directionalShadow,Bt.spotLights.value=z.state.spot,Bt.spotLightShadows.value=z.state.spotShadow,Bt.rectAreaLights.value=z.state.rectArea,Bt.ltc_1.value=z.state.rectAreaLTC1,Bt.ltc_2.value=z.state.rectAreaLTC2,Bt.pointLights.value=z.state.point,Bt.pointLightShadows.value=z.state.pointShadow,Bt.hemisphereLights.value=z.state.hemi,Bt.directionalShadowMap.value=z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Bt.spotShadowMap.value=z.state.spotShadowMap,Bt.spotLightMatrix.value=z.state.spotLightMatrix,Bt.spotLightMap.value=z.state.spotLightMap,Bt.pointShadowMap.value=z.state.pointShadowMap,Bt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function cp(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function hp(A,B){let Y=It.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function ay(A,B,Y,q,z){B.isScene!==!0&&(B=ot),P.resetTextureUnits();let _t=B.fog,Dt=q.isMeshStandardMaterial?B.environment:null,kt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Cr,Ft=(q.isMeshStandardMaterial?G:E).get(q.envMap||Dt),Kt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,Me=!!Y.morphAttributes.color,Ee=Xi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=y.toneMapping);let un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=un!==void 0?un.length:0,Ht=It.get(q),mi=g.state.lights;if(at===!0&&(St===!0||A!==_)){let An=A===_&&q.id===b;mt.setState(q,A,An)}let fe=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==mi.state.version||Ht.outputColorSpace!==kt||z.isBatchedMesh&&Ht.batching===!1||!z.isBatchedMesh&&Ht.batching===!0||z.isBatchedMesh&&Ht.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ht.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ht.instancing===!1||!z.isInstancedMesh&&Ht.instancing===!0||z.isSkinnedMesh&&Ht.skinning===!1||!z.isSkinnedMesh&&Ht.skinning===!0||z.isInstancedMesh&&Ht.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ht.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ht.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ht.instancingMorph===!1&&z.morphTexture!==null||Ht.envMap!==Ft||q.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==mt.numPlanes||Ht.numIntersection!==mt.numIntersection)||Ht.vertexAlphas!==Kt||Ht.vertexTangents!==Zt||Ht.morphTargets!==Bt||Ht.morphNormals!==le||Ht.morphColors!==Me||Ht.toneMapping!==Ee||Ht.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Ht.__version=q.version);let On=Ht.currentProgram;fe===!0&&(On=xa(q,B,z));let Xs=!1,vn=!1,eo=!1,Se=On.getUniforms(),Qn=Ht.uniforms;if(vt.useProgram(On.program)&&(Xs=!0,vn=!0,eo=!0),q.id!==b&&(b=q.id,vn=!0),Xs||_!==A){vt.buffers.depth.getReversed()?(ht.copy(A.projectionMatrix),rv(ht),ov(ht),Se.setValue(D,"projectionMatrix",ht)):Se.setValue(D,"projectionMatrix",A.projectionMatrix),Se.setValue(D,"viewMatrix",A.matrixWorldInverse);let Ni=Se.map.cameraPosition;Ni!==void 0&&Ni.setValue(D,K.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,vn=!0,eo=!0)}if(z.isSkinnedMesh){Se.setOptional(D,z,"bindMatrix"),Se.setOptional(D,z,"bindMatrixInverse");let An=z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Se.setValue(D,"boneTexture",An.boneTexture,P))}z.isBatchedMesh&&(Se.setOptional(D,z,"batchingTexture"),Se.setValue(D,"batchingTexture",z._matricesTexture,P),Se.setOptional(D,z,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",z._indirectTexture,P),Se.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",z._colorsTexture,P));let no=Y.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&Wt.update(z,Y,On),(vn||Ht.receiveShadow!==z.receiveShadow)&&(Ht.receiveShadow=z.receiveShadow,Se.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Qn.envMap.value=Ft,Qn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Qn.envMapIntensity.value=B.environmentIntensity),vn&&(Se.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&ly(Qn,eo),_t&&q.fog===!0&&bt.refreshFogUniforms(Qn,_t),bt.refreshMaterialUniforms(Qn,q,V,Z,g.state.transmissionRenderTarget[A.id]),gr.upload(D,cp(Ht),Qn,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gr.upload(D,cp(Ht),Qn,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(D,"center",z.center),Se.setValue(D,"modelViewMatrix",z.modelViewMatrix),Se.setValue(D,"normalMatrix",z.normalMatrix),Se.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let An=q.uniformsGroups;for(let Ni=0,Oi=An.length;Ni<Oi;Ni++){let up=An[Ni];N.update(up,On),N.bind(up,On)}}return On}function ly(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function cy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,B,Y){It.get(A.texture).__webglTexture=B,It.get(A.depthTexture).__webglTexture=Y;let q=It.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let Y=It.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){I=A,w=B,S=Y;let q=!0,z=null,_t=!1,Dt=!1;if(A){let Ft=It.get(A);if(Ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ft.__hasExternalTextures)P.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Bt=A.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&It.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Dt=!0);let Zt=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?z=Zt[B][Y]:z=Zt[B],_t=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?z=It.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?z=Zt[Y]:z=Zt,C.copy(A.viewport),L.copy(A.scissor),U=A.scissorTest}else C.copy(gt).multiplyScalar(V).floor(),L.copy(et).multiplyScalar(V).floor(),U=Et;if(vt.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&vt.drawBuffers(A,z),vt.viewport(C),vt.scissor(L),vt.setScissorTest(U),_t){let Ft=It.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ft.__webglTexture,Y)}else if(Dt){let Ft=It.get(A.texture),Kt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,Y||0,Kt)}b=-1},this.readRenderTargetPixels=function(A,B,Y,q,z,_t,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){vt.bindFramebuffer(D.FRAMEBUFFER,kt);try{let Ft=A.texture,Kt=Ft.format,Zt=Ft.type;if(!Mt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&Y>=0&&Y<=A.height-z&&D.readPixels(B,Y,q,z,J.convert(Kt),J.convert(Zt),_t)}finally{let Ft=I!==null?It.get(I).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,q,z,_t,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){let Ft=A.texture,Kt=Ft.format,Zt=Ft.type;if(!Mt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-q&&Y>=0&&Y<=A.height-z){vt.bindFramebuffer(D.FRAMEBUFFER,kt);let Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,_t.byteLength,D.STREAM_READ),D.readPixels(B,Y,q,z,J.convert(Kt),J.convert(Zt),0);let le=I!==null?It.get(I).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,le);let Me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sv(D,Me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_t),D.deleteBuffer(Bt),D.deleteSync(Me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,Y=0){A.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let q=Math.pow(2,-Y),z=Math.floor(A.image.width*q),_t=Math.floor(A.image.height*q),Dt=B!==null?B.x:0,kt=B!==null?B.y:0;P.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Dt,kt,z,_t),vt.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,q=null,z=0){A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,Y=null);let _t,Dt,kt,Ft,Kt,Zt,Bt,le,Me,Ee=A.isCompressedTexture?A.mipmaps[z]:A.image;Y!==null?(_t=Y.max.x-Y.min.x,Dt=Y.max.y-Y.min.y,kt=Y.isBox3?Y.max.z-Y.min.z:1,Ft=Y.min.x,Kt=Y.min.y,Zt=Y.isBox3?Y.min.z:0):(_t=Ee.width,Dt=Ee.height,kt=Ee.depth||1,Ft=0,Kt=0,Zt=0),q!==null?(Bt=q.x,le=q.y,Me=q.z):(Bt=0,le=0,Me=0);let un=J.convert(B.format),ue=J.convert(B.type),Ht;B.isData3DTexture?(P.setTexture3D(B,0),Ht=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Ht=D.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Ht=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let mi=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),On=D.getParameter(D.UNPACK_SKIP_PIXELS),Xs=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);let eo=A.isDataArrayTexture||A.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Qn=It.get(A),no=It.get(B),An=It.get(Qn.__renderTarget),Ni=It.get(no.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,An.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Oi=0;Oi<kt;Oi++)eo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(A).__webglTexture,z,Zt+Oi),A.isDepthTexture?(Se&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.get(B).__webglTexture,z,Me+Oi),D.blitFramebuffer(Ft,Kt,_t,Dt,Bt,le,_t,Dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Se?D.copyTexSubImage3D(Ht,z,Bt,le,Me+Oi,Ft,Kt,_t,Dt):D.copyTexSubImage2D(Ht,z,Bt,le,Me+Oi,Ft,Kt,_t,Dt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ht,z,Bt,le,Me,_t,Dt,kt,un,ue,Ee.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ht,z,Bt,le,Me,_t,Dt,kt,un,Ee.data):D.texSubImage3D(Ht,z,Bt,le,Me,_t,Dt,kt,un,ue,Ee):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Bt,le,_t,Dt,un,ue,Ee.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Bt,le,Ee.width,Ee.height,un,Ee.data):D.texSubImage2D(D.TEXTURE_2D,z,Bt,le,_t,Dt,un,ue,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,mi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,On),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),z===0&&B.generateMipmaps&&D.generateMipmap(Ht),vt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Y=null,q=null,z=0){return A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,Y,q,z)},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){w=0,S=0,I=null,vt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}},ul=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},fl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new T,So=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},To=class extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ao=new T,ar=new T,lr=new T,cr=new j,lo=new j,Km=new Ot,Ba=new T,co=new T,za=new T,fm=new j,Qh=new j,dm=new j,dl=class extends ze{constructor(t=new To){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fl(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new So(n,3,0,!1)),or.setAttribute("uv",new So(n,2,3,!1))}this.geometry=or,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Km.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ha(Ba.set(-.5,-.5,0),lr,o,ar,s,r),Ha(co.set(.5,-.5,0),lr,o,ar,s,r),Ha(za.set(.5,.5,0),lr,o,ar,s,r),fm.set(0,0),Qh.set(1,0),dm.set(1,1);let a=t.ray.intersectTriangle(Ba,co,za,!1,ao);if(a===null&&(Ha(co.set(-.5,.5,0),lr,o,ar,s,r),Qh.set(0,1),a=t.ray.intersectTriangle(Ba,za,co,!1,ao),a===null))return;let l=t.ray.origin.distanceTo(ao);l<t.near||l>t.far||e.push({distance:l,point:ao.clone(),uv:Wi.getInterpolation(ao,Ba,co,za,fm,Qh,dm,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Ci=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,h=Qe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ii=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new Ot,pm=new Ot,Va=[],mm=new ve,Qb=new Ot,ho=new pe,uo=new ji,dn=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ve),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),mm.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(mm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),uo.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),pm.multiplyMatrices(n,hr),ho.matrixWorld=pm,ho.raycast(t,Va);for(let o=0,a=Va.length;o<a;o++){let l=Va[o];l.instanceId=r,l.object=this,e.push(l)}Va.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(s*this.count),s,this.count,Gf,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},pl=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ml=new T,gl=new T,gm=new Ot,fo=new As,Ga=new ji,tu=new T,xm=new T,lf=class extends ze{constructor(t=new Pe,e=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ml.fromBufferAttribute(e,s-1),gl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ml.distanceTo(gl);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,t.ray.intersectsSphere(Ga)===!1)return;gm.copy(s).invert(),fo.copy(t.ray).applyMatrix4(gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),M=h.getX(x+1),v=Wa(this,t,fo,l,g,M);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=Wa(this,t,fo,l,x,m);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=Wa(this,t,fo,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){let x=Wa(this,t,fo,l,p-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ym=new T,vm=new T,cf=class extends lf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ym.fromBufferAttribute(e,s),vm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ym.distanceTo(vm);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zi=class extends fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new j:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,l=new Ot;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ao=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hf=class extends Ao{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Xa=new T,eu=new Kf,nu=new Kf,iu=new Kf,uf=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),eu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),nu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),iu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),nu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),iu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(eu.calc(l),nu.calc(l),iu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};xl=class extends Pn{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,s.x,r.x,o.x,a.x),_o(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ff=class extends Pn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,s.x,r.x,o.x,a.x),_o(t,s.y,r.y,o.y,a.y),_o(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yl=class extends Pn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},df=class extends Pn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends Pn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(t,s.x,r.x,o.x),vo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pf=class extends Pn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vo(t,s.x,r.x,o.x),vo(t,s.y,r.y,o.y),vo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(_m(a,l.x,c.x,h.x,u.x),_m(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},mf=Object.freeze({__proto__:null,ArcCurve:hf,CatmullRomCurve3:uf,CubicBezierCurve:xl,CubicBezierCurve3:ff,EllipseCurve:Ao,LineCurve:yl,LineCurve3:df,QuadraticBezierCurve:vl,QuadraticBezierCurve3:pf,SplineCurve:_l}),gf=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mf[s.type]().fromJSON(s))}return this}},Ro=class extends gf{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yl(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new vl(this.currentPoint.clone(),new j(t,e),new j(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new xl(this.currentPoint.clone(),new j(t,e),new j(n,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _l(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ao(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ri=class i extends Pe{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new T,f=new j,d=new T,p=new T,x=new T,m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let M=0;M<=e;M++){let v=n+M*h*s,y=Math.sin(v),R=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);let S=l[3*w+0]*y,I=l[3*w+1],b=l[3*w+0]*R;c.push(S,I,b)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,R=y,w=y+t.length,S=y+t.length+1,I=y+1;r.push(R,w,I),r.push(S,I,w)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ml=class i extends ri{constructor(t=1,e=1,n=4,s=8){let r=new Ro;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ji=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function M(){let y=new T,R=new T,w=0,S=(e-t)/n;for(let I=0;I<=r;I++){let b=[],_=I/r,C=_*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,O=U*l+a,$=Math.sin(O),H=Math.cos(O);R.x=C*$,R.y=-_*n+m,R.z=C*H,u.push(R.x,R.y,R.z),y.set($,S,H).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-_),b.push(p++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let _=x[b][I],C=x[b+1][I],L=x[b+1][I+1],U=x[b][I+1];(t>0||b!==0)&&(h.push(_,C,U),w+=3),(e>0||b!==r-1)&&(h.push(C,L,U),w+=3)}c.addGroup(g,w,0),g+=w}function v(y){let R=p,w=new j,S=new T,I=0,b=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),p++;let C=p;for(let L=0;L<=s;L++){let O=L/s*l+a,$=Math.cos(O),H=Math.sin(O);S.x=b*H,S.y=m*_,S.z=b*$,u.push(S.x,S.y,S.z),f.push(0,_,0),w.x=$*.5+.5,w.y=H*.5*_+.5,d.push(w.x,w.y),p++}for(let L=0;L<s;L++){let U=R+L,O=C+L;y===!0?h.push(O,O+1,U):h.push(O+1,O,U),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bl=class i extends Ji{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Er=class extends Ro{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ro().fromJSON(s))}return this}},aw={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Zm(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=fw(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],f=i[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Co(r,o,e,a,l,d,0),o}};Mo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bm(t),wm(n,t);let o=t.length;e.forEach(bm);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wm(n,e[l]);let a=aw.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Do=class i extends Pe{constructor(t=new Er([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ew,v,y=!1,R,w,S,I;g&&(v=g.getSpacedPoints(h),y=!0,f=!1,R=g.computeFrenetFrames(h,!1),w=new T,S=new T,I=new T),f||(m=0,d=0,p=0,x=0);let b=a.extractPoints(c),_=b.shape,C=b.holes;if(!Mo.isClockWise(_)){_=_.reverse();for(let k=0,Q=C.length;k<Q;k++){let D=C[k];Mo.isClockWise(D)&&(C[k]=D.reverse())}}let U=Mo.triangulateShape(_,C),O=_;for(let k=0,Q=C.length;k<Q;k++){let D=C[k];_=_.concat(D)}function $(k,Q,D){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(Q,D)}let H=_.length,Z=U.length;function V(k,Q,D){let yt,tt,Mt,vt=k.x-Q.x,zt=k.y-Q.y,It=D.x-k.x,P=D.y-k.y,E=vt*vt+zt*zt,G=vt*P-zt*It;if(Math.abs(G)>Number.EPSILON){let nt=Math.sqrt(E),pt=Math.sqrt(It*It+P*P),it=Q.x-zt/nt,Lt=Q.y+vt/nt,bt=D.x-P/pt,Tt=D.y+It/pt,$t=((bt-it)*P-(Tt-Lt)*It)/(vt*P-zt*It);yt=it+vt*$t-k.x,tt=Lt+zt*$t-k.y;let mt=yt*yt+tt*tt;if(mt<=2)return new j(yt,tt);Mt=Math.sqrt(mt/2)}else{let nt=!1;vt>Number.EPSILON?It>Number.EPSILON&&(nt=!0):vt<-Number.EPSILON?It<-Number.EPSILON&&(nt=!0):Math.sign(zt)===Math.sign(P)&&(nt=!0),nt?(yt=-zt,tt=vt,Mt=Math.sqrt(E)):(yt=vt,tt=zt,Mt=Math.sqrt(E/2))}return new j(yt/Mt,tt/Mt)}let rt=[];for(let k=0,Q=O.length,D=Q-1,yt=k+1;k<Q;k++,D++,yt++)D===Q&&(D=0),yt===Q&&(yt=0),rt[k]=V(O[k],O[D],O[yt]);let dt=[],gt,et=rt.concat();for(let k=0,Q=C.length;k<Q;k++){let D=C[k];gt=[];for(let yt=0,tt=D.length,Mt=tt-1,vt=yt+1;yt<tt;yt++,Mt++,vt++)Mt===tt&&(Mt=0),vt===tt&&(vt=0),gt[yt]=V(D[yt],D[Mt],D[vt]);dt.push(gt),et=et.concat(gt)}for(let k=0;k<m;k++){let Q=k/m,D=d*Math.cos(Q*Math.PI/2),yt=p*Math.sin(Q*Math.PI/2)+x;for(let tt=0,Mt=O.length;tt<Mt;tt++){let vt=$(O[tt],rt[tt],yt);ht(vt.x,vt.y,-D)}for(let tt=0,Mt=C.length;tt<Mt;tt++){let vt=C[tt];gt=dt[tt];for(let zt=0,It=vt.length;zt<It;zt++){let P=$(vt[zt],gt[zt],yt);ht(P.x,P.y,-D)}}}let Et=p+x;for(let k=0;k<H;k++){let Q=f?$(_[k],et[k],Et):_[k];y?(S.copy(R.normals[0]).multiplyScalar(Q.x),w.copy(R.binormals[0]).multiplyScalar(Q.y),I.copy(v[0]).add(S).add(w),ht(I.x,I.y,I.z)):ht(Q.x,Q.y,0)}for(let k=1;k<=h;k++)for(let Q=0;Q<H;Q++){let D=f?$(_[Q],et[Q],Et):_[Q];y?(S.copy(R.normals[k]).multiplyScalar(D.x),w.copy(R.binormals[k]).multiplyScalar(D.y),I.copy(v[k]).add(S).add(w),ht(I.x,I.y,I.z)):ht(D.x,D.y,u/h*k)}for(let k=m-1;k>=0;k--){let Q=k/m,D=d*Math.cos(Q*Math.PI/2),yt=p*Math.sin(Q*Math.PI/2)+x;for(let tt=0,Mt=O.length;tt<Mt;tt++){let vt=$(O[tt],rt[tt],yt);ht(vt.x,vt.y,u+D)}for(let tt=0,Mt=C.length;tt<Mt;tt++){let vt=C[tt];gt=dt[tt];for(let zt=0,It=vt.length;zt<It;zt++){let P=$(vt[zt],gt[zt],yt);y?ht(P.x,P.y+v[h-1].y,v[h-1].x+D):ht(P.x,P.y,u+D)}}}X(),at();function X(){let k=s.length/3;if(f){let Q=0,D=H*Q;for(let yt=0;yt<Z;yt++){let tt=U[yt];ut(tt[2]+D,tt[1]+D,tt[0]+D)}Q=h+m*2,D=H*Q;for(let yt=0;yt<Z;yt++){let tt=U[yt];ut(tt[0]+D,tt[1]+D,tt[2]+D)}}else{for(let Q=0;Q<Z;Q++){let D=U[Q];ut(D[2],D[1],D[0])}for(let Q=0;Q<Z;Q++){let D=U[Q];ut(D[0]+H*h,D[1]+H*h,D[2]+H*h)}}n.addGroup(k,s.length/3-k,0)}function at(){let k=s.length/3,Q=0;St(O,Q),Q+=O.length;for(let D=0,yt=C.length;D<yt;D++){let tt=C[D];St(tt,Q),Q+=tt.length}n.addGroup(k,s.length/3-k,1)}function St(k,Q){let D=k.length;for(;--D>=0;){let yt=D,tt=D-1;tt<0&&(tt=k.length-1);for(let Mt=0,vt=h+m*2;Mt<vt;Mt++){let zt=H*Mt,It=H*(Mt+1),P=Q+yt+zt,E=Q+tt+zt,G=Q+tt+It,nt=Q+yt+It;K(P,E,G,nt)}}}function ht(k,Q,D){l.push(k),l.push(Q),l.push(D)}function ut(k,Q,D){F(k),F(Q),F(D);let yt=s.length/3,tt=M.generateTopUV(n,s,yt-3,yt-2,yt-1);ot(tt[0]),ot(tt[1]),ot(tt[2])}function K(k,Q,D,yt){F(k),F(Q),F(yt),F(Q),F(D),F(yt);let tt=s.length/3,Mt=M.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);ot(Mt[0]),ot(Mt[1]),ot(Mt[3]),ot(Mt[1]),ot(Mt[2]),ot(Mt[3])}function F(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function ot(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sw(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mf[s.type]().fromJSON(s)),new i(n,t.options)}},Ew={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(f,1-p),new j(x,1-g)]:[new j(a,1-l),new j(h,1-u),new j(d,1-p),new j(m,1-g)]}};Pi=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,f=new T,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let M=[],v=g/n,y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+y,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let v=h[g][M+1],y=h[g][M],R=h[g+1][M],w=h[g+1][M+1];(g!==0||o>0)&&d.push(v,y,w),(g!==n-1||l<Math.PI)&&d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Qi=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let p=0;p<=s;p++){let x=p/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,m=(s+1)*(d-1)+p-1,g=(s+1)*(d-1)+p,M=(s+1)*d+p;o.push(x,m,M),o.push(m,g,M)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},wl=class extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},oi=class extends si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sr=class extends oi{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},El=class extends si{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};Tr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vf=class extends Tr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gp,endingEnd:gp}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xp:r=t,a=2*e-n;break;case yp:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xp:o=t,l=2*n-e;break;case yp:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*x+.5*p,y=d*m-d*x;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+M*o[c+R]+v*o[l+R]+y*o[u+R];return r}},_f=class extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Mf=class extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$a(e,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$a(t.times,Array),values:$a(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case el:e=this.InterpolantFactoryMethodDiscrete;break;case Gu:e=this.InterpolantFactoryMethodLinear;break;case Th:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return el;case this.InterpolantFactoryMethodLinear:return Gu;case this.InterpolantFactoryMethodSmooth:return Th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Tw(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Th,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Gu;Is=class extends Gn{constructor(t,e,n){super(t,e,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=el;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;bf=class extends Gn{};bf.prototype.ValueTypeName="color";wf=class extends Gn{};wf.prototype.ValueTypeName="number";Ef=class extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sl=class extends Gn{InterpolantFactoryMethodLinear(t){return new Ef(this.times,this.values,this.getValueSize(),t)}};Sl.prototype.ValueTypeName="quaternion";Sl.prototype.InterpolantFactoryMethodSmooth=void 0;Ps=class extends Gn{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=el;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;Sf=class extends Gn{};Sf.prototype.ValueTypeName="vector";Tf=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Aw=new Tf,Af=class{constructor(t){this.manager=t!==void 0?t:Aw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Af.DEFAULT_MATERIAL_NAME="__DEFAULT";Tl=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Al=class extends Tl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},su=new Ot,Em=new T,Sm=new T,Rf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Em.setFromMatrixPosition(t.matrixWorld),e.position.copy(Em),Sm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sm),e.updateMatrixWorld(),su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(su)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Cf=class extends Rf{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rl=class extends Tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ts=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Zf="\\[\\]\\.:\\/",Rw=new RegExp("["+Zf+"]","g"),Jf="[^"+Zf+"]",Cw="[^"+Zf.replace("\\.","")+"]",Iw=/((?:WC+[\/:])*)/.source.replace("WC",Jf),Pw=/(WCOD+)?/.source.replace("WCOD",Cw),Dw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),Lw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),Uw=new RegExp("^"+Iw+Pw+Dw+Lw+"$"),Nw=["material","materials","bones","map"],If=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rw,"")}static parseTrackName(t){let e=Uw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=If;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];q2=new Float32Array(1),Am=new Ot,es=class{constructor(t,e,n=0,s=1/0){this.ray=new As(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Am.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(t,e=!0,n=[]){return Pf(t,this,n,e),n.sort(Rm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pf(t[s],this,n,e);return n.sort(Rm),n}};Di=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ar=class extends cf{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Pe;r.setIndex(new ae(n,1)),r.setAttribute("position",new me(s,3)),super(r,new pl({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},Cl=class extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df)});function jw(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=String.fromCharCode(i[0],i[1],i[2],i[3]);if(e!=="BXC1")throw new Error(`bad chunk magic ${JSON.stringify(e)}`);let n={version:t.getUint16(4,!0),flags:t.getUint16(6,!0),cx:t.getInt32(8,!0),cy:t.getInt32(12,!0),brickCount:t.getUint32(16,!0),minK:t.getUint16(20,!0),maxK:t.getUint16(22,!0),bodyBytes:t.getUint32(24,!0)};if(n.version!==1)throw new Error(`unsupported chunk version ${n.version}`);return n}async function Kw(i){let t=new Blob([i]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(t).arrayBuffer())}function ed(i,t,e="body"){if(i.byteLength!==t*12)throw new Error(`${e}: body ${i.byteLength} B, expected ${t*12}`);let n=new DataView(i.buffer,i.byteOffset,i.byteLength),s={i:new Uint8Array(t),j:new Uint8Array(t),k:new Uint16Array(t),type:new Uint8Array(t),color:new Uint8Array(t),rotFlags:new Uint8Array(t),feature:new Uint32Array(t)};for(let r=0,o=0;r<t;r++,o+=12)s.i[r]=i[o],s.j[r]=i[o+1],s.k[r]=n.getUint16(o+2,!0),s.type[r]=i[o+4],s.color[r]=i[o+5],s.rotFlags[r]=i[o+6],s.feature[r]=n.getUint32(o+8,!0);return s}async function Uo(i,t,e,n){let s=i.subarray(t,t+e);if(s.byteLength!==e)throw new Error(`truncated body: ${s.byteLength} of ${e} B`);return n&1?Kw(s):s}async function Fl(i){let t=jw(i),e=await Uo(i,32,t.bodyBytes,t.flags);return{header:t,records:ed(e,t.brickCount,`chunk ${t.cx},${t.cy}`)}}var No=Nt(()=>{});function i0(i){let t=Zw[String(i).toUpperCase()];if(t===void 0)throw new Error(`unknown facing "${i}" (use N, E, S or W)`);return t}function Lr(i,t,e){return e&1?[t,i]:[i,t]}function s0(i,t,e,n,s){switch(e&3){case 0:return[n,s];case 1:return[s,i-1-n];case 2:return[i-1-n,t-1-s];default:return[t-1-s,n]}}function Bl(i){return[[0,1],[1,0],[0,-1],[-1,0]][i&3]}function r0(i){return-(i&3)*Math.PI/2}var Zw,Dr,Ls=Nt(()=>{Zw=Object.freeze({N:0,E:1,S:2,W:3}),Dr=Object.freeze(["N","E","S","W"])});function a0(i){let t=[];if(i.studs==="all")for(let e=0;e<i.d;e++)for(let n=0;n<i.w;n++)t.push([n,e]);else if(i.studs==="backRows")for(let e=0;e<(i.studRows??1);e++)for(let n=0;n<i.w;n++)t.push([n,e]);return t}function zl(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function l0(i){let t=new Yn(i);return await t.decodeChunks(i.chunks||{}),t}var Xn,li,Ur,Us,o0,an,Jw,Yn,wn=Nt(()=>{No();Ls();Xn=3,li=4,Ur=8,Us=(i,t)=>Lr(i.w,i.d,t),o0=(i,t,e,n)=>s0(i.w,i.d,t,e,n);an=(i,t,e)=>i+t*4096+e*16777216;Jw=[["I",Int32Array],["J",Int32Array],["K",Int32Array],["type",Uint8Array],["color",Uint8Array],["rotFlags",Uint8Array],["feature",Uint32Array]],Yn=class i{constructor(t){this.manifest=t.manifest||{},this.palette=new Map(t.palette.entries.map(e=>[e.idx,e])),this.types=new Map(t.catalogue.types.map(e=>[e.id,e])),this.features=new Map((t.features?.features||[]).map(e=>[e.id,e])),this.chunkStuds=this.manifest.chunkStuds||64,this.studM=this.manifest.studM||.5,this.plateM=this.manifest.plateM||.2,this.count=0}static fromRecords(t,e){let n=new i(t);return n.allocate(e.length),e.forEach((s,r)=>{n.I[r]=s.I,n.J[r]=s.J,n.K[r]=s.K,n.type[r]=s.type,n.color[r]=s.color,n.rotFlags[r]=(s.rot||0)&Xn|(s.flags||0),n.feature[r]=s.feature||0}),n.finish(),n}allocate(t){for(let[e,n]of Jw)this[e]=new n(t);this.count=t}async decodeChunks(t){let e=[];for(let s of Object.values(t))e.push(await Fl(zl(s)));this.allocate(e.reduce((s,r)=>s+r.header.brickCount,0));let n=0;for(let{header:s,records:r}of e){let o=s.cx*this.chunkStuds,a=s.cy*this.chunkStuds;for(let l=0;l<s.brickCount;l++,n++)this.I[n]=o+r.i[l],this.J[n]=a+r.j[l],this.K[n]=r.k[l],this.type[n]=r.type[l],this.color[n]=r.color[l],this.rotFlags[n]=r.rotFlags[l],this.feature[n]=r.feature[l]}this.chunkCount=e.length,this.finish()}finish(){this.computeBounds()}get cells(){return this._cells||this.buildCells(),this._cells}get tops(){return this._tops||this.buildCells(),this._tops}typeOf(t){return this.types.get(this.type[t])}rot(t){return this.rotFlags[t]&Xn}extentOf(t){return Us(this.typeOf(t),this.rot(t))}buildCells(){let t=new Map,e=new Map;for(let n=0;n<this.count;n++){let s=this.typeOf(n);if(!s)continue;let[r,o]=this.extentOf(n),a=this.K[n]+s.h;for(let l=0;l<o;l++)for(let c=0;c<r;c++){let h=an(this.I[n]+c,this.J[n]+l,0);e.get(h)>=a||e.set(h,a);for(let u=0;u<s.h;u++)t.set(h+an(0,0,this.K[n]+u),n)}}this._cells=t,this._tops=e}brickAt(t,e,n){let s=this.cells.get(an(t,e,n));return s===void 0?-1:s}occupied(t,e,n){return this.cells.has(an(t,e,n))}topK(t,e){return this.tops.get(an(t,e,0))??this.bounds.K0}computeBounds(){let t={I0:1/0,J0:1/0,K0:1/0,I1:-1/0,J1:-1/0,K1:-1/0},e=new Map;for(let r=0;r<this.count;r++){let o=this.typeOf(r);if(!o)continue;let[a,l]=this.extentOf(r);t.I0=Math.min(t.I0,this.I[r]),t.I1=Math.max(t.I1,this.I[r]+a),t.J0=Math.min(t.J0,this.J[r]),t.J1=Math.max(t.J1,this.J[r]+l),t.K0=Math.min(t.K0,this.K[r]),t.K1=Math.max(t.K1,this.K[r]+o.h);let c=this.K[r]+o.h;e.set(c,(e.get(c)||0)+a*l)}let n=t.K0,s=-1;for(let[r,o]of e)o>s&&(n=r,s=o);this.bounds=t,this.groundK=n}}});function Qw(i){return()=>{i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function c0(i=128,t=24){let e=Qw(7),n=[];for(let o=0;o<t;o++){let a=Math.round((e()*2-1)*9),l=Math.round((e()*2-1)*9);if(!a&&!l)continue;let c=1/Math.hypot(a,l);n.push({kx:a,ky:l,amp:c,ph:e()*Math.PI*2})}let s=new Uint8Array(i*i*4);for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=0,c=0;for(let{kx:u,ky:f,amp:d,ph:p}of n){let x=Math.cos((u*a+f*o)/i*Math.PI*2+p)*d;l+=x*u,c+=x*f}let h=(o*i+a)*4;s[h]=Math.max(0,Math.min(255,128+l*9)),s[h+1]=Math.max(0,Math.min(255,128+c*9)),s[h+2]=255,s[h+3]=255}let r=new Ci(s,i,i,on);return r.wrapS=r.wrapT=bn,r.magFilter=In,r.minFilter=wi,r.generateMipmaps=!0,r.needsUpdate=!0,r}function nd(i,t,e=.35){let n={uTime:{value:0},uRipple:{value:t},uRippleStrength:{value:e}};return i.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWaterXZ;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 waterP = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          waterP = instanceMatrix * waterP;
        #endif
        vWaterXZ = (modelMatrix * waterP).xz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vWaterXZ;
        uniform float uTime;
        uniform float uRippleStrength;
        uniform sampler2D uRipple;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec2 a = texture2D(uRipple, vWaterXZ * 0.11 + vec2(uTime * 0.012, uTime * 0.007)).xy * 2.0 - 1.0;
          vec2 b = texture2D(uRipple, vWaterXZ * 0.29 + vec2(-uTime * 0.021, uTime * 0.016)).xy * 2.0 - 1.0;
          vec2 s = (a + b * 0.6) * uRippleStrength;
          vec3 nView = normalize((viewMatrix * vec4(-s.x, 1.0, -s.y, 0.0)).xyz);
          vec3 upView = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
          float upness = smoothstep(0.7, 0.95, dot(normal, upView));
          normal = normalize(mix(normal, nView, upness));
        }`)},i.customProgramCacheKey=()=>"water-ripples",n}var h0=Nt(()=>{Xt()});function ns(i){let t=i?.material||"solid";return t==="trans"&&/^water/.test(i.name||"")?"water":["glass","trans","metal","emissive"].includes(t)?t:"solid"}function Hl(i){let t=ns(i);return t==="emissive"?`emissive:${i.idx}`:t}function Vl(i){return i==="water"||i==="trans"?i:"opaque"}function Gl(i){return i==="glass"?id.glass:i==="metal"?id.metal:id.plastic}var id,Oo=Nt(()=>{id=Object.freeze({plastic:0,metal:128,glass:255})});function Nr(i={}){return new Sr({color:16777215,roughness:.35,metalness:0,clearcoat:.3,clearcoatRoughness:.3,specularIntensity:.6,...i})}function u0(i={}){let t=Nr({...i,roughness:.04,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.6,specularIntensity:1,emissive:16777215,emissiveIntensity:0});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aGlow;
varying vec3 vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vGlow;`)},t.customProgramCacheKey=()=>"window-glass",t}var ci,ko=Nt(()=>{Xt();h0();Oo();ci=class{constructor({clippingPlanes:t=null}={}){if(this.solid=Nr(),this.glass=u0(),this.trans=Nr({roughness:.06,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.75,envMapIntensity:1.6,depthWrite:!1}),this.water=Nr({roughness:.06,clearcoat:0,specularIntensity:1,ior:1.33,transparent:!0,opacity:.9,envMapIntensity:2}),this.waterUniforms=nd(this.water,c0(),.6),this.metal=Nr({metalness:.8,roughness:.28,clearcoat:.2,envMapIntensity:1.4}),this.emissive=new Map,this.far=new Map,this.clippingPlanes=t,t)for(let e of this.all())e.clippingPlanes=t;this.night=0}all(){return[this.solid,this.glass,this.trans,this.water,this.metal,...this.emissive.values()]}classOf(t){return ns(t)}forEntry(t){let e=this.classOf(t);if(e==="emissive"){let n=`emissive:${t.idx}`;if(!this.emissive.has(n)){let s=Nr({emissive:new ft(t.srgb),emissiveIntensity:.8,roughness:.2});this.clippingPlanes&&(s.clippingPlanes=this.clippingPlanes),this.emissive.set(n,s)}return{key:n,material:this.emissive.get(n),cls:e}}return{key:e,material:this[e],cls:e}}farFor(t){if(this.far.has(t))return this.far.get(t);let e,n=s=>new oi({vertexColors:!0,roughness:.38,metalness:0,...s});if(t==="solid")e=n({});else if(t==="metal")e=n({metalness:.8,roughness:.28,envMapIntensity:1.4});else if(t==="glass")e=u0({vertexColors:!0});else if(t==="trans")e=this.trans.clone();else if(t==="water"){e=this.water.clone();let s=nd(e,this.waterUniforms.uRipple.value,.6);s.uTime=this.waterUniforms.uTime}else t.startsWith("emissive:")?e=n({emissive:this.emissive.get(t).emissive.clone(),roughness:.2}):e=n({});return e.vertexColors=!0,this.clippingPlanes&&(e.clippingPlanes=this.clippingPlanes),this.far.set(t,e),this.setNight(this.night),e}cityFar(t){if(t!=="opaque")return this.farFor(t);if(this.cityOpaque)return this.cityOpaque;let e=new oi({vertexColors:!0,roughness:.38,metalness:0}),n={value:0};return e.onBeforeCompile=s=>{s.uniforms.uGlow=n,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aExtra;
varying vec4 vExtra;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vExtra = aExtra;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vExtra;
uniform float uGlow;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = vExtra.a > 0.75 ? 0.06 : (vExtra.a > 0.25 ? 0.28 : roughnessFactor);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = (vExtra.a > 0.25 && vExtra.a < 0.75) ? 0.8 : metalnessFactor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vExtra.rgb * 2.0 * uGlow;`)},e.customProgramCacheKey=()=>"city-far-opaque",e.userData.uGlow=n,this.cityOpaque=e,this.setNight(this.night),e}setNight(t){this.night=t,this.cityOpaque&&(this.cityOpaque.userData.uGlow.value=t*1.6);for(let e of this.emissive.values())e.emissiveIntensity=.8+t*3;for(let[e,n]of this.far)e.startsWith("emissive:")&&(n.emissiveIntensity=.8+t*3);for(let e of[this.glass,this.far.get("glass")])e&&(e.emissiveIntensity=t*1.6,e.envMapIntensity=1.6*(1-.6*t))}update(t){this.waterUniforms.uTime.value=t}}});function Dn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Fo.copy(t),Fo[n]=0,Fo.normalize();let c=.5*o/(o+a),h=1-Fo.angleTo(i)/l;return Math.sign(Fo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Fo,Or,sd=Nt(()=>{Xt();Fo=new T;Or=class extends Vn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new T,l=new T,c=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,p=new T,x=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:p.set(1,0,0),f[g+0]=Dn(p,l,"z","y",r,n),f[g+1]=1-Dn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),f[g+0]=1-Dn(p,l,"z","y",r,n),f[g+1]=1-Dn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),f[g+0]=1-Dn(p,l,"x","z",r,t),f[g+1]=Dn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),f[g+0]=1-Dn(p,l,"x","z",r,t),f[g+1]=1-Dn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),f[g+0]=1-Dn(p,l,"x","y",r,t),f[g+1]=1-Dn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),f[g+0]=Dn(p,l,"x","y",r,t),f[g+1]=1-Dn(p,l,"y","x",r,e);break}}}});function Wl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pe,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=f0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=f0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function f0(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var rd=Nt(()=>{Xt()});function tn(i){let t=i.map(e=>{let n=e.index?e.toNonIndexed():e;for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);return n.attributes.uv||n.setAttribute("uv",new ae(new Float32Array(n.attributes.position.count*2),2)),n});return Wl(t,!1)}function d0(i,t){let e=Xl;Xl=i;try{return t()}finally{Xl=e}}function Gt(i,t,e,n,s,r,o=0,a=Xl){let l=t-i,c=n-e,h=r-s,u=Math.min(o,l/2-1e-4,c/2-1e-4,h/2-1e-4),f=u>.002?new Or(l,c,h,a,u):new Vn(l,c,h);return f.translate((i+t)/2,(e+n)/2,(s+r)/2),f}function Bo(i,t,e,n=tE){return Gt(-i/2+xt,i/2-xt,xt,t-xt,-e/2+xt,e/2-xt,n)}function p0(i,t,e){return Gt(-i/2,i/2,0,t,-e/2,e/2,0)}function zo(i,t,e,n,s){let r=[];if(s){r.push(new j(0,0),new j(i-e-.002,0));for(let o=0;o<=3;o++){let a=Math.PI*1.5+o/3*Math.PI*.5;r.push(new j(i-e+Math.cos(a)*e,e+Math.sin(a)*e))}}else r.push(new j(i,-.004));for(let o=0;o<=3;o++){let a=o/3*Math.PI*.5;r.push(new j(i-e+Math.cos(a)*e,t-e+Math.sin(a)*e))}return r.push(new j(i-e-.002,t),new j(0,t)),new ri(r,n)}function eE(i,t){let e=i.length,n=[];for(let s=0;s<e;s++){let r=i[s],o=i[(s+1)%e],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);n.push({px:r[0]-l/c*t,py:r[1]+a/c*t,dx:a,dy:l})}return n.map((s,r)=>{let o=n[(r+e-1)%e],a=o.dx*s.dy-o.dy*s.dx,l=((s.px-o.px)*s.dy-(s.py-o.py)*s.dx)/a;return new j(o.px+o.dx*l,o.py+o.dy*l)})}function ad(i,t,e){let n=xt+od,s=new Er(eE(i,n)),r=t-2*n,o=new Do(s,{depth:r,bevelEnabled:!0,bevelThickness:od,bevelSize:od,bevelSegments:2,curveSegments:1});return o.applyMatrix4(new Ot().set(0,0,1,-r/2,0,1,0,0,-1,0,0,e/2,0,0,0,1)),o}function Ho(i,t,e){let n=new Er(i.map(([r,o])=>new j(r,o))),s=new Do(n,{depth:e-t,bevelEnabled:!1,curveSegments:1});return s.translate(0,0,t),s}function is(i,t,e,n,s,r=10){let o=new Ji(e,e,s-n,r);return o.translate(i,(n+s)/2,t),o}var xt,tE,Xl,od,Yl=Nt(()=>{Xt();sd();rd();xt=.003,tE=.02;Xl=2;od=.012});function m0(i,t,e,n,s){let r=-s/2+cd;return Gt(i,t,e,n,r-ql/2,r+ql/2)}function g0(i,t,e){let n=-e/2+xt,s=e/2-xt,r=.01;return[Gt(-i/2+xt,-i/2+be,xt,t-xt,n,s,r),Gt(i/2-be,i/2-xt,xt,t-xt,n,s,r),Gt(-i/2+be,i/2-be,t-be,t-xt,n,s,r),Gt(-i/2+be,i/2-be,xt,be,n,s,r)]}function ld(i,t,e,n,s,r,o,a=nE){let l=[];for(let c=1;c<s;c++){let h=i+(t-i)*c/s;l.push(Gt(h-a/2,h+a/2,e,n,o-.025,o))}for(let c=1;c<r;c++){let h=e+(n-e)*c/r;l.push(Gt(i,t,h-a/2,h+a/2,o-.025,o))}return l}function iE(i,t,e){let n=-e/2+cd-ql/2,s=t*.78,r=.026,o=-i/2+be,a=i/2-be,l=[...g0(i,t,e),Gt(-r,r,be,t-be,n-.045,n),Gt(o,a,s-.03,s+.03,n-.05,n)];for(let[c,h]of[[o,-r],[r,a]])l.push(...ld(c,h,be,s-.03,2,3,n)),l.push(...ld(c,h,s+.03,t-be,2,1,n)),l.push(Gt(c,h,(be+s)/2-.018,(be+s)/2+.018,n-.035,n));return{body:tn(l),glass:m0(o,a,be,t-be,e)}}function sE(i,t,e){let n=-e/2+cd-ql/2,s=t*.72,r=.028,o=-i/2+be,a=i/2-be,l=[...g0(i,t,e),Gt(-r,r,be,t-be,n-.05,n),Gt(o,a,s-.035,s+.035,n-.06,n)],c=t-be,h=s+(c-s)*.45;for(let[u,f]of[[o,-r],[r,a]]){l.push(...ld(u,f,be,s-.035,1,3,n));let d=(f-u)/2-.015,p=(u+f)/2,x=new Qi(d,.011,4,16,Math.PI);x.translate(p,Math.max(s+.05,c-d-.03),n-.012),l.push(x);let m=[.034,.05,.03,.044,.038],g=m.reduce((v,y)=>v+y+.012,-.012),M=p-g/2;for(let v of m)l.push(Gt(M,M+v,h-.04,h+.04,n-.016,n-.004)),M+=v+.012}return{body:tn(l),glass:m0(o,a,be,t-be,e)}}function Ns(i,t,e,n,s,r=!1,o=Math.PI*2){let a=new Qi(n,s,3,o<6?7:12,o);return r&&a.rotateY(Math.PI/2),a.translate(i,t,e),a}function rE(i,t,e,n,s){let r=n-e,o=(c,h)=>new j(c,h),a=[o(0,0),o(s*.9,0),o(s*.9,r*.06),o(s*.55,r*.12),o(s,r*.45),o(s*.45,r*.8),o(s*.7,r*.9),o(s*.5,r),o(0,r)],l=new ri(a,8);return l.translate(i,e,t),l}function oE(i,t,e){let n=-e/2+.05,s=i/2-.05,r=t-.05,o=.12,a=[Gt(-i/2+xt,i/2-xt,xt,.06,-e/2+xt,e/2-xt,.01),Gt(-s,s,r-.04,r+.02,n-.03,n+.03,.01),Gt(-s,s,o-.03,o,n-.015,n+.015),Gt(-s,s,r-.14,r-.12,n-.012,n+.012)],l=(o+r-.14)/2,c=Math.min(.085,(r-.14-o)/2-.02),h=Math.max(3,Math.round(2*s/.22));for(let u=0;u<h;u++){let f=-s+(u+.5)*2*s/h;a.push(Ns(f,l,n,c,.011)),u%2===0&&a.push(Ns(f,l,n,c*.45,.009)),a.push(Ns(f,r-.13+0,n,.045,.008,!1,Math.PI)),a.push(is(f-s/h,n,.009,o,r-.14,5))}a.push(is(s-.001,n,.009,o,r-.14,5));for(let u of[-1,1]){let f=u*s;a.push(rE(f,n,.06,r+.06,.045)),a.push(Gt(f-.02,f+.02,r-.04,r+.01,n,e/2-xt,.008)),a.push(Gt(f-.012,f+.012,o-.03,o,n,e/2-xt));let d=(n+e/2)/2;a.push(Ns(f,l,d,Math.min(c,(e/2-n)/2-.03),.01,!0)),a.push(is(f,e/2-.03,.012,o,r,5))}return{body:tn(a)}}function aE(i,t,e){let n=-e/2+.06,s=i/2-.04,r=t-.04,o=[Gt(-s,s,r-.035,r+.01,n-.025,n+.025,.008),Gt(-s,s,.06,.09,n-.015,n+.015)];for(let a=-s;a<=s+1e-6;a+=2*s/10)o.push(is(a,n,.008,.06,r-.03,5));for(let a of[-1,1])o.push(Gt(a*s-.015,a*s+.015,r-.035,r+.01,n,e/2-xt)),o.push(Gt(a*s-.015,a*s+.015,xt,r,e/2-.05,e/2-xt));return{body:tn(o)}}function lE(i,t,e){let s=-e/2+xt,r=e/2-xt,o=.04,a=[Gt(-i/2+xt,i/2-xt,xt,.08,s,r,.01)];a.push(Ho([[-i/2+o,.08],[i/2-o,.08],[0,t-xt]],s+.05,r));let l=.05,c=(t-xt-.08)/(i/2-o),h=l*Math.sqrt(1+c*c);for(let u of[-1,1]){let f=u*(i/2-xt),d=0,p=.08-.01,x=t-xt;a.push(Ho(u<0?[[f,p],[d,x],[d,x-h],[f+l,p-0]]:[[f-l,p],[d,x-h],[d,x],[f,p]],s,s+.06))}return{body:tn(a)}}function ss(i,t,e=0,n=0,s=0){let r=new ri(i.map(([o,a])=>new j(o,a)),t);return r.translate(e,n,s),r}function cE(i,t,e,n){e.push(ss([[0,0],[.05,0],[.09,.05],[.12,.06],[0,.06]],8,i,t));for(let o of[-1,1])for(let a of[-1,1])e.push(Gt(i+o*.11-.012,i+o*.11+.012,t+.06,t+.06+.32,a*.11-.012,a*.11+.012));n.push(Gt(i-.11+.01,i+.11-.01,t+.06,t+.06+.32,-.11+.01,.11-.01)),e.push(ss([[0,0],[.16,0],[.16,.025],[.05,.14],[.02,.17],[0,.17]],8,i,t+.06+.32)),e.push(ss([[0,0],[.025,.01],[.03,.04],[.012,.08],[0,.09]],8,i,t+.23+.32))}function hE(i,t){let e=[],n=[],s=t-.92,r=Math.min(i/2-.16,.55);e.push(ss([[0,0],[.15,0],[.15,.08],[.12,.13],[.1,.5],[.075,.56],[0,.56]],12)),e.push(is(0,0,.052,.55,s+.12,10)),e.push(ss([[0,0],[.075,0],[.075,.04],[0,.04]],10,0,1.25)),e.push(ss([[0,0],[.07,.02],[.05,.08],[0,.1]],10,0,s-.08)),e.push(Gt(-r,r,s,s+.04,-.022,.022));for(let o of[-1,1])e.push(Ns(o*r*.48,s-.1,0,.1,.012,!1,Math.PI)),e.push(Ns(o*r*.8,s-.05,0,.05,.01)),cE(o*r,s+.04,e,n);return e.push(ss([[0,0],[.04,0],[.05,.08],[.02,.2],[0,.24]],8,0,s+.12)),{body:tn(e),glass:tn(n)}}function uE(i,t){let e=Math.min(i,.5)/2,n=[ss([[0,0],[e*.72,0],[e*.72,.05],[e*.52,.11],[e*.46,.15],[e*.42,t*.7],[e*.5,t*.73],[e*.5,t*.79],[e*.4,t*.81],[e*.4,t*.86],[e*.3,t*.9],[0,t*.9]],8)];n.push(new Pi(e*.24,10,6).translate(0,t*.9+e*.2,0));for(let s of[-1,1])n.push(Ns(s*e*.58,t*.76,0,.032,.01,!0));return{body:tn(n)}}function fE(i,t){let e=i/2+.11,n=.76*1-.4,s=.24,r=22,o=[];for(let a=0;a<=r;a++){let l=-e+2*e*a/r,c=l/e,h=n-s*(1-c*c),u=2*s*c/e,f=new Qi(.036,.009,3,6);f.scale(1.45,1,1),a%2&&f.rotateX(Math.PI/2),f.rotateZ(Math.atan(u)),f.translate(l,Math.min(t-.03,Math.max(.03,h)),0),o.push(f)}return{body:tn(o)}}function dE(i,t,e){let n=-e/2+xt,s=e/2-xt,r=.06,o=.05,a=[Gt(-i/2+xt,i/2-xt,xt,t-xt,n+o,s,.01),Gt(-i/2+xt,-i/2+r,xt,t-xt,n,n+o+.01),Gt(i/2-r,i/2-xt,xt,t-xt,n,n+o+.01),Gt(-i/2+r,i/2-r,t-r,t-xt,n,n+o+.01),Gt(-i/2+r,i/2-r,xt,r,n,n+o+.01)];for(let l=-i/2+r+.04;l<i/2-r-.02;l+=.055)a.push(Gt(l-.012,l+.012,r,t-r,n+.012,n+o+.01));return{body:tn(a)}}function y0(i,t,e){let n=x0[i.name];return n?n(i.w*t,i.h*e,i.d*t):null}var be,cd,ql,nE,x0,_A,v0=Nt(()=>{Xt();Yl();be=.06,cd=.1,ql=.012,nE=.022;x0={window_1x2x4:iE,shop_window_1x2x4:sE,balcony_2x4:oE,railing_1x2:aE,pediment_1x4:lE,lamp_double_1x3:(i,t)=>hE(i,t),bollard_1x1:(i,t)=>uE(i,t),chain_1x4:(i,t)=>fE(i,t),vent_1x2:dE};_A=Object.keys(x0)});function pE(i,t,e,n,s){let r=n*s/2,o=Math.max(.1,t/6),a=t-o,l=Math.min(r,a/2),c=a-l,h=-i/2+xt,u=i/2-xt,f=[[h,xt],[-r,xt],[-r,c]];for(let d=1;d<24;d++){let p=Math.PI-d/24*Math.PI;f.push([r*Math.cos(p),c+l*Math.sin(p)])}return f.push([r,c],[r,xt],[u,xt],[u,t-xt],[h,t-xt]),{body:Ho(f,-e/2+xt,e/2-xt)}}function M0(i,t,e,n){let s=-e/2+xt,r=e/2-xt,o=.01,a=[Gt(-i/2+xt,-i/2+Te,xt,t-xt,s,r,o),Gt(i/2-Te,i/2-xt,xt,t-xt,s,r,o),Gt(-i/2+Te,i/2-Te,t-Te,t-xt,s,r,o)];return n&&a.push(Gt(-i/2+Te,i/2-Te,xt,Te,s,r,o)),a}function b0(i,t,e,n,s){let r=-s/2+_0;return Gt(i,t,e,n,r-hd/2,r+hd/2)}function mE(i,t,e){let n=-e/2+_0-hd/2,s=Te+(t-2*Te)*(2/3);return{body:tn([...M0(i,t,e,!0),Gt(-.02,.02,Te,t-Te,n-.03,n),Gt(-i/2+Te,i/2-Te,s-.02,s+.02,n-.03,n)]),glass:b0(-i/2+Te,i/2-Te,Te,t-Te,e)}}function gE(i,t,e,n){let s=t-2*n,r=-e/2+xt,o=e/2-xt,a=-i/2+Te,l=i/2-Te,c=l-a,h=-e/2+.06,u=[...M0(i,t,e,!1),Gt(a,l,s,s+Te,r,o,.01)];u.push(Gt(a,l,xt,s,h,h+.05));let f=.06,d=.06,p=(c-2*f-d)/2,x=s-2*f-d,m=[[f,f+x*.42],[f+x*.42+d,s-f]];for(let[g,M]of m)for(let v of[a+f,a+f+p+d])u.push(Gt(v,v+p,g,M,h-.018,h+.01,.008));return u.push(Gt(l-.1,l-.07,s*.48,s*.52,h-.04,h)),u.push(Gt(-.015,.015,s+Te,t-Te,h+.02,h+.04)),{body:tn(u),glass:b0(a,l,s+Te,t-Te,e)}}function xE(i,t,e){let n=-e/2+xt,s=e/2-xt,r=.1,o=[Gt(-i/2+xt,i/2-xt,t-r,t-xt,n,s,.015),Gt(-i/2+xt,i/2-xt,xt,r,n,s,.015)];for(let a=-i/2+.125;a<i/2;a+=.25)o.push(is(a,0,.04,r-.01,t-r+.01));return{body:tn(o)}}function yE(i,t,e){let o=-e/2+xt,a=(e-2*xt-3*.04)/4,l=[Bo(i,t-.04,e,.015)];for(let c=0;c<4;c++){let h=o+c*(a+.04);l.push(Gt(-i/2+xt,i/2-xt,t-.04-.01,t-xt,h,h+a,.008))}return{body:tn(l)}}function w0(i,t,e){let n=y0(i,t,e);if(n)return n;let s=i.w*t,r=i.d*t,o=i.h*e;switch(i.kind){case"arch":return pE(s,o,r,i.w-2,t);case"window":return mE(s,o,r);case"door":return gE(s,o,r,e);case"fence":return xE(s,o,r);case"round_tile":return{body:zo(Math.min(s,r)/2-.012,o-xt,.02,24,!0)};case"jumper":return{body:Bo(s,o,r)};case"tile_grille":return yE(s,o,r);default:return null}}var Te,_0,hd,E0=Nt(()=>{Yl();v0();Te=.06,_0=.1,hd=.012});function T0(i,t){return ud.has(i)||ud.set(i,t()),ud.get(i)}function fd(i,t,e){let n=i.d*t,s=i.h*e,r=S0*e,o=(i.studRows??1)*t,a=[[0,0],[n,0],[n,r],[o,s]];return o>0&&a.push([0,s]),a}function dd(i,t,e){let n=i.d*t,s=i.h*e,r=S0*e,o=.02;return[[0,0],[n,0],[n,r],[n/2+o,s],[n/2-o,s],[0,r]]}function A0(i,t,e,n=!1,s=!1){let r=["brick","plate","tile"].includes(i.kind),o=`${i.id}:${n&&r?"seamless":"normal"}${s?":lite":""}`;return T0(o,()=>d0(s?1:2,()=>{let a=i.w*t,l=i.d*t,c=i.h*e;if(n&&r)return{body:p0(a,c,l)};let h=w0(i,t,e);if(h)return h;switch(i.kind){case"slope":return{body:ad(fd(i,t,e),a,l)};case"slope_double":return{body:ad(dd(i,t,e),a,l)};case"round":return{body:zo(Math.min(a,l)/2-.012,c-xt,.02,24,!0)};default:return{body:Bo(a,c,l)}}}))}function R0(i=!1){return T0(i?"stud:lite":"stud",()=>zo(vE,_E,.018,i?12:20,!1))}var vE,_E,S0,ud,pd=Nt(()=>{Yl();E0();vE=.15,_E=.09,S0=.25,ud=new Map});function Li(i,t,e,n,s,r=new T){return r.set(i*n,e*s,-t*n)}function $l(i,t,e,n,s,r,o,a,l=new Ot){let[c,h]=Lr(n,s,r),u=Li(i+c/2,t+h/2,e,o,a),f=new Ie().setFromAxisAngle(ME,r0(r));return l.compose(u,f,bE)}var ME,bE,Vo=Nt(()=>{Xt();Ls();ME=new T(0,1,0),bE=new T(1,1,1)});function Go(i,t,e){let n=Math.imul(i|0,2376512323)^Math.imul(t|0,3625334849)^Math.imul(e|0,3407524639);return n=Math.imul(n^n>>>15,739982445),n=Math.imul(n^n>>>12,695872825),n^=n>>>15,(n>>>0)/4294967296}var jl=Nt(()=>{});function ln(i,t,e,n,s,r=new ft){if(r.set(i?.srgb||"#ff00ff"),!s){let o=1+(Go(t,e,n)*2-1)*wE;r.convertLinearToSRGB().multiplyScalar(o).convertSRGBToLinear()}return r}var wE,Kl=Nt(()=>{Xt();jl();wE=.03});function Wo(i,t=()=>2){let{I0:e,J0:n,K0:s,I1:r,J1:o,K1:a}=i.bounds,l=e-1,c=n-1,h=s-1,u=r-e+2,f=o-n+2,d=a-s+2;if(!(u>0)||u*f*d>96e6)return null;let p=new Uint8Array(u*f*d),x=u*f,m=new Int32Array(x),g=new Int32Array(x).fill(d);for(let v=0;v<i.count;v++){let y=i.typeOf(v);if(!y)continue;let[R,w]=i.extentOf(v),S=t(v),I=i.I[v]-l,b=i.J[v]-c,_=i.K[v]-h;for(let C=0;C<w;C++){let L=I+u*(b+C);for(let U=0;U<y.h;U++)p.fill(S,L+x*(_+U),L+x*(_+U)+R);for(let U=0;U<R;U++)m[L+U]<_+y.h&&(m[L+U]=_+y.h),g[L+U]>_&&(g[L+U]=_)}}EE(p,m,g,u,f,d);let M=(v,y,R)=>v>=0&&y>=0&&R>=0&&v<u&&y<f&&R<d;return{code(v,y,R){let w=v-l,S=y-c,I=R-h;return M(w,S,I)?p[w+u*(S+f*I)]:1},exterior(v,y,R){let w=v-l,S=y-c,I=R-h;return!M(w,S,I)||p[w+u*(S+f*I)]===1}}}function EE(i,t,e,n,s,r){let o=n*s,a=65536,l=new Int32Array(a),c=0,h=0,u=d=>{if(h===a){let p=new Int32Array(a*2);for(let x=0;x<h;x++)p[x]=l[(c+x)%a];l=p,c=0,a*=2}l[(c+h++)%a]=d};for(let d=0;d<s;d++)for(let p=0;p<n;p++){let x=p+n*d,m=p===0||d===0||p===n-1||d===s-1;for(let M=m?0:t[x];M<r;M++)i[x+o*M]=1;if(m)continue;let g=Math.max(t[x-1],t[x+1],t[x-n],t[x+n]);for(let M=t[x];M<Math.min(g,r);M++)u(x+o*M)}let f=d=>{if(i[d]!==0)return;let p=d%o;if(e[p]<r&&d<p+o*e[p]){let x=(d-p)/o;if(x<t[p-1]&&x<t[p+1]&&x<t[p-n]&&x<t[p+n])return}i[d]=1,u(d)};for(;h;){let d=l[c];c=(c+1)%a,h--;let p=d%n,x=Math.floor(d/n)%s,m=Math.floor(d/o);p+1<n&&f(d+1),p>0&&f(d-1),x+1<s&&f(d+n),x>0&&f(d-n),m+1<r&&f(d+o),m>0&&f(d-o)}}function C0(i,t=Wo(i)){return t?t.exterior:()=>!0}var Zl=Nt(()=>{});function Ql(i,t){let e=new Map,n=s=>(e.has(s)||e.set(s,t(i.palette.get(s))),e.get(s));return s=>{if(!AE.has(i.typeOf(s)?.kind))return TE;let r=n(i.color[s]);return r==="trans"?L0:r==="water"?U0:D0}}function md(i,t){return i===0||i===D0||(t===L0||t===U0)&&i===t}function xn(i,t,e,n){let s=0,r=0,o=0;for(let c=0;c<i.length;c++){let[h,u,f]=i[c],[d,p,x]=i[(c+1)%i.length];s+=(u-p)*(f+x),r+=(f-x)*(h+d),o+=(h-d)*(u+p)}s*t+r*e+o*n<0&&i.reverse();let a=Math.hypot(s,r,o)||1,l=s*t+r*e+o*n<0?-1:1;return{pts:i,n:[s/a*l,r/a*l,o/a*l]}}function Ye(i,t,e,n,s,r,o="body"){let a=(l,c,h)=>[l,c,h];return[xn([a(t,e,s),a(t,n,s),a(t,n,r),a(t,e,r)],1,0,0),xn([a(i,e,s),a(i,e,r),a(i,n,r),a(i,n,s)],-1,0,0),xn([a(i,n,s),a(i,n,r),a(t,n,r),a(t,n,s)],0,1,0),xn([a(i,e,s),a(t,e,s),a(t,e,r),a(i,e,r)],0,-1,0),xn([a(i,e,r),a(t,e,r),a(t,n,r),a(i,n,r)],0,0,1),xn([a(i,e,s),a(i,n,s),a(t,n,s),a(t,e,s)],0,0,-1)].map(l=>({...l,part:o}))}function I0(i,t,e){let n=a=>e/2-a,s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length,o=[xn(i.map(([a,l])=>[t/2,l,n(a)]),1,0,0),xn(i.map(([a,l])=>[-t/2,l,n(a)]),-1,0,0)];for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length];if(Math.hypot(h-l,u-c)<1e-6)continue;let f=u-c,d=-(h-l);f*((l+h)/2-s)+d*((c+u)/2-r)<0&&(f=-f,d=-d),o.push(xn([[-t/2,c,n(l)],[t/2,c,n(l)],[t/2,u,n(h)],[-t/2,u,n(h)]],0,d,-f))}return o.map(a=>({...a,part:"body"}))}function P0(i,t,e,n,s){let r=-s/2-RE;return{...xn([[i,e,r],[t,e,r],[t,n,r],[i,n,r]],0,0,-1),part:"glass"}}function CE(i,t,e,n){let s=-e/2;switch(i){case"balcony_2x4":return[...Ye(-t/2,t/2,0,.06,-e/2,e/2),...Ye(-t/2,t/2,.06,n,s,s+.06),...Ye(-t/2,-t/2+.05,.06,n,s+.06,e/2),...Ye(t/2-.05,t/2,.06,n,s+.06,e/2)];case"railing_1x2":return Ye(-t/2,t/2,.05,n,s+.04,s+.09);case"pediment_1x4":return[...Ye(-t/2,t/2,0,.08,-e/2,e/2),...IE(t,e,n)];case"lamp_double_1x3":{let r=Math.min(t/2-.16,.55),o=n-.88;return[...Ye(-.07,.07,0,o+.1,-.07,.07),...Ye(-r,r,o,o+.04,-.03,.03),...Ye(-r-.12,-r+.12,o+.04,o+.62,-.12,.12),...Ye(r-.12,r+.12,o+.04,o+.62,-.12,.12)]}case"bollard_1x1":return Ye(-.08,.08,0,n*.95,-.08,.08);case"chain_1x4":return Ye(-t/2,t/2,.12,.3,-.02,.02);default:return null}}function IE(i,t,e){let s=-t/2,r=t/2,o=[-i/2,.08],a=[i/2,.08],l=[0,e],c=(h,u)=>[h[0],h[1],u];return[xn([c(o,s),c(a,s),c(l,s)],0,0,-1),xn([c(o,r),c(l,r),c(a,r)],0,0,1),xn([c(o,s),c(l,s),c(l,r),c(o,r)],-e,i/2,0),xn([c(a,s),c(a,r),c(l,r),c(l,s)],e,i/2,0)].map(h=>({...h,part:"body"}))}function PE(i,t,e){if(Jl.has(i.id))return Jl.get(i.id);let n=i.w*t,s=i.d*t,r=i.h*e,o=CE(i.name,n,s,r);if(o)return Jl.set(i.id,o),o;switch(i.kind){case"slope":o=I0(fd(i,t,e),n,s);break;case"slope_double":o=I0(dd(i,t,e),n,s);break;case"window":o=[...Ye(-n/2,n/2,0,r,-s/2,s/2),P0(-n/2+rs,n/2-rs,rs,r-rs,s)];break;case"door":o=[...Ye(-n/2,n/2,0,r,-s/2,s/2),P0(-n/2+rs,n/2-rs,r-2*e+rs,r-rs,s)];break;case"arch":{let a=(i.w-2)*t/2,l=r-Math.max(.1,r/6),c=Math.min(a,l/2),h=l-c*.25;o=[...Ye(-n/2,-a,0,r,-s/2,s/2),...Ye(a,n/2,0,r,-s/2,s/2),...Ye(-a,a,h,r,-s/2,s/2)];break}default:o=Ye(-n/2,n/2,0,r,-s/2,s/2)}return Jl.set(i.id,o),o}function xd(i){if(!i)return[0,0,0];let t=e=>Math.max(0,Math.min(255,Math.round(e*127.5)));return[t(i.r),t(i.g),t(i.b)]}function tc(i){let t=function(){this.array=null};for(let e of Object.values(i.attributes))e.onUpload(t);return i.index?.onUpload(t),i}function Xo(i){return i.frustumCulled=!1,i.onAfterRender=()=>{i.frustumCulled=!0,i.onAfterRender=()=>{}},i}function yd(i){let t=new Pe;return t.setAttribute("position",new ae(i.position,3)),t.setAttribute("normal",new ae(i.normal,3,!0)),t.setAttribute("color",new ae(i.color,3,!0)),i.glow&&t.setAttribute("aGlow",new ae(i.glow,3)),i.extra&&t.setAttribute("aExtra",new ae(i.extra,4,!0)),t.setIndex(new ae(i.index,1)),t.computeBoundingBox(),t.computeBoundingSphere(),t}function ec(i,t,{code:e,codeOf:n,style:s,glowKeys:r=new Set,extra:o=!1,raw:a=!1}){let l=t.length&&typeof t[0]!="number"?t:[t],c=i.studM,h=i.plateM,u=i.bounds.K0,f=new Map,d=new Ot,p=new T,x=[new T,new T,new T,new T,new T,new T,new T,new T],m=0,g=0,M=[],v=()=>M.push(new Map([...f].map(([b,_])=>[b,_.idx.length])));for(let b of l){v();for(let _ of b){let C=i.typeOf(_);if(!C)continue;let L=i.I[_],U=i.J[_],O=i.K[_],$=i.rot(_),[H,Z]=i.extentOf(_),V=n(_),rt=new Int8Array(6).fill(-1),dt=ut=>{if(rt[ut]>=0)return rt[ut]===1;let K=!0;if(ut===3&&O<=u)K=!0;else if(ut<=1){let F=ut===0?L+H:L-1;for(let ot=0;ot<C.h&&K;ot++)for(let k=0;k<Z&&K;k++)K=md(e(F,U+k,O+ot),V)}else if(ut<=3){let F=ut===2?O+C.h:O-1;for(let ot=0;ot<Z&&K;ot++)for(let k=0;k<H&&K;k++)K=md(e(L+k,U+ot,F),V)}else{let F=ut===4?U-1:U+Z;for(let ot=0;ot<C.h&&K;ot++)for(let k=0;k<H&&K;k++)K=md(e(L+k,F,O+ot),V)}return rt[ut]=K?1:0,K},gt=L*c,et=(L+H)*c,Et=O*h,X=(O+C.h)*h,at=-(U+Z)*c,St=-U*c;$l(L,U,O,C.w,C.d,$,c,h,d);let ht={};for(let ut of PE(C,c,h)){let K=ut.pts.length<=x.length?x.slice(0,ut.pts.length):ut.pts.map(()=>new T);ut.pts.forEach((Q,D)=>K[D].set(Q[0],Q[1],Q[2]).applyMatrix4(d)),p.set(ut.n[0],ut.n[1],ut.n[2]).transformDirection(d),m++;let F=-1,ot=(Q,D)=>K.every(yt=>Math.abs(yt.getComponent(Q)-D)<DE);if(p.x>.999&&ot(0,et)?F=0:p.x<-.999&&ot(0,gt)?F=1:p.y>.999&&ot(1,X)?F=2:p.y<-.999&&ot(1,Et)?F=3:p.z>.999&&ot(2,St)?F=4:p.z<-.999&&ot(2,at)&&(F=5),F>=0&&dt(F)){g++;continue}let k=ht[ut.part]||=s(_,ut.part);f.has(k.key)||f.set(k.key,new gd(r.has(k.key),o)),f.get(k.key).poly(K,p,k.color,k.glow,k.shine)}}}v();let y=new Map,R=new Map,w=new Map,S=0;for(let[b,_]of f){a?w.set(b,_.arrays()):y.set(b,_.geometry()),S+=_.idx.length/3;let C=L=>M[L].get(b)??0;R.set(b,l.map((L,U)=>({start:C(U),count:C(U+1)-C(U)})))}let I=l.map((b,_)=>[...f.keys()].reduce((C,L)=>C+((M[_+1].get(L)??0)-(M[_].get(L)??0))/3,0));return{geometries:y,arrays:w,ranges:R,triangles:S,faces:m,culled:g,segmentTriangles:I}}var D0,L0,U0,TE,AE,rs,RE,Jl,gd,DE,kr=Nt(()=>{Xt();Vo();pd();Zl();D0=2,L0=3,U0=4,TE=5,AE=new Set(["brick","plate","tile","jumper","tile_grille"]),rs=.06,RE=.004;Jl=new Map;gd=class{constructor(t,e=!1){Object.assign(this,{pos:[],nrm:[],col:[],glow:t&&!e?[]:null,ext:e?[]:null,idx:[],verts:0})}poly(t,e,n,s,r=0){let o=this.verts;for(let a of t)this.pos.push(a.x,a.y,a.z),this.nrm.push(Math.round(e.x*127),Math.round(e.y*127),Math.round(e.z*127)),this.col.push(Math.round(Math.min(1,n.r)*65535),Math.round(Math.min(1,n.g)*65535),Math.round(Math.min(1,n.b)*65535)),this.glow&&this.glow.push(s?s.r:0,s?s.g:0,s?s.b:0),this.ext&&this.ext.push(...xd(s),r);for(let a=1;a+1<t.length;a++)this.idx.push(o,o+a,o+a+1);this.verts+=t.length}arrays(){let t={position:new Float32Array(this.pos),normal:new Int8Array(this.nrm),color:new Uint16Array(this.col),index:this.verts>65535?new Uint32Array(this.idx):new Uint16Array(this.idx)};return this.glow&&(t.glow=new Float32Array(this.glow)),this.ext&&(t.extra=new Uint8Array(this.ext)),t}geometry(){return yd(this.arrays())}};DE=1e-4});function vd(i,t,e,n,s=new ft){let r=o=>Go(t+o*7919,e^i*2654435761,n+o*104729);return r(0)>=LE?s.setRGB(0,0,0):r(1)<.1?s.copy(OE).multiplyScalar(.35+r(2)*.35):s.copy(UE).lerp(NE,r(3)).multiplyScalar(.45+r(2)*.85)}function nc(i,t){let e=new Map,n=l=>{for(;e.get(l)!==l;){let c=e.get(e.get(l));e.set(l,c),l=c}return l},s=(l,c)=>{let h=n(l),u=n(c);h!==u&&e.set(Math.max(h,u),Math.min(h,u))},r=l=>l>=0&&t(l)&&!["window","door"].includes(i.typeOf(l)?.kind);for(let l=0;l<i.count;l++){let c=i.typeOf(l)?.kind;(c==="window"||c==="door"||r(l))&&e.set(l,l)}for(let l of e.keys()){if(!r(l))continue;let c=i.typeOf(l),[h,u]=i.extentOf(l);for(let f=0;f<c.h;f++)for(let d=0;d<u;d++)for(let p=0;p<h;p++){let x=i.I[l]+p,m=i.J[l]+d,g=i.K[l]+f;for(let[M,v,y]of[[1,0,0],[0,1,0],[0,0,1]]){let R=i.cells.get(an(x+M,m+v,g+y));R!==void 0&&R!==l&&r(R)&&s(l,R)}}}let o=new Map,a=new Map;for(let l of e.keys()){let c=n(l);a.has(c)||a.set(c,vd(i.feature[c],i.I[c],i.J[c],i.K[c])),o.set(l,a.get(c))}return o}var LE,UE,NE,OE,ic=Nt(()=>{Xt();jl();wn();LE=.6,UE=new ft("#ff9a3c"),NE=new ft("#ffe1ae"),OE=new ft("#7da6ff")});function Yo(i,t,e,n,s,r){let o=s+i.h,a=[];if(i.studs==="center"){let[l,c]=Us(i,t);for(let h=0;h<c;h++)for(let u=0;u<l;u++)if(r(e+u,n+h,o))return a;return a.push([e+l/2,n+c/2,o]),a}for(let[l,c]of a0(i)){let[h,u]=o0(i,t,l,c);r(e+h,n+u,o)||a.push([e+h+.5,n+u+.5,o])}return a}function qo(i){for(let t of i.values())if(t.material==="glass")return t;return null}function Fr(i,t){let e=Ql(i,r=>t.classOf(r)),n=Wo(i,e),s=C0(i,n);return{grid:n,codeOf:e,covered:(r,o,a)=>i.occupied(r,o,a)||!s(r,o,a),glows:nc(i,r=>t.classOf(i.palette.get(i.color[r]))==="glass"),glassEntry:qo(i.palette)}}function sc(i,t,{list:e=null,ctx:n=Fr(i,t),lite:s=!1}={}){let r=new os(t,i.studM,i.plateM,s);r.glassEntry=n.glassEntry;let o=new ft,a=e?e.length:i.count;for(let l=0;l<a;l++){let c=e?e[l]:l,h=i.typeOf(c);if(!h)continue;let u=i.I[c],f=i.J[c],d=i.K[c],p=i.rotFlags[c],x=i.palette.get(i.color[c]),m=!!(p&li);if(r.addBrick({I:u,J:f,K:d,t:h,rot:p&Xn,entry:x,exact:m,glow:n.glows.get(c)}),!(p&Ur)){ln(x,u,f,d,m,o);for(let[g,M,v]of Yo(h,p&Xn,u,f,d,n.covered))r.addStud(g,M,v,x,o)}}return r.build()}var N0,_d,os,Br=Nt(()=>{Xt();pd();wn();Vo();jl();Kl();Zl();kr();ic();N0=new ft(0,0,0);_d=class{constructor(t,e,n){Object.assign(this,{geometry:t,material:e,key:n,mats:[],cols:[],glow:null})}push(t,e,n){this.mats.push(t.clone()),this.cols.push(e.clone()),n?(this.glow||=new Array(this.mats.length-1).fill(N0)).push(n):this.glow&&this.glow.push(N0)}build(){let t=this.geometry;if(this.glow){t=t.clone(),t.userData.owned=!0;let n=new Float32Array(this.glow.length*3);this.glow.forEach((s,r)=>s.toArray(n,r*3)),t.setAttribute("aGlow",new Ii(n,3))}let e=new dn(t,this.material,this.mats.length);return this.mats.forEach((n,s)=>{e.setMatrixAt(s,n),e.setColorAt(s,this.cols[s])}),e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0,e.computeBoundingSphere(),e.castShadow=!this.material.transparent,e.receiveShadow=!0,e.name=this.key,e}},os=class{constructor(t,e,n,s=!1){Object.assign(this,{mats:t,S:e,P:n,lite:s,buckets:new Map,bricks:0,studs:0}),this.glassEntry=null}bucket(t,e,n){let s=`${t.uuid}|${n}`;return this.buckets.has(s)||this.buckets.set(s,new _d(t,e,n)),this.buckets.get(s)}addBrick({I:t,J:e,K:n,t:s,rot:r,entry:o,exact:a=!1,glow:l=null}){let{key:c,material:h,cls:u}=this.mats.forEntry(o),f=u==="glass"||u==="water",d=A0(s,this.S,this.P,f,this.lite),p=$l(t,e,n,s.w,s.d,r,this.S,this.P),x=ln(o,t,e,n,a);if(this.bucket(d.body,h,`${s.name}|${c}`).push(p,x,u==="glass"?l:null),d.glass){let m=this.glassEntry||o,g=this.mats.forEntry(m);this.bucket(d.glass,g.material,`${s.name}:pane|${g.key}`).push(p,ln(m,t,e,n,!0),l)}this.bricks++}addStud(t,e,n,s,r){let{key:o,material:a}=this.mats.forEntry(s),l=Li(t,e,n,this.S,this.P),c=new Ot().makeTranslation(l.x,l.y-xt,l.z);this.bucket(R0(this.lite),a,`stud|${o}`).push(c,r,null),this.studs++}build(){let t=new Qt,e=[];for(let n of this.buckets.values()){let s=n.build();t.add(s),e.push(s)}return{group:t,meshes:e,bricks:this.bricks,studs:this.studs}}}});function kE(i){if(i.byteLength<$o)throw new Error(`island header needs ${$o} bytes`);let t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=String.fromCharCode(i[0],i[1],i[2],i[3]);if(e!=="BXI1")throw new Error(`bad island magic ${JSON.stringify(e)}`);let n={magic:e,version:t.getUint16(4,!0),flags:t.getUint16(6,!0),islandId:t.getUint32(8,!0),cx:t.getInt32(12,!0),cy:t.getInt32(16,!0),originX:t.getFloat32(20,!0),originZ:t.getFloat32(24,!0),yawDeg:t.getFloat32(28,!0),brickCount:t.getUint32(32,!0),bodyBytes:t.getUint32(36,!0)};if(n.version!==1)throw new Error(`unsupported island version ${n.version}`);return n}async function rc(i){let t=kE(i);if(i.byteLength!==$o+t.bodyBytes)throw new Error(`island ${t.islandId}: file is ${i.byteLength} B, header says ${$o+t.bodyBytes}`);let e=await Uo(i,$o,t.bodyBytes,t.flags);return{header:t,records:ed(e,t.brickCount,`island ${t.islandId}`)}}var $o,Md=Nt(()=>{No();$o=40});function bd(i,t,e,n){let s=Math.sin(t*jo),r=Math.cos(t*jo);return[i[0]+e*r+n*s,i[1]-e*s+n*r]}function Ko(i,t,e){return i.position.set(t[0],0,-t[1]),i.rotation.set(0,FE(e),0),i.updateMatrix(),i.updateMatrixWorld(!0),i}function BE(i,{header:t,records:e}){let n=new Yn(i);n.allocate(t.brickCount);for(let s=0;s<t.brickCount;s++)n.I[s]=e.i[s],n.J[s]=e.j[s],n.K[s]=e.k[s],n.type[s]=e.type[s],n.color[s]=e.color[s],n.rotFlags[s]=e.rotFlags[s],n.feature[s]=e.feature[s];return n.finish(),n.island={id:t.islandId,cx:t.cx,cy:t.cy,origin:[t.originX,t.originZ],yawDeg:t.yawDeg},n}async function O0(i){let t=[];for(let e of Object.values(i.islands||{})){let n=BE(i,await rc(zl(e)));n.count&&t.push(n)}return t}function zE(i){return Ko(new ze,i.origin,i.yawDeg).matrixWorld.clone()}function HE(i){let{I0:t,J0:e,K0:n,I1:s,J1:r,K1:o}=i.bounds,a=i.studM,l=i.plateM;return new ve(new T(t*a,n*l,-r*a),new T(s*a,o*l,-e*a))}function as(i){return HE(i).applyMatrix4(zE(i.island))}function k0(i){let t=[0,0,0,0];for(let n=0;n<i.count;n++){let s=i.typeOf(n)?.kind;(s==="window"||s==="door")&&(t[i.rot(n)]+=s==="door"?4:1)}let e=t.indexOf(Math.max(...t));return t[e]?e:2}function Os(i,t,e=!1){let n=Math.sin(i.yawDeg*jo),s=Math.cos(i.yawDeg*jo),r=t.x-(e?0:i.origin[0]),o=-t.z-(e?0:i.origin[1]),a=r*s-o*n,l=r*n+o*s;return{x:a,y:t.y,z:-l}}var jo,FE,zr=Nt(()=>{Xt();Md();wn();jo=Math.PI/180;FE=i=>-i*jo});function _S(i,t){let e=new Set;for(let n of i.bricks){let s=t.get(n.type);if(!s)continue;let[r,o]=Us(s,n.rot&Xn);for(let a=0;a<s.h;a++)for(let l=0;l<o;l++)for(let c=0;c<r;c++)e.add(an(n.i+c,n.j+l,n.k+a))}return e}function yc(i,{palette:t,types:e,mats:n,studM:s=.5,plateM:r=.2}){let o=_S(i,e),a=(x,m,g)=>o.has(an(x,m,g)),l=i.pivot||[0,0,0],c=Object.keys(i.parts||{}),h=new Map([["",new os(n,s,r)]]);for(let x of c)h.set(x,new os(n,s,r));let u=qo(t),f=new ft;for(let x of i.bricks){let m=e.get(x.type);if(!m)continue;let g=h.get(x.part&&h.has(x.part)?x.part:"");g.glassEntry=u;let M=x.rot||0,v=M&Xn,y=!!(M&li),R=t.get(x.color),w=n.classOf(R)==="glass"||["window","door"].includes(m.kind);if(g.addBrick({I:x.i,J:x.j,K:x.k,t:m,rot:v,entry:R,exact:y,glow:w?vS:null}),!(M&Ur)){ln(R,x.i,x.j,x.k,y,f);for(let[S,I,b]of Yo(m,v,x.i,x.j,x.k,a))g.addStud(S,I,b,R,f)}}let d=new Qt;d.name=`model:${i.name}`;let p={};for(let[x,m]of h){let g=m.build(),M=x?i.parts[x].pivot:l;if(g.group.position.copy(Li(-M[0],-M[1],-M[2],s,r)),!x){d.add(g.group);continue}let v=new Qt;v.name=`part:${x}`,v.position.copy(Li(M[0]-l[0],M[1]-l[1],M[2]-l[2],s,r)),v.add(g.group),d.add(v),p[x]=v}return d.userData.parts=p,d.userData.model=i,d}var vS,Rd=Nt(()=>{Xt();Br();wn();Vo();vS=new ft("#ffd49a").multiplyScalar(.3)});function Mc(i,t){t.position.set(i.position[0],i.position[1],-i.position[2]),t.rotation.set(0,-i.yaw*Math.PI/180,0)}var Ln,vc,_c,bc=Nt(()=>{Ln=class{constructor({path:t,speed:e=2,loop:n=!0,turnRadius:s=2,start:r=0}){let o=t.map(a=>a.length===2?[a[0],0,a[1]]:[...a]);n&&o.push(o[0]),this.pts=o,this.cum=[0];for(let a=1;a<o.length;a++){let[l,c]=[o[a-1],o[a]];this.cum.push(this.cum[a-1]+Math.hypot(c[0]-l[0],c[2]-l[2]))}this.length=this.cum[this.cum.length-1],Object.assign(this,{speed:e,loop:n,turnRadius:s,s:r,moving:!0})}pointAt(t){let e=this.length;t=this.loop?(t%e+e)%e:Math.min(Math.max(t,0),e);let n=1;for(;n<this.cum.length-1&&this.cum[n]<t;)n++;let s=this.pts[n-1],r=this.pts[n],o=(t-this.cum[n-1])/(this.cum[n]-this.cum[n-1]||1);return[s[0]+(r[0]-s[0])*o,s[1]+(r[1]-s[1])*o,s[2]+(r[2]-s[2])*o]}poseAt(t){let e=Math.max(this.turnRadius,.001),n=this.pointAt(t-e),s=this.pointAt(t+e),r=s[0]-n[0],o=s[2]-n[2];if(Math.hypot(r,o)<1e-6){let c=this.pointAt(t-2*e);r=n[0]-c[0],o=n[2]-c[2]}let a=(Math.atan2(r,o)*180/Math.PI+360)%360;return{position:[0,1,2].map(c=>(n[c]+s[c])/2),yaw:a}}update(t){let e=this.s;return this.moving&&(this.s+=this.speed*t),this.loop||(this.s=Math.min(this.s,this.length)),{pose:this.poseAt(this.s),travelled:this.s-e}}};vc=class{constructor(t,{stride:e=.7,swingDeg:n=32}={}){Object.assign(this,{parts:t,stride:e,swing:n*Math.PI/180,phase:0})}update(t,e){this.phase+=t/this.stride*Math.PI;let n=Math.sin(this.phase)*this.swing*Math.min(1,e/1),s=(r,o)=>{this.parts[r]&&(this.parts[r].rotation.x=o)};return s("leg_l",n),s("leg_r",-n),s("arm_l",-n*.8),s("arm_r",n*.8),n}},_c=class{constructor(t,e){this.wheels=Object.entries(t).filter(([n])=>n.startsWith("wheel")).map(([n,s])=>[s,e(n)])}update(t){for(let[e,n]of this.wheels)e.rotation.x-=t/Math.max(n,.05)}}});function hn(i,t,e,n,s,r,o,a,l,c=1){let h=c===12?1:3;for(let u=n;u<n+o;u+=h)for(let f=e;f<e+r;f++)for(let d=t;d<t+s;d++)i.push({i:d,j:f,k:u,type:c,color:a,rot:0,...l?{part:l}:{}})}function MS(){let i=[];return hn(i,0,0,0,5,20,1,en.black,null,12),hn(i,0,0,1,5,20,3,en.red),hn(i,0,0,4,5,20,6,en.glass),hn(i,0,0,10,5,20,3,en.red),hn(i,0,0,13,5,20,1,en.white,null,12),{name:"bus",version:1,size:[5,20,14],pivot:[2.5,10,0],forward:"+j",parts:{},bricks:i}}function bS(){let i=[];return hn(i,0,0,0,6,16,3,en.blue),hn(i,1,16,0,4,2,3,en.blue),hn(i,0,0,3,6,18,1,en.tan,null,12),hn(i,1,3,4,4,8,6,en.white),hn(i,1,3,10,4,8,1,en.grey,null,12),{name:"boat",version:1,size:[6,18,11],pivot:[3,9,1.5],forward:"+j",parts:{},bricks:i}}function eg(i,t){let e=[];return hn(e,0,0,0,1,1,6,en.black,"leg_l"),hn(e,1,0,0,1,1,6,en.black,"leg_r"),hn(e,0,0,6,2,1,6,t),hn(e,-1,0,7,1,1,5,t,"arm_l",12),hn(e,2,0,7,1,1,5,t,"arm_r",12),e.push({i:0,j:0,k:12,type:36,color:en.cream,rot:0},{i:1,j:0,k:12,type:36,color:en.cream,rot:0}),{name:i,version:1,size:[4,1,15],pivot:[2,.5,0],forward:"+j",parts:{leg_l:{pivot:[.5,.5,6]},leg_r:{pivot:[1.5,.5,6]},arm_l:{pivot:[-.5,.5,11.5]},arm_r:{pivot:[2.5,.5,11.5]}},bricks:e.map(n=>({...n,i:n.i+1}))}}function wc(){let i=eg("walker_a",en.red),t=eg("walker_b",en.yellow);for(let e of[i,t])for(let n of Object.values(e.parts))n.pivot[0]+=1;return{bus:MS(),boat:bS(),walker_a:i,walker_b:t}}var en,Cd=Nt(()=>{en={red:38,black:11,glass:34,white:8,blue:21,tan:18,yellow:37,grey:10,cream:17}});function Sg(i,t=[]){let e=i.studM,n=i.plateM,s=i.chunkStuds||64,r=new Set;for(let c=0;c<i.count;c++)r.add(`${Math.floor(i.I[c]/s)},${Math.floor(i.J[c]/s)}`);let o=t.map(c=>({w:c,box:as(c)})),a=(c,h)=>r.has(`${Math.floor(c/s)},${Math.floor(h/s)}`);function l(c,h,u){for(let{w:f,box:d}of o){if(c<d.min.x||c>d.max.x||u<d.min.z||u>d.max.z||h<d.min.y||h>d.max.y)continue;let p=Os(f.island,{x:c,y:h,z:u});if(f.occupied(Math.floor(p.x/e),Math.floor(-p.z/e),Math.floor(h/n)))return!0}return!1}return{isSolid(c,h,u){let f=Math.floor(c/e),d=Math.floor(-u/e),p=Math.floor(h/n);return a(f,d)?p<i.bounds.K0?!0:i.occupied(f,d,p)||l(c,h,u):"unknown"},groundHeight(c,h){let u=Math.floor(c/e),f=Math.floor(-h/e);if(!a(u,f))return"unknown";let d=i.topK(u,f)*n;for(let{w:p,box:x}of o){if(c<x.min.x||c>x.max.x||h<x.min.z||h>x.max.z)continue;let m=Os(p.island,{x:c,y:0,z:h}),g=Math.floor(m.x/e),M=Math.floor(-m.z/e);p.tops.has(an(g,M,0))&&(d=Math.max(d,p.topK(g,M)*n))}return d}}}var Tg=Nt(()=>{zr();wn()});function qr(i,t){let e=(t-i)%ui;return e>Math.PI&&(e-=ui),e<-Math.PI&&(e+=ui),e}function $r(i){return((i+Math.PI)%ui+ui)%ui-Math.PI}function kd(i,t,{base:e=.003,sens:n=1,invertY:s=!1}={}){let r=e*n;return[i*r,t*r*(s?-1:1)]}function Ag({yaw:i,pitch:t},[e,n],s=Oc){return{yaw:$r(i+e),pitch:$n(t+n,s.min,s.max)}}function Rg(i,[t,e]){return $r(i+Math.atan2(t,e))}function Fc(i,t,e,n,s){if(s<=0)return[i,e];let r=Math.max(1e-4,n),o=2/r,a=o*s,l=1/(1+a+.48*a*a+.235*a*a*a),c=i-t,h=(e+o*c)*s,u=(e-o*h)*l,f=t+(c+h)*l;return t-i>0==f>t&&(f=t,u=0),[f,u]}function Cg(i,t,e,n,s){let[r,o]=Fc(i,i+qr(i,t),e,n,s);return[$r(r),o]}function Ig(i,t,{idle:e,moving:n,moveAngle:s=0,dt:r,delay:o=2,rate:a=.9,maxSpeed:l=1.2}){if(!n||e<o||Math.abs(s)>50*Od)return i;let c=$n((e-o)/1,0,1),h=qr(i,t),u=$n(h*kc(a,r),-l*r,l*r)*c;return $r(i+u)}function Fd(i,t,e=14){let n=Math.abs(i)<1e-5?i:i*kc(e,t);return[n,i-n]}var ui,Od,$n,Oc,kc,oa,aa=Nt(()=>{ui=Math.PI*2,Od=Math.PI/180;$n=(i,t,e)=>Math.min(e,Math.max(t,i)),Oc={min:-35*Od,max:70*Od};kc=(i,t)=>1-Math.exp(-i*t);oa=class{constructor(t={}){this.o={yawRate:3.2,pitchRate:2.1,expo:1.8,boost:.7,boostDelay:.25,boostRamp:.5,full:.92,...t},this.held=0}step(t,e,n,{sens:s=1,invertY:r=!1}={}){let o=this.o,a=Math.min(1,Math.hypot(t,e));if(a<1e-6)return this.held=0,[0,0];this.held=a>=o.full?this.held+n:0;let l=o.boost*$n((this.held-o.boostDelay)/o.boostRamp,0,1),c=a**o.expo/a*s*n;return[t*c*o.yawRate*(1+l),e*c*o.pitchRate*(r?-1:1)]}}});var JS,Pg,Bc,Dg=Nt(()=>{aa();JS={radius:.35,height:1.9,walk:1.4,run:4,accel:12,airAccel:3,gravity:18,jumpSpeed:4.4,stepMax:.42,turnRate:10,maxFall:30},Pg=Array.from({length:8},(i,t)=>[Math.cos(t*Math.PI/4),Math.sin(t*Math.PI/4)]),Bc=class{constructor(t,e={}){this.city=t,this.o={...JS,...e},this.pos=[0,0,0],this.vel=[0,0,0],this.yaw=0,this.grounded=!1,this.frozen=!1,this.travelled=0}solid(t,e,n){return this.city.isSolid(t,e,n)!==!1}hits(t,e,n,s,r){let o=this.o.radius*.98;for(let a=s;a<=r+1e-9;a+=.15){let l=e+Math.min(a,r);if(this.solid(t,l,n))return!0;for(let[c,h]of Pg)if(this.solid(t+c*o,l,n+h*o))return!0}return!1}bodyHits(t,e,n){return this.hits(t,e,n,.002,this.o.height)}footSolid(t,e,n,s=.03){let r=this.o.radius*.98;if(this.solid(t,e-s,n))return!0;for(let[o,a]of Pg)if(this.solid(t+o*r,e-s,n+a*r))return!0;return!1}settle(t,e,n,s){for(let r=0;r<14;r++){let o=(n+s)/2;this.bodyHits(t,o,e)?n=o:s=o}return s}spawn(t,e,n,s=this.yaw){this.pos=[t,e,n],this.vel=[0,0,0],this.yaw=s,this.unstick(),this.grounded=this.footSolid(...this.pos)}unstick(){let[t,e,n]=this.pos;if(!this.bodyHits(t,e,n))return!0;for(let s=.1;s<=4;s+=.1)if(!this.bodyHits(t,e+s,n))return this.pos[1]=this.settle(t,n,e+s-.1,e+s),!0;return!1}moveAxis(t,e){let[n,s,r]=this.pos,o=n+t,a=r+e;if(!this.bodyHits(o,s,a))return this.pos[0]=o,this.pos[2]=a,!0;if(!this.grounded)return!1;for(let l=.05;l<=this.o.stepMax+1e-9;l+=.05)if(!this.bodyHits(o,s+l,a))return this.pos=[o,this.settle(o,a,s,s+l),a],!0;return!1}update(t,{move:e=[0,0],speed:n=0,jump:s=!1}={},r=0){let o=this.o,[a,l,c]=this.pos;if(this.frozen=this.city.isSolid(a,l+.5,c)==="unknown",this.frozen||t<=0)return{speed:0,travelled:0};this.bodyHits(a,l,c)&&this.unstick();let h=Math.min(1,Math.hypot(e[0],e[1])),u=0,f=0;if(h>.001){let w=Rg(r,e);u=Math.sin(w)*n*h,f=-Math.cos(w)*n*h,this.yaw+=qr(this.yaw,w)*kc(o.turnRate,t),this.yaw=(this.yaw%ui+ui)%ui}let d=(this.grounded?o.accel:o.airAccel)*t,p=(w,S)=>w+Math.max(-d*Math.max(n,o.walk),Math.min(d*Math.max(n,o.walk),S-w));this.vel[0]=p(this.vel[0],u),this.vel[2]=p(this.vel[2],f),s&&this.grounded&&(this.vel[1]=o.jumpSpeed,this.grounded=!1);let x=this.vel[0]*t,m=this.vel[2]*t,g=Math.max(1,Math.ceil(Math.hypot(x,m)/.1));for(let w=0;w<g;w++)x&&!this.moveAxis(x/g,0)&&(this.vel[0]=0),m&&!this.moveAxis(0,m/g)&&(this.vel[2]=0);let M=this.grounded;this.vel[1]=Math.max(-o.maxFall,this.vel[1]-o.gravity*t),this.grounded&&this.vel[1]<0&&(this.vel[1]=0);let[v,,y]=this.pos;if(this.vel[1]>0){let w=this.vel[1]*t;this.bodyHits(v,this.pos[1]+w,y)?this.vel[1]=0:this.pos[1]+=w}if(!this.footSolid(v,this.pos[1],y)){let w=this.pos[1];if(M&&this.vel[1]<=0&&this.hits(v,w-o.stepMax-.01,y,0,o.stepMax))this.pos[1]=this.settle(v,y,w-o.stepMax-.01,w);else{this.grounded=!1;let S=this.vel[1]<0?-this.vel[1]*t:0,I=Math.max(1,Math.ceil(S/.1));for(let b=0;b<I;b++){let _=this.pos[1]-S/I;if(this.bodyHits(v,_,y)||this.footSolid(v,_,y,.001)){this.pos[1]=this.settle(v,y,_-.001,this.pos[1]),this.vel[1]=0;break}this.pos[1]=_}}}this.grounded=this.vel[1]<=0&&this.footSolid(v,this.pos[1],y),this.grounded&&(this.vel[1]=0,this.pos[1]=this.settle(v,y,this.pos[1]-.035,this.pos[1]));let R=Math.hypot(this.pos[0]-a,this.pos[2]-c);return this.travelled+=R,{speed:R/t,travelled:R}}}});function QS(i,t){let e=Math.cos(t);return[-Math.sin(i)*e,Math.sin(t),Math.cos(i)*e]}function tT(i,t,e,n,{margin:s=Lg.margin,step:r=.1,spread:o=.18}={}){let a=[e[2],0,-e[0]],l=Math.hypot(a[0],a[2])||1;a[0]/=l,a[2]/=l;let c=[e[1]*a[2],e[2]*a[0]-e[0]*a[2],-e[1]*a[0]],h=[[0,0,0],...[[1,0],[-1,0],[0,1],[0,-1]].map(([f,d])=>[0,1,2].map(p=>(a[p]*f+c[p]*d)*o))],u=n;for(let f of h)for(let d=r;d<=u+s;d+=r){let p=t[0]+f[0]+e[0]*d,x=t[1]+f[1]+e[1]*d,m=t[2]+f[2]+e[2]*d;if(i.isSolid(p,x,m)===!0){u=Math.min(u,d-s);break}}return Math.max(.2,u)}var Lg,zc,Ug=Nt(()=>{aa();Lg={minDist:1.2,maxDist:14,dist:5,pitch:.22,minPitch:Oc.min,maxPitch:Oc.max,margin:.3,focusY:1.6,turnTime:.05,zoomTime:.14};zc=class{constructor(t={}){this.o={...Lg,...t},this.lim={min:this.o.minPitch,max:this.o.maxPitch},this.vel={yaw:0,pitch:0,dist:0},this.yaw=0,this.pitch=this.o.pitch,this.want=this.o.dist,this.dist=this.o.dist}get yaw(){return this._yaw}set yaw(t){this._yaw=this.aimYaw=$r(t),this.vel.yaw=0}get pitch(){return this._pitch}set pitch(t){this._pitch=this.aimPitch=$n(t,this.lim.min,this.lim.max),this.vel.pitch=0}get want(){return this._want}set want(t){this._want=this.aimDist=$n(t,this.o.minDist,this.o.maxDist),this.vel.dist=0}input(t,e){({yaw:this.aimYaw,pitch:this.aimPitch}=Ag({yaw:this.aimYaw,pitch:this.aimPitch},t,this.lim)),this.aimDist=$n(this.aimDist+e,this.o.minDist,this.o.maxDist)}recenter(t,e){this.aimYaw=Ig(this.aimYaw,t,e)}snap(){this.yaw=this.aimYaw,this.pitch=this.aimPitch,this.want=this.aimDist}update(t,e,n){let s=this.o,r=this.vel;[this._yaw,r.yaw]=Cg(this._yaw,this.aimYaw,r.yaw,s.turnTime,n),[this._pitch,r.pitch]=Fc(this._pitch,this.aimPitch,r.pitch,s.turnTime,n),[this._want,r.dist]=Fc(this._want,this.aimDist,r.dist,s.zoomTime,n);let o=[e[0],e[1]+s.focusY,e[2]],a=QS(this._yaw,this._pitch),l=tT(t,o,a,this._want);this.dist=l<this.dist?l:this.dist+(l-this.dist)*Math.min(1,n*4);let c=[0,1,2].map(h=>o[h]+a[h]*this.dist);return{focus:o,position:c}}}});function Og(i){let t={...la};if(!i||typeof i!="object")return t;for(let[e,[n,s]]of Object.entries(eT)){let r=Number(i[e]);i[e]!=null&&Number.isFinite(r)&&(t[e]=Math.min(s,Math.max(n,r)))}for(let e of["invertY","padInvertY","recenter"])typeof i[e]=="boolean"&&(t[e]=i[e]);return t}function Fg(i=kg()){try{return Og(JSON.parse(i?.getItem(Ng)||"null"))}catch{return{...la}}}function Bg(i,t=kg()){try{return t?.setItem(Ng,JSON.stringify(Og(i))),!!t}catch{return!1}}var Ng,la,eT,kg,Bd=Nt(()=>{Ng="blox.player.settings.v1",la=Object.freeze({mouseSens:1,invertY:!1,padSens:1,padInvertY:!1,recenter:!0}),eT={mouseSens:[.2,3],padSens:[.3,2.5]};kg=()=>{try{return globalThis.localStorage??null}catch{return null}}});function zg(i,t,e){let n=Math.hypot(i,t);if(n<=e)return[0,0];let s=Math.min(1,(n-e)/(1-e))/n;return[i*s,t*s]}function nT(i,t=zd){let e=new Set;for(let[o,a]of Object.entries(t.keys))a.some(l=>i.has(l))&&e.add(o);let n=(e.has("right")?1:0)-(e.has("left")?1:0),s=(e.has("forward")?1:0)-(e.has("back")?1:0),r=Math.hypot(n,s);return r>1&&(n/=r,s/=r),{move:[n,s],held:e}}function iT(i,t=zd){let e=u=>i.axes?.[u]??0,n=u=>{let f=i.buttons?.[u];return f==null?0:typeof f=="object"?f.value||(f.pressed?1:0):+f},s=t.pad.axes,[r,o]=zg(e(s.moveX),e(s.moveY),t.pad.deadzone),[a,l]=zg(e(s.lookX),e(s.lookY),t.pad.deadzone),c=new Set;for(let[u,f]of Object.entries(t.pad.buttons))n(f)>.5&&c.add(u);let h=u=>{let f=n(u);return f>t.pad.triggerDeadzone?f:0};return{move:[r,-o],look:[a,l],held:c,zoom:h(t.pad.buttons.zoomOut)-h(t.pad.buttons.zoomIn)}}function sT(i,t){let e=new Set;for(let n of t)i.has(n)||e.add(n);return e}function rT(i,t,e,{settle:n=150,spike:s=120,max:r=2e3}={}){if(!Number.isFinite(i)||!Number.isFinite(t))return[0,0];let o=Math.hypot(i,t);return e<n&&o>s||o>r?[0,0]:[i,t]}function oT({kb:i,pads:t=[],touch:e=null,mouse:n=null,dt:s,prevHeld:r=new Set,b:o=zd,settings:a=la,stick:l=new oa}){let c=new Set(i.held),h=i.move,u=Math.hypot(...i.move)>0?1:0,f=[0,0],d=[0,0],p=0,x=!1;for(let y of t){for(let w of y.held)c.add(w);let R=Math.hypot(...y.move);R>Math.hypot(...h)&&(h=y.move,u=R,x=R>.92),d[0]+=y.look[0],d[1]+=y.look[1],p+=y.zoom*o.zoom.triggers*s}let[m,g]=l.step(d[0],d[1],s,{sens:a.padSens,invertY:a.padInvertY});f[0]+=m,f[1]+=g;let M={sens:a.mouseSens,invertY:a.invertY};if(e){let y=Math.hypot(...e.move);y>Math.hypot(...h)&&(h=e.move,u=Math.min(1,y),x=y>.92);let[R,w]=kd(e.look[0],e.look[1],{base:o.look.touch,...M});f[0]+=R,f[1]+=w,p+=(e.zoom||0)*.02}if(n){let[y,R]=kd(n.look[0],n.look[1],{base:o.look.mouse,...M});f[0]+=y,f[1]+=R,p+=n.wheel*o.zoom.wheel}c.has("lookLeft")&&(f[0]-=o.look.keys*s),c.has("lookRight")&&(f[0]+=o.look.keys*s),c.has("zoomIn")&&(p-=o.zoom.keys*s),c.has("zoomOut")&&(p+=o.zoom.keys*s);let v=c.has("run")||x;return{move:h,speed01:Math.min(1,u),run:v,look:f,lookInput:Math.hypot(...f)>1e-6,zoom:p,held:c,kbHeld:i.held,pressed:sT(r,c)}}function Hg(i,t,e){return i.run?e:t*Math.max(i.speed01,i.speed01>0?.35:0)}var zd,Hc,Vg=Nt(()=>{aa();Bd();zd={keys:{forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],jump:["Space"],enter:["KeyF"],map:["KeyM"],menu:["Escape"],help:["KeyH"],lookLeft:["KeyQ"],lookRight:["KeyE"],zoomIn:["Equal","NumpadAdd"],zoomOut:["Minus","NumpadSubtract"]},pad:{axes:{moveX:0,moveY:1,lookX:2,lookY:3},buttons:{jump:0,enter:0,map:1,run:4,zoomOut:6,zoomIn:7,help:8,menu:9},deadzone:.18,triggerDeadzone:.08},look:{mouse:.003,touch:.006,keys:1.8},zoom:{wheel:.004,triggers:8,keys:6}};Hc=class{constructor(t,{onPad:e,onLock:n,touch:s,settings:r}={}){this.target=t,this.settings=r||{...la},this.stick=new oa,this.codes=new Set,this.taps=new Set,this.mouse={look:[0,0],wheel:0},this.prevHeld=new Set,this.touch=s||null,this.lookActive=!1,this.locked=!1,this.lockedAt=0,this.unlockedAt=-1e9,this.padNames=new Map;let o=l=>/^(INPUT|SELECT|TEXTAREA)$/.test(l.target?.tagName||"")&&!/^(checkbox|range)$/.test(l.target.type);window.addEventListener("keydown",l=>{o(l)||l.code==="Escape"&&(this.locked||performance.now()-this.unlockedAt<300)||(this.codes.add(l.code),l.repeat||this.taps.add(l.code),this.lookActive&&/^(Space|Arrow)/.test(l.code)&&l.preventDefault())}),window.addEventListener("keyup",l=>this.codes.delete(l.code)),window.addEventListener("blur",()=>this.codes.clear()),document.addEventListener("pointerlockchange",()=>{let l=document.pointerLockElement===t;l!==this.locked&&(this.locked=l,l?this.lockedAt=performance.now():this.unlockedAt=performance.now(),a=null,n?.(l))});let a=null;t.addEventListener("pointerdown",l=>{l.pointerType==="mouse"&&!this.locked&&(a=[l.clientX,l.clientY])}),window.addEventListener("pointermove",l=>{if(this.lookActive)if(this.locked){let[c,h]=rT(l.movementX,l.movementY,performance.now()-this.lockedAt);this.mouse.look[0]+=c,this.mouse.look[1]+=h}else a&&(this.mouse.look[0]+=l.clientX-a[0],this.mouse.look[1]+=l.clientY-a[1],a=[l.clientX,l.clientY])}),window.addEventListener("pointerup",()=>{a=null}),t.addEventListener("wheel",l=>{this.lookActive&&(this.mouse.wheel+=l.deltaY,l.preventDefault())},{passive:!1}),window.addEventListener("gamepadconnected",l=>e?.(l.gamepad.id,!0)),window.addEventListener("gamepaddisconnected",l=>e?.(l.gamepad.id,!1))}requestLock(){let t=this.target;if(this.locked||!t.requestPointerLock)return;let e=()=>{try{t.requestPointerLock()?.catch?.(()=>{})}catch{}};try{let n=t.requestPointerLock({unadjustedMovement:!0});n?.catch&&n.catch(s=>{s?.name==="NotSupportedError"&&e()})}catch{e()}}releaseLock(){this.locked&&document.exitPointerLock&&document.exitPointerLock()}pads(){return(navigator.getGamepads?[...navigator.getGamepads()].filter(e=>e&&e.connected):[]).filter(e=>e.mapping==="standard"||e.axes.length>=4)}poll(t){let e=oT({kb:nT(new Set([...this.codes,...this.taps])),pads:this.pads().map(n=>iT(n)),touch:this.touch?.read()||null,mouse:this.mouse,dt:t,prevHeld:this.prevHeld,settings:this.settings,stick:this.stick});return this.prevHeld=e.held,this.taps.clear(),this.mouse={look:[0,0],wheel:0},e}}});function fi(i,t=1){let e=i,[n,s,r]=Array.isArray(t)?t:[t,t,t],o=e.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[3*l]=n,a[3*l+1]=s,a[3*l+2]=r;return e.setAttribute("color",new ae(a,3)),e.attributes.uv&&e.deleteAttribute("uv"),e.attributes.uv1&&e.deleteAttribute("uv1"),e}function st(i,{at:t=[0,0,0],rot:e=[0,0,0],scale:n=null}={}){return n&&i.scale(...Array.isArray(n)?n:[n,n,n]),e[0]&&i.rotateX(e[0]),e[1]&&i.rotateY(e[1]),e[2]&&i.rotateZ(e[2]),i.translate(...t),i}function Fs(i,{depth:t=1,width:e=1,c:n=1,seg:s=18}={}){let r=new ri(i.map(([o,a])=>new j(o,a)),s);return r.scale(e,1,t),fi(r,n)}function pi(i,t,e,n=1,s=6){let r=new T(...i),o=new T(...t),a=r.distanceTo(o),l=new Ji(e,e,a,s,1),c=new Ie().setFromUnitVectors(new T(0,1,0),o.clone().sub(r).normalize());return l.applyQuaternion(c),l.translate((r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2),fi(l,n)}function jt(i){let t=i.map(n=>{for(let s of Object.keys(n.attributes))["position","normal","color"].includes(s)||n.deleteAttribute(s);return n.attributes.color||fi(n,1),n.index?n:n.setIndex([...Array(n.attributes.position.count).keys()])}),e=Wl(t,!1);return e.computeBoundingSphere(),e}var qt,xe,di,Le,$e,Vc=Nt(()=>{Xt();sd();rd();qt=(i,t,e,n,s=1,r=2)=>fi(new Or(i,t,e,r,Math.min(n,i/2,t/2,e/2)*.999),s),xe=(i,t=1,e=9,n=6)=>fi(new Pi(i,e,n),t),di=(i,t,e=1,n=2,s=8)=>fi(new Ml(i,t,n,s),e),Le=(i,t,e,n=1,s=12)=>fi(new Ji(i,t,e,s),n),$e=(i,t,e=1,n=Math.PI*2,s=6,r=16)=>fi(new Qi(i,t,s,r,n),e)});function lT(){let i=st(Le(.042,.046,.09,1),{at:[0,.03,0]}),t=st(qt(.205,.24,.2,.08,1,2),{at:[0,.06+.12,0]}),e=l=>st(xe(.017,aT,6,5),{at:[l,.19,-.094],scale:[1,1.25,.6]}),n=l=>st(xe(.006,3.5,5,4),{at:[l+.006,.197,-.1]}),s=st($e(.026,.0055,[.35,.12,.1],Math.PI,5,10),{at:[0,.142,-.098],rot:[0,0,Math.PI]}),r=st(xe(.016,.93,5,4),{at:[0,.165,-.1],scale:[1,.9,.8]}),o=l=>st(xe(.02,[1,.72,.68],5,4),{at:[l,.152,-.088],scale:[1,.7,.4]}),a=l=>st(xe(.026,.95,5,4),{at:[l,.175,.005],scale:[.45,1,.8]});return jt([i,t,e(-.047),e(.047),n(-.047),n(.047),s,r,o(-.066),o(.066),a(-.103),a(.103)])}function cT(i){switch(i){case"short":return jt([ca(),Gc(.16)]);case"bob":return jt([ca(),st(qt(.236,.2,.17,.06,1,2),{at:[0,.2,.034]}),st(qt(.21,.05,.05,.02,1,2),{at:[0,.27,-.09]})]);case"long":return jt([ca(),st(qt(.232,.36,.08,.04,1,2),{at:[0,.13,.075]}),st(qt(.236,.22,.12,.05,1,2),{at:[0,.19,.03]})]);case"bun":return jt([ca(),Gc(.12),st(xe(.058,1,8,5),{at:[0,.31,.075]})]);case"ponytail":return jt([ca(),Gc(.12),st(di(.036,.14,1,2,7),{at:[0,.18,.135],rot:[.25,0,0]}),st($e(.026,.01,.5,Math.PI*2,5,10),{at:[0,.255,.115],rot:[Math.PI/2+.25,0,0]})]);case"curly":{let t=[];for(let[e,n,s]of[[0,.3,.01],[-.07,.28,-.04],[.07,.28,-.04],[-.085,.25,.05],[.085,.25,.05],[0,.27,.08],[-.05,.31,.06],[.05,.31,.06],[0,.29,-.06],[-.09,.2,.06],[.09,.2,.06],[0,.2,.1]])t.push(st(xe(.058,1,6,5),{at:[e,n,s]}));return jt(t)}case"cap":return jt([st(xe(.118,1,10,6),{at:[0,.225,.006],scale:[1,.72,1]}),st(qt(.17,.018,.11,.008,1,2),{at:[0,.232,-.13],rot:[.12,0,0]}),st(xe(.014,.8,5,4),{at:[0,.31,.006]}),Gc(.1)]);case"beanie":return jt([st(xe(.119,1,10,6),{at:[0,.225,.006],scale:[1,.9,1]}),st($e(.116,.022,.82,Math.PI*2,6,18),{at:[0,.232,.006],rot:[Math.PI/2,0,0]}),st(xe(.032,1,5,4),{at:[0,.34,.006]})]);case"hat":return jt([st(Le(.098,.106,.09,1,18),{at:[0,.335,.004]}),st(Le(.165,.165,.014,1,22),{at:[0,.29,.004]}),st(Le(.108,.108,.025,.3,18),{at:[0,.305,.004]}),st(xe(.105,1,9,4),{at:[0,.38,.004],scale:[1,.25,1]})]);case"fringe":return jt([st(qt(.222,.075,.13,.03,1,2),{at:[0,.19,.04]})]);default:throw new Error(`hair style ${i}`)}}function hT(i){let t=(e=1,n=1)=>Fs(jr,{depth:jn,width:e,c:n});switch(i){case"shirt":return jt([t(),st($e(.048,.012,1,Math.PI*2,5,14),{at:[0,.548,0],rot:[Math.PI/2,0,0],scale:[1.15,1,.9]})]);case"jacket":return jt([Fs([[0,-.06],[.158,-.06],[.16,.06],...jr.slice(3)],{depth:jn+.04,width:1.05}),st(qt(.035,.4,.012,.005,.7,1),{at:[0,.2,-.101]}),st(xe(.011,.35,5,4),{at:[.035,.24,-.107]}),st(xe(.011,.35,5,4),{at:[.035,.12,-.107]}),st(qt(.13,.05,.03,.012,.85,1),{at:[-.05,.47,-.088],rot:[0,0,-.5]}),st(qt(.13,.05,.03,.012,.85,1),{at:[.05,.47,-.088],rot:[0,0,.5]})]);case"coat":return jt([Fs([[0,-.4],[.215,-.4],[.195,-.2],[.172,0],...jr.slice(3)],{depth:jn+.14,width:1.06}),st($e(.075,.025,1,Math.PI*2,6,16),{at:[0,.53,0],rot:[Math.PI/2,0,0],scale:[1.1,.9,1]}),st($e(.16,.014,.55,Math.PI*2,5,24),{at:[0,.06,0],rot:[Math.PI/2,0,0],scale:[1.1,jn+.16,1]}),...[.3,.2,-.05,-.18].map(e=>st(xe(.012,.4,5,4),{at:[.04,e,-.12-(e<0?.01:0)]}))]);case"dress":return jt([Fs([[0,-.42],[.225,-.42],[.2,-.24],[.16,-.02],[.145,.2],...jr.slice(4)],{depth:jn+.04}),st($e(.153,.012,.75,Math.PI*2,5,36),{at:[0,.2,0],rot:[Math.PI/2,0,0],scale:[1,jn,1]}),st($e(.048,.012,1,Math.PI*2,5,14),{at:[0,.548,0],rot:[Math.PI/2,0,0],scale:[1.15,1,.9]})]);default:throw new Error(`top style ${i}`)}}function uT(){return jt([Fs([[0,-.12],[.12,-.13],[.156,-.06],[.158,.02],[0,.02]],{depth:jn+.02}),st($e(.152,.011,.45,Math.PI*2,5,24),{at:[0,.012,0],rot:[Math.PI/2,0,0],scale:[1,jn+.02,1]})])}function yT(i){switch(i){case"backpack":return jt([st(qt(.26,.32,.12,.05,1,1),{at:[0,.32,.16]}),st(qt(.2,.12,.05,.02,.8,1),{at:[0,.24,.225]}),st(qt(.035,.36,.02,.01,.6,1),{at:[-.1,.33,-.01],rot:[.05,0,0]}),st(qt(.035,.36,.02,.01,.6,1),{at:[.1,.33,-.01],rot:[.05,0,0]})]);case"bag":return jt([st(qt(.22,.26,.09,.02,1,1),{at:[0,-.25,0]}),st($e(.045,.008,.9,Math.PI,4,10),{at:[0,-.115,0]})]);case"umbrella":return jt([st(Le(.008,.008,1,.3,6),{at:[0,.42,0]}),st(Le(.02,.55,.22,1,16),{at:[0,.82,0]}),st(xe(.02,.3,5,4),{at:[0,.94,0]})]);default:return null}}function vT(){let i=()=>st(qt(.205,.24,.2,.08,1,1),{at:[0,.18,0]}),t=[-.047,.047].map(s=>st(qt(.026,.034,.01,.004,.07,1),{at:[s,.19,-.1]})),e=()=>st(qt(.222,.115,.218,.05,1,1),{at:[0,.262,.008]}),n=(s,r)=>Fs(s,{...r,seg:8});return{head:jt([st(Le(.044,.044,.09,1,6),{at:[0,.03,0]}),i(),...t]),hair:{cap:jt([e(),st(qt(.222,.14,.09,.04,1,1),{at:[0,.2,.066]})]),long:jt([e(),st(qt(.232,.34,.1,.04,1,1),{at:[0,.14,.07]})]),puff:jt([st(xe(.125,1,7,5),{at:[0,.26,.03]}),st(xe(.065,1,6,4),{at:[0,.32,.1]})])},top:{short:n(jr,{depth:jn}),long:n([[0,-.42],[.215,-.42],[.18,-.2],[.16,0],...jr.slice(3)],{depth:jn+.08})},hips:n([[0,-.12],[.12,-.13],[.156,-.06],[.158,.02],[0,.02]],{depth:jn+.02}),upperArm:st(di(.05,he.upperArm-.05,1,1,6),{at:[0,-he.upperArm/2+.01,0]}),foreArm:jt([st(di(.043,he.foreArm-.04,1,1,6),{at:[0,-he.foreArm/2+.01,0]}),st(xe(.045,1,6,4),{at:[0,-he.foreArm-.05,0],scale:[.75,1.2,.9]})]),thigh:st(di(.072,he.thigh-.06,1,1,6),{at:[0,-he.thigh/2+.01,0]}),shin:jt([st(di(.06,he.shin-.06,1,1,6),{at:[0,-he.shin/2+.02,0]}),st(qt(.09,.09,.21,.03,.3,1),{at:[0,-he.shin-.045,-.04]})]),backpack:jt([st(qt(.26,.32,.12,.05,1,1),{at:[0,.32,.16]})])}}function Wg(){return Wc||(Wc={head:lT(),hips:uT(),upperArm:fT(),foreArm:dT(),hand:pT(),thigh:mT(),shin:gT(),shoe:xT(),hair:Object.fromEntries(Xc.map(i=>[i,cT(i)])),top:Object.fromEntries(Yc.map(i=>[i,hT(i)])),acc:Object.fromEntries(Hd.filter(i=>i!=="none").map(i=>[i,yT(i)])),lo:vT()},Wc)}function ps({clippingPlanes:i=null}={}){return new Sr({color:16777215,vertexColors:!0,roughness:.38,metalness:0,clearcoat:.45,clearcoatRoughness:.25,specularIntensity:.6,clippingPlanes:i})}var he,aT,ca,Gc,Xc,Yc,jr,jn,fT,dT,pT,mT,gT,xT,Hd,Gg,Wc,Bs=Nt(()=>{Xt();Vc();he={pelvisY:.91,hipX:.092,thigh:.42,shin:.41,shoulderX:.18,shoulderY:.44,upperArm:.27,foreArm:.24,neckY:.55,headTop:.3},aT=.07;ca=()=>st(qt(.222,.115,.218,.055,1,2),{at:[0,.262,.008]}),Gc=(i=.16)=>st(qt(.222,i,.09,.04,1,1),{at:[0,.3-i/2-.02,.066]}),Xc=["short","bob","long","bun","ponytail","curly","cap","beanie","hat","fringe"];Yc=["shirt","jacket","coat","dress"],jr=[[0,0],[.15,0],[.152,.06],[.145,.2],[.158,.33],[.17,.43],[.158,.5],[.12,.545],[.05,.565],[0,.567]],jn=.64;fT=()=>jt([st(di(.05,he.upperArm-.06,1),{at:[0,-he.upperArm/2+.01,0]}),st(xe(.053,1,8,5),{at:[0,-.012,0]})]),dT=()=>jt([st(di(.043,he.foreArm-.05,1),{at:[0,-he.foreArm/2+.01,0]}),st($e(.043,.008,.85,Math.PI*2,4,12),{at:[0,-he.foreArm+.035,0],rot:[Math.PI/2,0,0]})]),pT=()=>jt([st(xe(.048,1,8,5),{at:[0,-.055,0],scale:[.72,1.25,.95]}),st(xe(.022,1,5,4),{at:[0,-.04,-.038],scale:[1,1.3,1]})]),mT=()=>st(di(.072,he.thigh-.07,1,2,9),{at:[0,-he.thigh/2+.01,0]}),gT=()=>jt([st(di(.06,he.shin-.08,1,2,9),{at:[0,-he.shin/2+.02,0]}),st(xe(.064,1,6,5),{at:[0,-.005,0]})]),xT=()=>jt([st(qt(.088,.075,.205,.035,1,1),{at:[0,-.04,-.04]}),st(qt(.092,.02,.21,.009,.55,1),{at:[0,-.07,-.04]})]),Hd=["none","backpack","bag","umbrella"];Gg={short:"cap",fringe:"cap",cap:"cap",beanie:"cap",hat:"cap",long:"long",bob:"long",ponytail:"long",bun:"puff",curly:"puff"};Wc=null});function we(i,t,e,n){let s=i[t]||(i[t]=[0,0]);s[0]=e,s[1]=n}function MT(i,t,e=he.thigh,n=he.shin){let s=qc(Math.hypot(i,t),Math.abs(e-n)+.001,e+n-1e-4),r=Math.atan2(i,t),o=Math.acos(qc((e*e+s*s-n*n)/(2*e*s),-1,1)),a=Math.acos(qc((e*e+n*n-s*s)/(2*e*n),-1,1));return[r+o,-(Math.PI-a)]}function Gd(i,t,e={}){let n=i.scale,s=t.t||0,r=i.seed%97*.37,o=t.mode??Ae.WALK;if(e.pelvisY=he.pelvisY,e.bob=0,e.lean=i.stoop,e.headPitch=i.stoop*.7,e.headYaw=t.look||0,we(e,"hip",0,0),we(e,"knee",-.04,-.04),we(e,"ankle",.04,.04),we(e,"sh",0,0),we(e,"abd",.07,.07),we(e,"elbow",.12,.12),o===Ae.WALK){let a=qc((t.speed??1.2)/1.2,0,1.25)*(i.kind==="older"?.75:1),l=t.phase||0,c=Math.sin(l);we(e,"hip",.42*a*c,-.42*a*c),we(e,"knee",-(.06+.75*a*Math.max(0,Math.cos(l))),-(.06+.75*a*Math.max(0,-Math.cos(l)))),we(e,"ankle",-(e.hip[0]+e.knee[0])*.7,-(e.hip[1]+e.knee[1])*.7),we(e,"sh",-.5*a*c,.5*a*c),we(e,"elbow",.15+.5*Math.max(0,e.sh[0]),.15+.5*Math.max(0,e.sh[1])),e.bob=.02*a*Math.cos(2*l),e.lean=i.stoop+.05*a,(t.speed??0)>2.2&&(e.lean+=.14,we(e,"elbow",1.25+.3*Math.max(0,e.sh[0]),1.25+.3*Math.max(0,e.sh[1])),e.bob*=1.8)}else if(o===Ae.IDLE||o===Ae.BROWSE){let a=Math.sin(s*1.1+r);e.bob=.004*Math.sin(s*2.2+r),we(e,"hip",.03*a,-.03*a),we(e,"sh",.04*Math.sin(s*1.3+r),.04*Math.sin(s*1.3+r+2)),e.headYaw+=.25*Math.sin(s*.37+r),o===Ae.BROWSE&&(we(e,"sh",.38+.08*a,.3-.06*a),we(e,"elbow",.95,1.05),we(e,"abd",.12,.12),e.headPitch-=.25,e.lean+=.06)}else if(o===Ae.SIT){e.pelvisY=_T/n+.075,we(e,"hip",1.5,1.5),we(e,"knee",-1.48,-1.48),we(e,"ankle",0,0),e.lean=-.04+i.stoop*.5,e.headPitch=-.05,we(e,"sh",.5,.5),we(e,"elbow",.95,.95),we(e,"abd",.14,.14);let a=(s+r*5)%11/11;if(a>.85){let l=Math.sin((a-.85)/.15*Math.PI);e.sh[1]=.5+.6*l,e.elbow[1]=.95+1.2*l,e.headPitch+=.2*l}e.headYaw+=.45*Math.sin(s*.3+r)}else if(o===Ae.CYCLE){e.pelvisY=ha.h/n+.03,e.lean=.42,e.headPitch=.36;let a=(ha.h-ha.bbH)/n-.02,l=ha.back/n,c=ha.crank/n;for(let h=0;h<2;h++){let u=(t.phase||0)+h*Math.PI,[f,d]=MT(l+Math.sin(u)*c,a-.09/n+Math.cos(u)*c);e.hip[h]=f,e.knee[h]=d,e.ankle[h]=-(f+d)+.1}we(e,"sh",.95,.95),we(e,"elbow",.35,.35),we(e,"abd",.1,.1)}return e}function Kn(i,t){return i.set(t),i}function ms(i,t,e,n){for(let s=0;s<3;s++)i[12+s]+=t*i[s]+e*i[4+s]+n*i[8+s];return i}function zs(i,t){if(!t)return i;let e=Math.cos(t),n=Math.sin(t);for(let s=0;s<3;s++){let r=i[4+s],o=i[8+s];i[4+s]=e*r+n*o,i[8+s]=-n*r+e*o}return i}function wT(i,t){if(!t)return i;let e=Math.cos(t),n=Math.sin(t);for(let s=0;s<3;s++){let r=i[s],o=i[8+s];i[s]=e*r-n*o,i[8+s]=n*r+e*o}return i}function ET(i,t){if(!t)return i;let e=Math.cos(t),n=Math.sin(t);for(let s=0;s<3;s++){let r=i[s],o=i[4+s];i[s]=e*r+n*o,i[4+s]=-n*r+e*o}return i}function Vd(i,t,e,n){for(let s=0;s<3;s++)i[s]*=t,i[4+s]*=e,i[8+s]*=n;return i}function Xg(i,t,e,n,s,r){let o=Math.cos(s),a=Math.sin(s);return i.fill(0),i[0]=o*r,i[2]=-a*r,i[5]=r,i[8]=a*r,i[10]=o*r,i[12]=t,i[13]=e,i[14]=n,i[15]=1,i}function ST(i){let t=i._k;return(!t||t.h!==i.hair||t.t!==i.top||t.a!==i.acc)&&(i._k={h:i.hair,t:i.top,a:i.acc,hair:`hair:${i.hair}`,top:`top:${i.top}`,shirt:"top:shirt",acc:`acc:${i.acc}`,hairCol:i.colours.hairTint?"hairTint":"hair",loHair:`lo:hair:${Gg[i.hair]}`,loTop:i.top==="dress"||i.top==="coat"?"lo:top:long":"lo:top:short"}),i._k}function Yg(i,t,e,n=Gd(i,t),s=!1){let r=i.scale,o=i.width,a=ST(i),l=t.mode??Ae.WALK,c=Xg(Sn[0],t.x,t.y,t.z,t.rotY||0,r),h=ms(Kn(Sn[1],c),0,n.pelvisY+n.bob,0);e(s?"lo:hips":"hips",Vd(Kn(Sn[2],h),o,1,o),"bottom");let u=zs(Kn(Sn[3],h),-n.lean),f=Vd(Kn(Sn[4],u),o,1,o),d=i.top==="dress"||i.top==="coat",p=l===Ae.SIT||l===Ae.CYCLE;e(s?p?"lo:top:short":a.loTop:d&&p?a.shirt:a.top,f,"top"),i.acc==="backpack"&&e(s?"lo:backpack":a.acc,f,"acc");let x=i.headScale,m=Vd(wT(zs(ms(Kn(Sn[5],u),0,he.neckY,0),n.headPitch),n.headYaw),x,x,x);e(s?"lo:head":"head",m,"skin"),e(s?a.loHair:a.hair,m,a.hairCol);for(let g=0;g<2;g++){let M=g===0?-1:1,v=n.sh[g],y=n.elbow[g];g===1&&i.acc==="umbrella"&&l!==Ae.CYCLE&&(v=.7,y=1.5);let R=ET(zs(ms(Kn(Sn[6],u),M*he.shoulderX*o,he.shoulderY,0),v),M*n.abd[g]);e(s?"lo:upperArm":"upperArm",R,"top");let w=zs(ms(Kn(Sn[7],R),0,-he.upperArm,0),y);e(s?"lo:foreArm":"foreArm",w,"top");let S=ms(Kn(Sn[8],w),0,-he.foreArm,0);s||e("hand",S,"skin"),g===1&&(i.acc==="bag"&&!s||i.acc==="umbrella")&&!p&&e(a.acc,Xg(Sn[9],S[12],S[13],S[14],t.rotY||0,r),"acc");let I=zs(ms(Kn(Sn[6],h),M*he.hipX*o,0,0),n.hip[g]);e(s?"lo:thigh":"thigh",I,"bottom");let b=zs(ms(Kn(Sn[7],I),0,-he.thigh,0),n.knee[g]);e(s?"lo:shin":"shin",b,"bottom"),s||e("shoe",zs(ms(Kn(Sn[8],b),0,-he.shin,0),n.ankle[g]),"shoe")}}var Ae,_T,ha,qc,bT,Sn,Hs=Nt(()=>{Bs();Ae={WALK:0,IDLE:1,SIT:2,CYCLE:3,BROWSE:4},_T=.46,ha={h:.93,back:.17,bbH:.3,crank:.17},qc=(i,t,e)=>Math.max(t,Math.min(e,i));bT=()=>new Float32Array(16),Sn=Array.from({length:10},bT)});function TT(i){if(i._c)return i._c;i._c={};for(let[t,e]of Object.entries(i.colours))i._c[t]=new ft(e);return i._c}var qg,Kr,Wd=Nt(()=>{Xt();Bs();Hs();qg={hips:1,upperArm:2,foreArm:2,hand:2,thigh:2,shin:2,shoe:2,head:1,"lo:upperArm":2,"lo:foreArm":2,"lo:thigh":2,"lo:shin":2};Kr=class{constructor(t,{clippingPlanes:e=null,shadows:n=!0,material:s=null,lod:r=!0,hiDist:o=32,hiCap:a=160}={}){this.cap=t,this.material=s||ps({clippingPlanes:e}),this.group=new Qt,this.group.name="figures";let l=Wg(),c={...Object.fromEntries(Object.keys(qg).map(h=>[h,l[h]]))};for(let h of Xc)c[`hair:${h}`]=l.hair[h];for(let h of Yc)c[`top:${h}`]=l.top[h];for(let h of Hd)h!=="none"&&(c[`acc:${h}`]=l.acc[h]);if(r){for(let h of["head","hips","upperArm","foreArm","thigh","shin","backpack"])c[`lo:${h}`]=l.lo[h];for(let[h,u]of Object.entries(l.lo.hair))c[`lo:hair:${h}`]=u;for(let[h,u]of Object.entries(l.lo.top))c[`lo:top:${h}`]=u}this.meshes=new Map;for(let[h,u]of Object.entries(c)){let f=(h.startsWith("lo:")||h==="acc:umbrella"||!r?t:Math.min(t,a))*(qg[h]||1),d=new dn(u,this.material,f);d.name=`figure:${h}`,d.count=0,d.frustumCulled=!1,d.castShadow=n,d.receiveShadow=!0,d.instanceMatrix.setUsage(Ds),d.setColorAt(0,new ft(1,1,1)),d.instanceColor.setUsage(Ds),this.group.add(d),this.meshes.set(h,{mesh:d,n:0,cap:f,m:d.instanceMatrix.array,c:d.instanceColor.array})}this.count=0,this.lod=r,this.hiDist2=o*o,this.hiCap=a,this.hi=0,this.cullDist2=0,this.eye=null,this._J={},this._cols=null,this._emit=(h,u,f)=>{let d=this.meshes.get(h);if(!d||d.n>=d.cap)return;let p=d.n++;d.m.set(u,p*16);let x=this._cols[f]||this._cols.top;d.c[p*3]=x.r,d.c[p*3+1]=x.g,d.c[p*3+2]=x.b}}begin(t=this.eye){for(let e of this.meshes.values())e.n=0;this.count=0,this.hi=0,this.eye=t}add(t,e){if(this.count>=this.cap)return!1;let n=this.eye;if(n&&this.cullDist2&&(e.x-n.x)**2+(e.y-n.y)**2+(e.z-n.z)**2>this.cullDist2)return!1;this.count++,this._cols=TT(t);let s=!1;if(this.lod){let r=this.eye;s=(r?(e.x-r.x)**2+(e.y-r.y)**2+(e.z-r.z)**2:0)>this.hiDist2||this.hi>=this.hiCap,s||this.hi++}return Yg(t,e,this._emit,Gd(t,e,this._J),s),!0}end(){for(let{mesh:t,n:e}of this.meshes.values())t.count=e,t.visible=e>0,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0}drawCalls(){let t=0;for(let{mesh:e}of this.meshes.values())e.visible&&e.count>0&&t++;return t}dispose(){for(let{mesh:t}of this.meshes.values())t.dispose();this.material.dispose()}}});function Xd(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Zn(i,t={}){let e=Math.imul(i^2654435769,2246822507);e^=e>>>13,e=Math.imul(e,3266489909)^e>>>16;let n=Xd(e),s=n(),r=t.kind||(s<.12?"kid":s<.3?"older":"adult"),o=n()<.5,a;r==="older"?a=Tn(n,o?["bob","short","bun","hat","curly"]:["fringe","short","hat","cap","fringe"]):r==="kid"?a=Tn(n,o?["ponytail","long","bob","curly","beanie"]:["short","curly","cap","beanie","short"]):a=Tn(n,o?["long","bob","bun","ponytail","curly","beanie","short"]:["short","short","curly","cap","beanie","fringe","bun"]);let l=Tn(n,o?["shirt","jacket","coat","dress","shirt"]:["shirt","jacket","coat","shirt"]);r==="older"&&n()<.5&&(l="coat");let c=l==="coat"||l==="jacket"?Tn(n,RT.concat($g.slice(0,6))):Tn(n,$g),h=Tn(n,CT);h===c&&(h=11);let u=Tn(n,DT),f=r==="older"?Tn(n,UT):Tn(n,LT),d=ua(Tn(n,[38,21,11,37,41,44,45,9,6,8])),p=n(),x=r==="kid"?p<.35?"backpack":"none":p<.18?"backpack":p<.38?"bag":"none",m=r==="kid"?.6+n()*.07:r==="older"?.95+n()*.05:(o?.96:1)+n()*.05,g={seed:i,kind:r,fem:o,hair:a,top:l,acc:x,scale:m,width:r==="kid"?.95:(o?.92:.97)+n()*.06,headScale:r==="kid"?1.32:1,stoop:r==="older"?.12+n()*.1:n()*.03,speed:r==="older"?.75+n()*.3:r==="kid"?1.1+n()*.5:1.15+n()*.5,colours:{skin:u,hair:f,top:ua(c),bottom:l==="dress"?u:ua(h),shoe:ua(Tn(n,IT)),hat:d,acc:ua(Tn(n,PT))}};return["cap","beanie","hat"].includes(a)&&(g.colours.hairTint=g.colours.hat),g}var AT,$g,RT,CT,IT,PT,DT,LT,UT,Tn,ua,Vs=Nt(()=>{Bs();AT={4:"#A33A2B",5:"#7A2A22",6:"#C0643A",7:"#6E4A33",8:"#F2F0EA",9:"#A7AAA8",10:"#5C6062",11:"#1E1F21",12:"#4E5864",15:"#5E9C8C",16:"#B8302A",17:"#EFE3C2",18:"#CDB48B",19:"#8F7A57",20:"#6E8798",21:"#22385A",37:"#F2C230",38:"#C8102E",41:"#2F5A3C",42:"#88A891",43:"#D6A445",44:"#5B8DB8",45:"#D9607E",46:"#B5776A"},$g=[44,38,8,37,41,20,45,43,4,9,42,21,17,11,15,6,16,12],RT=[21,11,10,19,7,12,41,5,20,18],CT=[21,11,10,19,20,18,7,12,9,44],IT=[11,7,8,10,5,21,38],PT=[8,37,38,41,44,18,45,11],DT=["#F3CFB0","#EAB892","#D49A6E","#B07650","#8A5638","#5E3A26"],LT=["#2A1D16","#4A2F1E","#734A2A","#A87A45","#D8B26E","#A9471F","#151515"],UT=["#9C9A96","#C9C6C0","#E9E6E0"],Tn=(i,t)=>t[Math.floor(i()*t.length)],ua=i=>AT[i]});function NT(){if(typeof location>"u")return jg;let i=new URLSearchParams(location.hash.replace(/^#/,"")).get("figure");return i&&/^\d+$/.test(i)?+i:jg}var jg,$c,Kg=Nt(()=>{Xt();Wd();Vs();Hs();jg=52;$c=class{constructor(t,e,{seed:n=NT()}={}){this.variant=Zn(n,{kind:"adult"}),this.variant.acc=this.variant.acc==="bag"?"none":this.variant.acc,this.crowd=new Kr(1,{lod:!1}),this.group=new Qt,this.group.name="player",this.group.add(this.crowd.group),this.phase=0,this.t=0,this.speed=0,this.pose={x:0,y:0,z:0,rotY:0,mode:Ae.IDLE,phase:0,speed:0,t:0}}update(t,e,n,s,r){this.t+=r,this.speed+=(n-this.speed)*Math.min(1,r*10);let o=n>2.5?1.15:.75;this.phase+=s/(o*this.variant.scale)*Math.PI,Object.assign(this.pose,{x:t[0],y:t[1],z:t[2],rotY:-e,mode:this.speed>.08?Ae.WALK:Ae.IDLE,phase:this.phase,speed:this.speed,t:this.t}),this.crowd.begin(),this.crowd.add(this.variant,this.pose),this.crowd.end()}}});function zT(i,{touch:t=!1,pad:e=!1,locked:n=!1}={}){return i==="walk"?t?"Joystick to move \xB7 drag the right side to look":e?"Left stick move \xB7 right stick look \xB7 A jump \xB7 B map \xB7 Start menu":n?"Mouse look \xB7 WASD move \xB7 Shift run \xB7 Space jump \xB7 M map \xB7 Esc free mouse":"Click to look around \xB7 WASD move \xB7 Space jump \xB7 M map \xB7 Esc menu":t?"Double-tap the ground to walk there":e?"A: walk at the centre \xB7 left stick pan \xB7 right stick orbit \xB7 LT/RT zoom":"F or double-click to walk there \xB7 right/Ctrl-drag rotate \xB7 middle-drag tilt \xB7 Q E turn \xB7 H help"}var OT,kT,FT,BT,qe,fa,jc,Kc,Zg=Nt(()=>{OT=`
#pl-bar { position: fixed; left: 50%; bottom: 14px; transform: translateX(-50%); display: flex; gap: 10px;
  align-items: center; background: rgba(18,22,30,.72); backdrop-filter: blur(8px); border-radius: 10px;
  padding: 6px 8px 6px 14px; color: #f3f1ea; font: 13px/1.3 system-ui, sans-serif; z-index: 5; max-width: calc(100vw - 32px); }
#pl-bar button, #pl-help button { background: #ffcf5a; color: #1b1b1b; border: 0; border-radius: 7px; padding: 6px 12px;
  font: 600 13px system-ui, sans-serif; cursor: pointer; white-space: nowrap; }
#pl-hint { color: #b9bcc4; }
#pl-street { position: fixed; top: 14px; left: 50%; transform: translateX(-50%); color: #fff; z-index: 5;
  font: 600 18px system-ui, sans-serif; text-shadow: 0 1px 4px rgba(0,0,0,.6); pointer-events: none; }
#pl-toast { position: fixed; top: 54px; left: 50%; transform: translateX(-50%); background: rgba(18,22,30,.8);
  color: #f3f1ea; padding: 6px 14px; border-radius: 8px; font: 13px system-ui, sans-serif; z-index: 6;
  transition: opacity .4s; pointer-events: none; }
#pl-help { position: fixed; inset: 0; margin: auto; width: min(520px, calc(100vw - 32px)); height: fit-content;
  max-height: calc(100vh - 32px); overflow: auto; box-sizing: border-box;
  background: rgba(18,22,30,.9); color: #f3f1ea; border-radius: 12px; padding: 16px 18px; z-index: 7;
  font: 13px/1.5 system-ui, sans-serif; }
#pl-help table { width: 100%; border-collapse: collapse; margin: 8px 0 12px; }
#pl-help td, #pl-help th { text-align: left; padding: 3px 6px; border-bottom: 1px solid rgba(255,255,255,.1); }
#pl-help th { color: #ffcf5a; font-weight: 600; }
.pl-touch { position: fixed; z-index: 4; pointer-events: none; }
#pl-stick { left: 28px; bottom: 90px; width: 120px; height: 120px; border-radius: 50%;
  background: rgba(255,255,255,.14); border: 2px solid rgba(255,255,255,.35); }
#pl-knob { position: absolute; left: 35px; top: 35px; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,207,90,.85); }
#pl-jump { right: 28px; bottom: 100px; width: 74px; height: 74px; border-radius: 50%; pointer-events: auto;
  background: rgba(255,207,90,.8); border: 0; font: 700 14px system-ui, sans-serif; color: #1b1b1b; }
#pl-help h4 { margin: 10px 0 4px; color: #ffcf5a; font-size: 13px; }
#pl-help label { display: flex; align-items: center; gap: 8px; margin: 4px 0; }
#pl-help input[type=range] { flex: 1; accent-color: #ffcf5a; }
#pl-help output { min-width: 3.2em; text-align: right; color: #b9bcc4; }
#pl-compass { position: fixed; right: 14px; bottom: 40px; width: 44px; height: 44px; border-radius: 50%; z-index: 5;
  background: rgba(18,22,30,.72); border: 1px solid rgba(255,255,255,.25); cursor: pointer; padding: 0; }
#pl-compass svg { width: 100%; height: 100%; display: block; }
body.shot #pl-bar, body.shot #pl-toast, body.shot #pl-help, body.shot .pl-touch, body.shot #pl-compass { display: none; }
@media (max-width: 600px) { #pl-hint { display: none; } }
`,kT=[["Look (walk)","Click to capture the mouse, then move it \xB7 Q E","Right stick","Right half: drag"],["Free the mouse","Esc","",""],["Move","W A S D / arrows (where the camera looks)","Left stick","Left half: joystick"],["Run","Shift","Push stick fully / LB","Push joystick fully"],["Jump","Space","A","Jump button"],["Zoom","Wheel / + -","LT / RT","Pinch"],["Walk here","F (cursor) / double-click","A (screen centre)","Double-tap"],["Back to map","M / Map button","B","Map button"],["Rotate map","Right drag / Ctrl or Alt + drag / Q E","Right stick","Two-finger drag"],["Tilt map","Middle drag / right drag up-down","Right stick up-down","Two-finger drag up-down"],["Face north","Click the compass","","Tap the compass"],["Menu (this panel)","H / Esc (mouse free)","Start / Select",""]],FT=[["mouseSens","Mouse / touch sensitivity",.2,3,.05],["padSens","Controller sensitivity",.3,2.5,.05]],BT=[["invertY","Invert Y (mouse / touch)"],["padInvertY","Invert Y (controller)"],["recenter","Camera eases behind you while walking"]],qe=(i,t={},e="")=>Object.assign(document.createElement(i),t,e?{innerHTML:e}:{}),fa=()=>(navigator.maxTouchPoints||0)>0&&matchMedia("(pointer: coarse)").matches,jc=class{constructor(t,e,n){this.stick=qe("div",{id:"pl-stick",className:"pl-touch",hidden:!0}),this.knob=qe("div",{id:"pl-knob"}),this.stick.append(this.knob),this.jump=qe("button",{id:"pl-jump",className:"pl-touch",hidden:!0,textContent:"JUMP"}),this.jump.addEventListener("pointerdown",o=>{o.stopPropagation(),this.jumpDown=!0,e?.()}),document.body.append(this.stick,this.jump),this.active=!1,this.move=[0,0],this.look=[0,0],this.zoom=0,this.pointers=new Map;let s=null;t.addEventListener("pointerdown",o=>{if(o.pointerType!=="touch")return;let a=performance.now();if(!this.active&&s&&a-s.t<320&&Math.hypot(o.clientX-s.x,o.clientY-s.y)<30){n?.(o.clientX,o.clientY),s=null;return}if(s={t:a,x:o.clientX,y:o.clientY},!this.active)return;let l=o.clientX<innerWidth/2&&![...this.pointers.values()].some(c=>c.role==="stick")?"stick":"look";this.pointers.set(o.pointerId,{role:l,x:o.clientX,y:o.clientY,x0:o.clientX,y0:o.clientY})}),t.addEventListener("pointermove",o=>{let a=this.pointers.get(o.pointerId);if(!a)return;let l=[...this.pointers.values()].filter(c=>c.role==="look");if(a.role==="stick"){let h=o.clientX-a.x0,u=o.clientY-a.y0,f=Math.hypot(h,u),d=f>60?60/f:1;this.move=[h*d/60,-u*d/60],this.knob.style.transform=`translate(${h*d}px, ${u*d}px)`}else if(l.length>=2){let[c,h]=l,u=Math.hypot(c.x-h.x,c.y-h.y);a.x=o.clientX,a.y=o.clientY,this.zoom-=Math.hypot(c.x-h.x,c.y-h.y)-u;return}else this.look[0]+=o.clientX-a.x,this.look[1]+=o.clientY-a.y;a.x=o.clientX,a.y=o.clientY});let r=o=>{let a=this.pointers.get(o.pointerId);a&&(this.pointers.delete(o.pointerId),a.role==="stick"&&(this.move=[0,0],this.knob.style.transform=""))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}show(t){this.active=t,this.stick.hidden=this.jump.hidden=!(t&&fa()),t||(this.pointers.clear(),this.move=[0,0])}read(){let t={move:this.move,look:this.look,zoom:this.zoom};return this.look=[0,0],this.zoom=0,t}};Kc=class{constructor({onWalk:t,onExit:e,onNorth:n,onSettings:s,settings:r={}}){document.head.append(qe("style",{textContent:OT})),this.bar=qe("div",{id:"pl-bar"}),this.hint=qe("span",{id:"pl-hint"}),this.button=qe("button",{id:"pl-walk"}),this.button.addEventListener("click",()=>this.mode==="walk"?e():t()),this.bar.append(this.hint,this.button),this.street=qe("div",{id:"pl-street"}),this.toastEl=qe("div",{id:"pl-toast",hidden:!0});let o=kT.map(l=>`<tr>${l.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");this.help=qe("div",{id:"pl-help",hidden:!0},`<b>Controls</b><table><tr><th></th><th>Keyboard + mouse</th><th>Gamepad</th><th>Touch</th></tr>${o}</table>`),this.help.append(this.settingsForm(r,s));let a=qe("button",{textContent:"Close (H)"});a.addEventListener("click",()=>this.toggleHelp(!1)),this.help.append(a),this.compass=qe("button",{id:"pl-compass",title:"Compass: click to face north"},'<svg viewBox="-22 -22 44 44"><g id="pl-needle"><path d="M0 -15 L5 0 L-5 0 Z" fill="#e85d4a"/><path d="M0 15 L5 0 L-5 0 Z" fill="#d8d4c8"/><text y="-16.5" text-anchor="middle" font-size="7" font-family="system-ui,sans-serif" font-weight="700" fill="#fff">N</text></g></svg>'),this.needle=this.compass.querySelector("#pl-needle"),this.compass.addEventListener("click",()=>n?.()),document.body.append(this.bar,this.street,this.toastEl,this.help,this.compass),this.state={pad:!1,locked:!1},this.setMode("map")}settingsForm(t,e){let n=qe("div",{},"<h4>Camera</h4>");for(let[s,r,o,a,l]of FT){let c=qe("label",{},`<span>${r}</span>`),h=qe("input",{type:"range",min:o,max:a,step:l,value:t[s]??1}),u=qe("output",{textContent:`${(+h.value).toFixed(2)}\xD7`});h.addEventListener("input",()=>{t[s]=+h.value,u.textContent=`${(+h.value).toFixed(2)}\xD7`,e?.(t)}),h.addEventListener("change",()=>h.blur()),c.append(h,u),n.append(c)}for(let[s,r]of BT){let o=qe("input",{type:"checkbox",checked:!!t[s]});o.addEventListener("change",()=>{t[s]=o.checked,e?.(t),o.blur()});let a=qe("label");a.append(o,r),n.append(a)}return n}setHeading(t){let e=Math.round(-t*180/Math.PI);e!==this.headingDeg&&(this.headingDeg=e,this.needle.setAttribute("transform",`rotate(${e})`))}setMode(t,e=this.state?.pad??!1){this.mode=t,this.state.pad=e,this.button.textContent=t==="walk"?"Map (M)":"Walk here",t!=="walk"&&this.setStreet(""),this.refreshHint()}setLocked(t){this.state.locked=t,this.refreshHint()}refreshHint(){this.hint.textContent=zT(this.mode,{touch:fa(),...this.state})}setStreet(t){this.street.textContent!==t&&(this.street.textContent=t)}toggleHelp(t=this.help.hidden){this.help.hidden=!t}toast(t){this.toastEl.textContent=t,this.toastEl.hidden=!1,this.toastEl.style.opacity="1",clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.style.opacity="0"},2500)}}});function HT([i,t,e],n,s,r=.05,o=Math.PI/2){let a=Math.hypot(i,t,e);if(a<1e-9)return[i,t,e];let l=Math.atan2(i,e)+n,c=$n(Math.acos($n(t/a,-1,1))+s,r,o),h=Math.sin(c)*a;return[h*Math.sin(l),Math.cos(c)*a,h*Math.cos(l)]}function VT(i){return i.pointerType&&i.pointerType!=="mouse"?null:i.button===1?"tilt":i.button===0&&(i.ctrlKey||i.altKey||i.metaKey)?"orbit":null}var Zc,Jg=Nt(()=>{aa();Zc=class{constructor(t,e,n){Object.assign(this,{canvas:t,controls:e,camera:n}),this.enabled=!0,this.spin={theta:0,phi:0};let s=null;t.addEventListener("pointerdown",o=>{let a=this.enabled&&e.enabled?VT(o):null;if(a){o.stopImmediatePropagation(),o.preventDefault(),s={kind:a,x:o.clientX,y:o.clientY,id:o.pointerId};try{t.setPointerCapture(o.pointerId)}catch{}}},{capture:!0}),t.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let a=t.clientHeight||800,l=Math.PI*2/a;s.kind==="orbit"?this.add(-(o.clientX-s.x)*l,-(o.clientY-s.y)*l):this.add(0,-(o.clientY-s.y)*l),s.x=o.clientX,s.y=o.clientY});let r=o=>{s&&o.pointerId===s.id&&(s=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("auxclick",o=>{o.button===1&&o.preventDefault()})}add(t,e){this.spin.theta+=t,this.spin.phi+=e}yaw(){let t=this.camera.position,e=this.controls.target;return Math.atan2(e.x-t.x,-(e.z-t.z))}north(){let t=this.camera.position,e=this.controls.target;this.spin.theta=qr(Math.atan2(t.x-e.x,t.z-e.z),0)}step(t){if(!this.enabled){this.spin.theta=this.spin.phi=0;return}let e,n;if([e,this.spin.theta]=Fd(this.spin.theta,t),[n,this.spin.phi]=Fd(this.spin.phi,t),!e&&!n)return;let{camera:s,controls:r}=this,o=r.target,a=s.position,l=Math.min(r.maxPolarAngle??Math.PI/2,Math.PI/2-.02),c=HT([a.x-o.x,a.y-o.y,a.z-o.z],e,n,Math.max(.05,r.minPolarAngle||0),l);a.set(o.x+c[0],o.y+c[1],o.z+c[2]),s.lookAt(o)}}});function Qg(i,{maxCells:t=60}={}){let e=[...i].filter(n=>n.kind==="street"&&n.name&&n.bboxIJ);return(n,s)=>{let r="",o=1/0;for(let a of e){let[l,c,h,u]=a.bboxIJ,f=Math.max(l-n,0,n-h),d=Math.max(c-s,0,s-u),p=Math.hypot(f,d);if(p>t)continue;let x=p+.1*Math.min(h-l,u-c);x<o&&(o=x,r=a.name)}return r}}var tx=Nt(()=>{});function ex(i,t,e,n=800,s=.1){let r=a=>[t[0]+e[0]*a,t[1]+e[1]*a,t[2]+e[2]*a],o=a=>i.isSolid(...r(a))===!0;for(let a=s;a<=n;a+=s){if(!o(a))continue;let l=a-s,c=a;for(let h=0;h<12;h++){let u=(l+c)/2;o(u)?c=u:l=u}return{point:r(l),t:l}}return null}function nx(i,t,e=.35){let n=Math.hypot(t[0],t[2])||1;return[i.point[0]-t[0]/n*e,i.point[1]+.05,i.point[2]-t[2]/n*e]}var ix=Nt(()=>{});function sx(i){let t=new URLSearchParams(String(i).replace(/^#/,""));if(t.get("mode")!=="walk"||!t.has("at"))return null;let[e,n]=t.get("at").split(",").map(Number);if(!Number.isFinite(e)||!Number.isFinite(n))return null;let s=r=>t.has(r)&&Number.isFinite(+t.get(r))?+t.get(r):null;return{x:e,z:n,yaw:s("yaw"),camYaw:s("camyaw"),pitch:s("pitch"),dist:s("dist")}}var rx=Nt(()=>{});var ox={};fp(ox,{initPlayer:()=>WT});function WT(i){let{stage:t,controls:e,world:n}=i,s=i.camera||t.camera,r=t.renderer.domElement,o=i.city||Sg(n,i.islands||[]),a=new Bc(o),l=new zc,c=new $c(i.models,n);c.group.visible=!1,t.scene.add(c.group);let h=n?.features?Qg(n.features.values()):()=>"",u=n?.studM||.5,f=/[?&]shot=1/.test(location.search),d="map",p=null,x=null,m=!1,g=null,M=0,v=0,y=0,R=new T,w=[0,0,0],S=Fg(),I=new Zc(r,e,s),b=new Kc({onWalk:()=>H($()),onExit:rt,settings:S,onSettings:F=>Bg(F),onNorth:()=>{d==="walk"?l.aimYaw=0:I.north()}}),_=new jc(r,()=>{m=!0},(F,ot)=>d==="map"&&H(O(F,ot))),C=new Hc(r,{touch:_,settings:S,onLock:F=>b.setLocked(F),onPad:(F,ot)=>{v=Math.max(0,v+(ot?1:-1)),b.toast(ot?`Controller connected: ${F.replace(/\s*\(.*$/,"").slice(0,40)}`:"Controller disconnected"),b.setMode(d,v>0)}});r.addEventListener("pointermove",F=>{g=[F.clientX,F.clientY]}),r.addEventListener("dblclick",F=>{d==="map"&&!p&&H(O(F.clientX,F.clientY))}),r.addEventListener("click",F=>{d==="walk"&&F.pointerType!=="touch"&&!fa()&&(b.toggleHelp(!1),C.requestLock())});let L=()=>!f&&!fa(),U=new es;function O(F,ot){let k=r.getBoundingClientRect();return U.setFromCamera(new j((F-k.left)/k.width*2-1,-((ot-k.top)/k.height)*2+1),s),{origin:U.ray.origin.toArray(),dir:U.ray.direction.toArray()}}function $(){let F=r.getBoundingClientRect();return O(F.left+F.width/2,F.top+F.height/2)}function H(F){let ot=ex(o,F.origin,F.dir);if(!ot)return b.toast("No ground there"),!1;let k=Math.atan2(F.dir[0],-F.dir[2]);return V(nx(ot,F.dir),k,k,!f),!0}function Z(F,ot,k=0,Q=k,D=!0){let yt=o.groundHeight(F,-ot);return yt==="unknown"?(b.toast("That place is not loaded yet"),!1):(V([F,yt+.05,-ot],k,Q,D),!0)}function V(F,ot,k,Q){d==="map"&&(x={pos:s.position.clone(),target:e.target.clone(),fov:s.fov,near:s.near}),a.spawn(F[0],F[1],F[2],ot),w.splice(0,3,...a.pos),l.yaw=k,l.snap(),l.dist=l.want,y=0,c.group.visible=!0,c.update(a.pos,a.yaw,0,0,0),e.enabled=!1,I.enabled=!1,C.lookActive=!0,L()&&C.requestLock(),s.near=.1,d="walk",b.setMode("walk",v>0),_.show(!0);let{focus:D,position:yt}=l.update(o,a.pos,1);Q?gt(yt,D,55,"walk"):(p=null,dt(yt,D,55))}function rt(){if(d!=="walk")return;d="map",C.lookActive=!1,C.releaseLock(),_.show(!1),b.setMode("map",v>0);let F=new T(...a.pos),ot=new T(-Math.sin(l.yaw),0,Math.cos(l.yaw)),k=F.clone().addScaledVector(ot,32).add(new T(0,38,0));gt(k.toArray(),F.toArray(),x?.fov??40,"map")}function dt(F,ot,k){s.position.set(...F),R.set(...ot),s.lookAt(R),s.fov!==k&&(s.fov=k,s.updateProjectionMatrix()),s.updateProjectionMatrix()}function gt(F,ot,k,Q){let D=Q==="walk"?e.target.clone():R.clone();p={t:0,dur:1.1,fromPos:s.position.clone(),fromLook:D,fromFov:s.fov,toPos:F,toLook:ot,toFov:k,to:Q}}function et(F){p.t=Math.min(1,p.t+F/p.dur);let ot=GT(p.t),k=p.toPos,Q=p.toLook;p.to==="walk"&&({position:k,focus:Q}=l.update(o,a.pos,F));let D=p.fromPos.clone().lerp(new T(...k),ot),yt=p.fromLook.clone().lerp(new T(...Q),ot);dt(D.toArray(),yt.toArray(),p.fromFov+(p.toFov-p.fromFov)*ot),!(p.t<1)&&(p.to==="map"&&(s.near=x?.near??.3,s.updateProjectionMatrix(),e.target.copy(yt),e.enabled=!0,I.enabled=!0,e.update()),p=null)}function Et(F,ot){let k=s.position.clone().sub(e.target),Q=k.length(),[D,yt]=F.move;if(D||yt){let tt=new T(-k.x,0,-k.z).normalize(),Mt=new T(-tt.z,0,tt.x),vt=tt.multiplyScalar(yt).add(Mt.multiplyScalar(D)).multiplyScalar(Q*.9*ot);e.target.add(vt),s.position.add(vt)}if((F.look[0]||F.look[1])&&I.add(-F.look[0],F.look[1]),F.zoom){let tt=new Di().setFromVector3(k);tt.radius=se.clamp(tt.radius*Math.exp(F.zoom*.15),e.minDistance,e.maxDistance),s.position.copy(e.target).add(new T().setFromSpherical(tt)),s.lookAt(e.target)}}function X(F=b.help.hidden){b.toggleHelp(F),F&&C.releaseLock()}let at=performance.now();function St(){let F=performance.now(),ot=Math.min(.1,Math.max(0,(F-at)/1e3));at=F;let k=C.poll(ot);if(k.pressed.has("help")&&X(),d==="map"){if(k.pressed.has("menu")&&X(!1),k.pressed.has("enter")&&!p){let Q=k.kbHeld.has("enter")&&g;H(Q?O(...g):$())}else p||Et(k,ot);p||I.step(ot)}else k.pressed.has("menu")&&X(),k.pressed.has("map")&&(b.toggleHelp(!1),rt());if(d==="walk"||p&&p.to==="walk"){p||l.input(k.look,k.zoom);let Q=Math.hypot(...k.move)>.2;y=k.lookInput?0:y+ot,!p&&S.recenter&&a.grounded&&l.recenter(a.yaw,{idle:y,moving:Q,moveAngle:Math.atan2(k.move[0],k.move[1]),dt:ot});let D=m||k.pressed.has("jump");m=!1;let yt=Hg(k,a.o.walk,a.o.run),tt=p?a.update(ot,{},l.yaw):a.update(ot,{move:k.move,speed:yt,jump:D},l.yaw);if(c.update(a.pos,a.yaw,tt.speed,tt.travelled,ot),w[0]=a.pos[0],w[2]=a.pos[2],w[1]+=(a.pos[1]-w[1])*Math.min(1,ot*10),!p){let{focus:Mt,position:vt}=l.update(o,w,ot);dt(vt,Mt,s.fov)}c.group.visible=l.dist>.9||!!p,(M-=ot)<=0&&(M=.5,b.setStreet(h(Math.floor(a.pos[0]/u),Math.floor(-a.pos[2]/u))))}p&&et(ot),b.setHeading(d==="walk"&&!p?l.yaw:I.yaw())}let ht=t.render.bind(t);t.render=F=>{St(),ht(d==="walk"||p?R:F)};let ut=()=>{let F=sx(location.hash);if(!F)return!1;let ot=(F.yaw??0)*Yd;return F.pitch!=null&&(l.pitch=F.pitch*Yd),F.dist!=null&&(l.want=l.dist=F.dist),Z(F.x,F.z,ot,(F.camYaw??F.yaw??0)*Yd,!1)};ut()&&i.lod&&i.lod.settle(s),window.addEventListener("hashchange",ut);let K={get mode(){return d},state:()=>({mode:d,pos:[...a.pos],yaw:a.yaw,grounded:a.grounded,frozen:a.frozen,cam:s.position.toArray(),camDist:l.dist,street:b.street.textContent}),enterAtUnity:Z,exitWalk:rt,enterAt:H,ctrl:a,follow:l,city:o,orbit:I,input:C,settings:S};return window.__bloxPlayer=K,K}var Yd,GT,ax=Nt(()=>{Xt();Tg();Dg();Ug();Vg();Kg();Zg();Jg();Bd();tx();ix();rx();Yd=Math.PI/180,GT=i=>i<.5?2*i*i:1-(-2*i+2)**2/2});function $d(i=new Date,t="Europe/Amsterdam"){try{let e=new Intl.DateTimeFormat("en-GB",{timeZone:t,weekday:"short",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"}).formatToParts(i),n=o=>e.find(a=>a.type===o)?.value,s=qd.indexOf(n("weekday")),r=+n("hour")%24*3600+ +n("minute")*60+ +n("second");if(s>=0&&Number.isFinite(r))return{day:s,sec:r}}catch{}return{day:(i.getDay()+6)%7,sec:i.getHours()*3600+i.getMinutes()*60+i.getSeconds()}}function cx(i){if(i==null||i==="")return null;if(/^\d$/.test(i))return+i%7;let t=qd.findIndex(e=>String(i).toLowerCase().startsWith(e.toLowerCase()));return t>=0?t:null}var qd,lx,Jc,jd=Nt(()=>{qd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],lx=[1,10,60];Jc=class{constructor({day:t=0,sec:e=0,speed:n=1}={}){this.t=0,this.speed=n,this.set(t,e)}set(t,e){this.t=((t*86400+e)%604800+604800)%604800}get day(){return Math.floor(this.t/86400)}get sec(){return this.t-this.day*86400}get hours(){return this.sec/3600}setHours(t){this.set(this.day,Math.round(t*3600))}advance(t){return this.set(0,this.t+t*this.speed),this}label(){let t=Math.floor(this.sec),e=String(Math.floor(t/3600)).padStart(2,"0"),n=String(Math.floor(t/60)%60).padStart(2,"0");return`${qd[this.day]} ${e}:${n}`}}});function XT(i,t,e=15){let n=i.length/3;if(n<1||t<i[0]||t>i[3*(n-1)])return null;for(let s=0;s<n-1;s++){let r=i[3*s],o=i[3*s+1],a=i[3*s+2],l=i[3*s+3],c=i[3*s+5];if(t<r)return a;let h=o;if(o<=r&&s>0&&(h=r+Math.min(e,.3*Math.max(0,l-r))),t<=h)return a;if(t<=l){let u=l-h;return u>0?a+(c-a)*((t-h)/u):c}}return i[3*(n-1)+2]}var Qc,hx=Nt(()=>{Qc=class{constructor(t){this.routes=t.routes||[],this.shapes=(t.shapes||[]).map(e=>{let n=[],s=[];for(let r=0;r<e.pts.length;r+=3)n.push([e.pts[r],e.pts[r+1]]),s.push(e.pts[r+2]);return{id:e.id,pts:n,cum:s,d0:s[0],d1:s[s.length-1]}}),this.patterns=(t.patterns||[]).map(e=>({...e,duration:e.st[e.st.length-3]})),this.trips=(t.trips||[]).slice().sort((e,n)=>e[1]-n[1]),this.starts=Float64Array.from(this.trips,e=>e[1]),this.maxDuration=this.patterns.reduce((e,n)=>Math.max(e,n.duration),0),this.week=t.meta?.week||null}lowerBound(t){let e=0,n=this.starts.length;for(;e<n;){let s=e+n>>1;this.starts[s]<t?e=s+1:n=s}return e}activeAt(t,e){let n=[];for(let[s,r]of[[t,e],[(t+6)%7,e+86400]]){let o=1<<s;for(let a=this.lowerBound(r-this.maxDuration);a<this.trips.length&&this.starts[a]<=r;a++){let[l,c,h]=this.trips[a];if(!(h&o))continue;let u=this.patterns[l],f=XT(u.st,r-c,15);if(f===null)continue;let d=this.shapes[u.shape];f<d.d0||f>d.d1||n.push({id:`${s}:${a}`,trip:a,pattern:u,shape:d,route:this.routes[u.route],dist:f})}}return n}}});function Un(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function nh(i,t,e){if(i==null)return t;let n=(t-i+540)%360-180;return(i+Math.max(-e,Math.min(e,n))+360)%360}function ux(i,t=1.1){let e=t,n=new Map,s=(r,o)=>r*73856093^o*19349663;for(let r of i){r.slow=1;let o=s(Math.floor(r.x/e),Math.floor(r.z/e));n.has(o)||n.set(o,[]),n.get(o).push(r)}for(let r of i){let o=Math.floor(r.x/e),a=Math.floor(r.z/e),l=0;for(let c=o-1;c<=o+1;c++)for(let h=a-1;h<=a+1;h++)for(let u of n.get(s(c,h))||[]){if(u===r)continue;let f=u.x-r.x,d=u.z-r.z,p=Math.hypot(f,d);if(p>t||p===0||(f*r.dirX+d*r.dirZ)/p<.3)continue;u.dirX*r.dirX+u.dirZ*r.dirZ>.5?r.slow=Math.min(r.slow,Math.max(.3,p/t*Math.min(1,u.speed/r.speed))):l=1}r.lateralGoal=l?Math.min(2,r.baseLateral+.9):r.baseLateral??r.lateralGoal}}var da,th,eh,Zr,Gs=Nt(()=>{da=class{constructor(t,{cell:e=32}={}){let n=t.nodes.length/2;this.count=n,this.x=new Float32Array(n),this.z=new Float32Array(n);for(let o=0;o<n;o++)this.x[o]=t.nodes[2*o],this.z[o]=t.nodes[2*o+1];this.w=Float32Array.from({length:n},(o,a)=>t.weights?.[a]??1),this.base=this.w.slice();let s=new Uint32Array(n+1);for(let o=0;o<t.edges.length;o++)s[t.edges[o]+1]++;for(let o=0;o<n;o++)s[o+1]+=s[o];this.off=s.slice(),this.adj=new Int32Array(t.edges.length);let r=s.slice();for(let o=0;o<t.edges.length;o+=2){let a=t.edges[o],l=t.edges[o+1];this.adj[r[a]++]=l,this.adj[r[l]++]=a}this.cell=e,this.buckets=new Map;for(let o=0;o<n;o++){if(this.off[o+1]===this.off[o])continue;let a=this.key(Math.floor(this.x[o]/e),Math.floor(this.z[o]/e));this.buckets.has(a)||this.buckets.set(a,[]),this.buckets.get(a).push(o)}}key(t,e){return t*100003+e}neighbours(t){return this.adj.subarray(this.off[t],this.off[t+1])}dist(t,e){return Math.hypot(this.x[e]-this.x[t],this.z[e]-this.z[t])}pickNext(t,e,n){let s=this.neighbours(e);if(s.length===0)return t>=0?t:e;let r=0,o=0;if(t>=0){let h=this.dist(t,e)||1;r=(this.x[e]-this.x[t])/h,o=(this.z[e]-this.z[t])/h}let a=0,l=new Float64Array(s.length);for(let h=0;h<s.length;h++){let u=s[h];if(u===t&&s.length>1)continue;let f=this.dist(e,u)||1,d=t>=0?((this.x[u]-this.x[e])*r+(this.z[u]-this.z[e])*o)/f:0;l[h]=Math.sqrt(this.w[u])*(.25+2*Math.max(0,d)**2),a+=l[h]}let c=n()*a;for(let h=0;h<s.length;h++)if(c-=l[h],l[h]>0&&c<=0)return s[h];return s[s.length-1]}spawnNear(t,e,n,s,r=0){let o=this.cell,a=[],l=0;for(let h=Math.floor((t-n)/o);h<=Math.floor((t+n)/o);h++)for(let u=Math.floor((e-n)/o);u<=Math.floor((e+n)/o);u++)for(let f of this.buckets.get(this.key(h,u))||[]){let d=Math.hypot(this.x[f]-t,this.z[f]-e);d>n||d<r||(a.push(f),l+=this.w[f])}if(!a.length)return r>0?this.spawnNear(t,e,n,s,0):-1;let c=s()*l;for(let h of a)if(c-=this.w[h],c<=0)return h;return a[a.length-1]}},th=(i,t,e,n)=>(1-n)*(1-n)*i+2*n*(1-n)*t+n*n*e,eh=(i,t,e,n)=>2*(1-n)*(t-i)+2*n*(e-t),Zr=class{constructor(t,e,n,{speed:s=1.3,lateral:r=0,corner:o=1.2}={}){Object.assign(this,{g:t,rand:n,speed:s,lateral:r,lateralGoal:r,slow:1,corner:o}),this.p=-1,this.a=e,this.b=t.pickNext(-1,e,n),this.c=t.pickNext(this.a,this.b,n),this.s=n()*t.dist(this.a,this.b),this.x=0,this.z=0,this.yaw=0,this.heading=null}cornerR(t,e,n){return t<0||n<0||t===n?0:Math.min(this.corner,this.g.dist(t,e)/2,this.g.dist(e,n)/2)}step(t){let e=this.g,n=this.speed*this.slow*t;this.s+=n;let s=e.dist(this.a,this.b),r=0;for(;this.s>=s&&r++<64;)if(this.s-=s,this.p=this.a,this.a=this.b,this.b=this.c,this.c=e.pickNext(this.a,this.b,this.rand),s=e.dist(this.a,this.b),s===0){this.s=0;break}return this.lateral+=(this.lateralGoal-this.lateral)*Math.min(1,t*1.5),this.place(),n}place(){let t=this.g,{p:e,a:n,b:s,c:r,s:o}=this,a=t.dist(n,s)||1e-6,l=this.cornerR(e,n,s),c=this.cornerR(n,s,r),h=t.x,u=t.z,f,d,p,x,m=(M,v,y)=>{let R=t.dist(M,v)||1e-6;return[h[M]+(h[v]-h[M])*y/R,u[M]+(u[v]-u[M])*y/R]};if(l>0&&o<l){let[M,v]=m(n,e,l),[y,R]=m(n,s,l),w=.5+o/(2*l);f=th(M,h[n],y,w),d=th(v,u[n],R,w),p=eh(M,h[n],y,w),x=eh(v,u[n],R,w)}else if(c>0&&o>a-c){let[M,v]=m(s,n,c),[y,R]=m(s,r,c),w=(o-(a-c))/(2*c);f=th(M,h[s],y,w),d=th(v,u[s],R,w),p=eh(M,h[s],y,w),x=eh(v,u[s],R,w)}else f=h[n]+(h[s]-h[n])*o/a,d=u[n]+(u[s]-u[n])*o/a,p=h[s]-h[n],x=u[s]-u[n];let g=Math.hypot(p,x)||1;this.x=f+x/g*this.lateral,this.z=d-p/g*this.lateral,this.dirX=p/g,this.dirZ=x/g,this.yaw=(Math.atan2(p,x)*180/Math.PI+360)%360}}});function $T(i,t){let e=new Set;for(let n of i.bricks){let s=t.get(n.type);if(!s)continue;let[r,o]=Us(s,n.rot&Xn);for(let a=0;a<s.h;a++)for(let l=0;l<o;l++)for(let c=0;c<r;c++)e.add(an(n.i+c,n.j+l,n.k+a))}return e}function jT(i,{palette:t,types:e,mats:n,studM:s=.5,plateM:r=.2}){let o=$T(i,e),a=(d,p,x)=>o.has(an(d,p,x)),l=i.pivot||[0,0,0],c=qo(t),h=[],u=new ft;for(let d of i.bricks){let p=e.get(d.type);if(!p)continue;let x=d.part&&i.parts?.[d.part]?d.part:"",m=x?i.parts[x].pivot:l,g=new os(n,s,r);g.glassEntry=c;let M=d.rot||0,v=M&Xn,y=!!(M&li),R=t.get(d.color),w=n.classOf(R)==="glass"||["window","door"].includes(p.kind);if(g.addBrick({I:d.i,J:d.j,K:d.k,t:p,rot:v,entry:R,exact:y,glow:w?YT:null}),!(M&Ur)){ln(R,d.i,d.j,d.k,y,u);for(let[I,b,_]of Yo(p,v,d.i,d.j,d.k,a))g.addStud(I,b,_,R,u)}let S=new Ot().makeTranslation(Li(-m[0],-m[1],-m[2],s,r));for(let I of g.buckets.values()){let b=I.key.includes(":pane|");I.mats.forEach((_,C)=>h.push({geometry:I.geometry,material:I.material,key:`${I.geometry.uuid}|${I.material.uuid}`,matrix:S.clone().multiply(_),part:x,color:b?-1:d.color,base:I.cols[C].clone(),glow:I.glow?I.glow[C]:null}))}}let f={};for(let[d,p]of Object.entries(i.parts||{}))f[d]=Li(p.pivot[0]-l[0],p.pivot[1]-l[1],p.pivot[2]-l[2],s,r);return{prims:h,hinges:f}}var YT,qT,ih,fx=Nt(()=>{Xt();Br();wn();Vo();YT=new ft("#ffd49a").multiplyScalar(.3),qT=new T(1,0,0);ih=class{constructor(t,e,n,{shadows:s=!0}={}){let{prims:r,hinges:o}=jT(t,e);this.model=t,this.cap=n,this.count=0,this.palette=e.palette,this.hinges=o,this.group=new Qt,this.group.name=`instanced:${t.name}`;let a=new Map;for(let l of r)a.has(l.key)||a.set(l.key,[]),a.get(l.key).push(l);this.batches=[];for(let l of a.values()){let c=l.length*n,h=l[0].geometry;if(l.some(f=>f.glow)){h=h.clone(),h.userData.owned=!0;let f=new Float32Array(c*3);for(let d=0;d<n;d++)l.forEach((p,x)=>(p.glow||new ft(0,0,0)).toArray(f,(d*l.length+x)*3));h.setAttribute("aGlow",new Ii(f,3))}let u=new dn(h,l[0].material,c);u.count=0,u.frustumCulled=!1,u.castShadow=s&&!l[0].material.transparent,u.receiveShadow=!0,u.instanceMatrix.setUsage(Ds);for(let f=0;f<n;f++)l.forEach((d,p)=>u.setColorAt(f*l.length+p,d.base));this.group.add(u),this.batches.push({mesh:u,list:l})}this._m=new Ot,this._pose=new Ot,this._part=new Map,this._q=new Ie,this._v=new T,this._s=new T(1,1,1)}setCount(t){this.count=Math.min(t,this.cap);for(let{mesh:e,list:n}of this.batches)e.count=this.count*n.length}setColors(t,e){let n=new ft;for(let{mesh:s,list:r}of this.batches)r.forEach((o,a)=>{let l=e?.[o.color];l===void 0||o.color<0?n.copy(o.base):l instanceof ft?n.copy(l):ln(this.palette.get(l),t,a,0,!1,n),s.setColorAt(t*r.length+a,n)}),s.instanceColor.needsUpdate=!0}setPose(t,e,n,s,r,o=null){this._q.setFromAxisAngle(new T(0,1,0),r),this._pose.compose(this._v.set(e,n,s),this._q,this._s),this._part.clear();for(let[a,l]of Object.entries(this.hinges)){let c=o?.[a]||0,h=new Ot().makeTranslation(l.x,l.y,l.z);c&&h.multiply(new Ot().makeRotationAxis(qT,c)),this._part.set(a,this._pose.clone().multiply(h))}for(let{mesh:a,list:l}of this.batches)l.forEach((c,h)=>{let u=c.part?this._part.get(c.part):this._pose;a.setMatrixAt(t*l.length+h,this._m.multiplyMatrices(u,c.matrix))})}commit(){for(let{mesh:t}of this.batches)t.instanceMatrix.needsUpdate=!0}dispose(){for(let{mesh:t}of this.batches)t.geometry.userData.owned&&t.geometry.dispose(),t.dispose()}}});function dx(i,{fullDist:t=160,farDist:e=700,fullCap:n=24,boxCap:s=200}={}){let r=i.map((l,c)=>c).filter(l=>Number.isFinite(i[l])).sort((l,c)=>i[l]-i[c]),o=[],a=[];for(let l of r)i[l]<=t&&o.length<n?o.push(l):i[l]<=e&&a.length<s&&a.push(l);return{full:o,box:a,hidden:i.length-o.length-a.length}}var px=Nt(()=>{});function sh(i){let t=String(i?.agency||"").toUpperCase().replace(/[^A-Z]/g,"");return(Kd[t]||Kd[t.slice(0,3)])?.body||KT}var Kd,KT,mx=Nt(()=>{Kd={ARR:{body:"#0B5FA5",name:"Arriva (Limburg)"},ARRIVA:{body:"#0B5FA5",name:"Arriva"},QBUZZ:{body:"#E2001A",name:"Qbuzz"},KEOLIS:{body:"#1E2F5A",name:"Keolis"},FLIXBUS:{body:"#73D700",name:"FlixBus"}},KT=Kd.ARR.body});function QT(i,t=6){let e=new Ln({path:i.pts,loop:!1,turnRadius:t,speed:0});return e.cum=i.cum.map(n=>n-i.d0),e.length=e.cum[e.cum.length-1],e}function t2(i,t){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=128,e.height=64;let n=e.getContext("2d");n.fillStyle="#111",n.fillRect(0,0,128,64),n.fillStyle=t,n.fillRect(4,4,120,56),n.fillStyle="#fff",n.font="bold 44px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i.slice(0,4),64,34);let s=new Zi(e);return s.colorSpace=ke,s}var gx,ZT,JT,rh,xx=Nt(()=>{Xt();bc();fx();px();mx();gx=1.6,ZT=8,JT=[38,16,4,21,44,20,41,42,37,43,8,10,45];rh=class{constructor({timetable:t,model:e,opts:n,ground:s,caps:r={}}){this.tt=t,this.ground=s,this.caps={full:24,box:300,fullDist:180,farDist:900,...r},this.palette=n.palette,this.clip=n.mats.clippingPlanes||null,this.group=new Qt,this.group.name="life:buses",this.full=new ih(e,n,this.caps.full),this.group.add(this.full.group);let o=e.size[1]*n.studM,a=e.size[0]*n.studM,l=e.size[2]*n.plateM,c=new Vn(a,l,o).translate(0,l/2,0);if(this.boxes=new dn(c,new oi({roughness:.5,clippingPlanes:this.clip}),this.caps.box),this.boxes.count=0,this.boxes.frustumCulled=!1,this.boxes.castShadow=!0,this.group.add(this.boxes),this.movers=new Map,this.wheelR=Object.fromEntries(Object.entries(e.parts||{}).filter(([h])=>h.startsWith("wheel")).map(([h,u])=>[h,Math.max(.05,(u.pivot[2]-(e.pivot?.[2]||0))*n.plateM)])),this.bodyIdx=JT.filter(h=>n.palette.has(h)),this.slotRoute=new Array(this.caps.full).fill(null),this.signMats=new Map,this.signs=[],typeof document<"u")for(let h=0;h<ZT;h++){let u=new Qt,f=new pe(new Ri(1.5,.6));f.position.set(0,l-.45,-o/2-.03),f.rotation.set(0,Math.PI,0);let d=new pe(new Ri(2,1));d.position.set(0,l+.22,-o/4),d.rotation.set(-Math.PI/2,0,0),u.add(f,d),u.visible=!1,this.group.add(u),this.signs.push(u)}this.stats={active:0,full:0,box:0,hidden:0},this.color=new ft}signMaterial(t){let e=`${t.short}|${t.colour}`;if(!this.signMats.has(e)){let n=t2(String(t.short??""),t.colour||"#C8102E");this.signMats.set(e,new Ki({map:n,clippingPlanes:this.clip}))}return this.signMats.get(e)}mover(t){return this.movers.has(t)||this.movers.set(t,QT(t)),this.movers.get(t)}poses(t){return this.tt.activeAt(t.day,t.sec).map(e=>{let n=this.mover(e.shape).poseAt(e.dist-e.shape.d0),s=n.yaw*Math.PI/180,r=n.position[0]+Math.cos(s)*gx,o=n.position[2]-Math.sin(s)*gx;return{x:r,y:this.ground(r,o),z:o,yaw:n.yaw,dist:e.dist,route:e.route,id:e.id}})}routeColour(t){return t._body===void 0&&(t._body=new ft(sh(t))),t._body}update(t,e){let n=this.poses(t),s=e.position,r=n.map(f=>Math.hypot(f.x-s.x,f.y-s.y,-f.z-s.z)),o=dx(r,{fullDist:this.caps.fullDist,farDist:this.caps.farDist,fullCap:this.caps.full,boxCap:this.caps.box});o.full.forEach((f,d)=>{let p=n[f];this.slotRoute[d]!==p.route&&(this.slotRoute[d]=p.route,this.full.setColors(d,{38:p.route?this.routeColour(p.route):new ft(sh(null))}));let x={};for(let[m,g]of Object.entries(this.wheelR))x[m]=-p.dist/g;this.full.setPose(d,p.x,p.y,-p.z,-p.yaw*Math.PI/180,x)}),this.full.setCount(o.full.length),this.full.commit();let a=new Ot,l=new Ie,c=new T(0,1,0),h=new T(1,1,1),u=new T;return o.box.forEach((f,d)=>{let p=n[f];a.compose(u.set(p.x,p.y,-p.z),l.setFromAxisAngle(c,-p.yaw*Math.PI/180),h),this.boxes.setMatrixAt(d,a),this.boxes.setColorAt(d,p.route?this.routeColour(p.route):this.color.set(sh(null)))}),this.boxes.count=o.box.length,this.boxes.instanceMatrix.needsUpdate=!0,this.boxes.instanceColor&&(this.boxes.instanceColor.needsUpdate=!0),this.signs.forEach((f,d)=>{let p=o.full[d];if(f.visible=p!==void 0,!f.visible)return;let x=n[p];f.position.set(x.x,x.y,-x.z),f.rotation.set(0,-x.yaw*Math.PI/180,0);let m=this.signMaterial(x.route||{short:"",colour:"#C8102E"});for(let g of f.children)g.material=m}),this.stats={active:n.length,full:o.full.length,box:o.box.length,hidden:o.hidden},n}}});function vx(i,t,e,n,s){let r=n*n,o=[];for(let a of i){let l=(a.x-t)**2+(a.z-e)**2;l<=r&&o.push([l,a])}return o.sort((a,l)=>a[0]-l[0]),o.slice(0,s).map(a=>a[1])}function oh(i,t){t=(t%24+24)%24;for(let e=1;e<i.length;e++){let[n,s]=i[e-1],[r,o]=i[e];if(t<=r)return s+(o-s)*((t-n)/(r-n||1))}return i[i.length-1][1]}function Zd(i,t=2){let e=oh(_x,i);return t===5?e*=1.25:t===6?e*=i<11.5?.55:1.05:t===3&&i>17&&(e*=1.1),Math.min(1.3,e)}function Mx(i,t=2){let e=oh(e2,i);return t>=5?e*(t===5?.75:.55)+.1*oh(_x,i):e}function bx(i,t=2){return Math.min(1,oh(n2,i)*(t>=4?1.15:1))}function ch(i,t,e){return!i||!i.days?.includes(t)?"off":e>=i.open&&e<i.close?"open":e>=i.open-3600&&e<i.open?"setup":e>=i.close&&e<i.close+3600?"packing":"off"}function hh(i,t,e){let n=!1,s=i.length/2;for(let r=0,o=s-1;r<s;o=r++){let a=i[2*r],l=i[2*r+1],c=i[2*o],h=i[2*o+1];l>e!=h>e&&t<(c-a)*(e-l)/(h-l)+a&&(n=!n)}return n}function wx(i,t,e,{market:n=null,open:s=!1,hours:r=12,marketBoost:o=3,squareBoost:a=1.6}={}){let l=Float32Array.from(i),c=0;for(let u of i)c=Math.max(c,u);let h=r>=9&&r<=19;for(let u=0;u<l.length;u++)h&&i[u]>=c*.75&&(l[u]*=a),s&&n&&hh(n.poly,t[u],e[u])&&(l[u]*=o);return l}var Jr,ah,lh,yx,_x,e2,n2,pa=Nt(()=>{Jr={high:900,medium:500,low:200,lite:80},ah={high:140,medium:80,low:30,lite:12},lh={high:110,medium:65,low:25,lite:10},yx={high:{r:140,cap:300},medium:{r:90,cap:160},low:{r:55,cap:80},lite:{r:30,cap:30}};_x=[[0,.12],[5,.05],[7,.3],[9,.6],[11,.95],[12,1],[17,1],[19,.8],[22,.4],[24,.12]],e2=[[0,.08],[5,.05],[7,.55],[8,1],[9.5,.7],[12,.75],[16,.85],[17.5,1],[19,.6],[22,.3],[24,.08]],n2=[[0,.05],[2,0],[9,.1],[10.5,.4],[12.5,.85],[14.5,.6],[16.5,.7],[19,.95],[21.5,.8],[23.5,.3],[24,.05]]});function o2(i,t,e=.8){let n=0;for(let s of t){let r=s.yaw*Math.PI/180,o=Math.sin(r),a=Math.cos(r),l=s.halfW+e,c=s.halfL+e;for(let h of i){let u=h.x-s.x,f=h.z-s.z;if(u*u+f*f>(c+l)*(c+l))continue;let d=u*o+f*a,p=u*a-f*o;if(Math.abs(d)>c||Math.abs(p)>l)continue;let x=(p>=0?l:-l)-p;h.x+=a*x,h.z-=o*x,n++}}return n}function a2(i){for(let[t,e]of i2){if(i<e)return t;i-=e}return 1}function Ex(i,t){i.v.acc=t>0&&i.v.kind!=="kid"&&i.u<t?"umbrella":i.v.baseAcc}var i2,s2,r2,uh,Sx=Nt(()=>{Hs();Vs();Gs();pa();i2=[[1,.5],[2,.34],[3,.12],[4,.04]],s2=.62,r2=.78;uh=class{constructor({graph:t,ground:e,cap:n=Jr.high,seed:s=7}){Object.assign(this,{graph:t,ground:e,cap:n}),this.rand=Un(s),this.groups=[],this.people=0,this.count=0,this.radius=120,this.nextId=1,this.t=0,this.rain=0}spawn(t,e,n,s){let r=this.graph.spawnNear(e,n,this.radius,this.rand,s);if(r<0)return!1;let o=this.rand,a=t.size||a2(o()),l=[],c=9,h=a>=3&&o()<.4;for(let d=0;d<a;d++){let p=h?d<2?"adult":"kid":void 0,x=Zn(this.nextId++*31+7,p?{kind:p}:{});x.baseAcc=x.acc,l.push({v:x,phase:o()*Math.PI*2,off:(d-(a-1)/2)*s2,back:(o()-.5)*.35,yaw:null,look:0,u:o()}),this.rain>0&&Ex(l[l.length-1],this.rain),c=Math.min(c,x.speed)}let u=(o()-.5)*1.4,f=new Zr(this.graph,r,o,{speed:c,lateral:u});return f.baseLateral=u,f.place(),Object.assign(t,{walker:f,members:l,size:a,pause:0,nextPause:15+o()*60,chat:o()<.6}),!0}setRain(t){let e=Math.max(0,Math.min(1,t))*.75;if(e!==this.rain){this.rain=e;for(let n of this.groups)for(let s of n.members||[])Ex(s,e)}}setCount(t,e){t=Math.min(t,this.cap);let n=0,s=0;for(;s<this.groups.length&&n<t;s++)n+=this.groups[s].size;for(;n<t;){let r={size:0};if(!this.spawn(r,e[0],e[1],0))break;this.groups.push(r),n+=r.size,s++}this.active=s,this.people=this.count=n}update(t,e,n=this.radius,s=[]){this.radius=n,this.t+=t,this.dt=t;let r=this.groups.slice(0,this.active??0);ux(r.map(a=>a.walker));let o=this.rand;for(let a of r){let l=a.walker;Math.hypot(l.x-e[0],l.z-e[1])>n*1.25&&this.spawn(a,e[0],e[1],n*.5),a.pause>0?(a.pause-=t,a.travelled=0,l.place()):(a.nextPause-=t,a.nextPause<=0&&(a.pause=(a.size>1&&a.chat?4:2)+o()*8,a.nextPause=25+o()*70),a.travelled=l.step(t)),s.length&&o2([l],s)}}draw(t){let e=this.t;for(let n=0;n<(this.active??0);n++){let s=this.groups[n],r=s.walker,o=r.dirX??0,a=r.dirZ??1,l=a,c=-o,h=s.pause<=0;for(let u of s.members){let f=r.x+l*u.off-o*u.back,d=r.z+c*u.off-a*u.back,p=r.yaw;!h&&s.size>1&&s.chat&&(p=(r.yaw+(u.off<0?70:-70)+360)%360),u.yaw=nh(u.yaw,p,400*Math.max(this.dt||0,1/60)),h&&(u.phase+=s.travelled/(r2*u.v.scale)*Math.PI),t.add(u.v,{x:f,y:this.ground(f,d),z:-d,rotY:-u.yaw*Math.PI/180,mode:h?Ae.WALK:Ae.IDLE,phase:u.phase,speed:h?r.speed*r.slow:0,t:e+u.phase})}}}positions(){return this.groups.slice(0,this.active??0).map(t=>t.walker)}}});function l2(){let i=(h,u,f,d=1)=>pi(h,u,f,d,4),t=[0,.3,Ue.bb],e=[0,.86,.02],n=[0,.6,-.71],s=[0,.9,-.66],r=[0,Jn,Ue.rear],o=[0,Jn,Ue.front],a=.02,l=.08,c=[i(t,e,a),i(t,[0,.4,-.5],a),i([0,.4,-.5],n,a),i(n,s,a*1.3),i([.05,n[1],n[2]],[.05,Jn,Ue.front],.013),i([-.05,n[1],n[2]],[-.05,Jn,Ue.front],.013),i([.05,.3,Ue.bb],[.05,Jn,Ue.rear],.012),i([-.05,.3,Ue.bb],[-.05,Jn,Ue.rear],.012),i([.04,.82,.02],[.05,Jn,Ue.rear],.011),i([-.04,.82,.02],[-.05,Jn,Ue.rear],.011),i(s,[0,1,-.6],.016,.7),i([-.27,1.02,-.58],[.27,1.02,-.58],.013,.7),st(Le(.022,.022,.1,l,8),{at:[-.26,1.02,-.58],rot:[0,0,Math.PI/2]}),st(Le(.022,.022,.1,l,8),{at:[.26,1.02,-.58],rot:[0,0,Math.PI/2]}),i([0,.86,.02],[0,.92,.03],.012,.7),st(qt(.15,.06,.25,.03,l),{at:[0,.94,.02]}),st(qt(.17,.02,.38,.008,.55),{at:[0,.76,.32]}),i([.07,.75,.48],[.05,Jn,Ue.rear],.007,.55),i([-.07,.75,.48],[-.05,Jn,Ue.rear],.007,.55),st($e(Ue.wheelR+.04,.018,1,Math.PI*.75,4,14),{at:r,rot:[0,Math.PI/2,Math.PI*.15]}),st($e(Ue.wheelR+.04,.018,1,Math.PI*.6,4,12),{at:o,rot:[0,Math.PI/2,Math.PI*.2]}),st(qt(.02,.13,.5,.01,.3),{at:[.075,.33,.04]}),st(Le(.05,.05,.03,.55,12),{at:[.06,.3,Ue.bb],rot:[0,0,Math.PI/2]}),st(xe(.035,[1.6,1.5,1.2],8,6),{at:[0,.8,-.74]})];return jt(c)}function c2(){let i=Ue.wheelR,t=[st($e(i-.025,.026,.13,Math.PI*2,4,16),{rot:[0,Math.PI/2,0]}),st($e(i-.055,.009,.85,Math.PI*2,3,14),{rot:[0,Math.PI/2,0]}),st(Le(.03,.03,.08,.7,10),{rot:[0,0,Math.PI/2]})];for(let e=0;e<6;e++){let n=e/6*Math.PI*2;t.push(pi([0,0,0],[0,Math.cos(n)*(i-.06),Math.sin(n)*(i-.06)],.004,.75,3))}return jt(t)}function h2(i){let{L:t,W:e,cabin:[n,s,r,o]}=i,a=i.van?.85:.6,l=.22,c=[st(qt(e,a,t,.2,1,2),{at:[0,l+a/2,0]}),st(qt(n,s,r,i.van?.18:.24,1,2),{at:[0,l+a+s/2-.06,o]}),st(qt(e+.03,.12,.2,.05,.25),{at:[0,l+.12,-t/2+.06]}),st(qt(e+.03,.12,.2,.05,.25),{at:[0,l+.12,t/2-.06]})];return i.van||c.push(st(qt(e*.5,.05,.28,.02,.85),{at:[0,l+a+.01,-t/2+.55]})),jt(c)}function u2(i){let{L:t,W:e,cabin:[n,s,r,o]}=i,a=i.van?.85:.6,l=.22,c=[.05,.07,.09],h=i.van?.5:s*.66,u=i.van?l+a+.32:l+a+s/2-.06,f=i.van?st(qt(n+.025,h,1.1,.12,c),{at:[0,u,o-r/2+.5]}):st(qt(n+.025,h,r+.03,.14,c),{at:[0,u,o]}),d=(p,x,m)=>st(qt(.32,.12,.06,.03,m),{at:[p,l+a-.16,x]});return jt([f,d(-e/2+.3,-t/2-.005,[1.4,1.35,1.2]),d(e/2-.3,-t/2-.005,[1.4,1.35,1.2]),d(-e/2+.25,t/2+.005,[.9,.08,.06]),d(e/2-.25,t/2+.005,[.9,.08,.06]),st(qt(.5,.14,.03,.02,[.95,.85,.2]),{at:[0,l+.28,-t/2-.02]})])}function f2(){return jt([st(Le(to,to,.21,.1,18),{rot:[0,0,Math.PI/2]}),st(Le(to*.55,to*.55,.215,.75,14),{rot:[0,0,Math.PI/2]})])}function d2(){if(Qr)return Qr;Qr={bikeFrame:l2(),bikeWheel:c2(),carWheel:f2()};for(let[i,t]of Object.entries(Ws))Qr[`body:${i}`]=h2(t),Qr[`glass:${i}`]=u2(t);return Qr}var Ue,Jn,Ws,to,Qr,Jd,p2,fh,Tx,dh=Nt(()=>{Xt();Vc();Bs();Ue={wheelR:.34,rear:.25,front:-.84,bb:-.17},Jn=Ue.wheelR;Ws={hatch:{L:3.9,W:1.74,H:1.48,cabin:[1.58,.62,2.1,.35]},saloon:{L:4.55,W:1.8,H:1.44,cabin:[1.62,.58,2.3,.2]},van:{L:5,W:1.96,H:2.15,cabin:[1.9,1.15,3.75,.56],van:!0}},to=.32;Qr=null;Jd=new ft(1,1,1),p2=new ft("#d8d8d8"),fh=class{constructor({bikes:t=400,cars:e=200,clippingPlanes:n=null,shadows:s=!0,material:r=null}={}){this.material=r||ps({clippingPlanes:n}),this.group=new Qt,this.group.name="vehicles";let o=d2(),a={bikeFrame:t,bikeWheel:t*2,carWheel:e*4};for(let l of Object.keys(Ws))a[`body:${l}`]=e,a[`glass:${l}`]=e;this.meshes=new Map;for(let[l,c]of Object.entries(a)){let h=new dn(o[l],this.material,c);h.name=`vehicle:${l}`,h.count=0,h.frustumCulled=!1,h.castShadow=s,h.receiveShadow=!0,h.instanceMatrix.setUsage(Ds),h.setColorAt(0,Jd),this.group.add(h),this.meshes.set(l,{mesh:h,n:0,cap:c,m:h.instanceMatrix.array,c:h.instanceColor.array})}this._root=new Ot,this._w=new Ot,this._t=new Ot,this._q=new Ie,this._v=new T,this._one=new T(1,1,1),this._up=new T(0,1,0),this._col=new ft}begin(){for(let t of this.meshes.values())t.n=0}put(t,e,n){let s=this.meshes.get(t);if(!s||s.n>=s.cap)return;let r=s.n++;s.m.set(e.elements,r*16),s.c[r*3]=n.r,s.c[r*3+1]=n.g,s.c[r*3+2]=n.b}root(t,e,n,s){return this._root.compose(this._v.set(t,e,n),this._q.setFromAxisAngle(this._up,s),this._one)}addBike(t,e,n,s,{colour:r="#22385A",spin:o=0}={}){let a=this.root(t,e,n,s);this.put("bikeFrame",a,r instanceof ft?r:this._col.set(r));for(let l of[Ue.rear,Ue.front])this._w.multiplyMatrices(a,this._t.makeTranslation(0,Jn,l)).multiply(this._t.makeRotationX(o)),this.put("bikeWheel",this._w,p2)}addCar(t,e,n,s,r,{colour:o="#A33A2B",spin:a=0}={}){let l=Ws[t]||Ws.hatch,c=this.root(e,n,s,r);this.put(`body:${t}`,c,o instanceof ft?o:this._col.set(o)),this.put(`glass:${t}`,c,Jd);for(let h of[-1,1])for(let u of[-1,1])this._w.multiplyMatrices(c,this._t.makeTranslation(h*(l.W/2-.04),to,u*(l.L/2-.85))).multiply(this._t.makeRotationX(a)),this.put("carWheel",this._w,Jd)}end(){for(let{mesh:t,n:e}of this.meshes.values())t.count=e,t.visible=e>0,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0}drawCalls(){let t=0;for(let{mesh:e}of this.meshes.values())e.visible&&e.count>0&&t++;return t}},Tx=to});function Ax(i,t=5){let e=Un(t),n=[],s=[];for(let[r,o,a,l,c]of i){let h=c?Math.max(2,Math.floor(c/.7)):6+Math.floor(e()*9),u=(Math.atan2(-l,a)*180/Math.PI+360)%360,f=d=>(d-(h-1)/2)*.7;for(let d=0;d<h;d++){if(e()<.12)continue;let p=f(d);n.push({x:r+a*p,z:o+l*p,yaw:(u+(e()<.25?180:0)+(e()-.5)*8)%360,colour:ph[Math.floor(e()*ph.length)]})}for(let d=0;d<Math.ceil(h/6);d++){let p=f(d*6+2.5);s.push({x:r+a*p,z:o+l*p,yaw:u})}}return{bikes:n,racks:s}}var ph,m2,mh,Rx=Nt(()=>{Hs();Vs();dh();Gs();ph=["#1E1F21","#1E1F21","#22385A","#2F5A3C","#A33A2B","#5C6062","#6E8798","#F2F0EA","#C0643A","#88A891","#5B8DB8","#7A2A22"],m2=5.2,mh=class{constructor({graph:t,ground:e,cap:n=160,seed:s=41}){Object.assign(this,{graph:t,ground:e,cap:n}),this.rand=Un(s),this.riders=[],this.count=0,this.radius=200,this.nextId=1}spawn(t,e,n,s){let r=this.graph.spawnNear(e,n,this.radius,this.rand,s);if(r<0)return!1;let o=this.rand,a=1+o()*.8,l=new Zr(this.graph,r,o,{speed:3.5+o()*2.5,lateral:a,corner:4});l.baseLateral=a,l.place();let c=Zn(this.nextId++*53+11,{kind:"adult"});return c.acc==="bag"&&(c.acc="none"),Object.assign(t,{walker:l,v:c,colour:ph[Math.floor(o()*ph.length)],dist:o()*10,yaw:null}),!0}setCount(t,e){for(t=Math.min(t,this.cap);this.riders.length<t;){let n={};if(!this.spawn(n,e[0],e[1],0))break;this.riders.push(n)}this.count=Math.min(t,this.riders.length)}update(t,e,n=this.radius){this.radius=n;for(let s of this.riders.slice(0,this.count)){let r=s.walker;Math.hypot(r.x-e[0],r.z-e[1])>n*1.25&&this.spawn(s,e[0],e[1],n*.5),s.dist+=r.step(t),s.yaw=nh(s.yaw,r.yaw,200*Math.max(t,1/60))}}draw(t,e){for(let n of this.riders.slice(0,this.count)){let s=n.walker,r=this.ground(s.x,s.z),o=-n.yaw*Math.PI/180;e.addBike(s.x,r,-s.z,o,{colour:n.colour,spin:-n.dist/Ue.wheelR}),t.add(n.v,{x:s.x,y:r,z:-s.z,rotY:o,mode:Ae.CYCLE,phase:n.dist/m2*Math.PI*2})}}}});function x2(i,t,e,n){let{a:s,b:r,T:o,s0:a,delta:l}=g2,c=1-(i/Math.max(t,.1))**l;if(!Number.isFinite(e))return s*c;let h=a+Math.max(0,i*o+i*n/(2*Math.sqrt(s*r)));return s*(c-(h/Math.max(e,.1))**2)}function y2(i,t,e){let n=(xh[i.cls[t]]||8)*1,s=i.len[t]-e,r=i.to[t];return i.degree[r]>2&&s<Ix?Math.min(n,Cx+s/Ix*(n-Cx)):n}function Px(i,t,e,n){let s=new Map;for(let r of t)r.gone||(s.has(r.e)||s.set(r.e,[]),s.get(r.e).push(r));for(let r of s.values())r.sort((o,a)=>o.s-a.s);for(let r of t){if(r.gone)continue;r.next===void 0&&(r.next=i.pickNext(r.e,n));let o=s.get(r.e),a=o.indexOf(r),l=null,c=1/0;if(a<o.length-1)l=o[a+1],c=l.s-r.s;else if(r.next>=0){let u=s.get(r.next);u?.length&&(l=u[0],c=i.len[r.e]-r.s+l.s)}if(l&&(c-=(l.len+r.len)/2),r.next<0){let u=i.len[r.e]-r.s+4;u<c&&(c=u,l=null)}let h=y2(i,r.e,r.s)*(r.mood||1);r.acc=x2(r.v,h,c,l?r.v-l.v:r.v)}for(let r of t){if(r.gone)continue;r.v=Math.max(0,r.v+r.acc*e),r.s+=r.v*e,r.dist=(r.dist||0)+r.v*e;let o=0;for(;r.s>=i.len[r.e]&&o++<8;){if(r.next<0){r.gone=!0;break}r.s-=i.len[r.e],r.prev=r.e,r.e=r.next,r.next=i.pickNext(r.e,n)}}}function tp(i,t,e=1.3){let n=c=>{let h=t.e,u=t.s+c;u>i.len[h]&&t.next>=0&&(u-=i.len[h],h=t.next),u<0&&t.prev!==void 0&&t.prev>=0&&i.to[t.prev]===i.from[t.e]&&(h=t.prev,u+=i.len[h]),u=Math.max(0,Math.min(i.len[h],u));let[f,d]=i.at(h,u),p=i.laneOffset(h),x=i.x[i.to[h]]-i.x[i.from[h]],m=i.z[i.to[h]]-i.z[i.from[h]],g=i.len[h];return[f+m/g*p,d-x/g*p]},[s,r]=n(-e),[o,a]=n(e),l=(Math.atan2(o-s,a-r)*180/Math.PI+360)%360;return{x:(s+o)/2,z:(r+a)/2,yaw:l}}var xh,Qd,g2,Cx,Ix,gh,Dx=Nt(()=>{xh={primary:13.9,secondary:11.1,tertiary:9.7,residential:8.3,unclassified:8.3,service:5.5,living_street:4.2},Qd={primary:4,secondary:3,tertiary:2.5,residential:1,unclassified:1,service:.3,living_street:.3},g2={a:1.4,b:2.5,T:1.2,s0:2.2,delta:4},Cx=4.5,Ix=18,gh=class{constructor(t){let e=t.nodes.length/2;this.x=new Float32Array(e),this.z=new Float32Array(e);for(let s=0;s<e;s++)this.x[s]=t.nodes[2*s],this.z[s]=t.nodes[2*s+1];this.from=[],this.to=[],this.cls=[],this.len=[],this.twoWay=[],this.out=Array.from({length:e},()=>[]),this.degree=new Uint16Array(e);let n=t.classes||Object.keys(xh);for(let s=0;s<t.flags.length;s++){let r=t.edges[2*s],o=t.edges[2*s+1],a=t.flags[s],l=n[a>>1]||"residential",c=!!(a&1);this.degree[r]++,this.degree[o]++,this.add(r,o,l,!c),c||this.add(o,r,l,!0)}this.count=this.from.length}add(t,e,n,s){let r=this.from.length;this.from.push(t),this.to.push(e),this.cls.push(n),this.twoWay.push(s),this.len.push(Math.hypot(this.x[e]-this.x[t],this.z[e]-this.z[t])||.01),this.out[t].push(r)}laneOffset(t){return this.twoWay[t]?this.cls[t]==="primary"||this.cls[t]==="secondary"?1.9:1.5:.4}pickNext(t,e){let s=this.out[this.to[t]].filter(u=>this.to[u]!==this.from[t]);if(!s.length)return-1;let r=this.x[this.to[t]]-this.x[this.from[t]],o=this.z[this.to[t]]-this.z[this.from[t]],a=this.len[t],l=0,c=s.map(u=>{let f=this.x[this.to[u]]-this.x[this.from[u]],d=this.z[this.to[u]]-this.z[this.from[u]],p=(r*f+o*d)/(a*this.len[u]),x=(.3+Math.max(0,p)**2*2)*Math.sqrt(Qd[this.cls[u]]||1);return l+=x,x}),h=e()*l;for(let u=0;u<s.length;u++)if(h-=c[u],h<=0)return s[u];return s[s.length-1]}at(t,e){let n=this.from[t],s=this.to[t],r=e/this.len[t];return[this.x[n]+(this.x[s]-this.x[n])*r,this.z[n]+(this.z[s]-this.z[n])*r]}}});var Lx,v2,yh,Ux=Nt(()=>{Dx();dh();Gs();Lx=["#F2F0EA","#F2F0EA","#1E1F21","#1E1F21","#5C6062","#A7AAA8","#A7AAA8","#22385A","#A33A2B","#6E8798","#2F5A3C","#C8102E","#5B8DB8","#8F7A57"],v2=[["hatch",.45],["saloon",.35],["van",.2]],yh=class{constructor({doc:t,ground:e,cap:n=160,seed:s=23}){this.g=new gh(t),Object.assign(this,{ground:e,cap:n}),this.rand=Un(s),this.cars=[],this.count=0,this.radius=200,this.nextId=1}pickEdge(t,e,n,s=0){let r=this.g,o=0,a=[];for(let c=0;c<r.count;c++){let h=r.from[c],u=Math.hypot(r.x[h]-t,r.z[h]-e);if(u>n||u<s)continue;let f=(Qd[r.cls[c]]||1)*r.len[c];a.push([c,f]),o+=f}if(!a.length)return s>0?this.pickEdge(t,e,n,0):-1;let l=this.rand()*o;for(let[c,h]of a)if(l-=h,l<=0)return c;return a[a.length-1][0]}spawn(t,e,n,s){let r=this.pickEdge(e,n,this.radius,s);if(r<0)return!1;let o=this.rand,a=o(),l="hatch";for(let[h,u]of v2){if(a<u){l=h;break}a-=u}let c=o()*this.g.len[r];for(let h of this.cars)if(h!==t&&!h.gone&&h.e===r&&Math.abs(h.s-c)<10)return!1;return Object.assign(t,{e:r,s:c,v:(xh[this.g.cls[r]]||8)*.6,next:void 0,prev:-1,gone:!1,type:l,len:Ws[l].L,mood:.85+o()*.25,colour:Lx[Math.floor(o()*Lx.length)],dist:0,id:this.nextId++}),!0}setCount(t,e){t=Math.min(t,this.cap);let n=0;for(;this.cars.length<t&&n++<t*3;){let s={};this.spawn(s,e[0],e[1],0)&&this.cars.push(s)}this.count=Math.min(t,this.cars.length)}update(t,e,n=this.radius){this.radius=n;let s=this.cars.slice(0,this.count);Px(this.g,s,t,this.rand);for(let r of s){let o=this.g.from[r.e];(r.gone||Math.hypot(this.g.x[o]-e[0],this.g.z[o]-e[1])>n*1.3)&&(this.spawn(r,e[0],e[1],n*.55)||(r.gone=!0))}}footprints(t=null,e=40){let n=[];for(let s of this.cars.slice(0,this.count)){if(s.gone)continue;let r=tp(this.g,s);if(!(t&&Math.hypot(r.x-t[0],r.z-t[1])>80)&&(n.push({x:r.x,z:r.z,yaw:r.yaw,halfW:Ws[s.type].W/2,halfL:s.len/2}),n.length>=e))break}return n}draw(t){for(let e of this.cars.slice(0,this.count)){if(e.gone)continue;let n=tp(this.g,e);t.addCar(e.type,n.x,this.ground(n.x,n.z),-n.z,-n.yaw*Math.PI/180,{colour:e.colour,spin:-e.dist/Tx})}}}});function _2(i,t=1){let e=Un(t*977+3),[n,s]=i.f,r=-s,o=n,a=Math.max(2.2,Math.min(6,(i.d??8)-5)),l=2+Math.floor(e()*3),c=(i.d??8)>12?2:1,h=[],u=[];for(let f=0;f<c;f++)for(let d=0;d<l;d++){let p=(d-(l-1)/2)*2.5+(f?1.2:0),x=a+f*2.3,m=i.x+n*x+r*p,g=i.z+s*x+o*p;h.push({x:m,z:g});let v=e()<.35?[[1,0],[-1,0],[0,1],[0,-1]]:[[1,0],[-1,0]];for(let[y,R]of v){let w=m+r*y*.6+n*R*.6,S=g+o*y*.6+s*R*.6,I=(Math.atan2(m-w,g-S)*180/Math.PI+360)%360;u.push({x:w,z:S,yaw:I,u:e(),table:h.length-1})}}return{tables:h,chairs:u,parasol:e()<.7?Nx[Math.floor(e()*Nx.length)]:null,chairColour:vh[Math.floor(e()*vh.length)],tableColour:vh[Math.floor(e()*vh.length)]}}var Nx,vh,_h,Ox=Nt(()=>{Hs();Vs();Gs();pa();Nx=["#F2F0EA","#C8102E","#2F5A3C","#22385A","#EFE3C2","#D6A445"],vh=["#5C6062","#1E1F21","#8F7A57","#F2F0EA","#6E4A33"];_h=class{constructor({pois:t,ground:e,radius:n=260}){this.pois=t.map((s,r)=>({...s,id:r})),Object.assign(this,{ground:e,radius:n}),this.active=[],this.center=null,this.dirty=!0,this.seated=0}refresh(t){if(this.center&&Math.hypot(t[0]-this.center[0],t[1]-this.center[1])<40&&!this.dirty)return!1;this.center=[...t],this.dirty=!1,this.active=[];for(let e of this.pois){if(Math.hypot(e.x-t[0],e.z-t[1])>this.radius)continue;let n=_2(e,e.id+1),s=this.ground(e.x+e.f[0]*(e.d??6),e.z+e.f[1]*(e.d??6)),r=n.tables.map(o=>Math.abs(this.ground(o.x,o.z)-s)<.6);r.some(Boolean)&&this.active.push({poi:e,layout:n,ok:r})}return!0}props(t){for(let{layout:e,ok:n}of this.active){e.tables.forEach((s,r)=>{if(!n[r])return;let o=this.ground(s.x,s.z);t.add("table",s.x,o,-s.z,0,{colour:e.tableColour}),e.parasol&&r%2===0&&t.add("parasol",s.x,o,-s.z,0,{colour:e.parasol})});for(let s of e.chairs)n[s.table]&&t.add("chair",s.x,this.ground(s.x,s.z),-s.z,-s.yaw*Math.PI/180,{colour:e.chairColour})}}draw(t,e,n,s=0){let r=bx(e.hours,e.day)*(1-.85*s),o=0;for(let{poi:a,layout:l,ok:c}of this.active)l.chairs.forEach((h,u)=>{if(!c[h.table]||h.u>r)return;let f=h.v||(h.v=Zn(a.id*37+u*5+1e3));f.acc==="umbrella"&&(f.acc="none"),t.add(f,{x:h.x,y:this.ground(h.x,h.z),z:-h.z,rotY:-h.yaw*Math.PI/180,mode:Ae.SIT,t:n+u*3.1}),o++});this.seated=o}}});function M2(){return jt([st(Le(.36,.36,.03,1,22),{at:[0,.74,0]}),st(Le(.025,.025,.72,.6,8),{at:[0,.37,0]}),st(Le(.2,.22,.03,.6,16),{at:[0,.015,0]}),st(Le(.035,.03,.09,[.95,.95,1],10),{at:[.12,.8,-.05]}),st(Le(.05,.045,.06,[1,1,1],10),{at:[-.1,.785,.08]})])}function b2(){let i=(t,e)=>pi([t,0,e],[t,.45,e],.014,.55,6);return jt([st(qt(.42,.04,.4,.015,1,1),{at:[0,.46,0]}),st(qt(.42,.34,.035,.015,1,1),{at:[0,.68,.19],rot:[-.08,0,0]}),i(-.18,-.17),i(.18,-.17),i(-.18,.17),i(.18,.17)])}function w2(){let i=new bl(1.35,.42,12,1,!1);return jt([st(fi(i,1),{at:[0,2.35,0]}),st(Le(.025,.025,2.5,.85,8),{at:[0,1.25,0]}),st(xe(.04,.85,8,6),{at:[0,2.58,0]})])}function E2(){let{w:i,d:t}=je,e=[];for(let r of[-i/2+.05,i/2-.05])for(let o of[-t/2+.05,t/2-.05])e.push(pi([r,0,o],[r,2.25,o],.03,.7,6));e.push(st(qt(i,.06,t*.55,.02,[.62,.45,.28],1),{at:[0,.82,-t*.2]})),e.push(st(qt(i-.1,.7,.04,.01,[.9,.9,.88],1),{at:[0,.45,-t/2+.06]}));let n=Xd(11),s=[[.85,.12,.08],[.95,.55,.08],[.95,.85,.15],[.35,.65,.15],[.55,.2,.45],[.95,.9,.7]];for(let r=0;r<5;r++){let o=-i/2+.35+r*((i-.7)/4),a=-t*.2;e.push(st(qt(.5,.14,.4,.02,[.55,.38,.22],1),{at:[o,.92,a]}));let l=s[Math.floor(n()*s.length)];for(let c=0;c<6;c++)e.push(st(xe(.07,l,6,4),{at:[o+(c%3-1)*.14,1.02,a+(c<3?-.08:.08)]}))}return e.push(st(qt(i*.9,.5,.5,.05,[.6,.6,.62],1),{at:[0,.25,t/2-.4]})),jt(e)}function S2(i){let{w:t,d:e}=je,n=8,s=[];for(let r=0;r<n;r++){let o=-t/2+(r+.5)*(t/n),a=st(qt(t/n+.002,.04,e+.3,.01,r%2?[.95,.95,.93]:i,1),{at:[o,2.35,0],rot:[-.22,0,0]});s.push(a),s.push(st(qt(t/n+.002,.22,.03,.01,r%2?[.95,.95,.93]:i,1),{at:[o,2.09,-e/2-.2]}))}return jt(s)}function T2(){let i=[];for(let t=0;t<6;t++){let e=(t-2.5)*.7;i.push(pi([e,0,-.3],[e,.55,-.3],.02,1,6),pi([e,.55,-.3],[e,.55,.3],.02,1,6),pi([e,0,.3],[e,.55,.3],.02,1,6))}return i.push(pi([-2.1,.02,0],[2.1,.02,0],.03,.8,6)),jt(i)}function A2(){return ma||(ma={table:M2(),chair:b2(),parasol:w2(),"stall:base":E2(),rack:T2()},kx.forEach((i,t)=>{ma[`stall:awning:${t}`]=S2(i)}),ma)}var je,kx,ma,R2,Mh,ep=Nt(()=>{Xt();Vc();Bs();Vs();je={w:3,d:2},kx=[[.78,.1,.12],[.18,.45,.25],[.15,.3,.6],[.9,.62,.12]];ma=null;R2={table:"#5C6062",chair:"#5C6062",parasol:"#F2F0EA",rack:"#8C9196","stall:base":"#ffffff"},Mh=class{constructor({caps:t={},clippingPlanes:e=null,shadows:n=!0,material:s=null}={}){this.material=s||ps({clippingPlanes:e}),this.group=new Qt,this.group.name="props",this.meshes=new Map;let r=A2(),o={table:300,chair:1200,parasol:200,"stall:base":80,rack:120};for(let[a,l]of Object.entries(r)){let c=t[a]??o[a]??80,h=new dn(l,this.material,c);h.name=`prop:${a}`,h.count=0,h.frustumCulled=!1,h.castShadow=n,h.receiveShadow=!0,h.setColorAt(0,new ft(1,1,1)),this.group.add(h),this.meshes.set(a,{mesh:h,n:0,cap:c})}this._m=new Ot,this._q=new Ie,this._v=new T,this._s=new T(1,1,1),this._up=new T(0,1,0),this._c=new ft}begin(){for(let t of this.meshes.values())t.n=0}add(t,e,n,s,r,{colour:o}={}){if(t==="stall")return this.add("stall:base",e,n,s,r),this.add(`stall:awning:${(o??0)%kx.length}`,e,n,s,r,{colour:"#ffffff"});let a=this.meshes.get(t);return!a||a.n>=a.cap?!1:(this._m.compose(this._v.set(e,n,s),this._q.setFromAxisAngle(this._up,r),this._s),a.mesh.setMatrixAt(a.n,this._m),a.mesh.setColorAt(a.n,this._c.set(o||R2[t]||"#ffffff")),a.n++,!0)}end(){for(let{mesh:t,n:e}of this.meshes.values())t.count=e,t.visible=e>0,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}drawCalls(){let t=0;for(let{mesh:e}of this.meshes.values())e.visible&&e.count>0&&t++;return t}}});function C2(i){let t=0,e=[1,0],n=i.length/2;for(let s=0;s<n;s++){let r=s,o=(s+1)%n,a=i[2*o]-i[2*r],l=i[2*o+1]-i[2*r+1],c=Math.hypot(a,l);c>t&&(t=c,e=[a/c,l/c])}return e}function I2(i,{keep:t=()=>!0,max:e=64,seed:n=3}={}){let s=i.poly,[r,o]=C2(s),a=-o,l=r,c=0,h=0,u=s.length/2;for(let R=0;R<u;R++)c+=s[2*R]/u,h+=s[2*R+1]/u;let f=1/0,d=-1/0,p=1/0,x=-1/0;for(let R=0;R<u;R++){let w=s[2*R]-c,S=s[2*R+1]-h;f=Math.min(f,w*r+S*o),d=Math.max(d,w*r+S*o),p=Math.min(p,w*a+S*l),x=Math.max(x,w*a+S*l)}let m=Un(n),g=[];g.vans=[];let M=2*je.d+Fx,v=(R,w)=>hh(s,R,w),y=5.6;for(let R=p+Fx;R+2*je.d<x-1;R+=M){let w=f+2+y/2,S=R+je.d,I=c+r*w+a*S,b=h+o*w+l*S,_=v(I-r*2.6,b-o*2.6)&&v(I+r*2.6,b+o*2.6)&&t(I,b);_&&g.vans.push({x:I,z:b,yaw:(Math.atan2(r,o)*180/Math.PI+360)%360});for(let[C,L]of[[-1,je.d/2],[1,je.d*1.5]])for(let U=f+2+(_?y:0);U+je.w<d-2;U+=je.w+.2){if(m()<.12){U+=1.5;continue}let O=U+je.w/2,$=R+L,H=c+r*O+a*$,Z=h+o*O+l*$;if(![[-1,-1],[1,-1],[1,1],[-1,1]].map(([gt,et])=>[H+r*gt*je.w/2+a*et*je.d/2,Z+o*gt*je.w/2+l*et*je.d/2]).every(([gt,et])=>v(gt,et))||!t(H,Z))continue;let rt=a*C,dt=l*C;if(g.push({x:H,z:Z,yaw:(Math.atan2(rt,dt)*180/Math.PI+360)%360,colour:Math.floor(m()*4),fx:rt,fz:dt}),g.length>=e)return g}}return g}function P2(i,t,{inset:e=4,step:n=22,keep:s=()=>!0,max:r=6}={}){let o=i.poly,a=o.length/2,l=[],c=0,h=0;for(let u=0;u<a;u++)c+=o[2*u]/a,h+=o[2*u+1]/a;for(let u=0;u<a&&l.length<r;u++){let f=o[2*u],d=o[2*u+1],p=o[2*((u+1)%a)],x=o[2*((u+1)%a)+1],m=Math.hypot(p-f,x-d);if(m<8)continue;let g=(p-f)/m,M=(x-d)/m,v=-M,y=g;(c-f)*v+(h-d)*y<0&&(v=-v,y=-y);for(let R=n/2;R<m-3&&l.length<r;R+=n){let w=f+g*R+v*e,S=d+M*R+y*e;!hh(o,w,S)||!s(w,S)||t.some(I=>Math.hypot(I.x-w,I.z-S)<5)||l.push({x:w,z:S,yaw:(Math.atan2(g,M)*180/Math.PI+360)%360})}}return l}function D2(i){let t=0,e=0,n=i.length/2;for(let s=0;s<n;s++)t+=i[2*s]/n,e+=i[2*s+1]/n;return[t,e]}var Fx,Bx,bh,zx=Nt(()=>{Hs();Vs();ep();pa();Gs();Fx=4.5;Bx=["#F2F0EA","#F2F0EA","#F2C230","#F2F0EA","#A7AAA8","#F2F0EA"],bh=class{constructor({market:t,ground:e,keep:n=()=>!0}){Object.assign(this,{market:t,ground:e});let s=e(...D2(t.poly));this.stalls=I2(t,{keep:(o,a)=>Math.abs(e(o,a)-s)<.45&&n(o,a)}),this.vans=[...this.stalls.vans,...P2(t,this.stalls,{keep:(o,a)=>Math.abs(e(o,a)-s)<.45&&n(o,a)})].map((o,a)=>({...o,colour:Bx[a%Bx.length]})),this.state="off",this.browsers=0;let r=Un(17);this.people=this.stalls.map((o,a)=>({vendor:Zn(5e3+a*3,{kind:"adult"}),shoppers:Array.from({length:4},(l,c)=>({v:Zn(6e3+a*11+c),u:r(),off:(r()-.5)*2.4,back:.7+r()*.6,look:(r()-.5)*.6}))}))}refresh(t){let e=ch(this.market,t.day,t.sec),n=this.state!=="off",s=e!=="off";return this.state=e,n!==s}props(t){if(this.state==="off")return;let e=this.state==="open";for(let n of this.stalls){let s=this.ground(n.x,n.z),r=-n.yaw*Math.PI/180;e?t.add("stall",n.x,s,-n.z,r,{colour:n.colour}):t.add("stall:base",n.x,s,-n.z,r)}}drawVans(t){let e=this.state==="off"?Math.min(2,this.vans.length):this.vans.length;for(let n=0;n<e;n++){let s=this.vans[n];t.addCar("van",s.x,this.ground(s.x,s.z),-s.z,-s.yaw*Math.PI/180,{colour:s.colour})}}draw(t,e){if(this.browsers=0,this.state==="off")return;let n=this.state==="open";this.stalls.forEach((s,r)=>{let o=this.people[r],a=s.fz,l=-s.fx,c=s.x-s.fx*.27,h=s.z-s.fz*.27;t.add(o.vendor,{x:c,y:this.ground(c,h),z:-h,rotY:-s.yaw*Math.PI/180,mode:Ae.IDLE,t:e+r}),n&&o.shoppers.forEach((u,f)=>{if((e/40+u.u)%1>.7+.25*Math.sin(r+f))return;let p=Math.sin(e*.05+f)*.3,x=s.x+s.fx*(je.d/2+u.back)+a*(u.off+p),m=s.z+s.fz*(je.d/2+u.back)+l*(u.off+p);t.add(u.v,{x,y:this.ground(x,m),z:-m,rotY:-(s.yaw+180)*Math.PI/180,mode:Ae.BROWSE,t:e+f*2,look:u.look}),this.browsers++})})}}});function Hx(i,t){return i.map((e,n)=>{let s=i[Math.max(0,n-1)],r=i[Math.min(i.length-1,n+1)],o=r[0]-s[0],a=r[1]-s[1],l=Math.hypot(o,a)||1;return[e[0]+a/l*t,e[1]-o/l*t]})}function L2(i,t){return[...Hx(i,t),...Hx([...i].reverse(),t)]}var wh,Vx=Nt(()=>{bc();Rd();wh=class{constructor({river:t,model:e,opts:n,waterY:s,count:r=2}){let o=[];for(let h=0;h<t.path.length;h+=2)o.push([t.path[h],t.path[h+1]]);let a=Math.min(18,(t.widthM||100)*.22),l=L2(o,a).map(([h,u])=>[h,s,u]);if(this.items=[],this.group=null,o.length<2)return;let c=new Ln({path:l,loop:!0}).length;for(let h=0;h<r;h++){let u=yc(e,n);u.name="life:boat",this.items.push({obj:u,mover:new Ln({path:l,loop:!0,speed:3+h*.4,turnRadius:14,start:c*h/r+40})})}}update(t){for(let e of this.items)Mc(e.mover.update(t).pose,e.obj)}}});function np(i){return(typeof i.city=="function"?i.city():i.city)||(typeof window<"u"?window.__blox?.city:null)||null}function Wx(i,t=i.world){let e=t?.studM??.5,n=t?.plateM??.2,s=t?.groundK!==void 0?t.groundK*n:0,r=new Map,o=(l,c)=>{if(!(t?.count>0))return s;let h=t.topK(Math.floor(l/e),Math.floor(c/e))*n;return Math.abs(h-s)<=1.6?h:s},a=(l,c)=>{let h=Math.floor(l*2)*65536+Math.floor(c*2),u=r.get(h);if(u!==void 0)return u;let f=np(i),d=null,p=!0;if(f?.groundHeight){let x=f.approxGround?.(l,-c),m=Number.isFinite(x)?x+Gx:t?o(l,c)+Gx:1/0,g=f.groundHeight(l,-c,m);Number.isFinite(g)?d=g:p=g!=="unknown"}return d===null&&(d=o(l,c)),p&&(r.size>2e5&&r.clear(),r.set(h,d)),d};return a.flat=s,a.reset=()=>r.clear(),a}var Gx,Xx=Nt(()=>{Gx=2.5});async function Yx(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: HTTP ${t.status}`);return t.json()}function U2(i,t=typeof location<"u"?location.hash:""){let e=new URLSearchParams(String(t).replace(/^#/,"")),n=typeof window<"u"?window.BLOX_SITE?.base:null,s=e.get("life")||i.lifeUrl||(n?`${n.replace(/\/?$/,"/")}life/`:"life/");return s.endsWith("/")?s:`${s}/`}async function qx(i){let t=typeof window<"u"?window.BLOX_WORLD?.life:null;if(t)return{index:null,transit:null,walkways:null,river:null,streets:null,...t};if(typeof fetch>"u")return null;let e=U2(i),n;try{n=await Yx(`${e}index.json`)}catch{return null}let s={index:n,transit:null,walkways:null,river:null,streets:null};return await Promise.all(Object.entries(n.files||{}).map(async([r,o])=>{try{s[r]=await Yx(e+o)}catch(a){console.warn(`life: ${r}: ${a.message}`)}})),s}var $x=Nt(()=>{});function O2(i,t,e){let n=i.brickAt(t,e,i.topK(t,e)-1);return n<0?"":i.palette.get(i.color[n])?.name||""}function jx(i){let t=Math.PI/180,e=(i||[]).filter(n=>n.island).map(n=>({w:n,s:Math.sin(n.island.yawDeg*t),c:Math.cos(n.island.yawDeg*t)}));return e.length?(n,s)=>e.some(({w:r,s:o,c:a})=>{let l=n-r.island.origin[0],c=s-r.island.origin[1],h=Math.floor((l*a-c*o)/r.studM),u=Math.floor((l*o+c*a)/r.studM),f=r.bounds;return h>=f.I0&&h<f.I1&&u>=f.J0&&u<f.J1&&r.topK(h,u)>f.K0}):null}function Kx(i,{step:t=4,maxRise:e=2,blocked:n=null}={}){let{I0:s,J0:r,I1:o,J1:a}=i.bounds,l=i.studM,c=Math.floor((o-s)/t),h=Math.floor((a-r)/t),u=new Int32Array(c*h).fill(-1),f=[],d=[],p=[];for(let x=0;x<c;x++)for(let m=0;m<h;m++){let g=s+x*t+(t>>1),M=r+m*t+(t>>1);if(Math.abs(i.topK(g,M)-i.groundK)>e)continue;let v=N2[O2(i,g,M)];!v||n?.((g+.5)*l,(M+.5)*l)||(u[x*h+m]=f.length/2,f.push((g+.5)*l,(M+.5)*l),d.push(Math.round(v*2)))}for(let x=0;x<c;x++)for(let m=0;m<h;m++){let g=u[x*h+m];if(!(g<0))for(let[M,v]of[[1,0],[0,1],[1,1],[1,-1]]){let y=x+M,R=m+v;if(y>=c||R<0||R>=h)continue;let w=u[y*h+R];w<0||M&&v&&(u[y*h+m]<0||u[x*h+R]<0)||p.push(g,w)}}return{version:1,kind:"walkways",meta:{source:"world"},nodes:f,weights:d,edges:p}}var N2,Zx=Nt(()=>{N2={cobble_grey:4,pavement:2,mergel_light:2,light_grey:1.5,sand_red:2,mergel:1.5}});function Jx(i,{onNow:t,still:e=!1}={}){if(typeof document>"u")return{update(){},stats(){}};let n=document.getElementById("hud"),s=document.createElement("div");s.id="lifeClock",s.style.cssText="display:flex;align-items:center;gap:6px;color:var(--muted);font-variant-numeric:tabular-nums";let r=document.createElement("b");r.style.cssText="color:var(--text);min-width:6.5em",s.append("Clock ",r);let o=lx.map(x=>{let m=document.createElement("button");return m.textContent=`${x}x`,m.style.cssText="background:rgba(255,255,255,.1);color:var(--text);border:1px solid rgba(255,255,255,.25);border-radius:5px;padding:0 6px;cursor:pointer",m.addEventListener("click",()=>{i.speed=x,h()}),s.append(m),[x,m]}),a=document.createElement("button");a.textContent="now",a.style.cssText=o[0][1].style.cssText,a.addEventListener("click",()=>t?.()),s.append(a);let l=document.createElement("div");l.id="lifeStats",l.style.cssText="color:var(--muted);font-variant-numeric:tabular-nums";let c=document.getElementById("stats");n&&(n.insertBefore(s,c||null),n.insertBefore(l,c||null));function h(){for(let[x,m]of o)m.style.borderColor=x===i.speed?"var(--accent)":"rgba(255,255,255,.25)"}h();let u=document.getElementById("time"),f=!1,d=null;u?.addEventListener("input",()=>{f||(i.setHours(+u.value),d=null)});function p(){if(!u||e)return;let x=i.hours,m=Math.round(x*4)/4;if(m===d||m<+u.min||m>+u.max||Math.abs(+u.value-m)<.01){d=m;return}d=m,f=!0,u.value=m,u.dispatchEvent(new Event("input")),f=!1}return{update(){r.textContent=i.label(),p()},stats(x){l.textContent=x},mark:h}}var Qx=Nt(()=>{jd()});var iy={};fp(iy,{clipRoads:()=>ey,clipWalkways:()=>ip,initLife:()=>z2,initialClock:()=>ny});function ip(i,t){if(!t)return i;let[e,n,s,r]=t,o=new Map,a=[],l=[],c=[];for(let h=0;h<i.nodes.length/2;h++){let u=i.nodes[2*h],f=i.nodes[2*h+1];u<e||u>s||f<n||f>r||(o.set(h,a.length/2),a.push(u,f),l.push(i.weights?.[h]??1))}for(let h=0;h<i.edges.length;h+=2){let u=o.get(i.edges[h]),f=o.get(i.edges[h+1]);u!==void 0&&f!==void 0&&c.push(u,f)}return{...i,nodes:a,weights:l,edges:c}}function ey(i,t){if(!t)return i;let[e,n,s,r]=t,o=new Map,a=[],l=[],c=[];for(let h=0;h<i.nodes.length/2;h++){let u=i.nodes[2*h],f=i.nodes[2*h+1];u<e||u>s||f<n||f>r||(o.set(h,a.length/2),a.push(u,f))}for(let h=0;h<i.flags.length;h++){let u=o.get(i.edges[2*h]),f=o.get(i.edges[2*h+1]);u!==void 0&&f!==void 0&&(l.push(u,f),c.push(i.flags[h]))}return{...i,nodes:a,edges:l,flags:c}}function ny(i=typeof location<"u"?location.hash:"",t=new Date){let e=new URLSearchParams(String(i).replace(/^#/,"")),n=$d(t),s=cx(e.get("day"))??n.day,r=e.has("t"),o=r?Math.round(+e.get("t")*3600):n.sec,a=[1,10,60].includes(+e.get("speed"))?+e.get("speed"):1;return{clock:new Jc({day:s,sec:o,speed:a}),fixed:r}}function F2(i,t,e){if(i?.count>0&&t){let s=i.studM,r=i.plateM,o=[];for(let a=0;a<t.path.length;a+=2){let l=Math.floor(t.path[a]/s),c=Math.floor(t.path[a+1]/s),h=i.brickAt(l,c,i.topK(l,c)-1);h>=0&&/^water/.test(i.palette.get(i.color[h])?.name||"")&&o.push(i.topK(l,c)*r)}if(o.length)return o.sort((a,l)=>a-l)[o.length>>1]}let n=np(e);if(n?.groundHeight&&t?.path?.length>=2){let s=n.groundHeight(t.path[0],-t.path[1]);if(Number.isFinite(s))return s}return 44.1-30}async function z2(i){let t={ready:!1,buses:null,walkers:null,cyclists:null,cars:null,terraces:null,market:null,boats:null,clock:null,source:null,crowd:null,fleet:null,props:null};typeof window<"u"&&(window.__bloxLife=t);let{stage:e,world:n}=i,s=i.camera||e.camera,r=i.box||null,o=r?[new Ne(new T(1,0,0),-r.min.x),new Ne(new T(-1,0,0),r.max.x),new Ne(new T(0,0,1),-r.min.z),new Ne(new T(0,0,-1),r.max.z)]:null,a=new ci({clippingPlanes:o}),l=wc(),c={bus:i.models?.bus||l.bus,boat:i.models?.boat||l.boat,character:i.models?.character||l.walker_a},h=ps({clippingPlanes:o}),u=K=>K.high,f=new Kr(u(Jr)+900,{material:h}),d=new fh({bikes:u(ah)+500,cars:u(lh)+10,material:h}),p=new Mh({material:h});Object.assign(t,{crowd:f,fleet:d,props:p});let x={palette:n.palette,types:n.types,mats:a,studM:n.studM,plateM:n.plateM},m=Wx(i,n),g=new Qt;g.name="life",e.scene.add(g),g.add(f.group,d.group,p.group);let M=r?[r.min.x,-r.max.z,r.max.x,-r.min.z]:null,v=await qx(i);t.source=v?"export":"world";let{clock:y,fixed:R}=ny();t.clock=y;let w=()=>typeof i.quality=="function"?i.quality():"medium",S=K=>{for(let F of i.demo?.actors||[])(F.obj.userData.model?.name===K||F.obj.name===`model:${K}`)&&(F.obj.visible=!1)};v?.transit?.trips?.length&&(t.buses=new rh({timetable:new Qc(v.transit),model:c.bus,opts:x,ground:m}),g.add(t.buses.group),S("bus"));let I=v?.walkways||null;!I&&n.count>0&&(I=Kx(n,{blocked:jx(i.islands)}));let b=null;if(I){let K=new da(ip(I,M));K.buckets.size&&(b=K,t.walkers=new uh({graph:K,ground:m,cap:Jr.high}),S(c.character.name))}let _=v?.streets||null;if(_?.cycle?.edges?.length){let K=new da(ip(_.cycle,M));K.buckets.size&&(t.cyclists=new mh({graph:K,ground:m,cap:ah.high}))}if(_?.roads?.edges?.length&&(t.cars=new yh({doc:ey(_.roads,M),ground:m,cap:lh.high})),_?.pois?.length&&(t.terraces=new _h({pois:k2(_.pois,M),ground:m})),_?.market?.poly?.length>=6){let K=b?(F,ot)=>b.spawnNear(F,ot,4,()=>.5)>=0:()=>!0;t.market=new bh({market:_.market,ground:m,keep:K})}let C=Ax((_?.bikes||[]).filter(([K,F])=>!M||K>M[0]&&K<M[2]&&F>M[1]&&F<M[3])),L=null;function U(){if(!b)return;let K=t.market?ch(_.market,y.day,y.sec)==="open":!1,F=`${K}|${y.hours>=9&&y.hours<=19}`;F!==L&&(L=F,b.w=wx(b.base,b.x,b.z,{market:_?.market,open:K,hours:y.hours}))}function O(){p.begin(),t.terraces?.props(p),t.market?.props(p);for(let K of C.racks)p.add("rack",K.x,m(K.x,K.z),-K.z,-K.yaw*Math.PI/180);p.end()}if(v?.river?.path?.length>=4){t.boats=new wh({river:v.river,model:c.boat,opts:x,waterY:F2(n,v.river,i)});for(let K of t.boats.items)g.add(K.obj);t.boats.items.length&&S("boat")}let $=!!i.still,H=Jx(y,{still:$,onNow:()=>{let K=$d();y.set(K.day,K.sec)}}),Z=()=>{let K=i.controls?.target||new T;return[K.x,-K.z]},V=()=>{let K=i.controls?.target,F=K?s.position.distanceTo(K):100;return Math.max(50,Math.min(220,F*1.1))},rt=-1,dt=0,gt=0,et=[c.bus.size[0]*n.studM/2,c.bus.size[1]*n.studM/2],Et=K=>K[w()]??K.medium,X=typeof location<"u"?+(new URLSearchParams(location.hash.replace(/^#/,"")).get("rain")||0):0,at=()=>Math.max(0,Math.min(1,i.weather?.rain??X)),St=null;function ht(){if(i.perf===!1){f.cullDist2=0;return}let K=i.controls?.target,F=K?s.position.distanceTo(K):0;g.visible=F<B2,f.cullDist2=ty*ty;let ot=w();if(ot!==St){St=ot;let k=ot==="high"||ot==="medium";g.traverse(Q=>{Q.isMesh&&(Q.userData.castShadow0??=Q.castShadow,Q.castShadow=k&&Q.userData.castShadow0)})}}function ut(K){ht(),e.night!==void 0&&e.night!==rt&&(rt=e.night,a.setNight(rt)),y.advance(K),gt+=K;let F=Z(),ot=V(),k=t.buses?t.buses.update(y,s):[],Q=Mx(y.hours,y.day);if(t.cars&&(t.cars.setCount(Math.round(Et(lh)*Q),F),t.cars.update(K,F,Math.max(ot,150))),t.cyclists&&(t.cyclists.setCount(Math.round(Et(ah)*Q),F),t.cyclists.update(K,F,Math.max(ot,120))),t.walkers){U(),t.walkers.setRain(at()),t.walkers.setCount(Math.round(Et(Jr)*Zd(y.hours,y.day)),F);let tt=k.map(Mt=>({x:Mt.x,z:Mt.z,yaw:Mt.yaw,halfW:et[0],halfL:et[1]}));t.cars&&tt.push(...t.cars.footprints(F,30)),t.walkers.update(K,F,ot,tt)}let D=t.terraces?t.terraces.refresh(F):!1;t.market?.refresh(y)&&(D=!0),(D||!p.built)&&(O(),p.built=!0),f.begin(s.position),d.begin(),t.walkers?.draw(f),t.terraces?.draw(f,y,gt,at()),t.market?.draw(f,gt),t.cyclists?.draw(f,d),t.cars?.draw(d),t.market?.drawVans(d);let yt=i.perf===!1?{r:1/0,cap:1/0}:Et(yx);for(let tt of vx(C.bikes,s.position.x,-s.position.z,yt.r,yt.cap))d.addBike(tt.x,m(tt.x,tt.z),-tt.z,-tt.yaw*Math.PI/180,{colour:tt.colour});if(f.end(),d.end(),t.boats&&t.boats.update(K),H.update(),(dt+=K)>.5||K===0){dt=0;let tt=t.buses?.stats;t.stats={people:f.count,walkers:t.walkers?.people||0,cyclists:t.cyclists?.count||0,cars:t.cars?.count||0,carsMoving:t.cars?t.cars.cars.slice(0,t.cars.count).filter(Mt=>Mt.v>.5).length:0,seated:t.terraces?.seated||0,market:t.market?.state||"none",drawCalls:f.drawCalls()+d.drawCalls()+p.drawCalls()},H.stats([tt?`${tt.active} buses (${tt.full} near)`:"no timetable",`${f.count} people`,`${t.stats.cyclists} bikes`,`${t.stats.cars} cars`,`${t.boats?.items.length||0} boats`].join(" \xB7 "))}}t.step=ut,ut(0);for(let K=0;K<4;K++)t.walkers?.update(.4,Z(),V()),t.cars?.update(.5,Z(),Math.max(V(),150)),t.cyclists?.update(.4,Z(),Math.max(V(),120));return ut(0),t.ready=!0,{update(K){let F=typeof document>"u"||document.getElementById("anim")?.checked!==!1;ut($||!F?0:Math.min(K,.1))}}}var k2,B2,ty,sy=Nt(()=>{Xt();ko();Cd();jd();hx();Gs();xx();Sx();Rx();Ux();Ox();zx();pa();Wd();dh();ep();Bs();Vx();Xx();$x();Zx();Qx();k2=(i,t)=>t?i.filter(e=>e.x>t[0]&&e.x<t[2]&&e.z>t[1]&&e.z<t[3]):i;B2=650,ty=320});Xt();Xt();Xt();var t0={type:"change"},td={type:"start"},n0={type:"end"},Ol=new As,e0=new Ne,Ow=Math.cos(70*se.DEG2RAD),Ge=new T,gn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qf=1e-6,kl=class extends Cl{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Ie,this._lastTargetPosition=new T,this._quat=new Ie().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Di,this._sphericalDelta=new Di,this._scale=1,this._panOffset=new T,this._rotateStart=new j,this._rotateEnd=new j,this._rotateDelta=new j,this._panStart=new j,this._panEnd=new j,this._panDelta=new j,this._dollyStart=new j,this._dollyEnd=new j,this._dollyDelta=new j,this._dollyDirection=new T,this._mouse=new j,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fw.bind(this),this._onPointerDown=kw.bind(this),this._onPointerUp=Bw.bind(this),this._onContextMenu=Yw.bind(this),this._onMouseWheel=Vw.bind(this),this._onKeyDown=Gw.bind(this),this._onTouchStart=Ww.bind(this),this._onTouchMove=Xw.bind(this),this._onMouseDown=zw.bind(this),this._onMouseMove=Hw.bind(this),this._interceptControlDown=qw.bind(this),this._interceptControlUp=$w.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(t0),this.update(),this.state=ye.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ge.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<Ow?this.object.lookAt(this.target):(e0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(e0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qf||this._lastTargetPosition.distanceToSquared(this.target)>Qf?(this.dispatchEvent(t0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new j,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kw(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bw(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n0),this.state=ye.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zw(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Wn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Wn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(td)}function Hw(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vw(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(td),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(n0))}function Gw(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ww(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(td)}function Xw(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function Yw(i){this.enabled!==!1&&i.preventDefault()}function qw(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $w(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Pr=class extends kl{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Wn.PAN,MIDDLE:Wn.DOLLY,RIGHT:Wn.ROTATE},this.touches={ONE:ai.PAN,TWO:ai.DOLLY_ROTATE}}};wn();ko();Br();Xt();Br();kr();wn();zr();var VE=1.3,F0=2,GE=new ft(0,0,0),oc=class{constructor(t,e,n){Object.assign(this,{cx:t,cy:e,src:n,list:[],box:new ve,near:null,isNear:!1,dist:0,used:0,farTris:0,nearTris:0,studTris:0,studs:0,studMeshes:[]})}};function B0(i){let t=i.geometry;return(t.index?t.index.count:t.attributes.position.count)/3*(i.isInstancedMesh?i.count:1)}var ac=class{constructor(t,e,n,s=[]){Object.assign(this,{world:t,mats:e,ctx:n,group:new Qt,frame:0,clusters:null,studsShown:0}),this.group.name="chunks";let r={world:t,ctx:n,parent:this.group,island:null};this.sources=[r];let o=t.chunkStuds,a=t.studM,l=t.plateM,c=new Map,h=new T,u=new T;for(let f=0;f<t.count;f++){let d=t.typeOf(f);if(!d)continue;let p=Math.floor(t.I[f]/o),x=Math.floor(t.J[f]/o),m=`${p},${x}`;c.has(m)||c.set(m,new oc(p,x,r));let g=c.get(m);g.list.push(f);let[M,v]=t.extentOf(f);g.box.expandByPoint(h.set(t.I[f]*a,t.K[f]*l,-(t.J[f]+v)*a)),g.box.expandByPoint(u.set((t.I[f]+M)*a,(t.K[f]+d.h)*l,-t.J[f]*a))}this.chunks=[...c.values()];for(let f of s){let{id:d,cx:p,cy:x,origin:m,yawDeg:g}=f.world.island,M=Ko(new Qt,m,g);M.name=`island ${d}`,this.group.add(M);let v={world:f.world,ctx:f.ctx,parent:M,island:f.world.island};this.sources.push(v);let y=new oc(p,x,v);for(let R=0;R<f.world.count;R++)f.world.typeOf(R)&&y.list.push(R);y.box.copy(as(f.world)),this.chunks.push(y)}for(let f of this.chunks)f.list=Int32Array.from(f.list);this.setTier({lod:!1})}setTier({lod:t=!0,nearDist:e=1/0,maxNear:n=1/0,studCap:s=1/0,nearDetail:r="full"}){let o=t&&r==="lite";if(t!==this.lod||o!==this.lite)for(let a of this.chunks)this.freeNear(a);if(Object.assign(this,t?{nearDist:e,maxNear:n,studCap:s}:{nearDist:1/0,maxNear:1/0,studCap:1/0}),Object.assign(this,{lod:t,lite:o}),t&&!this.clusters&&this.buildFar(),this.clusters)for(let a of this.farGroups)a.visible=t}buildNear(t){let e=sc(t.src.world,this.mats,{list:t.list,ctx:t.src.ctx,lite:this.lite});if(t.near=e,t.studMeshes=e.meshes.filter(n=>n.name.startsWith("stud|")),this.lod)for(let n of t.studMeshes)n.castShadow=!1;t.studs=e.studs,t.nearTris=0,t.studTris=0;for(let n of e.meshes)n.name.startsWith("stud|")?t.studTris+=B0(n):t.nearTris+=B0(n);e.group.name=t.src.island?`near island ${t.src.island.id}`:`near ${t.cx},${t.cy}`,t.src.parent.add(e.group)}freeNear(t){if(t.near){t.src.parent.remove(t.near.group);for(let e of t.near.meshes)e.dispose(),e.geometry.userData.owned&&e.geometry.dispose();t.near=null,t.studMeshes=[]}}buildFar(){this.clusters=[],this.farGroups=[],this.farFaces=0,this.farCulled=0;for(let t of this.sources){let e=new Map;for(let s of this.chunks){if(s.src!==t)continue;let r=t.island?"island":`${Math.floor(s.cx/F0)},${Math.floor(s.cy/F0)}`;e.has(r)||e.set(r,[]),e.get(r).push(s)}if(!e.size)continue;let n=new Qt;n.name="far",t.parent.add(n),this.farGroups.push(n);for(let s of e.values())this.buildCluster(t,s,n)}}buildCluster({world:t,ctx:e},n,s){let{mats:r}=this,o=new ft,a=(u,f)=>{let d=f==="glass"&&e.glassEntry||t.palette.get(t.color[u]),{key:p}=r.forEntry(d),x=f==="glass"||!!(t.rotFlags[u]&li),m=ln(d,t.I[u],t.J[u],t.K[u],x,o).clone();return{key:p,color:m,glow:p==="glass"?e.glows.get(u)||GE:null}},l=e.grid?e.grid.code:(u,f,d)=>{let p=t.brickAt(u,f,d);return p<0?1:e.codeOf(p)},c=ec(t,n.map(u=>u.list),{code:l,codeOf:e.codeOf,style:a,glowKeys:new Set(["glass"])});n.forEach((u,f)=>{u.farTris=c.segmentTriangles[f]}),this.farFaces+=c.faces,this.farCulled+=c.culled;let h={chunks:n,parts:[],sig:""};for(let[u,f]of c.geometries){let d=r.farFor(u),p=new pe(f,[d]);p.receiveShadow=!0,p.castShadow=!d.transparent,p.name=`far|${u}`,s.add(p),h.parts.push({main:p,ranges:c.ranges.get(u)})}this.clusters.push(h)}refreshCluster(t){let e=t.chunks.map(n=>n.isNear?1:0).join("");if(e!==t.sig){t.sig=e;for(let{main:n,ranges:s}of t.parts){let r=n.geometry;r.clearGroups();let o=null;t.chunks.forEach((a,l)=>{let c=s[l];if(a.isNear||!c.count){o=null;return}o&&o.start+o.count===c.start?o.count+=c.count:(o={start:c.start,count:c.count,materialIndex:0},r.groups.push(o))}),n.visible=r.groups.length>0}}}update(t,{all:e=!1}={}){this.frame++;let n=t.position;for(let u of this.chunks)u.dist=u.box.distanceToPoint(n);let s=[...this.chunks].sort((u,f)=>u.dist-f.dist),r=new Set;for(let u of s){if(r.size>=this.maxNear)break;u.dist<(u.isNear?this.nearDist*VE:this.nearDist)&&r.add(u)}let o=0,a=!1;for(let u of s)r.has(u)&&!u.near&&(e||o===0?(this.buildNear(u),o++):a=!0),u.isNear=r.has(u)&&!!u.near,u.near&&(u.near.group.visible=u.isNear,u.isNear&&(u.used=this.frame));if(this.lod)for(let u of this.clusters)this.refreshCluster(u);let l=0;for(let u of s){if(!u.isNear)continue;let f=l===0||l+u.studs<=this.studCap;for(let d of u.studMeshes)d.visible=f;f&&(l+=u.studs)}this.studsShown=l;let c=Math.min(this.maxNear,16)+4,h=this.chunks.filter(u=>u.near&&!u.isNear).sort((u,f)=>f.used-u.used);for(let u of h.slice(c))this.freeNear(u);return a}settle(t){this.update(t,{all:!0})}stats(){let t=0,e=0;for(let n of this.chunks)n.isNear?(t++,e+=n.nearTris+(n.studMeshes[0]?.visible?n.studTris:0)):this.lod&&(e+=n.farTris);return{chunks:this.chunks.length,clusters:this.clusters?.length??0,near:t,studs:this.studsShown,triangles:e,farFaces:this.farFaces,farCulled:this.farCulled}}};var cs=Object.freeze({high:{name:"high",nearDetail:"full",pixelRatio:2,ao:"full",bloom:"always",shadowMap:4096,nearDist:70,maxNear:9,studCap:8e4,streamRadius:300,farDist:[380,1200],aoDist:400,nearTriCap:8e6,shadowRange:1600},medium:{name:"medium",nearDetail:"lite",pixelRatio:1,ao:"half",bloom:"night",shadowMap:2048,nearDist:40,maxNear:3,studCap:2e4,streamRadius:200,farDist:[280,900],aoDist:250,nearTriCap:25e5,shadowRange:1e3},low:{name:"low",nearDetail:"lite",pixelRatio:1,ao:"off",bloom:"night",shadowMap:1024,nearDist:22,maxNear:2,studCap:8e3,streamRadius:130,farDist:[200,650],aoDist:0,nearTriCap:12e5,shadowRange:450},lite:{name:"lite",nearDetail:"lite",pixelRatio:.75,ao:"off",bloom:"off",shadowMap:1024,shadows:!1,nearDist:16,maxNear:1,studCap:4e3,streamRadius:110,farDist:[140,450],aoDist:0,nearTriCap:6e5,shadowRange:0}}),lc=["auto","high","medium","low","lite"],wd=["high","medium","low","lite"];function z0({chunks:i,bricks:t}){return i<=1&&t<=2e4}function hs(i,t,e="medium"){return cs[i]?i:z0(t)?"high":e}function H0(i,t){return!(i==="high"&&z0(t))}var ls=class{constructor(t,{slowMs:e=40,windowMs:n=1500,settleMs:s=1500,floor:r="low"}={}){Object.assign(this,{tier:t,slowMs:e,windowMs:n,settleMs:s,floor:r}),this.reset()}reset(){this.sum=0,this.n=0,this.span=0,this.skip=this.settleMs}sample(t){if(this.skip>0)return this.skip-=t,null;if(this.sum+=t,this.n++,this.span+=t,this.span<this.windowMs)return null;let e=this.sum/this.n;this.sum=0,this.n=0,this.span=0;let n=wd.indexOf(this.tier);return e>this.slowMs&&n<wd.indexOf(this.floor)?(this.tier=wd[n+1],this.reset(),this.tier):null}},Hr=class{constructor(t=1e3){this.windowMs=t,this.times=[],this.last=null}tick(t){let e=this.last===null?0:t-this.last;if(this.last=t,e>0){this.times.push(e);let n=this.times.reduce((s,r)=>s+r,0);for(;this.times.length>1&&n-this.times[0]>=this.windowMs;)n-=this.times.shift()}return e}get ms(){return this.times.length?this.times.reduce((t,e)=>t+e,0)/this.times.length:0}get fps(){return this.ms?1e3/this.ms:0}label(){if(!this.times.length)return"\u2026 fps";let t=this.fps;return`${t<10?t.toFixed(1):Math.round(t)} fps (${this.ms.toFixed(1)} ms)`}};Xt();Xt();var WE=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
    gl_Position.z = gl_Position.w * 0.99999; // always at the far end
  }`,XE=`
  uniform vec3 top, horizon, below, sunDir, sunColor;
  uniform float sunGlow, clouds;
  varying vec3 vDir;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + 1.0), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int k = 0; k < 5; k++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
  void main() {
    vec3 d = normalize(vDir);
    float y = d.y;
    vec3 c = mix(horizon, top, pow(smoothstep(-0.02, 0.22, y), 0.7)); // blue starts low, so it shows in street-level shots
    c = mix(c, below, smoothstep(0.0, -0.25, y));
    float s = max(dot(d, normalize(sunDir)), 0.0);
    c += sunColor * (pow(s, 6.0) * 0.18 + pow(s, 64.0) * 0.35 + pow(s, 900.0) * 3.0) * sunGlow;
    if (y > 0.0 && clouds > 0.0) {
      vec2 uv = d.xz / (y + 0.08) * 1.6;               // flat cloud layer seen in perspective
      float n = fbm(uv + vec2(7.3, 2.1));
      float cover = smoothstep(0.58 - 0.22 * clouds, 0.78, n) * smoothstep(0.0, 0.04, y);
      vec3 lit = mix(horizon, vec3(1.0), 0.75) + sunColor * 0.12 * sunGlow;
      c = mix(c, lit * mix(0.82, 1.0, n), cover * 0.85);
    }
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;function V0(){return new _e({uniforms:{top:{value:new ft},horizon:{value:new ft},below:{value:new ft("#7d776c")},sunDir:{value:new T(0,1,0)},sunColor:{value:new ft("#fff2d8")},sunGlow:{value:1},clouds:{value:.5}},vertexShader:WE,fragmentShader:XE,side:Je,depthWrite:!1,fog:!1,toneMapped:!0})}var cc=class{constructor(t,e=3e3){this.material=V0(),this.mesh=new pe(new Pi(e,32,16),this.material),this.mesh.name="sky",this.mesh.renderOrder=-1,this.mesh.frustumCulled=!1,this.pmrem=new br(t),this.envScene=new Rs,this.envMaterial=V0(),this.envScene.add(new pe(new Pi(50,32,16),this.envMaterial)),this.env=null}set({top:t,horizon:e,sunDir:n,sunColor:s,sunGlow:r}){for(let a of[this.material,this.envMaterial])a.uniforms.top.value.copy(t),a.uniforms.horizon.value.copy(e),a.uniforms.below.value.copy(e).multiplyScalar(.55),a.uniforms.sunDir.value.copy(n),a.uniforms.sunColor.value.copy(s),a.uniforms.sunGlow.value=r,a.uniforms.clouds.value=.5*r;this.envMaterial.uniforms.sunGlow.value=r*.25;let o=this.env;return this.env=this.pmrem.fromScene(this.envScene,0,.1,200),o?.dispose(),this.env.texture}follow(t){this.mesh.position.copy(t.position)}};Xt();var G0="#3d6334";function YE(i=64){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d");e.fillStyle=G0,e.fillRect(0,0,i,i);let n=i/2,s=i*.3;e.fillStyle="rgba(0,0,0,0.22)",e.beginPath(),e.arc(n+i*.05,n+i*.06,s*1.05,0,Math.PI*2),e.fill();let r=e.createLinearGradient(n-s,n-s,n+s,n+s);return r.addColorStop(0,"#5a8a4c"),r.addColorStop(1,"#30522a"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill(),e.fillStyle=G0,e.beginPath(),e.arc(n,n,s*.78,0,Math.PI*2),e.fill(),t}function W0(i,t,e,n,s=4e3){let r=new Zi(YE());r.colorSpace=ke,r.wrapS=r.wrapT=bn,r.repeat.set(s/n,s/n),r.anisotropy=8,r.offset.set((i-s/2)/n%1,(e-s/2)/n%1);let o=new pe(new Ri(s,s),new oi({color:16777215,map:r,roughness:.85}));return o.rotation.x=-Math.PI/2,o.position.set(i,t,e),o.receiveShadow=!0,o.name="ground",o}Xt();Xt();var us={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};Xt();Xt();var cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qE=new Mr(-1,1,1,-1,0,1),Ed=class extends Pe{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},$E=new Ed,hi=class{constructor(t){this._mesh=new pe($E,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ks=class extends cn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zo=class extends cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hc=class extends cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var uc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ks(us),this.copyPass.material.blending=Be,this.clock=new ts}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zo!==void 0&&(o instanceof Zo?n=!0:o instanceof hc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Xt();var fc=class extends cn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};Xt();Xt();var Jo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ot},cameraProjectionMatrixInverse:{value:new Ot},cameraWorldMatrix:{value:new Ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new T(-1,-1,-1)},sceneBoxMax:{value:new T(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Qo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},dc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function X0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=jE(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new T(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ci(s,t,t);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}function jE(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}Xt();var ta={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Sd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new j},cameraProjectionMatrixInverse:{value:new Ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Sd(i,t,e){let n=KE(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function KE(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new T(Math.cos(r),Math.sin(r),o))}return n}var pc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=t-f,x=e-d,m,g;p>x?(m=1,g=0):(m=0,g=1);let M=p-m+h,v=x-g+h,y=p-1+2*h,R=x-1+2*h,w=l&255,S=c&255,I=this.perm[w+this.perm[S]]%12,b=this.perm[w+m+this.perm[S+g]]%12,_=this.perm[w+1+this.perm[S+1]]%12,C=.5-p*p-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[I],p,x));let L=.5-M*M-v*v;L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[b],M,v));let U=.5-y*y-R*R;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[_],y,R)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,p=(h+u+f)*d,x=h-p,m=u-p,g=f-p,M=t-x,v=e-m,y=n-g,R,w,S,I,b,_;M>=v?v>=y?(R=1,w=0,S=0,I=1,b=1,_=0):M>=y?(R=1,w=0,S=0,I=1,b=0,_=1):(R=0,w=0,S=1,I=1,b=0,_=1):v<y?(R=0,w=0,S=1,I=0,b=1,_=1):M<y?(R=0,w=1,S=0,I=0,b=1,_=1):(R=0,w=1,S=0,I=1,b=1,_=0);let C=M-R+d,L=v-w+d,U=y-S+d,O=M-I+2*d,$=v-b+2*d,H=y-_+2*d,Z=M-1+3*d,V=v-1+3*d,rt=y-1+3*d,dt=h&255,gt=u&255,et=f&255,Et=this.perm[dt+this.perm[gt+this.perm[et]]]%12,X=this.perm[dt+R+this.perm[gt+w+this.perm[et+S]]]%12,at=this.perm[dt+I+this.perm[gt+b+this.perm[et+_]]]%12,St=this.perm[dt+1+this.perm[gt+1+this.perm[et+1]]]%12,ht=.6-M*M-v*v-y*y;ht<0?s=0:(ht*=ht,s=ht*ht*this.dot3(this.grad3[Et],M,v,y));let ut=.6-C*C-L*L-U*U;ut<0?r=0:(ut*=ut,r=ut*ut*this.dot3(this.grad3[X],C,L,U));let K=.6-O*O-$*$-H*H;K<0?o=0:(K*=K,o=K*K*this.dot3(this.grad3[at],O,$,H));let F=.6-Z*Z-V*V-rt*rt;return F<0?a=0:(F*=F,a=F*F*this.dot3(this.grad3[St],Z,V,rt)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,x=(t+e+n+s)*l,m=Math.floor(t+x),g=Math.floor(e+x),M=Math.floor(n+x),v=Math.floor(s+x),y=(m+g+M+v)*c,R=m-y,w=g-y,S=M-y,I=v-y,b=t-R,_=e-w,C=n-S,L=s-I,U=b>_?32:0,O=b>C?16:0,$=_>C?8:0,H=b>L?4:0,Z=_>L?2:0,V=C>L?1:0,rt=U+O+$+H+Z+V,dt=o[rt][0]>=3?1:0,gt=o[rt][1]>=3?1:0,et=o[rt][2]>=3?1:0,Et=o[rt][3]>=3?1:0,X=o[rt][0]>=2?1:0,at=o[rt][1]>=2?1:0,St=o[rt][2]>=2?1:0,ht=o[rt][3]>=2?1:0,ut=o[rt][0]>=1?1:0,K=o[rt][1]>=1?1:0,F=o[rt][2]>=1?1:0,ot=o[rt][3]>=1?1:0,k=b-dt+c,Q=_-gt+c,D=C-et+c,yt=L-Et+c,tt=b-X+2*c,Mt=_-at+2*c,vt=C-St+2*c,zt=L-ht+2*c,It=b-ut+3*c,P=_-K+3*c,E=C-F+3*c,G=L-ot+3*c,nt=b-1+4*c,pt=_-1+4*c,it=C-1+4*c,Lt=L-1+4*c,bt=m&255,Tt=g&255,$t=M&255,mt=v&255,Pt=a[bt+a[Tt+a[$t+a[mt]]]]%32,Vt=a[bt+dt+a[Tt+gt+a[$t+et+a[mt+Et]]]]%32,Wt=a[bt+X+a[Tt+at+a[$t+St+a[mt+ht]]]]%32,Ut=a[bt+ut+a[Tt+K+a[$t+F+a[mt+ot]]]]%32,ie=a[bt+1+a[Tt+1+a[$t+1+a[mt+1]]]]%32,J=.6-b*b-_*_-C*C-L*L;J<0?h=0:(J*=J,h=J*J*this.dot4(r[Pt],b,_,C,L));let At=.6-k*k-Q*Q-D*D-yt*yt;At<0?u=0:(At*=At,u=At*At*this.dot4(r[Vt],k,Q,D,yt));let N=.6-tt*tt-Mt*Mt-vt*vt-zt*zt;N<0?f=0:(N*=N,f=N*N*this.dot4(r[Wt],tt,Mt,vt,zt));let ct=.6-It*It-P*P-E*E-G*G;ct<0?d=0:(ct*=ct,d=ct*ct*this.dot4(r[Ut],It,P,E,G));let W=.6-nt*nt-pt*pt-it*it-Lt*Lt;return W<0?p=0:(W*=W,p=W*W*this.dot4(r[ie],nt,pt,it,Lt)),27*(h+u+f+d+p)}};var Vr=class i extends cn{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=X0(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Xe(this.width,this.height,{type:pn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _e({defines:Object.assign({},Jo.defines),uniforms:mn.clone(Jo.uniforms),vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new El,this.normalMaterial.blending=Be,this.pdMaterial=new _e({defines:Object.assign({},ta.defines),uniforms:mn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _e({defines:Object.assign({},Qo.defines),uniforms:mn.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _e({uniforms:mn.clone(us.uniforms),vertexShader:us.vertexShader,fragmentShader:us.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pl,blendDst:Rr,blendEquation:Cn,blendSrcAlpha:Il,blendDstAlpha:Rr,blendEquationAlpha:Cn}),this.blendMaterial=new _e({uniforms:mn.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uf,blendSrc:Pl,blendDst:Rr,blendEquation:Cn,blendSrcAlpha:Il,blendDstAlpha:Rr,blendEquationAlpha:Cn}),this.fsQuad=new hi(null),this.originalClearColor=new ft,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new wr,this.depthTexture.format=$i,this.depthTexture.type=qi,this.normalRenderTarget=new Xe(this.width,this.height,{minFilter:Qe,magFilter:Qe,type:pn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Sd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new pc,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Ci(s,t,t,on,Hn);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}};Vr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};Xt();Xt();var Y0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Gr=class i extends cn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Xe(r,o,{type:pn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Xe(r,o,{type:pn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Y0;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=us;this.copyUniforms=mn.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:tl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new Ki,this.fsQuad=new hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Gr.BlurDirectionX=new j(1,0);Gr.BlurDirectionY=new j(0,1);Xt();var q0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var mc=class extends cn{constructor(){super();let t=q0;this.uniforms=mn.clone(t.uniforms),this.material=new wl({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Of?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $0={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`};var j0={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`};var ZE={radius:.18,distanceExponent:1.3,thickness:.35,scale:1.9,samples:16},JE=15,QE=110,tS=2.4,gc=class{constructor(t,e,n,s,r,o){this.camera=n;let a=new uc(t);a.setPixelRatio(t.getPixelRatio()),a.setSize(s,r),a.addPass(new fc(e,n));let l=new Vr(e,n,s,r);this.aoScale=1;let c=l.setSize.bind(l);l.setSize=(h,u)=>c(Math.max(1,Math.round(h*this.aoScale)),Math.max(1,Math.round(u*this.aoScale))),l.output=Vr.OUTPUT.Default,l.blendIntensity=1,l.updateGtaoMaterial(ZE),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,rings:2,samples:16}),o&&l.setSceneClipBox(o.clone().expandByScalar(1)),a.addPass(l),this.gtao=l,this.bloom=new Gr(new j(s,r),.18,.4,.92),a.addPass(this.bloom),this.tilt=[new ks($0),new ks(j0)];for(let h of this.tilt)a.addPass(h);a.addPass(new mc),this.composer=a,this.tiltOn=!0,this.aoWanted=!0,this.quality={ao:"full",bloom:"always"},this.night=0,this.resize(s,r)}setQuality({ao:t,bloom:e}){this.quality={ao:t,bloom:e};let n=t==="half"?.5:1;n!==this.aoScale&&(this.aoScale=n,this.resize(this.width,this.height)),this.setAO(this.aoWanted),this.setNight(this.night)}setAO(t){this.aoWanted=t,this.gtao.enabled=t&&this.quality.ao!=="off"&&this.aoInRange!==!1}setAOInRange(t){t!==this.aoInRange&&(this.aoInRange=t,this.setAO(this.aoWanted))}setNight(t){this.night=t,this.bloom.strength=se.lerp(.18,.7,t),this.bloom.enabled=this.quality.bloom==="always"||this.quality.bloom!=="off"&&t>.05}setPixelRatio(t){this.composer.setPixelRatio(t),this.resize(this.width,this.height)}setTiltShift(t){this.tiltOn=t;for(let e of this.tilt)e.enabled=t}updateTiltShift(t){if(!this.tiltOn)return;let e=this.camera.position.distanceTo(t),n=se.smoothstep(e,JE,QE)*tS,s=t.clone().project(this.camera).y*.5+.5;this.tilt[0].uniforms.h.value=n/this.width,this.tilt[1].uniforms.v.value=n/this.height;for(let r of this.tilt)r.uniforms.r.value=se.clamp(s,.1,.9);for(let r of this.tilt)r.enabled=n>.05}resize(t,e){this.width=t,this.height=e,this.composer.setSize(t,e)}render(){this.composer.render()}};var eS=new ft("#3a78d4"),nS=new ft("#c9dcee"),iS=new ft("#40619a"),sS=new ft("#f3c39a"),rS=new ft("#060a17"),oS=new ft("#1b2540"),aS=new ft("#fff4e2"),lS=new ft("#ffb46b"),cS=se.degToRad(22),hS=se.degToRad(52);function uS(i){let t=(i-6)/12,e=Math.sin(Math.PI*t)*hS,n=se.smoothstep(-e,-.05,.12),s=se.degToRad(90+180*t),r=e>0?Math.max(e,cS):.5,o=e>0?s:s+Math.PI,a=1-se.smoothstep(e,.05,.6);return{elevation:r,azimuth:o,night:n,low:a}}var Wr=class{constructor(t,e,n){let s=new hl({canvas:t,antialias:!1,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(e,n,!1),s.outputColorSpace=ke,s.toneMapping=Lo,s.shadowMap.enabled=!0,s.shadowMap.type=Lf,s.localClippingEnabled=!0,s.shadowMap.autoUpdate=!1,this.renderer=s,this.scene=new Rs,this.camera=new rn(35,e/n,.3,5e3),this.sky=new cc(s),this.scene.add(this.sky.mesh),this.scene.fog=new ul(15327958,150,900),this.hemi=new Al(12375024,7035464,.6),this.sun=new Rl(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.025,this.sun.shadow.radius=2,this.scene.add(this.hemi,this.sun,this.sun.target),this.overlay=new Rs,this.width=e,this.height=n}setBounds(t,e,{groundSize:n=4e3,groundY:s=t.min.y-.01}={}){this.box=t.clone();let r=t.getCenter(new T);this.radius=t.getSize(new T).length()/2,this.ground=W0(r.x,s,r.z,e,n),this.scene.add(this.ground),this.scene.fog.near=Math.max(60,this.radius*1.2),this.scene.fog.far=Math.max(300,this.radius*3)}initPost(){this.post=new gc(this.renderer,this.scene,this.camera,this.width,this.height,this.box)}setShadowFocus(t){this.shadowBox=t?t.clone():null,this.sunDir&&this.fitShadow()}fitShadow(){let t=this.sun,e=t.shadow.camera,n=this.shadowBox||this.box,s=this.shadowBox?n.getSize(new T).length()/2:this.radius,r=n.getCenter(new T);t.target.position.copy(r),t.position.copy(r).addScaledVector(this.sunDir,s*2+10),t.updateMatrixWorld(),t.target.updateMatrixWorld(),e.position.copy(t.position),e.lookAt(r),e.updateMatrixWorld();let o=e.matrixWorldInverse,a=new T,l=new T(1/0,1/0,1/0),c=l.clone().negate(),{min:h,max:u}=n;for(let d=0;d<8;d++)a.set(d&1?u.x:h.x,d&2?u.y:h.y,d&4?u.z:h.z).applyMatrix4(o),l.min(a),c.max(a);let f=4;e.left=l.x-f,e.right=c.x+f,e.bottom=l.y-f,e.top=c.y+f,e.near=Math.max(.1,-c.z-f),e.far=-l.z+f+200,e.updateProjectionMatrix()}setTime(t){let{elevation:e,azimuth:n,night:s,low:r}=uS(t);this.sunDir=new T(Math.sin(n)*Math.cos(e),Math.sin(e),-Math.cos(n)*Math.cos(e)),this.sun.color.copy(aS).lerp(lS,r),this.sun.intensity=se.lerp(3,.45,s),s>.5&&this.sun.color.set("#9fb4e0"),this.hemi.intensity=se.lerp(.55,.3,s),this.hemi.color.set(s>.5?"#4a5d8c":"#cfe0f5"),this.scene.environmentIntensity=se.lerp(.7,.25,s);let o=eS.clone().lerp(iS,r).lerp(rS,s),a=nS.clone().lerp(sS,r*.7).lerp(oS,s);return this.scene.environment=this.sky.set({top:o,horizon:a,sunDir:this.sunDir,sunColor:this.sun.color,sunGlow:1-s}),this.scene.fog.color.copy(a),this.renderer.toneMappingExposure=se.lerp(1,1.6,s),this.box&&this.fitShadow(),this.night=s,this.post?.setNight(s),s}setQuality(t){let e=Math.min(window.devicePixelRatio||1,t.pixelRatio);e!==this.renderer.getPixelRatio()&&(this.renderer.setPixelRatio(e),this.renderer.setSize(this.width,this.height,!1),this.post?.setPixelRatio(e)),this.sun.castShadow=t.shadows!==!1;let n=this.sun.shadow;n.mapSize.x!==t.shadowMap&&(n.mapSize.set(t.shadowMap,t.shadowMap),n.map?.dispose(),n.map=null),this.post?.setQuality(t)}resize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.post?.resize(t,e)}render(t){this.sky.follow(this.camera),t&&this.post.updateTiltShift(t),this.renderer.shadowMap.needsUpdate=this.sun.castShadow,this.post.render(),this.overlay.children.length&&(this.renderer.autoClear=!1,this.renderer.clearDepth(),this.renderer.render(this.overlay,this.camera),this.renderer.autoClear=!0)}};Xt();Ls();zr();function fS(i){let t=i.studM,e=new ve,n=[];for(let s of i.features.values()){if(!s.bboxIJ||!["building","landmark"].includes(s.kind))continue;let[r,o,a,l]=s.bboxIJ,c=i.bounds;r<c.I0||o<c.J0||a>=c.I1||l>=c.J1||(n.push(s),e.expandByPoint(new T(r*t,0,-(l+1)*t)),e.expandByPoint(new T((a+1)*t,0,-o*t)))}return{box:e,list:n}}function fs(i,t,e){let n=se.degToRad(i),s=se.degToRad(t);return new T(Math.sin(n)*Math.cos(s),Math.sin(s),-Math.cos(n)*Math.cos(s)).multiplyScalar(e)}function dS(i,t){let e=null,n=1/0;for(let s of t){let[r,o,a]=s.bboxIJ,l=0;for(let h=r;h<=a;h++)for(let u=o-16;u<o;u++)for(let f=i.groundK+1;f<i.groundK+20;f++)l+=i.occupied(h,u,f)?1:0;let c=l/(a-r+1);c<n&&(n=c,e=s)}return e}function Td(i,t,e){let n=se.degToRad(t)/2,s=Math.atan(Math.tan(n)*e);return i/Math.sin(Math.min(n,s))}var pS=70;function mS(i,t){if(!i.length)return{};let e=i.reduce((L,U)=>U.count>L.count?U:L),{origin:n,yawDeg:s}=e.island,r=e.studM,{I0:o,J0:a,I1:l,J1:c,K0:h}=e.bounds,u=k0(e),[f,d]=Bl(u),p=f>0?l*r:f<0?o*r:(o+l)/2*r,x=d>0?c*r:d<0?a*r:(a+c)/2*r,[m,g]=bd(n,s,p,x),[M,v]=bd([0,0],s,f,d),y=se.radToDeg(Math.atan2(M,v)),R=new T(m,(h+2)*t+3.2,-g),w={island:{target:R,cam:R.clone().add(fs(y+18,6,9)),fov:50}},S=new ve;for(let L of i)S.union(as(L));let I=S.getCenter(new T),b=S.getSize(new T),_=new T(I.x,S.max.y,I.z),C=Math.max(b.x,b.z)*1.3+8;return w.islandmap={target:_,cam:_.clone().add(fs(180,89.9,C/(2*Math.tan(se.degToRad(10))))),fov:20},w}function K0(i,t,e=1.6,n=[]){let s=i.studM,r=i.groundK*i.plateM,o=t.getCenter(new T),a=t.getSize(new T),{box:l,list:c}=fS(i),h=l.isEmpty()?o.z:l.max.z,u=c.filter(g=>g.kind==="building").sort((g,M)=>g.centroid[0]-M.centroid[0]),f=dS(i,u)||c[0],d=Math.hypot(a.x,a.z)/2,p=new T(o.x,r+Math.min(a.y*.25,8),(o.z+h)/2),x={target:p,cam:p.clone().add(fs(206,30,Td(d,32,e)*.8)),fov:32};if(d>pS){let g=new T(o.x,r+4,o.z);x={target:g,cam:g.clone().add(fs(206,16,se.clamp(d*.85,90,170))),fov:40}}let m={hero:x,map:(()=>{let g=new T(o.x,r+(t.max.y-r)*.3,o.z),M=Math.hypot(a.x,a.z,t.max.y-r)/2;return{target:g,cam:g.clone().add(fs(180,70,Td(M,28,e)*.8)),fov:28}})()};{let g=new T(o.x,r+2,o.z+a.z*.15);m.river={target:g,cam:g.clone().add(fs(192,9,a.z*.75)),fov:40}}if(m.gallery={target:o.clone(),cam:o.clone().add(fs(192,55,Td(Math.hypot(a.x,a.z)/2,30,e)*.72)),fov:30},f){let[g,M,v]=f.bboxIJ,y=new T((g+v+1)/2*s,r+3.2,-M*s+.5);m.facade={target:y,cam:y.clone().add(fs(198,6,6.5)),fov:50}}else m.facade=m.hero;return Object.assign(m,mS(n,i.plateM)),m}Xt();wn();Ls();Xt();function Ad(i,t,e=.4,n="#1d2330",s="rgba(255,255,255,0.85)"){let o=document.createElement("canvas"),a=o.getContext("2d");a.font="600 48px system-ui, sans-serif";let l=Math.ceil(a.measureText(i).width)+48*.6;o.width=l,o.height=Math.ceil(48*1.4),a.font="600 48px system-ui, sans-serif",a.fillStyle=s,a.fillRect(0,0,o.width,o.height),a.fillStyle=n,a.textBaseline="middle",a.fillText(i,48*.3,o.height/2);let c=new Zi(o);c.colorSpace=ke;let h=new dl(new To({map:c,depthWrite:!1,toneMapped:!1,fog:!1}));return h.scale.set(e*o.width/o.height,e,1),h.position.copy(t),h}var xc=11,Z0=13,ea=64,gS={type:23,color:9},J0={type:24,color:37},xS={slope:13,slope_double:14,arch:1,window:8,door:7,fence:11,round:20,round_tile:43,jumper:44,tile_grille:10,tile:21,plate:41,brick:4};function Q0(i){if(!i)return null;let t=new Set;for(let e of i.split(",")){let[n,s]=e.split("-").map(Number);for(let r=n;r<=(s||n);r++)t.add(r)}return t}function yS(i,t,e,n,s){let r=i0(t),[o,a]=Lr(i.w,i.d,r),l=e-Math.floor(o/2),c=n-Math.floor(a/2),[h,u]=Bl(r),f=h>0?l+o+1:h<0?l-2:l+Math.floor((o-1)/2),d=u>0?c+a+1:u<0?c-2:c+Math.floor((a-1)/2);return[{I:l,J:c,K:s,type:i.id,color:xS[i.kind]??4,rot:r},{I:f,J:d,K:s,type:J0.type,color:J0.color,flags:4}]}function tg(i,t){let e=i.catalogue.types.filter(f=>!t||t.has(f.id)),n=e.length>24?4:e.length>12?3:e.length>3?2:1,s=Math.ceil(e.length/n),r=n*4*xc,o=s*Z0,a=[];for(let f=0;f<o;f+=4)for(let d=0;d<r;d+=4)a.push({I:ea+d,J:ea+f,K:0,...gS});let l=new Qt,c=.5,h=.2;return e.forEach((f,d)=>{let p=d%n,x=Math.floor(d/n),m=ea+o-(x+1)*Z0+6;Dr.forEach((M,v)=>{let y=ea+(p*4+v)*xc+5;a.push(...yS(f,M,y,m,1)),l.add(Ad(M,new T((y+.5)*c,.35,-(m-5)*c),.8))});let g=ea+p*4*xc+2*xc;l.add(Ad(`${f.id} ${f.name}`,new T(g*c,(f.h+4)*h,-(m+5.5)*c),.9))}),{world:Yn.fromRecords({...i,features:{features:[]}},a),labels:l}}Xt();ko();Rd();bc();Cd();var ng=18;function wS(i,t,e){let n=i.topK(t,e)-1,s=i.brickAt(t,e,n);return s<0?"":i.palette.get(i.color[s])?.name||""}function ig(i,t,e){let n=null,s=null,{J0:r,J1:o}=i.bounds;for(let a=r;a<=o;a++){let l=a<o&&e(wS(i,t,a));l&&s===null&&(s=a),!l&&s!==null&&((!n||a-1-s>n[1]-n[0])&&(n=[s,a-1]),s=null)}return n}function ES(i,t,e){let n=(o,a)=>i.topK(o,a)===e,s=(o,a,l,c)=>{for(let h=o-1;h<=l+1;h++)for(let u of[a-1,a,a+1,c-1,c,c+1])if(!n(h,u))return!1;for(let h=a-1;h<=c+1;h++)for(let u of[o-1,o,o+1,l-1,l,l+1])if(!n(u,h))return!1;return!0},r=null;for(let o=t[0];o<=t[2];o+=2)for(let a=t[1];a<=t[3];a+=2)for(let l=24;l>=8;l-=4){let c=o+l,h=a+Math.round(l*.6);if(!(c>t[2]||h>t[3])){if(r&&l<=r.s)break;if(s(o,a,c,h)){r={s:l,rect:[o,a,c,h]};break}}}return r?.rect||null}function SS(i){let t=wc(),e={...i||{}},n=Object.keys(e).filter(s=>/walk|person|figure|character|pedestrian|people/i.test(s));return{bus:e.bus||t.bus,boat:e.boat||t.boat,walkers:n.length?n.map(s=>e[s]):[t.walker_a,t.walker_b],placeholder:!e.bus||!e.boat||!n.length}}function sg(i,t,e){let n=i.studM,s=i.plateM,r=[new Ne(new T(1,0,0),-t.min.x),new Ne(new T(-1,0,0),t.max.x),new Ne(new T(0,0,1),-t.min.z),new Ne(new T(0,0,-1),t.max.z)],o=new ci({clippingPlanes:r}),a=SS(e),l={palette:i.palette,types:i.types,mats:o,studM:n,plateM:s},c=new Qt;c.name="demo";let h=[],{I0:u,I1:f,J0:d,J1:p}=i.bounds,x=Math.floor((u+f)/2),m=u*n-ng,g=f*n+ng,M=(u+f)*n/2,v=(C,L,U)=>{let O=yc(C,l);c.add(O);let $=O.userData.parts,H=O.userData.model,Z=V=>(H.parts[V].pivot[2]-(H.pivot?.[2]||0))*s;h.push({obj:O,mover:L,walk:U?new vc($):null,wheels:new _c($,Z)})},y=ig(i,x,C=>C==="asphalt");if(y){let C=y[1]-y[0]+1,L=(y[0]+C*.3)*n,U=(y[0]+C*.72)*n,O=i.topK(x,y[0]+(C>>1))*s,$=[[m,O,L],[g,O,L],[g,O,U],[m,O,U]];v(a.bus,new Ln({path:$,speed:4,turnRadius:3,start:M-m-6}))}let R=ig(i,x,C=>/^water/.test(C));if(R){let C=(R[0]+R[1]+1)/2*n,L=i.topK(x,R[0]+1)*s;v(a.boat,new Ln({path:[[g,L,C],[m,L,C]],speed:1.6,turnRadius:4,start:g-M-5}))}let w=[...i.features.values()].find(C=>/caf/i.test(C.name||"")&&C.bboxIJ),S=[...i.features.values()].filter(C=>C.kind==="street"&&C.bboxIJ).sort((C,L)=>(L.bboxIJ[2]-L.bboxIJ[0])*(L.bboxIJ[3]-L.bboxIJ[1])-(C.bboxIJ[2]-C.bboxIJ[0])*(C.bboxIJ[3]-C.bboxIJ[1]))[0],I=w?[w.bboxIJ[0]-10,w.bboxIJ[1]-10,w.bboxIJ[2]+10,w.bboxIJ[3]+10]:S?S.bboxIJ:[u+2,d+2,f-3,p-3],b=ES(i,I.map((C,L)=>Math.max([u+1,d+1,u+1,d+1][L],Math.min([f-2,p-2,f-2,p-2][L],C))),i.groundK);if(b){let C=i.groundK*s,[L,U,O,$]=b.map(V=>(V+.5)*n),H=[[L,C,U],[O,C,U],[O,C,$],[L,C,$]];v(a.walkers[0],new Ln({path:H,speed:.9,turnRadius:.6,start:1}),!0);let Z=[...H].reverse();v(a.walkers[1%a.walkers.length],new Ln({path:Z,speed:.75,turnRadius:.6,start:O-L+2}),!0)}function _(C){o.update(performance.now()/1e3);for(let L of h){let{pose:U,travelled:O}=L.mover.update(C);Mc(U,L.obj),L.walk?.update(O,C>0?O/C:0),L.wheels.update(O)}}return _(0),{group:c,update:_,actors:h,mats:o,placeholder:a.placeholder,paths:{road:y,river:R,rect:b}}}function TS(i,t,e,n=2e4){let s=i.studM,r=i.plateM,o=[t.x/s,-t.z/s,t.y/r],a=[e.x/s,-e.z/s,e.y/r],{I0:l,J0:c,K0:h,I1:u,J1:f,K1:d}=i.bounds,p=[l,c,h],x=[u,f,d],m=0,g=1/0;for(let I=0;I<3;I++){if(Math.abs(a[I])<1e-12){if(o[I]<p[I]||o[I]>=x[I])return null;continue}let b=(p[I]-o[I])/a[I],_=(x[I]-o[I])/a[I];b>_&&([b,_]=[_,b]),m=Math.max(m,b),g=Math.min(g,_)}if(m>g)return null;let M=m+1e-7,v=[0,1,2].map(I=>Math.min(x[I]-1,Math.max(p[I],Math.floor(o[I]+a[I]*M)))),y=a.map(I=>I>0?1:I<0?-1:0),R=a.map(I=>I?Math.abs(1/I):1/0),w=a.map((I,b)=>I?(v[b]+(I>0?1:0)-o[b])/I:1/0),S=m;for(let I=0;I<n;I++){let b=i.brickAt(v[0],v[1],v[2]);if(b>=0)return{n:b,I:v[0],J:v[1],K:v[2],distance:S};let _=w[0]<w[1]?w[0]<w[2]?0:2:w[1]<w[2]?1:2;if(S=w[_],S>g)return null;v[_]+=y[_],w[_]+=R[_]}return null}function Ec(i,t,e){let n=null;for(let s of i){let r=s.toLocal?s.toLocal(t,!1):t,o=s.toLocal?s.toLocal(e,!0):e,a=TS(s.world,r,o);a&&(!n||a.distance<n.distance)&&(n={...a,target:s})}return n}zr();Ls();var En=i=>document.getElementById(i);function Id(i){let t=Math.round(i*60);return`${String(Math.floor(t/60)%24).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function Sc({time:i,tilt:t,ao:e,anim:n,quality:s,onTime:r,onTilt:o,onAO:a,onAnim:l,onQuality:c}){let h=En("time"),u=En("timeLabel");h.value=i,u.textContent=Id(i),h.addEventListener("input",()=>{u.textContent=Id(+h.value),r(+h.value)});let f={tilt:o,ao:a,anim:l},d={tilt:t,ao:e,anim:n};for(let[p,x]of Object.entries(f))En(p).checked=d[p],En(p).addEventListener("change",m=>x(m.target.checked));return En("quality").value=s,En("quality").addEventListener("change",p=>c(p.target.value)),AS(),{set(p){h.value=p.time,u.textContent=Id(p.time);for(let x of Object.keys(f))En(x).checked=p[x];En("quality").value=p.quality},tier(p,x){En("tierLabel").textContent=p==="auto"?`\u2192 ${x}`:""},views(p){En("views").innerHTML="View: "+p.map(x=>`<a href="#view=${encodeURIComponent(x)}">${qn(x)}</a>`).join("")},stats(p){if(p.text){En("stats").textContent=p.text;return}En("stats").textContent=`${p.bricks.toLocaleString()} bricks \xB7 ${p.near}/${p.chunks} chunks near \xB7 ${p.studs.toLocaleString()} studs \xB7 ${p.calls} draws \xB7 ${(p.triangles/1e6).toFixed(2)} M tris \xB7 ${p.actors} movers \xB7 ${p.fps}`},info(p){let x=En("info");x.innerHTML=p||"",x.hidden=!p}}}function qn(i){return String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function AS(i=document){let t=i.getElementById("hud"),e=i.getElementById("hudToggle");if(!t||!e)return;let n=null;try{n=localStorage.getItem("blox.hud")}catch{}let s=typeof matchMedia=="function"&&matchMedia("(max-width: 600px)").matches,r=o=>{t.classList.toggle("collapsed",o),e.textContent=o?"show":"hide",e.setAttribute("aria-expanded",String(!o));try{localStorage.setItem("blox.hud",o?"collapsed":"open")}catch{}};r(n?n==="collapsed":s),e.addEventListener("click",()=>r(!t.classList.contains("collapsed"))),i.addEventListener("keydown",o=>{o.code==="KeyU"&&!o.repeat&&!/^(INPUT|SELECT|TEXTAREA)$/.test(o.target?.tagName||"")&&r(!t.classList.contains("collapsed"))})}function rg(i,t=document){let e=t.createElement("div");e.className="panel notice",e.setAttribute("role","alert"),e.textContent=i;let n=t.createElement("button");return n.type="button",n.textContent="OK",n.addEventListener("click",()=>e.remove()),e.append(" ",n),t.body.append(e),e}function og(i,t=document){let e=t.getElementById("perf");e&&(e.closest("label").hidden=!1,e.checked=i,e.addEventListener("change",()=>{try{localStorage.setItem("blox.perf",e.checked?"on":"off")}catch{}let n=new URLSearchParams(location.hash.replace(/^#/,""));n.set("perf",e.checked?"1":"0"),location.hash=n.toString(),location.reload()}))}var ag="unknown",Tc=Math.PI/180;function RS(i,t,e){let n=Math.sin(i.yawDeg*Tc),s=Math.cos(i.yawDeg*Tc),r=t-i.origin[0],o=-e-i.origin[1];return[r*s-o*n,r*n+o*s]}var na=class{constructor(t){Object.assign(this,{studM:.5,plateM:.2,chunkStuds:64,chunksX:64,chunksY:64,hasChunk:()=>!0,islandsOver:()=>[]},t),this.chunks=new Map,this.islands=new Map,this.byChunk=new Map}setChunk(t,e,n){n?this.chunks.set(`${t},${e}`,n):this.chunks.delete(`${t},${e}`)}setIsland(t,e){this.removeIsland(t.id);let n=this.studM,s=[1/0,1/0,-1/0,-1/0];for(let[a,l]of[[e.I0,e.J0],[e.I1,e.J0],[e.I0,e.J1],[e.I1,e.J1]]){let c=Math.sin(t.yawDeg*Tc),h=Math.cos(t.yawDeg*Tc),u=t.origin[0]+a*n*h+l*n*c,f=-(t.origin[1]-a*n*c+l*n*h);s[0]=Math.min(s[0],u),s[1]=Math.min(s[1],f),s[2]=Math.max(s[2],u),s[3]=Math.max(s[3],f)}let r={map:e,island:t,rect:s,chunks:[]};this.islands.set(t.id,r);let o=this.chunkStuds*n;for(let a=Math.floor(s[0]/o);a<=Math.floor(s[2]/o);a++)for(let l=Math.floor(-s[3]/o);l<=Math.floor(-s[1]/o);l++){let c=`${a},${l}`;this.byChunk.has(c)||this.byChunk.set(c,new Set),this.byChunk.get(c).add(t.id),r.chunks.push(c)}}removeIsland(t){let e=this.islands.get(t);if(e){for(let n of e.chunks)this.byChunk.get(n)?.delete(t);this.islands.delete(t)}}column(t,e){if(t<0||e<0||t>=this.chunksX||e>=this.chunksY)return{map:null,islands:[]};let n=`${t},${e}`,s=this.chunks.get(n)||null;if(!s&&this.hasChunk(t,e))return null;let r=this.byChunk.get(n);for(let o of this.islandsOver(t,e))if(!r?.has(o))return null;return{map:s,islands:r?[...r].map(o=>this.islands.get(o)):[]}}locate(t,e){let n=this.studM,s=Math.floor(t/n),r=Math.floor(-e/n),o=this.column(Math.floor(s/this.chunkStuds),Math.floor(r/this.chunkStuds));return o&&{col:o,I:s,J:r}}islandCell(t,e,n){let[s,r]=RS(t.island,e,n);return[Math.floor(s/this.studM),Math.floor(r/this.studM)]}test(t,e,n,s){let r=this.locate(t,n);if(!r)return ag;let o=Math.floor(e/this.plateM);if(r.col.map?.[s](r.I,r.J,o))return!0;for(let a of r.col.islands){let[l,c]=this.islandCell(a,t,n);if(a.map[s](l,c,o))return!0}return!1}isSolid(t,e,n){return this.test(t,e,n,"isSolid")}isWater(t,e,n){return this.test(t,e,n,"isWater")}groundHeight(t,e,n=1/0){let s=this.locate(t,e);if(!s)return ag;let r=Number.isFinite(n)?Math.floor(n/this.plateM):1/0,o=s.col.map?s.col.map.topBelow(s.I,s.J,r):-1/0;for(let a of s.col.islands){let[l,c]=this.islandCell(a,t,e);o=Math.max(o,a.map.topBelow(l,c,r))}return o===-1/0?null:(o+1)*this.plateM}};function lg(i,t,e=()=>!1,n){let s=new na({studM:i.studM,plateM:i.plateM,chunkStuds:i.chunkStuds,hasChunk:()=>!1});if(i.count){let l=n.fromWorld(i,p=>e(i,p)),{I0:c,J0:h,I1:u,J1:f}=i.bounds,d=i.chunkStuds;for(let p=Math.floor(c/d);p<=Math.floor((u-1)/d);p++)for(let x=Math.floor(h/d);x<=Math.floor((f-1)/d);x++)s.setChunk(p,x,l)}for(let l of t)s.setIsland(l.island,n.fromWorld(l,c=>e(l,c)));let r=i.studM,o=i.plateM,a=i.bounds;return s.box={min:{x:a.I0*r,y:a.K0*o,z:-a.J1*r},max:{x:a.I1*r,y:a.K1*o,z:-a.J0*r}},s.approxGround=()=>i.groundK*o,s.focus=()=>{},s}var Ui=class i{constructor(t,e,n,s,r,o){Object.assign(this,{I0:t,J0:e,K0:n,I1:s,J1:r,K1:o}),this.nx=Math.max(0,s-t),this.ny=Math.max(0,r-e),this.nz=Math.max(0,o-n);let a=this.nx*this.ny*this.nz;this.solid=new Uint8Array(a+7>>3),this.water=new Uint8Array(a+7>>3)}index(t,e,n){let s=t-this.I0,r=e-this.J0,o=n-this.K0;return s<0||r<0||o<0||s>=this.nx||r>=this.ny||o>=this.nz?-1:s+this.nx*(r+this.ny*o)}set(t,e,n,s){let r=this.index(t,e,n);r<0||(this.solid[r>>3]|=1<<(r&7),s&&(this.water[r>>3]|=1<<(r&7)))}isSolid(t,e,n){let s=this.index(t,e,n);return!!(s>=0&&this.solid[s>>3]>>(s&7)&1)}isWater(t,e,n){let s=this.index(t,e,n);return!!(s>=0&&this.water[s>>3]>>(s&7)&1)}topBelow(t,e,n=1/0){if(t<this.I0||e<this.J0||t>=this.I1||e>=this.J1)return-1/0;for(let s=Math.min(n,this.K1-1);s>=this.K0;s--)if(this.isSolid(t,e,s))return s;return-1/0}toJSON(){return{box:[this.I0,this.J0,this.K0,this.I1,this.J1,this.K1],solid:this.solid,water:this.water}}static from({box:t,solid:e,water:n}){let s=new i(...t);return s.solid=e,s.water=n,s}static fromWorld(t,e=()=>!1){let n=t.bounds,s=new i(n.I0,n.J0,n.K0,n.I1,n.J1,n.K1);for(let r=0;r<t.count;r++){let o=t.typeOf(r);if(!o)continue;let[a,l]=t.extentOf(r),c=e(r);for(let h=0;h<o.h;h++)for(let u=0;u<l;u++)for(let f=0;f<a;f++)s.set(t.I[r]+f,t.J[r]+u,t.K[r]+h,c)}return s}};Xt();ko();wn();Xt();Kl();ic();Oo();kr();function Pd(i,t){let e=Math.max(i.min.x-t.x,0,t.x-i.max.x),n=Math.max(i.min.y-t.y,0,t.y-i.max.y),s=Math.max(i.min.z-t.z,0,t.z-i.max.z);return Math.hypot(e,n,s)}var Xr=class{constructor(t,e){this.items=t.map(n=>({...n,state:0,dist:1/0,payload:null,ctrl:null,failedAt:0})),this.byKey=new Map(this.items.map(n=>[n.key,n])),Object.assign(this,{loadRadius:250,unloadRadius:null,abortFactor:1.25,concurrency:6,maxLoaded:600,retryMs:5e3,now:()=>Date.now(),unload:()=>{}},e),this.inflight=0,this.loadedCount=0,this.stats={started:0,done:0,aborted:0,failed:0,unloaded:0}}get(t){return this.byKey.get(t)}setRadius(t,e=null){this.loadRadius=t,this.unloadRadius=e}settled(){return this.pending===0&&this.inflight===0}update(t,e=null){let n=this.unloadRadius??this.loadRadius*1.5,s=Array.isArray(t)?t:[t],r=[];for(let a of this.items){a.dist=1/0;for(let l of s)a.dist=Math.min(a.dist,Pd(a.box,l));a.priority=a.dist*(e&&!e(a.box)?2:1),a.state===1&&a.dist>this.loadRadius*this.abortFactor?this.abort(a):a.state===2&&a.dist>n?this.drop(a):a.dist<=this.loadRadius&&(a.state===0||a.state===3&&this.now()-a.failedAt>this.retryMs)&&r.push(a)}r.sort((a,l)=>a.priority-l.priority),this.pending=r.length;let o=0;for(let a of r){if(this.inflight>=this.concurrency)break;this.start(a),o++}if(this.pending-=o,this.loadedCount>this.maxLoaded){let a=this.items.filter(l=>l.state===2).sort((l,c)=>c.dist-l.dist);for(let l of a.slice(0,this.loadedCount-this.maxLoaded))this.drop(l)}return o}start(t){t.state=1;let e=typeof AbortController=="function"?new AbortController:{signal:null,abort(){}};t.ctrl=e,this.inflight++,this.stats.started++;let n;try{n=Promise.resolve(this.load(t,e.signal))}catch(s){n=Promise.reject(s)}n.then(s=>{if(t.ctrl!==e){this.unload(t,s);return}t.ctrl=null,this.inflight--,t.state=2,t.payload=s,this.loadedCount++,this.stats.done++,this.onReady?.(t)},s=>{t.ctrl===e&&(t.ctrl=null,this.inflight--,t.state=3,t.failedAt=this.now(),this.stats.failed++,this.onError?.(t,s))})}abort(t){let e=t.ctrl;t.ctrl=null,t.state=0,this.inflight--,this.stats.aborted++,e?.abort()}drop(t){let e=t.payload;t.payload=null,t.state=0,this.loadedCount--,this.stats.unloaded++,this.unload(t,e)}counts(){return{items:this.items.length,loaded:this.loadedCount,inflight:this.inflight,pending:this.pending??0,...this.stats}}};var cg=[0,2,1],CS=(()=>{let i=[];for(let t=0;t<6;t++){let e=t>>1,n=t&1?-1:1,s=(e+1)%3,r=(e+2)%3,o=(f,d)=>{let p=[0,0,0];return p[s]=f,p[r]=d,[p[0],p[2],p[1]]},a=[o(0,0),o(1,0),o(1,1)],l=a[1].map((f,d)=>f-a[0][d]),c=a[2].map((f,d)=>f-a[0][d]),h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]],u=[0,0,0];u[cg[e]]=n,i.push(h[0]*u[0]+h[1]*u[1]+h[2]*u[2]>0?[0,1,2,3]:[0,3,2,1])}return i})();function hg({header:i,owners:t,quads:e},n,s=.5,r=.2){let o=new Map,a=new Uint8Array(256),l=[],c=new Map;for(let[y,R]of n){let w=Hl(R),S=Vl(w);l.includes(S)||l.push(S),a[y]=l.indexOf(S),c.set(y,{key:w,shine:Gl(w),color:ln(R,0,0,0,!0)})}let h=l.map(()=>0);for(let y=0;y<e.count;y++)h[a[e.color[y]]]++;let u=l.map((y,R)=>{let w=h[R],S=w*4;return{name:y,n:w,v:0,i:0,position:new Uint16Array(S*3),normal:new Int8Array(S*3),color:new Uint16Array(S*3),extra:new Uint8Array(S*4),index:S>65535?new Uint32Array(w*6):new Uint16Array(w*6),ranges:t.map(()=>({start:0,count:0}))}}),f=new ft,d=new ft,p=[0,0,0],x=0,m=t.length?t[0].quads:0;for(let y of u)y.ranges[0]&&(y.ranges[0].start=0);for(let y=0;y<e.count;y++){for(;x<t.length-1&&y>=m;){x++,m+=t[x].quads;for(let at of u)at.ranges[x].start=at.i}let R=e.color[y],w=c.get(R)||{key:"solid",shine:0,color:f.set("#ff00ff").clone()},S=u[a[R]],I=e.dir[y],b=I>>1,_=(b+1)%3,C=(b+2)%3,L=e.x[y],U=e.y[y],O=e.z[y],$=e.w[y],H=e.h[y];f.copy(w.color);let Z=1+((L*73856093^U*19349663^O*83492791)&255)/255*.06-.03;f.multiplyScalar(Z);let V=null;w.key==="glass"?V=vd(0,i.gi0+L,i.gj0+U,i.gk0*7+O*3+I,d):w.key.startsWith("emissive:")&&(V=d.copy(w.color).multiplyScalar(.6));let[rt,dt,gt]=xd(V),et=[0,0,0];et[cg[b]]=I&1?-127:127;let Et=S.v;for(let[at,St]of[[0,0],[1,0],[1,1],[0,1]]){p[0]=L,p[1]=U,p[2]=O,p[_]+=at*$,p[C]+=St*H;let ht=S.v*3;S.position[ht]=p[0],S.position[ht+1]=p[2],S.position[ht+2]=p[1],S.normal[ht]=et[0],S.normal[ht+1]=et[1],S.normal[ht+2]=et[2],S.color[ht]=Math.min(65535,f.r*65535),S.color[ht+1]=Math.min(65535,f.g*65535),S.color[ht+2]=Math.min(65535,f.b*65535);let ut=S.v*4;S.extra[ut]=rt,S.extra[ut+1]=dt,S.extra[ut+2]=gt,S.extra[ut+3]=w.shine,S.v++}let X=CS[I];S.index[S.i++]=Et+X[0],S.index[S.i++]=Et+X[1],S.index[S.i++]=Et+X[2],S.index[S.i++]=Et+X[0],S.index[S.i++]=Et+X[2],S.index[S.i++]=Et+X[3],S.ranges[x].count+=6}let g=new Map;for(let y of u)y.n&&g.set(y.name,{arrays:{position:y.position,normal:y.normal,color:y.color,extra:y.extra,index:y.index},ranges:y.ranges});let M=i.cellStuds*s,v=i.cellPlates*r;return{families:g,position:[i.gi0*M,i.gk0*v,-i.gj0*M],scale:[M,v,-M],triangles:e.count*2}}function ug(i){let t=new Pe;return t.setAttribute("position",new ae(i.position,3)),t.setAttribute("normal",new ae(i.normal,3,!0)),t.setAttribute("color",new ae(i.color,3,!0)),t.setAttribute("aExtra",new ae(i.extra,4,!0)),t.setIndex(new ae(i.index,1)),t.computeBoundingSphere(),tc(t)}function IS(i,t,e,n,s){let r=hg(i,t,n,s),o=new Qt;o.position.fromArray(r.position),o.scale.fromArray(r.scale),o.name=`far region ${i.header.rx},${i.header.ry}`;let a=[];for(let[l,{arrays:c,ranges:h}]of r.families){let u=e.cityFar(l),f=Xo(new pe(ug(c),[u]));f.castShadow=!u.transparent,f.receiveShadow=!0,f.name=`farbake|${l}`,o.add(f),a.push({mesh:f,ranges:h})}return o.updateMatrixWorld(!0),{group:o,parts:a,owners:i.owners,triangles:r.triangles}}function PS(i,t){let e=i[0].arrays.scale,n=c=>[Math.round(c.position[0]/e[0]),Math.round(c.position[1]/e[1]),Math.round(c.position[2]/e[2])],s=i.map(c=>n(c.arrays)),r=[0,1,2].map(c=>Math.min(...s.map(h=>h[c]))),o=new Qt;o.position.set(r[0]*e[0],r[1]*e[1],r[2]*e[2]),o.scale.fromArray(e),o.name="far block";let a=new Map;i.forEach((c,h)=>{for(let[u,{arrays:f}]of c.arrays.families)a.has(u)||a.set(u,[]),a.get(u).push({key:c.reg.key,a:f,off:s[h].map((d,p)=>d-r[p])})});let l=[];for(let[c,h]of a){let u=h.reduce((v,y)=>v+y.a.position.length/3,0),f=h.reduce((v,y)=>v+y.a.index.length,0),d={position:new Uint16Array(u*3),normal:new Int8Array(u*3),color:new Uint16Array(u*3),extra:new Uint8Array(u*4),index:new Uint32Array(f)},p=new Map,x=0,m=0;for(let{key:v,a:y,off:R}of h){let w=y.position.length/3;for(let S=0;S<w;S++)d.position[(x+S)*3]=y.position[S*3]+R[0],d.position[(x+S)*3+1]=y.position[S*3+1]+R[1],d.position[(x+S)*3+2]=y.position[S*3+2]+R[2];d.normal.set(y.normal,x*3),d.color.set(y.color,x*3),d.extra.set(y.extra,x*4);for(let S=0;S<y.index.length;S++)d.index[m+S]=y.index[S]+x;p.set(v,{start:m,count:y.index.length}),x+=w,m+=y.index.length}let g=t.cityFar(c),M=Xo(new pe(ug(d),[g]));M.castShadow=!g.transparent,M.receiveShadow=!0,M.name=`farblock|${c}`,o.add(M),l.push({mesh:M,order:h.map(v=>v.key),ranges:p})}return o.updateMatrixWorld(!0),{group:o,parts:l}}function DS(i,t){let e=0,n=0;for(let{mesh:s,order:r,ranges:o}of i.parts){let a=s.geometry;a.clearGroups();let l=null;for(let c of r){let h=o.get(c);if(!t.has(c)){l=null;continue}e+=h.count/3,l&&l.start+l.count===h.start?l.count+=h.count:(l={start:h.start,count:h.count,materialIndex:0},a.groups.push(l))}s.visible=a.groups.length>0,n+=a.groups.length}return{triangles:e,groups:n}}function LS(i,t){for(let{mesh:e,ranges:n}of i.parts){let s=e.geometry;s.clearGroups();let r=null,o=0;i.owners.forEach((a,l)=>{let c=n[l];if(!c.count||t(a.cx,a.cy)){r=null;return}o+=c.count/3,r&&r.start+r.count===c.start?r.count+=c.count:(r={start:c.start,count:c.count,materialIndex:0},s.groups.push(r))}),e.visible=s.groups.length>0,e.userData.triangles=o}}var Ac=class{constructor(t,{palette:e,mats:n,fetchBytes:s,decode:r,covered:o,showDist:a=[260,900],blockRegions:l=0}){Object.assign(this,{index:t,palette:e,mats:n,fetchBytes:s,decode:r,covered:o,showDist:a,blockRegions:l}),this.blocks=new Map,this.group=new Qt,this.group.name="far regions",this.regions=new Map;let c=t.regionChunks,h=t.chunkStuds*t.studM,u=[...t.levels].sort((f,d)=>d.level-f.level);this.levels=u.map(f=>f.level),this.coarsest=this.levels[0],this.schedulers=new Map;for(let f of u){let d=f.regions.map(m=>{let g=`${m.rx},${m.ry}`;this.regions.has(g)||this.regions.set(g,{key:g,rx:m.rx,ry:m.ry,looks:new Map,shown:null,sig:"",box:{min:{x:m.rx*c*h,y:0,z:-(m.ry+1)*c*h},max:{x:(m.rx+1)*c*h,y:120,z:-m.ry*c*h}}});let M=this.regions.get(g);return{key:`${f.level}|${g}`,box:M.box,file:m.file,level:f.level,region:M}}),p=f.level===this.coarsest,x=new Xr(d,{loadRadius:p?1/0:this.loadRadius(f.level),unloadRadius:p?1/0:this.loadRadius(f.level)*1.4,concurrency:p?8:3,load:async(m,g)=>({decoded:await this.decode(await this.fetchBytes(m.file,g)),level:m.level,built:null}),unload:(m,g)=>{if(g){if(m.region.looks.get(m.level)===g&&m.region.looks.delete(m.level),g.built){this.group.remove(g.built.group);for(let M of g.built.parts)M.mesh.geometry.dispose()}m.region.shown===g&&(m.region.shown=null)}}});if(x.onReady=m=>{m.region.looks.set(m.level,m.payload),p&&this.blockRegions&&this.addToBlock(m.region,m.payload)},p&&this.blockRegions)for(let m of f.regions)this.blockOf(m.rx,m.ry).expected++;this.schedulers.set(f.level,x)}}blockOf(t,e){let n=this.blockRegions,s=`${Math.floor(t/n)},${Math.floor(e/n)}`;return this.blocks.has(s)||this.blocks.set(s,{key:s,expected:0,items:[],built:null,show:new Set}),this.blocks.get(s)}addToBlock(t,e){let n=this.blockOf(t.rx,t.ry);e.block=n,n.items.push({reg:t,arrays:hg(e.decoded,this.palette,this.index.studM,this.index.plateM)}),e.decoded=null,n.items.length===n.expected&&this.buildBlock(n)}buildBlock(t){t.built=PS(t.items,this.mats),t.items=[],this.group.add(t.built.group)}setShowDist(t){if(!(t[0]===this.showDist[0]&&t[1]===this.showDist[1])){this.showDist=t;for(let[e,n]of this.schedulers)e!==this.coarsest&&n.setRadius(this.loadRadius(e),this.loadRadius(e)*1.4)}}loadRadius(t){let e=this.levels.indexOf(t),n=this.levels.length-1-e;return(this.showDist[n]??this.showDist[this.showDist.length-1])*1.3}silhouetteReady(){return this.schedulers.get(this.coarsest).settled()&&this.schedulers.get(this.coarsest).loadedCount>0}settled(){return[...this.schedulers.values()].every(t=>t.settled())}levelFor(t){let e=this.levels[this.levels.length-1];for(let n=0;n<this.showDist.length;n++)if(t<this.showDist[n])return Math.min(this.coarsest,e+n);return this.coarsest}update(t,e=!1,n=null){let s=this.schedulers.get(this.coarsest);if(s.update(t),s.settled())for(let[a,l]of this.schedulers)a!==this.coarsest&&l.update(t);let r=0,o=0;for(let a of this.blocks.values())a.show.clear(),!a.built&&a.items.length&&s.settled()&&this.buildBlock(a);for(let a of this.regions.values()){let l=Math.max(a.box.min.x-t.x,0,t.x-a.box.max.x),c=Math.max(a.box.min.z-t.z,0,t.z-a.box.max.z),h=this.levelFor(Math.hypot(l,Math.max(0,t.y-a.box.max.y),c)),u=a.looks.get(h)||null;for(let d=h+1;!u&&d<=this.coarsest;d++)u=a.looks.get(d)||null;for(let d=h-1;!u&&d>=1;d--)u=a.looks.get(d)||null;if(u!==a.shown&&(a.shown?.built&&(a.shown.built.group.visible=!1),a.shown=u,a.sig=""),!u)continue;if(u.block){(!n||n(a.box))&&u.block.show.add(a.key);continue}u.built||(u.built=IS(u.decoded,this.palette,this.mats,this.index.studM,this.index.plateM),u.decoded=null,this.group.add(u.built.group));let f=u.built;f.group.visible=!0,(e||!a.sig)&&(LS(f,this.covered),a.sig="ok");for(let d of f.parts)d.mesh.visible&&(r+=d.mesh.userData.triangles,o+=d.mesh.geometry.groups.length)}for(let a of this.blocks.values()){if(!a.built)continue;let l=DS(a.built,a.show);r+=l.triangles,o+=l.groups}return this.lastStats={regions:this.regions.size,triangles:r,groups:o},this.lastStats}stats(){let t={};for(let[e,n]of this.schedulers)t[`l${e}`]=n.loadedCount;return{...this.lastStats,...t}}};Oo();var US="BXF1",Rc=40,fg=12,dg=8;function NS(i){if(i.byteLength<Rc)throw new Error(`far region needs ${Rc} header bytes`);let t=String.fromCharCode(i[0],i[1],i[2],i[3]);if(t!==US)throw new Error(`bad far region magic ${JSON.stringify(t)}`);let e=new DataView(i.buffer,i.byteOffset,i.byteLength),n={version:e.getUint16(4,!0),flags:e.getUint16(6,!0),rx:e.getInt32(8,!0),ry:e.getInt32(12,!0),gi0:e.getInt32(16,!0),gj0:e.getInt32(20,!0),gk0:e.getInt32(24,!0),cellStuds:i[28],cellPlates:i[29],ownerCount:e.getUint16(30,!0),quadCount:e.getUint32(32,!0),bodyBytes:e.getUint32(36,!0)};if(n.version!==1)throw new Error(`unsupported far region version ${n.version}`);if(i.byteLength!==Rc+n.bodyBytes)throw new Error(`far region ${n.rx},${n.ry}: truncated`);return n}async function pg(i,t){let e=NS(i),n=i.subarray(Rc);e.flags&1&&(n=await t(n));let s=e.ownerCount*dg+e.quadCount*fg;if(n.byteLength!==s)throw new Error(`far region ${e.rx},${e.ry}: body ${n.byteLength} B, expected ${s}`);let r=new DataView(n.buffer,n.byteOffset,n.byteLength),o=[],a=0,l=0;for(let u=0;u<e.ownerCount;u++,a+=dg){let f=r.getUint32(a+4,!0);o.push({cx:r.getInt16(a,!0),cy:r.getInt16(a+2,!0),quads:f,start:l}),l+=f}let c=e.quadCount,h={x:new Uint16Array(c),y:new Uint16Array(c),z:new Uint16Array(c),w:new Uint16Array(c),h:new Uint16Array(c),dir:new Uint8Array(c),color:new Uint8Array(c),count:c};for(let u=0;u<c;u++,a+=fg)h.x[u]=r.getUint16(a,!0),h.y[u]=r.getUint16(a+2,!0),h.z[u]=r.getUint16(a+4,!0),h.w[u]=r.getUint16(a+6,!0),h.h[u]=r.getUint16(a+8,!0),h.dir[u]=n[a+10],h.color[u]=n[a+11];return{header:e,owners:o,quads:h}}No();Xt();No();Md();wn();Zl();kr();ic();Kl();Oo();function Dd(i,t,e,n){let s=new Yn(i),r=e.brickCount;s.allocate(r);let o=t==="chunk"?e.cx*s.chunkStuds:0,a=t==="chunk"?e.cy*s.chunkStuds:0;for(let l=0;l<r;l++)s.I[l]=o+n.i[l],s.J[l]=a+n.j[l],s.K[l]=n.k[l],s.type[l]=n.type[l],s.color[l]=n.color[l],s.rotFlags[l]=n.rotFlags[l],s.feature[l]=n.feature[l];return s.finish(),t==="island"&&(s.island={id:e.islandId,cx:e.cx,cy:e.cy,origin:[e.originX,e.originZ],yawDeg:e.yawDeg}),s}function OS(i){for(let t of i.palette.values())if(t.material==="glass")return t;return null}function kS(i){let t=Ql(i,ns),e=Wo(i,t),n=e?e.code:()=>1,r=nc(i,f=>ns(i.palette.get(i.color[f]))==="glass"),o=OS(i),a=new ft,l=new ft,c=(f,d)=>{let p=d==="glass"&&o||i.palette.get(i.color[f]),x=Hl(p),m=d==="glass"||!!(i.rotFlags[f]&li),g=ln(p,i.I[f],i.J[f],i.K[f],m,a).clone(),M=null;return x==="glass"?M=r.get(f)||null:x.startsWith("emissive:")&&(M=l.set(p.srgb).multiplyScalar(.6).clone()),{key:Vl(x),color:g,glow:M,shine:Gl(x)}},h=new Int32Array(i.count);for(let f=0;f<i.count;f++)h[f]=f;let u=ec(i,h,{code:n,codeOf:t,style:c,extra:!0,raw:!0});return{far:Object.fromEntries(u.arrays),triangles:u.triangles,faces:u.faces,culled:u.culled}}async function mg(i,t,e){let n=i==="island"?await rc(t):await Fl(t),s=Dd(e,i,n.header,n.records),r={kind:i,header:n.header,records:n.records,bricks:s.count};if(!s.count)return{...r,far:{},triangles:0,solid:null,bounds:null};let o=kS(s),a=Ui.fromWorld(s,l=>ns(s.palette.get(s.color[l]))==="water");return{...r,...o,solid:a.toJSON(),bounds:s.bounds,groundK:s.groundK}}var Cc=class{constructor(t,{size:e=3,url:n="stream-worker.js"}={}){this.meta=t,this.workers=[],this.jobs=new Map,this.nextId=1,this.rr=0;for(let s=0;s<e;s++){let r;try{r=new Worker(n)}catch{break}r.onmessage=o=>this.done(o.data),r.onerror=o=>{o.preventDefault?.(),this.fail(r,o.message||"worker failed to start")},r.postMessage({meta:t}),this.workers.push(r)}}get threaded(){return this.workers.length>0}fail(t,e){this.workers=this.workers.filter(n=>n!==t),t.terminate();for(let[n,s]of this.jobs)s.worker===t&&(this.jobs.delete(n),this.runLocal(s));console.warn(`stream worker: ${e}; preparing on the main thread`)}done({id:t,result:e,error:n}){let s=this.jobs.get(t);s&&(this.jobs.delete(t),n?s.reject(new Error(n)):s.resolve(e))}runLocal(t){mg(t.kind,t.bytes,this.meta).then(t.resolve,t.reject)}prepare(t,e){return new Promise((n,s)=>{let r={kind:t,bytes:e,resolve:n,reject:s};if(!this.workers.length){this.runLocal(r);return}let o=this.workers[this.rr++%this.workers.length],a=this.nextId++;r.worker=o,this.jobs.set(a,r),o.postMessage({id:a,kind:t,bytes:e},[e.buffer])})}};function gg(i,t,e){let n=i.plateM,s=i.chunkStuds*i.studM;return e==="island"?{min:{x:t.rect[0],y:t.minK*n,z:-t.rect[3]},max:{x:t.rect[2],y:t.maxK*n,z:-t.rect[1]}}:{min:{x:t.cx*s,y:t.minK*n,z:-(t.cy+1)*s},max:{x:(t.cx+1)*s,y:t.maxK*n,z:-t.cy*s}}}function FS(i){let t=i.chunkStuds*i.studM,e=new Map;for(let n of i.islands)for(let s=Math.floor(n.rect[0]/t);s<=Math.floor((n.rect[2]-1e-6)/t);s++)for(let r=Math.floor(n.rect[1]/t);r<=Math.floor((n.rect[3]-1e-6)/t);r++){let o=`${s},${r}`;e.has(o)||e.set(o,[]),e.get(o).push(n.id)}return e}var Ic=class{constructor(t,e){this.index=t,Object.assign(this,{onReady:()=>{},onUnload:()=>{}},e);let n=new Set(t.chunks.map(o=>`${o.cx},${o.cy}`)),s=FS(t);this.query=new na({studM:t.studM,plateM:t.plateM,chunkStuds:t.chunkStuds,chunksX:t.chunksX??64,chunksY:t.chunksY??64,hasChunk:(o,a)=>n.has(`${o},${a}`),islandsOver:(o,a)=>s.get(`${o},${a}`)||[]});let r=[...t.chunks.map(o=>({key:`c${o.cx},${o.cy}`,kind:"chunk",entry:o,box:gg(t,o,"chunk")})),...t.islands.map(o=>({key:`i${o.id}`,kind:"island",entry:o,box:gg(t,o,"island")}))];this.sched=new Xr(r,{loadRadius:e.loadRadius??220,concurrency:e.concurrency??6,maxLoaded:e.maxLoaded??900,load:(o,a)=>this.load(o,a),unload:(o,a)=>this.unload(o,a)}),this.sched.onReady=o=>this.ready(o),this.sched.onError=(o,a)=>{a?.name!=="AbortError"&&console.warn(`stream ${o.entry.file}: ${a.message}`)},this.bytesLoaded=0,this.focusPoint=null}get items(){return this.sched.items}async load(t,e){let n=await this.source.bytes(t.entry.file,e);if(e?.aborted)throw new DOMException("aborted","AbortError");return this.bytesLoaded+=n.byteLength,this.pool.prepare(t.kind,n)}ready(t){let e=t.payload;if(e.solid){let n=Ui.from(e.solid);t.kind==="chunk"?this.query.setChunk(t.entry.cx,t.entry.cy,n):this.query.setIsland({id:t.entry.id,origin:[e.header.originX,e.header.originZ],yawDeg:e.header.yawDeg},n)}else t.kind==="chunk"&&this.query.setChunk(t.entry.cx,t.entry.cy,new Ui(0,0,0,0,0,0));this.onReady(t)}unload(t,e){t.kind==="chunk"?this.query.setChunk(t.entry.cx,t.entry.cy,null):this.query.removeIsland(t.entry.id),this.onUnload(t,e)}isReady(t){return t?.state===2}setRadius(t){this.sched.setRadius(t)}focus(t,e,n=null){this.focusPoint=t===null?null:{x:t,z:e,y:n}}update(t,e){let n=this.focusPoint?[t,{x:this.focusPoint.x,y:this.focusPoint.y??0,z:this.focusPoint.z}]:t;return this.sched.update(n,e)}settled(){return this.sched.settled()}stats(){return{...this.sched.counts(),mib:this.bytesLoaded/1048576}}};Xt();Br();kr();zr();var BS=1.3,Pc=class{constructor({meta:t,index:e,mats:n,loader:s,far:r}){Object.assign(this,{meta:t,index:e,mats:n,loader:s,far:r}),this.group=new Qt,this.group.name="city",this.group.add(r.group),this.views=new Map,this.coverDirty=!0,this.frame=0,this.studsShown=0,this.tier={nearDist:40,maxNear:3,studCap:2e4,nearDetail:"lite",nearTriCap:25e5},this.owned=new Map;for(let o of e.islands){let a=`${o.cx},${o.cy}`;this.owned.has(a)||this.owned.set(a,[]),this.owned.get(a).push(`i${o.id}`)}r.covered=(o,a)=>this.covered(o,a),s.onReady=o=>this.add(o),s.onUnload=(o,a)=>this.remove(o,a)}covered(t,e){let n=this.loader.sched.get(`c${t},${e}`);if(n&&n.state!==2)return!1;for(let s of this.owned.get(`${t},${e}`)||[])if(this.loader.sched.get(s)?.state!==2)return!1;return!0}setTier({nearDist:t=40,maxNear:e=3,studCap:n=2e4,nearDetail:s="lite",nearTriCap:r=1/0}){let o=s!==this.tier.nearDetail;if(this.tier={nearDist:t,maxNear:e,studCap:n,nearDetail:s,nearTriCap:r},o)for(let a of this.views.values())this.freeNear(a)}add(t){let e=t.payload,n=new Qt;n.name=t.key,t.kind==="island"&&Ko(n,[e.header.originX,e.header.originZ],e.header.yawDeg);let s={it:t,parent:n,mid:[],near:null,studMeshes:[],studs:0,used:0,isNear:!1,world:null,triangles:e.triangles||0,box:new ve(new T().copy(t.box.min),new T().copy(t.box.max))};for(let[r,o]of Object.entries(e.far||{})){let a=this.mats.cityFar(r),l=Xo(new pe(tc(yd(o)),a));l.castShadow=!a.transparent,l.receiveShadow=!0,l.name=`mid|${r}`,n.add(l),s.mid.push(l)}delete e.far,n.updateMatrixWorld(!0),this.group.add(n),this.views.set(t.key,s),this.coverDirty=!0}remove(t){let e=this.views.get(t.key);if(e){this.freeNear(e);for(let n of e.mid)n.geometry.dispose();this.group.remove(e.parent),this.views.delete(t.key),this.coverDirty=!0}}worldOf(t){if(!t.world){let e=t.it.payload;t.world=Dd(this.meta,t.it.kind,e.header,e.records)}return t.world}buildNear(t){let e=this.worldOf(t);t.ctx||=Fr(e,this.mats);let n=sc(e,this.mats,{ctx:t.ctx,lite:this.tier.nearDetail==="lite"});t.near=n,t.studMeshes=n.meshes.filter(s=>s.name.startsWith("stud|"));for(let s of t.studMeshes)s.castShadow=!1;t.studs=n.studs,t.nearTris=0;for(let s of n.meshes){let r=s.geometry;t.nearTris+=(r.index?r.index.count:r.attributes.position.count)/3*(s.isInstancedMesh?s.count:1)}t.parent.add(n.group)}freeNear(t){if(t.near){t.parent.remove(t.near.group);for(let e of t.near.meshes)e.dispose(),e.geometry.userData.owned&&e.geometry.dispose();t.near=null,t.studMeshes=[],t.isNear=!1;for(let e of t.mid)e.visible=!0}}update(t,{all:e=!1}={}){this.frame++;let n=t.position,s=[...this.views.values()];for(let m of s)m.dist=Pd(m.box,n);s.sort((m,g)=>m.dist-g.dist);let{nearDist:r,maxNear:o,studCap:a,nearTriCap:l}=this.tier,c=new Set,h=l;for(let m of s){if(c.size>=o)break;if(!(m.dist<(m.isNear?r*BS:r)))continue;let g=m.nearTris??m.triangles*25;g>(c.size?h:l*2)||(h-=g,c.add(m))}let u=0,f=!1;for(let m of s){c.has(m)&&!m.near&&(e||u===0?(this.buildNear(m),u++):f=!0),m.isNear=c.has(m)&&!!m.near,m.near&&(m.near.group.visible=m.isNear,m.isNear&&(m.used=this.frame));for(let g of m.mid)g.visible=!m.isNear}let d=0;for(let m of s){if(!m.isNear)continue;let g=d===0||d+m.studs<=a;for(let M of m.studMeshes)M.visible=g;g&&(d+=m.studs)}this.studsShown=d;let p=s.filter(m=>m.near&&!m.isNear).sort((m,g)=>g.used-m.used);for(let m of p.slice(o+4))this.freeNear(m),m.world=null,m.ctx=null;for(let m of s)!m.near&&m.world&&m.dist>r*3&&(m.world=null,m.ctx=null);t.updateMatrixWorld(),this._pv??=new Ot,this._frustum??=new Ai,this._box??=new ve,this._frustum.setFromProjectionMatrix(this._pv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse));let x=m=>this._frustum.intersectsBox(this._box.set(m.min,m.max));return this.far.update(n,this.coverDirty,x),this.coverDirty=!1,f}settled(){return this.loader.settled()&&this.far.settled()}stats(){let t=0,e=0,n=0,s=0;for(let a of this.views.values())a.isNear?(t++,n+=a.nearTris):(e++,s+=a.triangles);let{triangles:r=0,...o}=this.far.stats();return{near:t,mid:e,studs:this.studsShown,nearTris:n,midTris:s,farTris:r,triangles:n+s+r,...o}}pick(t){let e=[],n=new T;for(let r of this.views.values()){if(!r.it.payload?.records)continue;let o=t.intersectBox(r.box,n);o&&e.push({v:r,d:o.distanceTo(t.origin)})}e.sort((r,o)=>r.d-o.d);let s=null;for(let{v:r,d:o}of e.slice(0,12)){if(s&&o>s.distance)break;let a=this.worldOf(r),l={world:a,parent:r.it.kind==="island"?r.parent:this.group,view:r,toLocal:r.it.kind==="island"?(h,u)=>Os(a.island,h,u):null},c=Ec([l],t.origin,t.direction);c&&(!s||c.distance<s.distance)&&(s=c)}return s}};Xt();var xg=Math.PI/180,yg=25,zS=2600;function Lc(i){return se.clamp(Math.log(i/yg)/Math.log(zS/yg),0,1)}function vg(i){let t=Lc(i);return{maxPolar:se.lerp(87,52,t**1.6)*xg,preferred:se.lerp(80,40,t*t*(3-2*t))*xg}}function HS(i,t,e=50){return i.x=se.clamp(i.x,t.min.x-e,t.max.x+e),i.z=se.clamp(i.z,t.min.z-e,t.max.z+e),i}var Dc=class{constructor(t,e,{box:n,groundAt:s}){Object.assign(this,{camera:t,controls:e,box:n,groundAt:s}),e.zoomToCursor=!0,e.screenSpacePanning=!1,e.minDistance=3,e.maxDistance=Math.max(600,n.getSize(new T).length()*1.3),e.minPolarAngle=0,e.enableDamping=!0,e.dampingFactor=.1,e.zoomSpeed=1.2,this.autoTilt=0,e.domElement.addEventListener("wheel",()=>{this.autoTilt=performance.now()+700},{passive:!0}),this.sph=new Di,this.off=new T}update(){let{camera:t,controls:e}=this,n=e.target;HS(n,this.box);let s=1.7*(1-Lc(t.position.distanceTo(n))),o=(this.groundAt(n.x,n.z,n.y+2)+s-n.y)*.25;Math.abs(o)>.001&&(n.y+=o,t.position.y+=o),this.off.copy(t.position).sub(n),this.sph.setFromVector3(this.off);let a=this.sph.radius,{maxPolar:l,preferred:c}=vg(a);e.maxPolarAngle=l;let h=Math.min(this.sph.phi,l);performance.now()<this.autoTilt&&(h+=(c-h)*.12),h!==this.sph.phi&&(this.sph.phi=h,this.off.setFromSpherical(this.sph),t.position.copy(n).add(this.off));let u=this.groundAt(t.position.x,t.position.z,t.position.y+1);t.position.y<u+1.6&&(t.position.y=u+1.6);let f=se.clamp(a*.004,.15,8),d=Math.max(3e3,a*2.5+2500);return(Math.abs(f-t.near)>t.near*.2||Math.abs(d-t.far)>t.far*.2)&&(t.near=f,t.far=d,t.updateProjectionMatrix()),t.lookAt(n),a}};Ls();var sa={markt:[176430,318007],vrijthof:[176185,317717],brug:[176748,317786],station:[177403,317800],bonnefanten:[177040,317098],bosscherweg:[176197,319239],fort:[176050,316326],enci:[176549,314837]};function _g(i,t,e=32){let n=sa[i.toLowerCase()];return n?[Math.floor((n[0]-t[0])/e),Math.floor((n[1]-t[1])/e)]:null}var Uc={index:"Laying the baseplate\u2026",silhouette:"Raising the skyline\u2026",stream:"Placing bricks around you\u2026",warm:"Starting the buses\u2026"},Ld=8,VS=8e3,GS=.9;function Yr(i){if(!i.index)return{frac:.05,msg:Uc.index,done:!1};if(!i.silhouette)return{frac:.2,msg:Uc.silhouette,done:!1};let t=i.loaded+i.inflight+i.pending,e=i.settled||t===0?1:i.loaded/t,n=i.settled||e>=GS||i.streamMs>=VS,s=Math.min(i.frames,Ld)/Ld;return n?{frac:.85+.15*s,msg:Uc.warm,done:i.frames>=Ld}:{frac:.4+.45*e,msg:Uc.stream,done:!1}}var Ud=class{constructor(t=typeof document<"u"?document.getElementById("loading"):null){this.el=t,this.done=!1,this.frac=0;let e=typeof navigator<"u"&&navigator.webdriver;t&&(e||/[?&]shot=1/.test(location.search))&&this.hide(!0)}update(t,e){!this.el||this.done||(this.frac=Math.max(this.frac,t),this.el.querySelector(".bar i").style.width=`${Math.round(this.frac*100)}%`,e&&(this.el.querySelector(".msg").textContent=e))}hide(t=!1){if(!this.el||this.done)return;this.done=!0;let e=this.el;if(t){e.remove();return}e.classList.add("gone"),setTimeout(()=>e.remove(),800)}error(t){this.el&&(this.done=!0,this.el.querySelector(".msg").textContent=t,this.el.classList.add("failed"))}},WS=null;function ra(){return WS??=new Ud}function XS(i=""){let t=i.toLowerCase();return t?/swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic/.test(t)?"software":/adreno|mali|powervr|apple gpu|apple m\d|xclipse|immortalis/.test(t)?"mobile":/nvidia|geforce|quadro|rtx|radeon rx|radeon pro|radeon\(tm\) rx|arc\(tm\) a\d|intel\(r\) arc/.test(t)?"discrete":/intel|uhd|iris|hd graphics|radeon\(tm\) graphics|radeon graphics|vega \d/.test(t)?"integrated":"unknown":"unknown"}function Mg(i){return{software:"lite",integrated:"low",mobile:"medium",discrete:"medium",unknown:"medium"}[i]||"medium"}function bg(i){try{let t=i.getContext?i.getContext():i,e=t.getExtension("WEBGL_debug_renderer_info"),n=String(t.getParameter(e?e.UNMASKED_RENDERER_WEBGL:t.RENDERER)||"");return{renderer:n,cls:XS(n)}}catch{return{renderer:"",cls:"unknown"}}}var Nc=Math.PI/180;function wg(){let i=new URLSearchParams(location.hash.replace(/^#/,"")),t=i.get("at")?.split(",").map(Number);return{view:i.get("view")||"city",time:i.has("t")?+i.get("t"):16.5,tilt:i.get("tilt")!=="0",ao:i.get("ao")!=="0",anim:i.get("anim")!=="0",quality:lc.includes(i.get("quality"))?i.get("quality"):"auto",zoom:i.has("zoom")?Math.max(.05,+i.get("zoom")||1):1,at:t?.length===2&&t.every(Number.isFinite)?t:null,dist:i.has("dist")?+i.get("dist"):null,worker:i.get("worker")!=="0",stream:i.get("stream")!=="0",farLevel:i.has("farlevel")?+i.get("farlevel"):null,perf:YS(i)}}function YS(i,t=typeof localStorage<"u"?localStorage:null){if(i.has("perf"))return i.get("perf")!=="0";try{return t?.getItem("blox.perf")!=="off"}catch{return!0}}function ds(i,t,e){let n=i*Nc,s=t*Nc;return new T(Math.sin(n)*Math.cos(s),Math.sin(s),-Math.cos(n)*Math.cos(s)).multiplyScalar(e)}function qS(i){let t=i.studM,e=i.plateM,n=i.chunkStuds*t,s=new ve;for(let r of i.chunks)s.expandByPoint(new T(r.cx*n,r.minK*e,-(r.cy+1)*n)),s.expandByPoint(new T((r.cx+1)*n,r.maxK*e,-r.cy*n));for(let r of i.islands)s.expandByPoint(new T(r.rect[0],r.minK*e,-r.rect[3])),s.expandByPoint(new T(r.rect[2],r.maxK*e,-r.rect[1]));return s}function $S(i,t){let e=t.chunkStuds*t.studM,n=t.plateM,s=new Map((i.ground||[]).map(([a,l,c])=>[`${a},${l}`,c])),r=[...s.values()].filter(a=>a!==null).sort((a,l)=>a-l),o=r.length?r[r.length>>1]:0;return(a,l)=>{let c=Math.floor(a/e),h=Math.floor(-l/e);for(let u=0;u<=2;u++)for(let f=-u;f<=u;f++)for(let d=-u;d<=u;d++){let p=s.get(`${c+f},${h+d}`);if(p!=null)return p*n}return o*n}}function jS(i,t,e){let n=i.chunkStuds*i.studM,s=t.getCenter(new T),r=t.getSize(new T),o=Math.hypot(r.x,r.z)/2,a=new Set(i.chunks.map(d=>`${d.cx},${d.cy}`)),l=(d,p,x=0)=>new T(d,e(d,p)+x,p),c={},h=i.originRD||[175700,316500];for(let d of Object.keys(sa)){let[p,x]=_g(d,h,n);a.has(`${p},${x}`)&&(c[d]=l(sa[d][0]-h[0],-(sa[d][1]-h[1])))}let u=c.markt||l(s.x,s.z),f={city:(()=>{let d=l(s.x,s.z);return{target:d,cam:d.clone().add(ds(200,42,Math.max(150,o*1.55))),fov:40}})(),map:(()=>{let d=l(s.x,s.z);return{target:d,cam:d.clone().add(ds(180,89,Math.max(150,o*2.3))),fov:40}})(),hero:{target:u,cam:u.clone().add(ds(206,17,Math.min(320,Math.max(90,o*.6)))),fov:40},street:{target:u.clone().setY(u.y+2),cam:u.clone().setY(u.y+2).add(ds(200,8,26)),fov:50}};for(let[d,p]of Object.entries(c))f[d]={target:p,cam:p.clone().add(ds(206,30,160)),fov:40};return f}function KS(i,t,e,{search:n=40,step:s=2,eye:r=1.7,dist:o=24}={}){let a=(p,x)=>{let m=i.groundHeight(p,x);return typeof m=="number"?m:null},l=1/0;for(let p=-n;p<=n;p+=s*4)for(let x=-n;x<=n;x+=s*4){let m=a(t+p,e+x);m!==null&&(l=Math.min(l,m))}if(l===1/0)return null;let c=null;for(let p=0;p<=n&&!c;p+=s)for(let x=0;x<360&&!c;x+=p?Math.max(5,s/p*57):360){let m=t+p*Math.cos(x*Nc),g=e+p*Math.sin(x*Nc),M=a(m,g);M!==null&&M-l<.5&&(c={x:m,z:g,y:M})}if(!c)return null;let h=new T(c.x,c.y+r,c.z),u=200,f=-1;for(let p=0;p<360;p+=15){let x=0;for(let m=1;m<=o;m+=1){let g=ds(p,0,m);if(i.isSolid(h.x+g.x,h.y,h.z+g.z)!==!1)break;x=m}x>f&&(f=x,u=p)}let d=Math.max(6,Math.min(o,f-1));return{target:h,cam:h.clone().add(ds(u,6,d))}}function ZS(i){if(!i)return"<b>No feature</b>";let t=i.name||(i.address?`${i.kind} at ${i.address}`:`${i.kind} ${i.bagId||"#"+i.id}`),e=[i.kind,i.address,i.year].filter(n=>n).map(qn).join(" \xB7 ");return`<b>${qn(t)}</b><span>${e}</span>`}async function Eg(i,{initHooks:t=async()=>[]}={}){let e=performance.now(),n=wg(),s=i.source,r=/[?&]shot=1/.test(location.search),o=/[?&]film=1/.test(location.search),a=ra(),l={index:!1,silhouette:!1,frames:0,since:0};a.update(Yr(l).frac,Yr(l).msg);let[c,h,u,f,d]=await Promise.all([s.json("index.json"),s.json("far/index.json"),s.json("palette.json"),s.json("brick_catalogue.json"),s.json("models.json").catch(()=>({models:{}}))]);l.index=!0,a.update(Yr(l).frac,Yr(l).msg);let p={manifest:{chunkStuds:c.chunkStuds,studM:c.studM,plateM:c.plateM},palette:u,catalogue:f},x=new Map;s.json("features.json").then(J=>{for(let At of J.features||[])x.set(At.id,At)}).catch(()=>{});let m=document.getElementById("view"),g=()=>window.innerWidth,M=()=>window.innerHeight,v=new Wr(m,g(),M()),y=new ci,R=qS(c),w=$S(h,c),S=R.getCenter(new T),I=Math.hypot(R.max.x-R.min.x,R.max.z-R.min.z)/2;v.setBounds(R,c.studM,{groundSize:4e4,groundY:R.min.y-.3}),v.initPost();let b=n.quality,_={chunks:c.chunks.length,bricks:1/0},C=bg(v.renderer),L=Mg(C.cls),U=C.cls==="software"?"lite":"low",O=hs(b,_,L),$=new ls(O,{floor:U});C.cls==="software"&&!r&&!o&&rg('Your browser is drawing without the graphics card (hardware acceleration is off), so the city will be slow. Turn on "Use graphics acceleration when available" in the browser settings and restart it.');let H=J=>Uo(J,0,J.byteLength,1),Z=new Ac(h,{palette:new Map(u.entries.map(J=>[J.idx,J])),mats:y,fetchBytes:(J,At)=>s.bytes(J,At),decode:J=>pg(J,H),covered:()=>!1,blockRegions:n.perf?4:0}),V=Math.max(1,Math.min(4,(navigator.hardwareConcurrency||4)-1)),rt=new Cc(p,{size:n.worker&&s.kind==="http"?V:0}),dt=new Ic(c,{source:s,pool:rt}),gt=new Pc({meta:p,index:c,mats:y,loader:dt,far:Z});v.scene.add(gt.group);let et=dt.query;et.approxGround=w,et.box=R,et.focus=(J,At)=>dt.focus(J,At,J===null?null:w(J,At)+2);let Et=null,X=-1;function at(J){let At=Math.round(se.clamp((J+40)/140,.6,1)*20)/20;if(At===X)return;X=At;let N=cs[O];dt.setRadius(n.stream?N.streamRadius*At:0),Z.setShowDist(n.farLevel?[[0,0],[1/0,0],[1/0,1/0]][n.farLevel-1]:N.farDist.map(ct=>ct*At))}function St(J){O=J;let At=cs[J];v.setQuality(At),gt.setTier(At),X=-1,Et?.tier(b,J)}function ht(J){b=J,$=new ls(hs(J,_,L),{floor:U}),St(hs(J,_,L))}St(O);let ut=new Pr(v.camera,m),K=new Dc(v.camera,ut,{box:R,groundAt:(J,At,N)=>{let ct=et.groundHeight(J,At,N);return typeof ct=="number"?ct:w(J,At)}}),F=jS(c,R,w),ot=null;function k(J){let At=F[J.view]||F.city;if(ot=J.view==="street"?{target:At.target.clone(),zoom:J.zoom}:null,J.at){let N=new T(J.at[0],0,-J.at[1]);N.y=w(N.x,N.z),At={target:N,cam:N.clone().add(ds(206,30,J.dist||120)),fov:40}}v.camera.fov=At.fov,v.camera.position.copy(At.cam).sub(At.target).multiplyScalar(J.zoom).add(At.target),ut.target.copy(At.target),v.camera.lookAt(At.target),v.camera.updateProjectionMatrix(),ut.update(),K.update()}function Q(J){let At=v.setTime(J);y.setNight(At)}Et=Sc({time:n.time,tilt:n.tilt,ao:n.ao,anim:n.anim,quality:b,onTime:Q,onTilt:J=>v.post.setTiltShift(J),onAO:J=>v.post.setAO(J),onAnim:()=>{},onQuality:ht}),Et.tier(b,O),Et.views(["city","hero","street","map",...Object.keys(F).filter(J=>!["city","hero","street","map"].includes(J)),"gallery"]),k(n),Q(n.time),v.post.setTiltShift(n.tilt),v.post.setAO(n.ao),window.addEventListener("hashchange",()=>{let J=wg();if(J.view==="gallery"){location.reload();return}k(J),Q(J.time),Et.set(J),v.post.setTiltShift(J.tilt),v.post.setAO(J.ao),J.quality!==b&&ht(J.quality)}),window.addEventListener("resize",()=>v.resize(g(),M()));let D=new es,yt=new Ar(new ve,16769126);yt.visible=!1;let tt=null;m.addEventListener("pointerdown",J=>{tt=[J.clientX,J.clientY]}),m.addEventListener("pointerup",J=>{if(!tt||Math.hypot(J.clientX-tt[0],J.clientY-tt[1])>4)return;let At=m.getBoundingClientRect();D.setFromCamera(new j((J.clientX-At.left)/At.width*2-1,-((J.clientY-At.top)/At.height)*2+1),v.camera);let N=gt.pick(D.ray);if(!N){Et.info(""),yt.visible=!1;return}let ct=N.target.world,W=N.n,lt=ct.typeOf(W),wt=ct.rot(W),[Rt,Yt]=ct.extentOf(W),ce=ct.studM,te=ct.plateM;yt.box.min.set(ct.I[W]*ce,ct.K[W]*te,-(ct.J[W]+Yt)*ce),yt.box.max.set((ct.I[W]+Rt)*ce,(ct.K[W]+lt.h)*te,-ct.J[W]*ce),yt.parent&&yt.parent.remove(yt),N.target.parent.add(yt),yt.visible=!0;let ee=ct.palette.get(ct.color[W]),yn=x.get(ct.feature[W]),Nn=ct.island?`island ${ct.island.id} (${ct.island.yawDeg.toFixed(1)}\xB0) \xB7 i${ct.I[W]} j${ct.J[W]} K${ct.K[W]}`:`I${ct.I[W]} J${ct.J[W]} K${ct.K[W]}`;Et.info(`${ZS(yn)}<small>${qn(lt.name)} \xB7 ${qn(ee?.name??"?")} \xB7 ${Nn} \xB7 faces ${Dr[wt]} (rot ${wt})</small>`)});let Mt=v.renderer;Mt.info.autoReset=!1;let vt=new ts,zt=new Hr(1e3),It=new Ai,P=new Ot,E=new ve,G=J=>It.intersectsBox(E.set(J.min,J.max)),nt=new ve,pt=0,it=0,Lt=null,bt=null,Tt=0,$t=[];document.addEventListener("visibilitychange",()=>{zt.last=null,$.reset()});let mt={start:e};window.__bloxTimes=mt;function Pt(J,At){let N=At??Math.min(vt.getDelta(),.1),ct=zt.tick(J);ut.update();let W=K.update();for(let te of $t)te.update?.(N,J);if(v.camera.updateMatrixWorld(),P.multiplyMatrices(v.camera.projectionMatrix,v.camera.matrixWorldInverse),It.setFromProjectionMatrix(P),at(v.camera.position.y-w(v.camera.position.x,v.camera.position.z)),Z.silhouetteReady()&&dt.update(v.camera.position,G),mt.silhouette===void 0&&Z.silhouetteReady()&&(mt.silhouette=performance.now()-e),ot&&dt.settled()){let te=KS(et,ot.target.x,ot.target.z);return te&&(ut.target.copy(te.target),v.camera.position.copy(te.cam).sub(te.target).multiplyScalar(ot.zoom).add(te.target),ut.update(),K.update()),ot=null,o?void 0:requestAnimationFrame(Pt)}let lt=r&&!ot&&Z.silhouetteReady()&&dt.settled()&&Z.settled();gt.update(v.camera,{all:lt});let wt=ut.target,Rt=se.clamp(W,10,4e3);v.scene.fog.near=Rt+200,v.scene.fog.far=v.scene.fog.near+900+I*2.4*Lc(Rt);let Yt=se.clamp(W*1.1,45,Math.max(45,cs[O].shadowRange??1600));nt.min.set(wt.x-Yt,wt.y-10,wt.z-Yt),nt.max.set(wt.x+Yt,wt.y+Math.min(140,Yt),wt.z+Yt),v.setShadowFocus(nt),v.post.setAOInRange(W<cs[O].aoDist),y.waterUniforms&&y.update(J/1e3);let ce=Z.silhouetteReady()&&(!r||lt);if(ce&&(Mt.info.reset(),v.render(ut.target),Lt===null&&(Lt=performance.now(),mt.firstFrame=Lt-e),b==="auto"&&!r&&ct>0)){let te=$.sample(ct);te&&St(te)}if(J-it>250||r){it=J;let te=gt.stats(),ee=dt.stats();Et.stats({text:`${ee.loaded}/${ee.items} streamed (${ee.inflight} loading, ${ee.mib.toFixed(1)} MiB) \xB7 ${te.near} near \xB7 ${te.studs.toLocaleString()} studs \xB7 far l1/l2/l3 ${te.l1??0}/${te.l2??0}/${te.l3??0} \xB7 ${Mt.info.render.calls} draws \xB7 ${(Mt.info.render.triangles/1e6).toFixed(2)} M tris \xB7 ${zt.label()}`})}if(!a.done){!l.silhouette&&Z.silhouetteReady()&&(l.silhouette=!0,l.since=J),ce&&l.frames++;let te=dt.stats(),ee=Yr({...l,loaded:te.loaded,inflight:te.inflight,pending:te.pending,settled:dt.settled(),frames:l.frames,streamMs:l.silhouette?J-l.since:0});a.update(ee.frac,ee.msg),ee.done&&(a.hide(),mt.cover=performance.now()-e)}ce&&(!r||lt)&&Tt++,Tt===4&&(window.__bloxReady=!0,bt=performance.now(),mt.ready=bt-e),!(r&&Tt>=4)&&(o||requestAnimationFrame(Pt))}let Vt={bricks:0,get studs(){return gt.studsShown}};window.__blox={stage:v,controls:ut,presets:F,built:Vt,city:et,loader:dt,view:gt,far:Z,pool:rt,cam:K,lod:{stats:()=>({...gt.stats(),stream:dt.stats(),threaded:rt.threaded})},quality:{describe:()=>`${b}:${O}`}},window.__bloxCapture=()=>{let J=performance.now();return v.render(ut.target),{url:m.toDataURL("image/png"),ms:performance.now()-J}};let Wt=new Yn({...p,features:{features:[]}});Wt.features=x,Wt.finish(),og(n.perf);let Ut={stage:v,camera:v.camera,controls:ut,city:et,models:d.models||{},ui:Et,world:Wt,islands:[],perf:n.perf,lod:null,box:R,demo:null,quality:()=>O,still:r,features:x};if($t.push(...(await t(Ut)).filter(Boolean)),!o){requestAnimationFrame(Pt);return}ut.enableDamping=!1;let ie=performance.now();window.__bloxFilm={step(J){ie+=J*1e3,Pt(ie,J)},pose(J,At,N){v.camera.position.set(...J),ut.target.set(...At),N&&(v.camera.fov=N,v.camera.updateProjectionMatrix()),v.camera.lookAt(ut.target)},time(J){Q(J)},settled:()=>Z.silhouetteReady()&&dt.settled()&&Z.settled(),presets:()=>Object.fromEntries(Object.entries(F).map(([J,At])=>[J,{cam:At.cam.toArray(),target:At.target.toArray(),fov:At.fov}]))},window.__bloxReady=!0}wn();function Nd(i){let t=e=>new URL(e,new URL(i,location.href)).href;return{kind:"http",async bytes(e,n){let s=await fetch(t(e),{signal:n});if(!s.ok)throw new Error(`${e}: HTTP ${s.status}`);return new Uint8Array(await s.arrayBuffer())},async json(e){let n=await fetch(t(e));if(!n.ok)throw new Error(`${e}: HTTP ${n.status}`);return n.json()}}}function ry(){let i=new URLSearchParams(location.hash.replace(/^#/,""));return{view:i.get("view")||"hero",time:i.has("t")?+i.get("t"):16.5,tilt:i.has("tilt")?i.get("tilt")!=="0":i.get("view")!=="gallery",ao:i.get("ao")!=="0",anim:i.get("anim")!=="0",ids:i.get("ids"),quality:lc.includes(i.get("quality"))?i.get("quality"):"auto",zoom:i.has("zoom")?Math.max(.05,+i.get("zoom")||1):1}}function H2(i){let{I0:t,J0:e,K0:n,I1:s,J1:r,K1:o}=i.bounds,a=i.studM,l=i.plateM;return new ve(new T(t*a,n*l,-r*a),new T(s*a,o*l,-e*a))}function V2(i){if(!i)return"<b>No feature</b>";let t=i.name||(i.address?`${i.kind} at ${i.address}`:`${i.kind} ${i.bagId||"#"+i.id}`),e=[i.kind,i.address,i.year].filter(n=>n).map(qn).join(" \xB7 ");return`<b>${qn(t)}</b><span>${e}</span>`}function G2(i,t,e,n,s,r){let o=new es,a=new Ar(new ve,16769126);a.visible=!1,t.scene.add(a);let l=[{world:e,parent:t.scene},...n.map((h,u)=>({world:h,parent:s.sources[u+1].parent,toLocal:(f,d)=>Os(h.island,f,d)}))],c=null;i.addEventListener("pointerdown",h=>{c=[h.clientX,h.clientY]}),i.addEventListener("pointerup",h=>{if(!c||Math.hypot(h.clientX-c[0],h.clientY-c[1])>4)return;let u=i.getBoundingClientRect();o.setFromCamera(new j((h.clientX-u.left)/u.width*2-1,-((h.clientY-u.top)/u.height)*2+1),t.camera);let f=Ec(l,o.ray.origin,o.ray.direction);if(!f){r.info(""),a.visible=!1;return}let d=f.target.world,p=f.n,x=d.typeOf(p),m=d.rot(p),[g,M]=d.extentOf(p),v=d.palette.get(d.color[p]),y=d.features.get(d.feature[p]),R=d.studM,w=d.plateM;a.box.min.set(d.I[p]*R,d.K[p]*w,-(d.J[p]+M)*R),a.box.max.set((d.I[p]+g)*R,(d.K[p]+x.h)*w,-d.J[p]*R),a.parent!==f.target.parent&&f.target.parent.add(a),a.visible=!0;let S=d.island?`island ${d.island.id} (${d.island.yawDeg.toFixed(1)}\xB0) \xB7 i${d.I[p]} j${d.J[p]} K${d.K[p]}`:`I${d.I[p]} J${d.J[p]} K${d.K[p]}`;r.info(`${V2(y)}<small>${qn(x.name)} \xB7 ${qn(v?.name??"?")} \xB7 ${S} \xB7 faces ${Dr[m]} (rot ${m})</small>`)})}async function W2(){let i=window.BLOX_WORLD;if(!i)throw new Error("window.BLOX_WORLD missing: build dist/world.js first");let t=ry(),e=t.view==="gallery",n,s=null,r=[];e?{world:n,labels:s}=tg(i.contract||i,Q0(t.ids)):(n=await l0(i),r=await O0(i));let o=document.getElementById("view"),a=()=>window.innerWidth,l=()=>window.innerHeight,c=new Wr(o,a(),l()),h=new ci,u=r.reduce((et,Et)=>et+Et.count,n.count),f=new ac(n,h,Fr(n,h),r.map(et=>({world:et,ctx:Fr(et,h)})));c.scene.add(f.group);let d=e?{chunks:1,bricks:0}:{chunks:f.chunks.length,bricks:u},p=t.quality,x=hs(p,d),m=new ls(x);s&&c.overlay.add(s);let g=H2(n);for(let et of r)g.union(as(et));c.setBounds(g,n.studM),c.initPost();function M(et){x=et;let Et=cs[et];c.setQuality(Et),f.setTier({...Et,lod:H0(et,d)}),y?.tier(p,et)}function v(et){p=et,m=new ls(hs(et,d)),M(hs(et,d))}let y=null;M(x);let R=e?null:sg(n,g,i.models);R&&c.scene.add(R.group);let w=new Pr(c.camera,o);w.enableDamping=!0,w.dampingFactor=.08,w.maxPolarAngle=Math.PI*.49,w.minDistance=2,w.maxDistance=600;let S=K0(n,g,a()/l(),r),I=t.anim;function b(et,Et=1){let X=S[et]||S.hero;c.camera.fov=X.fov,c.camera.position.copy(X.cam).sub(X.target).multiplyScalar(Et).add(X.target),w.target.copy(X.target),c.camera.lookAt(X.target),c.camera.updateProjectionMatrix(),w.update()}function _(et){let Et=c.setTime(et);h.setNight(Et),R?.mats.setNight(Et)}y=Sc({time:t.time,tilt:t.tilt,ao:t.ao,anim:I,quality:p,onTime:_,onTilt:et=>c.post.setTiltShift(et),onAO:et=>c.post.setAO(et),onAnim:et=>{I=et},onQuality:v}),y.tier(p,x),b(t.view,t.zoom),_(t.time),c.post.setTiltShift(t.tilt),c.post.setAO(t.ao),window.addEventListener("hashchange",()=>{let et=ry();if(et.view==="gallery"!==e||et.ids!==t.ids){location.reload();return}b(et.view,et.zoom),_(et.time),y.set(et),c.post.setTiltShift(et.tilt),c.post.setAO(et.ao),I=et.anim,et.quality!==p&&v(et.quality)}),window.addEventListener("resize",()=>c.resize(a(),l())),G2(o,c,n,r,f,y);let C=c.renderer;C.info.autoReset=!1;let L=/[?&]shot=1/.test(location.search),U=new ts,O=new Hr(1e3),$=0,H=0,Z=0,V=[];L?f.settle(c.camera):f.update(c.camera,{all:!0}),document.addEventListener("visibilitychange",()=>{O.last=null,m.reset()});function rt(et){let Et=Math.min(U.getDelta(),.1),X=O.tick(et);w.update();for(let at of V)at.update?.(Et,et);if(f.update(c.camera),I&&!L&&(H+=Et,R?.update(Et),h.update(H)),C.info.reset(),c.render(w.target),p==="auto"&&!L&&X>0){let at=m.sample(X);at&&M(at)}if(et-Z>250||L){Z=et;let at=f.stats();y.stats({bricks:u,studs:at.studs,near:at.near,chunks:at.chunks,calls:C.info.render.calls,triangles:C.info.render.triangles,fps:O.label(),actors:R?.actors.length||0})}++$===4&&(window.__bloxReady=!0,ra().hide()),!(L&&$>=4)&&requestAnimationFrame(rt)}let dt={bricks:u,get studs(){return f.studsShown}};window.__blox={world:n,islands:r,stage:c,controls:w,presets:S,built:dt,demo:R,lod:f,quality:{describe:()=>`${p}:${x}`}},window.__bloxCapture=()=>{let et=performance.now();return c.render(w.target),{url:o.toDataURL("image/png"),ms:performance.now()-et}};let gt=e?null:lg(n,r,(et,Et)=>h.classOf(et.palette.get(et.color[Et]))==="water",Ui);window.__blox.city=gt,e||oy({stage:c,camera:c.camera,controls:w,city:gt,models:i.models,ui:y,world:n,islands:r,lod:f,box:g,demo:R,quality:()=>x,still:L,features:n.features}).then(et=>{V.push(...et)}),requestAnimationFrame(rt)}async function oy(i){let t=[];if(/[#&]hooks=0\b/.test(location.hash))return t;try{t.push(await(await Promise.resolve().then(()=>(ax(),ox))).initPlayer?.(i))}catch(e){console.error("player",e)}try{t.push(await(await Promise.resolve().then(()=>(sy(),iy))).initLife?.(i))}catch(e){console.error("life",e)}return t.filter(e=>e&&typeof e=="object")}async function X2(){let i=window.BLOX_SITE,t=new URLSearchParams(location.hash.replace(/^#/,"")).get("view");return i&&t!=="gallery"?Eg({source:Nd(i.base)},{initHooks:oy}):(i&&!window.BLOX_WORLD&&(window.BLOX_WORLD=await Nd(i.base).json("models.json")),W2())}X2().catch(i=>{console.error(i),ra().error(`Could not load the city: ${i.message}`),document.getElementById("info").hidden=!1,document.getElementById("info").textContent=`Error: ${i.message}`,window.__bloxError=String(i.stack||i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
