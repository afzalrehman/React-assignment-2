import ProjectCard from "../components/project/ProjectCard";
import "../styles/Home.css";

const Home = () => {
  const projects = [
    {
      title: "Todo App",
      image: "todo.png",
      github: "https://github.com/example/todo",
      live: "https://example.com/todo",
    },
    {
      title: "Quiz App",
      image: "",
      github: "https://github.com/example/quiz",
      live: "https://example.com/quiz",
    },
    {
      title: "Multi-Step Form",
      image: "form.png",
      github: "https://github.com/example/form",
      live: "https://example.com/form",
    },
  ];

  return (
    <>
      
      <section id="projects" className="projects">
        <h2>My Toy Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
