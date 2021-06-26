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
    "#185ADB",
    "#FF7600",
    "#C68B59",
    "#39A2DB",
    "#5C33F6",
    "#3B14A7",
    "#5F939A",
    "#01937C",
    "#3EDBF0",
    "#FFC107",
    "#BF1363",
    "#2940D3",
    "#FB9300",
    "#FF96AD",
    "#00EAD3",
    "#BB371A",
    "#185ADB",
    "#E93B81",
    "#FC92E3",
    "#C449C2",
    "#064420",
    "#F98404",
    "#907FA4",
    "#4A503D",
    "#344FA1",
    "#04009A",
    "#9F5F80",
    "#FF5200",
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
    <Container className="Container" style={{ backgroundImage: `linear-gradient(to right, #4880EC, ${myColor})` }}>
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

               opacity: .6,
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
