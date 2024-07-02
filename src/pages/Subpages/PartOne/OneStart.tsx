import { useNavigate } from "react-router-dom";

const OneStart: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div className="oneFont">
            <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
            <h1>Part 1: The Inspiration</h1>
          
        <h2><br/>The year is 2018. The place is Stockholm.<br/><br/>
You are Greta Thunberg, a fifteen-year-old girl with big aspirations and a desire to make the world a better place.<br/><br/>
You and your friend, Alice, are inside a café in the city centre. You've been talking about what you want to do with your lives when you're older, but all that big life talk has made you both hungry.<br/><br/>
</h2> 
      <div className="center">
    <button onClick={() => navigate('/pt1q1')}>Next</button> 
    </div> 
      </div>
    );
}
  export default OneStart;