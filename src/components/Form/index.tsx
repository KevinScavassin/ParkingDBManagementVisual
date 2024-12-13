import React from 'react';
import './Form.css';

interface FormProps {
  selectedTable: string;
}

const Form: React.FC<FormProps> = ({ selectedTable }) => {
  const renderFormFields = () => {
    const normalizedTable = selectedTable.toLowerCase();

    switch (normalizedTable) {
      case 'pagamentos':
        return (
          <>
            <input type="number" placeholder="ID do Método de Pagamento" />
            <input type="number" placeholder="ID de Entrada/Saída" />
            <input type="number" placeholder="ID do Cliente" />
            <input type="number" placeholder="Valor do Pagamento" />
          </>
        );
      case 'metodospagamento':
        return (
          <>
            <input type="text" placeholder="Descrição" />
          </>
        );
      case 'vagas':
        return (
          <>
            <input type="number" placeholder="ID do Estacionamento" />
            <input type="number" placeholder="ID do Tipo de Veículo" />
            <input type="number" placeholder="ID do Status da Vaga" />
          </>
        );
      case 'enderecos':
        return (
          <>
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Cidade" />
            <input type="number" placeholder="ID do Estado" />
          </>
        );
      case 'clientes':
        return (
          <>
            <input type="text" placeholder="Nome do Cliente" />
            <input type="text" placeholder="CPF" />
          </>
        );
      case 'telefones':
        return (
          <>
            <input type="number" placeholder="ID do Cliente" />
            <input type="text" placeholder="Número de Telefone" />
          </>
        );
      case 'reservas':
        return (
          <>
            <input type="number" placeholder="ID do Cliente" />
            <input type="number" placeholder="ID da Vaga" />
            <input type="number" placeholder="ID do Status da Reserva" />
          </>
        );
      case 'veiculos':
        return (
          <>
            <input type="number" placeholder="ID do Cliente" />
            <input type="text" placeholder="Placa do Veículo" />
            <input type="text" placeholder="Cor do Veículo" />
          </>
        );
      case 'tipoveiculo':
        return (
          <>
            <input type="text" placeholder="Tipo de Veículo" />
            <input type="text" placeholder="Descrição" />
          </>
        );
      case 'estadosbrasileiros':
        return (
          <>
            <input type="text" placeholder="Nome do Estado" />
            <input type="text" placeholder="Sigla do Estado" />
          </>
        );
      case 'estacionamentos':
        return (
          <>
            <input type="text" placeholder="Nome do Estacionamento" />
            <input type="text" placeholder="Capacidade Total" />
            <input type="number" placeholder="ID do Endereço" />
          </>
        );  
      case 'tiposveiculo':
        return (
          <>
            <input type="text" placeholder="Tipo do Veículo" />
          </>
        );  
      case 'statusvaga':
        return (
          <>
            <input type="text" placeholder="Status da Vaga" />
          </>
        );  
      case 'statusreserva':
        return (
          <>
            <input type="text" placeholder="Status da Reserva" />
          </>
        );  
      case 'entradassaidas':
        return (
          <>
            <input type="datetime-local" />
            <input type="datetime-local" />
            <input type="number" placeholder="ID da Vaga" />
            <input type="number" placeholder="ID do Veículo" />
            <input type="number" placeholder="ID do Cliente" />
            <input type="number" placeholder="ID do Pagamento" />
          </>
        );  
      default:
        return <p>Selecione uma tabela para gerenciar os dados.</p>;
    }
  };

  return (
    <div className="form-container">
       <form>
          {renderFormFields()}
          <button className="buttonSave" type="submit">Salvar</button>
        </form>
    </div>
  );
};

export default Form;
