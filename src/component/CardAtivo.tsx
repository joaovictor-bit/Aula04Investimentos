import styles from './CardAtivo.module.css'
import type { ReactNode } from 'react'

type CardAtivoProps = {
  titulo: string
  children: ReactNode
}

export function CardAtivo({ titulo, children }: CardAtivoProps) {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>

      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  )
}