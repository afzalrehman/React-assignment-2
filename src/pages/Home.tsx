import ProjectCard from "../components/project/ProjectCard";
import "../styles/Home.css";

const Home = () => {
  const projects = [
    {
      title: "Todo App",
      image: "todo.png",
      github: "https://github.com/afzalrehman/todo-app",
      live: "https://todo-app-flax-six-79.vercel.app/",
    },
    {
      title: "Quiz App",
      image: "quiz.png",
      github: "https://github.com/afzalrehman/Quiz",
      live: "https://quiz-eta-beige-90.vercel.app/",
    },
    {
      title: "Multi-Step Form",
      image: "stepper.png",
      github: "https://github.com/afzalrehman/Stepper",
      live: "https://stepper-omega.vercel.app/",
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
