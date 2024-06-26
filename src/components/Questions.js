import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import product from "../mocks/mock";
import { Answers } from "./Answers";

export const Questions = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newQuestions, setNewQuestions] = useState([]);
  const [showNewQuestionError, setShowNewQuestionError] = useState(false);

  const handleChange = (event) => setNewQuestion(event.target.value);

  const handleSubmit = () => {
    if (newQuestion !== "") {
      setNewQuestions((prevState) => [newQuestion, ...prevState]);
      setNewQuestion("");
      setShowNewQuestionError(false);
    } else {
      setShowNewQuestionError(true);
    }
  };

  const newQuestionElements = newQuestions.map((question, index) => (
    <Answers key={index} question={question} />
  ));

  const questionElements = product.questions.map((question, index) => (
    <Answers
      key={index}
      question={question.question}
      answer={question.answer}
      answerDate={question.answerDate}
    />
  ));

  return (
    <section className="questAns-container mb-24px">
      <h2 className="product-details-subtitle">Preguntas y respuestas</h2>

      <h3>¿Qué querés saber?</h3>

      <div className="faq-buttons">
        <button className="btn-light-blue">Costo y tiempo de envío</button>
        <button className="btn-light-blue">Devoluciones gratis</button>
        <button className="btn-light-blue">Medios de pago y promociones</button>
        <button className="btn-light-blue">Garantía</button>
      </div>

      <h3>Preguntale al vendedor</h3>

      <div className="question-input">
        <input
          type="text"
          name="newQuestion"
          onChange={handleChange}
          value={newQuestion}
          placeholder="Escribí tu pregunta..."
        />

        <button className="btn-blue" onClick={handleSubmit}>
          Preguntar
        </button>
      </div>

      {showNewQuestionError && newQuestion.length <= 0 && (
        <small className="new-review-error">
          <RiErrorWarningFill />
          Completá este campo.
        </small>
      )}

      <h3>Últimas realizadas</h3>

      <div className="last-questions">
        {newQuestionElements}
        {questionElements}
      </div>

      <span className="blue-anchor">Ver todas las preguntas</span>
    </section>
  );
};

export default Questions;
