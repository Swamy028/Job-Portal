import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
      <nav className='py-4 flex justify-between item'>
        <Link>
          <img src="/logo.png" alt="logo" className='h-20' />
        </Link>
        <Button variant="outline">Login</Button>
        
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
      
    </>
  )
}

export default Header