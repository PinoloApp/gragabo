import * as THREE from "three"

export function Sky() {


    return (
        <mesh>
            <sphereGeometry args={[900, 100, 32, 32]} />
            <meshStandardMaterial color="#fff" side={THREE.DoubleSide} />
        </mesh>
    )
}
