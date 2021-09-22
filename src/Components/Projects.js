import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import gamesBlog from '../Images/games-blog.png';
import todoList from '../Images/todo-list.png';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Games Blog',
      description:
        'Games Blog App with RESTful routes, authentication and authorization.',
      screenshot: gamesBlog,
      link: {
        website: 'https://games-blog.herokuapp.com/',
        code: 'https://github.com/pkedzierski88/Games_Blog',
      },
    },
    {
      id: 2,
      title: 'Todo List',
      description:
        'Simple Todo List as a Single Page App using AJAX and jQuery.',
      screenshot: todoList,
      link: {
        website: 'https://lista-twoich-zadan.herokuapp.com/todos',
        code: 'https://github.com/pkedzierski88/Todo_List',
      },
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
          showIndicators={false}
          showArrows={false}
          showStatus={false}
        >
          {projects.map((project) => (
            <div key={project.id}>
              <img src={project.screenshot} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link.website} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary mx-1">Website</button>
                </a>
                <a href={project.link.code} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary mx-1">Code</button>
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
