import React from "react";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tight text-gray-900">
            Adarsh.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
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
              className="text-gray-900 border-2 border-gray-900 px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 text-blue-700 font-medium text-sm rounded-full">
          8.51 CGPA | IIT (BHU) Varanasi
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-gray-900">
          Hi, I'm Adarsh.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          Mechanical Engineering student & Software Developer building scalable
          systems, AI tools, and highly optimized competitive algorithms.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            View My Work
          </a>
          <a
            href="https://codeforces.com/profile/Adarsh1805"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-3.5 rounded-lg font-semibold hover:border-gray-900 transition-all"
          >
            Codeforces Profile
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill Card 1 */}
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                Languages & Web
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>C++ & Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>MERN Stack (MongoDB, Express, React, Node)</li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
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
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                Core Engineering
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Low-Level Design (LLD)</li>
                <li>Mechanical Systems Analysis</li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
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
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                Problem Solving
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>Active Competitive Programmer</li>
                <li>Codeforces Handle: Adarsh1805</li>
                <li>Max Rating: 1540</li>
                <li>Advanced Graph Theory & DP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                AI Video Editing Tool
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                An intelligent application designed to automate and streamline
                video editing workflows using advanced AI processing and
                computer vision techniques.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  AI/ML
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Course Subscription Backend
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                A robust REST API architecture for managing user course
                subscriptions, handling secure authentication, and serving
                dynamic educational content.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Node.js
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Express
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Sustainable RVM Prototype
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                A functional Reverse Vending Machine built with an Arduino Uno,
                IR sensors, a plastic pipe passage, and a cardboard body,
                featuring a dual-servo reward system.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Arduino
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  C++
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Hardware
                </span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Kinematics Calculator
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                A computational tool performing complex velocity and
                acceleration analysis for mechanical systems like slider-crank
                and four-bar mechanisms.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Streamlit
                </span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                YT Sentiment Analysis
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                A data analysis pipeline that scrapes and evaluates YouTube
                comment sections to determine overall audience sentiment and
                engagement metrics.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  Python
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  NLP
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-semibold">
                  APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            I'm currently open for new opportunities and collaborations. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>

          {/* Serverless Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-xl mx-auto text-left space-y-6"
          >
            {}
            <input
              type="hidden"
              name="access_key"
              value="dfee98da-71d1-4077-8c73-14d79a00dac7"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="How can we work together?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Adarsh Kumar Vijayvargiya. Built
          with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
