import { useMemo } from 'react'
import service1 from '../images/services/service-1.jpg'
import service2 from '../images/services/service-2.jpg'
import service3 from '../images/services/service-3.jpg'

const useMockServices = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        title: 'Проверка зрения',
        image: service1,
      },
      {
        id: 2,
        title: 'Осмотр врачом',
        image: service2,
      },
      {
        id: 3,
        title: 'Подбор линз',
        image: service3,
      },
    ],
    [],
  )

  return services
}

export { useMockServices }
