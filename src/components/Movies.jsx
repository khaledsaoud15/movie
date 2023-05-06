import React from "react";
import { movies } from "../data";
import styled from "styled-components";

const Movies = ({ favorites, setFovrites }) => {
  const addFav = (id) => {
    const find = movies.find((m) => m.id === id);
    if (favorites.includes(find)) {
      favorites.splice(favorites.indexOf(find), 1);
      setFovrites([...favorites]);
    } else {
      setFovrites([...favorites, find]);
    }
  };

  return (
    <Container>
      <h1>Movies</h1>
      <Cards>
        {movies.map((m) => {
          return (
            <Card>
              <img src={m.img} alt="" />
              <div className="content">
                <h1>{m.title}</h1>
                <p>{m.time}</p>
                <div className="icons">
                  <p>
                    Ratings : <span>85k</span>
                  </p>
                  <button onClick={() => addFav(m.id)}>Favorite</button>
                </div>
              </div>
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  gap: 80px;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 5px;
  height: 100%;
  text-align: center;
  img {
    width: 100%;
    height: 60vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: auto;
    padding: 15px;
    h1 {
      font-size: 20px;
    }

    p {
      span {
        font-weight: 700;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        padding: 5px 15px;
        border: none;
        background-color: #000000;
        color: #fff;
        cursor: pointer;
        :active {
          background-color: #d11a1a;
        }
      }
    }
  }
`;
