import React, {Fragment} from 'react';
import { useParams, Redirect } from 'react-router-dom';

import posts from '../data/posts';


const Post = () => {
   // console.log(props.match.params.id);  si se hace con las propos
   const {id} = useParams();
   // console.log(posts[id -1]);
   return (
      <Fragment>
         {posts[id-1] ?
            <div>
               <h1>{posts[id-1].titulo}</h1>
               <p>{posts[id-1].texto}</p>
            </div>
         :   
            <div>
               <Redirect to="/" />
            </div>
         }
      </Fragment>
    );
}
 

export default Post;

