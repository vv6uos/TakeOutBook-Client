//-----import 외부
import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//-----import 내부
import { myCSS, myTheme } from "style";
import { API_URL } from "config/constants";
import { MyLink } from "components";

//-----메인
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/books`).then((result) => {
      const response = result.data;
      if (response.answer) {
        setBooks(response.result);
      }
    });
  }, []);

  const firstTitle = (title) => {
    const Titles = title.split("-");
    return Titles[0];
  };

  return (
    <Wrapper>
      <Title>대여 가능 도서</Title>
      <Container name="대여가능도서">
        {books.map((book) => {
          return (
            <Card key={book.id}>
              {book.onRent && <RentBlur />}
              <MyLink to={`/books/${book.id}`}>
                <img
                  className="bookCover"
                  src={`${book.imgURL}`}
                  alt="도서사진]"
                />
                <InfoBox>
                  <div className="author">| {book.author}</div>
                  <div>{firstTitle(book.name)}</div>
                </InfoBox>
              </MyLink>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
}
export default Books;

//-----스타일
const { fontStyles, colors } = myTheme;

const Wrapper = styled.div`
  ${myCSS.flexColumn}
  border-top:6px double ${colors.m1};
  margin-top: 3rem;
`;
const Title = styled.div`
  margin: 3rem 0;
  text-align: center;
  ${fontStyles.semiTitle}
  font-size:2rem;
`;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`;

const Card = styled.div`
  margin: 2% 1%;
  width: 23%;
  ${fontStyles.body};
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin: 2.1%;
    width: 29%;
  }
  @media screen and (max-width: 480px) {
    margin: 2% 3%;
    width: 44%;
  }
  .bookCover {
    display: block;
    margin: 5% auto;
    height: 15.46rem;
    max-width: 100%;
    border: 3px solid ${colors.gray};
  }
`;
const RentBlur = styled.div`
  margin-right: 1%;
  position: absolute;
  width: 22.5%;
  min-width: 132px;
  max-width: 275px;
  height: 23rem;

  opacity: 0.7;
  z-index: 2;
  background-color: ${colors.gray};
  border-radius: 0.5rem;
  pointer-events: none;
  z-index: 1;
  @media screen and (max-width: 768px) {
    width: 29%;
  }
  @media screen and (max-width: 480px) {
    width: 44%;
  }
`;

const InfoBox = styled.div`
  text-decoration: none;
  border-top: 3px solid ${colors.gray};
  .author {
    margin-bottom: 0.5em;
    ${fontStyles.mini}
  }
`;
