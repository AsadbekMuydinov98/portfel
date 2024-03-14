import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, github, website,  imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="banner" className="projectCard" style={{height: '300px', width: '105%' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={`${github}`} className="projLink">Link to github</a> <br />
          <a href={`${website}`} className="projLink">Link to website</a>
        </div>
      </div>
    </Col>
  )
}
