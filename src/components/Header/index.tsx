import { useHeader } from '@/hooks/useHeader';

import { Circle, Horizontal, Plus, StyledHeader, Vertical } from './styled';

const Header = () => {
  const { handleAddColumn } = useHeader();

  return (
    <StyledHeader>
      <h1>Kanban Dashboard</h1>
      <Circle onClick={handleAddColumn}>
        <Plus>
          <Vertical />
          <Horizontal />
        </Plus>
      </Circle>
    </StyledHeader>
  );
};

export default Header;
