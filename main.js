import * as THREE from 'three';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 100;
// camera.position.y = 50;

// camera
const cameraWidth = 450
const cameraHeight = cameraWidth / (window.innerWidth / window.innerHeight)
const camera = new THREE.OrthographicCamera( cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000);
camera.position.set(200, 200, 200); // angle of camera
camera.lookAt(0, 5, 0);// orientation of camera (x,y,z)

//setup renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

//wheel
function createWheels(){
  const geometry = new THREE.BoxGeometry(12, 12, 33);
  const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
  const wheel = new THREE.Mesh( geometry, material );
  return wheel
}

const wheel = createWheels();

scene.add(wheel);

renderer.render(scene, camera);


