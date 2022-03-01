import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .presentationText {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;

    .title {
      font-size: 2rem;
      color: rgba(255, 255, 255, 0.7)
    }

    .name {
      font-size: 6rem;
    }

    .occupation {
      font-size: 4rem;
      color: rgba(255, 255, 255, 0.7)
    }

    .wiup {
      font-size: 20px;
      margin-top: 10px;
      text-align: center;
      color: rgba(255, 255, 255, 0.7)
    }

    .stacks {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }
  }
`;
