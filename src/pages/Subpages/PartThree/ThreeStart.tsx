import { useNavigate } from "react-router-dom";

const ThreeStart: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Part 3: The Multi Tool</h1>
        <h2><br/>The year is 2158. The place is Scorchwood (formerly known as Chorlton, Manchester... before the world "ended").<br/><br/>

A little girl is reading a dusty comic book called ForkNight: The Silver Crusader.<br/><br/>

You are Claire, a seventy-year-old lady with a lot of love to give. That love is normally dispersed between your granddaughter, Lucy, who is reading the comic book, and your grandson, Tommy, who is out fetching some water from the town pump. The three of you live together in a broken-down shack.<br/><br/>

You are cleaning a rusty metal fork with some cloth. <br/><br/>

When you were a little girl, your granny told you that before the Last War, back when the world was civilised, these utensils were used for eating. You always found it weird that a tool as versatile as the fork was only used in such a specific way.

<br/><br/>

</h2>
    <button onClick={() => navigate('/pt3q1')}>Next</button>  
      </div>
    );
}
  export default ThreeStart;