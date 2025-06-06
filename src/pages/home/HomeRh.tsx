import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import searchIcon from '../../assets/search/search.svg';
import { AuthContext } from '../../contexts/AuthContext';
import Calendar from '../../components/calendar/Calendar';
import CardInfo from '../../components/card-info/CardInfo';
import Dashboard from '../../components/dashboard/Dashboard';
import ModalPagamentos from '../../components/pagamentos/modal-pagamentos/ModalPagamentos';
import ListarPagamentos from '../../components/pagamentos/listar-pagamentos/ListarPagamentos';
import ModalFuncionario from '../../components/funcionarios/modal-funcionario/ModalFuncionario';

const Home: React.FC = () => {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)


    useEffect(() => {
        if (usuario.token === "") {
            alert("Você precisa estar logado")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <main className="p-6 bg-slate-100 min-h-screen">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Painel do RH</h1>

            <div className="flex gap-4 mb-6 justify-center">

                <div className="flex gap-4 justify-center">
                    < ModalPagamentos />
                    < ModalFuncionario />
                </div>

                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden shadow-sm w-full max-w-sm p-1 ">
                    <input
                        type="text"
                        placeholder="Buscar funcionário..."
                        className="w-full px-4 py-2 focus:outline-none"
                    />
                    <button
                        className="p-2 rounded-full transition-all duration-300 hover:shadow-md"
                        title="Buscar"
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#11C5D9")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                    >
                        <img src={searchIcon} alt="Buscar" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mb-6">
                <CardInfo />
            </div>

            <div className="w-full max-w-4xl mx-auto bg-slate-50 border border-blue-200 rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-7 gap-4 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-200 items-center text-center">
                    <span>Nome</span>
                    <span>Mês</span>
                    <span>Salário Bruto</span>
                    <span>Horas</span>
                    <span>Descontos</span>
                    <span>Bônus</span>
                    <span>Salário Líquido</span>
                </div>

                <section className="grid grid-cols-1 gap-1 p-2">
                    < ListarPagamentos />
                </section>
            </div>

            <div className="max-w-4xl mx-auto mt-6 flex items-start">
                <div className="w-80 transform scale-90 origin-top-left">
                    <Calendar />
                </div>

                <Dashboard />
            </div>
        </main>
    );
};

export default Home;