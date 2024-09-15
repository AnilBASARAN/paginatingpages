import './App.css';
import PostItem from "./PostItem.jsx";
import posts from "./posts.jsx";
import {useState} from "react";

const App = () => {
const [pageIndex, setPageIndex] = useState(1);
const PAGE_MAX_SIZE = 9;
let totalButtonNumber = Math.ceil(posts.length / PAGE_MAX_SIZE)
  
  let buttons = [];
  console.log(totalButtonNumber)
  for(let i = 0; i < totalButtonNumber ; i++){
    buttons.push(<button
                   onClick={()=>setPageIndex(i)}
                   className="bg-blue-300/50 rounded-sm text-black w-4 m-1" 
                   key={i} >
      
                  {i+1}
                  </button>
                );
   
  }

  const allPosts = posts
    .slice(PAGE_MAX_SIZE*pageIndex,PAGE_MAX_SIZE*(pageIndex+1))
    .map((post,index)=><PostItem key={index} post={post} /> )
  
  return (
    <div className="flex flex-col justify-center items-center m-2 p-2">
      <div className="w-full max-w-3xl flex flex-wrap justify-center" >{allPosts}</div>
      <div>{buttons}</div>
    </div>
  );
};

export default App;
