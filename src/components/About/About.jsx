import React from "react";
import './About.css';
import satyamprofile from "../../assets/Images/about.jpg";

const About = () => {
  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <p className="line"></p>
              <h1 className="text-primary">About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                beatae voluptatem similique nulla at vitae ex quia itaque qui
                illum alias ad iure, nam ipsam enim cumque aspernatur ratione,
                temporibus culpa obcaecati? Quia quam pariatur iure deleniti
                labore assumenda minima ullam qui. Magnam commodi sequi
                obcaecati illo aperiam ea, incidunt veritatis natus! Harum totam
                accusantium aspernatur commodi provident impedit numquam,
              </p>
              <p>
                laborum voluptatum beatae nesciunt expedita tenetur assumenda
                architecto fugiat esse, nostrum omnis? Eius, exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit distinctio voluptate ullam vitae corporis iusto
                laborum perspiciatis, cupiditate vel neque deserunt accusantium,
                voluptas aut exercitationem molestias reiciendis maxime! Optio
                recusandae repudiandae vitae minima saepe magnam aspernatur
                temporibus mollitia nulla nam, ipsam, laudantium minus enim,
                voluptatum dicta asperiores ipsum debitis?
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="satyam-image">
                <img src={satyamprofile} alt="satyam-agrahari-image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;


// import React from "react";
// import "./About.css";
// import satyamprofile from "../../assets/Images/about.jpg";

// const About = () => {
//   return (
//     <>
//       <section className="about-section py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-12">
//               <p className="line "></p>
//               <h1 className="text-primary">About US</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//                 beatae voluptatem similique nulla at vitae ex quia itaque qui
//                 illum alias ad iure, nam ipsam enim cumque aspernatur ratione,
//                 temporibus culpa obcaecati? Quia quam pariatur iure deleniti
//                 labore assumenda minima ullam qui. Magnam commodi sequi
//                 obcaecati illo aperiam ea, incidunt veritatis natus! Harum totam
//                 accusantium aspernatur commodi provident impedit numquam,
//               </p>
//               <p>
//                 laborum voluptatum beatae nesciunt expedita tenetur assumenda
//                 architecto fugiat esse, nostrum omnis? Eius, exercitationem.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. At
//                 reprehenderit distinctio voluptate ullam vitae corporis iusto
//                 laborum perspiciatis, cupiditate vel neque deserunt accusantium,
//                 voluptas aut exercitationem molestias reiciendis maxime! Optio
//                 recusandae repudiandae vitae minima saepe magnam aspernatur
//                 temporibus mollitia nulla nam, ipsam, laudantium minus enim,
//                 voluptatum dicta asperiores ipsum debitis?
//               </p>
//             </div>
//             <div className="col-lg-6 col-md-12">
//               <div className="satyam-image">
//                 <img src={satyamprofile} alt="satyam-agrahari-image" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;
