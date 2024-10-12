// pages/index.js

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Header Section */}
      <header className="w-full text-center py-12">
        <h1 className="text-6xl font-bold mb-4">ATOM INFRA</h1>
        <p className="text-xl text-gray-300">Democratizing building efficient data centers focused on GPU Needs</p>
        <a
          href="mailto:hello@atominfra.com"
          className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600"
        >
          Reach out to us at hello@atominfra.com
        </a>
      </header>

      {/* Projects Section */}
      <section className="w-full max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">OUR PROJECTS</h2>
        <div className="flex justify-center space-x-8">
          {/* CUDA Version Manager */}
          <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">CUDA Version Manager</h3>
            <p className="text-gray-400 mb-6">
              Seamless CUDA version switcher for easy GPU project configuration.
            </p>
            <a
              href="https://github.com/atominfra/cvm"
              target='_blank'
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600"
            >
              View on GitHub →
            </a>
          </div>

          {/* Jupyter Environment Manager */}
          <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Jupyter Environment Manager</h3>
            <p className="text-gray-400 mb-6">
              Docker Compose based solution that allows you to easily clone Jupyter environment.
            </p>
            <a
              href="https://github.com/atominfra/jupyter-environment-manager"
              target='_blank'
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-12 bg-gray-800 text-gray-400">
        <p>© 2024 Atom Infra. All rights reserved.</p>
      </footer>
    </div>
  );
}
