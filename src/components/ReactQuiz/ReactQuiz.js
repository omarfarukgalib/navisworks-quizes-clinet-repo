import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReactQuiz = () => {
    const quiz = useLoaderData()
    const {id,name,question,options} = quiz;
    return (
        <div className='mt-3'>
            
             
             <h2>Quiz 1:  {quiz.data.questions[0].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2 className='border-2 rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[0].options[0]} 
                </h2> 
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[0].options[1]} 
                </h2>
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[0].options[2]} 
             
                </h2>
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[0].options[3]}
                </h2>
           </div>
             </h2>
             
             <h2 className='mt-12'>Quiz 2:  {quiz.data.questions[1].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2 className='border-2 rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[1].options[0]} 
                </h2> 
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[1].options[1]} 
                </h2>
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[1].options[2]} 
             
                </h2>
                <h2 className='border-2 rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[1].options[3]}
                </h2>
           </div>
             </h2>
             <h2 className='mt-12'>Quiz 3:  {quiz.data.questions[2].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2 className='border-2 rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[2].options[0]} 
                </h2> 
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[2].options[1]} 
                </h2>
                <h2 className='border-2 rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[2].options[2]} 
             
                </h2>
                <h2 className='border-2 rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[2].options[3]}
                </h2>
           </div>
             </h2>
        </div>
    );
};

export default ReactQuiz;
