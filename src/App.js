import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import questions from "./constants/question.json";
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const [currentQuestion,setCurrentQuestion]= useState(0);
  const [userAnswers,setUserAnswers] = useState([]);

  const resetQuiz = () => {
setCurrentQuestion(0);
setUserAnswers([]);
  }

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers,isCorrect]);
  }
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {
        currentQuestion < questions.length &&(
          <Questions question={questions[currentQuestion]} onAnswerClick={handleNextQuestion} />
        )
      }
    
    {
      currentQuestion === questions.length && (
        <Result
        userAnswers={userAnswers}
        questions={questions}
        resetQuiz={resetQuiz}
     />
      )
    }
  
    </div>
  );
}

export default App;
