import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-gray-300">
      {/* <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2> */}
      <div className="space-y-5 leading-relaxed text-lg">
        <p>
          I&apos;m <strong className="text-white">Jean-Eudes Assogba</strong>, a
          full-stack software engineer specializing in high-performance web
          applications, AI-powered tools, and seamless user experiences. I
          combine strong backend architecture with sleek, scalable frontends
          using{" "}
          <strong className="text-white">
            React, TypeScript, Django, Python
          </strong>
          , and modern AI APIs.
        </p>
        <p>
          I build systems that are fast, stable, and production-ready — whether
          it’s an intelligent expert marketplace, a real-time dashboard, or an
          AI-enhanced platform. My approach is clear: ship clean code,
          prioritize UX, and solve real problems with precision.
        </p>
        <p>
          From startups to solo projects, I’ve delivered robust, maintainable
          solutions across multiple stacks — all showcased on my{" "}
          <strong className="text-white">GitHub</strong>. I’m currently open to
          full-time remote roles where innovation, execution, and engineering
          excellence meet.
        </p>
      </div>
    </section>
  );
};

export default About;
