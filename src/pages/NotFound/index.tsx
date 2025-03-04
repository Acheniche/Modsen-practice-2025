import { TEXT } from '@constants/text';

import { useNotFound } from '@/hooks/useNotFound';

import { Button, Message, NotFoundContainer, Title } from './styled';

function NotFound() {
  const { handleNavigate } = useNotFound();

  return (
    <NotFoundContainer>
      <Title>{TEXT.NOT_FOUND_TITLE}</Title>
      <Message>{TEXT.NOT_FOUND_MESSAGE}</Message>
      <Button onClick={handleNavigate}>{TEXT.NOT_FOUND_HOME}</Button>
    </NotFoundContainer>
  );
}

export default NotFound;
