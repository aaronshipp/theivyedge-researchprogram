import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const particleOptions: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#00ffff', '#0ea5e9', '#6366f1'] },
    links: {
      color: '#00ffff',
      distance: 150,
      enable: true,
      opacity: 0.12,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      outModes: { default: 'bounce' },
    },
    number: {
      value: 50,
      density: { enable: true },
    },
    opacity: {
      value: { min: 0.1, max: 0.4 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.3 } },
    },
  },
  detectRetina: true,
};

export function ParticleBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  if (!engineReady) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles id="tsparticles" options={particleOptions} />
    </div>
  );
}
