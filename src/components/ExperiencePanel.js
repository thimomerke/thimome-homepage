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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
                    <span className="job-title">Student Researcher</span><span className="job-company"> &#47;&#47; University of Mannheim / MISES</span>
                    <div className="job-time">Since October 2023</div>
                    <ul className="job-description">
                        As a student researcher at the Mannheim Institute for Sustainable Energy Studies, I work on research projects in the decarbonization and renewable energy sector.
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Intern Private Equity / Inhouse Consulting</span><span className="job-company"> &#47;&#47; Aurelius</span>
                    <div className="job-time">July 2025 - October 2025</div>
                    <ul className="job-description">
                        At Aurelius, I worked with various portfolio companies (aerospace, FMCG) on projects regarding regulatory compliance (e.g. CSRD) and procurement.
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Intern ESG Expert Group</span><span className="job-company"> &#47;&#47; KPMG</span>
                    <div className="job-time">January 2025 - March 2025</div>
                    <ul className="job-description">
                        As an intern with the ESG Expert Group, I worked on projects regarding the implementation of CSRD and other EU regulations at various large, global companies.
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Student Consultant and Project Leader</span><span className="job-company"> &#47;&#47; 180DC Mannheim</span>
                    <div className="job-time">October 2023 - January 2024</div>
                    <ul className="job-description">
                        180DC is the world's largest university-based consultancy for nonprofits and social enterprises. As a project leader, I managed a consulting project in the carbon removal industry.
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Working Student Value Experience Innovation</span><span className="job-company"> &#47;&#47; SAP</span>
                    <div className="job-time">October 2022 - June 2023</div>
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
                    <span className="job-title">Intern Business Development and Marketing</span><span className="job-company"> &#47;&#47; BASF Chemovator</span>
                    <div className="job-time">March 2021 - June 2021</div>
                    <ul className="job-description">
                        <li>Online and offline marketing campaigns</li>
                        <li>Social media management, e.g. Instagram, Facebook, LinkedIn</li>
                        <li>Marketing analytics</li>
                        <li>Photography</li>
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Intern Audit</span><span className="job-company"> &#47;&#47; KPMG</span>
                    <div className="job-time">January 2021 - February 2021</div>
                    <ul className="job-description">
                        <li>Financial statements and annual report auditing according to HGB and IFRS</li>
                    </ul>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className="tabpanel">
              <div className="item">
                    <span className="job-title">M.Sc. Management</span><span className="job-company"> &#47;&#47; University of Mannheim, Germany</span>
                    <div className="job-time">Since September 2023</div>
                    <ul className="job-description">
                        I continue my studies as a graduate student at the University of Mannheim. My interests are in sustainable management, finance and accounting. I was honored to be member of the Dean's List <a href="https://www.mannheim-business-school.com/en/validation/?credential=101d2803-097c-4df3-b402-db798665b1b2" target="_blank" rel="noreferrer">2024</a> and <a href="https://www.mannheim-business-school.com/en/validation/?credential=3945c0bb-584b-402f-8546-f5a70798e87a" target="_blank" rel="noreferrer">2025</a>.
                    </ul>
              </div>
              <div className="item">
                    <span className="job-title">Management</span><span className="job-company"> &#47;&#47; Copenhagen Business School, Denmark</span>
                    <div className="job-time">September 2024 - December 2024</div>
                    <ul className="job-description">
                        In addition to my studies at the University of Mannheim, I'm spending a semester at CBS with a minor in accounting, regulation and sustainable finance.
                    </ul>
              </div>
              <div className="item">
                    <span className="job-title">B.Sc. Business Administration</span><span className="job-company"> &#47;&#47; University of Mannheim, Germany</span>
                    <div className="job-time">September 2019 - July 2023</div>
                    <ul className="job-description">
                        I graduated from the University of Mannheim with a Degree in Business Administration, with a focus on in management, finance and sustainability. My bachelor's thesis, 
                        <span style={{fontStyle: "italic"}}>
                          "Examining the Viability of Net-Negative Carbon Removal Techniques: An Economic and Environmental Evaluation"
                        </span>, can be found <a href="https://github.com/thimomerke/bachelor-thesis/blob/main/BachelorThesis061023.pdf" target="_blank" rel="noreferrer">here.</a>
                    </ul>
                </div>
                <div className="item">
                    <span className="job-title">Commerce</span><span className="job-company"> &#47;&#47; Queen's University, Kingston, Canada</span>
                    <div className="job-time">September 2021 - December 2021</div>
                    <ul className="job-description">
                        I studied at Smith School of Business for one semester, where I focused on Management and Entrepreneurship topics
                    </ul>
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