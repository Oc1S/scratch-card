import { FC } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link, { Props as LinkProps } from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { Hero, ComponentFeatures, ExperienceDemo, UsageDemo } from '../features/home';
import APITable from '../components/APITable';
import clsx from 'clsx';

const Block: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mt-8 flex flex-col px-8">{children}</div>;
};

const Title: FC<LinkProps> = ({ className, children, ...rest }) => {
  return (
    <Link className={clsx('mb-8 inline-block text-3xl', className)} {...rest}>
      {children}
    </Link>
  );
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
        <div className="mt-4 flex w-screen flex-col px-8">
          <div className="flex flex-col items-center justify-center">
            <Block>
              <Title id="experience" href="#experience">
                Experience
              </Title>
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg">Scratch with your mouse or finger</p>
                <ExperienceDemo />
              </div>
            </Block>

            <Block>
              <Title id="usage" href="#usage">
                Usage
              </Title>
              <UsageDemo />
            </Block>

            <Block>
              <Title id="api" href="#api">
                API
              </Title>
              <APITable />
            </Block>
          </div>
        </div>
      </main>
    </Layout>
  );
}
