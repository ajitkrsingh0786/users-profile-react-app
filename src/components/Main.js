import React ,{Component} from 'react';
import UsersList from './UsersList';
import UserHomePage from './UserHomePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios';


class Main extends  Component{
    constructor(props){
           super(props);
           this.state = {
               users: [],
               
           }
    }


        componentDidMount(){
        Axios.get('https://panorbit.in/api/users.json')            
             .then( res => {
                 console.log(res)
                 this.setState(
                     {
                         
                         users: res.data.users,
                     }
                 )
             })
    }
      
    render(){

        const UserWithId = ({match}) => {
            return(
                <UserHomePage user={this.state.users.filter((user) => user.id === parseInt(match.params.userId,10))[0]} />
            );
          };
     
          
        return (
            <div>
             <Switch>
              <Route path='/userList' component={ () =><UsersList users={this.state.users}/>} />
              <Route exact path='/userHomePage' component={UserHomePage} />
              <Route path='/userHomePage/:userId'  component={UserWithId}/>
              <Redirect to="/userList"/>
          </Switch>
            </div>
        )
    }
}

export default Main;