// import Quiz from "./assets/Quiz";
import Quiz from "./components/Quiz/Quiz.jsx";
// import { jsQuizz } from "./constants";
import { useEffect, useState } from "react";
import { jsQuizz } from "./constants.js";


function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

const getQuestions = async () => {
  try{
    const response = await fetch("https://644982a3eb3378ca4ba471.mockapi.io/question");
    const questionsResponse = await response.json();
    console.log(questionsResponse);
    setQuestions(questionsResponse);
  } catch(error){
    console.log(error);
  }
}


  return <Quiz questions={jsQuizz.questions}/>;
}

export default App;
