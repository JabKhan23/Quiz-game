import { useNavigate } from "react-router-dom";

const QuestionOneWrong: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
         <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 1: The Inspiration</h1>

        </div>
        <h2>You have always been committed to making environmentally friendly choices to the point where
you convinced your parents to become vegan... but wow, that burger sounds amazing.
People have abandoned their convictions for less, you think to yourself. Like for double patty
burgers, for example.
The burger proves to be as delicious as it sounds; with each bite, you think less and less about the
environment. Someone else can save the planet.

</h2>
<button onClick={() => navigate(-1)}>Retry</button>
      </div>
    );
}
  export default QuestionOneWrong;