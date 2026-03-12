import Image from "next/image";
import aboutMePic from "@/../public/assets/aboutMePhoto.jpg";

export default function AboutMe() {
  return (
    <div className="flex flex-row place-content-around mt-5">
      <div>
        <Image
          src={aboutMePic}
          alt="Photo of me with a shaggy mullet and glasses leaning against my hand"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div>
        <h1>Hey! I&apos;m Lara, thanks for stopping by</h1>
        <p className="w-80 mt-5">
          I am an energetic junior developer driven by curiosity and a love of
          learning. I pride myself on being an excellent communicator, working
          within teams to understand complex problems, and finding the solution
          to present back or complete the task at hand.
        </p>
      </div>
    </div>
  );
}
