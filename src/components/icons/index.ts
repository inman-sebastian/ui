const icons = {
    "external": import("./icon-external").then(module => module.IconExternal),
    "javascript-logo": import("./icon-javascript-logo").then(module => module.IconJavaSriptLogo),
    "nodejs-logo": import("./icon-nodejs-logo").then(module => module.IconNodeJSLogo),
    "typescript-logo": import("./icon-typescript-logo").then(module => module.IconTypeScriptLogo)
} as const;

export type IconName = keyof typeof icons;

export function getIconComponent(name: IconName) {
    return icons[name];
}
