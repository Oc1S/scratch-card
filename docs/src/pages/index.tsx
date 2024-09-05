import Link, { Props as LinkProps } from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { FC, useEffect } from 'react';
import { toast, Toaster } from 'sonner';

import APITable from '../components/APITable';
import { ComponentFeatures, ExperienceDemo, Hero, UsageDemo } from '../features/home';

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

const key = 'GITHUB_TOAST_DISMISSED';

const shouldShowToast = () => {
  if (location.hostname.endsWith('github.io') || location.hostname.endsWith('localhost')) {
    const showed = localStorage.getItem(key);
    if (!showed) {
      return true;
    }
  }
  return false;
};

const useToast = () => {
  useEffect(() => {
    if (shouldShowToast()) {
      toast.warning('This page is currently hosted at github, so it may load slowly.', {
        duration: 10_000,
        description: "You're welcome to try it on your own project.",
        onDismiss: () => localStorage.setItem(key, 'true'),
      });
    }
  }, []);
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  useToast();
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
                <p className="text-lg">
                  <Translate>Scratch with your mouse or finger</Translate>
                </p>
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
      <Toaster
        richColors
        closeButton
        theme="light"
        icons={{
          warning: '👋',
        }}
      />
    </Layout>
  );
}
