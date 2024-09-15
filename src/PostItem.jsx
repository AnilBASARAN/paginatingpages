import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PostItem=(props)=>{
    const{post} = props;
  
    return(
  
      <div className="m-2 rounded-lg overflow-clip relative">
        
      <img alt="" src={post.image} className=" w-56 h-56 object-cover " />
        
        <div className="bg-gray-500/75 text-white text-sm rounded-full px-2 absolute top-1 right-1" ><FontAwesomeIcon icon={faHeart} className='mr-1 text-rose-400' />{post.likes}</div>
        
      </div>
      
    );
  };
  
  export default PostItem;