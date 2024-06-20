import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;
const DownPane = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ children }) => {
  const [left, center, right, down] = children;
  return (
    <Container>
      <Pane weight={1}>{left}</Pane>
      <Pane weight={3}>{center}</Pane>
      <Pane weight={1}>{right}</Pane>
      <DownPane weight={6}>{down}</DownPane>
    </Container>
  );
};
