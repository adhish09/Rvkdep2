import "./PEK.css";
import img1 from "./1.png";
import img2 from "./2.png";
import cloud from "./cloud.png";
import { CgMailForward } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import YoutubeEmbed from '../../components/LatestVideo/YoutubeEmbed';

const First = () => {
  window.scrollTo(0,0)
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="maincontmargin345"  >
      <div className="card-container_out345">
        <div className="card_out345 ">
          <div className="card-body345">

            <div>
              <h2 className="card-title_out345">
                Peace Education & Knowledge <br />
                <div className="card-description_out345">
                  <br />
                  Uncover the Peace Within{" "}
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="main-card--cointainer345">
        <div className="card-container1345">
          <div className="card1345 ">
            <div className="img1345">
              <p>
                <span>PEAK: Know yourself</span>
                <br />
                <br />
                <div className="spa345">
                  Introducing the groundbreaking course from Prem Rawat about
                  understanding and uncovering the peace that exists within all
                  of us. <br />
                  <br />
                  We all need peace in our lives. The good news is that it’s
                  possible for everyone. PEAK (Peace Education and Knowledge) is
                  a free educational program to help you discover your inner
                  potential for personal peace.
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="card-container2345">
          <div className="card2345 ">
            <div className="img2345">
            <div>
            <img src={img1} onClick={togglePlay} />

          </div>            </div>
          </div>
        </div>

        <div className="card-container3345">
          <div className="card3345 ">
            <div className="img3345">
              <img src={img2} alt="img2345" />
            </div>
          </div>
        </div>
        <div className="card-container4345">
          <div className="card4345 ">
            <div className="img4345">
              <p>
                Since 1971, nearly 1.5 million people have benefitted from Prem
                Rawat’s practical approach to personal peace. Now he’s making
                his methods as close to hand as your mobile device with his
                first app-based course: PEAK. The PEAK program turns
                conventional wisdom on its head and offers fresh perspectives on
                how to develop a true sense of yourself and tap your inner
                strengths. Nine chapters—more than six hours of video in
                all—create a rich, coherent journey to deeper self-understanding
                and knowledge. From clarity to gratitude, peace to hope: each
                video-packed chapter explores familiar ideas from a new angle,
                encouraging you to rethink, reconsider, and rediscover what
                makes you unique. Are you ready to take the first step? <br/>Go at
                your own pace, recording your reflections in the interactive
                journal. After the last chapter, you’ll have the option to
                continue your journey and learn practical techniques for
                uncovering the peace already within you.
                <p className="pekknowmore">To Know more{" "}
                <span>
                <a
                href="https://www.premrawat.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Here..

                </a></span></p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="break345"></div>
    </div>
  );
};

export default First;
