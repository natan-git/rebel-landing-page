import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ProductPage from "./ProductPage";
import items from "../data.json";
import { motion } from "framer-motion/dist/framer-motion";

import exitIcon from "../Assets/x-symbol.png";
import argaman from "../Assets/mockups/mockup-argaman.png";
import bituni from "../Assets/mockups/mockup-bituni.png";
import dabuki from "../Assets/mockups/mockup-dabuki.png";
import hamdani from "../Assets/mockups/mockup-hamdani.png";
import jandali from "../Assets/mockups/mockup-jandali.png";
import "../Style/QuizApp.css";

const QuizApp = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [random, setRandom] = useState();
  // Modal logic
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const showRandomWine = (min, max) => {
    setRandom(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const handlerAnswerClick = (wine) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      showRandomWine(0, 3);
      setIsShowResult(true);
    }
  };

  const data = [
    {
      id: 1,
      name: "argaman",
      content: `ARGAMAN IS YOUR ONE AND ONLY!
      YOURE EASYGOING, FUN, BUT SPICY
      EXACTLY AS OUR LIGHT RED`,
      img: argaman,
      count: 0,
    },
    {
      id: 2,
      name: "dabuki",
      content: `DABUKI IS YOUR ONE AND ONLY!
      YOU’RE ROMANTIC AND CLASSIC,
      EXACTLY AS OUR FLOWERY WHITE.`,
      img: dabuki,
      count: 0,
    },
    {
      id: 3,
      name: "bituni",
      content: `BITUNI IS YOUR ONE AND ONLY!
      YOU’RE CLASSIC AND CHEAKY,
      EXACTLY AS OUR BADASS RED`,
      img: bituni,
      count: 0,
    },
    {
      id: 4,
      name: "jandali",
      content: `JANDALI IS YOUR ONE AND ONLY!
      YOU’RE MOODY AND SPECIAL, 
      EXACTLY AS OUR ORANGE WINE.`,
      img: jandali,
      count: 0,
    },
    {
      id: 5,
      name: "hamdani",
      content: `HAMDANI IS YOUR ONE AND ONLY!
      YOU’RE PARTY MAGNET, 
      EXACTLY AS OUR WHITE.`,
      img: hamdani,
      count: 0,
    },
  ];

  const questions = [
    {
      questionText: "Whats is your favorite meal?",
      answerOptions: [
        { answerText: "Sushi, yep", wine: "argaman" },
        { answerText: "Italian ofcorse", wine: "dabuki" },
        { answerText: "Delish salad", wine: "bituni" },
        { answerText: "Some good steak", wine: "hamdani" },
      ],
    },
    {
      questionText: "what is your drean trip?",
      answerOptions: [
        { answerText: "Romantic europe", wine: "argaman" },
        { answerText: "Londsunbath in thailand", wine: "dabuki" },
        { answerText: "Trekking in nepal", wine: "bituni" },
        { answerText: "Prefer to stay home", wine: "hamdani" },
      ],
    },
    {
      questionText: "what is your perfect evening?",
      answerOptions: [
        { answerText: "Laying on a sofa", wine: "argaman" },
        { answerText: "Some good book", wine: "dabuki" },
        { answerText: "Watching sunset", wine: "bituni" },
        { answerText: "Going out", wine: "hamdani" },
      ],
    },
    {
      questionText: "witch hours is your happy wine hour?",
      answerOptions: [
        { answerText: "All day long", wine: "argaman" },
        { answerText: "Lunching", wine: "dabuki" },
        { answerText: "After work", wine: "bituni" },
        { answerText: "Before the bed", wine: "hamdani" },
      ],
    },
  ];

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <section className="Quiz-container">
          <div className="Quiz-inner">
            {isShowResult ? (
              <div className="result-container">
                <div className="img-box">
                  <img src={data[random].img} />
                </div>
                <div className="text">
                  <p className="result-content">{data[random].content}</p>
                  <Button className="result-btn" onClick={toggleModal}>
                    Read More
                  </Button>
                  {isOpenModal && (
                    <ProductPage
                      handler={toggleModal}
                      product={items[random]}
                    />
                  )}
                </div>
              </div>
            ) : (
              <>
                <h1 className="question">
                  {questions[currentQuestion].questionText}
                </h1>
                <div className="answers-container">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => {
                      return (
                        <motion.button
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={() => handlerAnswerClick(answerOption.wine)}
                        >
                          {answerOption.answerText}
                        </motion.button>
                      );
                    }
                  )}
                </div>
              </>
            )}

            <img onClick={props.handler} className="exit-icon" src={exitIcon} />
            <p className="question-count">
              {1 + currentQuestion}/{questions.length}
            </p>
          </div>
        </section>,
        document.getElementById("quiz-root")
      )}
    </React.Fragment>
  );
};

export default QuizApp;
