import React, {Component} from 'react';

import Modal from '../../components/UI/Model/Model';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return  class extends Component {
        state = {
            error: null
        }

        componentDidmount () {
            axios.interceptors.request.use(req => {
                this.setSate({error: null});
                return req;
            });
            axios.interceptors.responce.use(res => res, error => {
                this.setSate({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setSate({error:null});
        }

        render () {
            return(
                <Aux>
                    <Modal show={this.state.error}
                    clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
                );
        }
    }
}

export default withErrorHandler;