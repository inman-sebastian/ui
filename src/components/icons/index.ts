const icons = {
    external: import("./icon-external").then(module => module.IconExternal),
} as const;

export type IconName = keyof typeof icons;

export function getIconComponent(name: IconName) {
    return icons[name];
}
