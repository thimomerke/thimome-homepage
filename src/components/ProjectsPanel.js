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
  { id: 1, name: 'Renewables LCOE Calculator', 
    desc: `Tool to calculate the levelized cost of electricity (LCOE) for different renewable energy technologies based on geographic location and other parameters`, 
    techs: 'Python, Shiny', github: 'https://huggingface.co/spaces/UniMaMISES/LCOE_calculator_shiny/tree/main', deploy: 'https://unimamises-lcoe-calculator-shiny.hf.space/'},
  { id: 2, name: 'Strategic CDR Portfolio Model', 
    desc: `Model to determine the optimal portfolio of carbon dioxide removal (CDR) technologies for a given set of parameters, such as cost, scalability and permanence; under development as part of my master thesis`, 
    techs: 'JavaScript, React, CSS', github: 'https://github.com/thimomerke/master-thesis/blob/main/MasterThesisDraft.pdf'},
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
                    <a href={project.github} className="fa fa-github social symbol" style={{fontSize: '24px'}} target="_blank" rel="noreferrer"> </a>
                    {project.deploy 
                      ? <a href={project.deploy} className="fa fa-window-maximize social symbol" style={{fontSize: '24px'}} target="_blank" rel="noreferrer"> </a>
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