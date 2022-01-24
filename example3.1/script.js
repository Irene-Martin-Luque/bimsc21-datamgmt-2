// load three.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.module.js'

// uncomment to load controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/controls/OrbitControls.js'

// create a scene and a camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 30

// create the renderer and add it to the html
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// Uncomment next line to add controls
const controls = new OrbitControls( camera, renderer.domElement );

// Create the plane, the sphere an copy animation:

var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true
  }));
  plane.rotation.x = -Math.PI * 0.5;
  scene.add(plane);

var ball = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 8), new THREE.MeshBasicMaterial({
    color: 0xff00ff,
    wireframe: true
  }));
  scene.add(ball);
  
// math-sin animation:
var clock = new THREE.Clock();
  var time = 0;
  var delta = 0;
  
render();
  
function render() {
    requestAnimationFrame(render);
    delta = clock.getDelta();
    time += delta;
    ball.rotation.x = time * 4;
    ball.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 2;
    ball.position.z = Math.cos(time) * 4;
    renderer.render(scene, camera);
}

animate()