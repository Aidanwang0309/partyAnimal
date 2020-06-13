import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import css from "./LabelCard.module.scss"


export const LabelCard = (props) => {
  const { avatar, name, createAt, description } = props
  return (
    <div className={css.LabelCard}>
      <div className={css.LabelCardAvatar} style={{ 'backgroundImage': `url(${avatar})` }} />

      <div className={css.LabelCardHeader}>
        <h3 className={css.LabelCardHeaderName}>{name}</h3>
      </div>
      
      <p className={css.LabelCardDescription}>{description}</p>
    </div>
  )
}

LabelCard.propTypes = {
}

LabelCard.defaultProps = {
}

export default LabelCard;
