import React from 'react';
import '../../../css/Form.css';

const FormFuncionario: React.FC = () => {
  return (
    <form className="form-container">
      <input type="text" placeholder="Nome do Funcionário" className="input-field" />
      <input type="text" placeholder="Cargo" className="input-field" />
      <input type="number" placeholder="Salário Base" className="input-field" />
      <button type="submit" className="submit-button">
        Cadastrar
      </button>
    </form>
  );
};

export default FormFuncionario;
