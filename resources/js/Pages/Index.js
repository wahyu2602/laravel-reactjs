import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/layout'

export default function Home({ auth, artikels }) {

  function trims(params) {
    return params.split(' ').join('+').toLowerCase();
  }

  return (
    <Layout title="Home" auth={auth.user}>
      {/* start section hero */}
      <section className="pt-20 pb-10 bg-slate-100 px-4">
        <div className="container mx-auto rounded w-full h-96 bg-[url('https://source.unsplash.com/random/900x300/?blogs')] bg-no-repeat bg-center bg-cover">
          <div className="flex p-10 relative z-10">
            <div className="p-10 lg:w-1/2 w-full backdrop-blur-sm bg-slate-500/50">
              <h1 className="text-4xl text-white">Blogs</h1>
              <p className="text-white text-base">Adalah penyedia tempat anda untuk membuat sebuah Blog atau Articel secara gratis dan mudah.</p>
              <Link href={route('register')} className="text-blue-300 decoration-blue-300 hover:decoration-blue-500 hover:text-blue-500 underline">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* end section hero */}

      {/* start section blog */}
      <section className="bg-slate-300 px-4">
        <div className="container mx-auto py-20">
          <div className="flex flex-wrap justify-start">
            {artikels.map(artikel => (
              <div key={artikel.id} className="lg:w-1/4 md:w-1/2 w-full p-2">
                <div className="p-2 rounded bg-white shadow relative">
                  <img className="w-full mb-2" src={`https://source.unsplash.com/random/400x300/?${trims(artikel.kategori)}`} />
                  <h3 className="text-xl font-semibold text-slate-700 truncate">{artikel.judul}</h3>
                  <p className="text-base text-slate-800 truncate mb-5">{artikel.content}</p>
                  <Link href={`/artikel/read/${artikel.id}`} className="text-blue-700 hover:text-sky-300">
                    Baca selengkapnya <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end sectton blog */}

    </Layout>
  )
}