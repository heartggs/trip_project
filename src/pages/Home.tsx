import { useEffect } from 'react'

import Top from '@shared/Top'
import { getCard } from '../remote/card'
import { getAdBanner } from '../remote/adBanner'

function HomePage() {
  useEffect(() => {
    getCard().then((response) => {
      console.log(response)
    })

    getAdBanner().then((response) => {
      console.log(response)
    })
  }, [])
  return (
    <div>
      <Top
        title="헤택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
    </div>
  )
}

export default HomePage
