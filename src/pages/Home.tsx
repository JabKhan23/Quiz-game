import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Welcome Dinu</h1>
        <button onClick={() => navigate('/question1')}>Start</button>
        <button onClick={() => navigate('/info')}>Instructions</button>
      </div>
    );
}
  export default Home;
