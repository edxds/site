declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default value;
}
