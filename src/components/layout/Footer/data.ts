export interface FooterDataIconProps {
  path: string;
  alt: string;
  link: string;
}

export interface FooterDataIconProps {
  path: string
  alt: string
  link: string
}

export interface FooterDataProps {
  icons: FooterDataIconProps[]
}

export const footerData: FooterDataProps = {

  icons: [
    {
      path: '/icons/insta.svg',
      alt: 'insta',
      link: 'https://www.instagram.com/n__asadik.777',
    },
    {
      path: '/icons/tg.svg',
      alt: 'facebook',
      link: 'https://t.me/n_asadik777',
    },
    {
      path: '/icons/facebook.svg',
      alt: 'insta',
      link: 'https://www.linkedin.com/in/asadullo-nazarov-a0922b221/',
    },
    {
      path: '/icons/youtube.svg',
      alt: 'youtube',
      link: '/',
    },
  ],
}
