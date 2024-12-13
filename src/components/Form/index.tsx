import React, { useEffect, useState } from 'react';
import './Form.css';
import axios from 'axios';

interface FormProps {
  selectedTable: string;
}

const Form: React.FC<FormProps> = ({ selectedTable }) => {
  const [formData, setFormData] = useState<any>({});
  const [records, setRecords] = useState<any[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setFormData({});
    setErrorMessage(null);
    setEditingIndex(null);
  }, [selectedTable]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
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
      case 'telefones':
        return 'https://localhost:7162/api/Telefone';
      case 'reservas':
        return 'https://localhost:7162/api/Reserva';
      case 'veiculos':
        return 'https://localhost:7162/api/Veiculo';
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
      if (!apiEndpoint) throw new Error('API endpoint não encontrado para a tabela selecionada.');

      await axios.post(apiEndpoint, formData);
      if (editingIndex !== null) {
        const updatedRecords = [...records];
        updatedRecords[editingIndex] = formData;
        setRecords(updatedRecords);
        setEditingIndex(null);
      } else {
        setRecords((prevRecords) => [...prevRecords, formData]);
      }
      setFormData({});
    } catch (error: any) {
      setErrorMessage(error.response?.data.message || 'Erro ao enviar os dados.');
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setFormData(records[index]);
  };

  const handleDelete = (index: number) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  const renderFormFields = () => {
    const normalizedTable = selectedTable.toLowerCase();

    switch (normalizedTable) {
      case 'clientes':
        return (
          <>
            <input
              type="text"
              name="Nome"
              placeholder="Nome do Cliente"
              onChange={handleChange}
              value={formData.Nome || ''}
            />
            <input
              type="text"
              name="CPF"
              placeholder="CPF"
              onChange={handleChange}
              value={formData.CPF || ''}
            />
            <input
              type="text"
              name="CNPJ"
              placeholder="CNPJ"
              onChange={handleChange}
              value={formData.CNPJ || ''}
            />
          </>
        );
      case 'pagamentos':
        return (
          <>
            <input
              type="number"
              name="Valor"
              placeholder="Valor do Pagamento"
              onChange={handleChange}
              value={formData.Valor || ''}
            />
            <input
              type="number"
              name="MetodoPagamentoId"
              placeholder="ID do Método de Pagamento"
              onChange={handleChange}
              value={formData.MetodoPagamentoId || ''}
            />
            <input
              type="number"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
          </>
        );
      case 'metodospagamento':
        return (
          <>
            <input
              type="text"
              name="Descricao"
              placeholder="Descrição do Método de Pagamento"
              onChange={handleChange}
              value={formData.Descricao || ''}
            />
          </>
        );
      case 'vagas':
        return (
          <>
            <input
              type="text"
              name="Descricao"
              placeholder="Descrição da Vaga"
              onChange={handleChange}
              value={formData.Descricao || ''}
            />
            <input
              type="number"
              name="Status"
              placeholder="Status da Vaga"
              onChange={handleChange}
              value={formData.Status || ''}
            />
          </>
        );
      case 'enderecos':
        return (
          <>
            <input
              type="text"
              name="Logradouro"
              placeholder="Logradouro"
              onChange={handleChange}
              value={formData.Logradouro || ''}
            />
            <input
              type="text"
              name="Numero"
              placeholder="Número"
              onChange={handleChange}
              value={formData.Numero || ''}
            />
          </>
        );
      case 'estacionamentos':
        return (
          <>
            <input
              type="text"
              name="Nome"
              placeholder="Nome do Estacionamento"
              onChange={handleChange}
              value={formData.Nome || ''}
            />
            <input
              type="text"
              name="CNPJ"
              placeholder="CNPJ do Estacionamento"
              onChange={handleChange}
              value={formData.CNPJ || ''}
            />
            <input
              type="number"
              name="EnderecoId"
              placeholder="ID do Endereço"
              onChange={handleChange}
              value={formData.EnderecoId || ''}
            />
            <input
              type="text"
              name="Telefone"
              placeholder="Telefone de Contato"
              onChange={handleChange}
              value={formData.Telefone || ''}
            />
          </>
        );
      case 'telefones':
        return (
          <>
            <input
              type="text"
              name="Numero"
              placeholder="Número de Telefone"
              onChange={handleChange}
              value={formData.Numero || ''}
            />
            <input
              type="text"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
          </>
        );
      case 'reservas':
        return (
          <>
            <input
              type="text"
              name="ReservaCodigo"
              placeholder="Código da Reserva"
              onChange={handleChange}
              value={formData.ReservaCodigo || ''}
            />
            <input
              type="text"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
          </>
        );
      case 'veiculos':
        return (
          <>
            <input
              type="text"
              name="Placa"
              placeholder="Placa do Veículo"
              onChange={handleChange}
              value={formData.Placa || ''}
            />
            <input
              type="text"
              name="Modelo"
              placeholder="Modelo do Veículo"
              onChange={handleChange}
              value={formData.Modelo || ''}
            />
          </>
        );
      case 'tipoveiculo':
        return (
          <>
            <input
              type="text"
              name="Descricao"
              placeholder="Descrição do Tipo de Veículo"
              onChange={handleChange}
              value={formData.Descricao || ''}
            />
          </>
        );
      case 'estadosbrasileiros':
        return (
          <>
            <input
              type="text"
              name="Nome"
              placeholder="Nome do Estado"
              onChange={handleChange}
              value={formData.Nome || ''}
            />
            <input
              type="text"
              name="Sigla"
              placeholder="Sigla do Estado"
              onChange={handleChange}
              value={formData.Sigla || ''}
            />
          </>
        );
      case 'statusvaga':
        return (
          <>
            <input
              type="text"
              name="Descricao"
              placeholder="Descrição do Status da Vaga"
              onChange={handleChange}
              value={formData.Descricao || ''}
            />
          </>
        );
      case 'statusreserva':
        return (
          <>
            <input
              type="text"
              name="Descricao"
              placeholder="Descrição do Status da Reserva"
              onChange={handleChange}
              value={formData.Descricao || ''}
            />
          </>
        );
      case 'entradassaidas':
        return (
          <>
            <input
              type="text"
              name="Entrada"
              placeholder="Horário de Entrada"
              onChange={handleChange}
              value={formData.Entrada || ''}
            />
            <input
              type="text"
              name="Saida"
              placeholder="Horário de Saída"
              onChange={handleChange}
              value={formData.Saida || ''}
            />
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
        <button className="buttonSave" type="submit">
          {editingIndex !== null ? 'Atualizar' : 'Salvar'}
        </button>
      </form>

      <div className="records-table">
        {records.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(records[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  {Object.values(record).map((value, i) => (
                    <td key={i}>{String(value)}</td> 
                  ))}
                  <td>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => handleDelete(index)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Form;
