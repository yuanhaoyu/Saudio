import React, { Component } from 'react';
import './style.css';
import Time from '../Time';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  componentDidMount(){
    let media=this.refs.media;
    media.addEventListener("canplay", function(){
        console.log(media.duration);
    });

  }
  render() {
    return (
      <div className="Controller">
        <Time/>
        <div className="ControllerBox">
          <div className="last l"><i className="icon iconfont icon-shangyishou"></i></div>
          <div className="play l" onClick={this.play}><i className="icon iconfont icon-bofang1" ref="play"></i></div>
          <div className="next l"><i className="icon iconfont icon-kuaijin"></i></div>
        </div>
        <audio ref="media"><source  src="http://115.159.159.127/music/短歌行.mp3"/></audio>
      </div>
    );
  }
  play(){
    let media=this.refs.media;
    let player=this.refs.play;
    if(player.className==="icon iconfont icon-bofang1"){
      player.className="icon iconfont icon-bofang";
    }else{
      player.className="icon iconfont icon-bofang1";
    }
    media.paused ? media.play() : media.pause();
   
  }
}



export default Controller;
