import React, { Suspense, useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Sphere(props) {
    return (
        <mesh {...props}>
            <sphereBufferGeometry args={[1, 30]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
    const group = useRef();

    const { nodes, materials } = useGLTF("/boxSofa.gltf");

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
                <primitive object={nodes.Root} />
                <skinnedMesh
                    geometry={nodes.Sofaback__mReBody.geometry}
                    material={materials.mReBody}
                    skeleton={nodes.Sofaback__mReBody.skeleton}
                />
            </group>
        </group>
    );
}

export default function Home() {
    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Suspense fallback={null}>
                {/* Expected behavior: two meshes */}
                <Sphere position={[-2, 0, -2]} />
                <Sphere position={[2, 0, -2]} />
                {/* Actual behavior: one mesh */}
                <Model position={[-2, 0, 2]} />
                <Model position={[2, 0, 2]} />
            </Suspense>
        </Canvas>
    );
}
