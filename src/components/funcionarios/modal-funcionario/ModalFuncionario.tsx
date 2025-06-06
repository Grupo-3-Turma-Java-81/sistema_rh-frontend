import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './ModalFuncionario.css';
import FormFuncionario from '../form-funcionario/FormFuncionario';

function ModalFuncionario() {
    return (
        <Popup
            trigger={
                <button
                    className="px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow"
                    style={{
                        backgroundColor: '#475569',
                        color: '#F2F2F2',
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#334155')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#475569')}
                >
                    Cadastrar Funcionário
                </button>
            }
            modal
        >
            < FormFuncionario />
        </Popup>
    );
}

export default ModalFuncionario;