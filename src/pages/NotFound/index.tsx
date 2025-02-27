import { useNotFound } from '@/hooks/useNotFound';

import { Button, Message, NotFoundContainer, Title } from './styled';

function NotFound() {
  const { handleNavigate } = useNotFound();

  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Message>Sorry, the page you are looking for does not exist.</Message>
      <Button onClick={handleNavigate}>Home</Button>
    </NotFoundContainer>
  );
}

export default NotFound;
