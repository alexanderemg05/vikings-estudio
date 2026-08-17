"use client";

import WorkGallery from "./WorkGallery";
import { designProjects } from "./projectsData";

export default function SelectedWork() {
  return (
    <WorkGallery
      id="work"
      index="01"
      title="DISEÑO"
      projects={designProjects}
    />
  );
}
