import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1 className="homeTitle">The Creative Task
        </h1>
        <h2 className="byAlex">by Alex Dinu</h2>
        <br/>
        <div className="center">
        <button onClick={() => navigate('/pt1start')}>Start</button>
        <button onClick={() => navigate('/instructionspage')}>Instructions</button>
        </div>
      </div>
    );
}
  export default Home;
