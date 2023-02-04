import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <a target="_blank" href="https://hub.docker.com/r/windymelt/zmm"><img src="https://img.shields.io/docker/v/windymelt/zmm?label=DockerHub&sort=semver&style=for-the-badge" /></a>
          &nbsp;
          <a target="_blank" href="https://github.com/windymelt/zmm/stargazers"><img src="https://img.shields.io/github/stars/windymelt/zmm.svg?style=for-the-badge" /></a>
          &nbsp;
          <a target="_blank" href="https://github.com/windymelt/zmm/releases"><img src="https://img.shields.io/github/v/release/windymelt/zmm?display_name=tag&style=for-the-badge" /></a>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ZMM チュートリアル - 10min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function VideoShowCase(): JSX.Element {
    useEffect(() => {
        console.log("adding showcase");
        const container = document.querySelector('.js-video-showcase') as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'application/javascript';
    scriptUrl.src = 'https://embed.nicovideo.jp/watch/sm41490224/script?w=720&h=480';
    container.appendChild(scriptUrl);
    });
    return (<div className={clsx("js-video-showcase", styles.videoShowCase)}></div>);
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="VOICEVOX解説動画作成ツールZMMのページ">
      <HomepageHeader />
      <main>
        <VideoShowCase />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
