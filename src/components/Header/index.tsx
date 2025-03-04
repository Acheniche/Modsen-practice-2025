import { TEXT } from '@constants/text';

import { useHeader } from '@/hooks/useHeader';

import {
  BurgerMenu,
  Circle,
  Horizontal,
  MenuContent,
  Plus,
  StyledHeader,
  Vertical,
} from './styled';

const Header = () => {
  const { handleAddColumn, toggleMenu, isMenuOpen } = useHeader();

  return (
    <StyledHeader>
      <BurgerMenu onClick={toggleMenu} isOpen={isMenuOpen}>
        <span />
        <span />
        <span />
      </BurgerMenu>

      <MenuContent isOpen={isMenuOpen}>
        <h1>{TEXT.BOARD_NAME}</h1>
        <Circle onClick={handleAddColumn}>
          <Plus>
            <Vertical />
            <Horizontal />
          </Plus>
        </Circle>
      </MenuContent>
    </StyledHeader>
  );
};

export default Header;
