import React from 'react'
import Title from './Title'
import Card from './Card'
import { projects } from '../Data/ProjectsData'

export default function Projects() {
  return (
    <div id="Projects" className="container my-5">
      <Title content="My Projects" />
      <div className="projects__container container-fluid">
        <div className="row justify-content-center">
          {projects.map(project => {
            return <Card key={project.id}
              href={project.href}
              src={project.src}
              alt={project.alt}
              title={project.title}
              description={project.description}
            ></Card>
          })
          }
        </div>
      </div>
    </div>
  )
}

