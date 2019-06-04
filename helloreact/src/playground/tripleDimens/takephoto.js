import * as THREE from 'three'

let scene = new THREE.Scene();//准备拍摄的场地
// let camera = new THREE.PerspectiveCamera(fov,aspectRatio,nearPlane,farPlane);//买了个相机
// camera.position.set(x,y,z);//把照相机放到(x,y,z)处
// camera.lookAt(new THREE.Vector3(0,0,0));//照相机看向坐标(0,0,0)
// let light = new THREE.PointLight( 0xff0000, 1, 100 );//Light 在有些时候并不是必须的。
// let chessman = createChessman();//准备好棋子
// chessman.position(a,b,c);//把棋子放到坐标(x,y,z)处
// let chessboard = createChessboard();//准备好棋盘
// chessboard.position(e,d,f);//把棋子放到坐标(e,d,f)处
// scene.add(chessman);//把棋子放到空间中
// scene.add(chessboard);//把棋盘放到空间中
// let renderer = new THREE.WebGLRenderer();//一个渲染器，不要深究于此
// renderer.render(scene,camera);//按下快门，咔嚓~拍照完成!
