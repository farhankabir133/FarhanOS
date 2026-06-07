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
  useEffect(() => {
    isWarpingRef.current = isWarping;
  }, [isWarping]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Determine colors based on active theme
    let primaryColor = 0x6366f1; // Indigo
    let secondaryColor = 0x06b6d4; // Cyan
    let particleColor = 0xffffff;

    if (theme === 'cyberpunk') {
      primaryColor = 0xff0055;
      secondaryColor = 0x00ffcc;
      particleColor = 0xffff00;
    } else if (theme === 'ai') {
      primaryColor = 0x8b5cf6;
      secondaryColor = 0x6366f1;
      particleColor = 0x38bdf8;
    } else if (theme === 'terminal') {
      primaryColor = 0x22c55e;
      secondaryColor = 0x16a34a;
      particleColor = 0x86efac;
    } else if (theme === 'light') {
      primaryColor = 0x4f46e5;
      secondaryColor = 0x06b6d4;
      particleColor = 0x4f46e5;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020308, 0.015);

    // 2. Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Create 3D Wormhole Tunnel
    const tunnelLength = 120;
    const tunnelSegments = 100;
    const tunnelRadius = 8;

    const innerGeom = new THREE.CylinderGeometry(tunnelRadius, tunnelRadius, tunnelLength, 32, tunnelSegments, true);
    innerGeom.rotateX(Math.PI / 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
    });
    const innerTunnel = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerTunnel);

    // Custom Shader — warp streaks
    const warpShaderMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform float uWarpProgress;
        uniform vec3 uPrimaryColor;
        uniform vec3 uSecondaryColor;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec3(0.0, 0.0, 0.0).xy), hash(i + vec3(1.0, 0.0, 0.0).xy), u.x),
                     mix(hash(i + vec3(0.0, 1.0, 0.0).xy), hash(i + vec3(1.0, 1.0, 0.0).xy), u.x), u.y);
        }

        void main() {
          float speed = uTime * (1.2 + uWarpProgress * 10.0);
          float colCoords = vUv.x * 70.0 + sin(vUv.y * 3.1415 + uTime * 2.0) * (1.0 - uWarpProgress);
          float rowCoords = vUv.y * 3.5 - speed;
          float streamNoise = noise(vec2(colCoords, rowCoords * 0.15));
          float intensity = smoothstep(0.46, 0.82, streamNoise);

          if (uWarpProgress > 0.01) {
            float streakCol = vUv.x * 140.0;
            float streakRow = vUv.y * 1.5 - uTime * (18.0 + uWarpProgress * 45.0);
            float warpStreaks = noise(vec2(streakCol, streakRow * 0.025));
            float stretchFactor = smoothstep(0.38, 0.88, warpStreaks) * uWarpProgress * 1.8;
            intensity += stretchFactor;
          }

          float depthFade = smoothstep(55.0, -45.0, vPosition.z);
          vec3 baseColor = mix(uPrimaryColor, uSecondaryColor, sin(vUv.x * 6.28318 + uTime) * 0.5 + 0.5);
          vec3 finalColor = baseColor * (intensity * (1.0 + uWarpProgress * 3.2));

          if (uWarpProgress > 0.15) {
            float whiteLineNoise = noise(vec2(vUv.x * 200.0, vUv.y * 0.6 - uTime * 70.0));
            float whiteGlowVal = smoothstep(0.72, 0.97, whiteLineNoise) * (uWarpProgress - 0.15) * 1.5;
            finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), whiteGlowVal * depthFade);
            intensity += whiteGlowVal;
          }

          float finalAlpha = intensity * (uWarpProgress * (0.12 + uWarpProgress * 0.68)) * depthFade;
          finalAlpha = clamp(finalAlpha, 0.0, 1.0);
          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      uniforms: {
        uTime: { value: 0.0 },
        uWarpProgress: { value: 0.0 },
        uPrimaryColor: { value: new THREE.Color(primaryColor) },
        uSecondaryColor: { value: new THREE.Color(secondaryColor) }
      },
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const warpGeom = new THREE.CylinderGeometry(tunnelRadius - 0.1, tunnelRadius - 0.1, tunnelLength, 48, tunnelSegments, true);
    warpGeom.rotateX(Math.PI / 2);
    const warpTunnel = new THREE.Mesh(warpGeom, warpShaderMat);
    scene.add(warpTunnel);

    const outerGeom = new THREE.CylinderGeometry(tunnelRadius + 1.2, tunnelRadius + 1.2, tunnelLength, 12, 35, true);
    outerGeom.rotateX(Math.PI / 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
    });
    const outerTunnel = new THREE.Mesh(outerGeom, outerMat);
    scene.add(outerTunnel);

    // 5. Glowing rings
    const numRings = 15;
    const rings: THREE.Mesh[] = [];
    const ringGeom = new THREE.TorusGeometry(tunnelRadius + 0.3, 0.08, 8, 48);
    for (let i = 0; i < numRings; i++) {
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        transparent: true,
        opacity: 0.0,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.z = (i / numRings) * tunnelLength - tunnelLength / 2;
      scene.add(ring);
      rings.push(ring);
    }

    // 6. Cosmic Nebula background plane
    const nebulaMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uWarpProgress;
        uniform vec3 uPrimaryColor;
        uniform vec3 uSecondaryColor;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec3(0.0, 0.0, 0.0).xy), hash(i + vec3(1.0, 0.0, 0.0).xy), u.x),
                     mix(hash(i + vec3(0.0, 1.0, 0.0).xy), hash(i + vec3(1.0, 1.0, 0.0).xy), u.x), u.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < 3; ++i) {
            v += a * noise(p);
            p = rot * p * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 p = vUv * 3.5;
          float t = uTime * 0.02;
          float n1 = fbm(p + vec2(t * 0.4, t * 0.2));
          float n2 = fbm(p - vec2(t * 0.15, -t * 0.3) + n1 * 0.4);
          float val = smoothstep(0.18, 0.82, n2);
          vec3 baseColor = mix(uPrimaryColor * 0.18, uSecondaryColor * 0.35, val);
          baseColor += vec3(0.06, 0.04, 0.09) * n1 * n1;
          float nebulaAlpha = val * 0.75;
          nebulaAlpha = clamp(nebulaAlpha, 0.0, 1.0);
          vec3 finalColor = mix(baseColor, baseColor * 1.5 + vec3(0.15), uWarpProgress);
          float finalAlpha = mix(nebulaAlpha, nebulaAlpha * 0.45 + 0.12, uWarpProgress);
          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      uniforms: {
        uTime: { value: 0.0 },
        uWarpProgress: { value: 0.0 },
        uPrimaryColor: { value: new THREE.Color(primaryColor) },
        uSecondaryColor: { value: new THREE.Color(secondaryColor) }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const nebulaMesh = new THREE.Mesh(new THREE.PlaneGeometry(280, 280), nebulaMat);
    nebulaMesh.position.set(0, 0, -85);
    scene.add(nebulaMesh);

    // 7. Star particles
    const particleCount = 900;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const starSpeeds: number[] = [];
    const twinkleSpeeds: number[] = [];
    const twinklePhases: number[] = [];
    const baseColors: number[][] = [];

    const createStarTexture = () => {
      const cvs = document.createElement('canvas');
      cvs.width = 16; cvs.height = 16;
      const ctx = cvs.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.25)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(cvs);
    };

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3]     = (Math.random() - 0.5) * 90;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      particlePositions[i * 3 + 2] = Math.random() * 100 - 85;
      starSpeeds.push(Math.random() * 0.08 + 0.02);
      twinkleSpeeds.push(1.0 + Math.random() * 2.5);
      twinklePhases.push(Math.random() * Math.PI * 2);
      let r = 1.0, g = 1.0, b = 1.0;
      const rc = Math.random();
      if (rc < 0.18) { r = 0.82; g = 0.9; b = 1.0; }
      else if (rc < 0.32) { r = 1.0; g = 0.94; b = 0.78; }
      baseColors.push([r, g, b]);
      particleColors[i * 3] = r;
      particleColors[i * 3 + 1] = g;
      particleColors[i * 3 + 2] = b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    const pMaterial = new THREE.PointsMaterial({
      size: 0.38, map: createStarTexture(),
      transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false, vertexColors: true, sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particles);

    // 8. Singularity glow
    const glowGeom = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
    const singularityGlow = new THREE.Mesh(glowGeom, glowMat);
    singularityGlow.position.set(0, 0, -45);
    scene.add(singularityGlow);

    // ── ASTEROID BELT ─────────────────────────────────────────────────────────
    interface AsteroidData {
      mesh: THREE.Mesh;
      vx: number; vy: number; vz: number;
      rx: number; ry: number; rz: number;
    }

    const asteroidCount = 18;
    const asteroids: AsteroidData[] = [];
    const asteroidMats: THREE.MeshBasicMaterial[] = [];

    const createAsteroidGeom = () => {
      // Icosahedron base — looks naturally rocky
      const geo = new THREE.IcosahedronGeometry(0.22 + Math.random() * 0.32, 0);
      // Jitter vertices for irregular, natural shape
      const pos = geo.attributes.position.array as Float32Array;
      for (let vi = 0; vi < pos.length; vi++) {
        pos[vi] += (Math.random() - 0.5) * 0.14;
      }
      geo.attributes.position.needsUpdate = true;
      geo.computeVertexNormals();
      return geo;
    };

    for (let i = 0; i < asteroidCount; i++) {
      const geo = createAsteroidGeom();
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.06 + Math.random() * 0.08, 0.15, 0.28 + Math.random() * 0.18),
        wireframe: false,
        transparent: true,
        opacity: 0.72,
      });
      asteroidMats.push(mat);
      const mesh = new THREE.Mesh(geo, mat);

      // Scatter across the field — avoid the center tunnel (r > 10)
      const angle  = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 30;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        Math.random() * 80 - 70
      );
      mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);

      scene.add(mesh);

      asteroids.push({
        mesh,
        // Very slow drift — feels natural, not cartoonish
        vx: (Math.random() - 0.5) * 0.006,
        vy: (Math.random() - 0.5) * 0.006,
        vz: 0.012 + Math.random() * 0.022,
        // Independent spin per axis
        rx: (Math.random() - 0.5) * 0.008,
        ry: (Math.random() - 0.5) * 0.012,
        rz: (Math.random() - 0.5) * 0.006,
      });
    }

    // ── SUPERNOVA SYSTEM ──────────────────────────────────────────────────────
    // Core sphere
    const supernovaCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xfff6e0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
    );

    // Outer shockwave ring
    const supernovaRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.18, 12, 64),
      new THREE.MeshBasicMaterial({ color: 0xff8c00, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
    );

    // Secondary halo
    const supernovaHalo = new THREE.Mesh(
      new THREE.SphereGeometry(3.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff4500, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide })
    );

    // Ejection particles (supernova debris)
    const ejectCount = 220;
    const ejectPositions = new Float32Array(ejectCount * 3);
    const ejectColors   = new Float32Array(ejectCount * 3);
    const ejectVelocities: THREE.Vector3[] = [];
    for (let i = 0; i < ejectCount; i++) {
      ejectPositions[i * 3] = 0; ejectPositions[i * 3 + 1] = 0; ejectPositions[i * 3 + 2] = 0;
      const theta  = Math.random() * Math.PI * 2;
      const phi    = Math.acos(2 * Math.random() - 1);
      const speed  = 0.04 + Math.random() * 0.12;
      ejectVelocities.push(new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * speed,
        Math.sin(phi) * Math.sin(theta) * speed,
        Math.cos(phi) * speed
      ));
      // Colors: hot orange → yellow → white
      const t = Math.random();
      ejectColors[i * 3]     = 1.0;
      ejectColors[i * 3 + 1] = 0.3 + t * 0.7;
      ejectColors[i * 3 + 2] = t * 0.3;
    }
    const ejectGeo = new THREE.BufferGeometry();
    ejectGeo.setAttribute('position', new THREE.BufferAttribute(ejectPositions, 3));
    ejectGeo.setAttribute('color',    new THREE.BufferAttribute(ejectColors, 3));
    const ejectMat = new THREE.PointsMaterial({
      size: 0.22, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
      vertexColors: true, sizeAttenuation: true,
    });
    const ejectParticles = new THREE.Points(ejectGeo, ejectMat);

    // Group all supernova pieces
    const supernovaGroup = new THREE.Group();
    supernovaGroup.add(supernovaCore, supernovaRing, supernovaHalo, ejectParticles);

    // Position supernova far in the background — feel distant but visible
    const supernovaX = (Math.random() - 0.5) * 40;
    const supernovaY = (Math.random() - 0.5) * 30;
    supernovaGroup.position.set(supernovaX, supernovaY, -60);
    scene.add(supernovaGroup);

    // Supernova state machine
    // phase 0 = dormant, 1 = igniting, 2 = peak, 3 = fading, 4 = done
    let supernovaPhase = 0;
    let supernovaProgress = 0;     // 0→1 within each phase
    let supernovaRingScale = 1.0;
    const sessionStart = Date.now();
    const SUPERNOVA_TRIGGER_MS = 30_000; // 30 seconds

    // ── Mouse & resize ────────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 110;
      mouseY = (e.clientY - window.innerHeight / 2) / 110;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container || !canvas) return;
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ── Animation constants ───────────────────────────────────────────────────
    let speed = 0.25;
    let rotationSpeed = 0.0015;
    let warpVelocity = 0.0;
    let warpProgressVal = 0.0;
    let timeAccumulator = 0.0;
    let animationFrameId: number;

    const animate = () => {
      const warping = isWarpingRef.current;
      timeAccumulator += warping ? 0.024 : 0.012;

      // ── Warp physics ────────────────────────────────────────────────────────
      if (warping) {
        warpProgressVal = Math.min(1.0, warpProgressVal + 0.018);
        warpVelocity    = Math.min(6.5, warpVelocity + 0.18);
        speed           = Math.min(4.8, speed + 0.15);
        rotationSpeed   = Math.min(0.06, rotationSpeed + 0.0018);
        camera.fov      = Math.min(136, camera.fov + 1.2);
        camera.updateProjectionMatrix();
        glowMat.opacity = Math.min(1.0, glowMat.opacity + 0.045);
        singularityGlow.scale.addScalar(0.4);
      } else {
        warpProgressVal = Math.max(0.0, warpProgressVal - 0.03);
        warpVelocity    = Math.max(0.0, warpVelocity - 0.05);
        speed           = Math.max(0.25, speed - 0.05);
        rotationSpeed   = Math.max(0.0015, rotationSpeed - 0.001);
        camera.fov      = Math.max(75, camera.fov - 1.5);
        camera.updateProjectionMatrix();
        glowMat.opacity = Math.max(0.0, glowMat.opacity - 0.05);
        if (singularityGlow.scale.x > 1.0) singularityGlow.scale.set(1, 1, 1);
      }

      innerMat.opacity = 0.14 * warpProgressVal;
      outerMat.opacity = 0.09 * warpProgressVal;
      warpShaderMat.uniforms.uWarpProgress.value = warpProgressVal;
      warpShaderMat.uniforms.uTime.value = timeAccumulator;
      nebulaMat.uniforms.uTime.value = timeAccumulator;
      nebulaMat.uniforms.uWarpProgress.value = warpProgressVal;

      innerTunnel.rotation.z += rotationSpeed;
      outerTunnel.rotation.z -= rotationSpeed * 0.7;
      warpTunnel.rotation.z  += rotationSpeed * 0.4;

      const now = Date.now() * 0.002;
      rings.forEach((ring, idx) => {
        ring.position.z += speed;
        if (ring.position.z > 15) ring.position.z = -55;
        const scaleMult = 1 + Math.sin(now + idx) * 0.03 + (warping ? 0.08 : 0);
        ring.scale.set(scaleMult, scaleMult, 1);
        if (ring.material && !Array.isArray(ring.material)) {
          (ring.material as THREE.MeshBasicMaterial).opacity = 0.65 * warpProgressVal;
        }
      });

      // ── Mouse smoothing ─────────────────────────────────────────────────────
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(0, 0, -50);

      // ── Star particles ──────────────────────────────────────────────────────
      const pPos = particleGeometry.attributes.position.array as Float32Array;
      const pCol = particleGeometry.attributes.color.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const currentSpeed = warping
          ? starSpeeds[i] * 120.0 + speed * 12.0
          : starSpeeds[i] + speed * 0.08;
        pPos[idx + 2] += currentSpeed;
        if (pPos[idx + 2] > 12) {
          pPos[idx + 2] = -85;
          pPos[idx]     = (Math.random() - 0.5) * 90;
          pPos[idx + 1] = (Math.random() - 0.5) * 90;
        }
        if (!warping) {
          const x = pPos[idx], y = pPos[idx + 1];
          const angle = 0.0004 * (i % 2 === 0 ? 1 : -1);
          const cosA = Math.cos(angle), sinA = Math.sin(angle);
          pPos[idx]     = x * cosA - y * sinA;
          pPos[idx + 1] = x * sinA + y * cosA;
        }
        const base = baseColors[i];
        const brightness = warping ? 1.0 : 0.35 + 0.65 * Math.sin(timeAccumulator * twinkleSpeeds[i] + twinklePhases[i]);
        pCol[idx]     = base[0] * brightness;
        pCol[idx + 1] = base[1] * brightness;
        pCol[idx + 2] = base[2] * brightness;
      }
      pMaterial.size = warping ? Math.min(0.55, pMaterial.size + 0.012) : Math.max(0.38, pMaterial.size - 0.01);
      particleGeometry.attributes.position.needsUpdate = true;
      particleGeometry.attributes.color.needsUpdate    = true;

      // ── Asteroid animation ──────────────────────────────────────────────────
      const warpSpeedMult = 1 + warpProgressVal * 14;
      asteroids.forEach((a, ai) => {
        // Drift forward
        a.mesh.position.z += a.vz * warpSpeedMult;
        a.mesh.position.x += a.vx;
        a.mesh.position.y += a.vy;

        // Natural tumble
        a.mesh.rotation.x += a.rx;
        a.mesh.rotation.y += a.ry;
        a.mesh.rotation.z += a.rz;

        // Subtle pulsing opacity — they breathe
        const baseMat = asteroidMats[ai];
        baseMat.opacity = 0.55 + 0.2 * Math.sin(timeAccumulator * 0.8 + ai * 1.3);

        // Speed up during warp to feel swept along
        if (warping) {
          a.mesh.position.x += a.vx * 4;
          a.mesh.position.y += a.vy * 4;
        }

        // Reset when past camera — respawn at back of scene
        if (a.mesh.position.z > 14) {
          const ang = Math.random() * Math.PI * 2;
          const rad = 12 + Math.random() * 30;
          a.mesh.position.set(Math.cos(ang) * rad, Math.sin(ang) * rad, -75);
        }
      });

      // ── Supernova state machine ─────────────────────────────────────────────
      const elapsed = Date.now() - sessionStart;

      if (supernovaPhase === 0 && elapsed >= SUPERNOVA_TRIGGER_MS) {
        // Kick off ignition
        supernovaPhase    = 1;
        supernovaProgress = 0;
      }

      if (supernovaPhase === 1) {
        // IGNITION — core brightens, ring expands (0→1 over ~2.5s at 60fps ≈ 150 frames)
        supernovaProgress += 0.007;
        const p = Math.min(supernovaProgress, 1.0);
        const eased = p * p * (3 - 2 * p); // smooth-step

        (supernovaCore.material as THREE.MeshBasicMaterial).opacity  = eased * 0.95;
        (supernovaHalo.material as THREE.MeshBasicMaterial).opacity  = eased * 0.35;
        (supernovaRing.material as THREE.MeshBasicMaterial).opacity  = eased * 0.8;
        ejectMat.opacity = eased * 0.75;

        supernovaRingScale = 1.0 + eased * 4.5;
        supernovaRing.scale.set(supernovaRingScale, supernovaRingScale, 1);
        supernovaHalo.scale.setScalar(1 + eased * 1.8);
        supernovaCore.scale.setScalar(1 + eased * 2.2);

        // Animate debris outward
        const ejectPos = ejectGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < ejectCount; i++) {
          ejectPos[i * 3]     = ejectVelocities[i].x * eased * 80;
          ejectPos[i * 3 + 1] = ejectVelocities[i].y * eased * 80;
          ejectPos[i * 3 + 2] = ejectVelocities[i].z * eased * 80;
        }
        ejectGeo.attributes.position.needsUpdate = true;

        if (supernovaProgress >= 1.0) { supernovaPhase = 2; supernovaProgress = 0; }
      }

      if (supernovaPhase === 2) {
        // PEAK — hold bright for ~1.5s
        supernovaProgress += 0.011;
        // Slow ring expansion continues
        supernovaRingScale += 0.06;
        supernovaRing.scale.set(supernovaRingScale, supernovaRingScale, 1);

        // Gentle core pulse
        const pulse = 0.88 + 0.12 * Math.sin(timeAccumulator * 8);
        (supernovaCore.material as THREE.MeshBasicMaterial).opacity = pulse;

        if (supernovaProgress >= 1.0) { supernovaPhase = 3; supernovaProgress = 0; }
      }

      if (supernovaPhase === 3) {
        // FADE — everything dims naturally
        supernovaProgress += 0.004;
        const p = Math.min(supernovaProgress, 1.0);
        const fade = 1 - p * p; // ease-in fade

        (supernovaCore.material as THREE.MeshBasicMaterial).opacity  = fade * 0.95;
        (supernovaHalo.material as THREE.MeshBasicMaterial).opacity  = fade * 0.35;
        (supernovaRing.material as THREE.MeshBasicMaterial).opacity  = fade * 0.55;
        ejectMat.opacity = fade * 0.6;

        supernovaRingScale += 0.035;
        supernovaRing.scale.set(supernovaRingScale, supernovaRingScale, 1);

        if (supernovaProgress >= 1.0) { supernovaPhase = 4; }
      }

      // phase 4 = fully done, everything at 0 opacity — stays hidden

      // Slowly rotate the entire supernova group for a sense of expansion
      if (supernovaPhase >= 1 && supernovaPhase <= 3) {
        supernovaGroup.rotation.z += 0.003;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      innerGeom.dispose(); innerMat.dispose();
      warpGeom.dispose(); warpShaderMat.dispose();
      outerGeom.dispose(); outerMat.dispose();
      ringGeom.dispose();
      particleGeometry.dispose(); pMaterial.dispose();
      glowGeom.dispose(); glowMat.dispose();
      nebulaMesh.geometry.dispose(); nebulaMat.dispose();
      asteroids.forEach(a => { a.mesh.geometry.dispose(); });
      asteroidMats.forEach(m => m.dispose());
      supernovaCore.geometry.dispose(); (supernovaCore.material as THREE.Material).dispose();
      supernovaRing.geometry.dispose(); (supernovaRing.material as THREE.Material).dispose();
      supernovaHalo.geometry.dispose(); (supernovaHalo.material as THREE.Material).dispose();
      ejectGeo.dispose(); ejectMat.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${theme === 'light' ? 'bg-[#f8fafc]' : 'bg-[#020308]'}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ filter: isWarping ? 'contrast(1.15) brightness(1.1)' : 'none' }}
      />
    </div>
  );
}
