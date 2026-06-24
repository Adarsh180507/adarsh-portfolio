import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Adarsh.
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-28 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-50/60 border border-blue-100 text-blue-700 font-semibold text-xs tracking-wide uppercase rounded-full">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          8.70 CGPA • IIT (BHU) Varanasi
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-slate-900 max-w-4xl leading-[1.15]">
          Engineering scalable software and intelligent systems.
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-normal">
          Mechanical Engineering student & Software Developer specializing in
          robust backend architectures, AI-driven automation, and highly
          optimized algorithmic problem solving.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-100 transition-all text-center"
          >
            Explore Projects
          </a>
          <a
            href="https://codeforces.com/profile/Adarsh1805"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-slate-900 hover:text-slate-900 transition-all text-center"
          >
            Codeforces Profile
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-slate-500 font-medium">
              A cohesive blend of core engineering principles and modern
              software development capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Card 1 */}
            <div className="p-8 border border-slate-100 bg-[#fbfbfb] rounded-2xl shadow-xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">
                Languages & Web
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  C++ & Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  MERN Stack
                </li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="p-8 border border-slate-100 bg-[#fbfbfb] rounded-2xl shadow-xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">
                Core Engineering
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Low-Level Design (LLD)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Mechanical Kinematics
                </li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="p-8 border border-slate-100 bg-[#fbfbfb] rounded-2xl shadow-xs hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-4 text-slate-900">
                Problem Solving
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Codeforces Handle:{" "}
                  <span className="font-bold text-blue-600">Adarsh1805</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Peak Rating: 1436
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Graph Theory & Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-28 bg-[#fcfcfc] border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-500 font-medium">
              A collection of systems developed across automation, machine
              learning, and web backend architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: AI Video Editor */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    AI Video Editing Tool
                  </h3>
                  <a
                    href="https://github.com/Adarsh180507/VideoEditingAiAgent.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-50 transition-all"
                    title="View Repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.17 6.839 9.49.5.092.682-.217.682-.48 text-shadow-smv-.1.017-1.665.025-3.266-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.01.069-.01 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  An intelligent desktop application designed to automate
                  micro-video editing configurations and asset processing using
                  deep learning frameworks.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  OpenCV
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  AI Pipelines
                </span>
              </div>
            </div>

            {/* Project 2: Course Seller App */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Course Subscription Backend
                  </h3>
                  <a
                    href="https://github.com/Adarsh180507/CourseSubscriptionWebApp.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-50 transition-all"
                    title="View Repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.17 6.839 9.49.5.092.682-.217.682-.48v-.1.017-1.665.025-3.266-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.01.069-.01 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  A comprehensive REST API application featuring secure user
                  routing, authentication structures, transaction mock-ups, and
                  programmatic access control.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Node.js
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Express
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Project 3: RVM Prototype */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Sustainable RVM Prototype
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  A structural Reverse Vending Machine setup integrating an
                  Arduino Uno unit, infrared sensors, a functional plastic
                  passage pipe, and a dual-servo actuation loop.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Arduino
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  C++ Embedded
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Hardware
                </span>
              </div>
            </div>

            {/* Project 4: Kinematics Calculator */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Kinematics Calculator
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Analytical system running mathematical modeling of
                  slider-crank configurations and custom mechanisms via
                  programmatic Streamlit matrices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Streamlit
                </span>
              </div>
            </div>

            {/* Project 5: Sentiment Analysis */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  YT Sentiment Analysis
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Data indexing engine engineered to track community engagement
                  metrics and text distribution scores on video resource
                  targets.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[11px] px-2.5 py-1 rounded-md font-semibold">
                  NLP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-28 bg-white border-t border-slate-100"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto text-sm">
            Have an open position, an optimization problem, or want to
            collaborate on a system build? Drop a line below.
          </p>

          {/* Primary Action: Direct Mail Client Alternative */}
          <div className="mb-12">
            <a
              href="mailto:adarshvijayvargiya8@gmail.com?subject=Inquiry%20from%20Portfolio"
              className="inline-flex items-center gap-2 bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-900 hover:text-slate-900 font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-2xs"
            >
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Open Email Application Instantly
            </a>
            <div className="flex items-center justify-center gap-3 my-6 max-w-md mx-auto">
              <span className="h-px bg-slate-100 flex-grow"></span>
              <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                or use the form
              </span>
              <span className="h-px bg-slate-100 flex-grow"></span>
            </div>
          </div>

          {/* Web3Forms Static Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-xl mx-auto text-left space-y-6 bg-[#fbfbfb] p-8 rounded-2xl border border-slate-100 shadow-2xs"
          >
            {/* Embedded Web3Forms Token */}
            <input
              type="hidden"
              name="access_key"
              value="dfee98da-71d1-4077-8c73-14d79a00dac7"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 text-sm rounded-xl bg-white border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-100 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                placeholder="Describe the scope or inquiry details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-100"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer System */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Adarsh Kumar Vijayvargiya. All
            rights reserved.
          </p>
          <div className="flex gap-6 font-semibold text-slate-400">
            <a
              href="https://github.com/Adarsh180507"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://codeforces.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Codeforces
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
