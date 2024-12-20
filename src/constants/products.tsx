import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import sidefolioAether from "public/images/aether-astra.png";
import sidefolioAether2 from "public/images/aether-astra-2.png";
import sidefolioAether3 from "public/images/aether-astra-3.png";
import sidefolioUmdLoop from "public/images/umd-loop.webp";
import sidefolioUmdLoop2 from "public/images/umd-loop-2.png";
import sidefolioUmdLoop3 from "public/images/umd-loop-3.png";

export const products = [
  {
    href: "https://www.umdloop.com/",
    title: "UMD Loop Mars Rover Development",
    description:
      "Pioneering the next generation of Mars exploration through robotics and autonomous systems.",
    thumbnail: sidefolioUmdLoop,
    images: [sidefolioUmdLoop, sidefolioUmdLoop2, sidefolioUmdLoop3],
    stack: ["ROS2", "Python", "OpenCV", "Matlab", "CAN"],
    slug: "ROS2",
    content: (
      <div>
      <p>
        UMD Loop is a competitive engineering team participating in the 
        University Rover Challenge (URC), an annual robotics competition where 
        collegiate teams from around the world design and build Mars rovers. The 
        competition challenges participants to develop robust, versatile rovers that 
        can assist astronauts in future Martian exploration by handling scientific, 
        navigational, and operational tasks.
      </p>
      <p>
        As a member of the Integration Sub-Team, my role focuses on ensuring seamless 
        communication and functionality across all rover systems. This includes working 
        with sub-teams responsible for the rover&apos;s drive system, robotic arm, scientific 
        instrumentation, and electrical subsystems to integrate core systems such as 
        motor control, autonomous navigation, and system-wide communications.
      </p>
      <p>
        My contributions have centered on the development and implementation of key 
        robotic functionalities:
        <ul>
          <li>
            <strong>Autonomous Navigation:</strong> Researching and implementing epipolar 
            geometry, stereo camera calibration, and depth estimation to enable precise 
            autonomous movement and obstacle avoidance.
          </li>
          <li>
            <strong>Core Communication:</strong> Facilitating CAN protocol-based 
            communication for motor controls and sensor data integration, ensuring 
            real-time responsiveness across the rover.
          </li>
          <li>
            <strong>Computer Vision:</strong> Applying advanced techniques such as 
            Scale-Invariant Feature Transform (SIFT) and disparity mapping for 3D scene 
            reconstruction and stereo vision.
          </li>
        </ul>
      </p>
      <p>
        Our team&apos;s research into stereo vision and depth mapping has involved deep 
        exploration of mathematical concepts like epipolar geometry and fundamental 
        matrix derivation. By calibrating and rectifying stereo cameras, we enable the 
        rover to compute accurate depth maps, an essential capability for navigating the 
        harsh and unknown terrains of Mars.
      </p>
      <p>
        The UMD Loop project embodies a unique combination of advanced robotics, 
        interdisciplinary collaboration, and real-world problem-solving. Through this 
        work, I have gained hands-on experience in system integration, robotics software 
        development, and cutting-edge computer vision techniques—all while contributing to 
        the broader mission of advancing planetary exploration.
      </p>
    </div>
    ),
  },
  {
    href: "https://aetherumd.github.io/aether-astra/",
    title: "Aether Gravitational Lensing",
    description:
      "Unveiling the Origins of the Universe with Cutting-Edge Simulations.",
    thumbnail: sidefolioAether,
    images: [sidefolioAether, sidefolioAether2, sidefolioAether3],
    stack: ["Nextjs", "Tailwindcss", "Aceternity UI", "React.js"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          Our team is working on a groundbreaking project aimed at uncovering the
          mysteries behind the formation of the first stars and galaxies in the 
          universe. While this research may not have a direct societal impact, its 
          contributions to the field of astrophysics could have far-reaching implications 
          for humanity&apos;s understanding of our cosmic origins.{" "}
        </p>
        <p>
          Leveraging the power of supercomputers and the unprecedented capabilities of the 
          James Webb Space Telescope (JWST), we are developing a model that will simulate 
          the universe&apos;s earliest star clusters and galaxies. A key challenge lies in replicating 
          the complex phenomenon of gravitational lensing, which distorts light from distant 
          galaxies, a feature the JWST is primed to observe.
        </p>{" "}
        <p>
          Our software pipeline, which applies these gravitational distortions to simulated 
          galaxies, will allow astronomers to compare our synthetic observations with real data 
          from JWST. Once complete, our work will be open source, providing a valuable tool for 
          the global astronomy community. Scientists, space agencies, and students alike will 
          benefit from our research as it unlocks new avenues for understanding the universe&apos;s origins.
        </p>{" "}
        <p>
          Why Is This Important?

          <ul>
            <li>
              <strong>Advancing Astronomy:</strong> This project provides deeper insights into galaxy formation, answering questions about the early universe that were previously out of reach.
            </li>
            <li>
              <strong>Global Collaboration:</strong> By making our tools publicly available, we support the broader astronomy community in advancing research on cosmic evolution.
            </li>
            <li>
              <strong>Inspiring Future Generations:</strong> Students and budding astronomers can use our research not only as a model for future scientific inquiry but as an example of what collaborative, high-tech projects can achieve in astrophysics.
            </li>
          </ul>
        </p>{" "}
        <p>
          Our project combines synthetic simulations and gravitational lensing effects in a 
          novel way, allowing us to simulate the distorted observations seen by the JWST. 
          Unlike past research, we aim to create highly detailed models of the universe, 
          factoring in these lensing phenomena to accurately mimic JWST&apos;s data.
        </p>{" "}
      </div>
    ),
  },
];

