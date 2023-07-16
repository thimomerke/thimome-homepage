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
                    <span className="job-title">Working Student Value Experience Innovation</span><span className="job-company"> &#47;&#47; SAP</span>
                    <div className="job-time">October 2022 - Juna 2023</div>
                    <ul className="job-description">
                        I worked on developing innovative customer experiences, including
                        <li>the SAP Experience Centers Walldorf and NYC</li>
                        <li>Value Storytelling</li>
                        <li>Metaverse and Digital Innovation projects</li>
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Head of Marketing</span><span className="job-company"> &#47;&#47; Q-Summit</span>
                    <div className="job-time">April 2020 - June 2021</div>
                    <ul className="job-description">
                        <li>Photography and video production for a Conference with over 1000 attendees</li>
                        <li>Social media management, mainly LinkedIn</li>
                        <li>Web and marketing analytics</li>
                        <li>Programming and maintainance of the Website</li>
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Intern Business Development and Marketing</span><span className="job-company"> &#47;&#47; BASF</span>
                    <div className="job-time">March 2021 - June 2021</div>
                    <ul className="job-description">
                        <li>Online and offline marketing campaigns</li>
                        <li>Social media management, e.g. Instagram, Facebook, LinkedIn</li>
                        <li>Marketing analytics</li>
                        <li>Photography</li>
                    </ul>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className="tabpanel">
              <div className="item">
                    <span className="job-title">Business Administration</span><span className="job-company"> &#47;&#47; University of Mannheim, Germany</span>
                    <div className="job-time">Since September 2019</div>
                    <div className="job-description">
                        I am a Business Administration major with a special interest in Information Systems, Finance and Marketing
                    </div>
                </div>
                <div className="item">
                    <span className="job-title">Commerce</span><span className="job-company"> &#47;&#47; Queen's University, Kingston, Canada</span>
                    <div className="job-time">September 2021 - December 2021</div>
                    <div className="job-description">
                        I studied at Smith School of Business for one semester, where I focused on Management and Computing topics
                    </div>
                </div>
                <div className="item">
                    <span className="job-title">Computer Science</span><span className="job-company"> &#47;&#47; RWTH Aachen, Germany</span>
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
                    <span className="job-title">Analyzing Data with SQL</span><span className="job-company"> &#47;&#47; Codeacademy</span>
                    <div className="job-time">February 2021</div>
                </div>
                <div className="item">
                    <span className="job-title">6.00.1x: Introduction to Computer Science and Programming Using Python</span><span className="job-company"> &#47;&#47; edX</span>
                    <div className="job-time">September 2017</div>
                </div>
            </div>
        </TabPanel>
      </div>
    );
  }

  export default ExperiencePanel;