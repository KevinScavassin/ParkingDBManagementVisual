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
        return 'https://localhost:7162/api/clientes';
      case 'pagamentos':
        return 'https://localhost:7162/api/pagamentos';
      case 'metodospagamento':
        return 'https://localhost:7162/api/metodospagamento';
      case 'vagas':
        return 'https://localhost:7162/api/vagas';
      case 'enderecos':
        return 'https://localhost:7162/api/enderecos';
      case 'estacionamentos':
        return 'https://localhost:7162/api/estacionamentos';
      case 'tiposveiculos':
        return 'https://localhost:7162/api/tiposveiculos';
      case 'usuarios':
        return 'https://localhost:7162/api/usuarios';
      case 'cargos':
        return 'https://localhost:7162/api/cargos';
      case 'funcionarios':
        return 'https://localhost:7162/api/funcionarios';
      case 'faturas':
        return 'https://localhost:7162/api/faturas';
      case 'eventos':
        return 'https://localhost:7162/api/eventos';
      case 'observacoes':
        return 'https://localhost:7162/api/observacoes';
      case 'telefones':
        return 'https://localhost:7162/api/telefones';
      case 'reservas':
        return 'https://localhost:7162/api/reservas'; 
      case 'veiculos':
        return 'https://localhost:7162/api/veiculos'; 
      case 'tipoveiculo':
        return 'https://localhost:7162/api/tipoveiculo'; 
      case 'estadosbrasileiros':
        return 'https://localhost:7162/api/estadosbrasileiros'; 
      case 'statusvaga':
        return 'https://localhost:7162/api/statusvaga';
      case 'statusreserva':
        return 'https://localhost:7162/api/statusreserva';
      case 'entradassaidas':
        return 'https://localhost:7162/api/entradassaidas';
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
      case 'pagamentos':
        return (
          <>
            <input type="number" name="IDMetodo" placeholder="ID do Método de Pagamento" onChange={handleChange} />
            <input type="number" name="IDEntradaSaida" placeholder="ID de Entrada/Saída" onChange={handleChange} />
            <input type="number" name="IDCliente" placeholder="ID do Cliente" onChange={handleChange} />
            <input type="number" name="Valor" placeholder="Valor do Pagamento" onChange={handleChange} />
          </>
        );
      case 'metodospagamento':
        return (
          <>
            <input type="text" name="Descricao" placeholder="Descrição" onChange={handleChange} />
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
      case 'enderecos':
        return (
          <>
            <input type="text" name="Rua" placeholder="Rua" onChange={handleChange} />
            <input type="text" name="Cidade" placeholder="Cidade" onChange={handleChange} />
            <input type="number" name="IDEstado" placeholder="ID do Estado" onChange={handleChange} />
          </>
        );
      case 'clientes':
        return (
          <>
            <input type="text" name="Nome" placeholder="Nome do Cliente" onChange={handleChange} />
            <input type="text" name="CPF" placeholder="CPF" onChange={handleChange} />
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
      case 'tipoveiculo':
        return (
          <>
            <input type="text" name="TipoVeiculo" placeholder="Tipo de Veículo" onChange={handleChange} />
            <input type="text" name="Descricao" placeholder="Descrição" onChange={handleChange} />
          </>
        );
      case 'estadosbrasileiros':
        return (
          <>
            <input type="text" name="NomeEstado" placeholder="Nome do Estado" onChange={handleChange} />
            <input type="text" name="Sigla" placeholder="Sigla do Estado" onChange={handleChange} />
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
      case 'statusvaga':
        return (
          <>
            <input type="text" name="StatusVaga" placeholder="Status da Vaga" onChange={handleChange} />
          </>
        );
      case 'statusreserva':
        return (
          <>
            <input type="text" name="StatusReserva" placeholder="Status da Reserva" onChange={handleChange} />
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
      default:
        return <p>Selecione uma tabela para gerenciar os dados.</p>;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Enviar Dados</button>
      </form>
    </div>
  );
};

export default Form;
