import styled from "styled-components";

const main = "#c40b24";
const mainShadow = "#4f070f";

export const Border = styled.section<{ footer: boolean }>`
  background: ${(props) =>
    props.footer
      ? "linear-gradient( 135deg, " + main + " 60%,  #c92638 10%,  #db5f6b 100%)"
      : "linear-gradient(-45deg, " + main + " 40%, #c92638 10%, #db5f6b 100%)"};
  rotate: ${(props) => (props.footer ? "180deg" : "0")};
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-bottom: 6px solid black;

  &::before {
    content: "";
    position: absolute;
    width: 35px;
    height: 23px;
    left: 50%;
    top: calc(100% - 130px);
    transform: translate(-50%, -100%);
    background-color: ${mainShadow};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 280px;
    height: 140px;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
    background-color: ${mainShadow};
    border-top-left-radius: 142.5px;
    border-top-right-radius: 142.5px;
    box-sizing: border-box;
    border-bottom: 0;
  }
`;

export const Stripes = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 8px solid white;
  z-index: 1;
`;

const stripe = styled.div`
  position: relative;
  width: calc(50% - 130px);
  height: 100%;
  border-bottom: 10px solid ${mainShadow};

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
  }
`;

export const StripeLeft = styled(stripe)`
  ::before,
  ::after {
    box-shadow: 0 0 0 10px ${mainShadow};
  }
`;

export const StripeRight = styled(stripe)`
  float: right;
  transform: rotateY(180deg) translateY(-100%);

  ::before,
  ::after {
    box-shadow: 0 0 0 10px ${mainShadow};
  }
`;

export const Center = styled.div<{ footer?: boolean }>`
  position: absolute;
  width: 260px;
  height: 130px;
  border-top-left-radius: 130px;
  border-top-right-radius: 130px;
  top: 100%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -120px);

  &::before {
    content: "";
    position: absolute;
    width: 230px;
    height: 120px;
    border-top-left-radius: 120px;
    border-top-right-radius: 120px;
    border: 6px solid black;
    top: 100%;
    left: 50%;
    background: ${(props) =>
      props.footer
        ? "linear-gradient(135deg, #2f2b2a 60%, #474242 10%, #959391 100%)"
        : "linear-gradient(-45deg, #2f2b2a 40%, #474242 10%, #959391 100%)"};
    transform: translate(-50%, -120px);
  }
`;
