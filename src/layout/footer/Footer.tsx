import * as S from "./Footer.styled";
import { Border } from "../border/Border";

export function Footer() {
  return (
    <S.Footer>
      <Border footer={true} />

      <S.InnerCircle>
        <S.CircleBackground />
      </S.InnerCircle>
    </S.Footer>
  );
}
