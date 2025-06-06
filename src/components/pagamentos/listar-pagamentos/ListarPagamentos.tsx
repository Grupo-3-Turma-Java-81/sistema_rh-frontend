import { Oval } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { buscar } from "../../../services/Service";
import type Pagamento from "../../../models/Pagamento";
import { AuthContext } from "../../../contexts/AuthContext";
import CardPagamentos from '../card-pagamentos/CardPagamentos';


function ListarPagamentos() {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario?.token ?? "";

    const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            alert('Você precisa estar logado');
            navigate('/');
            return;
        }

        async function buscarPagamentos() {
            setLoading(true);
            try {
                await buscar('/pagamentos', setPagamentos, {
                    headers: { Authorization: token },
                });
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao buscar pagamentos');
                    console.error(error);
                }
            } finally {
                setLoading(false);
            }
        }

        buscarPagamentos();
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
            {pagamentos.length > 0 ? (
                pagamentos.map((pagamento) => (
                    < CardPagamentos key={pagamento.id} pagamento={pagamento} />
                ))
            ) : (
                <p className="text-center text-slate-600 py-4">Nenhum pagamento encontrado.</p>
            )}
        </>
    );
}

export default ListarPagamentos;