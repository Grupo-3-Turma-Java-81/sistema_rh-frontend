import { equipe } from "./Equipe";

function SobreNos() {
    return (
        <div className="min-h-screen bg-[#F2F2F2] p-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#00070D] relative">
                Sobre Nós
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#11C5D9] mt-2"></div>
            </h1>

            <div className="flex justify-center mb-16">
                <div className="flex flex-col gap-8 max-w-6xl w-full px-4 bg-[#00070D]/90 rounded-lg shadow-lg p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-8">
                        <a
                            href="https://github.com/Grupo-3-Turma-Java-81/crm-frontend/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img
                                src="./src/assets/logo/neorh-logo.png"
                                alt="Logo do Neo RH"
                                className="w-64 h-64 object-contain drop-shadow-xl"
                            />
                        </a>

                        <div className="flex flex-col gap-8 text-justify">
                            <p className="max-w-3xl text-white leading-relaxed text-lg">
                                O sistema do Sistema de Recursos Humanos NeoRH é simples e eficiente de cadastro e consulta
                                de funcionario e cadastro seus respectivos salarios. Voltado para o
                                uso interno de empresas, substituindo métodos manuais de organização por uma
                                solução digital ágil e segura.
                            </p>

                            <div className="max-w-3xl bg-[#F2F2F2] p-6 rounded-lg border-2 border-[#11C5D9] shadow-lg hover:shadow-xl transition-all duration-300">
                                <p className="font-bold text-[#00070D] mb-3 text-xl">Nosso objetivo:</p>
                                <p className="leading-relaxed text-[#818688]">
                                    Automatizar o gerenciamento de dados básicos em um RHs de empresas, melhorando
                                    a organização do ambiente de trabalho, reduzindo erros e aumentando a eficiência
                                    no gerenciamento de funcionarios.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-[#11C5D9]/20 pt-8 mt-4">
                        <p className="font-bold text-white mb-4 text-center text-xl">Feito por:</p>
                        <div className="flex flex-col items-center">
                            <img
                                src="./src/assets/logo/code-cubo-logo.png"
                                alt="Logo Code-Cubo"
                                className="h-32 object-contain filter brightness-0 invert hover:scale-105 transition-transform duration-300 mb-6"
                            />
                            <div className="max-w-3xl text-center">
                                <p className="text-white/90 leading-relaxed mb-4">
                                    A Code ao Cubo é uma empresa de tecnologia formada por desenvolvedores apaixonados por resolver problemas reais com soluções simples e inteligentes. A gente acredita que tecnologia boa é aquela que funciona sem complicar.
                                </p>
                                <p className="text-white/90 leading-relaxed">
                                    Nosso compromisso é entregar sistemas que realmente transformam — seja no RH, na saúde, no financeiro ou onde for preciso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-8">
                <h2 className="text-4xl font-bold text-center text-[#00070D] relative inline-block mx-auto w-full">
                    Membros da Equipe
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                        <div className="h-1 w-24 bg-gradient-to-r from-[#11C5D9] to-[#818688]"></div>
                    </div>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-12">
                    {equipe.map((pessoa, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } group hover:transform hover:translate-y-[-4px] transition-all duration-300`}
                        >

                            <div className={`w-full md:w-1/4 ${index % 2 === 0 ? 'md:pl-4' : 'md:pr-4'}`}>
                                <div className="relative">
                                    <div className="absolute -inset-3 bg-gradient-to-r from-[#11C5D9] to-[#818688] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>

                                    <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white shadow-xl">
                                        <img
                                            src={pessoa.imagem}
                                            alt={`Imagem de ${pessoa.nome}`}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <a
                                        href={pessoa.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg className="w-5 h-5 text-[#11C5D9]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className={`w-full md:w-3/4 ${index % 2 === 0
                                    ? 'md:pl-6 md:border-l-2 md:border-[#11C5D9]/20'
                                    : 'md:pr-6 md:border-r-2 md:border-[#11C5D9]/20'
                                }`}>

                                <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#11C5D9]/10 to-transparent rounded-bl-full"></div>

                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-[#00070D] mb-2 group-hover:text-[#11C5D9] transition-colors duration-300">
                                            {pessoa.nome}
                                        </h3>

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-px w-8 bg-gradient-to-r from-[#11C5D9] to-transparent"></div>
                                            <p className="text-[#11C5D9] font-medium">
                                                {pessoa.descricao}
                                            </p>
                                        </div>

                                        <p className="text-[#818688] leading-relaxed text-sm">
                                            {pessoa.sobre}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SobreNos