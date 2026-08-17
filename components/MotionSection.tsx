"use client";

import WorkGallery from "./WorkGallery";
import { motionProjects } from "./projectsData";

export default function MotionSection() {
  return (
    <WorkGallery
      id="motion"
      index="02"
      title="Motion Graphic y Video"
      projects={motionProjects}
    />
  );
}