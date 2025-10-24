import React from "react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const split = SplitText.create("#contact h2", { type: "words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    tl.from(split.words, {
        opacity:0,
        stagger:0.02,
        yPercent:100
    });
    tl.from('#contact h3, #contact p', {
        opacity:0,
        stagger:0.02,
        yPercent:100
    });
    tl.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 })
     tl.to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 },'<')
  });

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf" />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div className="p-1">
          <h3>Visit our Bar</h3>
          <p>main blvd newyork california london paris</p>
        </div>
        <div className="p-1">
          <h3>Contact Us</h3>
          <p>+1 121212 1212</p>
          <p>cocktails...11@gmaaail.com</p>
        </div>
        <div>
          <h3>Open Everyday</h3>
          {openingHours.map((time) => (
            <p className="p-1" key={time.day}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Our Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreffer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
