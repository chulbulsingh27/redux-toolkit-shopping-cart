import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:"learning rdux toolkit ",content:"i have heared a lot of good things about redux toolkit "},
    { id:2,title:"slices ... ",content:"the more i say slice  the more i want dosa .. " },
]
const postsSlice = createSlice({
    name:'posts',
    initialState ,
    reducers : {
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer
export const {postAdded} = postsSlice.actions