import React,{useState,useEffect} from "react";
import "../utils/styles/carrousel.css"

function Carrousel() {
    const [turn,setTurn] = useState(2);
    useEffect(() => {
        const interval = setInterval(() => {
            if(turn === 1 || turn === 2){
                setTurn((prevTurn)=>prevTurn+1)
            }
            if(turn === 3){
                setTurn(1)
            }
          }, 4000);
          return () => clearInterval(interval);
      }, [turn]);
    if(turn === 1){
        return (
            <div className="carrouselContainer">
                <div className="carrousel turn1">
                    <div className="ad advertisement"></div>
                    <div className="ad advertisement2"></div>
                    <div className="ad advertisement3"></div>
                </div>
                <div className="controls">
                    <div style={{opacity:1}}></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
    if(turn === 2){
        return (
            <div className="carrouselContainer">
                <div className="carrousel turn2">
                    <div className="ad advertisement"></div>
                    <div className="ad advertisement2"></div>
                    <div className="ad advertisement3"></div>
                </div>
                <div className="controls">
                    <div></div>
                    <div style={{opacity:1}}></div>
                    <div></div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="carrouselContainer">
                <div className="carrousel turn3">
                    <div className="ad advertisement"></div>
                    <div className="ad advertisement2"></div>
                    <div className="ad advertisement3"></div>
                </div>
                <div className="controls">
                    <div></div>
                    <div></div>
                    <div style={{opacity:1}}></div>
                </div>
            </div>
        );
    }
}

export default Carrousel;
