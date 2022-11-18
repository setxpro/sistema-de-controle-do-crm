import React, { useContext, useState } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import Author from "../../Components/Author";

import * as XLSX from "xlsx";

import * as C from "./styles";
import HeaderScreens from "../../Components/HeaderScreens";
import { RequestCrmContext } from "../../Contexts/RequestCrm";
import axios from "axios";
import { VendasFlexProps } from "../../Types/VendasFlexProps";
import { toast } from "react-toastify";

const VendasDoFlex: React.FC = () => {
  const { accessToken } = useContext(RequestCrmContext);

  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [loading, setLoading] = useState(false);

  const [infoTable, setInfoTable] = useState<VendasFlexProps[]>([]);

  const searchOnApi = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_SELLBIE}/flex?idEmpresa=${process.env.REACT_APP_NUM_BAGAGGIO}&dataInicio=${dataInicio}&dataFim=${dataFim}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setLoading(false);
      toast.success(data.mensagem);
      setInfoTable(data.resultado);
      return data;
    } catch (error: any) {
      toast.error(error.response.data.mensagem);
      setLoading(false);
    }
  };

  const handleExportToExcel = () => {
    const table = document.getElementById("Table2XLSX");
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, `Vendas_do_flex_${dataInicio}_a_${dataFim}.xlsx`);
  };

  return (
    <LayoutScreen>
      <HeaderScreens
        title="Vendas do Flex"
        handleExports={searchOnApi}
        dataInicio={dataInicio}
        setDataInicio={setDataInicio}
        dataFim={dataFim}
        setDataFim={setDataFim}
        loading={loading}
        handleExportToExcel={handleExportToExcel}
      />
      <Content>
        <C.Container>
          <table id="Table2XLSX">
            <thead>
              {infoTable.length <= 0 ? null : (
                <tr>
                  <th>CPFCliente</th>
                  <th>DataPagamentoAprovado</th>
                  <th>Desconto</th>
                  <th>Logradouro_Entrega</th>
                  <th>Complemento_Entrega</th>
                  <th>Estado_Entrega</th>
                  <th>Cidade_Entrega</th>
                  <th>Bairro_Entrega</th>
                  <th>Numero_Entrega</th>
                  <th>CEP_Entrega</th>
                  <th>FormaPagamento</th>
                  <th>IdOrcamento</th>
                  <th>Loja</th>
                  <th>NomeBandeira</th>
                  <th>NomeCliente</th>
                  <th>Observacao</th>
                  <th>Parcelas</th>
                  <th>NomeProduto</th>
                  <th>Descricao</th>
                  <th>ValorItem</th>
                  <th>Quantidade</th>
                  <th>ValorTotal</th>
                  <th>authorizationCode</th>
                  <th>nsu</th>
                  <th>tid</th>
                </tr>
              )}
            </thead>
            <tbody>
              {infoTable.map((item, id) => (
                <React.Fragment key={id}>
                  {item.Produtos.map((i, index) => {
                    if (item.Produtos.length >= 1) {
                      return (
                        <tr key={index}>
                          <td>{item.CPFCliente}</td>
                          <td>{item.DataPagamentoAprovado}</td>
                          <td>{item.Desconto}</td>
                          <td>{item.Endereco.Logradouro_Entrega}</td>
                          <td>{item.Endereco.Complemento_Entrega}</td>
                          <td>{item.Endereco.Estado_Entrega}</td>
                          <td>{item.Endereco.Cidade_Entrega}</td>
                          <td>{item.Endereco.Bairro_Entrega}</td>
                          <td>{item.Endereco.Numero_Entrega}</td>
                          <td>{item.Endereco.CEP_Entrega}</td>
                          <td>{item.FormaPagamento}</td>
                          <td>{item.IdOrcamento}</td>
                          <td>{item.Loja}</td>
                          <td>{item.NomeBandeira}</td>
                          <td>{item.NomeCliente}</td>
                          <td>{item.Observacao}</td>
                          <td>{item.Parcelas}</td>
                          <td>{`${i.NomeProduto}`}</td>
                          <td>{`${i.Descricao}`}</td>
                          <td>{`${i.ValorItem}`}</td>
                          <td>{`${i.Quantidade}`}</td>
                          <td>{item.ValorTotal}</td>
                          <td>{item.authorizationCode}</td>
                          <td>{item.nsu}</td>
                          <td>{item.tid}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </C.Container>
      </Content>
      <Author />
    </LayoutScreen>
  );
};

export default VendasDoFlex;
