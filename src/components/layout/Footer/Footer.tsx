import React from 'react'
import styles from './Footer.module.scss'
import { FooterSocialIcons } from './components'
import { footerData } from './data'


export const Footer: React.FC = () => (
  
    <footer className={styles.footer}>
        <div className="container">
        <div className={styles.footer__social_media}>
          <FooterSocialIcons icons={footerData.icons} />
        </div>
        </div>
    </footer>
  )
