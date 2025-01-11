import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made with ❤️ by <span className="font-bold text-cyan-400">Anand Bhalerao</span>. All rights reserved.
        </p>
        <div className="my-4 flex justify-center gap-6">
          <a
            href="https://github.com/anandbhalerao18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anandbhalerao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/anandbhaleraooo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/AnandBhaleraooo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            Twitter
          </a>
        </div>
        <p className="text-xs mt-4">
          Designed and Developed by <span className="font-bold text-cyan-400">Anand Bhalerao</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
