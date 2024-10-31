"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Apple from '../../public/apple.svg'
import Search from '../../public/search.svg'
import Home from '../../public/home.svg'
import Music from '../../public/music.svg'
import Radio from '../../public/radio.svg'
import MusicBox from '../../public/musicbox.svg'
import Arrow from '../../public/arrow.svg'

export default function Aside() {
  return (
    <nav className='flex flex-col bg-[#EFEFEF] w-64 h-[100vh] text-xs'>

      <header className='flex flex-col px-6 pt-4 min-h-28'>
        <div className='flex flex-1'>
          <Image src={Apple} alt="apple" />
        </div>
        <div className='flex flex-1 relative items-center'>
          <Image src={Search} alt="search" className='absolute ml-2' />
          <input
            className='pl-7 pr-2 py-1 outline-none focus:outline-4 focus:outline-[#fa586a] rounded w-full'
            type="text"
            placeholder='검색'
          />
        </div>
      </header>

      <aside className='flex flex-col h-full font-bold'>
        <div className='flex flex-1'>
          <ul className='flex flex-col px-6 pb-2 w-full max-h-28'>
            <li className='p-1'>
              <Link href="/" className='flex items-center'>
                <Image src={Home} alt="home" />
                <p>홈</p>
              </Link>
            </li>
            <li className='p-1'>
              <Link href="/music" className='flex items-center'>
                <Image src={Music} alt="music" />
                <p>새로운 음악</p>
              </Link>
            </li>
            <li className='p-1'>
              <Link href="/radio" className='flex items-center'>
                <Image src={Radio} alt="radio" />
                <p>라디오</p>
              </Link>
            </li>
          </ul>

        </div>
        <ul className='flex flex-col border-t-black border'>
          <li className='flex px-6 py-4'>
            <Image src={MusicBox} alt="musicbox" />
            <p>Music에서 열기</p>
            <Image src={Arrow} alt="arrow" />
          </li>
          <li className='flex px-6 pb-4'>
            <p>베타 체험</p>
            <Image src={Arrow} alt="arrow" />
          </li>
        </ul>
      </aside>

    </nav>
  )
}


