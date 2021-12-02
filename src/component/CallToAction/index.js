import Fade from "react-reveal/Fade";
export default function CallToAction() {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <Fade bottom delay={500}>
          <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
          <a className="btn btn-light btn-xl" href="">
            Download Now!
          </a>
        </Fade>
      </div>
    </section>
  );
}
