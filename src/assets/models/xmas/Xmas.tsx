import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {Mesh, MeshStandardMaterial} from "three";
import {GroupProps} from "@react-three/fiber";
import modelPath from "./xmas_tree.glb";

export type DreiGLTF = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, MeshStandardMaterial>;
};

export function Xmas(props: GroupProps) {
  const {nodes, materials} = useGLTF(modelPath, true) as DreiGLTF;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.692, 0, 0.539]} rotation={[0, -0.122, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[-0.153, 0, -0.65]}
            rotation={[0, -0.412, 0]}
            scale={0.872}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[0.593, 0, -0.545]}
            rotation={[0, 0.282, 0]}
            scale={0.705}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[-0.47, 0, -0.437]}
            rotation={[0, 1.213, 0]}
            scale={0.554}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[-0.19, 0, 0.738]}
            rotation={[0, -0.412, 0]}
            scale={0.872}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[0.191, 0, 0.738]}
            rotation={[-Math.PI, 1.486, -Math.PI]}
            scale={0.728}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[-0.573, 0, 0.53]}
            rotation={[-Math.PI, 1.486, -Math.PI]}
            scale={0.728}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <group
            position={[-0.789, 0, 0.006]}
            rotation={[-Math.PI, 1.486, -Math.PI]}
            scale={0.471}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials.gifts}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials["gifts.bands"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.lametta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.lametta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.lametta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.lametta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.branch}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.marbles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.needlaes_eevee}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.top_star}
            position={[0, 2.954, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelPath, true);
