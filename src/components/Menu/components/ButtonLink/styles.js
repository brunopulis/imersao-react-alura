import styled from 'styled-components';

export const ButtonLink = styled.a`
  background: var(--white);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--green);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;

  &:focus,
  &:hover {
    background: var(--white);
    color: var(--green);
  }
`;