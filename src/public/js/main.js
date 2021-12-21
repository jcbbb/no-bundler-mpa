import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Clock,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Scene
const scene = new Scene();

// Red cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);
scene.add(mesh);

// Camera
const sizes = { width: window.innerWidth, height: window.innerHeight };
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const canvas = document.getElementById("webgl");
const renderer = new WebGLRenderer({
  canvas,
});

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
}

animate();
