import * as S from "./Pagination.styled";

export function Pagination({ page }: { page: number }) {
  return (
    <S.Pagination>
      <S.Button disabled={true}>{"<"}</S.Button>
      <p>Page {page + 1}</p>
      <S.Button disabled={false}>{">"}</S.Button>
    </S.Pagination>
  );
}
