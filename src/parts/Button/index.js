import Fade from "react-reveal/Fade";
export default function Button({ label }) {
  return (
    <Fade bottom delay={900}>
      <a className="btn btn-primary btn-xl" href="#about">
        {label}
      </a>
    </Fade>
  );
}
