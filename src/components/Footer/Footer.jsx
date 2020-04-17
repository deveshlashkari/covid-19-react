import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footerClass}>
        Made with &#10084; by{" "}
        <a target="_blank" href="https://deveshlashkari.me">
          Devesh Lashkari
        </a>
      </div>
    );
  }
}

export default Footer;
