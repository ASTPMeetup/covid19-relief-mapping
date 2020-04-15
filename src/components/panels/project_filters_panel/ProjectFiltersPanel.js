import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import BackToLink from '../../helpers/BackToLink';
import { ProximitySlider, ZipLookUpField, CheckBoxRow, DateRangeSlider } from './filter_map_components/index';
import { setSearchText } from '../../../actions/filters';

const ProjectFiltersPanel = (props) => {
    useEffect(() => {
        props.dispatch(setSearchText(''));
    });

    return (
        <div id="project_filters_panel">
            <BackToLink Route="/" Text="Back to home"/>
            <div className="project-filters">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <SubHeader Text="Zip Code"/>
                        <ZipLookUpField/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <SubHeader Text="Proximity"/>
                        <ProximitySlider/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SubHeader Text="Date Posted"/>
                        <DateRangeSlider/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <SubHeader Text="Filter By Types"/>
                        <div className="project-types-container">
                            <CheckBoxRow Label="Household Goods" ProjectType="household"/>
                            <CheckBoxRow Label="Delivery Volunteers" ProjectType="delivery"/>
                            <CheckBoxRow Label="Food Pantries/Meal Assistance" ProjectType="food"/>
                            <CheckBoxRow Label="Jobs/Financial Assistance" ProjectType="job"/>
                            <CheckBoxRow Label="Resources for Children" ProjectType="children"/>
                            <CheckBoxRow Label="Services" ProjectType="service"/>
                            <CheckBoxRow Label="Requests" ProjectType="request"/>
                        </div>
                    </div>
                </div>
                <br/>
                <Header Text="Stats For Your Area"/>
                <StatsContainer/>
                <div className="row">
                    <div className="col">
                        <Link to="/projects">
                            <ActionButton Text="See All Results" Class="primary-large"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(ProjectFiltersPanel);