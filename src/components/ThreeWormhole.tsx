import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeWormholeProps {
  isWarping: boolean;
  theme?: 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';
}

export default function ThreeWormhole({ isWarping, theme = 'dark' }: ThreeWormholeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const isWarpingRef = useRef(isWarping);
  useEffect(() => { isWarpingRef.current = isWarping; }, [isWarping]);

  const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) || window.innerWidth < 768;
  const quality = isMobile ? 'low' : 'high';
  const particleCount = quality === 'low' ? 400 : 1200;
  const dustCount = quality === 'low' ? 80 : 220;
  const infallCount = quality === 'low' ? 60 : 160;
  const tunnelSegments = quality === 'low' ? 50 : 100;
  const asteroidCount = quality === 'low' ? 8 : 20;
  const fbmOctaves = quality === 'low' ? 3 : 5;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let primaryColor   = 0x6366f1;
    let secondaryColor = 0x06b6d4;

    if (theme === 'cyberpunk')  { primaryColor = 0xff0055; secondaryColor = 0x00ffcc; }
    else if (theme === 'ai')    { primaryColor = 0x8b5cf6; secondaryColor = 0x6366f1; }
    else if (theme === 'terminal') { primaryColor = 0x22c55e; secondaryColor = 0x16a34a; }
    else if (theme === 'light') { primaryColor = 0x4f46e5; secondaryColor = 0x06b6d4; }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020308, 0.012);

    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true, powerPreference: isMobile ? 'low-power' : 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));

    // ── Wormhole Tunnel ──────────────────────────────────────────────────────
    const tunnelLength = 120;
    const tunnelRadius = 8;
    const innerGeom = new THREE.CylinderGeometry(tunnelRadius, tunnelRadius, tunnelLength, 32, tunnelSegments, true);
    innerGeom.rotateX(Math.PI / 2);
    const innerMat = new THREE.MeshBasicMaterial({ color: primaryColor, wireframe: true, transparent: true, opacity: 0.0, side: THREE.DoubleSide });
    const innerTunnel = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerTunnel);

    const warpShaderMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; varying vec3 vPosition;
        void main() { vUv = uv; vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv; varying vec3 vPosition;
        uniform float uTime; uniform float uWarpProgress;
        uniform vec3 uPrimaryColor; uniform vec3 uSecondaryColor;
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
        float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y); }
        void main(){
          float speed=uTime*(1.2+uWarpProgress*10.0);
          float col=vUv.x*70.0+sin(vUv.y*3.1415+uTime*2.0)*(1.0-uWarpProgress);
          float row=vUv.y*3.5-speed;
          float intensity=smoothstep(0.46,0.82,noise(vec2(col,row*0.15)));
          if(uWarpProgress>0.01){ float wn=noise(vec2(vUv.x*140.0,vUv.y*1.5-uTime*(18.0+uWarpProgress*45.0)*0.025));
            intensity+=smoothstep(0.38,0.88,wn)*uWarpProgress*1.8; }
          float df=smoothstep(55.0,-45.0,vPosition.z);
          vec3 col2=mix(uPrimaryColor,uSecondaryColor,sin(vUv.x*6.28318+uTime)*0.5+0.5);
          vec3 fc=col2*(intensity*(1.0+uWarpProgress*3.2));
          if(uWarpProgress>0.15){ float wln=noise(vec2(vUv.x*200.0,vUv.y*0.6-uTime*70.0));
            float wg=smoothstep(0.72,0.97,wln)*(uWarpProgress-0.15)*1.5;
            fc=mix(fc,vec3(1.0),wg*df); intensity+=wg; }
          float fa=intensity*(uWarpProgress*(0.12+uWarpProgress*0.68))*df;
          gl_FragColor=vec4(fc,clamp(fa,0.0,1.0));
        }`,
      uniforms: { uTime:{value:0}, uWarpProgress:{value:0}, uPrimaryColor:{value:new THREE.Color(primaryColor)}, uSecondaryColor:{value:new THREE.Color(secondaryColor)} },
      transparent:true, side:THREE.DoubleSide, blending:THREE.AdditiveBlending, depthWrite:false
    });
    const warpGeom = new THREE.CylinderGeometry(tunnelRadius-0.1, tunnelRadius-0.1, tunnelLength, 48, tunnelSegments, true);
    warpGeom.rotateX(Math.PI / 2);
    const warpTunnel = new THREE.Mesh(warpGeom, warpShaderMat);
    scene.add(warpTunnel);

    const outerGeom = new THREE.CylinderGeometry(tunnelRadius+1.2, tunnelRadius+1.2, tunnelLength, 12, 35, true);
    outerGeom.rotateX(Math.PI / 2);
    const outerMat = new THREE.MeshBasicMaterial({ color: secondaryColor, wireframe: true, transparent: true, opacity: 0.0, side: THREE.DoubleSide });
    const outerTunnel = new THREE.Mesh(outerGeom, outerMat);
    scene.add(outerTunnel);

    // Glowing rings
    const numRings = 15;
    const rings: THREE.Mesh[] = [];
    const ringGeom = new THREE.TorusGeometry(tunnelRadius + 0.3, 0.08, 8, 48);
    for (let i = 0; i < numRings; i++) {
      const ringMat = new THREE.MeshBasicMaterial({ color: i%2===0 ? primaryColor : secondaryColor, transparent: true, opacity: 0.0 });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.z = (i / numRings) * tunnelLength - tunnelLength / 2;
      scene.add(ring); rings.push(ring);
    }

    // ── Nebula background (richer, multi-layer) ──────────────────────────────
    const nebulaMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime; uniform float uWarpProgress;
        uniform vec3 uPrimaryColor; uniform vec3 uSecondaryColor;
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
        float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y); }
        float fbm(vec2 p){ float v=0.0; float a=0.5; mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));
          for(int i=0;i<4;i++){ v+=a*noise(p); p=rot*p*2.0+vec2(100.0); a*=0.5; } return v; }
        void main(){
          vec2 p=vUv*3.5; float t=uTime*0.018;
          float n1=fbm(p+vec2(t*0.4,t*0.2));
          float n2=fbm(p-vec2(t*0.15,-t*0.3)+n1*0.5);
          float n3=fbm(p*1.8+vec2(-t*0.1,t*0.25)+n2*0.3);
          float val=smoothstep(0.15,0.85,n2*0.6+n3*0.4);
          vec3 col1=uPrimaryColor*0.22; vec3 col2=uSecondaryColor*0.4;
          vec3 col3=vec3(0.55,0.1,0.35)*0.18; // deep magenta nebula layer
          vec3 baseColor=mix(mix(col1,col2,val),col3,n3*0.4);
          baseColor+=vec3(0.08,0.04,0.12)*n1*n1;
          float alpha=clamp(val*0.85,0.0,1.0);
          vec3 fc=mix(baseColor,baseColor*1.6+vec3(0.15),uWarpProgress);
          float fa=mix(alpha,alpha*0.45+0.12,uWarpProgress);
          gl_FragColor=vec4(fc,fa);
        }`,
      uniforms: { uTime:{value:0}, uWarpProgress:{value:0}, uPrimaryColor:{value:new THREE.Color(primaryColor)}, uSecondaryColor:{value:new THREE.Color(secondaryColor)} },
      transparent:true, depthWrite:false, blending:THREE.AdditiveBlending
    });
    const nebulaMesh = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), nebulaMat);
    nebulaMesh.position.set(0, 0, -85);
    scene.add(nebulaMesh);

    // ── Star field (particleCount particles, richer color variety) ────────────────────
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors    = new Float32Array(particleCount * 3);
    const starSpeeds: number[] = [], twinkleSpeeds: number[] = [], twinklePhases: number[] = [], baseColors: number[][] = [];

    const createStarTexture = () => {
      const cvs = document.createElement('canvas'); cvs.width = 20; cvs.height = 20;
      const ctx = cvs.getContext('2d');
      if (ctx) {
        const g = ctx.createRadialGradient(10, 10, 0, 10, 10, 10);
        g.addColorStop(0,   'rgba(255,255,255,1)');
        g.addColorStop(0.15,'rgba(255,255,255,0.9)');
        g.addColorStop(0.4, 'rgba(255,255,255,0.3)');
        g.addColorStop(0.7, 'rgba(255,255,255,0.05)');
        g.addColorStop(1,   'rgba(255,255,255,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, 20, 20);
      }
      return new THREE.CanvasTexture(cvs);
    };

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i*3]   = (Math.random() - 0.5) * 100;
      particlePositions[i*3+1] = (Math.random() - 0.5) * 100;
      particlePositions[i*3+2] = Math.random() * 100 - 85;
      starSpeeds.push(Math.random() * 0.08 + 0.02);
      twinkleSpeeds.push(0.8 + Math.random() * 3.0);
      twinklePhases.push(Math.random() * Math.PI * 2);
      let r=1,g=1,b=1;
      const rc = Math.random();
      if      (rc < 0.12) { r=0.72; g=0.82; b=1.0;  } // blue giant
      else if (rc < 0.22) { r=1.0;  g=0.94; b=0.72; } // yellow
      else if (rc < 0.30) { r=1.0;  g=0.72; b=0.55; } // orange star
      else if (rc < 0.36) { r=0.9;  g=0.95; b=1.0;  } // blue-white
      baseColors.push([r,g,b]);
      particleColors[i*3]=r; particleColors[i*3+1]=g; particleColors[i*3+2]=b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color',    new THREE.BufferAttribute(particleColors, 3));
    const pMaterial = new THREE.PointsMaterial({ size:0.4, map:createStarTexture(), transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, vertexColors:true, sizeAttenuation:true });
    const particles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particles);

    // ── Cosmic dust lanes (dustCount fine particles in diagonal bands) ─────────────
    const dustCount = 220;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustVelocities: number[] = [];
    for (let i = 0; i < dustCount; i++) {
      const band = Math.floor(i / 44); // 5 bands
      const bandOffset = (band - 2) * 22;
      dustPositions[i*3]   = bandOffset + (Math.random() - 0.5) * 12;
      dustPositions[i*3+1] = (Math.random() - 0.5) * 80;
      dustPositions[i*3+2] = Math.random() * 90 - 80;
      dustVelocities.push(0.003 + Math.random() * 0.006);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({ size:0.08, color:0x8899cc, transparent:true, opacity:0.22, blending:THREE.AdditiveBlending, depthWrite:false, sizeAttenuation:true });
    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // ── Singularity glow ─────────────────────────────────────────────────────
    const glowGeom = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMat  = new THREE.MeshBasicMaterial({ color:0xffffff, transparent:true, opacity:0.0 });
    const singularityGlow = new THREE.Mesh(glowGeom, glowMat);
    singularityGlow.position.set(0, 0, -45);
    scene.add(singularityGlow);

    // ── Asteroid belt ─────────────────────────────────────────────────────────
    interface AsteroidData { mesh:THREE.Mesh; vx:number; vy:number; vz:number; rx:number; ry:number; rz:number; }
    const asteroids: AsteroidData[] = [];
    const asteroidMats: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < asteroidCount; i++) {
      const geo = new THREE.IcosahedronGeometry(0.22 + Math.random() * 0.32, 0);
      const pos = geo.attributes.position.array as Float32Array;
      for (let vi = 0; vi < pos.length; vi++) pos[vi] += (Math.random()-0.5)*0.14;
      geo.attributes.position.needsUpdate = true; geo.computeVertexNormals();
      const mat = new THREE.MeshBasicMaterial({ color:new THREE.Color().setHSL(0.06+Math.random()*0.08,0.15,0.28+Math.random()*0.18), transparent:true, opacity:0.72 });
      asteroidMats.push(mat);
      const mesh = new THREE.Mesh(geo, mat);
      const angle=Math.random()*Math.PI*2, radius=12+Math.random()*30;
      mesh.position.set(Math.cos(angle)*radius, Math.sin(angle)*radius, Math.random()*80-70);
      mesh.rotation.set(Math.random()*Math.PI*2, Math.random()*Math.PI*2, Math.random()*Math.PI*2);
      scene.add(mesh);
      asteroids.push({ mesh, vx:(Math.random()-0.5)*0.006, vy:(Math.random()-0.5)*0.006, vz:0.012+Math.random()*0.022, rx:(Math.random()-0.5)*0.008, ry:(Math.random()-0.5)*0.012, rz:(Math.random()-0.5)*0.006 });
    }

    // ── Supernova system ──────────────────────────────────────────────────────
    const supernovaCore = new THREE.Mesh(new THREE.SphereGeometry(0.8,32,32),
      new THREE.MeshBasicMaterial({color:0xfff6e0,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false}));
    const supernovaRing = new THREE.Mesh(new THREE.TorusGeometry(2.0,0.18,12,64),
      new THREE.MeshBasicMaterial({color:0xff8c00,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false}));
    const supernovaHalo = new THREE.Mesh(new THREE.SphereGeometry(3.5,32,32),
      new THREE.MeshBasicMaterial({color:0xff4500,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.BackSide}));
    const ejectCount = 240;
    const ejectPositions = new Float32Array(ejectCount*3), ejectColors = new Float32Array(ejectCount*3);
    const ejectVelocities: THREE.Vector3[] = [];
    for (let i=0;i<ejectCount;i++) {
      ejectPositions[i*3]=0; ejectPositions[i*3+1]=0; ejectPositions[i*3+2]=0;
      const theta=Math.random()*Math.PI*2, phi=Math.acos(2*Math.random()-1), sp=0.04+Math.random()*0.14;
      ejectVelocities.push(new THREE.Vector3(Math.sin(phi)*Math.cos(theta)*sp,Math.sin(phi)*Math.sin(theta)*sp,Math.cos(phi)*sp));
      const t=Math.random(); ejectColors[i*3]=1; ejectColors[i*3+1]=0.3+t*0.7; ejectColors[i*3+2]=t*0.3;
    }
    const ejectGeo = new THREE.BufferGeometry();
    ejectGeo.setAttribute('position', new THREE.BufferAttribute(ejectPositions,3));
    ejectGeo.setAttribute('color',    new THREE.BufferAttribute(ejectColors,3));
    const ejectMat = new THREE.PointsMaterial({size:0.22,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,vertexColors:true,sizeAttenuation:true});
    const ejectParticles = new THREE.Points(ejectGeo, ejectMat);
    const supernovaGroup = new THREE.Group();
    supernovaGroup.add(supernovaCore, supernovaRing, supernovaHalo, ejectParticles);
    const supernovaX = (Math.random()-0.5)*40, supernovaY = (Math.random()-0.5)*30;
    supernovaGroup.position.set(supernovaX, supernovaY, -60);
    scene.add(supernovaGroup);
    let supernovaPhase=0, supernovaProgress=0, supernovaRingScale=1.0;

    // ── Shooting stars (pool of 5) ────────────────────────────────────────────
    interface ShootingStarData {
      line: THREE.Line; geo: THREE.BufferGeometry; mat: THREE.LineBasicMaterial;
      active: boolean;
      hx: number; hy: number; hz: number;   // head position
      dx: number; dy: number;                 // direction (normalized)
      length: number;                         // trail length in world units
      speed: number; progress: number; maxProgress: number;
      cooldown: number;
    }
    const shootingStars: ShootingStarData[] = [];
    for (let i = 0; i < 5; i++) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(6); // 2 points × 3 coords
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({ color:0xffffff, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      shootingStars.push({ line, geo, mat, active:false, hx:0,hy:0,hz:0, dx:0,dy:0, length:0, speed:0, progress:0, maxProgress:1, cooldown: 120 + Math.floor(Math.random() * 600) });
    }

    const spawnShootingStar = (ss: ShootingStarData) => {
      // spawn from a random screen edge
      const side = Math.floor(Math.random() * 4);
      const W = 45, H = 30; // scene half-extents
      let sx=0, sy=0;
      if (side === 0) { sx = -W; sy = (Math.random()-0.5)*H*2; }       // left
      else if (side === 1) { sx = W; sy = (Math.random()-0.5)*H*2; }   // right
      else if (side === 2) { sx = (Math.random()-0.5)*W*2; sy = H; }   // top
      else { sx = (Math.random()-0.5)*W*2; sy = -H; }                  // bottom
      // direction — generally diagonal across frame
      const angle = Math.atan2(-sy, -sx) + (Math.random()-0.5) * 1.0;
      ss.hx = sx; ss.hy = sy; ss.hz = -5 - Math.random() * 15;
      ss.dx = Math.cos(angle); ss.dy = Math.sin(angle);
      ss.length = 8 + Math.random() * 14;
      ss.speed  = 0.8 + Math.random() * 1.2;
      ss.progress = 0;
      ss.maxProgress = (Math.sqrt(W*W*4+H*H*4) + ss.length) / ss.speed;
      ss.active = true;
      ss.mat.opacity = 0.9 + Math.random() * 0.1;
      ss.cooldown = 400 + Math.floor(Math.random() * 900);
    };

    // ── BLACK HOLE SYSTEM (enhanced) ──────────────────────────────────────────
    const BLACK_HOLE_TRIGGER_MS = 45_000;
    const bhX = -supernovaX*0.55 + (Math.random()-0.5)*16;
    const bhY = -supernovaY*0.45 + (Math.random()-0.5)*10;
    const bhZ = -48;

    // Event horizon — perfect dark sphere
    const BH_RADIUS = 2.2;
    const eventHorizonGeo = new THREE.SphereGeometry(BH_RADIUS, 56, 56);
    const eventHorizonMat = new THREE.MeshBasicMaterial({ color:0x000000, transparent:true, opacity:0.0 });
    const eventHorizon = new THREE.Mesh(eventHorizonGeo, eventHorizonMat);

    // Photon ring — bright trapped light halo
    const photonRingGeo = new THREE.TorusGeometry(BH_RADIUS*1.08, 0.09, 24, 140);
    const photonRingMat = new THREE.MeshBasicMaterial({ color:0xffe8a0, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
    const photonRing = new THREE.Mesh(photonRingGeo, photonRingMat);
    photonRing.rotation.x = Math.PI * 0.18;

    // Gravitational lensing shadow ring
    const lensingRingGeo = new THREE.TorusGeometry(BH_RADIUS*1.02, 0.028, 16, 140);
    const lensingRingMat = new THREE.MeshBasicMaterial({ color:0xffffff, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
    const lensingRing = new THREE.Mesh(lensingRingGeo, lensingRingMat);

    // Second inner photon arc (Einstein ring effect)
    const einsteinRingGeo = new THREE.TorusGeometry(BH_RADIUS*0.96, 0.015, 12, 120);
    const einsteinRingMat = new THREE.MeshBasicMaterial({ color:0xaaccff, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
    const einsteinRing = new THREE.Mesh(einsteinRingGeo, einsteinRingMat);
    einsteinRing.rotation.x = -Math.PI * 0.22;

    // Accretion disk — full GLSL shader
    const DISK_SIZE = 15.0;
    const DISK_HALF = DISK_SIZE / 2;
    const innerUV = BH_RADIUS / DISK_HALF; // maps world radius to UV space
    const accretionDiskMat = new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime; uniform float uReveal;
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y); }
        float fbm(vec2 p){ float v=0.0,a=0.5; for(int i=0;i<5;i++){v+=a*noise(p);p*=2.05;a*=0.5;} return v; }
        void main(){
          vec2 d=vUv-0.5; float r=length(d)*2.0; float theta=atan(d.y,d.x);
          float innerR=${innerUV.toFixed(3)}; float outerR=0.98;
          if(r<innerR||r>outerR) discard;
          float diskT=(r-innerR)/(outerR-innerR);

          // Keplerian orbital speed: inner faster
          float orbitSpd=0.5-diskT*0.32;
          float swirl=theta+uTime*orbitSpd;
          vec2 plasmaUv=vec2(swirl/6.28318+0.5, diskT);
          float plasma=fbm(plasmaUv*vec2(10.0,4.0)+vec2(uTime*0.07,0.0));
          float plasma2=fbm(plasmaUv*vec2(22.0,7.0)-vec2(uTime*0.04,0.0));

          // Relativistic Doppler: approaching side 3× brighter
          float rawDoppler=cos(theta-uTime*0.1);
          float doppler=pow(max(0.0,rawDoppler*0.5+0.5),2.2)*1.8+0.35;

          // Temperature: white-hot inner → deep orange/red outer
          vec3 innerHot  =vec3(1.00,0.96,0.78);
          vec3 midOrange =vec3(1.00,0.50,0.07);
          vec3 outerDark =vec3(0.60,0.07,0.03);
          vec3 diskColor = diskT<0.35
            ? mix(innerHot, midOrange, diskT/0.35)
            : mix(midOrange, outerDark, (diskT-0.35)/0.65);

          // Bright plasma filaments
          float filament =smoothstep(0.54,0.86,plasma)*2.2;
          float filament2=smoothstep(0.62,0.90,plasma2)*1.3;
          vec3 filamentColor=mix(innerHot*2.4, vec3(1.0,0.8,0.4), diskT);
          diskColor=mix(diskColor, filamentColor, (filament+filament2*0.5)*(1.0-diskT*0.6));

          // Brightness with Doppler
          float brightness=doppler*(0.65+filament*0.5+filament2*0.25);

          // Edge fades
          float edgeFade=smoothstep(0.0,0.10,diskT)*smoothstep(1.0,0.82,diskT);

          float alpha=brightness*edgeFade*uReveal*1.05;
          gl_FragColor=vec4(diskColor*brightness, clamp(alpha,0.0,1.0));
        }`,
      uniforms: { uTime:{value:0.0}, uReveal:{value:0.0} },
      transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide
    });
    const accretionDiskGeo = new THREE.PlaneGeometry(DISK_SIZE, DISK_SIZE, 1, 1);
    const accretionDisk    = new THREE.Mesh(accretionDiskGeo, accretionDiskMat);
    accretionDisk.rotation.x = Math.PI * 0.20;

    // Outer diffuse corona
    const bhHaloGeo = new THREE.SphereGeometry(5.5, 32, 32);
    const bhHaloMat = new THREE.MeshBasicMaterial({ color:0xff5500, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.BackSide });
    const bhHalo = new THREE.Mesh(bhHaloGeo, bhHaloMat);

    const bhInnerHaloGeo = new THREE.SphereGeometry(2.8, 32, 32);
    const bhInnerHaloMat = new THREE.MeshBasicMaterial({ color:0xffaa33, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.BackSide });
    const bhInnerHalo = new THREE.Mesh(bhInnerHaloGeo, bhInnerHaloMat);

    // ── Relativistic jets (perpendicular to disk plane) ───────────────────────
    // Top jet: blue-shifted (approaching), Bottom jet: red-shifted (receding)
    const jetTopGeo = new THREE.CylinderGeometry(0.03, 0.6, 10, 16, 1, true);
    const jetTopMat = new THREE.MeshBasicMaterial({ color:0x88ccff, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide });
    const jetTop = new THREE.Mesh(jetTopGeo, jetTopMat);
    jetTop.position.y = 5.2;

    const jetBottomGeo = new THREE.CylinderGeometry(0.6, 0.03, 10, 16, 1, true);
    const jetBottomMat = new THREE.MeshBasicMaterial({ color:0xff6633, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide });
    const jetBottom = new THREE.Mesh(jetBottomGeo, jetBottomMat);
    jetBottom.position.y = -5.2;

    // Jet glow spheres at base
    const jetTopGlowGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const jetTopGlowMat = new THREE.MeshBasicMaterial({ color:0xaaddff, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
    const jetTopGlow = new THREE.Mesh(jetTopGlowGeo, jetTopGlowMat);
    jetTopGlow.position.y = 0.8;

    const jetBotGlowGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const jetBotGlowMat = new THREE.MeshBasicMaterial({ color:0xff7733, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
    const jetBotGlow = new THREE.Mesh(jetBotGlowGeo, jetBotGlowMat);
    jetBotGlow.position.y = -0.8;

    // ── Infall particles (spiral into horizon) ────────────────────────────────
    const infallPositions = new Float32Array(infallCount * 3);
    const infallColors    = new Float32Array(infallCount * 3);
    const infallAngles: number[] = [], infallRadii: number[] = [], infallSpeeds: number[] = [], infallDrifts: number[] = [];
    for (let i = 0; i < infallCount; i++) {
      const angle = Math.random()*Math.PI*2, radius = BH_RADIUS*1.6+Math.random()*7.5;
      infallAngles.push(angle); infallRadii.push(radius);
      infallSpeeds.push(0.005+Math.random()*0.018);
      infallDrifts.push(0.0008+Math.random()*0.0022);
      infallPositions[i*3]  =Math.cos(angle)*radius;
      infallPositions[i*3+1]=Math.sin(angle)*radius*0.19;
      infallPositions[i*3+2]=(Math.random()-0.5)*0.5;
      const t=Math.random();
      infallColors[i*3]=1; infallColors[i*3+1]=0.42+t*0.58; infallColors[i*3+2]=t*0.15;
    }
    const infallGeo = new THREE.BufferGeometry();
    infallGeo.setAttribute('position', new THREE.BufferAttribute(infallPositions,3));
    infallGeo.setAttribute('color',    new THREE.BufferAttribute(infallColors,3));
    const infallMat = new THREE.PointsMaterial({ size:0.15, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false, vertexColors:true, sizeAttenuation:true });
    const infallParticles = new THREE.Points(infallGeo, infallMat);

    // ── Gravitational wave rings (periodic in eternal phase) ──────────────────
    interface GravWaveRing { mesh:THREE.Mesh; mat:THREE.MeshBasicMaterial; active:boolean; scale:number; opacity:number; cooldown:number; }
    const gravWaveRings: GravWaveRing[] = [];
    const gravWaveBaseGeo = new THREE.TorusGeometry(1.0, 0.018, 8, 80);
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshBasicMaterial({ color:0xaabbff, transparent:true, opacity:0.0, blending:THREE.AdditiveBlending, depthWrite:false });
      const mesh = new THREE.Mesh(gravWaveBaseGeo, mat);
      mesh.rotation.x = Math.PI * 0.20; // aligned with disk
      gravWaveRings.push({ mesh, mat, active:false, scale:1.0, opacity:0, cooldown: i * 180 });
    }

    // ── Assemble Black Hole group ─────────────────────────────────────────────
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.add(accretionDisk, eventHorizon, photonRing, lensingRing, einsteinRing,
      bhHalo, bhInnerHalo, jetTop, jetBottom, jetTopGlow, jetBotGlow, infallParticles);
    gravWaveRings.forEach(gw => blackHoleGroup.add(gw.mesh));
    blackHoleGroup.position.set(bhX, bhY, bhZ);
    scene.add(blackHoleGroup);

    // BH state machine: 0=dormant | 1=forming | 2=revealing | 3=eternal
    let bhPhase=0, bhProgress=0.0, bhReveal=0.0;
    const sessionStart = Date.now();
    const SUPERNOVA_TRIGGER_MS = 30_000;

    // ── Mouse & resize ────────────────────────────────────────────────────────
    let mouseX=0, mouseY=0, targetX=0, targetY=0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth  / 2) / 110;
      mouseY = (e.clientY - window.innerHeight / 2) / 110;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container || !canvas) return;
      const w=container.clientWidth, h=container.clientHeight;
      camera.aspect=w/h; camera.updateProjectionMatrix();
      renderer.setSize(w,h,false);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0 });
    visibilityObserver.observe(container);

    // ── Animation state ───────────────────────────────────────────────────────
    let speed=0.25, rotationSpeed=0.0015, warpProgressVal=0.0, timeAccumulator=0.0;
    let animationFrameId: number;

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      const warping = isWarpingRef.current;
      timeAccumulator += warping ? 0.024 : 0.012;

      // ── Warp physics ────────────────────────────────────────────────────────
      if (warping) {
        warpProgressVal = Math.min(1.0, warpProgressVal+0.018);
        speed           = Math.min(4.8, speed+0.15);
        rotationSpeed   = Math.min(0.06, rotationSpeed+0.0018);
        camera.fov      = Math.min(136, camera.fov+1.2); camera.updateProjectionMatrix();
        glowMat.opacity = Math.min(1.0, glowMat.opacity+0.045);
        singularityGlow.scale.addScalar(0.4);
      } else {
        warpProgressVal = Math.max(0.0, warpProgressVal-0.03);
        speed           = Math.max(0.25, speed-0.05);
        rotationSpeed   = Math.max(0.0015, rotationSpeed-0.001);
        camera.fov      = Math.max(75, camera.fov-1.5); camera.updateProjectionMatrix();
        glowMat.opacity = Math.max(0.0, glowMat.opacity-0.05);
        if (singularityGlow.scale.x>1.0) singularityGlow.scale.set(1,1,1);
      }
      innerMat.opacity=0.14*warpProgressVal; outerMat.opacity=0.09*warpProgressVal;
      warpShaderMat.uniforms.uWarpProgress.value=warpProgressVal; warpShaderMat.uniforms.uTime.value=timeAccumulator;
      nebulaMat.uniforms.uTime.value=timeAccumulator; nebulaMat.uniforms.uWarpProgress.value=warpProgressVal;
      innerTunnel.rotation.z+=rotationSpeed; outerTunnel.rotation.z-=rotationSpeed*0.7; warpTunnel.rotation.z+=rotationSpeed*0.4;

      rings.forEach((ring, idx) => {
        ring.position.z+=speed;
        if (ring.position.z>15) ring.position.z=-55;
        const sc=1+Math.sin(Date.now()*0.002+idx)*0.03+(warping?0.08:0);
        ring.scale.set(sc,sc,1);
        if (!Array.isArray(ring.material)) (ring.material as THREE.MeshBasicMaterial).opacity=0.65*warpProgressVal;
      });

      // ── Camera: gentle breathing + mouse parallax ────────────────────────────
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      const breatheY = Math.sin(timeAccumulator * 0.18) * 0.28; // slow vertical drift
      camera.position.x = targetX;
      camera.position.y = -targetY + breatheY;
      camera.lookAt(0, 0, -50);

      // ── Star particles + gravitational lensing ───────────────────────────────
      const pPos = particleGeometry.attributes.position.array as Float32Array;
      const pCol = particleGeometry.attributes.color.array  as Float32Array;
      for (let i=0; i<particleCount; i++) {
        const idx=i*3;
        const spd = warping ? starSpeeds[i]*120+speed*12 : starSpeeds[i]+speed*0.08;
        pPos[idx+2]+=spd;
        if (pPos[idx+2]>12) { pPos[idx+2]=-85; pPos[idx]=(Math.random()-0.5)*100; pPos[idx+1]=(Math.random()-0.5)*100; }

        // BH gravitational lensing — stars near the hole bend toward it
        if (bhPhase===3 && !warping) {
          const dx=bhX-pPos[idx], dy=bhY-pPos[idx+1];
          const dist=Math.sqrt(dx*dx+dy*dy);
          if (dist<32 && dist>0.5) { const pull=0.0018/(dist*0.11); pPos[idx]+=dx*pull; pPos[idx+1]+=dy*pull; }
        }

        if (!warping) {
          const x=pPos[idx],y=pPos[idx+1], ang=0.0004*(i%2?1:-1);
          const ca=Math.cos(ang),sa=Math.sin(ang);
          pPos[idx]=x*ca-y*sa; pPos[idx+1]=x*sa+y*ca;
        }
        const base=baseColors[i];
        const br=warping?1.0:0.32+0.68*Math.sin(timeAccumulator*twinkleSpeeds[i]+twinklePhases[i]);
        pCol[idx]=base[0]*br; pCol[idx+1]=base[1]*br; pCol[idx+2]=base[2]*br;
      }
      pMaterial.size = warping ? Math.min(0.6,pMaterial.size+0.015) : Math.max(0.4,pMaterial.size-0.01);
      particleGeometry.attributes.position.needsUpdate=true;
      particleGeometry.attributes.color.needsUpdate=true;

      // ── Cosmic dust drift ────────────────────────────────────────────────────
      const dPos = dustGeo.attributes.position.array as Float32Array;
      for (let i=0;i<dustCount;i++) {
        dPos[i*3+2]+=dustVelocities[i];
        if (dPos[i*3+2]>12) { dPos[i*3+2]=-82; dPos[i*3+1]=(Math.random()-0.5)*80; }
      }
      dustGeo.attributes.position.needsUpdate=true;

      // ── Asteroid animation ──────────────────────────────────────────────────
      const wsm=1+warpProgressVal*14;
      asteroids.forEach((a,ai)=>{
        a.mesh.position.z+=a.vz*wsm; a.mesh.position.x+=a.vx; a.mesh.position.y+=a.vy;
        a.mesh.rotation.x+=a.rx; a.mesh.rotation.y+=a.ry; a.mesh.rotation.z+=a.rz;
        asteroidMats[ai].opacity=0.52+0.22*Math.sin(timeAccumulator*0.8+ai*1.3);
        if (warping) { a.mesh.position.x+=a.vx*4; a.mesh.position.y+=a.vy*4; }
        if (a.mesh.position.z>14) {
          const ang=Math.random()*Math.PI*2, rad=12+Math.random()*30;
          a.mesh.position.set(Math.cos(ang)*rad,Math.sin(ang)*rad,-75);
        }
      });

      // ── Shooting stars ──────────────────────────────────────────────────────
      shootingStars.forEach(ss => {
        if (!ss.active) {
          ss.cooldown--;
          if (ss.cooldown <= 0) spawnShootingStar(ss);
          return;
        }
        ss.progress += ss.speed;
        const t = ss.progress / ss.maxProgress; // 0→1

        // Head position
        const hx = ss.hx + ss.dx * ss.progress;
        const hy = ss.hy + ss.dy * ss.progress;

        // Tail lags behind by ss.length
        const tailProgress = Math.max(0, ss.progress - ss.length);
        const tx = ss.hx + ss.dx * tailProgress;
        const ty = ss.hy + ss.dy * tailProgress;

        // Update line geometry
        const pos = ss.geo.attributes.position.array as Float32Array;
        pos[0]=tx; pos[1]=ty; pos[2]=ss.hz;  // tail
        pos[3]=hx; pos[4]=hy; pos[5]=ss.hz;  // head
        ss.geo.attributes.position.needsUpdate=true;

        // Fade in/out: bright middle, fade at ends
        const fadeIn  = Math.min(1, t * 6);
        const fadeOut = Math.max(0, 1 - Math.max(0,(t-0.7)/0.3));
        ss.mat.opacity = fadeIn * fadeOut * 0.95;

        if (ss.progress >= ss.maxProgress) {
          ss.active=false;
          ss.mat.opacity=0;
          ss.cooldown = 500 + Math.floor(Math.random() * 800);
        }
      });

      // ── Supernova state machine ─────────────────────────────────────────────
      const elapsed = Date.now() - sessionStart;
      if (!isMobile) {
        if (supernovaPhase===0 && elapsed>=SUPERNOVA_TRIGGER_MS) { supernovaPhase=1; supernovaProgress=0; }
        if (supernovaPhase===1) {
          supernovaProgress+=0.007; const p=Math.min(supernovaProgress,1); const e=p*p*(3-2*p);
          (supernovaCore.material as THREE.MeshBasicMaterial).opacity=e*0.95;
          (supernovaHalo.material as THREE.MeshBasicMaterial).opacity=e*0.35;
          (supernovaRing.material as THREE.MeshBasicMaterial).opacity=e*0.8;
          ejectMat.opacity=e*0.75;
          supernovaRingScale=1+e*4.5; supernovaRing.scale.set(supernovaRingScale,supernovaRingScale,1);
          supernovaHalo.scale.setScalar(1+e*1.8); supernovaCore.scale.setScalar(1+e*2.2);
          const ep=ejectGeo.attributes.position.array as Float32Array;
          for (let i=0;i<ejectCount;i++){ep[i*3]=ejectVelocities[i].x*e*80;ep[i*3+1]=ejectVelocities[i].y*e*80;ep[i*3+2]=ejectVelocities[i].z*e*80;}
          ejectGeo.attributes.position.needsUpdate=true;
          if (supernovaProgress>=1){supernovaPhase=2;supernovaProgress=0;}
        }
        if (supernovaPhase===2) {
          supernovaProgress+=0.011; supernovaRingScale+=0.06;
          supernovaRing.scale.set(supernovaRingScale,supernovaRingScale,1);
          (supernovaCore.material as THREE.MeshBasicMaterial).opacity=0.88+0.12*Math.sin(timeAccumulator*8);
          if (supernovaProgress>=1){supernovaPhase=3;supernovaProgress=0;}
        }
        if (supernovaPhase===3) {
          supernovaProgress+=0.004; const p=Math.min(supernovaProgress,1); const fade=1-p*p;
          (supernovaCore.material as THREE.MeshBasicMaterial).opacity=fade*0.95;
          (supernovaHalo.material as THREE.MeshBasicMaterial).opacity=fade*0.35;
          (supernovaRing.material as THREE.MeshBasicMaterial).opacity=fade*0.55;
          ejectMat.opacity=fade*0.6; supernovaRingScale+=0.035;
          supernovaRing.scale.set(supernovaRingScale,supernovaRingScale,1);
          if (supernovaProgress>=1) supernovaPhase=4;
        }
        if (supernovaPhase>=1&&supernovaPhase<=3) supernovaGroup.rotation.z+=0.003;
      }

      // ── BLACK HOLE state machine ─────────────────────────────────────────────
      if (bhPhase===0 && elapsed>=BLACK_HOLE_TRIGGER_MS) { bhPhase=1; bhProgress=0; }

      if (bhPhase===1) {
        // FORMING: event horizon materialises out of nothing
        bhProgress+=0.0035;
        const p=Math.min(bhProgress,1), e=p*p*(3-2*p);

        eventHorizonMat.opacity = e * 0.99;
        lensingRingMat.opacity  = e * 0.65;
        photonRingMat.opacity   = e * 0.50;
        einsteinRingMat.opacity = e * 0.28;
        bhHaloMat.opacity       = e * 0.08;
        bhInnerHaloMat.opacity  = e * 0.12;

        const hs = 0.05 + e * 0.95;
        eventHorizon.scale.setScalar(hs);
        lensingRing.scale.setScalar(hs);
        photonRing.scale.setScalar(hs);
        einsteinRing.scale.setScalar(hs);

        if (bhProgress>=1){bhPhase=2;bhProgress=0;}
      }

      if (bhPhase===2) {
        // REVEALING: accretion disk + jets spin up
        bhProgress+=0.0025;
        const p=Math.min(bhProgress,1), e=p*p*(3-2*p);

        bhReveal = e;
        accretionDiskMat.uniforms.uReveal.value = bhReveal;
        accretionDisk.scale.setScalar(0.2 + e * 0.8);

        bhHaloMat.opacity       = 0.08 + e * 0.13;
        bhInnerHaloMat.opacity  = 0.12 + e * 0.18;
        photonRingMat.opacity   = 0.50 + e * 0.45;
        lensingRingMat.opacity  = 0.65 + e * 0.30;
        einsteinRingMat.opacity = 0.28 + e * 0.32;
        infallMat.opacity       = e * 0.90;

        // Jets spin up
        jetTopMat.opacity    = e * 0.55;
        jetBottomMat.opacity = e * 0.45;
        jetTopGlowMat.opacity    = e * 0.70;
        jetBotGlowMat.opacity    = e * 0.55;
        const jetScale = 0.1 + e * 0.9;
        jetTop.scale.set(jetScale, jetScale, jetScale);
        jetBottom.scale.set(jetScale, jetScale, jetScale);

        if (bhProgress>=1){bhPhase=3;bhProgress=0;}
      }

      if (bhPhase===3) {
        // ETERNAL: alive, breathing, pulling the universe in
        const pulse = Math.sin(timeAccumulator*0.7)*0.5+0.5;
        const pulse2= Math.sin(timeAccumulator*1.4+1.2)*0.5+0.5;

        bhHaloMat.opacity      = 0.12 + pulse  * 0.08;
        bhInnerHaloMat.opacity = 0.22 + pulse2 * 0.10;
        photonRingMat.opacity  = 0.88 + Math.sin(timeAccumulator*3.5)  * 0.09;
        lensingRingMat.opacity = 0.85 + Math.sin(timeAccumulator*2.2+0.8)*0.10;
        einsteinRingMat.opacity= 0.45 + Math.sin(timeAccumulator*1.8+2.0)*0.12;

        // Jet flicker (plasma instability)
        const jetPulse=0.45+0.18*Math.sin(timeAccumulator*4.5);
        jetTopMat.opacity    = jetPulse+0.08;
        jetBottomMat.opacity = jetPulse;
        jetTopGlowMat.opacity    = 0.6+0.2*Math.sin(timeAccumulator*5.2);
        jetBotGlowMat.opacity    = 0.5+0.2*Math.sin(timeAccumulator*4.8+1.0);

        accretionDiskMat.uniforms.uReveal.value = 1.0;

        // Infall: Keplerian spiral with spaghettification
        const iPos = infallGeo.attributes.position.array as Float32Array;
        for (let i=0;i<infallCount;i++){
          const r=infallRadii[i];
          infallAngles[i]+=infallSpeeds[i]/Math.sqrt(Math.max(r,0.5));
          infallRadii[i]=Math.max(0.12, infallRadii[i]-infallDrifts[i]);
          if (infallRadii[i]<=BH_RADIUS*0.12){infallRadii[i]=BH_RADIUS*1.5+Math.random()*7;infallAngles[i]=Math.random()*Math.PI*2;}
          const nr=infallRadii[i];
          iPos[i*3]=Math.cos(infallAngles[i])*nr;
          iPos[i*3+1]=Math.sin(infallAngles[i])*nr*0.19;
          iPos[i*3+2]=(Math.random()-0.5)*0.3;
        }
        infallGeo.attributes.position.needsUpdate=true;

        // Gravitational wave rings — emit periodically
        gravWaveRings.forEach(gw => {
          if (!gw.active) {
            gw.cooldown--;
            if (gw.cooldown<=0) { gw.active=true; gw.scale=1.0; gw.opacity=0.55; gw.cooldown=240+Math.floor(Math.random()*300); }
          } else {
            gw.scale  += 0.035;
            gw.opacity = Math.max(0, gw.opacity-0.007);
            gw.mesh.scale.setScalar(gw.scale);
            gw.mat.opacity=gw.opacity;
            if (gw.opacity<=0) { gw.active=false; gw.mesh.scale.setScalar(1); }
          }
        });

        // Slow frame-drag rotation
        blackHoleGroup.rotation.z+=0.0007;
      }

      // Always update disk shader time
      if (bhPhase>=2) accretionDiskMat.uniforms.uTime.value=timeAccumulator;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      renderer.dispose();
      // Geometry/material disposal
      [innerGeom,warpGeom,outerGeom].forEach(g=>g.dispose());
      [innerMat,warpShaderMat,outerMat].forEach(m=>m.dispose());
      ringGeom.dispose();
      particleGeometry.dispose(); pMaterial.dispose();
      dustGeo.dispose(); dustMat.dispose();
      glowGeom.dispose(); glowMat.dispose();
      nebulaMesh.geometry.dispose(); nebulaMat.dispose();
      asteroids.forEach(a=>a.mesh.geometry.dispose());
      asteroidMats.forEach(m=>m.dispose());
      [supernovaCore,supernovaRing,supernovaHalo].forEach(m=>{m.geometry.dispose();(m.material as THREE.Material).dispose();});
      ejectGeo.dispose(); ejectMat.dispose();
      shootingStars.forEach(ss=>{ss.geo.dispose();ss.mat.dispose();});
      eventHorizonGeo.dispose(); eventHorizonMat.dispose();
      photonRingGeo.dispose(); photonRingMat.dispose();
      lensingRingGeo.dispose(); lensingRingMat.dispose();
      einsteinRingGeo.dispose(); einsteinRingMat.dispose();
      accretionDiskGeo.dispose(); accretionDiskMat.dispose();
      bhHaloGeo.dispose(); bhHaloMat.dispose();
      bhInnerHaloGeo.dispose(); bhInnerHaloMat.dispose();
      jetTopGeo.dispose(); jetTopMat.dispose();
      jetBottomGeo.dispose(); jetBottomMat.dispose();
      jetTopGlowGeo.dispose(); jetTopGlowMat.dispose();
      jetBotGlowGeo.dispose(); jetBotGlowMat.dispose();
      infallGeo.dispose(); infallMat.dispose();
      gravWaveBaseGeo.dispose();
      gravWaveRings.forEach(gw=>gw.mat.dispose());
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${theme==='light' ? 'bg-[#f8fafc]' : 'bg-[#020308]'}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ filter: isWarping ? 'contrast(1.18) brightness(1.12) saturate(1.2)' : 'none' }}
      />
    </div>
  );
}
