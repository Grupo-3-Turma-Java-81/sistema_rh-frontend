import React from 'react';
import '../../../css/Form.css';

const FormPagamento: React.FC = () => {
  return (
    <form className="form-container">
      <input type="text" placeholder="Nome do Funcionário" className="input-field" />
      <input type="date" className="input-field" />
      <input type="number" placeholder="Salário Bruto" className="input-field" />
      <input type="number" placeholder="Horas Trabalhadas" className="input-field" />
      <input type="number" placeholder="Descontos" className="input-field" />
      <input type="number" placeholder="Bônus" className="input-field" />
      <button type="submit" className="submit-button">
        Adicionar Pagamento
      </button>
    </form>
  );
};

export default FormPagamento;
