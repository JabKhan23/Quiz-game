import { useNavigate } from "react-router-dom";

const ThreeQ3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h2>
        To add an extra bit of colour and personality, you decide to crochet a flower brooch for your grandchild.<br/><br/>

How do you go about doing that?
<br/><br/>
</h2>
        <button onClick={() => navigate('/pt3q3w')}>Knitting needles</button>
        <button onClick={() => navigate('/pt3t3')}>Sewing needle and fork
        </button>
      </div>
    );
}
  export default ThreeQ3;