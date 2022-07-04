import {BiHomeCircle} from 'react-icons/bi'
import HeaderItem from './HeaderItem'
import style from '../styles/Header.module.css'
import Image from 'next/image'
import logo from './images/hulu-logo.png'
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon, LightBulbIcon} from '@heroicons/react/outline'



export default function Header() {
  return (
    <>
    <nav className={style.navbar}>
      <ul className={style.nav_ul}>
      <li>
     <HeaderItem title="Home" Home={HomeIcon}/>
      </li>
      <li>
     <HeaderItem title="Badge" Home={BadgeCheckIcon}/>
      </li>
      <li>
     <HeaderItem title="Home" Home={LightningBoltIcon}/>
      </li>
      <li>
     <HeaderItem title="Home" Home={CollectionIcon}/>
      </li>
      <li>
     <HeaderItem title="Home" Home={SearchIcon}/>
      </li>
     
      <li>
     <HeaderItem title="Home" Home={UserIcon}/>
      </li>
     
      <li>
     <HeaderItem title="Home" Home={LightBulbIcon}/>
      </li>
     
      </ul>
      <div  className={style.logo}>
    <Image src={logo} />
      </div>
    </nav>
    </>
  )
}