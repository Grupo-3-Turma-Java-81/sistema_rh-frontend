import type { Funcionario } from "../../../models/Funcionario";

interface CardFuncionarioProps {
    funcionario: Funcionario;
}

const CardFuncionarios: React.FC<CardFuncionarioProps> = ({ funcionario }) => {
    const {
        nome,
        cargo,
        departamento,
        id,
    } = funcionario;

    return (
        <>

            <div className="w-200 mb-8 justify-self-stretch bg-slate-50 border border-blue-200 rounded-xl shadow-sm overflow-hidden mx-auto">
                <div
                    className=" w-full bg-white shadow-md rounded-xl p-4 border
                        transition-transform duration-300
                            hover:shadow-xl hover:-translate-y-1 hover:bg-[#F2F2F2]"
                    style={{ borderColor: '#11C5D9' }}
                >


                    <div className="grid grid-cols-4 gap-4 items-center text-center">
                        <span style={{ color: '#00070D' }} className="font-semibold">{nome}</span>
                        <span style={{ color: '#81868C' }} className="text-sm">{cargo}</span>
                        <span style={{ color: '#81868C' }} className="text-sm">{departamento}</span>
                        <span style={{ color: '#81868C' }} className="text-sm">{id}</span>

                    </div>

                </div>
            </div>
        </>
    );
};

export default CardFuncionarios;