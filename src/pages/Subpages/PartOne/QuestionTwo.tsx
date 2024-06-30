import { useNavigate } from "react-router-dom";

const QuestionTwo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
       <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 1: The Inspiration</h1>

        </div>
      <h2>You ask: "Is the avocado toast vegan? And are the avocados ethically sourced?"
"Yes and... I think so," replies the waitress.
"I'll go for that, then. Thanks!"
That burger did sound pretty good, but you're not going to abandon your lifestyle for some
Buffalo sauce.
You are happy with your choice.
Next
Time passes. Your food arrives.
2.
The waitress sets down plastic cutlery, wrapped in transparent, plastic packaging.


</h2>
      <button onClick={() => navigate('/question2w')}>A: Use the cutlery
      </button>
      <button onClick={() => navigate('/part1end')}>B: Don't use the cutlery
      </button>
    </div>
  );
}
  export default QuestionTwo;