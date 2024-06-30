import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>McCann Creative Task
        </h1>
        <h2>By Alex Dinu</h2>
        <button onClick={() => navigate('/pt1start')}>Start</button>
        <button onClick={() => navigate('/info')}>Instructions</button>
      </div>
    );
}
  export default Home;
