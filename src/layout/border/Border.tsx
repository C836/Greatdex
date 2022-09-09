import * as S from "./Border.styled";

export function Border({ footer }: { footer: boolean }) {
  return (
    <S.Border footer={footer}>
      <S.Stripes>
        <S.StripeLeft />
        <S.StripeRight />
        <S.Center footer={footer} />
      </S.Stripes>
    </S.Border>
  );
}
