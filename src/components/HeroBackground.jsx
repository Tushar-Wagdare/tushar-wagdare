import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 500;

    // Renderer with transparency
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(200, 100, 200);
    scene.add(directionalLight);

    // Particles
    const particles = new THREE.Group();
    const geometry = new THREE.TetrahedronGeometry(5, 0);
    const colors = [0x37BE95, 0xF3F3F3, 0x6549C0];

    for (let i = 0; i < 500; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true, // Enable transparency for particles
        opacity: 0.8, // Slightly transparent particles
        flatShading: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000
      );
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      particles.add(mesh);
    }
    scene.add(particles);

    // Saturn
    const saturn = new THREE.Group();
    saturn.rotation.set(0.4, 0.3, 0);

    const planetGeometry = new THREE.IcosahedronGeometry(100, 1);
    const planetMaterial = new THREE.MeshPhongMaterial({
      color: 0x37BE95,
      transparent: true, // Enable transparency for planet
      opacity: 0.9, // Slightly transparent planet
      flatShading: true
    });
    
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.set(0, 40, 0);
    saturn.add(planet);

    const ringGeometry = new THREE.TorusGeometry(140, 12, 6, 15);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x6549C0,
      transparent: true, // Enable transparency for ring
      opacity: 0.8, // Slightly transparent ring
      flatShading: true
    });
    
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(0, 40, 0);
    ring.rotation.x = Math.PI / 2 + 0.4;
    saturn.add(ring);

    scene.add(saturn);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.x += 0.001;
      particles.rotation.y -= 0.004;
      saturn.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'transparent' // Ensure div background is transparent
      }}
    />
  );
};

export default HeroBackground;