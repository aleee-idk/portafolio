import React from 'react';
import './App.css';
import MainBar from './components/navbar.js';
import MainPage from './pages/main.js';
import Description from './pages/description.js';
import Skills from './pages/skills.js';
import Projects from './pages/projects.js';
import Other from './pages/other.js';
import Contact from './pages/contact.js';

const row_gutter = 'gy-3 gy-md-0';

class App extends React.Component {
  componentDidMount() {
    alert('All image are placeholders\nwill be change later...');
  }
  render() {
    return (
      <div className="App">
        <main>
          <MainBar />
          <MainPage row_gutter={row_gutter} />
          <Description row_gutter={row_gutter} />
          <Skills row_gutter={row_gutter} />
          <Projects row_gutter={row_gutter} />
          <Other row_gutter={row_gutter} />
          <Contact row_gutter={row_gutter} />
        </main>
      </div>
    );
  }
}

export default App;
