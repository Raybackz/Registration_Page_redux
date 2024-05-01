import { createSlice } from "@reduxjs/toolkit";

const UserSlices= createSlice({
    name: "user",
    initialState: [],
    reducers: {
        signup : (state,action)=>{
            state.push(action.payload)
        },
        login : (state,action)=>{

        }
    }
})

export const {signup,login} = UserSlices.actions
export default UserSlices.reducer