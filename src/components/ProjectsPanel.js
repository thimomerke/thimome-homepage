import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/ProjectsPanel.component.css';

const projects = [
  { id: 0, name: 'Marine Ecosystem Viewer', 
    desc: `Map that displays ocean ecosystem information, such as coral reefs and mammal populations - under development as part of a research project with CBS' Nordic ESG Lab`, 
    techs: 'JavaScript, React, CSS', github: 'https://github.com/thimomerke/ocean-ecosystem-risk-viewer', deploy: 'https://ocean.thimo.me'},
  { id: 1, name: 'Travel Tracker', 
  desc: 'App that allows you to track cities (and other places) you have visited and displays them on a map', 
  techs: 'JavaScript, React, CSS', github: 'https://github.com/thimomerke/leaflet-travel-app'},
  { id: 2, name: 'GModPanel', 
  desc: 'Web Admin Panel for Garrys Mod. This panel allows you to monitor and control a Garrys Mod Server from the web, and is meant for usage with game modes such as Trouble in Terrorist Town.', 
  techs: 'PHP, CSS', github: 'https://github.com/thimomerke/GModPanel'},
  { id: 3, name: 'PythonVoiceAssistant', 
  desc: 'Voice assistant for usage on Raspberry Pi, similar to Google Assistant or Amazon Alexa. I used Snowboy for voice recognition, wit.ai for command processing and VoiceRSS for TTS', 
  techs: 'Python', github: 'https://github.com/thimomerke/PythonVoiceAssistant'},
  { id: 4, name: 'iPillPython', 
  desc: 'Operating script for the iPill, an automatic drug dispenser built as part of a school research project for the Jugend Forscht science fair', 
  techs: 'Python', github: 'https://github.com/thimomerke/iPillPython'},
  { id: 5, name: 'SmartStandDash', 
  desc: 'Dashboard for the smart alarm clock I am building, currently includes time, alarm and weather information', 
  techs: 'JavaScript, HTML, CSS', github: 'https://github.com/thimomerke/nightstand-smart-dashboard'},
  { id: 6, name: 'BaitGame', 
  desc: '2D jump and run game in development with Team Baitmain using Unity and C# scripting', 
  techs: 'Unity, C#', github: 'https://github.com/TeamBaitmain/2dgamefalldmg'},
  { id: 7, name: 'Team BaitMain Homepage', 
  desc: 'I act as a web developer and server administrator for the multi-gaming team BaitMain', 
  techs: 'JavaScript, React / Next.JS, CSS', github: 'https://github.com/thimomerke/BaitmainHomepage-next', deploy: 'https://baitmain.de'},
]

const ProjectsPanel = () => {
    return (
        <Box className="projectsPanel" display="flex" flexWrap="wrap" sx={{ maxWidth: 5000 }}>
          {
            projects.map(function(project){
              return (
                <Card className="projectCard" variant="outlined">
                <CardContent>
                  <Typography className="projectTitle">
                    {project.name}
                  </Typography>
                  <Typography className="projectDesc">
                    {project.desc}
                  </Typography>
                  <Typography className="projectTechs">
                    {project.techs}
                  </Typography>
                  <Typography className="projectLinks">
                    <a href={project.github} className="fa fa-github" style={{fontSize: '24px', color: 'var(--contrast2)'}} target="_blank" rel="noreferrer"> </a>
                    {project.deploy 
                      ? <a href={project.deploy} className="fa fa-window-maximize" style={{fontSize: '24px', color: 'var(--contrast2)'}} target="_blank" rel="noreferrer"> </a>
                      : ''
                    }
                  </Typography>
                </CardContent>
              </Card>
              )
            })
          }
    </Box>
    );
}

export default ProjectsPanel;