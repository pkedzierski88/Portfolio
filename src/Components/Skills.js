import React from 'react';
import SingleSkill from './SingleSkill';
import './Skills.scss';

const Skills = () => {
  const skills = [
    {
      id: 1,
      text: 'HTML5',
      classes: 'fab fa-html5',
    },
    {
      id: 2,
      text: 'CSS3',
      classes: 'fab fa-css3-alt',
    },
    {
      id: 3,
      text: 'Sass',
      classes: 'fab fa-sass',
    },
    {
      id: 4,
      text: 'Bootstrap 5',
      classes: 'fab fa-bootstrap',
    },
    {
      id: 5,
      text: 'JavaScript ES6+',
      classes: 'fab fa-js-square',
    },
    {
      id: 6,
      text: 'React.js',
      classes: 'fab fa-react',
    },
    {
      id: 7,
      text: 'MySQL',
      classes: 'fas fa-database',
    },
    {
      id: 8,
      text: 'Git',
      classes: 'fab fa-git-alt',
    },
  ];

  return (
    <div id="my-skills" className="skills-wrapper">
      <div className="container text-center">
        <div className="row">
          <h1>My Skills</h1>
          <div className="col-12">
            {skills
              .filter((skill) => skill.id <= 4)
              .map((skill) => (
                <SingleSkill text={skill.text} classes={skill.classes} />
              ))}
          </div>
          <div className="col-12 bottom-column">
            {skills
              .filter((skill) => skill.id > 4)
              .map((skill) => (
                <SingleSkill text={skill.text} classes={skill.classes} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
