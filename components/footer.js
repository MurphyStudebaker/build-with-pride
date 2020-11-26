import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
        <footer className='px-10 py-10'>
        <div className='flex'>
        <SocialIcon url="https://twitter.com/buildwithpride" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://instagram.com/buildwithprideorg" fgColor='white' bgColor='transparent'/>
        </div>
        <p className='text-white mono'>© 2020 by Murphy Studebaker</p>
        <a href='http://www.buildwithpride.org' className='text-white mono'>Built with 🏳️‍🌈</a>
      </footer>
    )
}