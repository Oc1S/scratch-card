import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: React.ReactNode;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <>
        🎁 <Translate>Easy to Use</Translate>
      </>
    ),
    description: <Translate>Use it with minimal configuration.</Translate>,
  },
  {
    title: (
      <>
        ✨ <Translate>Focus on UX</Translate>
      </>
    ),
    description: (
      <Translate>
        Meticulously optimized to ensure each scratch is smooth as silk, providing an unprecedented
        interactive experience.
      </Translate>
    ),
  },
  {
    title: (
      <>
        🎉 <Translate>Fully functional</Translate>
      </>
    ),
    description: (
      <Translate>
        Whether it's custom patterns, scratch-off effects, or interactive logic, the scratch card
        can effortlessly meet all your needs with its comprehensive functionality.
      </Translate>
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
