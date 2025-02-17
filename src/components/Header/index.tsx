import { Circle, Horizontal, Plus, StyledHeader, Vertical } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Kanban Dashboard</h1>
      <Circle>
        <Plus>
          <Vertical />
          <Horizontal />
        </Plus>
      </Circle>
    </StyledHeader>
  );
};

export default Header;
