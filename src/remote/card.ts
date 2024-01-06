import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '../constants/index'
import { Card } from '@/models/card'

export async function getCard(pageParm?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParm == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParm),
          limit(10),
        )
  const cardSnapshot = await getDocs(cardQuery)

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}
