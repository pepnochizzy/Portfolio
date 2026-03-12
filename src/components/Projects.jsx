import Image from "next/image";

export default function Projects({
  src,
  alt,
  size,
  projectName,
  projectDesc,
  href,
  stack,
}) {
  return (
    <a className="flex flex-row" href={href}>
      <Image src={src} alt={alt} width={size} />
      <div className="flex flex-row">
        <h2>{projectName}</h2>
        <h3>{stack}</h3>
        <p>{projectDesc}</p>
      </div>
    </a>
  );
}
