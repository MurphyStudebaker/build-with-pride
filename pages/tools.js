import Link from 'next/link'

export default function Tools() {
    return (
    <div className='min-h-screen rainbow  flex flex-col justify between'>
      <nav className="flex justify-between px-10 py-10">
        <Link href='/'><p className='text-6x text-white font-bold mono cursor-pointer'>{`<🏳️‍🌈build with pride/>`}</p></Link>
        <Link href='/tools'><p  className='text-white font-bold mono cursor-pointer'>tools</p></Link>
      </nav>
      <div className='flex-grow mt-10 container mx-auto'>
        <p className='text-white mono'>Coming soon :-)</p>
      </div>
      <footer className='px-10 py-10'>
        <p className='text-white mono'>© 2020 by Murphy Studebaker</p>
        <a href='http://www.buildwithpride.org' className='text-white mono'>Built with 🏳️‍🌈</a>
      </footer>
    </div>
  )
}