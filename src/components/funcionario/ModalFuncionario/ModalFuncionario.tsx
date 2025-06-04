import Popup from 'reactjs-popup';
import FormFuncionario from '../FormFuncionario/FormFuncionario';
import 'reactjs-popup/dist/index.css';
import './ModalFuncionario.css'; // opcional

function ModalFuncionario() {
  return (
    <Popup
      trigger={
        <button
          className="px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow"
          style={{
            backgroundColor: '#475569',  // cinza azulado médio
            color: '#F2F2F2',            // branco suave
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#334155')} // hover mais escuro
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#475569')}
        >
          Cadastrar Funcionário
        </button>
      }
      modal
    >
      <FormFuncionario />
    </Popup>
  );
}

export default ModalFuncionario;
