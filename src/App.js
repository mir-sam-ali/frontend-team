import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import 'swiper/css/swiper.css';
import EventsPage from './Components/EventsPage/EventsPage';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import ClubsPage from './Components/ClubsPage/ClubsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import AchievementsPage from './Components/AchievementsPage/AchievementsPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Article from './Components/Article/Article';
import ChallengesPage from './Components/ChallengesPage/ChallengesPage';
import GalleryPage from './Components/ClubsPage/GalleryPage/GalleryPage';
import WebTeamPage from './Components/WebTeamPage/WebTeamPage';
import TechTeamsPage from './Components/TechTeamsPage/TechTeamsPage';
import ClubDescription from './Components/ClubsPage/ClubDescription/clubDescription';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        {/* <Navigation /> */}

        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />
          <Route exact path="/clubs/:id" component={ClubsPage} />
          <Route exact path="/clubs/:id/about" component={ClubDescription} />
          <Route
            exact
            path="/clubs/:ClubName/gallery"
            component={GalleryPage}
          />
          <Route path="/Blogs" component={BlogsPage} />
          <Route path="/Events" component={EventsPage} />

          <Route
            path="/Projects/:id"
            exact
            component={() => <Article category="project" />}
          />
          <Route path="/Projects" exact component={ProjectsPage} />

          <Route path="/Achievements" component={AchievementsPage} />
          <Route path="/TechnicalCommittee" component={AboutUs} />

          <Route path="/article" component={Article} />
          <Route path="/Challenges" component={ChallengesPage} />
          <Route path="/WebTeam" component={WebTeamPage} />
          <Route path="/TechTeam/:id" component={TechTeamsPage} />
          <Route component={ErrorPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
