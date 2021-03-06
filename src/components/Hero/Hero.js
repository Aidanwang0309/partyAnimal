import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import css from "./Hero.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import HEADERTITLE from "../../images/headerTitle.svg"


export const Hero = (Props) => {
    const data = useStaticQuery(graphql`
    query getHero {
        contentfulAsset(title: {eq:"hero"}) {
          id
          title
          file {
            url
          }
        }
      }
  `)

    return (
        <div className={css.hero}>
            <div className={css.heroContent}>
                <div className={css.title} style={{ 'backgroundImage': `url(${HEADERTITLE})` }} />
            </div>
            <div className={css.heroBackground} style={{ 'backgroundImage': `url(${data.contentfulAsset.file.url})` }} />

        </div>
    )
}

Hero.propTypes = {
}

Hero.defaultProps = {
}

export default Hero;
