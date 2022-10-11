
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
const quizes = useLoaderData()
    return (
        <div>
            <h1>home page:{quizes.data[0].total}</h1>
            {
              quizes.data.map(quiz=><Quiz
              key={quiz.id}
              quiz={quiz}
              ></Quiz>)
            }
            
          
            

        </div>
    );
};

export default Home;