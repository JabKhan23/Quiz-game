import { useNavigate } from "react-router-dom";

const QuestionThreeWrongP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
           <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
        <h2>Wow. A spoon. Seriously. Your father was killed by a spoon. What a wimp.
Anyway, you are Spoon Man.
You reach the bottom of your stairs, where your hero costume is displayed behind thick, bulletproof glass. You observe it: a silver armour with a round dish going around the helmet. It kind of
looks like a triceratops, but unlike a triceratops it is not intimidating in the slightest.
You suit up and go serve cold justice. However, because of the size and weight of your helmet,
you develop chronic neck pain. You are forced to give up vigilantism a year later. You pick up
baking.



</h2>
<button onClick={() => navigate(-1)}>Retry</button>
      </div>
    );
}
  export default QuestionThreeWrongP2;