// configure CSS string export
declare module '*.css?inline' {
  const content: string;
  export default content;
}
