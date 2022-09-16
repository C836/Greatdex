import * as S from "./Tag.styled";

export function Tag({ title, color, onclick }: {
  title: string
  color: string,
  onclick?: React.MouseEventHandler<HTMLDivElement>;
}) {

  return (
    <S.Tag
      title={title}
      color={color}
      onClick={onclick}
    >
      {title}
    </S.Tag>
  );
}
