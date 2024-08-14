import React from 'react';
import { Frown } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{ backgroundColor: '#2f3242', position: 'relative', height: '100vh', width: '100%' }}>
      <svg
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-250px',
          marginLeft: '-400px',
        }}
      >
        <defs>
          <style>
            {`
              @keyframes float {
                0% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-20px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
            `}
          </style>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
          <path
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            id="Polygon-1"
            stroke="#007FB2"
            strokeWidth="6"
            sketchType="MSShapeGroup"
            className="float-animation"
          ></path>
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            id="Polygon-2"
            stroke="#EF4A5B"
            strokeWidth="6"
            sketchType="MSShapeGroup"
            className="float-animation"
          ></path>
                   <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            id="Polygon-3"
            stroke="#795D9C"
            strokeWidth="6"
            sketchType="MSShapeGroup"
            className="float-animation"
          ></path>
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            id="Polygon-4"
            stroke="#F2773F"
            strokeWidth="6"
            sketchType="MSShapeGroup"
            className="float-animation"
          ></path>
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            id="Polygon-5"
            stroke="#36B455"
            strokeWidth="6"
            sketchType="MSShapeGroup"
            className="float-animation"
          ></path>
        </g>
      </svg>
      <style>
        {`
          .float-animation {
            animation: float 1s infinite ease-in-out alternate;
          }
        `}
      </style>
      <div className="message-box" style={{
        height: '200px',
        width: '380px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-100px',
        marginLeft: '50px',
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 300,
      }}>
        <h1 style={{ fontSize: '60px', lineHeight: '46px', marginBottom: '40px' }}>404</h1>
        <p>Page not found<Frown size={48} /></p>
        <div className="buttons-con">
          <div className="action-link-wrap" style={{ marginTop: '40px' }}>
            <a onClick={() => history.back()} className="link-button link-back-button" style={{
              background: '#68c950',
              padding: '8px 25px',
              borderRadius: '4px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'all 0.3s linear',
              cursor: 'pointer',
              textDecoration: 'none',
              marginRight: '10px',
            }}>
              Go Back
            </a>
            <a href="/" className="link-button" style={{
              background: '#68c950',
              padding: '8px 25px',
              borderRadius: '4px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'all 0.3s linear',
              cursor: 'pointer',
              textDecoration: 'none',
              marginRight: '10px',
            }}>
              Go to Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;