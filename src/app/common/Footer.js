import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Footerlogo from '../img//footer.png'
import Footerright from '../img//footer-cut.png'



function IndexPage() {
  return (
    <footer>
      <div className='footer-right-img'>
      <Image src={Footerright} alt="" />
      </div>
       <div className='container'>
        <div className='footer-middle'>
           <div className='footer-left'>
           <Link href="/">
           <Image src={Footerlogo} alt="" />
           </Link>
           </div>
           <div className='footer-left'>
              <ul>
                <li><Link href="/">Company</Link></li>
                <li><Link href="">About Us</Link></li>
                <li><Link href="">Meet The Team</Link></li>
                <li><Link href="">Contact Us</Link></li>
              </ul>
           </div>
           <div className='footer-left'>
           <ul>
                <li><Link href="/">Socials</Link></li>
                <li><Link href="">LinkedIn</Link></li>
               
              </ul>
           </div>
           <div className='footer-left'>
           <ul>
                <li><Link href="/">Privacy Statement</Link></li>
                
              </ul>
           </div>
       </div>
       </div>
    </footer>
  )
}
 
export default IndexPage