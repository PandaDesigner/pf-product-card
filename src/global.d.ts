// global.d.ts
declare module '*.module.css' {
    const classes: { [ key: string ]: string };
    export default classes;
}

declare module '*.css' {
    const classes: { [ className: string ]: string };
    export default classes;
}

declare module '*.jpg' {
    const value: any;
    export default value;
}
