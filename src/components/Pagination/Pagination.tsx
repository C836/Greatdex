import * as S from "./Pagination.styled";

export function Pagination({ page, update }: {
  page: number;
  update: (page: number) => void;
}) {
  
  const nextPage = () => {
    update(page + 1);
  };

  const previousPage = () => {
    update(page - 1);
  };

  return (
    <S.Pagination>
      <S.Button disabled={page === 0} onClick={previousPage}>
        {"<"}
      </S.Button>
      <p>Page {page + 1}</p>
      <S.Button disabled={false} onClick={nextPage}>
        {">"}
      </S.Button>
    </S.Pagination>
  );
}
