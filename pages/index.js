import Email from '../components/Email'
import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className='bg-gray-900 flex flex-col items-center justify-between h-screen'>
      <div className='text-center mt-10'>
        <icon className='text-6xl'>🏳️‍🌈</icon>
        <h1 className='text-white text-2xl'>Build with Pride</h1>
        <h2 className='text-gray-300'>Tools for Queer Indie Hackers</h2>
        <Email />
      </div>
      <footer className='bg-gray-200 w-full text-center py-4'>
        <a href='http://www.buildwithpride.org'>Built with 🏳️‍🌈</a>
      </footer>
    </div>
  )
}
