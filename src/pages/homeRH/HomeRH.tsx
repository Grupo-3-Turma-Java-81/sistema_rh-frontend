import React from 'react';
import searchIcon from '../../assets/search.svg';
import Calendar from '../../components/calendar/Calendar';
import Dashboard from '../../components/dashboard/DashBoard';
import 'reactjs-popup/dist/index.css';
import ModalFuncionario from '../../components/funcionario/ModalFuncionario/ModalFuncionario';
import ModalPagamentos from '../../components/pagamentos/ModalPagamentos/ModalPagamentos';
import CardInfo from '../../components/cardInfo/CardInfo';

const Home: React.FC = () => {
    return (
        <main className="p-6 bg-slate-100 min-h-screen">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Painel do RH</h1>

            <div className="flex gap-4 mb-6 justify-center">

                <div className="flex gap-4 justify-center">
                    <ModalPagamentos />
                    <ModalFuncionario />
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
                <CardInfo
                    nome="João Andrade"
                    departamento="Tecnologia da Informação"
                    cargo="Desenvolvedor Full Stack"
                    dataAdmissao="01/03/2024"
                    status="ativo"
                    fotoUrl="https://i.postimg.cc/pL7k4MT3/contatos-alienigenas.png"
                />
            </div>

            <div className="w-full max-w-4xl mx-auto bg-slate-50 border border-blue-200 rounded-xl shadow-sm overflow-hidden">
                {/* Cabeçalho centralizado */}
                <div className="grid grid-cols-7 gap-4 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-200 items-center text-center">
                    <span>Nome</span>
                    <span>Data</span>
                    <span>Salário Bruto</span>
                    <span>Horas</span>
                    <span>Descontos</span>
                    <span>Bônus</span>
                    <span>Salário Líquido</span>
                </div>

                {/* Lista de cards */}
                <section className="grid grid-cols-1 gap-1 p-2">

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
