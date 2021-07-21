import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb:16 mb:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi,My name is Alish.
            <br className="hidden lg:inline-block" />I like building amazing
            apps.
          </h1>
          <p className="mb-5 leading-relaxed">
            I am college student currently pursuing my bachelor's degree in
            Computer Engineering. I am currently living in a dharan.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              Lets see my past work here.
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./alish.jpg"
          />
        </div>
      </div>
    </section>
  );
}
