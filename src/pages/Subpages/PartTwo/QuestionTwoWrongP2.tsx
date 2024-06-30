import { useNavigate } from "react-router-dom";

const QuestionTwoWrongP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
         <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
        <h2>You pull out the book about baking cakes; it's not the correct one, but it just caught your eye. You
start flicking through it.
"Wow, this is great stuff," you say to yourself.
Albert tries to get your attention: "We need to get going, Master Wade."
"Look at this one, Albert, look: it's Shrek; they have a recipe for a Shrek-shaped cake."
"Master-"
"Albert, come on: they put the signal up for everything nowadays. They probably just caught
someone jaywalking or something, they can figure it out themselves. Let's go make Shrek."
"Okay," says Albert, defeated. I really should've never taken this job, he thinks.


</h2>
<button onClick={() => navigate(-1)}>Retry</button>
      </div>
    );
}
  export default QuestionTwoWrongP2;