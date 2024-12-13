import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

interface FormProps {
  selectedTable: string;
}

const Form: React.FC<FormProps> = ({ selectedTable }) => {
  const [formData, setFormData] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };

  const getApiEndpoint = () => {
    const normalizedTable = selectedTable.toLowerCase();

    switch (normalizedTable) {
      case 'clientes':
        return 'https://localhost:7162/api/Cliente';
      case 'pagamentos':
        return 'https://localhost:7162/api/Pagamento';
      case 'metodospagamento':
        return 'https://localhost:7162/api/MetodosPagamento';
      case 'vagas':
        return 'https://localhost:7162/api/Vaga';
      case 'enderecos':
        return 'https://localhost:7162/api/Endereco';
      case 'estacionamentos':
        return 'https://localhost:7162/api/Estacionamento';
      case 'tiposveiculos':
        return 'https://localhost:7162/api/tiposveiculos';
      case 'telefones':
        return 'https://localhost:7162/api/Telefone';
      case 'reservas':
        return 'https://localhost:7162/api/Reserva'; 
      case 'veiculos':
        return 'https://localhost:7162/api/Veiculos'; 
      case 'tipoveiculo':
        return 'https://localhost:7162/api/TipoVeiculo'; 
      case 'estadosbrasileiros':
        return 'https://localhost:7162/api/EstadosBrasileiros'; 
      case 'statusvaga':
        return 'https://localhost:7162/api/StatusVaga';
      case 'statusreserva':
        return 'https://localhost:7162/api/StatusReserva';
      case 'entradassaidas':
        return 'https://localhost:7162/api/EntradaSaida';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const apiEndpoint = getApiEndpoint();
      const response = await axios.post(apiEndpoint, formData);
      console.log(response.data);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Erro ao enviar os dados.');
      } else {
        setErrorMessage('Erro de comunicação com o servidor.');
      }
    }
  };

  const renderFormFields = () => {
    const normalizedTable = selectedTable.toLowerCase();
    switch (normalizedTable) {
      case 'clientes':
        return (
          <>
            <input type="text" name="Nome" placeholder="Nome do Cliente" onChange={handleChange} />
            <input type="text" name="CPF" placeholder="CPF" onChange={handleChange} />
          </>
        );
      case 'pagamentos':
        return (
          <>
            <input type="number" name="IDMetodo" placeholder="ID do Método de Pagamento" onChange={handleChange} />
            <input type="number" name="IDEntradaSaida" placeholder="ID de Entrada/Saída" onChange={handleChange} />
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="number" name="Valor" placeholder="Valor do Pagamento" onChange={handleChange} />
          </>
        );
      case 'vagas':
        return (
          <>
            <input type="number" name="IDEstacionamento" placeholder="ID do Estacionamento" onChange={handleChange} />
            <input type="number" name="IDTipoVeiculo" placeholder="ID do Tipo de Veículo" onChange={handleChange} />
            <input type="number" name="IDStatusVaga" placeholder="ID do Status da Vaga" onChange={handleChange} />
          </>
        );
      case 'telefones':
        return (
          <>
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="text" name="NumeroTelefone" placeholder="Número de Telefone" onChange={handleChange} />
          </>
        );
      case 'reservas':
        return (
          <>
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="number" name="IDVaga" placeholder="ID da Vaga" onChange={handleChange} />
            <input type="number" name="IDStatusReserva" placeholder="ID do Status da Reserva" onChange={handleChange} />
          </>
        );
      case 'veiculos':
        return (
          <>
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="text" name="Placa" placeholder="Placa do Veículo" onChange={handleChange} />
            <input type="text" name="Cor" placeholder="Cor do Veículo" onChange={handleChange} />
          </>
        );
      case 'entradassaidas':
        return (
          <>
            <input type="datetime-local" name="Entrada" placeholder="Data e Hora de Entrada" onChange={handleChange} />
            <input type="datetime-local" name="Saida" placeholder="Data e Hora de Saída" onChange={handleChange} />
            <input type="number" name="IDVaga" placeholder="ID da Vaga" onChange={handleChange} />
            <input type="number" name="IDVeiculo" placeholder="ID do Veículo" onChange={handleChange} />
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="number" name="IDPagamento" placeholder="ID do Pagamento" onChange={handleChange} />
          </>
        );
      case 'estacionamentos':
        return (
          <>
            <input type="text" name="Nome" placeholder="Nome do Estacionamento" onChange={handleChange} />
            <input type="text" name="CapacidadeTotal" placeholder="Capacidade Total" onChange={handleChange} />
            <input type="number" name="IDEndereco" placeholder="ID do Endereço" onChange={handleChange} />
          </>
        );
      default:
        return <p>Selecione uma tabela para gerenciar os dados.</p>;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className='buttonSave' type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Form;
