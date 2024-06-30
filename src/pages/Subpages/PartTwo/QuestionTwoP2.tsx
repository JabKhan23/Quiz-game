import { useNavigate } from "react-router-dom";

const QuestionTwoP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
         <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
        <h2>"Thank you, Albert."
You walk back inside your mansion with him.
You reach a massive bookcase - two meters tall by five meters wide. This is the hidden door to
your secret lair. All you need to do to open it is pull out the right book.
Which book do you pull out?

</h2>
        <button onClick={() => navigate('/question2p2w')}>A: Baking Cakes for All Levels
        </button>
        <button onClick={() => navigate('/question3p2')}>B: The History of Cutlery in the Western World

        </button>
      </div>
    );
}
  export default QuestionTwoP2;