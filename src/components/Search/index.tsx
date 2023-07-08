import * as S from "../../styles/StyledComponents";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <S.TextBox>
      <S.SearchInput
        type="text"
        placeholder="Busca por nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.SearchIcon />
    </S.TextBox>
  );
}