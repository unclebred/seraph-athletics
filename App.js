import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-brandBlack border-b border-brandYellow">
        <h1 className="text-2xl font-bold text-brandYellow">
          Seraph Athletics
        </h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-brandYellow">About</a>
          <a href="#programs" className="hover:text-brandYellow">Programs</a>
          <a href="#contact" className="hover:text-brandYellow">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-1 text-center py-20">
        {/* LOGO PLACEHOLDER */}
        <div className="w-40 h-40 bg-brandWhite rounded-full mb-8 flex items-center justify-center text-brandBlack font-bold">
          LOGO
        </div>
        <h2 className="text-4xl font-semibold mb-4">
          {/* Tagline placeholder */}
          <span className="text-brandYellow">Coming Soon</span>
        </h2>
        <p className="max-w-lg text-gray-300">
          Empowering athletes to rise beyond limits — the Seraph way.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-brandBlack text-center border-t border-brandYellow">
        <h2 className="text-3xl font-bold text-brandYellow mb-6">About</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Seraph Athletics is an elite fitness brand dedicated to helping
          individuals unleash their inner strength. Our mission is to inspire,
          train, and elevate — guiding you to achieve more than you ever thought
          possible.
        </p>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-16 bg-brandWhite text-brandBlack text-center">
        <h2 className="text-3xl font-bold text-brandYellow mb-10">Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "1-on-1 Coaching", desc: "Personalized plans and accountability." },
            { title: "Group Training", desc: "Community-driven progress and support." },
            { title: "Nutrition Plans", desc: "Fuel your growth with custom nutrition." },
          ].map((program, idx) => (
            <div key={idx} className="p-6 border border-brandYellow rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-700">{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="py-16 bg-brandBlack text-center border-t border-brandYellow">
        <h2 className="text-3xl font-bold text-brandYellow mb-4">App Coming Soon</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Our next evolution — a personalized fitness app where clients can
          track progress, upload before & after photos, and access custom
          training directly from their account.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-brandWhite text-brandBlack text-center border-t border-brandYellow">
        <h2 className="text-3xl font-bold text-brandYellow mb-6">Contact</h2>
        <p className="text-lg mb-2">
          Email: <a href="mailto:jedidiahjenson85@gmail.com" className="text-brandYellow hover:underline">jedidiahjenson85@gmail.com</a>
        </p>
        <p className="text-lg">
          Instagram:{" "}
          <a
            href="https://www.instagram.com/therealjedjenson"
            target="_blank"
            rel="noreferrer"
            className="text-brandYellow hover:underline"
          >
            @therealjedjenson
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-brandYellow text-gray-400">
        © {new Date().getFullYear()} Seraph Athletics. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
