import React, { Component } from 'react';
import './App.css';
import { updateToken } from './services/api';
import { registerUser, loginUser, getAllUsers } from './services/usersApi';
import { getAllExperiences, createExperience, getUserExperiences } from './services/experiencesApi'
import decode from 'jwt-decode';
import { Link, Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import CreateExperience from './components/CreateExperience';
import UserExperienceList from './components/UserExperienceList'


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
        init_rating: '',
        second_rating: '',
        final_rating: '',
      },
      currentUser: null,
      users: [],
      experiences: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.postExperience = this.postExperience.bind(this);
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
      currentUser: userData
    })
    localStorage.setItem("authToken", token.jwt);
    this.props.history.push('/user-profile');
  }

  handleLogout() {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/welcome');
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
    console.log(this.state.experienceFormData);
  }

  async postExperience(e) {
    e.preventDefault();
    const { experienceFormData } = this.state
    const experience = await createExperience(experienceFormData);
    this.setState({
      currentExperience: experience
    })
    console.log("Experience posted");
    console.log(this.state.currentExperience);
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
    console.log("getting experiences");
    console.log(this.state.experiences);
  }

  async componentDidMount() {
    await this.getUsers();
    localStorage.getItem('authToken') && await this.setCurrentUser();
    this.state.currentUser && await this.getExperiences(this.state.currentUser.sub);
  }


  render() {
    const { formData, currentUser, experienceFormData } = this.state
    return (
      <div className="App">
        <Header
        handleLogout={this.handleLogout}
        currentUser={currentUser}/>
        <Route path="/welcome" render={(props) => (
          <Welcome {...props}/>
        )} />
        { !this.state.currentUser && !localStorage.getItem("authToken") &&
          <Route exact path="/login" render={(props) => (
          <LoginForm
          {...props}
          formData={formData}
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          currentUser={currentUser}/>
        )}/>}

        <Route exact path="/register" render={(props) => (
          <RegisterForm
          {...props}
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          formData={formData}
          />
        )} />

        <Route exact path="/user-profile" render={(props) => (
          <UserProfile
          currentUser={currentUser}
          experiences={this.state.experiences}/>
        )} />

        <Route exact path="/create-experience" render={(props) => (
          <CreateExperience
          {...props}
          handleExperienceChange={this.handleExperienceChange}
          postExperience={this.postExperience}
          experienceFormData={experienceFormData}
          />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
