import { useState, useContext } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import Author from "../../Components/Author";
import * as XLSX from "xlsx";

import * as C from "./styles";
import HeaderScreens from "../../Components/HeaderScreens";
import axios from "axios";
import { RequestCrmContext } from "../../Contexts/RequestCrm";
import { RelatorioCC } from "../../Types/RelatorioCC";
import { toast } from "react-toastify";

const RelatorioDeVendas = () => {
  const { accessToken } = useContext(RequestCrmContext);

  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [loading, setLoading] = useState(false);
  const [infoTable, setInfoTable] = useState<RelatorioCC[]>([]);

  const searchOnApi = async (dataInicio: string, dataFim: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_SELLBIE}/bi/comprasconversao?idEmpresa=${process.env.REACT_APP_NUM_BAGAGGIO}&dataInicio=${dataInicio}&dataFim=${dataFim}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setLoading(false);
      toast.success(data.mensagem);
      setInfoTable(data.resultado);
    } catch (error: any) {
      toast.error(error.response.data.mensagem);
      setLoading(false);
    }
  };

  const handleExportToExcel = () => {
    const table = document.getElementById("Table2XLSX");
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, "Relatorios_de_Compras_e_Conversão.xlsx");
  };

  return (
    <LayoutScreen>
      <HeaderScreens
        title="Relatório de Vendas"
        handleExports={searchOnApi}
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
        dataFim={dataFim}
        setDataFim={setDataFim}
        loading={loading}
        handleExportToExcel={handleExportToExcel}
      />
      <Content>
        {infoTable.length <= 0 ? null : (
          <C.Container>
            <table id="Table2XLSX">
              <thead>
                <tr>
                  <th>Loja_Compra</th>
                  <th>Tipo_de_Loja</th>
                  <th>Vendedor_Compra</th>
                  <th>Data_Compra</th>
                  <th>Nome_Cliente</th>
                  <th>CPF_Cliente</th>
                  <th>Telefone_Contato</th>
                  <th>Vendedor_Contato</th>
                  <th>Vendedor_Contato_Matricula</th>
                  <th>Loja_Vendedor_Contato</th>
                  <th>Data_Contato</th>
                  <th>Nome_Acao</th>
                  <th>Nome_Campanha</th>
                </tr>
              </thead>
              <tbody>
                {infoTable.map((relatory, indice) => {
                  return (
                    <tr key={indice}>
                      <td>{relatory.Loja_Compra}</td>
                      <td>{relatory.Tipo_de_Loja}</td>
                      <td>{relatory.Vendedor_Compra}</td>
                      <td>{relatory.Data_Compra}</td>
                      <td>{relatory.Nome_Cliente}</td>
                      <td>{relatory.CPF_Cliente}</td>
                      <td>{relatory.Telefone_Contato}</td>
                      <td>{relatory.Vendedor_Contato}</td>
                      <td>{relatory.Vendedor_Contato_Matricula}</td>
                      <td>{relatory.Loja_Vendedor_Contato}</td>
                      <td>{relatory.Data_Contato}</td>
                      <td>{relatory.Nome_Acao}</td>
                      <td>{relatory.Nome_Campanha}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </C.Container>
        )}
      </Content>
      <Author />
    </LayoutScreen>
  );
};

export default RelatorioDeVendas;
