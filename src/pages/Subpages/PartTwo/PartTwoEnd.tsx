import { useNavigate } from "react-router-dom";

const PartTwoEnd: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
           <div className="parthome">
        <button className="home" onClick={() => navigate('/home')}>Home</button>
        <h1>Part 2: The Symbol
        </h1>

        </div>
        <h2>That's right, it was a fork - an unexpected, yet deadly weapon.
You reach the bottom of your stairs, where your hero costume is displayed behind thick, bulletproof glass. You observe it: a silver armour with three sharp spikes protruding from the helmet.
The fork: your biggest fear, turned into a symbol of hope. A symbol for rising up and doing
what's right. A symbol for protecting innocence. A symbol that strikes fear in the hearts of
Gothic City criminals.
You suit up and go serve cold justice. The city is safe in the hands of the ForkNight.


</h2>
        <button onClick={() => navigate('/question1p2')}>Go to Part 3</button>
       
      </div>
    );
}
  export default PartTwoEnd;