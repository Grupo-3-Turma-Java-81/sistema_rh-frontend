import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import './FormPagamentos.css';
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

const FormPagamento: React.FC = () => {
    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);
    const { id } = useParams<{ id: string }>();

    const token = usuario?.token ?? "";

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

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!token) {
            alert("Usuário não autenticado");
            navigate("/login");
            return;
        }

        if (id) {
            buscar(`/pagamentos/${id}`, setPagamento, {
                headers: { Authorization: token },
            }).catch(() => alert("Erro ao carregar pagamento"));
        }
    }, [id, token, navigate]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        if (name === "funcionarioId") {
            setPagamento((prev) => ({
                ...prev,
                funcionario: { id: Number(value) },
            }));
        } else if (
            name === "salarioBaseHora" ||
            name === "horasTotais"
        ) {
            setPagamento((prev) => ({
                ...prev,
                [name]: Number(value),
            }));
        } else {
            setPagamento((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!token) {
            alert("Usuário não autenticado");
            return;
        }

        setIsLoading(true);

        try {
            if (id) {
                await atualizar(`/pagamentos/${id}`, pagamento, setPagamento, {
                    headers: { Authorization: token },
                });
                alert("Pagamento atualizado com sucesso!");
            } else {
                await cadastrar("/pagamentos", pagamento, setPagamento, {
                    headers: { Authorization: token },
                });
                alert("Pagamento cadastrado com sucesso!");
            }
            navigate("/home-rh");
        } catch (error) {
            alert("Erro ao salvar pagamento");
            console.error(error);
        } finally {
            setIsLoading(false);
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
            <button type="submit" disabled={isLoading} className="submit-button">
                {isLoading ? 'Enviando...' : 'Cadastrar Pagamento'}
            </button>
        </form>
    );
};

export default FormPagamento;