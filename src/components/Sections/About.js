// import React from "react";
// import styled from "styled-components";
// import Img from "../Base/Img";
// import Span from "../Base/Span";
// import ContainedLinkButton from "../Buttons/ContainedLinkButton";
// import OutlineLinkButton from "../Buttons/OutlineLinkButton";
// import H2 from "../Headers/H2";
// import H5 from "../Headers/H5";

// const TwoColumnContainer = styled.div`
//   display: grid;
//   gap: 5em;

//   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
//     grid-template-columns: 2fr 5fr;
//   }
// `;

// const Technology = styled(Span)`
//   padding: 0.25em 0.5em;
//   border-radius:var(--border-radius)};
//   background-color: #2d3748;
//   text-align: middle;
// `;

// const About = () => (
//   <>
//     <H2 id="about">About Me</H2>

//     <TwoColumnContainer>
//       <Img
//         src="https://avatars.githubusercontent.com/u/6326660?v=4"
//         style={{ borderRadius: "50%" }}
//       />
//       <div>
//         <H5>
//           👋 Hi, my name is Jason&nbsp;Zhen, a full&nbsp;stack software engineer
//           based in San&nbsp;Francisco. I am currently contributing to on an open
//           source project called Water&nbsp;The&nbsp;Trees, a platform that
//           crowdsources tree mapping, planting, and maintenance.
//         </H5>
//         <H5>
//           Proficient in
//           <Technology>React</Technology>, <Technology>Redux</Technology>,{" "}
//           <Technology>Node</Technology>, <Technology>Ruby on Rails</Technology>,{" "}
//           <Technology>PostgreSQL</Technology>, and{" "}
//           <Technology>MongoDB</Technology>.
//         </H5>
//         <H5>
//           During my free time, I enjoy reading comic books and listening to
//           music.
//         </H5>
//         <OutlineLinkButton href="#">My résumé</OutlineLinkButton>
//         <ContainedLinkButton href="#contact">Hire Me</ContainedLinkButton>
//       </div>
//     </TwoColumnContainer>
//   </>
// );

// export default About;
