import React, { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Textarea from '@/Components/Textarea';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Artikel(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    judul: props.post ? props.post.judul : '',
    kategori: props.post ? props.post.kategori : '',
    content: props.post ? props.post.content : '',
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    if (props.post) {
      post(route('artikel.update', [props.post.id]));
    } else {
      post(route('artikel'));
    }
  };

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={props.post ? <h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Artikel</h2> : <h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Artikel</h2>}
    >
      <Head title={props.post ? "Update Artikel" : "Create Artikel"} />

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
              <div className="lg:w-1/4 w-full">
                <div className="mb-3">
                  <Label forInput="judul" value="Judul" />

                  <Input
                    type="text"
                    name="judul"
                    value={data.judul}
                    className="mt-1 block w-full"
                    autoComplete="judul"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <Label forInput="kategori" value="Kategori" />

                  <Input
                    type="text"
                    name="kategori"
                    value={data.kategori}
                    className="mt-1 block w-full"
                    autoComplete="kategori"
                    handleChange={onHandleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <Label forInput="content" value="Content" />

                <Textarea name="content" type="text" value={data.content} className="mt-1 block w-full" handleChange={onHandleChange} required rows="5" />
              </div>


              <div className="flex items-center justify-end mt-4">
                <Button className="ml-4" processing={processing}>
                  Simpan
                </Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </Authenticated>
  );
}
