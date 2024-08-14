import { useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { Code, Tooltip } from '@nextui-org/react';
import { package_name } from '../../constants';

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  const content = `npm install ${package_name}`;
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  return (
    <div className="container flex flex-col items-center gap-6 py-12 pt-24">
      <Heading as="h1" className="text-primary main_title text-6xl">
        {siteConfig.title}
      </Heading>
      <p className="text-2xl">{siteConfig.tagline}</p>

      <Tooltip isOpen={isOpen} showArrow content="Copied!">
        <Code
          className="hover:text-primary cursor-pointer transition"
          size="md"
          onClick={() => {
            if ('clipboard' in navigator) {
              navigator.clipboard.writeText(content).then(() => {
                setIsOpen(true);
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                  setIsOpen(false);
                }, 1000);
              });
            }
          }}
        >
          {content}
        </Code>
      </Tooltip>
    </div>
  );
}

export default Hero;
