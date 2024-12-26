import {Canvas} from "@react-three/fiber";
import "./App.css";
import {School} from "./assets/models/school/School";
import {PresentationControls, Sky, Text3D} from "@react-three/drei";
import {Xmas} from "./assets/models/xmas/Xmas copy";
import fontPath from "./assets/fonts/Gabriela_Regular.json";
const SCALE = 3.5;

function App() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Canvas shadows>
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Math.PI / 2, Math.PI / 2]} // Horizontal limits
          config={{mass: 1, tension: 170, friction: 26}} // Spring config
        >
          <School receiveShadow />
          <Xmas
            position={[0 + 3, -1.5, -1.2]}
            scale={[SCALE + 0.2, SCALE + 0.2, SCALE + 0.2]}
          />
          <Xmas
            position={[0 - 3, -1.5, -1.2]}
            scale={[SCALE + 0.2, SCALE + 0.2, SCALE + 0.2]}
          />
          <Xmas position={[0 + 7, -1.5, -1.5]} scale={[SCALE, SCALE, SCALE]} />
          <Xmas position={[0 - 7, -1.5, -1.5]} scale={[SCALE, SCALE, SCALE]} />
          {/* @ts-ignore */}
          <Text3D font={fontPath} position={[-6, 1.5, -2]}>
            С НОВЫМ ГОДОМ!
            <meshPhongMaterial color={"#fa4848"} />
          </Text3D>
          <ambientLight intensity={1} color={"#ffffe3"} />
          <directionalLight
            castShadow
            intensity={3}
            position={[4, 4, 8]}
            // @ts-ignore
            lookAt={[0, 0, 0]}
            color={"white"}
          />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <mesh position={[0, -5.3, 0]}>
            <meshPhongMaterial color={"gray"} />
            <boxGeometry args={[80, 2, 30]} />
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
