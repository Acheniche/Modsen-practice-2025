import { useDispatch } from 'react-redux';

import { addColumn } from '@/store/reducers/TasksSlice';

import { Circle, Horizontal, Plus, StyledHeader, Vertical } from './styled';

const Header = () => {
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    dispatch(addColumn());
  };

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
