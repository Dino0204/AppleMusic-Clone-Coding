"use client";
import React from 'react'
import Image from 'next/image';

import Play from '../../public/play.svg'
import Arrow from '../../public/rightArrow.svg'
import Shuffle from '../../public/suffle.svg'
import Repeat from '../../public/repeat.svg'

import PlayList from '../../public/playlist.svg'
import Profile from '../../public/profile.svg'

import MusicIcon from '../../public/musicIcon.svg'
import AppleLogo from '../../public/appleLogo.svg'



export default function Header() {
  return (
    <header className='flex h-14 p-[5px] shadow'>
      <section className='flex w-full items-center'>
        <article className='flex flex-1 justify-center items-center'>
          <Image src={Shuffle} alt="shufle" />
          <Image src={Arrow} alt="left" className='rotate-180' />
          <Image src={Play} alt="play" />
          <Image src={Arrow} alt="right" />
          <Image src={Repeat} alt="repeat" />
        </article>
        <article className='flex flex-1 justify-center items-center border p-2'>
          <Image src={AppleLogo} alt="appleLogo" />
        </article>
        <article className='flex flex-1 justify-center items-center'>
          <div className='flex justify-between w-[80%]'>
            <input type="range" min="0" max="100" defaultValue="0" />
            <div className='flex gap-4'>
              <Image src={PlayList} alt="playlist" />
              <button className='flex items-center text-[white] font-bold text-[13px] px-3 py-1 bg-red-500 rounded-md'>
                <Image src={Profile} alt="profile" className='mr-[6px]' />
                <span>로그인</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </header >
  )
}
