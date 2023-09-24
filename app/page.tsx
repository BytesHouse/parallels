import { Header } from '@/src/components/Header/Header'
import Image from 'next/image'
import bg from '../public/assets/images/main-bg.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Image src={bg} alt='bg' className='w-screen' />
    </main>
  )
}
