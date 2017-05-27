import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; //"* as ..." allows access to all the
//exported items from action. note that in this case, when exporting them
//- need to export each with its name, and not "export default"


class ListItem extends Component {
  componenetWillUpdate() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.sprint();
  }
  renderDescription() {
    const { descriptionTextStyle } = styles;
    const { library, expended } = this.props;
    if (expended) {
      return (
        <View>
          <Text style={descriptionTextStyle}>{library.description}</Text>
        </View>
      );
    }
  }


  render() {
    const { id, title } = this.props.library;
    const { titleSectionStyle, titleTextStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection style={titleSectionStyle}>
            <Text style={titleTextStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //the mapStateToProps is called both with the state, and the componenets
  //properties. So we added the arg ownProps in order to reference the
  // ownProps.library.id
  const expended = state.selectedLibraryId === ownProps.library.id;
  return { expended };
};

const styles = {
  titleTextStyle: {
    flex: 1,
    //textAlign: 'center',
    paddingLeft: 15,
    fontSize: 23,
    fontWeight: 'bold',
  },
  titleSectionStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },
  descriptionTextStyle: {
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop:5,
    paddingRight: 5,
    fontSize: 17
  }

};

export default connect(mapStateToProps, actions)(ListItem);// connect 1st arg (null in
  //this case) is specifically for mapStateToProps. since we don't need it here,
  // its a null. The second arg, is the actions creators.
  //this 2nd arg is doing 2 things: A. the return of the action JS - is going
  //into the reduc store. B. the actions passed as props to the component.
  // B enables the action change the component.
  //this is also "doing" the store.dispatch.
