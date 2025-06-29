import React, { Component } from 'react';

const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg',
};

export default class UserProfile extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      isButtonToggled: true
    };
    this.handleToggler = this.handleToggler.bind(this);
  }

  handleToggler() {
    this.setState(prevState => ({
      isButtonToggled: !prevState.isButtonToggled
    }));
  }

  render() {
    const { isButtonToggled } = this.state;
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center transition duration-300 ease-in-out hover:shadow-2xl">
          {isButtonToggled && (
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-300 mb-4"
            />
          )}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
          <button
            onClick={this.handleToggler}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            {isButtonToggled ? 'Hide Bio' : 'Show Bio'}
          </button>
          {isButtonToggled && (
            <p className="text-gray-600 mt-4 italic">{user.bio}</p>
          )}
        </div>
      </div>
    );
  }
}
