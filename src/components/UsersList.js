import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardHeader,
    CardTitle, Container} from 'reactstrap';
    import {Link} from 'react-router-dom';
 
  function UsersList(props){
         console.log("Ajit");
         console.log(props)
          

      return(
               <Container className="users-list-container">
                <div className="col-5">
                <Card className="users-list-card">
                    <CardHeader>
                        <h4>Users List</h4>
                    </CardHeader>
                <CardBody className="card-body" >
                <ul className="users-list">
                    {
                        props.users.map( user => {
                            return(
                            <Link to={`/userHomePage/${user.id}`}>
                            <li key={user.id}>
                               <div className="user-image user-row">
                                   <img src={user.profilepicture} alt="img" className="user-image"/>
                                </div>

                                <div className="user-row">
                                     {user.name}
                                </div>
                                
                                </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                </CardBody>
                </Card>
                </div>
                </Container>
      )
  }

  export default UsersList;