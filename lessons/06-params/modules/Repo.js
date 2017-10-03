import React from 'react'
import PropTypes from 'prop-types';

class Repo extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.params.repoName}
                </h2>
            </div>
        )
    }
};

Repo.propTypes = {
    params: PropTypes.shape({repoName: PropTypes.string})
}

export default Repo;
