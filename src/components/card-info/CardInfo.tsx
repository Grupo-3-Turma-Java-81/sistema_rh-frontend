import React from 'react';

export interface CardInfoProps {
    nome?: string;
    usuario?: string;
    departamento?: string;
    cargo?: string;
    dataAdmissao?: string;
    status?: 'ativo' | 'inativo';
    foto?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
    nome = '',
    usuario = '',
    status = 'ativo',
    foto,
}) => {
    return (
        <div className="bg-white border border-blue-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-7 gap-4 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-200 items-center text-center">
                <h2 className="col-span-7 text-left text-lg font-semibold text-[#00070D]">
                    Informações do Funcionário
                </h2>
            </div>

            <div className="p-6 flex items-center space-x-6">
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full border-2 border-[#11C5D9] p-1">
                        {foto ? (
                            <img
                                src={foto}
                                alt={`Foto de ${nome}`}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-[#F2F2F2] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-[#11C5D9]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>

                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-[#81868C]">Nome Completo</label>
                            <p className="text-[#00070D] font-medium">{nome || '-'}</p>
                        </div>

                        <div>
                            <label className="block text-sm text-[#81868C]">Email</label>
                            <p className="text-[#00070D] font-medium">{usuario || '-'}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardInfo;