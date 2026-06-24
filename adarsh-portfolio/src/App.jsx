import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">Adarsh.</div>
          <div className="space-x-6 text-sm font-medium">
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600 border border-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm Adarsh.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
          Mechanical Engineering student & Software Developer building scalable systems, AI tools, and competitive algorithms.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">View My Work</a>
          <a href="https://codeforces.com/profile/Adarsh1805" target="_blank" rel="noreferrer" className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition">Codeforces</a>
        </div>
      </section>

      {/* Placeholders for our next components */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          {/* Skills Grid will go here */}
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          {/* Project Cards will go here */}
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          {/* Web3Forms Contact Form will go here */}
        </div>
      </section>

    </div>
  );
}

export default App;