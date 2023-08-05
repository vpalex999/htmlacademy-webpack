import { useMemo } from 'react'
import { Theme } from '../theme'

import bannerD from '../images/banner/banner-dark.jpg'
import bannerL from '../images/banner/banner-light.jpg'

const useMockBanner = (theme = Theme.LIGHT) => {
  const banner = useMemo(
    () => ({
      title: 'Бесплатная консультация окулиста',
      text: 'При покупке оправы Ray-Ban и Seiko от 15 000 рублей',
      image: theme === Theme.LIGHT ? bannerL : bannerD,
    }),
    [theme],
  )

  return banner
}

export { useMockBanner }
