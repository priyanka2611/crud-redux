const postReducer =(state= [], action)=>{ // action is data that we have parameter
    switch(action.type){
        case 'ADD_POST':
                        return state.concat([action.data]);
        case 'DELETE_POST':
                        return state.filter((post)=>post.id != action.id)
        case 'EDIT_POST':
                        return state.map((post)=>post.id==action.id? {...post, editing : !post.editing}:post)
        case 'UPDATE':
                        return state.map((post)=>{
                            if(post.id== action.id){
                                return {
                                    ...post,
                                    title: action.data.newTitle,    
                                    message: action.data.newMessage,
                                    editing : !post.editing
                                }
                            }
                            else
                            return post
                        })
        default :
                        return state;
    }

}
//what is action.data? Well it’s nothing but an object with our individual post title and the post message
//whenever the ‘ADD_POST’ event happens we want to push some data into the state array.
// import in index.js file
//pass this to component using provider in index.js
export default postReducer;