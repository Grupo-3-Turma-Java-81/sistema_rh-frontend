import { useNavigate } from "react-router-dom";
import CardPagamentos from "../CardPagamentos/CardPagamentos"; // componente para exibir cada pagamento
import { useState, useContext, useEffect } from "react";
import type Pagamento from "../../../models/Pagamento"; // tipo pagamento
import { buscar } from "../../../services/Service";
import { Oval } from 'react-loader-spinner';
import { AuthContext } from "../../../contexts/AuthContext";

function ListaPagamentos() {
  const navigate = useNavigate();

  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPagamentos() {
    try {
      await buscar('/pagamentos', setPagamentos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarPagamentos();
  }, [pagamentos.length]);

  return (
    <>
      {pagamentos.length === 0 && (
        <div className="flex justify-center items-center my-8">
          <Oval
            height={40}
            width={40}
            color="#4f46e5"
            secondaryColor="#c7d2fe"
            strokeWidth={4}
            strokeWidthSecondary={2}
            ariaLabel="loading"
          />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pagamentos.map((pagamento) => (
              <CardPagamentos key={pagamento.id} pagamento={pagamento} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPagamentos;