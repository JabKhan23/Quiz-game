import { useNavigate } from "react-router-dom";

const TwoQ2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    <div className="parthome">
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>
        "Thank you, Albert."<br/><br/>

You walk back inside your mansion with him.<br/><br/>

You reach a massive bookcase - two meters tall by five meters wide. This is the hidden door to your secret lair. All you need to do to open it is pull out the right book.<br/><br/>

Which book do you pull out?
<br/><br/>
</h2> </div>
        <button onClick={() => navigate('/pt2q2w')}>Creative Baking: 100 Pop-culture cakes</button>
        <button onClick={() => navigate('/pt2q3')}>The History of Silverware in the Western World
        </button>
      </div>
    );
}
  export default TwoQ2;