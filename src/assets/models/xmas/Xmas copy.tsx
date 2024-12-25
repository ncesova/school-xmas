import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {Mesh, MeshStandardMaterial} from "three";
import {GroupProps} from "@react-three/fiber";
import modelPath from "./sample.glb";

export type DreiGLTF = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, MeshStandardMaterial>;
};

export function Xmas(props: GroupProps) {
  const {nodes} = useGLTF(modelPath, true) as DreiGLTF;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
      />
    </group>
  );
}

useGLTF.preload(modelPath, true);
