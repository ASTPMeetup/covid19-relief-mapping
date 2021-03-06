import React from "react";
import { connect } from 'react-redux';
import { selectProjectLocations } from '../../../../selectors/locations';

const StatsContainer = (props) => (
    <div className="stats-container text-center">
        <p><em>{props.number_of_donations} places offering help in your area.</em></p>
        <p><em>{props.number_of_donee} requests for help in your area.</em></p>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        number_of_donations: state.donation_locations ? selectProjectLocations(state.donation_locations, state.filters).length : 0,
        number_of_donee: state.donee_locations ? selectProjectLocations(state.donee_locations, state.filters).length : 0,
    }
};

export default connect(mapStateToProps)(StatsContainer);