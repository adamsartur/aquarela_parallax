import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { ReactComponent as Splash1 } from "./assets/splash1.svg";
import { ReactComponent as Splash2 } from "./assets/splash2.svg";
import { ReactComponent as Splash3 } from "./assets/splash3.svg";
import { ReactComponent as Splash4 } from "./assets/splash4.svg";
import "./index.css";
import stars from "./assets/stars.svg";

const colorGris = {
  green800: "#59574a",
  green600: "#778c79",
  green400: "#87bfb4",
  green100: "#eef2cf",
  red100: "#f2cfbb",
  red200: "#f3a2b1",
  red400: "#f36d78",
  red800: "#8c292c",
};

function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "white" }}>
      <Parallax ref={parallax} pages={3} style={{ top: "0", left: "0" }}>
        {/* Sections bg */}
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: colorGris.green400, opacity: 0.7 }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: 'rgb(36, 157, 215)', opacity: 0.7 }}
        />

        {/* Page Background */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: "url(" + stars + ")",
            backgroundSize: "cover",
          }}
        />

        {/* First frame */}

        <ParallaxLayer offset={0} speed={0.1} style={{ opacity: 0.2 }}>
          <Splash1
            style={{
              width: "100%",
              marginLeft: "-30%",
              marginTop: "-20%",
              color: colorGris.red400,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.3} style={{ opacity: 0.4 }}>
          <Splash2
            style={{
              width: "100%",
              marginLeft: "35%",
              color: colorGris.green400,
              marginTop: "-5%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9} style={{ opacity: 0.2 }}>
          <Splash3
            style={{
              width: "100%",
              marginLeft: "10%",
              color: colorGris.red100,
              marginBottom: "100%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.2} style={{ opacity: 0.4 }}>
          <Splash3
            style={{
              width: "70%",
              marginLeft: "25%",
              color: colorGris.red100,
              marginBottom: "80%",
            }}
          />
        </ParallaxLayer>

        {/* End of first frame */}

        {/* green double layered - pg 3 */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none", opacity: 0.4 }}
        >
          <Splash4
            style={{
              display: "block",
              width: "40%",
              marginLeft: "-10%",
              color: colorGris.red100,
              transform: "rotate(170deg)",
            }}
          />
        </ParallaxLayer>

        {/* end green double layered - pg 3 */}

        <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.3 }}>
          <Splash3
            style={{
              width: "30%",
              marginLeft: "55%",
              color: colorGris.green400,
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.8} style={{ opacity: 0.3 }}>
          <Splash2
            style={{
              display: "block",
              width: "20%",
              marginLeft: "70%",
              color: colorGris.red800,
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 0.4 }}>
          <Splash3
            style={{
              display: "block",
              width: "70%",
              marginLeft: "10%",
              color: colorGris.green100,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.5 }}>
          <Splash3
            style={{
              display: "block",
              width: "60%",
              marginLeft: "80%",
              color: colorGris.red400,
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.6} style={{ opacity: 0.6 }}>
          <Splash2
            style={{
              display: "block",
              width: "15%",
              marginLeft: "75%",
              color: colorGris.red800,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: 0.3,
          }}
        >
          <Splash1
            style={{
              display: "block",
              width: "60%",
              marginLeft: "15%",
              marginBottom: "25%",
              color: colorGris.green100,
              transform: "rotate(290deg)",
            }}
          />
          {/* <img src={url("earth")} style={{ width: "60%" }} /> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
          }}
        />

        {/* Fixed screens */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Content 1{/* <img src={url("server")} style={{ width: "20%" }} /> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Content 2
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          Content 3
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
