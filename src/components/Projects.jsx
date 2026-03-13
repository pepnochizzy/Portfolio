import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      {projects.map((project) => {
        return (
          <Link className="flex" href="re-paged" key={project.id}>
            <Image
              src={project.src}
              alt={project.alt}
              width={project.size}
              height={project.height}
            />
            <div className="flex flex-row">
              <h2>{project.projectName}</h2>
              <h3>{project.stack}</h3>
              <p>{project.overview}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
