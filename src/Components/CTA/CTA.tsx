import 'assets/stylesheets/css/CTA.css';
import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


const CTA = (): JSX.Element => {
  return (
    <section id="CTA">
      <p>Got a project?</p>
      <h2>Let's get in touch!</h2>
      <div className="icon-container" aria-labelledby="network links">
        <div role="button" className="icon ig"><BsInstagram /></div> 
        <div role="button" className="icon mail"><HiOutlineMail /></div>
      </div>
    </section>
  );
};

// TODO: Inject links to icon 
export default CTA;
