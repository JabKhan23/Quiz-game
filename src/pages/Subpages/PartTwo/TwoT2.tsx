import { useNavigate } from "react-router-dom";

const TwoT2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>That's right, it was a fork - an unexpected, yet deadly weapon.<br/><br/>

You reach the bottom of your stairs, where your hero costume is displayed behind thick, bullet-proof glass. You observe it: a silver armour with four sharp spikes protruding from the helmet.<br/><br/>

The fork: your biggest fear, turned into a symbol of hope. A symbol for rising up and doing what's right. A symbol for protecting the innocent. A symbol that strikes fear in the hearts of Gothic City criminals.<br/><br/>

You suit up and go serve some cold justice. The city is safe in the care of the ForkNight.
<br/><br/>


</h2>
    <button onClick={() => navigate('/pt3start')}>Continue to Part 3</button>  
      </div>
    );
}
  export default TwoT2;