import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import gamesBlog from '../Images/games-blog.png';
import todoList from '../Images/todo-list.png';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: '*OLD* Games Blog',
      description:
        'Games Blog App with RESTful routes, authentication and authorization.',
      screenshot: gamesBlog,
      link: 'https://games-blog.herokuapp.com/',
    },
    {
      title: '*OLD* Todo List',
      description:
        'Simple Todo List as a Single Page App using AJAX and jQuery.',
      screenshot: todoList,
      link: 'https://lista-twoich-zadan.herokuapp.com/todos',
    },
  ];

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container text-center">
        <h1>My Projects</h1>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          useKeyboardArrows={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          {projects.map((project) => (
            <div>
              <img src={project.screenshot} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Check Me
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
