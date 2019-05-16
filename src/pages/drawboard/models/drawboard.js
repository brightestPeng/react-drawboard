/**
 * Created by Administrator on 2018/4/2.
 */

export default{
    namespace:"drawboard",
    state:{
        
    },
    reducers:{
        save(state,action){
            return{
                ...state,...action.payload
            }
        }
    },
    effects:{
        
    }
}