export default function ProjectCard({ title, description, link }) {
  return (
    <div style={{ 
      border: "1px solid gray", 
      padding: "12px", 
      marginBottom: "12px",
      borderRadius: "6px"
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank">
        View Project
      </a>
    </div>
  );
}