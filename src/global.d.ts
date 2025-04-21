export { };

declare module '*.glb';
declare module '*.png';

// Declaración simple del módulo meshline
declare module 'meshline';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
