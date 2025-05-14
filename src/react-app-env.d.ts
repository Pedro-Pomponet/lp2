/// <reference types="react-scripts" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.PNG' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export const ReactComponent;
  const src: string;
  export default src;
}
