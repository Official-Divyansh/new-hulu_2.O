import style from '../styles/Header.module.css'

export default function HeaderItem({Home,title}) {
  return (
    <>
    <div className={style.items}>
    <Home fontSize={20}  style={{color:'white'}}  className='hover:animate-bounce' id={style.icon}  />
    <p className="text-white" id={style.title}>{title}</p>
    </div>
    </>
  )
}
