import React from 'react';

const UserForm = () =>{
    return(
        <form>
            <input style={{margin:"20px auto", display:"block"}} type="text" name="username" />
            <button>Submit</button>
        </form>

    )
}

export default UserForm;