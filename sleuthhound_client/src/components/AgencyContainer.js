import { Component } from 'react';
import { connect } from 'react-redux'
import AgencyForm from './AgencyForm'
import AgencyLister from './AgencyLister'


class AgencyContainer extends Component {

    render() {
        return(
        <div>
            <div>
                <AgencyForm />
                <div>
                    <AgencyLister />
                </div>    
            </div>
         
        </div>
        );
    }
}

export default AgencyContainer;