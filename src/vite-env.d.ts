/// <reference types="vite/client

// declare module "*.svg" {
//     const content: any;
//     export default content;
//   }

declare namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }