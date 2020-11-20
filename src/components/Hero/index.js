import React from "react"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"
import {
  HeroWrapper,
  Section,
  HeroMainWrapper,
  Decor,
  HeroImageComponent,
  HeroBackgroundComponent,
  H1,
  ButtonPosition,
} from "./StyledComponents"
import BasicButton from "../BasicButton"

function HomepageHero() {
  return (
    <Section>
      <HeroImageComponent src={HeroImage} alt="Vector Monitor" />
      <HeroWrapper>
        <HeroMainWrapper>
          <Decor src={HeroDecor} />
          <H1>
            Don't waste time
            <br />
            on boring things
          </H1>
          <ButtonPosition>
            <BasicButton animation onClickHandler={() => console.log(true)}>
              GO EXPLORE
            </BasicButton>
          </ButtonPosition>
        </HeroMainWrapper>
        <HeroBackgroundComponent src={HeroBackground} />
      </HeroWrapper>
    </Section>
  )
}

export default HomepageHero
