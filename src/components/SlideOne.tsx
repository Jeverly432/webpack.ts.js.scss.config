import React, { useState, useEffect, useRef } from "react";
import "../styles/slideone.scss";

const SlideOne = () => {
  const [state, setState] = useState({
    inScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  let ref = useRef<null | HTMLDivElement>(null);

  const [visibleright, setVisibleright] = useState(false);
  const [visibleleft, setVisibleleft] = useState(false);

  const [right, setRight] = useState(0)

    useEffect(() => {
      const el = ref.current;
      if (el) {
        const onWheel = (e) => {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 4,
            behavior: "smooth",
          });
          if (el.scrollLeft > 600) {
            setVisibleright(true);
          } else if (el.scrollLeft < 400) {
            setVisibleright(false);
          }

          
        };
        el.addEventListener("wheel", onWheel);
      }
    }, []);

  // const onMouseMove = (e) => {
  //   if (ref && ref.current && !ref.current.contains(e.target)) {
  //     return
  //   }
  //   e.preventDefault();

  //   const { clientX, scrollX, inScrolling } = state;

  //   if (inScrolling || ref.current!=null ) {
  //     ref.current.scrollLeft = scrollX + e.clientX - clientX;
  //     let sX = scrollX + e.clientX - clientX
  //     let cX = e.clientX
  //     setState({
  //       ...state,
  //       scrollX: sX,
  //       clientX: cX
  //     });
  //   }
  // };

  // const onMouseUp = (e) => {
  //   if (ref && ref.current && !ref.current.contains(e.target)) {
  //     return;
  //   }
  //   e.preventDefault();
  //   setState({
  //     ...state,
  //     inScrolling: false,
  //   });
  // };

  // const onMouseDown = (e) => {
  //   if (ref && ref.current && !ref.current.contains(e.target)) {
  //     return;
  //   }
  //   e.preventDefault();
  //   setState({
  //     ...state,
  //     inScrolling: true,
  //     clientX: e.clientX,
  //   });
  // };

  // useEffect(()=>{
  //   document.addEventListener('mousedown', onMouseDown)
  //   document.addEventListener('mouseup', onMouseUp)
  //   document.addEventListener('mousedown', onMouseMove)

  //   return ()=>{
  //     document.removeEventListener('mousedown', onMouseDown)
  //     document.removeEventListener('mouseup', onMouseUp)
  //     document.removeEventListener('mousedown', onMouseMove)
  //   }
  // },[])

  return (
    <>
      <div className="slideone-container">
        <div className="slideone-point">1</div>
        <div className="slideone-point-2">6</div>
        <div className="slideone-point-3">3</div>
        <div className="slideone-point-4">4</div>
        <div className="slideone-point-5">5</div>
        <div className="slideone-point-6">6</div>
        <div className="slideone-container-date">
          <div className="slideone-container-date-first">2015</div>
          <div className="slideone-container-date-second">2022</div>
        </div>
        <div
          ref={ref}
          className="slideone-container-content"
          onMouseDown={() =>
            (e: React.MouseEvent<Element, MouseEvent>): void => {
              onmousedown;
            }}
          onMouseUp={() =>
            (e: React.MouseEvent<Element, MouseEvent>): void => {
              onmouseup;
            }}
          onMouseMove={() =>
            (e: React.MouseEvent<Element, MouseEvent>): void => {
              onmousemove;
            }}
        >
          <div className="slideone-container-content-wrapper">
            <p className="slideone-container-content-date">2016</p>
            <p className="slideone-container-content-text">
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </p>
          </div>
          <div className="slideone-container-content-wrapper-2">
            <p className="slideone-container-content-date-2">2015</p>
            <p className="slideone-container-content-text-2">
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </p>
          </div>
          <div className="slideone-container-content-wrapper-3">
            <p className="slideone-container-content-date-3">2017</p>
            <p className="slideone-container-content-text-3">
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </div>
          <div className="slideone-container-content-wrapper-4">
            <p className="slideone-container-content-date-4">2017</p>
            <p className="slideone-container-content-text-4">
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </div>
          <div className="slideone-container-content-wrapper-5">
            <p className="slideone-container-content-date-5">2017</p>
            <p className="slideone-container-content-text-5">
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </div>
        </div>

        {visibleright == true ? (
          <div className="slideone-container-right" onClick={()=>setRight(0)}>{">"}</div>
        ) : null}
        {
          visibleleft== true ? (
            <div className="slideone-container-left">{"<"}</div>) : null}
      </div>
    </>
  );
};

export default SlideOne;
