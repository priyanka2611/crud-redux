const postReducer =(state= [], action)=>{ // action is data that we have 
    switch(action.type){
        case 'ADD_POST':
                        return state.concat([action.data]);
        case 'DELETE_POST':
                        return state.filter((post)=>post.id != action.id)
        default :
                        return state;
    }

}
//what is action.data? Well it’s nothing but an object with our individual post title and the post message
//whenever the ‘ADD_POST’ event happens we want to push some data into the state array.
// import in index.js file
//pass this to component using provider in index.js
export default postReducer;