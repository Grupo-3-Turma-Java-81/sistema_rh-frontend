import React, {
    useEffect,
    useState,
    type ChangeEvent,
    useContext,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './FormFuncionario.css';
import { AuthContext } from '../../../contexts/AuthContext';
import type { Funcionario } from '../../../models/Funcionario';
import { buscar, cadastrar, atualizar } from '../../../services/Service';

const FormFuncionario: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    console.log(token);

    const [funcionario, setFuncionario] = useState<Funcionario>({
        nome: '',
        cargo: '',
        departamento: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            buscar(`/funcionarios/${id}`, setFuncionario, {
                headers: {
                    Authorization: usuario.token,
                },
            }).catch(() => alert('Erro ao carregar funcionário'));
        }
    }, [id, token]);

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
                await atualizar(`/funcionarios/${id}`, funcionario, setFuncionario, {
                    headers: {
                        Authorization: usuario.token,
                    },
                });
                alert('Funcionário atualizado!');
            } else {
                await cadastrar('/funcionarios', funcionario, setFuncionario, {
                    headers: {
                        Authorization: usuario.token,
                    },
                });
                alert('Funcionário cadastrado!');
            }
            navigate('/lista-funcionarios');
        } catch (error) {
            alert('Erro ao salvar funcionário');
            console.error(error);
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