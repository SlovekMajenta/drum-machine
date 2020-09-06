import React from 'react';
import './App.css';
import './styles.css'
import Container from './components/Container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlePower    = this.handlePower.bind(this);
    this.handleBank     = this.handleBank.bind(this);
    this.handleVolume   = this.handleVolume.bind(this);
    this.handleSoundBTN = this.handleSoundBTN.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      marginleft: '27px',
      marginright: '0px',
      powerOn:true,

      marginleftb: '0px',
      marginrightb: '27px',
      bankOn:false,

      volume: 0.5,
      div: '',

      W:
        {
          text: 'Heater 2',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          textB:'Chord 2',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      Q:
        {
          text: 'Heater 1',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          textB:'Chord 1',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      E:
        {
          text: 'Heater 3',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          textB:'Chord 3',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      A:
        {
          text: 'Heater 4',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          textB:'Shaker',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      S:
        {
          text: 'Clap',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          textB:'Open HH',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      D:
        {
          text: 'Open HH',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          textB:'Closed HH',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      Z:
        {
          text: 'Kick n\' Hat',
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          textB:'Punchy Kick',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      X:
        {
          text: 'Kick',
          audio:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          textB:'Side Stick',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },
      C:
        {
          text: "Closed HH",
          audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          textB:'Snare',
          audioB: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
          marginT  : '0px',
          marginL  : '0px',
          marginTa : '3px',
          marginLa : '3px',
          color    : '#00ECB7',
          backColor: '#4C2882',
          boxShadow:'3px 3px 3px #00ECB7',
          boxShadowa:'none'
        },

      divText: '',
      divT:'',
    }
  }

  handlePower(){
    this.setState({powerOn:!this.state.powerOn, marginleft:this.state.marginright, marginright:this.state.marginleft, divText:this.state.divT, divT:this.state.divText});
  }

  handleBank(){
    const arr =['W', 'Q', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    this.setState(
      {
        bankOn:!this.state.bankOn, 
        marginleftb:this.state.marginrightb, 
        marginrightb:this.state.marginleftb
      }
    );
    if(!this.state.bankOn){
      this.setState({divText: 'Smooth Piano Kit'});
    }
    else{
      this.setState({divText: 'Heater Kit'});
    }
    for(let i in arr){
      let x = arr[i];
      this.setState(()=>(
        {[x]:
          {
            text:       this.state[x].textB,
            audio:      this.state[x].audioB,
            textB:      this.state[x].text,
            audioB:     this.state[x].audio,
            marginT:    this.state[x].marginT, 
            marginTa:   this.state[x].marginTa, 
            marginL:    this.state[x].marginL, 
            marginLa:   this.state[x].marginLa, 
            color:      this.state[x].color, 
            backColor:  this.state[x].backColor, 
            boxShadow:  this.state[x].boxShadow, 
            boxShadowa: this.state[x].boxShadowa
          }
        }));
    }
  }

  handleVolume(e){
    if(this.state.powerOn){
      const volume = "Volume: " + e.target.value;
      this.setState({divText:volume, volume:e.target.value/100});
      setTimeout(()=> this.setState({divText:this.state.divT}), 1000);
    }
  }

  handleSoundBTN(e){
    const x = e.target.value;
    if(this.state.powerOn){
      const audio = new Audio(this.state[x].audio);
      audio.play();
      audio.volume = this.state.volume;

      const y = (x) => {
        this.setState(()=>(
        {divText: this.state[x].text, [x]:
          {
            text:       this.state[x].text,
            audio:      this.state[x].audio,
            textB:      this.state[x].textB,
            audioB:     this.state[x].audioB,
            marginT:    this.state[x].marginTa, 
            marginTa:   this.state[x].marginT, 
            marginL:    this.state[x].marginLa, 
            marginLa:   this.state[x].marginL, 
            color:      this.state[x].backColor, 
            backColor:  this.state[x].color, 
            boxShadow:  this.state[x].boxShadowa, 
            boxShadowa: this.state[x].boxShadow
          }
        }));
      };
      y(x);
      setTimeout(()=> y(x), 100);
    }
    return 0;
  }

  handleKeyPress(e){
    const x = e.key.toUpperCase();
    if(this.state.powerOn && this.state.hasOwnProperty(x)){
      const audio = new Audio(this.state[x].audio);
      audio.play();
      audio.volume = this.state.volume;
      const y = (x) => {
        this.setState(()=>(
        {divText: this.state[x].text, [x]:
          {
            text:       this.state[x].text,
            audio:      this.state[x].audio,
            textB:      this.state[x].textB,
            audioB:     this.state[x].audioB,
            marginT:    this.state[x].marginTa, 
            marginTa:   this.state[x].marginT, 
            marginL:    this.state[x].marginLa, 
            marginLa:   this.state[x].marginL, 
            color:      this.state[x].backColor, 
            backColor:  this.state[x].color, 
            boxShadow:  this.state[x].boxShadowa, 
            boxShadowa: this.state[x].boxShadow
          }
        }));
      };
      y(x);
      setTimeout(()=> y(x), 100);
      document.removeEventListener('keypress', this.handleKeyPress)
    }
  }

  componentDidUpdate(){
    document.addEventListener('keypress', this.handleKeyPress)
  }

  render(){
    return (
      <div>
        <Container 
        handlePower={this.handlePower} 
        marginl={this.state.marginleft} 
        marginr={this.state.marginright}

        powerOn={this.state.powerOn}
        
        handleBank={this.handleBank}
        marginlb={this.state.marginleftb} 
        marginrb={this.state.marginrightb}
        
        handleVolume={this.handleVolume}

        divText={this.state.divText}
        
        handleSoundBTN={this.handleSoundBTN}
        handleKeyPress={this.handleKeyPress}
        W={this.state.W}
        Q={this.state.Q}
        E={this.state.E}
        A={this.state.A}
        S={this.state.S}
        D={this.state.D}
        Z={this.state.Z}
        X={this.state.X}
        C={this.state.C}
        />
      </div>
    );
  }
}

export default App;
