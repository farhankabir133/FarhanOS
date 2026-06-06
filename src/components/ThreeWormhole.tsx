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
      primaryColor = 0xff0055; // Neon Red/Pink
      secondaryColor = 0x00ffcc; // Neo Mint / Cyan
      particleColor = 0xffff00; // Cyber Yellow
    } else if (theme === 'ai') {
      primaryColor = 0x8b5cf6; // Purple
      secondaryColor = 0x6366f1; // Indigo
      particleColor = 0x38bdf8; // Sky Blue
    } else if (theme === 'terminal') {
      primaryColor = 0x22c55e; // Matrix Green
      secondaryColor = 0x16a34a; // Darker Green
      particleColor = 0x86efac; // Light Green
    } else if (theme === 'light') {
      primaryColor = 0x4f46e5; // Indigo
      secondaryColor = 0x06b6d4; // Cyan
      particleColor = 0x4f46e5;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020308, 0.015);

    // 2. Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    // High FOV for tunnel speed feel
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
    // Nested cylinders to simulate cybernetic structure
    const tunnelLength = 120;
    const tunnelSegments = 100;
    const tunnelRadius = 8;

    // Inner glowing grid cylinder
    const innerGeom = new THREE.CylinderGeometry(
      tunnelRadius,
      tunnelRadius,
      tunnelLength,
      32,
      tunnelSegments,
      true
    );
    // Rotate to align cylinder along the Z-axis (pointing into screen)
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

    // Custom Shader Material for longitudinal streaks and warp speed motion blur
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

        // Simple high-performance pseudo-random hash generator
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        // Procedural 2D noise mapping
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec3(0.0, 0.0, 0.0).xy), hash(i + vec3(1.0, 0.0, 0.0).xy), u.x),
                     mix(hash(i + vec3(0.0, 1.0, 0.0).xy), hash(i + vec3(1.0, 1.0, 0.0).xy), u.x), u.y);
        }

        void main() {
          // Circumferential warp stripes
          float speed = uTime * (1.2 + uWarpProgress * 10.0);
          
          // Map longitudinal coordinate (vUv.y) and circumferential coordinate (vUv.x)
          // Multiply vUv.x to make many longitudinal parallel streaks
          float colCoords = vUv.x * 70.0 + sin(vUv.y * 3.1415 + uTime * 2.0) * (1.0 - uWarpProgress);
          float rowCoords = vUv.y * 3.5 - speed;

          // Generate base structural energy streams
          float streamNoise = noise(vec2(colCoords, rowCoords * 0.15));
          float intensity = smoothstep(0.46, 0.82, streamNoise);

          // Longitudinal blur stretching when hyperdrive registers warping progress
          if (uWarpProgress > 0.01) {
            // Highly condensed, vertically stretched streaks to simulate motion blur
            float streakCol = vUv.x * 140.0;
            float streakRow = vUv.y * 1.5 - uTime * (18.0 + uWarpProgress * 45.0);
            float warpStreaks = noise(vec2(streakCol, streakRow * 0.025));
            
            float stretchFactor = smoothstep(0.38, 0.88, warpStreaks) * uWarpProgress * 1.8;
            intensity += stretchFactor;
          }

          // Depth-based fade (tunnel starts dark and leads to the singularity bright core)
          // vPosition.z goes from -tunnelLength/2 to +tunnelLength/2
          float depthFade = smoothstep(55.0, -45.0, vPosition.z);

          // Mix colors based on theme uniforms
          vec3 baseColor = mix(uPrimaryColor, uSecondaryColor, sin(vUv.x * 6.28318 + uTime) * 0.5 + 0.5);
          vec3 finalColor = baseColor * (intensity * (1.0 + uWarpProgress * 3.2));

          // Combine with white-hot core warp lines representing physical relativistic stretch
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

    const warpGeom = new THREE.CylinderGeometry(
      tunnelRadius - 0.1, // slightly nested inside layout boundary
      tunnelRadius - 0.1,
      tunnelLength,
      48,
      tunnelSegments,
      true
    );
    warpGeom.rotateX(Math.PI / 2);
    const warpTunnel = new THREE.Mesh(warpGeom, warpShaderMat);
    scene.add(warpTunnel);

    // Outer cyber pattern cylinder (slightly larger with fewer segments for a rugged structural look)
    const outerGeom = new THREE.CylinderGeometry(
      tunnelRadius + 1.2,
      tunnelRadius + 1.2,
      tunnelLength,
      12,
      35,
      true
    );
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

    // 5. Glowing structural bulkhead rings spaced along the Z-axis
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
      // Evenly space rings from Z = -tunnelLength/2 to Z = tunnelLength/2
      ring.position.z = (i / numRings) * tunnelLength - tunnelLength / 2;
      scene.add(ring);
      rings.push(ring);
    }

    // 6. Interactive particle stars floating in the system
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];
    const particleAngles: number[] = [];
    const particleRadii: number[] = [];
    
    // Original positions to compute hyperdrive stretch trails
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * (tunnelRadius - 0.4) + 0.2;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * tunnelLength;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      particleSpeeds.push(Math.random() * 0.4 + 0.1);
      particleAngles.push(angle);
      particleRadii.push(radius);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Render particles using PointsMaterial
    const pMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particles);

    // 7. Blinding Singularity Light at the end of the shaft
    const glowGeom = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.0,
    });
    const singularityGlow = new THREE.Mesh(glowGeom, glowMat);
    singularityGlow.position.set(0, 0, -45);
    scene.add(singularityGlow);

    // 8. Interactive Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 110;
      mouseY = (e.clientY - window.innerHeight / 2) / 110;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 9. Resize handler
    const handleResize = () => {
      if (!container || !canvas) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 10. Animation constants
    let speed = 0.25;
    let rotationSpeed = 0.0015;
    let warpVelocity = 0.0;
    let warpProgressVal = 0.0;
    let timeAccumulator = 0.0;
    let animationFrameId: number;

    const animate = () => {
      const warping = isWarpingRef.current;
      // Warp speed acceleration physics loop
      timeAccumulator += warping ? 0.024 : 0.012; // Time acceleration on warp speed

      if (warping) {
        warpProgressVal = Math.min(1.0, warpProgressVal + 0.018);
        warpVelocity = Math.min(6.5, warpVelocity + 0.18);
        speed = Math.min(4.8, speed + 0.15);
        rotationSpeed = Math.min(0.06, rotationSpeed + 0.0018);
        
        // Increase Camera FOV (hyperdrive look)
        camera.fov = Math.min(136, camera.fov + 1.2);
        camera.updateProjectionMatrix();

        // Singularity glow expands & becomes completely white
        glowMat.opacity = Math.min(1.0, glowMat.opacity + 0.045);
        singularityGlow.scale.addScalar(0.4);
      } else {
        warpProgressVal = Math.max(0.0, warpProgressVal - 0.03);
        warpVelocity = Math.max(0.0, warpVelocity - 0.05);
        speed = Math.max(0.25, speed - 0.05);
        rotationSpeed = Math.max(0.0015, rotationSpeed - 0.001);
        
        // Return camera focal length safely
        camera.fov = Math.max(75, camera.fov - 1.5);
        camera.updateProjectionMatrix();

        glowMat.opacity = Math.max(0.0, glowMat.opacity - 0.05);
        if (singularityGlow.scale.x > 1.0) singularityGlow.scale.set(1, 1, 1);
      }

      // Update materials opacities dynamically to materialize the tunnel on warp
      innerMat.opacity = 0.14 * warpProgressVal;
      outerMat.opacity = 0.09 * warpProgressVal;

      // Sync custom WebGL shader uniforms
      warpShaderMat.uniforms.uWarpProgress.value = warpProgressVal;
      warpShaderMat.uniforms.uTime.value = timeAccumulator;

      // Rotate continuous elements
      innerTunnel.rotation.z += rotationSpeed;
      outerTunnel.rotation.z -= rotationSpeed * 0.7;
      warpTunnel.rotation.z += rotationSpeed * 0.4; // subtle rot on shader stripes too

      // Pulse ring scaling and opacity representing portal breathing frequency
      const now = Date.now() * 0.002;
      rings.forEach((ring, idx) => {
        const ringZPos = ring.position.z;
        // Move rings forward representing travel
        ring.position.z += speed;
        // Reset if passed camera plan
        if (ring.position.z > 15) {
          ring.position.z = -55;
        }

        // Pulse scale a bit on warp
        const scaleMult = 1 + Math.sin(now + idx) * 0.03 + (warping ? 0.08 : 0);
        ring.scale.set(scaleMult, scaleMult, 1);

        // Dynamic opacity for rings
        if (ring.material && !Array.isArray(ring.material)) {
          (ring.material as THREE.MeshBasicMaterial).opacity = 0.65 * warpProgressVal;
        }
      });

      // Update interactive mouse smoothing
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(0, 0, -50);

      // Animate and render particle arrays
      const positions = particleGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Swirl particles around tunnel spiral coordinates
        particleAngles[i] += rotationSpeed * (i % 2 === 0 ? 1 : -1) * 0.7;
        positions[idx] = Math.cos(particleAngles[i]) * particleRadii[i];
        positions[idx + 1] = Math.sin(particleAngles[i]) * particleRadii[i];

        // Direct scroll along Z axis
        const particleSpeed = particleSpeeds[i] * (warping ? 14.5 : 1.0) + speed;
        positions[idx + 2] += particleSpeed;

        // Reset particles that fly past camera
        if (positions[idx + 2] > 12) {
          positions[idx + 2] = -55;
          positions[idx] = Math.cos(particleAngles[i]) * particleRadii[i];
          positions[idx + 1] = Math.sin(particleAngles[i]) * particleRadii[i];
        }
      }

      // Dynamically override sizeAttenuation when warping to create long trail streaks
      if (warping) {
        pMaterial.size = Math.min(0.42, pMaterial.size + 0.015);
      } else {
        pMaterial.size = Math.max(0.12, pMaterial.size - 0.01);
      }

      particleGeometry.attributes.position.needsUpdate = true;

      // Render loop
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 11. Cleanup bindings
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      warpGeom.dispose();
      warpShaderMat.dispose();
      outerGeom.dispose();
      outerMat.dispose();
      ringGeom.dispose();
      particleGeometry.dispose();
      pMaterial.dispose();
      glowGeom.dispose();
      glowMat.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-[#020308] overflow-hidden"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
        style={{ filter: isWarping ? 'contrast(1.15) brightness(1.1)' : 'none' }}
      />
    </div>
  );
}
