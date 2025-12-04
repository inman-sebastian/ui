import "./split-text.css";
import * as React from "react";

export type SplitTextProps = {
    className?: string;
    children: string;
}

export default function SplitText({ children, ...props }: SplitTextProps) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const characters = Array.from(segmenter.segment(children), s => s.segment.replace(/\s/, "\u00A0"));

    return (<span split-text="" aria-label={children} {...props}>
        {characters.map((char, index) => <span key={index} aria-hidden="true">{char}</span>)}
    </span>);
}