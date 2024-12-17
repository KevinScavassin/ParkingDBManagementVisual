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
  setRecords([]); 
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
        return 'https://localhost:7162/api/MetodoPagamento';
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
              type="number"
              name="EstacionamentoId"
              placeholder="ID do Estacionamento"
              onChange={handleChange}
              value={formData.EstacionamentoId || ''}
            />
            <input
              type="number"
              name="TipoVeiculoId"
              placeholder="ID do Tipo de Veiculo"
              onChange={handleChange}
              value={formData.TipoVeiculoId || ''}
            />
            <input
              type="number"
              name="StatusVagaId"
              placeholder="ID do Status da Vaga"
              onChange={handleChange}
              value={formData.StatusVagaId || ''}
            />
          </>
        );
      case 'enderecos':
        return (
          <>
            <input
              type="text"
              name="Rua"
              placeholder="Rua"
              onChange={handleChange}
              value={formData.Rua || ''}
            />
            <input
              type="text"
              name="Numero"
              placeholder="Número"
              onChange={handleChange}
              value={formData.Numero || ''}
            />
            <input
              type="text"
              name="Complemento"
              placeholder="Complemento"
              onChange={handleChange}
              value={formData.Complemento || ''}
            />
            <input
              type="text"
              name="Cep"
              placeholder="Cep"
              onChange={handleChange}
              value={formData.Cep || ''}
            />
            <input
              type="text"
              name="Cidade"
              placeholder="Cidade"
              onChange={handleChange}
              value={formData.Cidade || ''}
            />
            <input
              type="number"
              name="EstadoId"
              placeholder="ID do Estado"
              onChange={handleChange}
              value={formData.EstadoId || ''}
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
              type="number"
              name="Capacidade"
              placeholder="Capacidade do Estacionamento"
              onChange={handleChange}
              value={formData.Capacidade || ''}
            />
            <input
              type="number"
              name="EnderecoId"
              placeholder="ID do Endereço"
              onChange={handleChange}
              value={formData.EnderecoId || ''}
            />
          </>
        );
      case 'telefones':
        return (
          <>
            <input
              type="text"
              name="DDD"
              placeholder="DDD"
              onChange={handleChange}
              value={formData.DDD || ''}
            />
            <input
              type="text"
              name="Numero"
              placeholder="Número de Telefone"
              onChange={handleChange}
              value={formData.Numero || ''}
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
      case 'reservas':
        return (
          <>
            <input
              type="datetime-local"
              name="DataHoraEntrada"
              placeholder="DataHoraEntrada"
              onChange={handleChange}
              value={formData.DataHoraEntrada || ''}
            />
            <input
              type="text"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
            <input
              type="text"
              name="VagaId"
              placeholder="ID da Vaga"
              onChange={handleChange}
              value={formData.VagaId || ''}
            />
            <input
              type="text"
              name="StatusReservaId"
              placeholder="ID do Status da Reserva"
              onChange={handleChange}
              value={formData.StatusReservaId || ''}
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
              name="Cor"
              placeholder="Cor do Veículo"
              onChange={handleChange}
              value={formData.Cor || ''}
            />
            <input
              type="text"
              name="Modelo"
              placeholder="Modelo do Veículo"
              onChange={handleChange}
              value={formData.Modelo || ''}
            />
            <input
              type="number"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
            <input
              type="number"
              name="TipoVeiculoId"
              placeholder="ID do TipoVeiculo"
              onChange={handleChange}
              value={formData.TipoVeiculoId || ''}
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
              name="UF"
              placeholder="Sigla do Estado"
              onChange={handleChange}
              value={formData.UF || ''}
            />
            <input
              type="text"
              name="Nome"
              placeholder="Nome do Estado"
              onChange={handleChange}
              value={formData.Nome || ''}
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
              type="datetime-local"
              name="Entrada"
              placeholder="Horário de Entrada"
              onChange={handleChange}
              value={formData.Entrada || ''}
            />
            <input
              type="datetime-local"
              name="Saida"
              placeholder="Horário de Saída"
              onChange={handleChange}
              value={formData.Saida || ''}
            />
            <input
              type="text"
              name="VagaId"
              placeholder="ID da Vaga"
              onChange={handleChange}
              value={formData.VagaId || ''}
            />
            <input
              type="text"
              name="VeiculoId"
              placeholder="ID do Veiculo"
              onChange={handleChange}
              value={formData.VeiculoId || ''}
            />
            <input
              type="text"
              name="ClienteId"
              placeholder="ID do Cliente"
              onChange={handleChange}
              value={formData.ClienteId || ''}
            />
            <input
              type="text"
              name="PagamentoId"
              placeholder="ID do Pagamento"
              onChange={handleChange}
              value={formData.PagamentoId || ''}
            />
          </>
        );
      default:
        return <p>Selecione uma tabela para gerenciar os dados.</p>;
    }
  };

  const allKeys = Array.from(
    new Set(records.flatMap((record) => Object.keys(record)))
  );

  return (
    <div className="FormInteiro">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="buttonSave" type="submit">
            {editingIndex !== null ? 'Atualizar' : 'Salvar'}
          </button>
        </form>
      </div>
      <div className="records-table">
        {records.length > 0 ? (
          <table className="bodyForm">
            <thead>
            <tr>
              {allKeys.map((key, index) => (
                <th key={index}>{key}</th>
              ))}
              <th>Ações</th>
            </tr>
            </thead>
          <tbody>
            {records.map((record, rowIndex) => (
              <tr key={rowIndex}>
                {allKeys.map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className={
                      record[key] === null || record[key] === "" ? "null-value" : ""
                    }
                  >
                    {record[key] !== null && record[key] !== ""
                      ? String(record[key])
                      : "N/A"}
                  </td>
                ))}
                <td className="action-buttons">
                  <button onClick={() => handleEdit(rowIndex)}>Editar</button>
                  <button onClick={() => handleDelete(rowIndex)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>

          </table>
        ) : (
          <p>Nenhum registro encontrado para a tabela selecionada.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
