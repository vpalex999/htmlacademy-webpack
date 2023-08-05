import { useMemo } from 'react'

import category1 from '../images/categories/category-1.svg'
import category2 from '../images/categories/category-2.svg'
import category3 from '../images/categories/category-3.svg'

const useMockCategories = () => {
  const categories = useMemo(
    () => [
      {
        id: 1,
        title: 'Контактные линзы',
        image: category1,
      },
      {
        id: 2,
        title: 'Оправы для очков',
        image: category2,
      },
      {
        id: 3,
        title: 'Солнечные очки',
        image: category3,
      },
    ],
    [],
  )

  return categories
}

export { useMockCategories }
