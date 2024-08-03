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
    description: <>Use it with minimal configuration.</>,
  },
  {
    title: <>✨ Focus on UX</>,
    description: <>经过精心优化，确保每一次刮卡都如丝般顺滑，带给用户前所未有的互动体验</>,
  },
  {
    title: <>🎉 功能完备</>,
    description: (
      <>无论是自定义图案、刮卡效果还是交互逻辑，scratch card 都能轻松满足你的需求，功能一应俱全</>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className="padding-horiz--md flex-1 text-center">
      <Heading as="h3" className="mb-2 text-xl">
        {title}
      </Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container flex">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
