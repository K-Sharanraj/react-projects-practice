import "./Body.css"
import { useState,useEffect } from "react"

export default function Body(){
const [toptext,setTopText]=useState();
const [bottomtext,setBottomText] =useState();
const [meme_url,setMemeUrl]=useState();
const[meme,setMeme]=useState([]);

function topTextInput(event){
    setTopText(event.currentTarget.value)
}

function bottomTextInput(event){
    setBottomText(event.currentTarget.value)
}

useEffect(
    function genrateUrls(){
        fetch(" https://api.imgflip.com/get_memes").then(res=> res.json()).then(res=> setMeme(res.data.memes));
        
    }
,[]);

function getMeme(){

    const x=Math.floor(Math.random()*meme.length)
    setMemeUrl(meme[x].url);

}



    return (
        <div className="mainDiv">
            <div>
                <form className="Form">
                    <section style={{width:'222px'}}>
                        <label htmlFor="toptext" ><h3>Top text</h3></label><br/>
                        <input type="text" name="toptext" className="inputBox" id="toptext" style={{width:'100%'}} onChange={topTextInput} />
                    </section>
                    <section style={{width:'222px'}}>
                        <label htmlFor="bottomtext" ><h3>Bottom text</h3></label><br/>
                        <input type="text" name="bottomtext" className="inputBox" id="bottomtext" style={{width:'100%'}} onChange={bottomTextInput}/>
                    </section>
                </form>
            </div>

            <button onClick={getMeme}>Get a new meme image</button>
            <div className="MemeImage">
                <img className="meme" src={meme_url}/>
                <h3 className="texttop"> {toptext}</h3>
                <h3 className="textbottom">{bottomtext}</h3>
            </div>


        </div>
    )
}