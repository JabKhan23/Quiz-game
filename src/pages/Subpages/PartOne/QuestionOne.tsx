import { useNavigate } from "react-router-dom";

const QuestionOne: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 1: The Inspiration</h1>

        </div>
        <h2>The year is 2018. The place is Stockholm.
You are Greta Thunberg, a fifteen-year-old girl with big aspirations and a desire to save our
planet.
You and your friend, Alice, are sitting down inside a cafe. You've been talking about what you
want to do with your lives when you're older, but now it's time to order some food.
Next
The waitress comes over to your table.
"Hi there," she says. "Are you ready to order?"
</h2>
        <button onClick={() => navigate('/question2')}>A: Avocado Toast</button>
        <button onClick={() => navigate('/question1w')}>B: Triple buffalo cheeseburger
        </button>
      </div>
    );
}
  export default QuestionOne;