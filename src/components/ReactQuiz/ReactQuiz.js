import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReactQuiz = () => {
    const quiz = useLoaderData()
    const {id,name,question,options,correctAnswer} = quiz;
    
    const diffToast = (opt,correctAnswer) =>{
      console.log(opt)
      if(opt ===correctAnswer){
        console.log(opt)
        alert('Correct Answer')
        
      }else{
        alert('Wrong Answer')
      }
      
    }
    const writeAnswer = (correctAnswer) =>{
      if(correctAnswer){
        console.log(correctAnswer)
        alert(correctAnswer)
        
      }
    }
    return (
        <div className='mt-3 bg-red-200 text-xl font-semibold'>
            
            
             <h2 >Quiz 1:  {quiz.data.questions[0].question} 
           <div className=' md:grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2 onClick={()=>diffToast(quiz.data.questions[0].options[correctAnswer])}
           className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
           
             a. {quiz.data.questions[0].options[0]}
                
                </h2> 
                <h2 onClick={()=>diffToast(quiz.data.questions[0].options[1])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                
                b. {quiz.data.questions[0].options[1]} 
                </h2>
                <h2 onClick={()=>diffToast(quiz.data.questions[0].options[2])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                
                c. {quiz.data.questions[0].options[2]} 
             
                </h2>
                <h2 onClick={()=>diffToast(quiz.data.questions[0].options[3])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                
                d. {quiz.data.questions[0].options[3]}
                
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[0].correctAnswer)}>write answer</button>
           </div>
             </h2>
             
             <h2 className='mt-12'>Quiz 2:  {quiz.data.questions[1].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2  onClick={()=>diffToast(quiz.data.questions[1].options[0])} className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[1].options[0]} 
                </h2> 
                <h2  onClick={()=>diffToast(quiz.data.questions[1].options[1])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[1].options[1]} 
                </h2>
                <h2  onClick={()=>diffToast(quiz.data.questions[1].options[correctAnswer])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[1].options[2]} 
             
                </h2>
                <h2  onClick={()=>diffToast(quiz.data.questions[1].options[3])} className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[1].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[1].correctAnswer)}>write answer</button>
           </div>
             </h2>
             <h2 className='mt-12'>Quiz 3:  {quiz.data.questions[2].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2  onClick={()=>diffToast(quiz.data.questions[2].options[0])} className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[2].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[2].options[1])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[2].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[2].options[correctAnswer])} className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[2].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[2].options[3])} className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[2].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[2].correctAnswer)}>write answer</button>
           </div>
             </h2>
             <h2 className='mt-12'>Quiz 4:  {quiz.data.questions[3].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2   onClick={()=>diffToast(quiz.data.questions[3].options[0])}className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[3].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[3].options[1])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[3].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[3].options[2])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[3].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[3].options[correctAnswer])}className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[3].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[3].correctAnswer)}>write answer</button>
           </div>
             </h2>
             <h2 className='mt-12'>Quiz 5:  {quiz.data.questions[4].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2   onClick={()=>diffToast(quiz.data.questions[4].options[0])}className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[4].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[4].options[correctAnswer])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[4].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[4].options[2])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[4].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[4].options[3])}className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[4].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[4].correctAnswer)}>write answer</button>
           </div>
             </h2>
             <h2 className='mt-12'>Quiz 6:  {quiz.data.questions[5].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2   onClick={()=>diffToast(quiz.data.questions[5].options[0])}className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[5].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[5].options[correctAnswer])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[5].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[5].options[2])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[5].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[5].options[3])}className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[5].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[5].correctAnswer)}>write answer</button>
           </div>
           
             </h2>
             <h2 className='mt-12'>Quiz 7:  {quiz.data.questions[5].question} 
           <div className='grid grid-cols-2 gap-3 mt-3 px-52 '>
           <h2   onClick={()=>diffToast(quiz.data.questions[6].options[correctAnswer])}className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[6].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[6].options[1])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[6].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[6].options[2])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[6].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[6].options[3])}className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                d. {quiz.data.questions[6].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[6].correctAnswer)}>write answer</button>
           </div>
             </h2>
             
             
             <h2 className='mt-12'>Quiz 8:  {quiz.data.questions[7].question} 
           <div className='grid grid-cols-2 border-black gap-3 mt-3 px-52 '>
           <h2   onClick={()=>diffToast(quiz.data.questions[7].options[0])}className='border-2 border-black rounded-md p-3'>
           <input className='mr-2 ' type="radio" value="Male" name="gender" />
             a. {quiz.data.questions[7].options[0]} 
                </h2> 
                <h2   onClick={()=>diffToast(quiz.data.questions[7].options[1])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                b. {quiz.data.questions[7].options[1]} 
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[7].options[0])}className='border-2 border-black rounded-md p-3'>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                c. {quiz.data.questions[7].options[2]} 
             
                </h2>
                <h2   onClick={()=>diffToast(quiz.data.questions[7].options[correctAnswer])}className='border-2 border-black rounded-md p-3 '>
                <input className='mr-2 ' type="radio" value="Male" name="gender" />
                
                d. {quiz.data.questions[7].options[3]}
                </h2>
                <button className='bg-red-600 p-1 rounded-lg' onClick={()=>writeAnswer(quiz.data.questions[7].correctAnswer)}>write answer</button>
           </div>
             </h2>
             
        </div>
    );
};

export default ReactQuiz;
