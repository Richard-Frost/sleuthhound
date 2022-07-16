import { Component } from 'react';
import { connect } from 'react-redux'
import AgencyForm from './AgencyForm'
import AgencyLister from './AgencyLister'
import pic from '../images/sleuthhound.png'


class AgencyContainer extends Component {

    render() {
        return(
            <div className="flex-container">

                    <img id="logo" src={pic}></img>
                       
                            <AgencyForm />
                            <AgencyLister />
                       
              
            </div>                      
        );
    }
}

export default AgencyContainer;