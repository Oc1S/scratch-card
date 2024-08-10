import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import { Demo } from '../components/Demo';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="container flex flex-col items-center gap-6 py-12 pt-24">
      <Heading as="h1" className="text-primary main_title text-6xl">
        {siteConfig.title}
      </Heading>
      <p className="text-2xl">{siteConfig.tagline}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="scratch,scratch-card,react,reactjs,vanilla,user experience,developer experience,UX,DX"
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
