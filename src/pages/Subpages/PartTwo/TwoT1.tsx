import { useNavigate } from "react-router-dom";

const TwoT1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>A voice creeps in from behind the man and his son: "Excuse me."<br/><br/>

As the father turns, the other man - a thief - lunges at him. The boy steps back, terrified, but his dad is stronger and faster than the other man; he starts cheering his old man on.<br/><br/>

Then, he notices it: a shiny, pointy weapon in the criminal's hand. The child screams, warning his father to watch out, but it is too late.<br/><br/>

Just as the weapon is about to make contact...

<br/><br/>


</h2>
    <button onClick={() => navigate('/pt2q1')}>Next</button>  
      </div>
    );
}
  export default TwoT1;