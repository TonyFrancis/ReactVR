import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: '#777879',
      text: 'Hello VR',
      color: true,
    };
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      {/*}  <View
          onEnter={() => this.setState({ backgroundColor: '#44444', text: 'Entered VR'})}
          onExit={() => this.setState({ backgroundColor: '#777879', text: 'Hello VR'})}
        >
          <Text
            style={{
              backgroundColor: this.state.backgroundColor,
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
              {this.state.text}
          </Text>
        </View> */}
        <View
        >
          <VrButton
            style={{
              layoutOrigin: [0.5, 0.5],
              // paddingLeft: 0.2,
              // paddingRight: 0.2,
              // textAlign: 'center',
              // textAlignVertical: 'center',
              transform: [{translate: [-1, 1, -3]}],
            }}
            onClick={() => this.setState({color: !this.state.color})}>
            <Text
              style={{
                color: this.state.color ? 'yellow' : 'red'
              }}
              >
              Color
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
