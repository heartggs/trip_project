import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '../constants/index'
import { Card } from '@/models/card'

export async function getCard() {
  const cardSnapshot = await getDocs(collection(store, COLLECTIONS.CARD))

  return cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))
}
