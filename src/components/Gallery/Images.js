import React from "react";
import { Breadcrumb } from "../Header/Breadcrumb/breadrcrumb";
import Gallery from "react-grid-gallery";

import "./styles.css";

const IMAGES = [
  // {
  //   src: "/images/cardimg-1.jpg",
  //   thumbnail:
  //     "/images/cardimg-1.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 174,
  //   caption: "ITI Images"
  // },
  // {
  //   src: "/images/cardimg-3.jpg",
  //   thumbnail:
  //     "/images/cardimg-3.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   // tags: [
  //   //   { value: "Ocean", title: "Ocean" },
  //   //   { value: "People", title: "People" }
  //   // ],
  //   caption: "ITI Images"
  // },

  // {
  //   src: "/images/cardimg-4.jpg",
  //   thumbnail:
  //     "/images/cardimg-4.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212
  // },
  // {
  //   src: "/images/cardimg-5.jpg",
  //   thumbnail:
  //     "/images/cardimg-5.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 174,
  //   caption: "ITI Images"
  // },
  // {
  //   src: "/images/cardimg-6.jpg",
  //   thumbnail:
  //     "/images/cardimg-6.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   // tags: [
  //   //   { value: "Ocean", title: "Ocean" },
  //   //   { value: "People", title: "People" }
  //   // ],
  //   caption: "ITI Images"
  // },

  // {
  //   src: "/images/cardimg-5.jpg",
  //   thumbnail: "/images/cardimg-5.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212
  // },
  // {
  //   src: "/images/cardimg-7.jpg",
  //   thumbnail:
  //     "/images/cardimg-7.jpg",
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 174,
  //   // caption: "After Rain (Jeshu John - designerspics.com)"
  // },
  {
    src: "/images/cardimg-4.jpg",
    thumbnail: "/images/cardimg-4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "ECE", title: "ECE" },
      // { value: "People", title: "People" }
    ],
    caption: "Apprenticeship Training",
  },

  {
    src: "/images/cardimg-1.jpg",
    thumbnail: "/images/cardimg-1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "ECE", title: "ECE" },
      // { value: "People", title: "People" }
    ],
    caption: "Apprenticeship Training",
  },
  {
    src: "/images/cardimg-3.jpg",
    thumbnail: "/images/cardimg-3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "ECE", title: "ECE" },
      // { value: "People", title: "People" }
    ],
    caption: "Apprenticeship Training",
  },
  {
    src: "/images/cardimg-4.jpg",
    thumbnail: "/images/cardimg-4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "CSE", title: "CSE" },
      // { value: "People", title: "People" }
    ],
    caption: "Apprenticeship Training",
  },

  {
    src: "/images/cardimg-7.jpg",
    thumbnail: "/images/cardimg-7.jpg",
    thumbnailWidth: 720,
    thumbnailHeight: 212,
    caption: "Skill Development",
  },

  {
    src: "/images/cardimg-5.jpg",
    thumbnail: "/images/cardimg-5.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Craftsmen Training",
  },
  {
    src: "/images/cardimg-7.jpg",
    thumbnail: "/images/cardimg-7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [{ value: "Mechanical", title: "Mechanical" }],
    caption: "Craftsmen Training",
  },
  {
    src: "/images/cardimg-4.jpg",
    thumbnail: "/images/cardimg-4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Mechanical", title: "Mechanical" },
      // { value: "People", title: "People" }
    ],
    caption: "Craftsmen Training",
  },

  {
    src: "/images/cardimg-1.jpg",
    thumbnail: "/images/cardimg-1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "ECE", title: "ECE" }],
  },
  {
    src: "/images/cardimg-3.jpg",
    thumbnail: "/images/cardimg-3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Skill Development",
    tags: [{ value: "CSE", title: "CSE" }],
  },
  {
    src: "/images/cardimg-4.jpg",
    thumbnail: "/images/cardimg-4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "CSE", title: "CSE" }],
    // caption: "Boats (Jeshu John - designerspics.com)"
  },
];

function Images() {
  return (
    <>
    <Breadcrumb title="Images" />
    <div>
      <h1 className="text-center m-5">ITI Gallery</h1>
      <div className="container mb-5">
        <Gallery
          images={IMAGES}
          enableLightbox={true}
          // maxRows={3}
          backdropClosesModal
          // currentImage={3}
          // isOpen={ true}
        />
      </div>
      </div>
    </>
  );
}

export default Images;
