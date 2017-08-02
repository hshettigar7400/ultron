import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './Topnav';
import PageLoader from './PageLoader';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import $ from "jquery";
import Sound from 'react-sound';
import ReactHtmlParser from 'react-html-parser';

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModule: 1,
      currentTopic: 1,
      currentPage: 1,
      isPlaying: true,
      isAudioFinished: false,
      audioVolume: 100,
      menuData: {},
      menuOpen: false,
      showHelp: false,
      showTranscript: false,
      transcript:{}
    };
  }

  componentWillMount() {
    axios.get(`app/assets/data/coursemenu.json`)
      .then(res => {
        this.setState({ menuData: res.data });
    });
    axios.get(`app/assets/data/transcript.json`)
      .then(res => {
        this.setState({ transcript: res.data.transcript });
    });
  }

  loadNext() {
    this.setState({currentPage: this.state.currentPage + 1, isAudioFinished: false})
  }

  loadPrev() {
    this.setState({currentPage: this.state.currentPage - 1, isAudioFinished: false})
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  togglePlay() {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  toggleVolume() {
    if (this.state.audioVolume === 100)
      this.setState({audioVolume: 0})
    else
      this.setState({audioVolume: 100})
  }

  toggleTranscript() {
    this.setState({showTranscript: !this.state.showTranscript})
  }

  toggleHelp() {
    this.setState({showHelp: !this.state.showHelp})
  }

  replayPage() {
    this.setState({isAudioFinished: false})
  }

  menuItemClicked(e){
   var pageId = e.target.dataset.pageId;
   this.setState({currentPage: parseInt(pageId)});
   this.toggleMenu();
  }

  loadHeader() {
    return (
        <div>
          <MediaQuery query='(max-width: 680px)'>
            {this.showTopNav()}
          </MediaQuery>
          <MediaQuery query='(min-width: 680px)'>
            <Header ref="header" courseTitle={this.state.menuData.menu ? this.state.menuData.menu.courseTitle:""}/>
          </MediaQuery>
        </div>
    )
  }

  pageLoader() {
    return (
      <div>
        {this.state.menuData.menu && <PageLoader
        currentPage={this.state.currentPage}
        currentPage={this.state.currentPage}
        onCloseMenuClick={this.toggleMenu.bind(this)}
        menuList={this.state.menuData.menu ? this.state.menuData.menu : {}}
        menuOpen={this.state.menuOpen}
        menuItemClicked={this.menuItemClicked.bind(this)}
        showHelp={this.state.showHelp}
        />}
      </div>
    )
  }

  loadFooter() {
    return (
        <Footer
          audioVolume={this.state.audioVolume}
          currentPageNumber={this.state.currentPage}
          onHelpClick={this.toggleHelp.bind(this)}
          onLoadNext={this.loadNext.bind(this)}
          onLoadPrev={this.loadPrev.bind(this)}
          onMenuClick={this.toggleMenu.bind(this)}
          onPlayPause={this.togglePlay.bind(this)}
          onReplay={this.replayPage.bind(this)}
          isPlaying={this.state.isPlaying}
          totalPages={8}
          onToggleVolume={this.toggleVolume.bind(this)}
          onTranscriptClick={this.toggleTranscript.bind(this)}
          showTranscript={this.state.showTranscript}
        />
    )
  }

  showTopNav() {
    return (
      <TopNav
        currentPageNumber={this.state.currentPage}
        onLoadNext={this.loadNext.bind(this)}
        onLoadPrev={this.loadPrev.bind(this)}
        onMenuClick={this.toggleMenu.bind(this)}
        onPlayPause={this.togglePlay.bind(this)}
        isPlaying={this.state.isPlaying}
        totalPages={8}
        courseTitle="Code of Conduct"
        onTranscriptClick={this.toggleTranscript.bind(this)}
      />
    )
  }

  handleFinishedPlaying() {
    this.setState({isAudioFinished: true})
  }

  loadAudio() {
    let audioPath = `app/assets/audio/p${this.state.currentPage}.mp3`;
    return (
      <Sound
       url={audioPath}
       playStatus={this.state.isPlaying ? "PLAYING" : "PAUSED"}
       playFromPosition={0 /* in milliseconds */}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleFinishedPlaying.bind(this)}
       volume={this.state.audioVolume}
     />
    )
  }

  loadTranscript() {
    return(
      <div className="transcript-container">
        <div id="transcript-header" className="transcript-header">
          <div className="transcript-title">Transcript</div>
          <a href="#" id="transcript-close-button" onClick={this.toggleTranscript.bind(this)} className="transcript-close-button tabindex" aria-label="Transcript close" role="button">
            <span className="icon-close"></span>
          </a>
        </div>
        <div className="transcript-text-container" ref="transcript">
          {ReactHtmlParser(this.state.transcript[this.state.currentPage-1].text)}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {!this.state.isAudioFinished && this.loadAudio()}
        {this.loadHeader()}
        {this.state.currentPage && this.pageLoader()}
        {this.state.showTranscript &&  this.loadTranscript()}
        <MediaQuery query='(min-width: 320px)'>
          {this.loadFooter()}
        </MediaQuery>
      </div>
    )
  }
}
