import { useInfiniteQuery } from 'react-query'
import { getCard } from '@/remote/card'
import { flatten } from 'lodash'
import ListRow from '../shared/ListRow'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback } from 'react'

function CardList() {
  const {
    data,
    hasNextPage = false,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCard(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data == null) {
    return null
  }

  const cards = flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
        {cards.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={card.payback != null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default CardList
