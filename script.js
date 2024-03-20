import * as THREE from 'three'
import { Texture } from 'three'
import GLTFLoader from 'gltfloader'

const   scene = new THREE.Scene()
const   camera = new THREE.PerspectiveCamera(70, iw / ih)
const   geometry = await GLTFLoader.loadGeometry('bibi.glb')
const   texture = new THREE.TextureLoader().load('bibi.png')
const   material = new THREE.MeshPhongMaterial( {map: texture, shininess: 0} )
const   mesh = new THREE.Mesh(geometry, material)

const   light = new THREE.PointLight(0xeeeeee)

scene.add(mesh)
scene.add(light)

camera.position.set(0, 1.5, 4)
light.position.set(0, 3, 4)

const   renderer = new THREE.WebGLRenderer({canvas})

loop()

function loop() {
    requestAnimationFrame(loop)
    mesh.rotation.y += 0.001
    mesh.rotation.x += 0
    renderer.render(scene, camera)
}

renderer.render(scene, camera)