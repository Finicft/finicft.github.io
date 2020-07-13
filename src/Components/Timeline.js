import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";
import {
  FaSchool,
  FaHandsHelping,
  FaStar,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNode,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  DiDjango,
  DiAndroid,
  DiJavascript1,
  DiJqueryLogo,
} from "react-icons/di";
import YouTube from "react-youtube";

class TimeLine extends React.Component {
  render() {
    const iconSize = 40;
    const opts = {
      height: "300",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="timeLine pb-5">
        <h1 className="text-center mt-5 mb-5">Experiences </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F807B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F807B" }}
            date="June 12, 2020"
            iconStyle={{ background: "#4F807B", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Convocation</h3>
            <h4 className="vertical-timeline-element-subtitle mb-2">
              University of Alberta
            </h4>

            <p className="mt-0 mb-2">
              June 12, 2020, with the impact of covid-19, I convocated from the
              University of Alberta with a 40-minutes long YouTube video.
            </p>
            <YouTube videoId="IZx2Zk3owPQ" opts={opts} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--extracurricular"
            contentStyle={{ background: "#2C5F80", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #2C5F80" }}
            date="Jan 2020 - present"
            iconStyle={{ background: "#2C5F80", color: "#fff" }}
            icon={<FaStar />}
          >
            <h3 className="vertical-timeline-element-title">Cookitty</h3>
            <h4 className="vertical-timeline-element-subtitle">Side Project</h4>
            <span className="Icons">
              <FaReact className="mr-2" size={iconSize} />
              <FaNode size={60} />
            </span>
            <p className="mt-0">
              Creating a recipe app that allows users to share their love for
              cooking.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#8D6B48", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8D6B48" }}
            date="May 2019 - Aug 2020"
            iconStyle={{ background: "#8D6B48", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              SciLit MOOC Project
            </h3>
            <h4 className="vertical-timeline-element-subtitle mb-2">
              SciLIFT University of Alberta
            </h4>
            <span className="Icons">
              <DiDjango size={iconSize} />
              <FaHtml5 size={iconSize} />
              <FaCss3Alt size={iconSize} />
              <DiJavascript1 size={iconSize} />
              <DiJqueryLogo size={iconSize} />
            </span>
            <p className="mt-2 mb-2">
              Internship with the University of Alberta’s Scientific Literacy
              MOOC Program. Responsible for designing and developing a web
              application allowing instructors to create sorting web pages for
              students to reinforce their knowledge in Scientific Literacy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F807B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F807B" }}
            date="Jan 2019 - Apr 2019"
            iconStyle={{ background: "#4F807B", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Walk and Talk</h3>
            <h4 className="vertical-timeline-element-subtitle mb-2">
              CMPUT 401 - Software Process and Product
            </h4>
            <span className="Icons">
              <FaReact className="mr-2" size={iconSize} />
              <FaNode size={60} />
            </span>
            <p className="mt-0 mb-2">
              Mobile application that allows women going through menopause to
              organize walking session, aiding the research of menopausal women
              and physical activity.
            </p>
            <YouTube videoId="sPPIqu8ntf0" opts={opts} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F807B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F807B" }}
            date="Jan 2019 - Apr 2019"
            iconStyle={{ background: "#4F807B", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Newpee</h3>
            <h4 className="vertical-timeline-element-subtitle mb-2">
              CMPUT 404 - Web-Based Information Systems
            </h4>
            <span className="Icons">
              <DiDjango size={iconSize} />
              <FaHtml5 size={iconSize} />
              <FaCss3Alt size={iconSize} />
              <DiJavascript1 size={iconSize} />
              <DiJqueryLogo size={iconSize} />
            </span>
            <p className="mt-0 mb-2">
              A social media web application for users to publish posts,
              interact and network.
            </p>
            <YouTube videoId="XUWbymJBMb0" opts={opts} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F807B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F807B" }}
            date="Jan 2018 - Apr 2018"
            iconStyle={{ background: "#4F807B", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Funky Task</h3>
            <h4 className="vertical-timeline-element-subtitle mb-2">
              CMPUT 301 - Introduction to Software Engineering
            </h4>
            <span className="Icons">
              <DiAndroid size={iconSize} />
            </span>
            <p className="mt-2 mb-2">
              Designed and developed an android application in a team of five.
              The application allows users to post and accept tasks.
            </p>
            <YouTube videoId="FOpIKecSgJg" opts={opts} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#BA9B98", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #BA9B98" }}
            date="Aug 2017 - Apr 2019"
            iconStyle={{ background: "#BA9B98", color: "#fff" }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">Senior Peer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              International Student Services, UofA
            </h4>
            <p>
              Organized events for international students to learn about
              different cultures and adjust to university life.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#BA9B98", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #BA9B98" }}
            date="Apr 2017 - Sept 2017"
            iconStyle={{ background: "#BA9B98", color: "#fff" }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">Faculty Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Week of Welcome, UofA
            </h4>
            <p>
              Performed university-wide tour; developing strong leadership and
              communication skills.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--volunteer"
            contentStyle={{ background: "#BA9B98", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #BA9B98" }}
            date="Jan 2017 - Apr 2017"
            iconStyle={{ background: "#BA9B98", color: "#fff" }}
            icon={<FaHandsHelping />}
          >
            <h3 className="vertical-timeline-element-title">
              Girl's Coding Club Mentor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              DiscoverE, UofA
            </h4>
            <p>
              Conducted python workshops for girls in grade 3 to 5 along with
              four other female undergraduate students; developing strong
              social, organizational and management skills.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default TimeLine;
