import * as THREE from 'three';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 100;
// camera.position.y = 50;

// camera
const cameraWidth = 400 // size of camera
const cameraHeight = cameraWidth / (window.innerWidth / window.innerHeight)
const camera = new THREE.OrthographicCamera(cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000);
camera.position.set(200, 200, 200); // angle of camera
camera.lookAt(0, 5, 0);// orientation of camera (x,y,z)

//setup renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
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
function createWheels() {
  // const geometry = new THREE.BoxGeometry(12, 12, 33);
  const geometry = new THREE.CylinderGeometry(7, 7, 33, 64);
  const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
  const wheel = new THREE.Mesh(geometry, material);
  return wheel
}

function car() {
  const car = new THREE.Group();

  const back = createWheels();
  back.position.y = 5;
  back.position.x = -20;
  back.rotateX(Math.PI / 2);
  car.add(back);

  const front = createWheels();
  front.position.y = 5;
  front.position.x = 25;
  front.rotateX(Math.PI / 2);
  car.add(front);

  const main = new THREE.Shape();
  main.moveTo(-40, 8);
  main.bezierCurveTo( 50, 2, 50, 11, 10, 30 );

  const extrudeSettings = {
    depth: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1
  };
  const geometry = new THREE.ExtrudeGeometry(main, extrudeSettings);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());

  car.add(mesh);

  return car
}

scene.add(car());

renderer.render(scene, camera);


