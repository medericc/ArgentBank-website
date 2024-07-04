import styled, { keyframes } from 'styled-components';

// Define keyframes for the loading animation
const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Style the spinner and spinner-circle using styled-components
const SpinnerWrapper = styled.div`
  padding: 0.6rem 0;
`;

const SpinnerCircle = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  padding: 0.5rem 1rem;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 3px dashed #fff;
    width: 25px;
    height: 25px;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }

  &::before {
    z-index: 5;
    animation: ${loading} 1s linear infinite;
  }

  &::after {
    z-index: 10;
    animation: ${loading} 1s ease infinite;
  }
`;

const Spinner = () => {
  return (
    <SpinnerWrapper aria-label='spinner-icon'>
      <SpinnerCircle />
    </SpinnerWrapper>
  )
}

export default Spinner;
