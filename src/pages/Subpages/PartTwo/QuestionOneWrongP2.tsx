import { useNavigate } from "react-router-dom";

const QuestionOneWrongP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
           <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
        <h2>You have always been committed to making environmentally friendly choices to the point where
you convinced your parents to become vegan... but wow, that burger sounds amazing.
People have abandoned their convictions for less, you think to yourself. Like for double patty
burgers, for example.
The burger proves to be as delicious as it soundAh, it's a bat. It's for that new guy, the bat fella... What was his name again? Something dumb,
probably.
You relax - false alarm.
"Master Wade?" says Albert, confused.
"It's a bat, Albert. It's for that other guy - let him sort it."
"Master, it's not a ba-"
"It is a bat," you interrupt. "You must be wearing your reading glasses. Oh, and can you go make
me a margarita?"
Albert gives up and goes back inside. I should've never taken this job, he thinks.
s; with each bite, you think less and less about the
environment. Someone else can save the planet.

</h2>
<button onClick={() => navigate(-1)}>Retry</button>
      </div>
    );
}
  export default QuestionOneWrongP2;