// export const products = [
//   {
//     href: "https://aceternity.com",
//     title: "Aceternity",
//     description:
//       "A design and development studio that focuses on building quality apps.",
//     thumbnail: sidefolioAceternity,
//     images: [sidefolioAceternity, sidefolioAceternity2],
//     stack: ["Nextjs", "Tailwindcss"],
//     slug: "aceternity",
//     content: (
//       <div>
//         <p>
//           Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
//           dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
//           cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
//           cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
//           non cupidatat duis esse velit ut culpa et.{" "}
//         </p>
//         <p>
//           Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
//           Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
//           sit aute fugiat incididunt nostrud consequat proident fugiat id.
//           Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
//           reprehenderit. Cillum Lorem veniam eu magna exercitation.
//           Reprehenderit adipisicing minim et officia enim et veniam Lorem
//           excepteur velit adipisicing et Lorem magna.
//         </p>{" "}
//       </div>
//     ),
//   },
//   {
//     href: "https://algochurn.com",
//     title: "Algochurn",
//     description:
//       "Practice for technical interviews with hands on coding challenges.",
//     thumbnail: sidefolioAlgochurn,
//     images: [sidefolioAlgochurn, sidefolioAlgochurn2],
//     stack: ["Nextjs", "Tailwindcss"],
//     slug: "algochurn",
//     content: (
//       <div>
//         <p>
//           Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
//           dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
//           cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
//           cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
//           non cupidatat duis esse velit ut culpa et.{" "}
//         </p>
//         <p>
//           Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
//           Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
//           sit aute fugiat incididunt nostrud consequat proident fugiat id.
//           Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
//           reprehenderit. Cillum Lorem veniam eu magna exercitation.
//           Reprehenderit adipisicing minim et officia enim et veniam Lorem
//           excepteur velit adipisicing et Lorem magna.
//         </p>{" "}
//       </div>
//     ),
//   },
//   {
//     href: "https://gomoonbeam.com",
//     title: "Moonbeam",
//     description:
//       "Never write from scratch again with Moonbeam, your AI first writing tool",
//     thumbnail: sidefolioMoonbeam,
//     images: [sidefolioMoonbeam, sidefolioMoonbeam2],
//     stack: ["Nextjs", "Tailwindcss"],
//     slug: "moonbeam",
//     content: (
//       <div>
//         <p>
//           Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
//           dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
//           cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
//           cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
//           non cupidatat duis esse velit ut culpa et.{" "}
//         </p>
//         <p>
//           Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
//           Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
//           sit aute fugiat incididunt nostrud consequat proident fugiat id.
//           Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
//           reprehenderit. Cillum Lorem veniam eu magna exercitation.
//           Reprehenderit adipisicing minim et officia enim et veniam Lorem
//           excepteur velit adipisicing et Lorem magna.
//         </p>{" "}
//       </div>
//     ),
//   },
//   {
//     href: "https://tailwindmasterkit.com",
//     title: "Tailwind Master Kit",
//     description:
//       "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
//     thumbnail: sidefolioTailwindMasterKit,
//     images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
//     stack: ["Nextjs", "Tailwindcss"],
//     slug: "tailwindmasterkit",
//     content: (
//       <div>
//         <p>
//           Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
//           dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
//           cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
//           cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
//           non cupidatat duis esse velit ut culpa et.{" "}
//         </p>
//         <p>
//           Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
//           Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
//           sit aute fugiat incididunt nostrud consequat proident fugiat id.
//           Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
//           reprehenderit. Cillum Lorem veniam eu magna exercitation.
//           Reprehenderit adipisicing minim et officia enim et veniam Lorem
//           excepteur velit adipisicing et Lorem magna.
//         </p>{" "}
//       </div>
//     ),
//   },
// ];
