import styled, { css } from "styled-components";

const StyledApp = styled.div`
  width: 35rem;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
`;

const SvgBox = styled.div`
  background-image: url(${({ $background }) => $background});
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: center;
`;

const H2 = styled.h2`
  font-weight: 800;
`;

const P = styled.p``;

const PlanBox = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 7px;
  background-color: var(--Very-pale-blue);
  font-weight: 600;

  & a {
    color: var(--Desaturated-blue);
    font-size: 1.4rem;
    transition: 0.1s all ease-in-out;
  }

  & a:hover {
    text-decoration: none;
    color: var(--Dark-blue);
  }
`;

const MusicBox = styled.div``;

const MusicContent = styled.div`
  font-size: 1.4rem;
`;

const variation = {
  primary: css`
    background-color: var(--Bright-blue);
    color: var(--Very-pale-blue);
    border-radius: 7px;
    box-shadow: 0 10px 10px 1px hsla(224, 23%, 55%, 0.4);

    &:hover {
      opacity: 0.7;
    }
  `,
  secondary: css`
    background: none;
    color: var(--Desaturated-blue);

    &:hover {
      color: var(--Dark-blue);
    }
  `,
};

const Button = styled.button`
  display: block;
  border: none;
  text-align: center;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s all ease-in-out;
  ${(props) => variation[props.$variation]}
`;

function App() {
  return (
    <StyledApp>
      <SvgBox $background="/illustration-hero.svg"></SvgBox>
      <ContentBox>
        <H2>Order Summary</H2>
        <P>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </P>
        <PlanBox>
          <MusicBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                <path
                  fill="#717FA6"
                  fillRule="nonzero"
                  d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                />
              </g>
            </svg>
          </MusicBox>
          <MusicContent>
            <h3>Annual Plan</h3>
            <span>$59.99/year</span>
          </MusicContent>
          <a href="">Change</a>
        </PlanBox>
        <Button $variation="primary"> Proceed to Payment</Button>
        <Button $variation="secondary">Cancel Order</Button>
      </ContentBox>
    </StyledApp>
  );
}

export default App;
