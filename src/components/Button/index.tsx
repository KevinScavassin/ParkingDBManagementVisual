import './Button.css';
import axios, { AxiosError } from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Button = () => {
  const [formData, setFormData] = useState({
    Nome: '',
    Capacidade: '',
    EnderecoId: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7162/api/estacionamento', formData);
      alert('Estacionamento cadastrado com sucesso!');
      console.log('Response:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro: ${error.response?.data || 'Erro desconhecido no servidor.'}`);
      } else {
        console.error('Erro desconhecido:', error);
        alert('Erro ao conectar com o servidor.');
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Nome"
        placeholder="Nome"
        value={formData.Nome}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="Capacidade"
        placeholder="Capacidade"
        value={formData.Capacidade}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="EnderecoId"
        placeholder="ID do Endereço"
        value={formData.EnderecoId}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Button;
