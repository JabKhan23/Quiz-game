import { useNavigate } from "react-router-dom";

const QuestionOneP2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
          <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
 
        <h2>A man behind prison bars, screaming: "I'll get out of here! I'll get out of here and I'll come get
you!"
This is the end of a movie playing on the big screen; the credits roll.
A boy jumps out of his theatre seat and leaves with his father.
Outside, the boy points to an alleyway. "Let's take a shortcut," he suggests.
They go down the alleyway, but don't notice that they are being followed.

A voice creeps in from behind the man and his son: "Excuse me."
As the father turns, the other man - a thief - lunges at him. The boy steps back, terrified, but his
dad is stronger and faster than the other man; he cheers his old man on.
Then, he notices it: a shiny, pointy weapon in the criminal's hand. The child screams, telling his
father to watch out, but it is too late.
Just as the weapon is about to connect...

The year is 2035. The place is Gothic City

You wake up from your nightmare, your forehead covered in sweat.
You are Brook Wade, billionaire philanthropist. You are also the boy from that awful dream, but
that was a long time ago.
You are on a lawn chair, out in your garden. It is dark outside - how long have you been asleep?
An elegant voice breaks the silence: "It is time, master Wade."
You turn around and see your butler, Albert. He points to the sky and you look up.
A beaming light. A signal among the clouds. A call for a hero to emerge from the dark.
You squint your eyes: What is the signal in the sky?

</h2>
        <button onClick={() => navigate('/question2p2')}>A: It's your signal
        </button>
        <button onClick={() => navigate('/question1p2w')}>B: It's a bat
        </button>
      </div>
    );
}
  export default QuestionOneP2;