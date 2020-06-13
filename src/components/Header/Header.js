import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import css from "./Header.module.scss";

export const Header = ({ siteTitle }) => (
  <header className={css.header}>
    {/* <div> */}
    <h1 className={css.headerLogo}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    {/* </div> */}
    <ul>
      <li>
        <Link
          to="/"
        >
          首页
        </Link>
      </li>
      <li>
        <Link
          to="/labels/"
        >
          厂牌
        </Link>
      </li>
      <li>
        <Link
          to="/page-2/"
        >
          音乐人
        </Link>
      </li>
      <li>
        <Link
          to="/"
        >
          关于
        </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
