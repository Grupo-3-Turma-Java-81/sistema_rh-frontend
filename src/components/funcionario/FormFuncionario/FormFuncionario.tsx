import React, { useEffect, useState, type ChangeEvent } from 'react';
import '../../../css/Form.css';
import { useNavigate, useParams } from 'react-router-dom';
import type { Funcionario } from '../../../models/Funcionario';
import { buscar, cadastrar, atualizar } from '../../../services/Service';

const FormFuncionario: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [funcionario, setFuncionario] = useState<Funcionario>({
    nome: '',
    cargo: '',
    departamento: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      buscar(`/funcionarios/${id}`, setFuncionario, {})
        .catch(() => alert('Erro ao carregar funcionário'));
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setFuncionario({
      ...funcionario,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar(`/funcionarios/${id}`, funcionario, setFuncionario, {});
        alert('Funcionário atualizado!');
      } else {
        await cadastrar('/funcionarios', funcionario, setFuncionario, {});
        alert('Funcionário cadastrado!');
      }
      navigate('/funcionarios');
    } catch {
      alert('Erro ao salvar funcionário');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={enviarFormulario} className="form-container">
  <input
    type="text"
    placeholder="Nome"
    name="nome"
    value={funcionario.nome}
    onChange={atualizarEstado}
    className="input-field"
    required
  />
  <input
    type="text"
    placeholder="Cargo"
    name="cargo"
    value={funcionario.cargo}
    onChange={atualizarEstado}
    className="input-field"
    required
  />
  <input
    type="text"
    placeholder="Departamento"
    name="departamento"
    value={funcionario.departamento}
    onChange={atualizarEstado}
    className="input-field"
    required
  />
  <button type="submit" className="submit-button" disabled={isLoading}>
    {isLoading ? 'Salvando...' : id ? 'Atualizar' : 'Cadastrar'}
  </button>
</form>
  );
};

export default FormFuncionario;