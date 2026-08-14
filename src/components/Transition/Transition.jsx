import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Transition = ({ children }) => {
  const container = useRef();
  const [displayChildren, setdisplayChildren] = useState(children);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (children.key !== displayChildren.key) {
      console.log('neww');
      gsap
        .to(container.current, {
          opacity: 0,
          duration: 0.5,
        })
        .then(() => {
          setdisplayChildren(children);
          gsap.to(container.current, {
            opacity: 1,
            duration: 0.5,
          });
        });
    }
  }, [children]);

  return (
    <div className="nnn" ref={container}>
      {displayChildren}
    </div>
  );
};

export default Transition;
