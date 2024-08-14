import { FC } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { Hero, ComponentFeatures, ExperienceDemo, UsageDemo } from '../features/home';

const Block: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mt-8 px-8">{children}</div>;
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="scratch,scratch-card,react,reactjs,vanilla,user experience,developer experience,UX,DX"
    >
      <Hero />
      <main>
        <ComponentFeatures />
        <div className="mt-4 flex w-screen flex-col py-10">
          <div className="flex flex-col items-center justify-center">
            <Block>
              <Link id="experience" href="#experience" className="mb-8 inline-block text-3xl">
                Experience
              </Link>
              <ExperienceDemo />
            </Block>

            <Block>
              <Link id="usage" href="#usage" className="mb-8 inline-block text-3xl">
                Usage
              </Link>
              <UsageDemo />
            </Block>

            <div>API</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
