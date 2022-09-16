import * as S from "./Tag.styled";

export function Tag({ text, title, color, onclick }: {
  text: string;
  title: string;
  color: string;
  onclick?: React.MouseEventHandler<HTMLDivElement>;
}) {

  return (
    <S.Tag
      title={title}
      color={color}
      onClick={onclick}
    >
      {text}
    </S.Tag>
  );
}
