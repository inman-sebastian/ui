import { getIconComponent, type IconName } from "./icons";
import { use, useMemo, Suspense} from "react";
import "./icon.css";

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "aria-hidden"> & {
    "name": IconName;
    "size"?: `${number}${string}`;
    "size:sm"?: `${number}${string}`;
    "size:md"?: `${number}${string}`;
    "size:lg"?: `${number}${string}`;
}

function IconComponent({ name, ...props }: IconProps) {
    const Icon = use(getIconComponent(name));
    return <Icon xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props} />;
}

export function Icon({ name, ...props }: IconProps) {
    const { size = "1rem", "size:sm": sizeSm, "size:md": sizeMd, "size:lg": sizeLg, ...rest } = props;

    const styleVariables = useMemo(() => {
        const styles = new Map<string, string>();
        size && styles.set("--icon-size-base", size);
        sizeSm && styles.set("--icon-size-sm", sizeSm);
        sizeMd && styles.set("--icon-size-md", sizeMd);
        sizeLg && styles.set("--icon-size-lg", sizeLg);
        return styles.size ? Object.fromEntries(styles) : undefined;
    }, [size, sizeSm, sizeMd, sizeLg]);

    return (<div ui-icon={name} style={styleVariables}>
        <Suspense fallback={null}>
            <IconComponent name={name} {...rest} />
        </Suspense>
    </div>);
}