import { getIconComponent, type IconName } from "./icons";
import { use, Suspense} from "react";
import "./icon.css";

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "aria-hidden"> & {
    name: IconName;
}

function IconComponent({ name, ...props }: IconProps) {
    const Icon = use(getIconComponent(name));
    return <Icon xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props} />;
}

export function Icon({ name, ...props }: IconProps) {
    return (<div ui-icon={name}>
        <Suspense fallback={null}>
            <IconComponent name={name} {...props} />
        </Suspense>
    </div>);
}