declare module 'react-helmet' {
  import { Component, ReactNode } from 'react';

  interface HelmetProps {
    children?: ReactNode;
  }

  export class Helmet extends Component<HelmetProps> {}
}