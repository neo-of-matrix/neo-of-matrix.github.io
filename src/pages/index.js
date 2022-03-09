import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NumberRain from "@site/src/components/numberRain/number-rain";
import HomepageHeader from "@site/src/components/HomepageHeader";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() => (
        <Layout
          title={`${siteConfig.title}`}
          description={`${siteConfig.title}`}
        >
          <main className={styles.homeMain}>
            <HomepageHeader />
            <p className={styles.homeContent}>
              <NumberRain />
            </p>
          </main>
        </Layout>
      )}
    </BrowserOnly>
  );
}
