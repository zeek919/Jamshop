import React from "react"
import createMarkup from "../../functions/createMarkup"

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
import { graphql, StaticQuery } from "gatsby"

function HomepageHero() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsHero {
            nodes {
              title
              image
            }
          }

          allGraphCmsCta {
            nodes {
              text
              href
            }
          }
        }
      `}
      render={({ allGraphCmsHero, allGraphCmsCta }) => {
        const { title, image } = allGraphCmsHero.nodes[0]
        const { text, href } = allGraphCmsCta.nodes[0]

        return (
          <Section>
            <HeroImageComponent src={HeroImage} alt={image} />
            <HeroWrapper>
              <HeroMainWrapper>
                <Decor src={HeroDecor} />
                <H1 dangerouslySetInnerHTML={createMarkup(title)} />
                <ButtonPosition>
                  <BasicButton
                    animation
                    onClickHandler={() => console.log(true)}
                    href={href}
                  >
                    {text}
                  </BasicButton>
                </ButtonPosition>
              </HeroMainWrapper>
              <HeroBackgroundComponent src={HeroBackground} />
            </HeroWrapper>
          </Section>
        )
      }}
    />
  )
}

export default HomepageHero
