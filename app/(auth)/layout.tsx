import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = async({children} : {children : ReactNode}) => {

  // if user is already signed in, then it redirects the user to the home page
  const isUserAuthenticated = await isAuthenticated();
  if(isUserAuthenticated) redirect('/');

  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout 