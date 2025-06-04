const CardInfo = () => {
    return (
        <div className="bg-white border border-[#81868C] rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-[#81868C] px-6 py-4 bg-[#F2F2F2]">
            <h2 className="text-lg font-semibold text-[#00070D]">Informações do Funcionário</h2>
          </div>
          <div className="p-6 flex items-start space-x-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-24 h-24 rounded-full border-2 border-[#11C5D9] p-1">
                <div className="w-full h-full rounded-full bg-[#F2F2F2] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#11C5D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Ativo
              </span>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#81868C]">Nome Completo</label>
                  <p className="text-[#00070D] font-medium">Vitor Teles</p>
                </div>
                <div>
                  <label className="block text-sm text-[#81868C]">Departamento</label>
                  <p className="text-[#00070D] font-medium">Tecnologia da Informação</p>
                </div>
                <div>
                  <label className="block text-sm text-[#81868C]">Cargo</label>
                  <p className="text-[#00070D] font-medium">Desenvolvedor Full Stack</p>
                </div>
                <div>
                  <label className="block text-sm text-[#81868C]">Data de Admissão</label>
                  <p className="text-[#00070D] font-medium">01/03/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardInfo;