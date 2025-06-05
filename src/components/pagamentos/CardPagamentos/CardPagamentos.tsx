import type Pagamento from "../../../models/Pagamento";

interface CardPagamentoProps {
  pagamento: Pagamento;
}

const CardPagamento: React.FC<CardPagamentoProps> = ({ pagamento }) => {
  const {
    descricao,
    mesReferencia,
    salarioBaseHora,
    horasTotais,
    bonus = 0,
    descontos = 0,
    valorFinal = 0,
  } = pagamento;

  const salarioBruto = salarioBaseHora * horasTotais;

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
        <span style={{ color: '#00070D' }} className="font-semibold">{descricao}</span>
        <span style={{ color: '#81868C' }} className="text-sm">{mesReferencia}</span>
        <p style={{ color: '#00070D' }} className="font-bold">R$ {salarioBruto.toFixed(2)}</p>
        <p style={{ color: '#00070D' }}>{horasTotais}h</p>
        <p className="text-red-600">- R$ {descontos.toFixed(2)}</p>
        <p className="text-green-600">+ R$ {bonus.toFixed(2)}</p>
        <p className="text-black text-xl font-semibold">R$ {valorFinal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CardPagamento;