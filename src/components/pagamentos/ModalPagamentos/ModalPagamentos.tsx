import Popup from 'reactjs-popup';
import FormPagamentos from '../FormPagamentos/FormPagamentos';
import 'reactjs-popup/dist/index.css';
import './ModalPagamentos.css'; // opcional

function ModalPagamentos() {
  return (
    <Popup
      trigger={
        <button
          className="px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow"
          style={{
            backgroundColor: '#11C5D9',
            color: '#FFFFFF',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0AA6B7')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#11C5D9')}
        >
          Adicionar Pagamento
        </button>
      }
      modal
    >
      <FormPagamentos />
    </Popup>
  );
}

export default ModalPagamentos;
