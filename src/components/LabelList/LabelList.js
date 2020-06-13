import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import css from "./labelList.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { LabelCard } from "../LabelCard"

export const LabelList = (Props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulRecordLabel {
          edges {
            node {
              labelName
              createdAt
              recordDescription {
                recordDescription
              }
              avatar {
                file {
                  url
                }
              }
            }
          }
        }
      }
  `)

  return (
    <div className={css.labelList}>
        {
          data.allContentfulRecordLabel.edges.map(edge => (<LabelCard
            avatar={edge.node.avatar ? edge.node.avatar.file.url : ""}
            name={edge.node.labelName}
            createAt={edge.node.createAt}
            description={edge.node.recordDescription.recordDescription}
          />
          ))
        }
    </div>
  )
}

LabelList.propTypes = {
}

LabelList.defaultProps = {
}

export default LabelList;
