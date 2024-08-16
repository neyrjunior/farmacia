import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/Categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });

    console.log(JSON.stringify(categoria));
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/Categorias`, categoria, setCategoria);
        alert('Categoria atualizado com sucesso');
      } else {
        await cadastrar(`/Categorias`, categoria, setCategoria);
        alert('Categoria cadastrado com sucesso');
      }
      retornar();
    } catch (error) {
      alert('Erro ao salvar o Categoria');
      console.error(error);
    }
  }

  function retornar() {
    navigate("/Categorias");
  }

  return (
    <div className="container flex.flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
