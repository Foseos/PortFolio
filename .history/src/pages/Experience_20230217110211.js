import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Collège Victor-Hugo Saint-Yorre (03)
          </h3>
          <p> Brevet des collèges</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lycée Albert Londres Cusset (03)
          </h3>
          <p> Bac S spécialité SI</p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iron Man Vichy (03)
          </h3>
          <p> Chargé de faire la circulation</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Maintenant"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          <a href = "https://www.lycees-albert-londres.fr"></>Lycée Albert Londres Cusset (03)
          </h3>
          <p>BTS SIO Spécialité SLAM (Solutions Logicielles et Applications Métier)</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iron Man Vichy (03)
          </h3>
          <p> Chargé de faire la circulation</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cottel (03)
          </h3>
          <p> Ouvrier Polyvalent</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iron Man Vichy (03)
          </h3>
          <p> Chargé de faire la circulation</p>
        </VerticalTimelineElement>



      </VerticalTimeline>





    </div>
  );
}

export default Experience;
