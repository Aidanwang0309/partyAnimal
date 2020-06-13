import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { LabelList, Layout, Banner } from "../components"
import css from "./pages.module.scss"


const Labels = () => {
  const data = useStaticQuery(graphql`
  query getLabelBanner {
      contentfulAsset(title: {eq:"labelBanner"}) {
        id
        title
        file {
          url
        }
      }
    }
`)

  return <Layout>
    <div className={css.labelListContainer}>
      <div className={css.labelListContainerHeader}>
        <Banner title="厂牌" image={data.contentfulAsset.file.url} />
      </div>
      <div className={css.labelListContainerContent}>
        <LabelList />
      </div>
    </div>
  </Layout>
}

export default Labels
