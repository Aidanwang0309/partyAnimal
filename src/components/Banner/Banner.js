
import React from "react"
import PropTypes from "prop-types"
import css from "./Banner.module.scss"


export const Banner = ({ title, image }) => {

    return (
        <div className={css.banner}>
            <div className={css.bannerTitle} >
                <h1 >{title}</h1>
                <div className={css.bannerTitleBg}></div>
            </div>
            <div className={css.bannerImage} style={{ 'backgroundImage': `url(${image})` }} />
        </div>
    )
}

Banner.propTypes = {
}

Banner.defaultProps = {
}

export default Banner;
