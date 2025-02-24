import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp'
const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg} alt="Rabbit"  className='w-full h-[400px] md:h-[600px] lg:[600px] object-cover'/>
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center text-white p-6'>
                <h1 className='text-4xl md:text-9xl font-bold tracking-tighter mb-4'>VACATION</h1>
            </div>
        </div>
    </section>
  )
}

export default Hero

