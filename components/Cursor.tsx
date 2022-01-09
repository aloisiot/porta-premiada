import Image from "next/image";
import { useEffect, useState } from "react";
import cursor from "../assets/icons/cursor.png"
import styles from "../styles/Cursor.module.css"

interface Props {
    visible: boolean
}

export default function Cursor({visible}: Props){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const positionHandler = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", positionHandler)
    })

    const position = {
        top: y + 1,
        left: x + 1
    }


    return (
        <div className={styles.cursor}
            onMouseMove={(e) => positionHandler(e)}
            style={{...position ,visibility: visible ? "visible" : "hidden"}}
        >
            <Image src={cursor} alt="cursor"/>
        </div>
    )
}