const icons = {
    "external": import("./icon-external").then(module => module.IconExternal),
    "javascript-logo": import("./icon-javascript-logo").then(module => module.IconJavascriptLogo)
} as const;

export type IconName = keyof typeof icons;

export function getIconComponent(name: IconName) {
    return icons[name];
}
