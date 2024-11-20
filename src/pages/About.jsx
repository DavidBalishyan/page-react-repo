import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const containerRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });
    timeline
      .fromTo(containerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
      .fromTo(
        ".about-text",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.2 }
      );
  }, []);

  return (
    <section className="section" ref={containerRef}>
      <div className="container has-text-centered">
        <h1 className="title about-text">About Us</h1>
        <p className="subtitle about-text">
        Lorem ipsum dolor sit amet
        </p>
        <p className="content about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          est massa. Suspendisse pharetra massa nibh, quis posuere nulla
          sagittis sed. Donec iaculis viverra nunc in ultrices. Duis in nisi vel
          eros lobortis aliquam. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Nullam pharetra ipsum
          ligula, eu bibendum lectus placerat eu. Morbi rutrum arcu nulla, et
          fermentum sem consectetur eu. Maecenas est odio, viverra et metus a,
          facilisis dignissim nisi. Mauris a odio ante. Cras risus erat,
          fermentum at ligula a, sagittis ullamcorper diam.
        </p>
      </div>
    </section>
  );
};

export default About;
