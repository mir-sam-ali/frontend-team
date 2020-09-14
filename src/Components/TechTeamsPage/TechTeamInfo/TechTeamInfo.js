import React, { useState } from 'react';

import parse from 'html-react-parser';
import { Button } from 'react-bootstrap';
import './TechTeamInfo.css';

function TechTeamInfo({ data }) {
  const [readMore, setReadMore] = useState(false);

  let image_url =
    'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362';

  if (data.team_poster_url !== '') {
    image_url = `${process.env.REACT_APP_BASE_URL}/images/${data.team_poster_url}`;
  }
  let dp_url =
    'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362';

  if (data.dp_url !== '') {
    dp_url = `${process.env.REACT_APP_BASE_URL}/images/${data.dp_url}`;
  }
  return (
    <div
      className="TechTeamInfo-container"
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <div className="TechTeamInfo-overlay" />
      <div className="TechTeamInfo-content">
        <div className="TechTeamInfo-title">{data.team_name}</div>
        {/* <div className="TechTeamInfo-subtitle">
          The Electronics and Robotics Club of IIT Tirupati
        </div> */}
        <div className="TechTeamInfo-description">
          {parse(data.description)}
        </div>
        {data.ref_link && (
          <Button
            className="TechTeamInfo-redirect"
            href={'//' + data.ref_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to check us out
          </Button>
        )}
      </div>

      <div className="TechTeamInfo-parent">
        <div className="TechTeamInfo-image">
          <div className="TechTeamInfo-image-container">
            <div className="TechTeamInfo-image-content">
              <div className="TechTeamInfo-image-content-overlay"></div>
              <img
                className="TechTeamInfo-image-content-image"
                src={dp_url}
                alt="Poster"
              />
              <div className="TechTeamInfo-image-content-details fadeIn-bottom">
                <div className="center">
                  <span className="TechTeamInfo-overlay-title">
                    {data.tech_head}
                  </span>
                  <span className="TechTeamInfo-overlay-headDetails">
                    {data.email_id}
                  </span>
                  {/* <span className="TechTeamInfo-overlay-headDetails">
                    {data.contact}
                  </span> */}
                  {/* <span className="TechTeamInfo-overlay-social">
                      <FaInstagram color="orange" /> Instagram
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      <FaGithub /> Github
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      <FaYoutube color="red" /> Youtube
                    </span>
                    <span className="TechTeamInfo-overlay-social">
                      View Gallery
                    </span> */}
                </div>
              </div>
            </div>
            {/* <div className="TechTeamInfo-frame-logo">
              <FaGithub color="white" />
              <div>
                <FaInstagram color="orange" />
                <span style={{ marginRight: '4px' }}></span>
                <FaYoutube color="red" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechTeamInfo;
