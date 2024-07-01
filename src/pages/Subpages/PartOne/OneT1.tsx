import { useNavigate } from "react-router-dom";

const OneT1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   <div className="parthome">
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>You ask: "Is the avocado toast vegan? And are the avocados ethically sourced?"<br/><br/>

"Yes and... I think so," replies the waitress.<br/><br/>

"I'll go for that, then. Thanks!"<br/><br/>

That burger did sound pretty good, but you're not going to let go of your principles for some Buffalo sauce.<br/><br/>

You are happy with your choice.<br/><br/>


</h2> </div>
    <button onClick={() => navigate('/pt1q2')}>Next</button>  
      </div>
    );
}
  export default OneT1;