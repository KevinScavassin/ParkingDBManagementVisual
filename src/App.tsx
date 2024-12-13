import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './components/Form';  

const App: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const handleSelectTable = (tableName: string) => {
    setSelectedTable(tableName);
  };

  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>

      <main className="Body">
        <Sidebar onSelectTable={handleSelectTable} />
        <div className="Content">
          {selectedTable ? (
            <>
              {<h1>{selectedTable}</h1>}
              <Form selectedTable={selectedTable} /> {}
            </>
          ) : (
            <p>Selecione uma tabela na barra lateral.</p>
          )}
        </div>
      </main>

      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
