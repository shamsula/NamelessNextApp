import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../animation/drawMatrix";

export default function AnimatedPortfolio(): JSX.Element {
  const [dimensions, setDimensions] = useState({ height: 200, width: 500 });

  const P5Div = useRef<HTMLDivElement>(null!);

  const updateCanvasSize = () => {
    let height = 200;
    let width = P5Div.current.clientWidth;
    setDimensions({ height, width });
  };

  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  const renderMatrix = useMemo(() => {
    return <P5Wrapper sketch={sketch} dimensions={dimensions} />;
  }, [dimensions]);

  return (
    <P5Container ref={P5Div} data-test="p5-wrapper">
      {renderMatrix}
    </P5Container>
  );
}

const P5Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
