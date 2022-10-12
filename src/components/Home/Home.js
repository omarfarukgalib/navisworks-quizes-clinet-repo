
import { useLoaderData } from 'react-router-dom';
import HeadSection from '../HeadSection/HeadSection';
import Quiz from '../Quiz/Quiz';

const Home = () => {
const quizes = useLoaderData()

    return (
      <div className='bg-red-200'>
        <div className='mt-3'>
        <HeadSection></HeadSection>
        </div>
        <div className=' md:flex gap-3 justify-evenly'>
            
            {
              quizes.data.map(quiz=><Quiz
              key={quiz.id}
              quiz={quiz}
              
              ></Quiz>)
            }
            
          
            

        </div>
      </div>
    
     
    );
};

export default Home;