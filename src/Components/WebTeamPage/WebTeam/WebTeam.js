import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WebTeamCardData from './WebTeamCardData';

const WebTeam = () => {
  const [members, setMembers] = useState([
    {
      rollNo: 'CS18B008',
      name: 'Deep Maheshwari',
      designation: ' project lead',
      DPUrl: './WebTeamPhotos/deep.jpeg',
      tier: 'top',
    },
    {
      rollNo: 'ME18B018',
      name: 'Natesh Aravind S.',
      DPUrl: './WebTeamPhotos/natesh.jpeg',
      designation: 'content and design head',
      tier: 'top',
    },
    {
      rollNo: 'CS18B034',
      name: 'Shubankar Bhadra',
      DPUrl: './WebTeamPhotos/shubhankar.jpg',
      designation: 'back-end head',
      tier: 'top',
    },
    {
      rollNo: 'CS18B021',
      name: 'Mir Sameed Ali',
      DPUrl: './WebTeamPhotos/sameed.jpeg',
      designation: 'front-end head',
      tier: 'top',
    },

    {
      rollNo: 'CS18B003',
      name: 'Arpit Bandejiya',
      DPUrl: './WebTeamPhotos/arpit.jpg',
      designation: 'Backend core',
      tier: 'middle',
    },
    {
      rollNo: 'CH18B002',
      name: 'Abhishek Kumar Gupta',
      DPUrl: './WebTeamPhotos/abhishek.jpeg',
      designation: 'frontend core',
      tier: 'middle',
    },
    {
      rollNo: 'CH19B023',
      name: 'Noble Mathews',
      DPUrl: './WebTeamPhotos/noble.jpg',
      designation: 'full stack',
      tier: 'middle',
    },
    {
      rollNo: 'ee18b043',
      name: 'Nuthakki Nishanth',
      DPUrl: './WebTeamPhotos/nishanth.jpg',
      designation: 'back end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B003',
      name: 'Amit Kesari',
      DPUrl: './WebTeamPhotos/amit.jpg',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B038',
      name: 'Sagar Singh',
      DPUrl: './WebTeamPhotos/sagar.jpg',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CE19B030',
      name: 'Shubham Raj',
      DPUrl: './WebTeamPhotos/shubham.jpeg',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'ME19B040',
      name: 'Talha Shamim',
      DPUrl: './WebTeamPhotos/talha.jpeg',
      designation: 'front end',
      tier: 'bottom',
    },
    {
      rollNo: 'CS19B025',
      name: 'Aashrith',
      DPUrl: './WebTeamPhotos/default.png',
      designation: 'back end',
      tier: 'bottom',
    },
  ]);

  const topheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'top') {
          return (
            <Col xs={12} sm={6} key={Math.random()} className="pt-1 px-2">
              <WebTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  const middleheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'middle') {
          return (
            <Col
              xs={12}
              sm={6}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <WebTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  const bottomheads = (
    <Row>
      {members.map((member) => {
        if (member.tier === 'bottom') {
          return (
            <Col
              sm={{ span: 10, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              lg={4}
              key={Math.random()}
              className="py-0 px-2"
            >
              <WebTeamCardData member={member} />
            </Col>
          );
        }
      })}
    </Row>
  );
  return (
    <div className="container-WebTeam">
      <Container fluid className="px-4">
        {topheads}
        {middleheads}
        {bottomheads}
      </Container>
    </div>
  );
};

export default WebTeam;
