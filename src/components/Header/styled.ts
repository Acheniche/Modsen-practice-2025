import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 104px;
  width: 1005px;
  background: #f8fafc;
  display: flex;
  text-align: left;
  align-items: center;
  padding: 0 30px;
  margin: auto;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #cbd5e1;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const Plus = styled.div`
  position: relative;
  width: 18.75px;
  height: 18.75px;
  cursor: pointer;
`;

export const Vertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2.63px;
  height: 100%;
  border-radius: 5px;
  transform: translateX(-50%);
  background: #475569;
`;

export const Horizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  border-radius: 5px;
  height: 2.63px;
  transform: translateY(-50%);
  background: #475569;
`;
