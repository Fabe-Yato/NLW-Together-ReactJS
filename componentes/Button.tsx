import React from "React";

type ButtonProps = {
    text: String;
}

export let Button = (props: ButtonProps) => {
    return(
    <button>{props.text}</button>

    )
}
