import * as S from "./Tag.styled";

export function Tag({ title, color, onclick }: {
  title: string
  color: string,
  onclick?: React.MouseEventHandler<HTMLDivElement>;
}) {

  return (
    <S.Tag
      color={color}
      onClick={onclick}
    >
      {title}
    </S.Tag>
  );
}
