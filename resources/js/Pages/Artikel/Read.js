import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/layout'

export default function Read(props) {
  return (
    <Layout title="Read" auth={props.auth.user}>
      {/* start section hero */}
      <section className="pt-20 pb-10 bg-slate-100">
        <div className="container mx-auto rounded w-full h-96 bg-[url('https://source.unsplash.com/random/900x300/?blogs')] bg-no-repeat bg-center bg-cover">
          <div className="flex p-10 relative z-10">
            <div className="p-10 lg:w-1/2 w-full backdrop-blur-sm bg-slate-500/50">
              <h1 className="text-4xl text-white">Blogs</h1>
              <p className="text-white text-base">Adalah penyedia tempat anda untuk membuat sebuah Blog atau Articel secara gratis dan mudah.</p>
            </div>
          </div>
        </div>
      </section>
      {/* end section hero */}

      {/* start section blog */}
      <section className="bg-slate-300 px-4">
        <div className="container mx-auto py-20 ">
          <Link href="/" className="text-blue-700 hover:opacity-80 mb-10 inline-block">
            <i className="bi bi-arrow-left"></i> Kembali
          </Link>
          <h1 className="text-4xl text-slate-700 font-bold">{props.post.judul}</h1>
          <p className="text-slate-500 text-sm mb-5">{props.user.name}</p>
          <p className="text-base">{props.post.content}</p>
        </div>
      </section>
      {/* end sectton blog */}

    </Layout>
  )
}