import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Name({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Freelancer for now until hired, providing services for programming and designing content.", 
         "Avid content creator, Dad, Hardworker, and husband.",],
        loop: true,
        delaySpeed: 2000,

    });
    return ( <div>
        <p>{text}</p>
    </div>
    );
}

export { Name };