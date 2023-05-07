import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "../../ui/Backdrop";
import "./Detail.css";

const DetailModal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onClick={props.onCancel} />
      <div className="modal">
        <div className="detail-content">
          <AiOutlineClose
            onClick={props.onCancel}
            className="detail-content__close-icon"
            size="2.5rem"
          />
          <h2>{props.title}</h2>
          <hr />
          <p>{props.description}</p>
          <hr />

          <footer className="detail-content__actions">
            {props.webLink && (
              <a
                href={props.webLink}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Website
              </a>
            )}
            {props.githubLink && (
              <a
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Github
              </a>
            )}
          </footer>
        </div>
      </div>
    </Fragment>,
    document.getElementById("modal-hook")
  );
};

export default DetailModal;

// import React, { Fragment } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// import Backdrop from "../../ui/Backdrop";
// import "./Detail.css";

// const DetailModal = (props) => {
//   return (
//     <Fragment>
//       <Backdrop onClick={props.onCancel} />
//       <div className="modal">
//         <div className="detail-content">
//           <AiOutlineClose
//             onClick={props.onCancel}
//             className="detail-content__close-icon"
//             size="2.5rem"
//           />
//           <h2>{props.title}</h2>
//           <hr />
//           <p>{props.description}</p>
//           <hr />

//           <footer className="detail-content__actions">
//             {props.webLink && (
//               <a
//                 href={props.webLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="button"
//               >
//                 Website
//               </a>
//             )}
//             {props.githubLink && (
//               <a
//                 href={props.githubLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="button"
//               >
//                 Github
//               </a>
//             )}
//           </footer>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default DetailModal;
