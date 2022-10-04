import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Card from "../Style/GalleryCard";
import data from "../Data/data.json";
import { Pagination } from "@mui/material";

export default function LegacyPortfolio(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState<number>(3);

  const maxPages = Math.ceil(data.images.length / cardsPerPage);

  // pagination index stuff
  const indexOfLastCard = useMemo(
    () => currentPage * cardsPerPage,
    [currentPage, cardsPerPage]
  );
  const indexOfFirstCard = useMemo(
    () => indexOfLastCard - cardsPerPage,
    [indexOfLastCard, cardsPerPage]
  );

  const currentCards = useMemo(
    () => data.images.slice(indexOfFirstCard, indexOfLastCard),
    [data.images, indexOfFirstCard, indexOfLastCard]
  );

  const handleChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  return (
    <Gallery data-test="grid-gallery">
      <CardsContainer>
        {currentCards.map((i: ImageData) => (
          <Card data={i} />
        ))}
      </CardsContainer>

      <StyledPagination
        page={currentPage}
        onChange={handleChange}
        count={maxPages}
      />
    </Gallery>
  );
}

const CardsContainer = styled.div`
  display: block;
  gap: 20px;

  > * {
    margin: auto;
    margin-bottom: 20px;
  }

  ${({ theme }) => `${theme.media.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: unset;
    grid-gap: 20px;
    >* {
      margin: unset;
      margin-bottom: unset;
    }
  }`}

  ${({ theme }) => `${theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }`}
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPagination = styled(Pagination)`
  margin: auto;
  margin-top: 15px;

  ul li button {
    color: ${({ theme }) => theme.colours.orangePeel};
    font-weight: 600;

    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${({ theme }) => theme.colours.orangePeel};
      color: #fff;
    }
  }
`;

export interface ImageData {
  name: string;
  url: string;
  desc: string;
}
