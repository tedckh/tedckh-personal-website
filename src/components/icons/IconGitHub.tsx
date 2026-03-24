import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const IconGitHub = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 0-1.5-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.2 1.2-.3 2.4-.1 3.2A4.6 4.6 0 0 0 4 13.5c0 4.6 2.7 5.7 5.5 6.1-.6.5-1 1.4-1 2.8V22" />
  </svg>
);
