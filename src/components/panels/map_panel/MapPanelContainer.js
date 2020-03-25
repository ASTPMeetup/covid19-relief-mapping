import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';
import { meep_service } from '../../../services/meep_service';
import { selectProject } from '../../../actions/project_details';
import { withRouter} from 'react-router-dom';
import { selectProjectLocations } from '../../../selectors/locations';
import { GoogleMapsAPIKey } from '../../../../private/google_maps';
import uuid from 'uuid';

const mapState = {
    marker : {
        strokeColor: "hsl(125, 100%, 14%)",
        fillColor:'hsl(125, 100%, 14%)',
        fillOpacity: "0.7",
        radius: 500,
        strokeWeight: 1
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        locations: state.locations[0] ? selectProjectLocations(state.locations[0], state.filters) : [],
        map_state: state.map_state
    }
};

const MyMapComponent = connect(mapStateToProps)(withScriptjs(withGoogleMap((props) => {

    const dispatchProjectSummary = (location) => {
        meep_service.getProjectDetailsById(location.project_id).then(project => {
            project.lat_lng = location.center.lat + ',' + location.center.lng;
            props.dispatch(selectProject(project));
            props.history.push("/details");
        });
    }

    return (
        <GoogleMap
            key={uuid()}
            defaultZoom={props.map_state.zoom}
            defaultCenter={props.map_state.center}>
            {props.locations.map(location => {
                return <Marker
                            key={location.key}
                            onClick={()=>dispatchProjectSummary(location)}
                            position={location.center}>
                        </Marker>
            })}
        </GoogleMap>
    )
})));

const MapContainer = (props) => {
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100vh` }} />}
                history={props.history}
            />
        );

}

export default withRouter(MapContainer);