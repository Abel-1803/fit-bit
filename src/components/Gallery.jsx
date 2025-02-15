import React from 'react'

const Gallery = () => {
  const gallery=["./img1.jpg","./img2.jpg","./img3.jpg","./img4.jpg","./img6.jpg","./img7.webp","./img8.jpg","./img5.jpg",];
  return (
    <section className='gallery'>
      <h1>POWER UP YOUR PROGRESS </h1>
      <div className="images">
       <div>
          {gallery.slice(0, 3).map((element, index)=>(
              <img key={index} src={element} alt="gallery" />
            ))}
       </div>
       <div>
          {gallery.slice(3, 6).map((element, index)=>(
              <img key={index} src={element} alt="gallery" />
            ))}
       </div>
       <div>
          {gallery.slice(6, 9).map((element, index)=>(
              <img key={index} src={element} alt="gallery" />
            ))}
       </div>
      </div>
    </section>
  )
}

export default Gallery