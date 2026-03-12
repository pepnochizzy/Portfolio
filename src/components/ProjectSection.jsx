import Projects from "./Projects";

export default function ProjectSection() {
  return (
    <section>
      <Projects
        projectName={"Re-Paged"}
        projectDesc={
          <>
            This project is a book review platform that allows users to discover
            books, write reviews, and discuss them with other readers. It was
            developed across three iterations, each focusing on different areas
            of my development skills.
            <br />
            <br />
            The first iteration focused on learning React, React Router, and
            implementing full CRUD functionality. The second iteration rebuilt
            the project using Next.js while introducing relational database
            design, including one-to-many relationships, to strengthen my SQL
            knowledge. The third iteration added secure authentication using
            Clerk, enabling personalised user accounts and protected routes.
            <br />
            <br />
            Across all versions, the application uses a neumorphic design style,
            which I enjoyed implementing to create a consistent and visually
            distinctive UI.
            <br />
            <br />
            This project presented several technical challenges. One of the
            first was implementing SQL UPDATE queries for editing reviews. I
            used the COALESCE function so that when a form field was left
            unchanged, the query would fall back to the original database value
            rather than overwriting it with null or empty data.
            <br />
            <br />
            Another challenge arose while learning Next.js. Some client-side
            components required database queries, which cannot run directly on
            the client. I solved this by creating wrapper components that
            handled the server-side logic and passed the required data down as
            props.
          </>
        }
      />
      <Projects />
      <Projects />
    </section>
  );
}
