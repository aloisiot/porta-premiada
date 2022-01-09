import { useEffect } from 'react'
import styles from '../styles/Cartao.module.css'

interface CartaoProps {
    bgColor?: string
    children?: any
}

export default function Cartao({bgColor, children}: CartaoProps){

    return (
        <div 
            className={styles.cartao}
            style={{backgroundColor: bgColor || '#eee'}}
        >
            {children}
        </div>
    )
}