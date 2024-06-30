import { useNavigate } from "react-router-dom";

const QuestionThreeP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Part 2: The Symbol
        </h1>
        <h2>You pull out the right book and the bookcase splits vertically from the middle, revealing the
entrance to your secret lair: the silver cave known as the Cutlery Basket.
As you descend down the silver steps, you remember the fateful night your father died. The face
of the criminal. His weapon.
What was the weapon?


</h2>
        <button onClick={() => navigate('/part2end')}>A: A fork
        </button>
        <button onClick={() => navigate('/question3p2w')}>B: A spoon        </button>
      </div>
    );
}
  export default QuestionThreeP2;