import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react'

export default function Layout({ children, title, auth }) {
  return (
    <>
      <Head title={title} />
      <div className='bg-slate-800 fixed top-0 w-full z-50 px-4'>
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-sky-400 text-xl font-semibold">
              Blogs
            </Link>
            <div className="flex">
              {auth ? (
                <Link href={route('dashboard')} className="text-base text-white hover:text-sky-400">
                  Dashboard
                </Link>
              ) :
                (
                  <Link href={route('login')} className="text-base text-white hover:text-sky-400">
                    Login
                  </Link>
                )
              }

            </div>
          </div>
        </div>
      </div>
      <main>
        {children}
      </main>
      <footer className="bg-slate-800">
        <div className="container mx-auto py-5">
          <h3 className="text-center text-lg text-slate-500">Dibuat oleh wahyu | 2022</h3>
        </div>
      </footer>
    </>
  )
}
