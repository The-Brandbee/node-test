import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Main from '../img/logo.png'


function IndexPage() {
  return (
    <header>
          <div className='header-video'>  
           <video  playsInline
                  autoPlay
                  loop
                  muted>
                  <source src={'https://thebrandbee.com/cyber-security.mp4'} type="video/mp4" />
                </video>
          </div> 
            <div className='navbar-main-frame'>
            <div className='container'>
            <div className='navbar-menu'>
            <div className='logo-frame-header'>
            <Link href="/">
               <Image src={Main} alt="" />
            </Link>
            </div>
            <div className='header-menubar-middle'>
                 <ul>
                  <li>
                    <Link href="/">Company </Link>
                  </li>
                  <li>
                    <Link href="/">Cyber Lighthouse</Link>
                  </li>
                  <li>
                    <Link href="/">Contact US</Link>
                  </li>
                 </ul>
            </div>
            <div className='header-menubar-right'>
                <Link href="/"> Get in Touch </Link>
            </div>                         
            </div>
            </div>
            </div>
          <div className='Strengthen-Your-Cyber-Defenses'>
              <h4>Strengthen Your Cyber Defenses</h4>
              <p>Your Trusted Partner for Cybersecurity Services</p>
              <div className='know-more'>
              <Link href="/">Know More</Link>
              </div>  
          </div>
    </header>
  )
}
 
export default IndexPage