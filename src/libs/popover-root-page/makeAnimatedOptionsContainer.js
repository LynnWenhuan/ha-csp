module.exports = (React, ReactNative) => {
  const { Animated,View } = ReactNative;
  const TimerMixin = require('react-timer-mixin');

  // A component that scales in when mounted.
  const AnimatedOptionsContainer = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { scaleAnim:0.0001 };
    },
    componentDidMount() {
      this.setTimeout(() => {
        // Animated.timing(this.state.scaleAnim, {
        //   duration: 60,
        //   toValue: 1
        // }).start();
        this.setState({scaleAnim:1});
      }, 16);
    },
    render() {
      return (
        <View style={[this.props.style, { transform: [ { scale: this.state.scaleAnim } ] }]}>
          { this.props.children }
        </View>
      );
    }
  });

  return AnimatedOptionsContainer;
};