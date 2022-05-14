import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
            <table className="w-full border border-slate-800">
              <thead>
                <tr>
                  <th className="border border-slate-800">Judul</th>
                  <th className="border border-slate-800">Kategori</th>
                  <th className="border border-slate-800">Action</th>
                </tr>
              </thead>
              <tbody>

                {props.artikels.length === 0 ?
                  <tr className="odd:bg-white even:bg-slate-100">
                    <td colSpan="3" className="border border-slate-800 text-center text-3xl">Data Masih Kosong</td>
                  </tr>

                  :

                  props.artikels.map(artikel => (
                    <tr key={artikel.id} className="odd:bg-white even:bg-slate-100">
                      <td className="border border-slate-800 p-2">{artikel.judul}</td>
                      <td className="border border-slate-800 p-2">{artikel.kategori}</td>
                      <td className="border border-slate-800">
                        <Link href={`/artikel/${artikel.id}/update`} className="bg-sky-600 text-white rounded py-2 px-3 inline-block m-2 hover:opacity-80">
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                        <Link href={`/artikel/${artikel.id}/delete`} className="bg-red-600 text-white rounded py-2 px-3 inline-block m-2 hover:opacity-80">
                          <i className="bi bi-trash-fill"></i>
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
