import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-around pt-[30px]'>
            <ul className='flex text-white gap-[50px]'>
                <li>
                    <a href="">Для кого</a>
                </li>
                <li>
                    <a href="">Формат</a>
                </li>
                <li>
                    <a href="">Программа</a>
                </li>
                <li>
                    <a href="">Тарифы</a>
                </li>
                <li>
                    <a href="">О спикере</a>
                </li>
                <li>
                    <a href="">Вопросы</a>
                </li>
            </ul>
            <div>
                <button className='cursor-pointer border text-white'>Оставить заявку</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav