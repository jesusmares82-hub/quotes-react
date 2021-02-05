import quotes from "./quotes.json";
import React, { useState } from "react";

const Content = () => {
  const myQuotes = JSON.parse(JSON.stringify(quotes));
  const indexRandom = Math.round(Math.random() * (myQuotes.quotes.length - 1));
  const [myQuote, setMyQuote] = useState(myQuotes.quotes[indexRandom].quote);
  const [myAuthor, setMyAuthor] = useState(myQuotes.quotes[indexRandom].author);

  const urlQuote = myQuotes.quotes[indexRandom].quote.split(" ").join("%20");
  const urlAuthor = myQuotes.quotes[indexRandom].author.split(" ").join("%20");
  const urlTweet = "https://twitter.com/intent/tweet?text=";
  const urlFinal = urlTweet + urlQuote + "%20" + urlAuthor;
  const [myTweet, setMyTweet] = useState(urlFinal);

  const color = [
    "#ff9d72",
    "#999b84",
    "#83a95c",
    "#ff4646",
    "#c9cbff",
    "#fdb827",
    "#98acf8",
    "#b088f9",
    "#7FFF00",
    "#00FFFF",
    "#DEB887",
    "#8FBC8F",
    "#00CED1",
    "#00BFFF",
    "#DCDCDC",
    "#FFD700",
    "#ff98da",
    "#87a8d0",
    "#2eac6d",
    "#c3b4d2",
    "#e16262",
    "#3e31ae",
    "#fbd400",
    "#40a798",
    "#f6e97f",
    "#00e0ff",
    "#8e9fe6",
    "#a2792f",
  ];
  const indexColor = Math.round(Math.random() * color.length);
  const [myColor, setMyColor] = useState(color[indexColor]);

  const handleNextQuote = (event) => {
    const indexColor = Math.round(Math.random() * (color.length - 1));
    setMyColor(color[indexColor]);
    const indexRandom = Math.round(
      Math.random() * (myQuotes.quotes.length - 1)
    );
    setMyQuote(myQuotes.quotes[indexRandom].quote);
    setMyAuthor(myQuotes.quotes[indexRandom].author);

    const urlQuote = myQuotes.quotes[indexRandom].quote.split(" ").join("%20");
    const urlAuthor = myQuotes.quotes[indexRandom].author
      .split(" ")
      .join("%20");
    const urlTweet = "https://twitter.com/intent/tweet?text=";
    const urlFinal = urlTweet + urlQuote + "%20" + urlAuthor;
    setMyTweet(urlFinal);
  };

  return (
    <Container className="Container" style={{ backgroundColor: myColor }}>
      <Card className="Card">
        <CardBody>
          <Data>
            <i className="fas fa-quote-left"></i> {myQuote}
          </Data>
        </CardBody>
        <Data>{"-" + myAuthor}</Data>
        <ContainerButtons className="ContainerButtons">
          <NextButton className="TwitterButton">
            <a
              href={myTweet}
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-share-button"
              data-lang="es"
              data-show-count="true"
            >
              <i className="fab fa-twitter" style={{ color: myColor }}></i>
            </a>
          </NextButton>
          <NextButton
            className="NextButton"
            onClick={handleNextQuote}
            style={{
              backgroundColor: myColor,
            }}
          >
            Next Quote
          </NextButton>
        </ContainerButtons>
      </Card>
    </Container>
  );
};

const Container = (props) => <div {...props} />;
const Card = (props) => <div {...props} />;
const CardBody = (props) => <blockquote {...props} />;
const NextButton = (type = "submit") => <button {...type} />;
const ContainerButtons = (props) => <div {...props} />;
const Data = (props) => <span {...props} />;

export default Content;
