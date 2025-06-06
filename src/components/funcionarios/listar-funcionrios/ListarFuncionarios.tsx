import { Oval } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import type { Funcionario } from '../../../models/Funcionario';
import CardFuncionarios from '../card-funcionario/CardFuncionario';


function ListarFuncionarios() {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario?.token ?? "";

    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            alert('Você precisa estar logado');
            navigate('/');
            return;
        }

        async function buscarFuncionarios() {
            setLoading(true);
            try {
                await buscar('/funcionarios', setFuncionarios, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao buscar funcionarios');
                    console.error(error);
                }
            } finally {
                setLoading(false);
            }
        }

        buscarFuncionarios();
    }, [token, navigate, handleLogout]);

    if (loading) {
        return (
            <div className="flex justify-center items-center my-8">
                <Oval
                    height={40}
                    width={40}
                    color="#4f46e5"
                    secondaryColor="#c7d2fe"
                    strokeWidth={4}
                    strokeWidthSecondary={2}
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto px-4 pt-20">
                <h1 className="text-2xl font-bold text-center text-[#00070D] mb-6">Lista de funcionários</h1>
            </div>

            {funcionarios.length > 0 ? (
                funcionarios.map((funcionario) => (
                    < CardFuncionarios key={funcionario.nome} funcionario={funcionario} />
                ))
            ) : (
                <p className="text-center text-slate-600 py-4">Nenhum funcionario encontrado.</p>
            )}
        </>
    );
}

export default ListarFuncionarios;