import * as C from "./styles";

import { Title } from "../../Components/Page/Title";
import { LoadingSearch } from "./../Loading/SearchTables/index";

interface Props {
  title: string;
  handleExports: (dataInicio: string, dataFim: string) => void;
  dataInicio: string;
  setDataInicio: React.Dispatch<React.SetStateAction<string>>;
  dataFim: string;
  setDataFim: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  handleExportToExcel: () => void;
}

const HeaderScreens = ({
  title,
  dataFim,
  dataInicio,
  setDataFim,
  setDataInicio,
  loading,
  handleExports,
  handleExportToExcel,
}: Props) => {
  const search = () => {
    handleExports(dataInicio, dataFim);
  };

  return (
    <C.HeaderContainer>
      <Title title={title} />

      <C.ContentDate>
        <input
          type="date"
          name="date"
          placeholder="data inicial"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <span>Até</span>
        <input
          type="date"
          name="date"
          placeholder="data final"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
        {loading ? (
          <LoadingSearch />
        ) : (
          <C.SearchButton onClick={search}>
            <C.SearchIcon /> SEARCH
          </C.SearchButton>
        )}
      </C.ContentDate>

      <C.Button onClick={handleExportToExcel}>
        <C.ExcelIcon />
      </C.Button>
    </C.HeaderContainer>
  );
};

export default HeaderScreens;
