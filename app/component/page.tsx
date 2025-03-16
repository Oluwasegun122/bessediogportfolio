// import AboutMe from "./AboutMe";
// import Footer from "./Footer";
// import Header from "./Header";
// import Projects from "./Projects";

export default function HomePage() {
  return (
    <div className="">
      {/* slide section */}
      <div
        className="hero min-h-screen"

        // style={{
        //   backgroundImage:
        //     {"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"},
        // }}
      >
        <img className="hero min-h-screen" src="/images/pro_img2.jpeg" alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* about me section */}
      <div>
        <div className="my-10 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
        </div>

        <AboutMe />
      </div>
      {/* cards */}

      <div className="my-10 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
          Projects
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>
      </div>

      <Projects />
      {/* footer */}
      <Footer />
    </div>
  );
}
