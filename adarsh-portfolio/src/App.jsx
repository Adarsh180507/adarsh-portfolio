import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-900 font-sans antialiased selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      {/* --- Dynamic Engineering Background --- */}
      <div className="fixed inset-0 z-[-2] h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[120px] animate-pulse duration-1000"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation Bar (Floating Pill Design) */}
      <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <nav className="bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-sm shadow-slate-200/50 py-3 px-6 rounded-full w-full max-w-5xl flex justify-between items-center pointer-events-auto transition-all">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="bg-slate-900 text-white text-[10px] font-mono px-2 py-1 rounded-md hidden sm:block">
              &lt;/&gt;
            </span>
            <div className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Adarsh<span className="text-blue-600">.</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
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
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-28 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs tracking-wide uppercase rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          8.51 CGPA • IIT (BHU) Varanasi
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
          Hi, I'm <br className="md:hidden" />
          Adarsh Kumar Vijayvargiya.
        </h1>

        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Engineering scalable software.
        </h2>

        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100/50">
          Undergraduate student at IIT (BHU) Varanasi and aspiring Software
          Engineer specializing in scalable backend architectures, AI-driven
          automation, and high-performance algorithmic problem solving. Adept at
          building robust APIs, intelligent data pipelines, and responsive
          full-stack applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30 transition-all text-center border border-transparent"
          >
            Explore Projects
          </a>
          <a
            href="https://leetcode.com/u/PROAdarsh1/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white text-[#FFA116] border border-slate-200 hover:border-[#FFA116] px-8 py-4 rounded-xl font-bold hover:bg-[#FFA116]/5 shadow-sm transition-all text-center flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.313-5.693a.524.524 0 0 1 .734-.073l5.27 4.28a.514.514 0 0 1 .035.782l-5.32 5.305a1.375 1.375 0 0 0 1.94 1.95l5.32-5.306a3.266 3.266 0 0 0-.09-4.735L17.06 1.363A3.263 3.263 0 0 0 14.943.2l-1.46-.2z"></path>
            </svg>
            LeetCode Knight
          </a>
          <a
            href="https://codeforces.com/profile/Adarsh1805"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-slate-900 hover:text-slate-900 shadow-sm transition-all text-center"
          >
            Codeforces
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              A cohesive blend of core engineering principles and modern
              software development capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Card 1 */}
            <div className="p-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <svg
                  className="w-6 h-6"
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
              <h3 className="font-bold text-xl mb-4 text-slate-900">
                Languages & Web
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  C++ & Java
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  MERN Stack
                </li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="p-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <svg
                  className="w-6 h-6"
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
              <h3 className="font-bold text-xl mb-4 text-slate-900">
                Core Engineering
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Low-Level Design (LLD)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  System Design & APIs
                </li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="p-8 bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <svg
                  className="w-6 h-6"
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
              <h3 className="font-bold text-xl mb-4 text-slate-900">
                Problem Solving
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></span>
                  <div>
                    LeetCode:{" "}
                    <span className="font-bold text-[#FFA116]">PROAdarsh1</span>
                    <br />
                    <span className="text-sm text-slate-500">
                      Rating: 1945 (Knight Badge)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></span>
                  <div>
                    Codeforces:{" "}
                    <span className="font-bold text-blue-600">Adarsh1805</span>
                    <br />
                    <span className="text-sm text-slate-500">
                      Max Rating: 1540
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Graph Theory & Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              A collection of systems developed across automation, machine
              learning, and web architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: AI Video Editor SaaS */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="https://github.com/Adarsh180507/VideoEditingAiAgent.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 bg-slate-50 p-2 rounded-full hover:bg-slate-100 transition-all cursor-pointer z-10"
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Powered Video Editor
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Engineered an autonomous video editing platform using the MERN
                  stack, integrating Gemini AI and Cloudinary. Designed an
                  asynchronous task queue with BullMQ and Redis to manage
                  high-latency rendering, ensuring a non-blocking user
                  interface. Features secure JWT authentication, a credit-based
                  paywall, and optimized cloud media pipelines to minimize
                  server overhead.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  MERN
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Redis & BullMQ
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Cloudinary
                </span>
              </div>
            </div>

            {/* Project 2: Course Seller App */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="https://github.com/Adarsh180507/CourseSubscriptionWebApp.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 bg-slate-50 p-2 rounded-full hover:bg-slate-100 transition-all cursor-pointer z-10"
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Course Subscription API
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Developed a robust, highly scalable REST API backend
                  architecture utilizing Node.js, Express, and MongoDB.
                  Implemented secure role-based access control, JWT
                  authentication, and dynamic educational content delivery
                  systems. Designed optimized database schemas to efficiently
                  handle user subscriptions, progress tracking, and transaction
                  mock-ups.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Node.js
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Express
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Project 3: RVM Prototype */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Sustainable RVM Build
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Engineered a functional Reverse Vending Machine prototype
                  bridging hardware and software logic. Integrated an Arduino
                  Uno with infrared sensors to detect deposits through a custom
                  plastic pipe passage, housed in a cardboard structural body.
                  Programmed a responsive dual-servo actuation loop to reliably
                  dispense toffee rewards upon successful recycling actions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Arduino
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  C++ Embedded
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Hardware Architecture
                </span>
              </div>
            </div>

            {/* Project 4: Kinematics Calculator */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Kinematics Calculator
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Built an analytical computational engine to perform complex
                  velocity and acceleration analysis for mechanical systems.
                  Translated rigid body dynamics into programmatic matrices via
                  Python, enabling rapid, interactive modeling of slider-crank
                  configurations and four-bar linkages directly within a custom
                  Streamlit web interface.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Python
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Streamlit
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Matrix Computation
                </span>
              </div>
            </div>

            {/* Project 5: Sentiment Analysis */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  YT Sentiment Analysis
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Designed and deployed a data extraction and natural language
                  processing pipeline to evaluate community engagement on target
                  video resources. Utilized Python to interface with APIs,
                  efficiently scraping large volumes of comment data, and
                  applied NLP algorithms to generate quantitative text
                  distribution scores and overall audience sentiment metrics.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Python
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  NLP
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] px-3 py-1.5 rounded-full font-bold tracking-wide">
                  Data Extraction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto text-lg">
            Have an open position, an optimization problem, or want to
            collaborate on a system build? Drop a line below.
          </p>

          <div className="mb-12">
            <a
              href="mailto:adarshvijayvargiya8@gmail.com?subject=Inquiry%20from%20Portfolio"
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 hover:border-slate-900 hover:text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5 text-blue-600"
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
              Open Email Application
            </a>
            <div className="flex items-center justify-center gap-4 my-8 max-w-md mx-auto">
              <span className="h-px bg-slate-200 flex-grow"></span>
              <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                or use the form
              </span>
              <span className="h-px bg-slate-200 flex-grow"></span>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-xl mx-auto text-left space-y-6 bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/20"
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
                  className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 placeholder:text-slate-400"
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
                  className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all text-slate-900 placeholder:text-slate-400"
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
                className="w-full px-4 py-3.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                placeholder="Describe the scope or inquiry details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md border-t border-slate-200/60 py-12 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-semibold text-slate-500">
            &copy; {new Date().getFullYear()} Adarsh Kumar Vijayvargiya.
          </p>
          <div className="flex gap-6 font-bold text-slate-400">
            <a
              href="https://github.com/Adarsh180507"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/PROAdarsh1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFA116] transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com/profile/Adarsh1805"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
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
