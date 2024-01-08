import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import Form from '@/components/signup/Form'
import { FormValues } from '@/models/signup'
import { auth, store } from '@/remote/firebase'
import { COLLECTIONS } from '@/constants'

function SighupPage() {
  const handleSubmit = async (formValues: FormValues) => {
    const { email, password, name } = formValues

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }

    setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    collection(store, COLLECTIONS.USER)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SighupPage
