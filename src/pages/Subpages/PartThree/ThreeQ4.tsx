import { useNavigate } from "react-router-dom";

const ThreeQ4: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>
        A raider bursts through the front door, holding Tommy under his arm. The boy kicks and tries to free himself, but he is too small and weak.<br/><br/>

The raider is large, hairy and covered in ugly tattoos.<br/><br/>

"Looks like we made it just in time for dinner," he sneers.<br/><br/>

What do you do?
<br/><br/>
</h2>
        <button onClick={() => navigate('/pt3q4w')}>Surrender</button>
        <button onClick={() => navigate('/pt3t4')}>Throw the fork
        </button>
      </div>
    );
}
  export default ThreeQ4;