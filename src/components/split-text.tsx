import "./split-text.css";

export type SplitTextProps = {
    className?: string;
    children: string;
}

export function SplitText({ children, ...props }: SplitTextProps) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const characters = Array.from(segmenter.segment(children), s => s.segment.replace(/\s/, "\u00A0"));

    return (<span ui-split-text="" aria-label={children} {...props}>
        {characters.map((char, index) => <span key={index} aria-hidden="true">{char}</span>)}
    </span>);
}