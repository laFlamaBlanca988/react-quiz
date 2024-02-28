import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <div key={question.id}>
        <h4>{question.question}</h4>
        <Options dispatch={dispatch} answer={answer} question={question} />
      </div>
    </div>
  );
}

export default Question;
