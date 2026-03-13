import repagedImg from "@/../public/assets/Re-PagedPort.png";

export const projects = [
  {
    slug: "Re-Paged",
    projectName: "Re-Paged",
    src: repagedImg,
    alt: "Screen shot of book review page using neumorphic design",
    width: 40,
    height: 20,
    overview: `A book review platform where users can discover books, write reviews, and discuss them with others.
Built across three iterations to explore React, Next.js, relational SQL databases, and authentication with Clerk, while maintaining a consistent neumorphic UI design.`,
    projectDesc: `This project is a book review platform that allows users to discover
            books, write reviews, and discuss them with other readers. It was
            developed across three iterations, each focusing on different areas
            of my development skills.
            
            The first iteration focused on learning React, React Router, and
            implementing full CRUD functionality. The second iteration rebuilt
            the project using Next.js while introducing relational database
            design, including one-to-many relationships, to strengthen my SQL
            knowledge. The third iteration added secure authentication using
            Clerk, enabling personalised user accounts and protected routes.
            
            Across all versions, the application uses a neumorphic design style,
            which I enjoyed implementing to create a consistent and visually
            distinctive UI.
          
            This project presented several technical challenges. One of the
            first was implementing SQL UPDATE queries for editing reviews. I
            used the COALESCE function so that when a form field was left
            unchanged, the query would fall back to the original database value
            rather than overwriting it with null or empty data.
            
            Another challenge arose while learning Next.js. Some client-side
            components required database queries, which cannot run directly on
            the client. I solved this by creating wrapper components that
            handled the server-side logic and passed the required data down as
            props.`,
    href: `https://repagedbookreviews.vercel.app/`,
    stack: `Next.js, React, CSS, Tailwind CSS, PostgreSQL`,
    id: 1,
  },
  //   {
  //     slug: "cookie-clicker",
  //     src: "",
  //     alt: "Screenshot of cookie clicker style game",
  //     size: 40,
  //     projectName: "",
  //     overview: "",
  //     projectDesc: ``,
  //     href: "",
  //     stack: ``,
  //     id: 2,
  //   },
  //   {
  //     slug: "",
  //     src: "",
  //     alt: "",
  //     size: 40,
  //     projectName: "",
  //     overview: "",
  //     projectDesc: "",
  //     href: "",
  //     stack: ``,
  //     id: 3,
  //   },
];
