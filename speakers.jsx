import React from "react";
import "./speakers.css"
const Speakers = ()=>{
    return(
        <>
            <div className="parentdiv">
                <div className="headingdiv">Speakers</div>
                <div className="paragraphdiv">"Join us as we welcome industry experts with over 10 years of 
                    experience and deep technical knowledge, ready to inspire and enlighten us. Their insights
                     will shape our journey into the ever-evolving world of technology!"</div>
                <div className="speakercardsdiv">
                    <div className="speaker">
                        <div className="photo1"></div>
                        <h3>Supriya Raman</h3>
                        <div className="designation">AI Engineering Manager at IBM</div>
                    </div>
                    <div className="speaker">
                    <div className="upperdiv"><div className="photo2"></div></div>
                    
                        <h3>Geethika Yerramsetti</h3>
                        <div className="designation">Senior Cloud and Devops Engineer at Deloitte</div>
                    </div>
                    <div className="speaker">
                    <div className="photo3"></div>
                        <h3>Manas Malla</h3>
                        <div className="designation">Google Product Expert</div>
                    </div>
                    <div className="speaker">
                    <div className="photo4"></div>
                        <h3>Swapna Dande</h3>
                        <div className="designation">Woman TechMaker</div>
                    </div>
                    <div className="speaker">
                    <div className="photo5"></div>
                        <h3>Madhu Vadlamani</h3>
                        <div className="designation">Data Analytics and AI specialist at Miracle</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Speakers;