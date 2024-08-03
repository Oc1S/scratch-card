import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

type FeatureItem = {
  title: React.ReactNode;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <>🎁 Easy to Use</>,
    description: <>Designed to work with any framework.</>,
  },
  {
    title: <>✨ Focus on UX</>,
    description: (
      <>经过精心优化，确保每一次刮卡都如丝般顺滑，带给用户前所未有的互动体验</>
    ),
  },
  {
    title: <>🎉 功能完备</>,
    description: (
      <>
        无论是自定义图案、刮卡效果还是交互逻辑，scratch card
        都能轻松满足你的需求，功能一应俱全
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" />
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
