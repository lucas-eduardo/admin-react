import styled from 'styled-components';

export const Container = styled.div`
  > h2 {
    margin-bottom: 40px;

    text-transform: capitalize;
  }
`;

export const WrapperLineOne = styled.div`
  display: grid;

  grid-template-columns: 50% auto;

  column-gap: 15px;
`;

export const WrapperLineTwo = styled.div`
  display: grid;

  grid-template-columns: 50% auto;

  column-gap: 15px;
`;

export const WrapperCards = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  column-gap: 15px;
`;
