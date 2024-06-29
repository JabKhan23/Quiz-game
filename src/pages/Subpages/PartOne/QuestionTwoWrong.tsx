import { useNavigate } from "react-router-dom";

const QuestionTwoWrong: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Part 1: The Inspiration</h1>
      <h2>You think about it for a second, but... whatever. It's not worth the hassle.
You use the plastic cutlery.
Maybe you're not as committed to saving the environment as you thought.



</h2>
<button onClick={() => navigate(-1)}>Retry</button>
    </div>
  );
}
  export default QuestionTwoWrong;