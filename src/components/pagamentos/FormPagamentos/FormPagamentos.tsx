import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import type Pagamento from "../../../models/Pagamento";
import { cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import '../../../css/Form.css';



const FormPagamento: React.FC = () => {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

const [pagamento, setPagamento] = useState<{
  descricao: string;
  salarioBaseHora: string;
  mesReferencia: string;
  horasTotais: string;
  funcionario: { id: number };
  descontos: string;
  valorFinal: string;
  bonus: string;
}>({
  descricao: '',
  salarioBaseHora: '',
  mesReferencia: '',
  horasTotais: '',
  funcionario: { id: 0 },
  descontos: '0',
  valorFinal: '0',
  bonus: '0',
});


  const [resultado, setResultado] = useState<Pagamento | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === 'funcionarioId') {
      setPagamento(prev => ({
        ...prev,
        funcionario: {
          id: Number(value)
        }
      }));
    } else {
      setPagamento(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await cadastrar(
        '/pagamentos',
        {
          ...pagamento,
          salarioBaseHora: Number(pagamento.salarioBaseHora),
          horasTotais: Number(pagamento.horasTotais),
        },
        setResultado,
        {
          headers: {
            Authorization: token,
          }
        }
      );
      alert('Pagamento cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar pagamento');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={pagamento.descricao}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="number"
        name="salarioBaseHora"
        placeholder="Salário Base por Hora"
        value={pagamento.salarioBaseHora}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="text"
        name="mesReferencia"
        placeholder="Mês de Referência"
        value={pagamento.mesReferencia}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="number"
        name="horasTotais"
        placeholder="Horas Totais"
        value={pagamento.horasTotais}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="number"
        name="funcionarioId"
        placeholder="ID do Funcionário"
        value={pagamento.funcionario.id}
        onChange={handleChange}
        required
        className="input-field"
      />
      <button type="submit" disabled={loading} className="submit-button">
        {loading ? 'Enviando...' : 'Cadastrar Pagamento'}
      </button>
    </form>
  );
};

export default FormPagamento;
