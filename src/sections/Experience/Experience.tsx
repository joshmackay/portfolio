'use client'
import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Experience.module.css'
import * as motion from "motion/react-client"
import SectionHeading from '@/components/ui/SectionHeading'
import { hover } from 'motion'

type PartialDate = {
  month?: number;
  year: number;
}

type JobDetail = {
  id: number;
  company: string;
  useCompany: boolean;
  role: string;
  dateStart: PartialDate;
  dateEnd?: PartialDate;
  details: string[];
}

const jobDetails: JobDetail[] = [
  {
    id: 1,
    company: "JoshWMacKay",
    useCompany: true,
    role: "Developer and Creator",
    dateStart: {month: 8, year: 2025},
    details: [
      `I love building my own projects and freelancing, so this is what I have started doing.
      If you have an idea for a project, then let's chat!`,
      `In a past life I was an airbrush artist, on and off, for around 10 years.  One thing
      I got out of this was pure joy from painting and using cameras for photography and filming. 
      These days I don't do much in the way of art, but I identified that I need a creative outlet. 
      I have started working on content creation and I am in the process of figuring out what I want to
      do with it.`
    ]
  },
  {
    id: 2,
    company: "The Geelong College",
    useCompany: true,
    role: "Web Application Developer",
    dateStart: { month: 8, year: 2023 },
    dateEnd: { month: 4, year: 2025 },
    details: [
      `Developed a Blazor CMS and page builder enabling teaching staff to manage and share the school’s new learning
      framework more efficiently.`,
      `Developed a Blazor-based student boarding management system, replacing error-prone
      spreadsheets and streamlining room/bed allocations.`,
      `Rebuilt the school’s news bulletin system using Blazor Server for the admin CMS and WASM for the public news bulletin, delivering mobile-friendly access for staff, students, and parents.`
    ]
  },
  {
    id: 3,
    role: "Director",
    company: "Company",
    useCompany: false,
    dateStart: { year: 2019 },
    dateEnd: { year: 2022 },
    details: [
      `Started two companies in the electrical field, managing sales, customer relations, and project delivery.`,
      `Built long-term client relationships that drove repeat contracts and consistent revenue.`,
      `Led small teams, handling hiring, scheduling, and management to ensure on-time project completion.`
    ]
  },
  {
    id: 4,
    role: "Intelligent Transport Engineer",
    company: "Transurban",
    useCompany: false,
    dateStart: { year: 2014 },
    dateEnd: { year: 2018 },
    details: [
      `Progressed from graduate engineer to ITS Engineer, contributing to major infrastructure projects.`,
      `Performed testing, supervision, and inspections to ensure compliance and quality standards.`,
      `Collaborated with stakeholders, vendors, and contractors to deliver system upgrades and installations.`
    ]
  },
]

function formatPartialDate(date?: PartialDate) : string {
  if(!date) return "";
  const {year, month} = date;
  const dateObj = month !== undefined ? new Date(year, month) : undefined;
  const monthText = dateObj?.toUTCString().split(' ')[2];
  return monthText !== undefined ? `${monthText} ${year}` : `${year}`;
}

function getDateRange(dateStart: PartialDate, dateEnd?: PartialDate): string {
  const start = formatPartialDate(dateStart);
  const end = dateEnd ? formatPartialDate(dateEnd) : "Present";
  
  return `${start} - ${end}`
}

export default function Experience()
{
  const [selectedJobIndex, setSelectedJobIndex] = React.useState(0);
  const [hoveredNavId, setHoveredNavId] = React.useState<number | null>(null);
  
  return (
    <Section id="experience" className={styles.section} fullHeight={false} >
      <SectionHeading useCount={true}>Where I&apos;ve Worked</SectionHeading>
      <div className={styles.content}>
        <motion.div layoutRoot className={styles.buttonList} onMouseLeave={() => setHoveredNavId(null)}> 

          
          {jobDetails && 
            jobDetails.map((job, i) => (
                <button 
                  key={i} 
                  onMouseEnter={() => setHoveredNavId(job.id)} 
                  onClick={() => setSelectedJobIndex(i)}
                  className={selectedJobIndex === i ? styles.selected : ""}
                  style={{
                    color: hoveredNavId === job.id ? "var(--green)" : "",
                  }}>
                    {hoveredNavId === job.id && (
                      <motion.div style={{zIndex: 1}} layoutId='hovered-background' className={styles.buttonBackground}></motion.div>
                    )}
                    <span className={styles.buttonText}>{job.company}</span>
                    { selectedJobIndex === i && (
                    <motion.div style={{ zIndex: 10 }} layoutId='selected-border' className=  {styles.selectedBorder}></motion.div>)
                    }
                </button>
          ))}
        </motion.div>
        
        <div className={styles.jobPanels}>
          {jobDetails && jobDetails.map((job, i) => (
            <div className={styles.jobPanel} key={i} hidden={selectedJobIndex !== i}>
              <h3>{job.role} <span className={styles.greenTitle}>@ {job.company}</span> </h3>
              <p className={styles.dateRange}>{getDateRange(job.dateStart, job.dateEnd)}</p>
              <ul>
                {job.details.map((detail, i) => {
                  const key = `detailItem-${i}`;
                  return <li key={key}>{detail}</li>
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}