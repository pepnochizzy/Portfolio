import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectPage({ params }) {
  const { projectID } = params;
  const data = projects[projectID];
  console.log(data);
  return (
    <main key={data.id}>
      <h1>{data.projectName}</h1>
      <h2>{data.stack}</h2>
      <div className="flex flex-row">
        <Image
          src={data.src}
          alt={data.alt}
          width={data.width}
          height={data.height}
        />
        <p>{data.projectDesc}</p>
      </div>
    </main>
  );
}
