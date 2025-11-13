import PreviewPage from "./preview/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Axel Laurent Obscura Sarzotti | Full Stack Developer México",
  description:
    "Full Stack Web Developer from México specializing in modern web applications. Expert in React, Next.js, TypeScript, and Node.js. Building scalable, performant, and user-centric digital solutions. Explore my portfolio of innovative projects and cutting-edge web development work.",
};
export default function Home() {
  return (
    <>
      <PreviewPage />
    </>
  );
}
