import { useNavigate } from "react-router-dom";

const OneQ1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>
        A waitress comes over to your table.<br/><br/>
        "Hi there," she says. "Are you ready to order?"<br/><br/>
        What would you like to order?<br/><br/>
</h2>
        <button onClick={() => navigate('/pt1t1')}>Avocado toast</button>
        <button onClick={() => navigate('/pt1q1w')}>Triple patty buffalo cheeseburger
        </button>
      </div>
    );
}
  export default OneQ1;