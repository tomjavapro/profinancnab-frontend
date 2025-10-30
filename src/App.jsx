import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  // Criando uma variável que será obtida usando a função do React 'useState' que retornará uma lista de transações.
  const [transactions, setTransactions] = useState([]);
  // 'setTransactions' é uma função que atualiza as transações.

  // Estado para armazenar um arquivo. Inicializado com null.
  const [file, setFile] = useState(null);

  // Essa função assíncrona vai fazer a chamada para o backend. Obter as transações.
  const fetchTransactions = async () => {

    // Fazendo uma requisição http no javascript usando uma biblioteca chamada axios (npm install axios)
    // await para que essa chamada assíncrona seja esperada.
    const response = await axios.get("http://localhost:8080/transacoes");

    // Atualizando o estado colocando a resposta.
    setTransactions(response.data);

    // Log para testar se a chamada está funcionando.
    console.log(response.data);


  }

  // Recebendo um evento 'e'.
  // Quando essa função for chamada, ela carregará o estado 'file' no componente App, e quando ele está no estado, podemos usa-lo em outras funções e atualizar a tela de acordo.
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // targe = Objeto, componente dentro do evento.
    // files[0] = Primeiro arquivo arnexado no componente.
  }

  // Agora que o arquivo está carregado no estado.
  // Chamando o backend e chamar o método de upload.
  const uploadFile = async () => {

    // O backend está recendo um formData
    const formData = new FormData();

    // Adicionando no formData o arquivo que está no estado no React.
    formData.append('file', file);

    // Chamado o backend
    // No backend, no upload, o headers está multipart/form-data em CNABController. (public String upload(@RequestParam("file") MultipartFile file))
    axios.post("http://localhost:8080/cnab/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  // Para chamar a função assim que o componente carregar, usarenos 'useEffect()' do React.
  // O segundo argumento será uma lista vazia, o que significa que o 'useEffect' só será chamado uma única vez. Por isso uma lista vazia.
  // O que for passado nessa lista, sera usado como argumento para recarregar esse Hook.
  useEffect(() => {
    fetchTransactions();
  }, [])

  const formatCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(value));

    return formattedValue;
  };

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-2xl font-semibold mb-4'>Importação de CNAB</h1>
      </div>

      {/* Agrupando o nosso formulário de upload. */}
      <div className='mb-8'>
        <span className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded-lg">Choose File </span>

        {/* handleFileChange = Chamada quando houver o upload do arquivo */}
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
        />

        {/* uploadFile = Chamada o upload do backend */}
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
          onClick={uploadFile}>
            Upload File
        </button>
      </div>

      {/* Listando as transações processadas */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Transações</h2>
        <ul className="bg-white shadow-md rounded-md p-4">
          {/* Incluindi javascrip para percorrer as transações */}
          {/* key vai sempre ser uma chave atribuída do item transaction */}
          {/* Para cada transação em transações, vai ser carregado uma li */}
          {transactions.map((report, key) => (
            <li
                key={key}
                className="mb-4 p-4 border-b border-gray-300 flex flex-col"
              >
              <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-semibold">{report.nomeDaLoja}</div>
                <div className={`text-${parseFloat(report.total) >= 0 ? 'green' : 'red'}-500 font-semibold`}>
                  Total: {formatCurrency(parseFloat(report.total))}
                </div>
              </div>

              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <th className='px-4 py-2'>Cartão</th>
                    <th className='px-4 py-2'>CPF</th>
                    <th className='px-4 py-2'>Data</th>
                    <th className='px-4 py-2'>Dona da Loja</th>
                    <th className='px-4 py-2'>Hora</th>
                    <th className='px-4 py-2'>Nome da Loja</th>
                    <th className='px-4 py-2'>Tipo</th>
                    <th className='px-4 py-2'>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {report.transacoes.map((transacao, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className='px-4 py-2'>{transacao.cartao}</td>
                    <td className='px-4 py-2'>{transacao.cpf}</td>
                    <td className='px-4 py-2'>{transacao.data}</td>
                    <td className='px-4 py-2'>{transacao.donoDaLoja}</td>
                    <td className='px-4 py-2'>{transacao.hora}</td>
                    <td className='px-4 py-2'>{transacao.nomeDaLoja}</td>
                    <td className='px-4 py-2'>{transacao.tipo}</td>
                    <td className='px-4 py-2'>{formatCurrency(transacao.valor)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default App
