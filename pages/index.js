import Email from '../components/Email'
import Nav from '../components/nav'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className='rainbow min-h-screen flex flex-col justify between'>
      <nav className="flex justify-between px-10 py-10">
        <Link href='/'><p className='text-6x text-white font-bold mono cursor-pointer'>{`<🏳️‍🌈build with pride/>`}</p></Link>
        <Link href='/tools'><p  className='text-white font-bold mono cursor-pointer'>tools</p></Link>
      </nav>
      <div className='text-center flex-grow mt-10 container mx-auto'>
        <h1 className='text-white font-black text-6xl pt-24 pb-4 mono'>join our global community of queer indie hackers</h1>
        {/* <h2 className='text-gray-300 text-2xl'>Tools for Queer Indie Hackers</h2> */}
        <Email />
      </div>
      <footer className='px-10 py-10'>
        <p className='text-white mono'>© 2020 by Murphy Studebaker</p>
        <a href='http://www.buildwithpride.org' className='text-white mono'>Built with 🏳️‍🌈</a>
      </footer>
    </div>
  )
}
