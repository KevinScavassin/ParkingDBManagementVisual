import React, { useState } from 'react';
import './Sidebar.css';

interface SidebarProps {
  onSelectTable: (tableName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectTable }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const tables = [
    { name: 'Clientes', id: 'Clientes' },
    { name: 'Endereços', id: 'Enderecos' },
    { name: 'Estacionamentos', id: 'Estacionamentos' },
    { name: 'Veículos', id: 'Veiculos' },
    { name: 'Tipos de Veículo', id: 'TipoVeiculo' },
    { name: 'Vagas', id: 'Vagas' },
    { name: 'Status da Vaga', id: 'StatusVaga' },
    { name: 'Reservas', id: 'Reservas' },
    { name: 'Status da Reserva', id: 'StatusReserva' },
    { name: 'Entradas e Saídas', id: 'EntradasSaidas' },
    { name: 'Pagamentos', id: 'Pagamentos' },
    { name: 'Métodos de Pagamento', id: 'MetodosPagamento' },
    { name: 'Telefones', id: 'Telefones' },
    { name: 'Estados Brasileiros', id: 'EstadosBrasileiros' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen); // Alternar o estado do sidebar

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '<-' : '->'} 
      </button>
      <div className="content">
        <h3>Tabelas</h3>
        <ul>
          {tables.map((table) => (
            <li key={table.id}>
              <button onClick={() => onSelectTable(table.id)}>{table.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
