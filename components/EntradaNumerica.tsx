import styles from '../styles/EntradaNumerica.module.css'

interface Props{
    text: string
    value: number
    min: number
    max: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica({text, value, min, max, onChange}: Props) {

    const incrementar =() => value < max && onChange(value + 1)
    
    const decrementar =() => value > min && onChange(value - 1)

    return (
        <div className={styles.entradaNumerica}>
            <div className={styles.text}>{text}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={decrementar}>-</button>
                <button className={styles.btn} onClick={incrementar}>+</button>
            </div>
        </div>
    )
}