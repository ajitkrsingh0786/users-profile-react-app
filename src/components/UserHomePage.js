import React from 'react';
 
  function UserHomePage( props ){
      return(
          <div>
          <h1>Users Home page</h1>
          <img src={props.user.profilepicture} />
          </div>
      )
  }

  export default UserHomePage;