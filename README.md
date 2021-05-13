# ReactJS-SSR-HMR-CSSModules-Template
To redo the template for TypeScript, follow these steps:

1) Create a file "declaration.d. ts" in the root of the project and write this to it:

declare module '*.css' {
const content: Record<string, string>;
export default content;
}

This is necessary to work correctly with CSS files.

2) You need to add the types for the project using the command: npm install --save @types/react-dom

P. S These are the updates that I needed to work with TypeScript with this template, if there are new problems when working with TypeScript, solutions will be added here
