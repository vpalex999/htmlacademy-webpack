import { useMemo } from 'react'
import { Theme } from '../theme'

import productL1 from '../images/products/product-1-light.jpg'
import productL2 from '../images/products/product-2-light.jpg'
import productL3 from '../images/products/product-3-light.jpg'
import productL4 from '../images/products/product-4-light.jpg'
import productL5 from '../images/products/product-5-light.jpg'
import productL6 from '../images/products/product-6-light.jpg'

import productD1 from '../images/products/product-1-dark.jpg'
import productD2 from '../images/products/product-2-dark.jpg'
import productD3 from '../images/products/product-3-dark.jpg'
import productD4 from '../images/products/product-4-dark.jpg'
import productD5 from '../images/products/product-5-dark.jpg'
import productD6 from '../images/products/product-6-dark.jpg'

const useMockProducts = (theme = Theme.LIGHT) => {
  const products = useMemo(
    () => [
      {
        id: 1,
        name: 'Оправа Seiko',
        price: 15000,
        image: theme === Theme.LIGHT ? productL1 : productD1,
        imageAlt: 'Круглая чёрная оправа с серебристыми и золотистыми элементами',
        isHit: true,
        isNew: false,
        isNotAvailable: false,
      },
      {
        id: 2,
        name: 'Оправа Max Mara',
        price: 20000,
        image: theme === Theme.LIGHT ? productL2 : productD2,
        imageAlt: 'Чёрная оправа с золотистыми элементами формы «кошачий глаз»',
        isHit: true,
        isNew: true,
        isNotAvailable: false,
      },
      {
        id: 3,
        name: 'Оправа Fossil',
        price: 18000,
        image: theme === Theme.LIGHT ? productL3 : productD3,
        imageAlt: 'Прямоугольная чёрная оправа с жёлтыми элементами',
        isHit: false,
        isNew: true,
        isNotAvailable: false,
      },
      {
        id: 4,
        name: 'Оправа Ray-Ban',
        price: 24000,
        image: theme === Theme.LIGHT ? productL4 : productD4,
        imageAlt: 'Полуободковая чёрная оправа',
        isHit: false,
        isNew: false,
        isNotAvailable: true,
      },
      {
        id: 5,
        name: 'Оправа Rolph',
        price: 20000,
        image: theme === Theme.LIGHT ? productL5 : productD5,
        imageAlt: 'Чёрная оправа с бордовыми элементами формы «трапеция»',
        isHit: true,
        isNew: false,
        isNotAvailable: false,
      },
      {
        id: 6,
        name: 'Оправа Gucci',
        price: 38000,
        image: theme === Theme.LIGHT ? productL6 : productD6,
        imageAlt: 'Бордовая оправа формы «кошачий глаз»',
        isHit: false,
        isNew: true,
        isNotAvailable: true,
      },
    ],
    [theme],
  )

  return products
}

export { useMockProducts }
