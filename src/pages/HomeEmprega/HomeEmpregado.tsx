import CardInfo from "../../components/cardInfo/CardInfo";

export default function HomeEmpregado() {
  const handleSearch = () => {
    const searchValue = (document.getElementById('searchInput') as HTMLInputElement)?.value;
    console.log('Valor pesquisado:', searchValue);
  };

  return (
    <div className="min-h-screen w-full bg-[#F2F2F2]">
      <main className="px-8 py-6 space-y-6">
        <div className="flex items-center space-x-2 text-sm text-[#81868C]">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#00070D]">Área do Funcionário</span>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-[#81868C]">
          <div className="relative w-full max-w-md">
            <input
              id="searchInput"
              type="text"
              className="w-full border border-[#81868C] rounded-full p-2 pl-10 bg-white text-[#00070D] placeholder-[#81868C] focus:outline-none focus:border-[#11C5D9]"
              placeholder="Pesquisar..."
            />
            <button
              onClick={handleSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1 hover:text-[#11C5D9] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <CardInfo />

        <div className="bg-white border border-[#81868C] rounded-lg shadow-sm">
          <div className="border-b border-[#81868C] px-6 py-4 bg-[#F2F2F2] flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#00070D]">Informações de Pagamentos</h2>
            <div className="flex items-center space-x-2">
              <select className="border border-[#81868C] rounded px-3 py-1 text-sm bg-white">
                <option>Março 2024</option>
                <option>Fevereiro 2024</option>
                <option>Janeiro 2024</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-6 gap-4">
              {[
                { title: 'Datas', value: '01/03/2024 - 31/03/2024' },
                { title: 'Salário Bruto', value: 'R$ 5.000,00' },
                { title: 'Horas Trabalhadas', value: '160h' },
                { title: 'Descontos Aplicados', value: 'R$ 750,00' },
                { title: 'Bônus Aplicados', value: 'R$ 300,00' },
                { title: 'Salário Líquido', value: 'R$ 4.550,00' }
              ].map((item) => (
                <div key={item.title} className="bg-[#F2F2F2] border-2 border-[#11C5D9] rounded-lg p-4 hover:border-[#0FB1C7] transition-colors">
                  <h3 className="font-medium text-[#00070D] mb-2">{item.title}</h3>
                  <p className="text-lg font-semibold text-[#11C5D9]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}