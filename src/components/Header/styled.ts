import styled from 'styled-components';

import { BurgerMenuProps } from '@/types/BurgerMenuProps';

export const StyledHeader = styled.header`
  height: 104px;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.phone} {
    height: 64px;
  }
`;

export const BurgerMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<BurgerMenuProps>`
  display: none;
  width: 30px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${({ theme }) => theme.cursor};
  position: relative;

  span {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.description};
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    display: flex;
  }
`;

export const MenuContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<BurgerMenuProps>`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.media.phone} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.grey};
    padding: 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.gap.XXL};
    z-index: 10;
  }
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.circle};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media ${({ theme }) => theme.media.phone} {
    margin-left: 0;
  }
`;

export const Plus = styled.div`
  position: relative;
  width: 18.75px;
  height: 18.75px;
  cursor: ${({ theme }) => theme.cursor};
`;

export const Vertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2.63px;
  height: 100%;
  border-radius: 5px;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.description};
`;

export const Horizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  border-radius: 5px;
  height: 2.63px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.description};
`;
