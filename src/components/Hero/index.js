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
} from "./StyledComponents"
import BasicButton from "../BasicButton"
import Cart from "../Cart"

function HomepageHero() {
  return (
    <Section>
      <HeroImageComponent src={HeroImage} alt="Vector Monitor" />
      <HeroWrapper>
        <Cart />
        <HeroMainWrapper>
          <Decor src={HeroDecor} />
          <H1>
            Don't waste time
            <br />
            on boring things
          </H1>
          <BasicButton onClickHandler={() => console.log(true)}>
            GO EXPLORE
          </BasicButton>
        </HeroMainWrapper>
        <HeroBackgroundComponent src={HeroBackground} />
      </HeroWrapper>
    </Section>
  )
}

export default HomepageHero
