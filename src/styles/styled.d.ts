import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}
