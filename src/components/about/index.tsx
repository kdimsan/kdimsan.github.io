import React from "react";
import {
  Container,
  DevelopmentSkillsContent,
  Knowledge,
  SkillsContainer,
} from "./styles";
import { SectionProps } from "../projects";
import { DiHtml5, DiNodejsSmall, DiReact, DiCss3 } from "react-icons/di";
import { TbBrandTypescript, TbBrandJavascript } from "react-icons/tb";

export function About({ id, className }: SectionProps) {
  return (
    <Container className={className} id={id}>
      <h2>About</h2>
      <p>
        I have always been connected with computers, and decided since young
        that would work with it. But my "first love" was with hardware, so I
        started a graduation in computer engineering at UERJ in 2017. However,
        overtime I noticed that developing softwares were what I really enjoy.
      </p>

      <SkillsContainer>
        <h3>Skills</h3>
        <DevelopmentSkillsContent>
          <h4>Development</h4>
          <ul>
            <li className="react">
              <DiReact />
            </li>
            <li className="typescript">
              <TbBrandTypescript />
            </li>
            <li className="javascript">
              <TbBrandJavascript />
            </li>
            <li className="css">
              <DiCss3 />
            </li>
            <li className="html5">
              <DiHtml5 />
            </li>
            <li className="nodejs">
              <DiNodejsSmall />
            </li>
          </ul>
        </DevelopmentSkillsContent>
        <Knowledge>
          <h4>Knowledge</h4>
          <ul>
            <li>
              <span>Git & Github</span>
            </li>
            <li>
              <span>Axios</span>
            </li>
            <li>
              <span>Express</span>
            </li>
            <li>
              <span>SQLite</span>
            </li>
            <li>
              <span>SASS</span>
            </li>
            <li>
              <span>Styled-Components</span>
            </li>
          </ul>
        </Knowledge>
      </SkillsContainer>
    </Container>
  );
}
