# 🌐 HDRI Sphere

Interactive 3D panoramic viewer for HDRI / equirectangular images. Built with React, Three.js, and TypeScript.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r184-black?logo=threedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

## Features

- 🖼️ **360° Panoramic Rendering** — Renders equirectangular images onto a 3D sphere for immersive exploration.
- 🧭 **Interactive Compass** — Real-time compass with smooth cardinal direction tracking and north offset calibration.
- 🔍 **Scroll Zoom** — FOV-based zoom control via mouse wheel (30°–100° range).
- 🎯 **Orbit Controls** — Click and drag to look around with inverted, natural-feeling rotation.
- ⚡ **Lightweight** — Minimal dependencies, powered by `@react-three/fiber` and `@react-three/drei`.

## Quick Start

```bash
# Clone
git clone https://github.com/<your-username>/hdri-sphere.git
cd hdri-sphere

# Install & run
npm install
npm run dev
```

## Project Structure

```
src/
├── App.tsx                  # Main scene setup (Canvas, controls, panorama)
├── components/
│   ├── Panorama.tsx         # Sphere geometry + texture mapping
│   ├── ZoomControl.tsx      # FOV zoom via scroll wheel
│   ├── CameraController.tsx # Initial camera orientation (north offset)
│   ├── Compass.tsx          # UI compass overlay (N/S/E/W)
│   └── CompassController.tsx# Syncs camera direction → compass rotation
```

## Usage

Replace the panoramic image in `src/assets/images/` with your own equirectangular/HDRI image and update the import in `App.tsx`:

```tsx
import sphereImage from "@/assets/images/your-image.jpg";
```

Adjust `northOffset` in `App.tsx` to calibrate the compass to your image's north direction.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Three.js | 3D rendering engine |
| React Three Fiber | React renderer for Three.js |
| Drei | Helper components for R3F |
| Vite | Build tool & dev server |
| TypeScript | Type safety |

## License

MIT
