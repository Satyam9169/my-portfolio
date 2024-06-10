import React from "react";
import img1 from "../../assets/All/img1.png";
import img2 from "../../assets/All/img2.png";
import img3 from "../../assets/All/img3.png";
import img4 from "../../assets/All/img4.png";
import img5 from "../../assets/All/img5.png";
import img6 from "../../assets/All/img6.png";
import img7 from "../../assets/All/img7.png";
import img8 from "../../assets/All/img8.png";

const Skills = () => {
  const images = [
    { id: 1, path: img1 },
    { id: 2, path: img2 },
    { id: 3, path: img3 },
    { id: 4, path: img4 },
    { id: 5, path: img5 },
    { id: 6, path: img6 },
    { id: 7, path: img7 },
    { id: 8, path: img8 },
  ];

  return (
    <>
      <section className="techstack py-5">
        <div className="container">
          <div className="row justify-content-center">
            {images.map((image) => (
              <div
                key={image.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center py-4">
                <div
                  className="card shadow"
                  style={{ width: "12rem", height: "12rem" }}>
                  <img
                    src={image.path}
                    alt={`Image ${image.id}`}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
