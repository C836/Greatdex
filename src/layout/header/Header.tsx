import * as S from "./Header.styled";
import { Border } from "../border/Border";
import icon from "./../../assets/img/favicon.ico";

export function Header() {
  return (
    <S.Header>
      <Border footer={false} />

      <S.LogoWrapper>
        <S.Logo src={icon} />
      </S.LogoWrapper>
    </S.Header>
  );
}
