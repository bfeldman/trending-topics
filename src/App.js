import React from 'react'
import './App.css';

const themes = {
  light : {
    bgColor: 'rgb(247, 249, 250)',
    mainFontColor: 'rgb(15, 20, 25)',
    secondaryFontColor: 'rgb(91, 112, 131)'
  },

  dark : {
    bgColor: 'rgb(21,24,28)',
    mainFontColor: 'rgb(217, 217, 217)',
    secondaryFontColor: 'rgb(110, 118, 125)'
  },
  dim : {
    bgColor: 'rgb(25,39,52)',
    mainFontColor: 'rgb(255, 255, 255)',
    secondaryFontColor: 'rgb(136, 153, 166)'
  }
}

class App extends React.Component {
  
  state = {
    category: "Trending in United States",
    topic: "Insert topic",
    desc: "Put a description here",
    tweetCount: "10.7K",
    themeName: "Light",
    theme: themes.light
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleThemeChange = (event) => {
    this.setState({
      theme: themes[event.target.value.toLowerCase()],
      themeName: event.target.value
    })
  }
  
  render() {
    return (
      <div className="container">
        
        <div className="edit-form">
          <span className="label">Locale/Category:</span>
          <span class="smalltext">Alternatively, "[topic] · Trending"</span>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          
          <span className="label">Topic:</span>
          <input
            type="text"
            name="topic"
            value={this.state.topic}
            onChange={this.handleChange}
          />
          
          <span className="label">Description:</span>
          <textarea
            type="text"
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
          />
          
          <span className="label">Tweet count:</span>
          <input
            type="text"
            name="tweetCount"
            value={this.state.tweetCount}
            onChange={this.handleChange}
          />
          
          <span className="label">Theme:</span>
          <select
            value={this.state.themeName}
            name="theme"
            onChange={this.handleThemeChange}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Dim">Dim</option>
          </select>
          
        </div>
          
        <div
          className="trending-module"
          style={{ background: this.state.theme['bgColor']}}
        >
          <div
            className="category"
            style={{ color: this.state.theme['secondaryFontColor']}}
          >
              {this.state.category}
          </div>
          
          <div
            className="topic"
            style={{ color: this.state.theme['mainFontColor']}}
          >
              {this.state.topic}
          </div>
          
          <div
            className="description"
            style={{
              color: this.state.theme['secondaryFontColor']
            }}  
          >
              {this.state.desc}
          </div>
          
          <div
            className="tweet-count"
            style={{ color: this.state.theme['secondaryFontColor']}}
          >
              {this.state.tweetCount + " Tweets"}
          </div>
        
          <div
            className="dots"
            style={{ color: this.state.theme['secondaryFontColor']}}
          >
            <span>...</span>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;

