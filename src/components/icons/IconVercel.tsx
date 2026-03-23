import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const IconVercel = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path d="M12 1L24 22H0L12 1Z" fill={props.fill}></path>{" "}
    </g>
  </svg>
);
