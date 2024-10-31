import React from 'react'

export default function AlbumArticle({ album }) {

  return (
    <article className='flex flex-col box-border w-max' style={{ scrollSnapAlign: "start" }}>
      {/* 앨범 정보 */}
      <div className='pt-2'>
        <p className='text-xs'>{album.type}</p>
        <h3 className='text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden'>{album.title}</h3>
        <h4 className='text-lg font-medium opacity-50'>{album.author}</h4>
      </div>
      {/* 앨범 이미지 */}
      <div className='relative rounded-xl overflow-hidden'>
        <img
          src={album.src}
          alt="img"
        />
        {/* 앨범 Hover */}
        <div className='
            flex justify-center items-end absolute 
            -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 
            text-[12px] w-full h-full transition-all 
            bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.45)]
        '>
          <div className='flex justify-between items-end px-4 pb-4 pt-6 w-full'>
            <p className='flex text-[#fff] font-semibold '>
              {album.desc}
            </p>
            <img
              className='rounded-md'
              src={album.logo}
              alt="img"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
