import React from 'react';
import ProjectTypeMarker from '../../helpers/projectTypeMarker';
import SubHeader from '../../helpers/SubHeader';
import { getDateStringValue } from '../../../actions/project_details';
import { ProjectTypePropsMap } from '../../../utilities/project_types';

const ProjectCard = ({ Name, BusinessName, Type, TimeStamp, Description }) => {
    return (
        <div className="project-card">
            <div className="row">
                <div className="col">
                    <SubHeader Text={ProjectTypePropsMap[Type].label}/>
                </div>
                <div className="col col-lg-2">
                    <div className="project-type-marker">
                        <ProjectTypeMarker FillClass={Type}/>
                    </div>
                </div>
                <div className="col-12 col-lg-10 flush-left">
                    <p>
                        <span className="project-card-label">Name:</span>&nbsp;{BusinessName ? BusinessName : Name}</p>
                    <p>
                        <span className="project-card-label">Description:</span>&nbsp;{Description.substring(0, 120) + "..."}
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    )
};

export default ProjectCard;