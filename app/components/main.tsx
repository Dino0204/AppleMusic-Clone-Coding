"use client";
import React from 'react'
import Header from './header'

import Items from '../appleMusic'
import AlbumArticle from './albumArticle'

export default function Main() {

  const albums = Object.entries(Items.data)

  return (
    <main className='box-border' style={{ width: "calc(100vw - 256px)" }}>
      <Header />
      <div className='flex flex-col overflow-y-scroll' style={{ height: "calc(100vh - 56px)" }}>

        {/* 장르 */}
        <div className='border-b-2 pb-2 pt-8'>
          <h1 className='font-semibold text-[34px] px-4'>새로운 음악</h1>
        </div>

        {/* 앨범 */}
        <div className='flex w-full'>

          <button className='p-2 box-border'>
            {"<"}
          </button>

          <section
            style={{ scrollSnapType: "x mandatory", }}
            className='
            grid grid-flow-col auto-cols-auto
            gap-1 overflow-x-hidden'
          >
            {/* article */}
            {albums.map((album) => (
              <AlbumArticle album={album[1]} key={album[1].author} />
            ))}
          </section>

          <button className='p-2 box-border'>
            {">"}
          </button>

        </div>

      </div>
    </main>
  )
}

