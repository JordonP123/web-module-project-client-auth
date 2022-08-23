import React from 'react'

function AddFriends(){
    return(
        <div className='loginContainer'>
        <h1 className='loginHeader'>ADD FRIEND</h1>
        <form className='formContainer'>
           <label className='labels addFriendsLabels'>FRIEND NAME</label><br/>
           <input className='inputs addFriendsInputs' type='text' name='username'/><br/>
           <label className='labels addFriendsLabels'>FRIEND EMAIL</label><br/>
           <input className='inputs addFriendsInputs' type='text' name='password'/><br/>
           <input className='inputs submit addFriendsSubmit' type='submit' value='SUBMIT'/>
        </form>
       </div>
    )
}

export default AddFriends