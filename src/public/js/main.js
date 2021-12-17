import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
} from "/node_modules/three/build/three.module.js";

// Scene
const scene = new Scene();

// Red cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);
scene.add(mesh);

// Camera
const camera = new PerspectiveCamera(75, 800 / 600);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.getElementById("webgl");
const renderer = new WebGLRenderer({
  canvas,
});

renderer.setSize(800, 600);

renderer.render(scene, camera);
