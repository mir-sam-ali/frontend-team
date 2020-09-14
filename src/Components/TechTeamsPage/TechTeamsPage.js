import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import './TechTeamsPage.css';
import Loading from '../ReusableComponents/Loading/Loading';
import TechTeamInfo from './TechTeamInfo/TechTeamInfo';
import CustomHR from '../ReusableComponents/CustomHR/CustomHR';

const TechTeamsPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/tech_team/${props.match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <div className="TechTeamsPage">
      <Navigation />
      <Loading show={loading} />
      {loading ? (
        <></>
      ) : (
        <>
          <TechTeamInfo data={data} />
          <CustomHR />
          {/* <TechTeamMembers /> */}
        </>
      )}
      <ProjectFooter />
    </div>
  );
};

export default withRouter(TechTeamsPage);
