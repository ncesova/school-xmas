import {useGLTF} from "@react-three/drei";
import {Mesh, MeshStandardMaterial} from "three";
import {GLTF} from "three-stdlib";
import {GroupProps} from "@react-three/fiber";
import modelPath from "./sarai.glb";

export type DreiGLTF = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, MeshStandardMaterial>;
};

export function School(props: GroupProps) {
  const {nodes, materials} = useGLTF(modelPath, true) as DreiGLTF;
  return (
    <group
      {...props}
      rotation={[0, Math.PI / 2, 0]}
      position={[0, -3, -15]}
      dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials["Material.021"]}
        position={[-13.046, 1.759, -1.613]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube321.geometry}
        material={materials["Material.021"]}
        position={[-13.266, 1.762, -4.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube322.geometry}
        material={materials["Material.021"]}
        position={[-13.266, 1.762, 3.107]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube323.geometry}
        material={materials["Material.021"]}
        position={[-12.709, 1.761, -4.336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube324.geometry}
        material={materials["Material.021"]}
        position={[-12.709, 1.761, 5.435]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube334.geometry}
        material={materials["Material.056"]}
        position={[-12.994, 7.769, -0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube325.geometry}
        material={materials["Material.056"]}
        position={[-13.005, 7.949, -0.511]}
      />
      <group position={[2.16, 0, 0]} scale={13.411}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.plintus}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials.krisha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно005.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 0.878, -11.94]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно012.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 2.748, -11.94]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно014.geometry}
        material={materials["Material.001"]}
        position={[-11.848, 2.145, -13.779]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно019.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 4.573, -11.94]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно021.geometry}
        material={materials["Material.001"]}
        position={[-11.848, 3.97, -13.779]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно026.geometry}
        material={materials["Material.001"]}
        position={[-11.109, 6.254, -11.94]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно028.geometry}
        material={materials["Material.001"]}
        position={[-11.848, 6.254, -13.779]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно007.geometry}
        material={materials["Material.001"]}
        position={[-11.737, 0.878, -1.844]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно035.geometry}
        material={materials["Material.001"]}
        position={[-11.89, 4.573, -3.525]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно033.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 0.878, 11.894]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно040.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 2.748, 11.894]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно047.geometry}
        material={materials["Material.001"]}
        position={[-11.129, 4.573, 11.894]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно054.geometry}
        material={materials["Material.001"]}
        position={[-11.093, 6.254, 11.894]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно056.geometry}
        material={materials["Material.001"]}
        position={[-11.896, 6.254, 13.792]}
        rotation={[-Math.PI, 0, 0]}
        scale={-3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно061.geometry}
        material={materials["Material.042"]}
        position={[-11.89, 4.573, 3.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно066.geometry}
        material={materials["Material.001"]}
        position={[-11.89, 2.837, -3.525]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно067.geometry}
        material={materials["Material.001"]}
        position={[-11.89, 2.837, 3.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно068.geometry}
        material={materials["Material.001"]}
        position={[-11.89, 0.953, -3.525]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно069.geometry}
        material={materials["Material.001"]}
        position={[-11.89, 0.953, 3.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно070.geometry}
        material={materials["Material.001"]}
        position={[-11.723, 0.891, 1.999]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[-11.844, 0.369, -13.854]}
        scale={[0.036, 0.375, 0.452]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.004"]}
        position={[-11.259, 3.651, -4.987]}
        scale={[0.025, 3.736, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[-1.956, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.005"]}
        position={[-0.484, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.005"]}
        position={[0.984, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.005"]}
        position={[2.445, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.005"]}
        position={[3.964, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.005"]}
        position={[5.531, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.005"]}
        position={[7.086, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.005"]}
        position={[8.669, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.005"]}
        position={[10.228, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.005"]}
        position={[11.718, 4.626, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.005"]}
        position={[-1.956, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.005"]}
        position={[-0.484, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.005"]}
        position={[0.984, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.005"]}
        position={[2.445, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.005"]}
        position={[3.964, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.005"]}
        position={[5.531, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["Material.005"]}
        position={[7.086, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["Material.005"]}
        position={[8.669, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["Material.005"]}
        position={[10.228, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["Material.005"]}
        position={[11.718, 2.863, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["Material.005"]}
        position={[-1.956, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Material.005"]}
        position={[-0.484, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["Material.005"]}
        position={[0.984, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["Material.005"]}
        position={[2.445, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials["Material.005"]}
        position={[3.964, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials["Material.005"]}
        position={[5.531, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.005"]}
        position={[7.086, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["Material.005"]}
        position={[8.669, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["Material.005"]}
        position={[10.228, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["Material.005"]}
        position={[11.718, 1.243, 15.225]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials["Material.005"]}
        position={[-6.205, 4.626, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["Material.005"]}
        position={[-5.122, 4.626, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["Material.005"]}
        position={[-6.205, 2.863, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials["Material.005"]}
        position={[-5.122, 2.863, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials["Material.005"]}
        position={[-6.205, 1.243, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials["Material.005"]}
        position={[-5.122, 1.243, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials["Material.005"]}
        position={[-3.586, 4.626, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials["Material.005"]}
        position={[-3.586, 2.863, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials["Material.005"]}
        position={[-3.586, 1.349, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно059.geometry}
        material={materials["Material.001"]}
        position={[-11.738, 6.126, -1.787]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно072.geometry}
        material={materials["Material.001"]}
        position={[-11.738, 6.126, -0.54]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно073.geometry}
        material={materials["Material.001"]}
        position={[-11.738, 6.126, 0.717]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно074.geometry}
        material={materials["Material.001"]}
        position={[-11.738, 6.126, 1.964]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно071.geometry}
        material={materials["Material.001"]}
        position={[-11.868, 6.126, -3.535]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно075.geometry}
        material={materials["Material.001"]}
        position={[-11.868, 6.126, 3.638]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials["Material.025"]}
        position={[-10.922, 5.414, 3.593]}
        scale={[1, 0.064, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials["Material.024"]}
        position={[-10.922, 5.658, 3.593]}
        scale={[1, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials["Material.022"]}
        position={[-11.516, 5.414, 1.47]}
        scale={[0.252, 0.064, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials["Material.023"]}
        position={[-11.516, 5.658, 1.47]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={materials["Material.055"]}
        position={[-11.254, 4.765, 1.282]}
        scale={[0.502, 0.064, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={materials["Material.039"]}
        position={[-10.189, 5.414, -12.029]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials["Material.038"]}
        position={[-10.189, 5.658, -12.029]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={materials["Material.032"]}
        position={[-10.189, 5.414, 11.947]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={materials["Material.033"]}
        position={[-10.189, 5.658, 11.947]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials["Material.035"]}
        position={[-10.942, 5.414, -13.856]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={materials["Material.034"]}
        position={[-10.942, 5.658, -13.856]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials["Material.031"]}
        position={[-10.943, 5.415, 13.858]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={materials["Material.028"]}
        position={[-10.943, 5.658, 13.858]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials["Material.037"]}
        position={[-8.4, 5.414, -14.078]}
        scale={[0.199, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={materials["Material.036"]}
        position={[-8.4, 5.658, -14.078]}
        scale={[0.199, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={materials["Material.030"]}
        position={[-8.405, 5.415, 14.162]}
        scale={[0.199, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={materials["Material.029"]}
        position={[-8.405, 5.658, 14.162]}
        scale={[0.199, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={materials["Material.003"]}
        position={[-11.848, 0.369, 13.856]}
        scale={[0.036, 0.375, 0.452]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно042.geometry}
        material={materials["Material.001"]}
        position={[-11.863, 2.145, 13.914]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Окно049.geometry}
        material={materials["Material.001"]}
        position={[-11.863, 3.97, 13.914]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.763}
      />
      <group position={[-12.009, 1.004, 0.013]} scale={[1, 1, 1.503]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_2.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_3.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_4.geometry}
        material={materials["Material.010"]}
        position={[-12.992, -0.899, 0.037]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.331, 0.346, 0.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_4001.geometry}
        material={materials["Material.010"]}
        position={[-12.992, -0.899, 1.431]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.331, 0.346, 0.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.040"]}
        position={[-12.215, 1.942, 0.014]}
        scale={[1, 0.052, 1.659]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.012"]}
        position={[-13.155, 2.443, -0.597]}
        rotation={[1.111, 0.008, 1.51]}
        scale={0.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.011"]}
        position={[-13.137, 2.023, -0.353]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.414}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["Material.012"]}
        position={[-13.142, 2.569, -0.323]}
        rotation={[1.298, 0.001, 1.534]}
        scale={0.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials["Material.012"]}
        position={[-13.139, 2.64, -0.079]}
        rotation={[1.565, 0, 1.57]}
        scale={0.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials["Material.012"]}
        position={[-13.146, 2.615, 0.184]}
        rotation={[1.841, 0.008, 1.605]}
        scale={0.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials["Material.012"]}
        position={[-13.161, 2.516, 0.396]}
        rotation={[2.029, 0.019, 1.627]}
        scale={0.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_1.geometry}
        material={materials.Screenshot_1}
        position={[-11.909, 5.617, 3.607]}
        rotation={[1.583, -0.001, 1.571]}
        scale={0.267}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.031"]}
        position={[-1.963, 5.415, 14.365]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={materials["Material.028"]}
        position={[-1.963, 5.658, 14.365]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={materials["Material.031"]}
        position={[-1.963, 5.415, -14.428]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={materials["Material.028"]}
        position={[-1.963, 5.658, -14.428]}
        scale={[1, 0.052, 0.98]}
      />
      <group position={[-1.965, 5.918, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[-1.962, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[-0.479, 5.918, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[-0.479, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[0.992, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[2.453, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[3.986, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[5.501, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[7.071, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[8.603, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[10.178, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[11.71, 6.876, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[0.992, 5.916, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[2.459, 5.921, 15.231]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[3.991, 5.916, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[5.503, 5.921, 15.231]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[7.092, 5.916, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[8.614, 5.921, 15.231]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[10.191, 5.916, 15.235]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[11.713, 5.921, 15.231]} scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials["Material.005"]}
        position={[11.72, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials["Material.005"]}
        position={[10.22, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={materials["Material.005"]}
        position={[8.647, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials["Material.005"]}
        position={[7.069, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={materials["Material.005"]}
        position={[5.55, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={materials["Material.005"]}
        position={[3.984, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials["Material.005"]}
        position={[2.428, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={materials["Material.005"]}
        position={[1.021, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={materials["Material.005"]}
        position={[-0.464, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={materials["Material.005"]}
        position={[-1.955, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={materials["Material.005"]}
        position={[11.72, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={materials["Material.005"]}
        position={[10.22, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={materials["Material.005"]}
        position={[8.647, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={materials["Material.005"]}
        position={[7.069, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={materials["Material.005"]}
        position={[5.55, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials["Material.005"]}
        position={[3.984, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={materials["Material.005"]}
        position={[2.428, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube127.geometry}
        material={materials["Material.005"]}
        position={[1.021, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={materials["Material.005"]}
        position={[-0.464, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={materials["Material.005"]}
        position={[-1.955, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={materials["Material.005"]}
        position={[11.72, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={materials["Material.005"]}
        position={[10.22, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={materials["Material.005"]}
        position={[8.647, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube133.geometry}
        material={materials["Material.005"]}
        position={[7.069, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={materials["Material.005"]}
        position={[5.55, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={materials["Material.005"]}
        position={[3.984, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={materials["Material.005"]}
        position={[2.428, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={materials["Material.005"]}
        position={[1.021, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={materials["Material.005"]}
        position={[-0.464, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={materials["Material.005"]}
        position={[-1.955, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={materials["Material.005"]}
        position={[-3.549, 4.626, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials["Material.005"]}
        position={[-5.162, 4.626, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={materials["Material.005"]}
        position={[-3.549, 2.863, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube143.geometry}
        material={materials["Material.005"]}
        position={[-5.162, 2.863, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials["Material.005"]}
        position={[-3.549, 1.243, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials["Material.005"]}
        position={[-5.162, 1.243, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={materials["Material.005"]}
        position={[-6.211, 4.626, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials["Material.005"]}
        position={[-6.211, 2.863, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube148.geometry}
        material={materials["Material.005"]}
        position={[-6.211, 1.243, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={materials["Material.017"]}
        position={[-3.926, 4.203, 14.622]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={materials["Material.017"]}
        position={[-4.388, 1.206, 14.668]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube151.geometry}
        material={materials["Material.017"]}
        position={[-8.027, 4.718, 14.814]}
        scale={[0.502, 0.064, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube152.geometry}
        material={materials["Material.017"]}
        position={[-6.69, 4.718, 14.814]}
        scale={[0.502, 0.064, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={materials["Material.017"]}
        position={[-3.91, 4.203, -14.826]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube154.geometry}
        material={materials["Material.017"]}
        position={[-4.372, 1.206, -14.829]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube156.geometry}
        material={materials["Material.017"]}
        position={[-6.69, 4.718, -14.836]}
        scale={[0.502, 0.064, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube157.geometry}
        material={materials["Material.017"]}
        position={[-11.39, 1.206, 14.648]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube158.geometry}
        material={materials["Material.019"]}
        position={[-11.396, 1.206, -14.846]}
        scale={[0.451, 0.003, 0.201]}
      />
      <group
        position={[-6.663, 2.228, 14.998]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2_1.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2_2.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2_3.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-6.663, 0.648, 14.998]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2001_1.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2001_2.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2001_3.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-6.663, 4, 14.998]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2002_1.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2002_2.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2002_3.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-6.686, 5.546, 15.014]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2003_1.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2003_2.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2003_3.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube159.geometry}
        material={materials["Material.005"]}
        position={[-6.205, 6.192, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Виндов.geometry}
        material={materials["Material.005"]}
        position={[-5.122, 6.192, 14.742]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <group position={[-3.611, 5.923, 14.778]} scale={[0.21, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube165_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube165_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group position={[-3.611, 6.889, 14.778]} scale={[0.21, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[-8.683, 2.228, -15.003]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2004_1.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2004_2.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2004_3.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-8.683, 0.63, -15.003]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2008.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2008_1.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2008_2.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-8.683, 4.001, -15.003]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2009.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2009_1.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2009_2.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[-8.683, 5.546, -15.003]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[4.482, 4.812, 4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2010.geometry}
          material={materials.Screenshot_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2010_1.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_2010_2.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube163.geometry}
        material={materials["Material.005"]}
        position={[-5.162, 6.186, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube164.geometry}
        material={materials["Material.005"]}
        position={[-6.211, 6.186, -14.751]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <group
        position={[-3.611, 5.923, -14.76]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.21, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube170_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube170_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[-3.611, 6.889, -14.76]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.21, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube171.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube171_1.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube165.geometry}
        material={materials["Material.022"]}
        position={[-4.412, 5.414, -2.654]}
        scale={[0.252, 0.064, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube168.geometry}
        material={materials["Material.023"]}
        position={[-4.412, 5.658, -2.654]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube169.geometry}
        material={materials["Material.022"]}
        position={[-4.412, 5.414, 8.452]}
        scale={[0.252, 0.064, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube170.geometry}
        material={materials["Material.023"]}
        position={[-4.412, 5.658, 8.452]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube201.geometry}
        material={materials["Material.031"]}
        position={[11.701, 5.415, 10.119]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube202.geometry}
        material={materials["Material.028"]}
        position={[11.701, 5.658, 10.119]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube273.geometry}
        material={materials["Material.031"]}
        position={[-1.963, 5.415, -10.099]}
        scale={[1, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={materials["Material.028"]}
        position={[-1.963, 5.658, -10.099]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube285.geometry}
        material={materials["Material.031"]}
        position={[-4.532, 5.415, -10.3]}
        scale={[0.132, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube286.geometry}
        material={materials["Material.028"]}
        position={[-4.532, 5.658, -10.3]}
        scale={[0.132, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube287.geometry}
        material={materials["Material.031"]}
        position={[-2.958, 5.415, 10.261]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.108, 0.064, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube288.geometry}
        material={materials["Material.028"]}
        position={[-2.958, 5.658, 10.261]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.108, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube289.geometry}
        material={materials["Material.005"]}
        position={[14.687, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube290.geometry}
        material={materials["Material.005"]}
        position={[13.187, 4.626, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube291.geometry}
        material={materials["Material.005"]}
        position={[14.687, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube292.geometry}
        material={materials["Material.005"]}
        position={[13.187, 2.863, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube293.geometry}
        material={materials["Material.005"]}
        position={[14.687, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube294.geometry}
        material={materials["Material.005"]}
        position={[13.187, 1.243, -15.234]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <group
        position={[14.686, 5.912, -15.246]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube317_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube317_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[13.169, 5.912, -15.245]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.352, 0.21, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube318_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube318_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_14.geometry}
        material={materials["Material.046"]}
        position={[-3.251, 0.441, 15.139]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_14001.geometry}
        material={materials["Material.046"]}
        position={[-4.086, 0.441, 15.139]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.048"]}
        position={[-4.154, 0.825, 14.788]}
        rotation={[0.112, 0, 0]}
        scale={0.351}
      />
      <group
        position={[-6.926, 7.402, 0.977]}
        rotation={[0, 1.571, 0]}
        scale={[19.173, 15.716, 19.173]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_6_1.geometry}
          material={materials.Screenshot_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screenshot_6_2.geometry}
          material={materials["Material.050"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials["Material.054"]}
        position={[-11.254, 4.765, -0.012]}
        scale={[0.502, 0.064, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials["Material.017"]}
        position={[-11.254, 4.765, -1.279]}
        scale={[0.502, 0.064, 0.2]}
      />
      <group position={[-12.419, 1.391, -1.477]} scale={[0.343, 0.366, 0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_1.geometry}
          material={materials.wind}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_2.geometry}
          material={materials["Material.052"]}
        />
      </group>
      <group
        position={[-12.244, 1.391, 1.505]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.343, 0.366, 0.043]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096_1.geometry}
          material={materials.wind}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096_2.geometry}
          material={materials["Material.052"]}
        />
      </group>
      <group
        position={[-1.965, 5.918, -15.253]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.352, -0.21, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube324_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube324_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[-0.437, 5.918, -15.253]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.352, -0.21, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube325_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube325_2.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={materials["Material.005"]}
        position={[-1.956, 7.05, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={materials["Material.005"]}
        position={[-0.452, 7.05, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={materials["Material.005"]}
        position={[1.01, 7.05, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials["Material.005"]}
        position={[1.01, 6.256, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={materials["Material.005"]}
        position={[2.47, 7.05, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={materials["Material.005"]}
        position={[2.47, 6.256, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={materials["Material.005"]}
        position={[3.947, 7.05, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={materials["Material.005"]}
        position={[3.947, 6.256, -15.243]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={materials["Material.005"]}
        position={[5.539, 7.061, -15.241]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={materials["Material.005"]}
        position={[5.539, 6.266, -15.241]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={materials["Material.005"]}
        position={[7.091, 7.061, -15.241]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={materials["Material.005"]}
        position={[7.091, 6.266, -15.241]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials["Material.005"]}
        position={[8.672, 7.071, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials["Material.005"]}
        position={[8.672, 6.277, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials["Material.005"]}
        position={[10.215, 7.071, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={materials["Material.005"]}
        position={[10.215, 6.277, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube297.geometry}
        material={materials["Material.005"]}
        position={[11.733, 7.071, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube298.geometry}
        material={materials["Material.005"]}
        position={[11.733, 6.277, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube299.geometry}
        material={materials["Material.005"]}
        position={[13.163, 7.071, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube300.geometry}
        material={materials["Material.005"]}
        position={[14.689, 7.071, -15.239]}
        rotation={[0, 1.571, 0]}
        scale={[0.059, 0.37, 0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Виндов009.geometry}
        material={materials["Material.005"]}
        position={[-11.699, 4.638, -1.919]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube160.geometry}
        material={materials["Material.017"]}
        position={[-11.401, 4.203, 4.63]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube301.geometry}
        material={materials["Material.017"]}
        position={[-11.729, 1.177, 4.391]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube302.geometry}
        material={materials["Material.017"]}
        position={[-11.729, 1.675, 4.391]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube303.geometry}
        material={materials["Material.017"]}
        position={[-11.401, 4.203, 2.438]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube304.geometry}
        material={materials["Material.017"]}
        position={[-11.731, 1.177, 2.625]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube305.geometry}
        material={materials["Material.017"]}
        position={[-11.731, 1.675, 2.625]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube306.geometry}
        material={materials["Material.017"]}
        position={[-10.617, 4.203, -11.252]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube307.geometry}
        material={materials["Material.017"]}
        position={[-10.945, 1.177, -11.491]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube308.geometry}
        material={materials["Material.017"]}
        position={[-10.945, 1.675, -11.491]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube309.geometry}
        material={materials["Material.017"]}
        position={[-10.617, 4.203, -12.935]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube310.geometry}
        material={materials["Material.017"]}
        position={[-10.947, 1.177, -12.748]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube311.geometry}
        material={materials["Material.017"]}
        position={[-10.947, 1.675, -12.748]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Виндов005.geometry}
        material={materials["Material.005"]}
        position={[-11.214, 6.313, -10.312]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube312.geometry}
        material={materials["Material.017"]}
        position={[-11.401, 4.203, -2.56]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube313.geometry}
        material={materials["Material.017"]}
        position={[-11.729, 1.177, -2.798]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube314.geometry}
        material={materials["Material.017"]}
        position={[-11.729, 1.675, -2.798]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube315.geometry}
        material={materials["Material.017"]}
        position={[-11.401, 4.203, -4.752]}
        scale={[1.002, 0.064, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube316.geometry}
        material={materials["Material.017"]}
        position={[-11.731, 1.177, -4.565]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube317.geometry}
        material={materials["Material.017"]}
        position={[-11.731, 1.675, -4.565]}
        scale={[0.451, 0.003, 0.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials["Material.025"]}
        position={[-10.922, 5.414, -3.647]}
        scale={[1, 0.064, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials["Material.024"]}
        position={[-10.922, 5.658, -3.647]}
        scale={[1, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screenshot_1001.geometry}
        material={materials.Screenshot_1}
        position={[-11.909, 5.617, -3.602]}
        rotation={[1.583, -0.001, 1.571]}
        scale={0.267}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube318.geometry}
        material={materials["Material.053"]}
        position={[-11.516, 7.186, 1.47]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube319.geometry}
        material={materials["Material.049"]}
        position={[-11.693, 7.186, -0.9]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube320.geometry}
        material={materials["Material.026"]}
        position={[-11.693, 7.186, 6.281]}
        scale={[0.252, 0.052, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube326.geometry}
        material={materials["Material.028"]}
        position={[-1.963, 7.793, -10.099]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube252.geometry}
        material={materials["Material.038"]}
        position={[-10.324, 7.202, -10.079]}
        scale={[1, 0.052, 0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube327.geometry}
        material={materials["Material.005"]}
        position={[15.584, 7.156, -10.195]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube328.geometry}
        material={materials["Material.005"]}
        position={[15.584, 6.18, -11.512]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Виндов001.geometry}
        material={materials["Material.005"]}
        position={[-11.214, 6.313, 5.586]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.059, -0.476, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube155.geometry}
        material={materials["Material.017"]}
        position={[-8.052, 4.718, -14.836]}
        scale={[0.502, 0.064, 0.2]}
      />
      <group
        position={[-13.104, 1.433, -1.327]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={15.677}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Snowflake_Snowflake_0.geometry}
            material={materials.Snowflake}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-13.099, 0.695, 1.495]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={11.031}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Snowflake_Snowflake_0001.geometry}
            material={materials.Snowflake}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-11.745, 7.16, -1.327]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.247, 1.508, 1.508]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <group
        position={[-11.918, 7.16, -3.602]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.178}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <group
        position={[-11.918, 7.16, 3.583]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.178}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_3.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_4.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_5.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <group
        position={[-11.333, 7.16, -11.875]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.05, 1.178, 1.178]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_3.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_4.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_5.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <group
        position={[-11.333, 7.16, 5.652]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.05, 1.178, 1.178]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_3.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_4.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_5.geometry}
          material={materials["Material.043"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.051"]}
        position={[-9.852, 8.083, -8.792]}
        rotation={[-Math.PI, 0, -0.107]}
        scale={[1.292, 1.292, 2.499]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.051"]}
        position={[-10.502, 8.991, -2.398]}
        rotation={[0.766, -0.415, -2.238]}
        scale={1.185}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.051"]}
        position={[-10.372, 8.997, 2.388]}
        rotation={[-0.472, 0.758, -2.356]}
        scale={1.383}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.051"]}
        position={[-10.395, 8.075, -5.458]}
        rotation={[0, 0, -Math.PI]}
        scale={1.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.051"]}
        position={[-10.618, 7.997, 6.456]}
        rotation={[-3.126, -0.003, -0.202]}
        scale={[1.185, 1.185, 2.293]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.051"]}
        position={[-12.856, 2.359, -1.324]}
        rotation={[2.944, 0.339, -0.02]}
        scale={0.227}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.051"]}
        position={[-10.12, 9.307, -0.396]}
        rotation={[-0.472, 0.758, -2.356]}
        scale={1.383}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.051"]}
        position={[-9.936, 8.037, 13.453]}
        rotation={[0.709, 0.501, -2.822]}
        scale={1.383}
      />
    </group>
  );
}

useGLTF.preload(modelPath, true);
