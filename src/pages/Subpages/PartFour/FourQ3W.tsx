import { useNavigate } from "react-router-dom";

const FourQ3W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>     
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
   
        <h2>You decide to go as without a nose. You've read the archives: some human didn't have them either. Your face is face-y enough as it is.<br/><br/>

Unfortunately, your explanation doesn't impress the bouncers. You try every trick in the book, but they don't let you in. <br/><br/>

You go back home early. If only you had a nose...
<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default FourQ3W;