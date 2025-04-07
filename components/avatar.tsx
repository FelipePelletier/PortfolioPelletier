"use client";

import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right0- hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-1.png"
        width={300}
        height={300}
        className="w-60 h-60"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;
