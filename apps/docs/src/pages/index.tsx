import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Demo } from '../components/Demo';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="scratch,scratch-card,react,reactjs,vanilla,user experience,develope experience,UX,DX"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className="mt-20 flex w-screen flex-col items-center bg-white/10 py-10">
        <Demo />
      </div>
    </Layout>
  );
}
