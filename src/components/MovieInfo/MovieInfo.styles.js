import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  h1{
    margin: 0;
  }
  .title_tags{
    display: flex;
    @media screen and (max-width: 768px)
    {
      flex-direction: column;
    }
  }
  .title_tags span{
    margin-left: 10px;
    
  }
  .rating-directors {
    display: flex;
  }
  .rating-directors h3{
      margin-bottom: 5px;
      margin-right: 10px;
    }
  .score {
    color: #fff;
    font-weight: 800;

  }
  .rate_button{
    background: var(--darkGrey);
    color: var(--white);
    border-radius: 10px;
    border: 1px solid gray;
    width: 10%;
  }
  .director {
    h3{
      margin-bottom: 5px;
    }
    p {
      margin: 0;
    }
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
    .title_tags{
      flex-direction: column;
    }
  }
`;