export default interface Pagamento {
  id?: number;
  descricao: string;
  salarioBaseHora: number;
  mesReferencia: string;
  horasTotais: number;
  bonus?: number;
  descontos?: number;
  valorFinal?: number;
}