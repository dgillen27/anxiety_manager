import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import { updateToken } from './services/api';
import { registerUser, loginUser, getAllUsers } from './services/usersApi';
import { getAllExperiences, createExperience, getUserExperiences, showUserExperience, deleteExperience, putFinalRating } from './services/experiencesApi'
import decode from 'jwt-decode';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import CreateExperience from './components/CreateExperience';
import UserExperienceList from './components/UserExperienceList';
import SelectExperienceType from './components/SelectExperienceType';
import RatingPage from './components/RatingPage';
import Description from './components/Description';
import AllExperiences from './components/AllExperiences';
import StepSlider from './components/StepSlider';
import PieGraph from './components/PieGraph';
import Line from './components/Line';
import PopUp from './components/PopUp';
import OpenMenu from './components/OpenMenu';
import Graphs from './components/Graphs'
import ImageSelect from './components/ImageSelect'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'


ReactChartkick.addAdapter(Chart)

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

class App extends Component {
  constructor(){
    super();

    this.state = {
      formData: {
        username: '',
        email: '',
        profile_img: '',
        password: ''
      },
      experienceFormData: {
        exp_type: '',
        description: '',
        init_rating: null,
        second_rating: null,
        final_rating:null,
      },
      currentUser: null,
      currentExperience: null,
      users: [],
      experiences: [],
      allExperiences: [],
      value: 5,
      popup: true,
      burger: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.postExperience = this.postExperience.bind(this);
    this.selectType = this.selectType.bind(this);
    this.fetchAllExperiences = this.fetchAllExperiences.bind(this);
    this.handleSlideInit = this.handleSlideInit.bind(this);
    this.handleSlideSecond = this.handleSlideSecond.bind(this);
    this.handleSlideFinal = this.handleSlideFinal.bind(this);
    this.showExperience = this.showExperience.bind(this);
    this.destroyExperience = this.destroyExperience.bind(this);
    this.updateFinalRating = this.updateFinalRating.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.burgerShow = this.burgerShow.bind(this);
    this.burgerClose = this.burgerClose.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.addBorder = this.addBorder.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState( prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  async handleRegister(e) {
    e.preventDefault();
    const { formData } = this.state;
    const user = await registerUser(formData);
    const token = await loginUser(formData);
    console.log(user);
    this.setState({
      currentUser: user
    });
    localStorage.setItem("authToken", token.jwt)
    this.props.history.push('/user-profile');
    await this.getExperiences(this.state.currentUser.sub || this.state.currentUser.id);
  }

  handleLoginChange(e) {
    const { name, value } = e.target
    this.setState( prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  async handleLogin(e) {
    e.preventDefault();
    const token = await loginUser(this.state.formData);
    const userData = decode(token.jwt);
    this.setState({
      currentUser: userData,
      popup: true
    })
    localStorage.setItem("authToken", token.jwt);
    this.props.history.push('/user-profile');
    await this.setCurrentUser();
    await this.getExperiences(this.state.currentUser.sub || this.state.currentUser.id);
  }

  handleLogout() {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/');
  }

  async setCurrentUser() {
    const user = decode(localStorage.getItem("authToken"))
    this.setState({
      currentUser: user
    })
    console.log(this.state.currentUser);
  }

  handleExperienceChange(e) {
    const { name, value } = e.target
    this.setState( prevState => ({
      experienceFormData: {
        ...prevState.experienceFormData,
        [name]: value
      }
    }))
  }

  selectType(type) {
    this.setState({
      experienceFormData: {
        exp_type: type
      }
    })
    window.scrollTo({top: 0, behavior:"auto"})
  }

  async postExperience(e) {
    e.preventDefault();
    const { experienceFormData } = this.state
    const experience = await createExperience(this.state.currentUser.sub || this.state.currentUser.id, experienceFormData);
    this.setState({
      currentExperience: experience
    })
    console.log("Experience posted");
    console.log(this.state.currentExperience);
    await this.getExperiences(this.state.currentUser.sub || this.state.currentUser.id);
    this.props.history.push("/user-profile");
  }

  async getUsers() {
    const users = await getAllUsers();
    this.setState({
      users
    })
    console.log("getting users");
    console.log(this.state.users);
  }

  async getExperiences(id) {
    const experiences = await getUserExperiences(id);
    this.setState({
      experiences
    })
    console.log("getting currentUser experiences");
    console.log(this.state.experiences);
  }

  async fetchAllExperiences() {
    const allExperiences = await getAllExperiences();
    this.setState({
      allExperiences
    })
    console.log("gettin em all");
    console.log(this.state.allExperiences);
  }

  handleExperienceChange(e) {
    const { name, value } = e.target
    this.setState( prevState => ({
      experienceFormData: {
        ...prevState.experienceFormData,
        [name]: value
      }
    }))
  }

  handleSlideInit(event, value) {
    this.setState( prevState => ({
      experienceFormData: {
        ...prevState.experienceFormData,
        init_rating: value
    }}))
  };

  handleSlideSecond(event, value) {
    this.setState( prevState => ({
      experienceFormData: {
        ...prevState.experienceFormData,
        second_rating: value
    }}))
  };

  handleSlideFinal(event, value) {
    this.setState( prevState => ({
      currentExperience: {
        ...prevState.currentExperience,
        final_rating: value
    }}))
  };

  async showExperience(user_id, id) {
    const currentExperience = await showUserExperience(user_id, id);
    this.setState({
      currentExperience
    })
    console.log(this.state.currentExperience);
    this.props.history.push("/final-rating")
  }

  async updateFinalRating(user_id, id, updatedExperience) {
    const resp = await putFinalRating(user_id, id, updatedExperience)
    const experiences = await getUserExperiences(user_id);
    this.setState({
      experiences
    })
    this.props.history.push("/user-profile");
  }

  async destroyExperience(user_id, id){
    const resp = await deleteExperience(user_id, id)
    console.log(resp);
    const experiences = await getUserExperiences(user_id)
    this.setState({
      experiences
    })
  }

  selectImage(profile_img) {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        profile_img
      }
    }))
  }

  closePopup() {
    this.setState({
      popup: false
    })
  }

  burgerShow(e) {
    e.preventDefault();
    this.setState({
      burger: true
    })
  }

  burgerClose() {
    this.setState({
      burger: false
    })
  }

  addBorder() {

  }

  async componentDidMount() {
    await this.getUsers();
    await this.fetchAllExperiences();
    localStorage.getItem("authToken") && await this.setCurrentUser();
    this.state.currentUser && await this.getExperiences(this.state.currentUser.sub || this.state.currentUser.id);
  }

  render() {
    const { formData, currentUser, experienceFormData, allExperiences, value, burger } = this.state
    return (
      <div className="App">
        <Header
        handleLogout={this.handleLogout}
        currentUser={currentUser}
        burgerShow={this.burgerShow}
        burgerClose={this.burgerClose}/>
        <Route exact path="/" render={(props) => (
          <Welcome {...props}/>
        )} />
        {burger && <OpenMenu/>}
        { !this.state.currentUser && !localStorage.getItem("authToken") &&
          <Route path="/login" render={(props) => (
          <LoginForm
          {...props}
          formData={formData}
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          currentUser={currentUser}/>
        )}/>}
        <Route path="/register" render={(props) => (
          <RegisterForm
          {...props}
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          formData={formData}
          selectImage={this.selectImage}
          addBorder={this.addBorder}
          />
        )} />

        { currentUser && <Route exact path="/user-profile" render={(props) => (
          <UserProfile
          currentUser={currentUser}
          experiences={this.state.experiences}
          showExperience={this.showExperience}
          destroyExperience={this.destroyExperience}
          closePopup={this.closePopup}
          popup={this.state.popup}
          morning_messages={["Ready for a new day?", "I hope you're off to a good start this morning!"]}
          afternoon_messages={["How has your day been so far?", "Anything on your mind so far today?"]}
          night_messages={["Talk about your problems and be sure to get good nights rest!", "We hope you had a great day!"]}
          messages={["How are you feeling today?", "Hopefully today is off to a good start!", "Yes wonderful", "wow message", "so message"]}
          />
        )} />}

        <Route exact path="/graphs" render={(props) => (
          <Graphs
          currentUser={currentUser}
          experiences={this.state.experiences}/>
        )}/>

        <Route exact path="/select-experience-type" render={(props) => (
          <SelectExperienceType
          {...props}
          selectType={this.selectType}/>
        )} />

        <Route exact path="/init-rating" render={(props) => (
          <RatingPage
          {...props}
          handleExperienceChange={this.handleExperienceChange}
          experienceFormData={experienceFormData}
          name="init_rating"
          h1="On a scale from 1 to 10"
          h2="How anxious are you feeling about this experience?"
          route="/description-page"
          value={experienceFormData.init_rating}
          handleSlideType={this.handleSlideInit}
          />
        )} />

        <Route exact path="/second-rating" render={(props) => (
          <RatingPage
          {...props}
          handleExperienceChange={this.handleExperienceChange}
          experienceFormData={experienceFormData}
          name="second_rating"
          h1="Now that you have written about the sitation"
          h2="How are you feeling?"
          route="/create-experience"
          value={experienceFormData.second_rating}
          handleSlideType={this.handleSlideSecond}
          />
        )} />

        { currentUser &&
          <Route exact path="/final-rating" render={(props) => (
          <RatingPage
          {...props}
          handleExperienceChange={this.handleExperienceChange}
          experienceFormData={experienceFormData}
          name="final_rating"
          h1="Now that the situation has come to a conclusion"
          h2="Rate your feeling now!"
          route="/intial-graph"
          value={this.state.currentExperience.final_rating}
          handleSlideType={this.handleSlideFinal}
          updateFinalRating={this.updateFinalRating}
          currentExperience={this.state.currentExperience}
          />
        )} />}

        <Route exact path="/description-page" render={(props) => (
          <Description {...props}
          handleExperienceChange={this.handleExperienceChange}
          experienceFormData={experienceFormData}
          />
        )} />

        <Route exact path="/create-experience" render={(props) => (
          <CreateExperience
          {...props}
          handleExperienceChange={this.handleExperienceChange}
          postExperience={this.postExperience}
          experienceFormData={experienceFormData}
          />
        )} />

        <Route exact path="/all-experiences" render={(props) => (
          <AllExperiences {...props}
          allExperiences={allExperiences}/>
        )} />
      </div>
    );
  }
}

export default withRouter(App);
