"use client";

import Image from "next/image";
import Link from "next/link";
/* import { TypeAnimation } from "react-type-animation"; */

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/yo.jpg"
          priority
          width="400"
          height="400"
          alt="Profile pic"
          className="rounded-[9999px] aspect-[4/3] object-cover object-[center_40%] shadow-xl mx-auto"
        />

        <div className="flex flex-col justify-center max-w-md">
          <span className="font-bold mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 text-secondary">
            Hi! I´m Felipe Pelletier
          </span>
          {/*  <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 text-secondary">
            Hola! Mi nombre es Felipe Pelletier
            <br />
          </h1> */}

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            I´m a front-end developer focused on building modern, efficient, and
            user-centered web interfaces. I primarily work with React and
            Next.js, always aiming to combine functionality with clean and
            responsive design. I also enjoy working in collaborative
            environments where teamwork and communication are key
          </p>

          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            ></a>
            Ver proyectos
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border_secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
