import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import watercolor1_ae from "./assets/watercolor1_ae.svg";
import watercolor1_gm from "./assets/watercolor1_gm.svg";
import watercolor1_mt from "./assets/watercolor1_mt.svg";
import watercolor1_pp from "./assets/watercolor1_pp.svg";
import watercolor1_rr from "./assets/watercolor1_rr.svg";

import watercolor2_ae from "./assets/watercolor2_ae.svg";
import watercolor2_gm from "./assets/watercolor2_gm.svg";
import watercolor2_mt from "./assets/watercolor2_mt.svg";
import watercolor2_pp from "./assets/watercolor2_pp.svg";
import watercolor2_rr from "./assets/watercolor2_rr.svg";

import watercolor3_ae from "./assets/watercolor3_ae.svg";
import watercolor3_gm from "./assets/watercolor3_gm.svg";
import watercolor3_mt from "./assets/watercolor3_mt.svg";
import watercolor3_pp from "./assets/watercolor3_pp.svg";
import watercolor3_rr from "./assets/watercolor3_rr.svg";

import watercolor4_ae from "./assets/watercolor4_ae.svg";
import watercolor4_gm from "./assets/watercolor4_gm.svg";
import watercolor4_mt from "./assets/watercolor4_mt.svg";
import watercolor4_pp from "./assets/watercolor4_pp.svg";
import watercolor4_rr from "./assets/watercolor4_rr.svg";

import watercolor5_ae from "./assets/watercolor5_ae.svg";
import watercolor5_gm from "./assets/watercolor5_gm.svg";
import watercolor5_mt from "./assets/watercolor5_mt.svg";
import watercolor5_pp from "./assets/watercolor5_pp.svg";
import watercolor5_rr from "./assets/watercolor5_rr.svg";

import stars from "./assets/stars.svg";

import watercolor6 from "./assets/watercolor6_xl.svg";
import "./index.css";

function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "white" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "white" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: "url(" + stars + ")",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={watercolor3_ae}
            style={{ width: "40%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={watercolor2_rr}
            style={{ display: "block", width: "30%", marginLeft: "55%" }}
          />
          <img
            src={watercolor2_gm}
            style={{ display: "block", width: "25%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={watercolor2_pp}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={watercolor5_ae}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={watercolor3_mt}
            style={{ display: "block", width: "70%", marginLeft: "10%" }}
          />
          <img
            src={watercolor4_ae}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={watercolor3_mt}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={watercolor2_ae}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={watercolor3_mt}
            style={{ display: "block", width: "60%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={watercolor1_rr}
            style={{ display: "block", width: "40%", marginLeft: "5%" }}
          />
          <img
            src={watercolor2_gm}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
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
          {/* <img src={url("server")} style={{ width: "20%" }} /> */}
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
        ></ParallaxLayer>

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
          {/* <img src={url("clients-main")} style={{ width: "40%" }} /> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
