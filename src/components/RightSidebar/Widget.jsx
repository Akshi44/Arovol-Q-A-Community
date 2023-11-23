import React from "react";
import "./RightSidebar.css";
import pen from "../../assests/pen-solid.svg";
import comment from "../../assests/comment-alt-solid.svg";
import blacklogo from "../../assests/alogo.png";

const Widget = () => {
  return (
    <div className="wedge">
      <h4>The Arovol Feature</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
		  Your tech toolbox: The middle ground between tech chaos and rigidity
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>After crypto’s reality check, an investor remains cautiously optimistic (Ep....</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>We've added a "Necessary cookies only" option to the cookie consent popup
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18" />
          <p>Temporary policy: ChatGPT is banned for a while.</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18" />
          <p>The [rowname] and [columnname] tags are being burninated</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18" />
          <p>Plagiarism flag and moderator tooling has launched to Arovol!</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width="18" />
          <p>Improving how we report updates and receive feedback on the Content Discovery...</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <b>7</b>
          <p>Snippet control appears twice after completing a review.</p>
        </div>
        <div className="right-sidebar-div-2">
          <b>18</b>
          <p>Localization error - part of UI is in a wrong language</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
