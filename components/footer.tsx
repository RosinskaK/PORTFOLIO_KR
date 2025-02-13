import React from 'react';

function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <small>
        <p className="mb-1">
          <span className="dark:text-violet-400 text-violet-800">
            created by &copy;Kasia Rosińska{" "}
          </span>
          <span className="mb-1 text-slate-600">
            {new Date().getFullYear()} All rights reserved
          </span>
        </p>
        <p className=" text-slate-600">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion.
        </p>
      </small>
    </footer>
  );
}

export default Footer;