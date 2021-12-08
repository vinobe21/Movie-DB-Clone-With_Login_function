import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
  color: var(--white);

  .wrapper_nav{
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    overflow: visible;
  }
  .wrapper_nav a{
    font-weight: 600;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    .hide_mobile{
      display: none;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;