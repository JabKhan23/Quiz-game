import { useNavigate } from "react-router-dom";

const OneQ1W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>You have always been committed to making environmentally friendly choices - you even convinced your parents to become vegan with you... but wow, that burger sounds amazing.<br/><br/>

<i>People have abandoned their convictions for less</i>, you think. <i>Like for double patty burgers, for example.</i><br/><br/>
The burger proves to be as delicious as it sounds; with each bite, you think less and less about the environment. Someone else should really do something about it, though.<br/><br/>


</h2>
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default OneQ1W;