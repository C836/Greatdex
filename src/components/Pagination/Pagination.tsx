import * as S from "./Pagination.styled";

export function Pagination({ disabled, page, update }: {
  disabled: boolean;
  page: number;
  update: (page: number) => void;
}) {
  
  const previousPage = () => {
    update(page - 1);
  };

  const nextPage = () => {
    update(page + 1);
  };

  return (
    <S.Pagination disabled={disabled}>
      <S.Button disabled={!disabled && page === 0} onClick={previousPage}>
        {"<"}
      </S.Button>
      <p>Page {page + 1}</p>
      <S.Button onClick={nextPage}>
        {">"}
      </S.Button>
    </S.Pagination>
  );
}
