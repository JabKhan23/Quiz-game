import { useNavigate } from "react-router-dom";

const ThreeQ2W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>You haven't used the sewing machine in a while, but you've still got the skills. You know you can get the pleats right by just eyeballing them...<br/><br/>

Except that you can't. The pleats end up being uneven and the skirt lopsided. You can't let Lucy go out like that, your shoddy work would be judged by all other grannies in Scorchwood.
<br/><br/>


</h2>
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default ThreeQ2W;