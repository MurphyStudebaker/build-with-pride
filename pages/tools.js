import Link from 'next/link'
import Footer from '../components/footer'

export default function Tools() {
    return (
    <div className='min-h-screen max-w-screen rainbow  flex flex-col justify between'>
      <nav className="flex justify-between px-10 py-10">
        <Link href='/'><p className='text-6x text-white font-bold mono cursor-pointer'>{`<🏳️‍🌈build with pride/>`}</p></Link>
        <Link href='/tools'><p  className='text-white font-bold mono cursor-pointer'>tools</p></Link>
      </nav>
      <div className='flex-grow mt-10 container mx-auto px-10'>
        <h2 className='text-white mono text-2xl'>Social Cover Photos</h2>
        <a href="https://photos.app.goo.gl/t9h6yGVbV5XesMoy8" className="text-white mono underline">Download on Google Photos</a>
      
        <h2 className='text-white mono text-2xl mt-16'>Pride Footer Banner</h2>
        <p className='text-white mono'>Just throw this at the bottom of your footer :)</p>
        <div className='border border-white rounded px-4 py-4 mt-2'>
          <p className='text-white mono'>
          {`<a href='http://www.buildwithpride.org'> Built with 🏳️‍🌈 </a>`}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}