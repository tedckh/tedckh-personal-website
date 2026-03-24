export type Theme = {
  colors: {
    background: string;
    text: string;
    heading: string;
    primary: string;
    cardBackground: string;
  };
  svg: {
    fill: string;
  };
  tag: {
    text: string;
    background: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: "#f0f2f5",
    text: "#4a4a4a",
    heading: "#0a0a0a",
    primary: "#007bff",
    cardBackground: "#ffffff",
  },
  svg: {
    fill: "#111111",
  },
  tag: {
    text: "#004085",
    background: "#cce5ff",
  },
};

export const darkTheme: Theme = {
  colors: {
    background: "#0a192f",
    text: "#8892b0",
    heading: "#ccd6f6",
    primary: "#64ffda",
    cardBackground: "#112240",
  },
  svg: {
    fill: "#ffffff",
  },
  tag: {
    text: "#64ffda",
    background: "#64ffda1A",
  },
};
