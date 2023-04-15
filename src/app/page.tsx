import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
        <div>
    
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Next.js Logo"
          width={293}
          height={153}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NextJs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Entendendo o Nextjs
          </p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            CSS <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Como deixar seu projeto mais elegante
          </p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Testes <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Como testar seu projeto</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Como colocar no ar seu projeto
          </p>
        </a>
      </div>
    </main>
  )
}
