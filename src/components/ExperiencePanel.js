import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/ExperiencePanel.component.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  const ExperiencePanel = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="experiencepanel">
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ children: <span /> }}
        >
          <Tab disableRipple className="tab" label="work" />
          <Tab disableRipple className="tab" label="education" />
          <Tab disableRipple className="tab" label="certifications" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <div className="tabpanel">
                <div className="item">
                    <span className="job-title">Head of Marketing</span><span className="job-company"> // Q-Summit</span>
                    <div className="job-time">April 2020 - June 2021</div>
                    <ul className="job-description">
                        <li>Photography and Video Production for a Conference with > 1000 attendees</li>
                        <li>Social Media Management, mainly LinkedIn</li>
                        <li>Web and Marketing Analytics</li>
                        <li>Programming and maintainance of the Website</li>
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Intern Business Development and Marketing</span><span className="job-company"> // BASF</span>
                    <div className="job-time">March 2021 - June 2021</div>
                    <ul className="job-description">
                        <li>Online and offline marketing campaigns</li>
                        <li>Social-Media Management, e.g. Instagram, Facebook, LinkedIn</li>
                        <li>Marketing Analytics</li>
                        <li>Photography</li>
                    </ul>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className="tabpanel">
                <div className="item">
                    <span className="job-title">Commerce</span><span className="job-company"> // Queen's University, Kingston, Canada</span>
                    <div className="job-time">Starting September 2021</div>
                    <div className="job-description">
                        I'm currently an exchange student at Smith School of Business, where I focus on Management and Data Science topics
                    </div>
                </div>
                <div className="item">
                    <span className="job-title">Business Administration</span><span className="job-company"> // University of Mannheim, Germany</span>
                    <div className="job-time">Since September 2019</div>
                    <div className="job-description">
                        I am a Business Administration major with a special interest in Finance, Marketing, Statistics and Information Systems
                    </div>
                </div>
                <div className="item">
                    <span className="job-title">Computer Science</span><span className="job-company"> // RWTH Aachen, Germany</span>
                    <div className="job-time">October 2018 - August 2019</div>
                    <div className="job-description">
                        I studied two semesters of Computer Science, with coursework in Mathematics, Programming and Algorithmics before switching to Business Administration
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div className="tabpanel">
                <div className="item">
                    <span className="job-title">Analyzing Data with SQL</span><span className="job-company"> // Codeacademy</span>
                    <div className="job-time">February 2021</div>
                </div>
                <div className="item">
                    <span className="job-title">6.00.1x: Introduction to Computer Science and Programming Using Python</span><span className="job-company"> // edX</span>
                    <div className="job-time">September 2017</div>
                </div>
            </div>
        </TabPanel>
      </div>
    );
  }

  export default ExperiencePanel;