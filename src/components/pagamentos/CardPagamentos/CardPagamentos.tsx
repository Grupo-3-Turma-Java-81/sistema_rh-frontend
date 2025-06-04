interface PagamentoProps {
  nome: string;
  data: string;
  salarioBruto: number;
  horasTrabalhadas: number;
  descontos: number;
  bonus: number;
  salarioLiquido: number;
}

const CardPagamento: React.FC<PagamentoProps> = ({
  nome,
  data,
  salarioBruto,
  horasTrabalhadas,
  descontos,
  bonus,
  salarioLiquido,
}) => {
  return (
    <div
      className="
        w-full bg-white shadow-md rounded-xl p-4 border
        transition-transform duration-300
        hover:shadow-xl hover:-translate-y-1 hover:bg-[#F2F2F2]
      "
      style={{ borderColor: '#11C5D9' }}
    >
      <div className="grid grid-cols-7 gap-4 items-center text-center">
        <span style={{ color: '#00070D' }} className="font-semibold">{nome}</span>
        <span style={{ color: '#81868C' }} className="text-sm">{data}</span>
        <p style={{ color: '#00070D' }} className="font-bold">R$ {salarioBruto.toFixed(2)}</p>
        <p style={{ color: '#00070D' }}>{horasTrabalhadas}h</p>
        <p className="text-red-600">- R$ {descontos.toFixed(2)}</p>
        <p className="text-green-600">+ R$ {bonus.toFixed(2)}</p>
        <p className="text-black text-xl font-semibold">R$ {salarioLiquido.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CardPagamento;
