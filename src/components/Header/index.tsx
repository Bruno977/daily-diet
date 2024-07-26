import * as S from "./styles";
import LogoImage from "../../assets/logo.png";
import UserImage from "../../assets/user.png";
export function Header() {
  return (
    <S.Container>
      <S.Logo source={LogoImage} />
      <S.User source={UserImage} />
    </S.Container>
  );
}
