import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Header } from "../components/header";
import { IntuitLogo } from "../components/intuitlogo";
import { FooterImage } from "../components/footerimage";
import Numaflow from "../assets/numaflow.svg"
import Numalogic from "../assets/numalogic.svg"
import Panda1 from "../assets/panda1.svg"
import Panda2 from "../assets/panda2.svg"
import Ellipse1 from "../assets/ellipse1.svg"
import Glow from "../assets/glow.svg"
import Spark from "../assets/spark.svg"
import Code from "../assets/code.svg"
import Wavyline from "../assets/wavyline.svg"
import Straightline from "../assets/straightline.svg"
import IceB from "../images/iceberg.png"
import Wave from "../images/wave.png"

const IndexPage = () => {
  const parallax = React.useRef();

  return (
    <Layout>
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        {/* Screen 1 */}
        <ParallaxLayer
          offset={0}
          style={{ display: 'block', justifyContent: 'center', alignItems: 'center', zIndex: 900 }}>
          <div>
            <div className="mx-auto p-5">
              <Fade>
                <Header />
              </Fade>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', opacity: '1', marginTop: "0em" }}>
          <div className="mx-auto text-center " style={{ width: '100%', top: '0', left: '0' }}>
            <img src={IceB} className="mx-auto mt-[-20em]" style={{ minWidth: '1440px', maxWidth: '1440px', transform: 'translate(-50%, 0)', marginLeft: '49.7%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.34}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', opacity: '1', marginTop: "0em" }}>
          <div style={{ maxWidth: '100%', width: '100%', textAlign: 'center' }}>
            <Panda1 className="mx-auto mt-[12.5em]" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
          <div className="mt-[29em]">
            <Fade>
              <h1 style={{ lineHeight: "1.2em" }} className="lg:text-[40px] max-w-[800px] md:text-[32px] text-[26px] font-bold text-white text-center mt-[-10px]">Real-time data processing and AI analytics&nbsp;on&nbsp;Kubernetes</h1>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.23}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', zIndex: 900 }}>
          <div>
            <div className="lg:mt-[36.5em] mt-[34.5em] space-x-2 justify-center">
              <Fade delay={300}>
                <a href="https://github.com/numaproj" target={"_blank"} rel="noopener noreferrer" className="inline-block text-white px-9 py-4 bg-blue hover:bg-blue/50 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  View on Github
                </a>
              </Fade>
            </div>
          </div>
        </ParallaxLayer>

        {/* Screen 2 */}
        <ParallaxLayer
          offset={1.05}
          speed={0.25}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: -1 }}>
          <div>
            {/* <Wave className="opacity-60 mb-[10em]"/> */}
            <Fade delay={500}>
              <img src={Wave} className="mx-auto mb-[10em]" style={{ width: '975px', maxWidth: '120%', transform: 'translate(-50%, 0)', marginLeft: '49.7%' }} />
            </Fade>
          </div>
        </ParallaxLayer>

        {/* Sparks */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] mr-[58em] pt-[10em]">
            <Fade fraction={1}>
              <AttentionSeeker delay={300} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.1}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mr-[35em] mb-[5em]">
            <Fade fraction={1}>
              <AttentionSeeker delay={300} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mt-[-6em] pr-[17em]">
            <Fade fraction={1} delay={500}>
              <AttentionSeeker delay={1500} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mt-[-20em] pl-[1em]">
            <Fade fraction={1} delay={1500}>
              <AttentionSeeker delay={1800} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] pl-[13em]">
            <Fade fraction={1} delay={300}>
              <AttentionSeeker delay={400} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[0em] pl-[29em]">
            <Fade fraction={1} delay={2000}>
              <AttentionSeeker delay={2100} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-.4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] ml-[59em]">
            <Fade fraction={1} delay={700}>
              <AttentionSeeker delay={900} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] pl-[38em]">
            <Fade fraction={1} delay={1300}>
              <AttentionSeeker delay={1500} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <Glow className="opacity-90" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.5}
          sticky={{ start: 1, end: 2.5 }}
          style={{ display: 'block', height: '200px', justifyContent: 'center', alignItems: 'start', zIndex: 1 }}>
          <div className="relative top-[10%]">
            <Fade delay={300} cascade damping={0.1}>
              <h1 className="z-100 text-[30px] font-semibold text-center">Open Source Tools</h1>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Fade delay={300}>
            <Numaflow className="md:w-[691px] sm:w-[441px] md:mb-[20%] sm:mb-[65%] sm:ml-[1em] md:ml-[-3.55em]" />
          </Fade>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.27}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative top-[0%]">
            <Fade delay={500}>
              <Ellipse1 className="sm:scale-90 md:scale-100" />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative top-[7%]">
            <Fade>
              <Panda2 className="sm:scale-90 md:scale-100" />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={0.27}

          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
          <h1 className="relative md:top-[12%] sm:top-[16%] text-[20px] max-w-30 whitespace-pre-wrap font-normal text-center">
            <Fade>
              A massively parallel, real-time data&nbsp;processing&nbsp;engine
            </Fade>
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.3}
          // sticky={{start: 1, end: 1.3}}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 110 }}>
          <div className="relative md:top-[9%] sm:top-[16%]">
            <Fade delay={500}>
              <a href="https://numaflow.numaproj.io/" target={"_blank"} rel="noopener noreferrer" className="mt-[3em] inline-block px-9 py-4 bg-blue hover:bg-blue/50 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Learn More
              </a>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.35}
          // sticky={{start: 1, end: 1.3}}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative md:top-[20%] sm:top-[26%]">
            <Fade delay={800}>
              <Straightline />
            </Fade>
          </div>
        </ParallaxLayer>


        {/* Screen 3 */}
        {/* Sparks */}
        <ParallaxLayer
          offset={3.7}
          speed={-3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] mr-[58em] pt-[10em]">
            <Fade fraction={1}>
              <AttentionSeeker delay={300} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}
          speed={-2.7}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mr-[35em] mb-[5em]">
            <Fade fraction={1}>
              <AttentionSeeker delay={300} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.8}
          speed={-3.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mt-[-6em] pr-[17em]">
            <Fade fraction={1} delay={500}>
              <AttentionSeeker delay={1500} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.1}
          speed={-3.3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="mt-[-20em] pl-[1em]">
            <Fade fraction={1} delay={1500}>
              <AttentionSeeker delay={1800} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.9}
          speed={-3.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] pl-[13em]">
            <Fade fraction={1} delay={300}>
              <AttentionSeeker delay={400} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.8}
          speed={-3.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[0em] pl-[29em]">
            <Fade fraction={1} delay={2000}>
              <AttentionSeeker delay={2100} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.6}
          speed={-3.4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] ml-[59em]">
            <Fade fraction={1} delay={700}>
              <AttentionSeeker delay={900} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.99}
          speed={0.4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pt-[6em] pl-[38em]">
            <Fade fraction={1} delay={1300}>
              <AttentionSeeker delay={1500} effect="flash">
                <Spark className="opacity-100" />
              </AttentionSeeker>
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.98}
          speed={0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative top-[0%]">
            <Fade delay={300}>
              <Glow className="opacity-100" />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative md:top-[-24%] sm:top-[-27%]">
            <Fade delay={800}>
              <AttentionSeeker delay={700} effect="headShake">
                <Code className="ml-[0em]" />
              </AttentionSeeker>
            </Fade>
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.45}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative top-[-30%]">
            <Fade delay={1300}>
              <Wavyline className="md:scale-100 sm:scale-75" />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="relative sm:top-[-50%] md:top-[0%] md:mb-[30em] ">
            <Fade delay={300}>
              <Numalogic className="sm:ml-[.5em] md:ml-[-2em] sm:scale-[63%] md:scale-[100%]" />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.27}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Fade delay={300}>
            <Ellipse1 className="sm:scale-90 md:scale-100 mb-[26em]" />
          </Fade>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Fade>
            <Panda2 className="sm:scale-90 md:scale-100 mb-[20em]" />
          </Fade>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.27}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <h2 className="text-[20px] font-normal mt-7 text-center">
              <div className="max-w-[600px] relative z-[2000]">
                <Fade delay={0}>
                  Tools for continuous real-time AI analytics including anomaly&nbsp;detection&nbsp;at&nbsp;scale
                </Fade>
              </div>
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.35}
          // sticky={{start: 1, end: 1.3}}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="flex mt-[19em] space-x-2 justify-center">
            <Fade delay={800}>
              <Straightline />
            </Fade>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.1}
          speed={0.3}
          // sticky={{start: 1, end: 1.3}}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
          <div className="flex space-x-2 mt-[1em] justify-center">
            <Fade delay={500}>
              <a href="https://numalogic.numaproj.io/" target={"_blank"} rel="noopener noreferrer" className="inline-block px-9 py-4 bg-blue hover:bg-blue/50 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Learn More
              </a>
            </Fade>
          </div>
        </ParallaxLayer>

        {/* Screen 4 */}
        <ParallaxLayer
          offset={3}
          speed={-2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <h1 className="mt-[-140px] text-[20px] opacity-80 font-semibold text-center">
              <Fade fraction={1} delay={400}>
                Created by
              </Fade>
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.07}
          speed={2}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9000 }}>
          <div>
            <div className="flex mt-[-140px] space-x-2 justify-center">
              <Fade fraction={1} delay={400}>
                <a href="https://www.intuit.com/" target={"_blank"} rel="noopener noreferrer">
                  <IntuitLogo />
                </a>
              </Fade>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.4}
          speed={1}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'bottom' }}>
          <FooterImage />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
