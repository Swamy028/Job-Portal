import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <div className='grid-background'></div>
      <main className='min-h-screen container mx-auto px-4 lg:px-28'>
        <Header />
        <Outlet />
      </main>
      <div className='p-8 text-center  bg-gray-500'>Made with 💗 by swamy </div>
    </>
  )
}

export default AppLayout