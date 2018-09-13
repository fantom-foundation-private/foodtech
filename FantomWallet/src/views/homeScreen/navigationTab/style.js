import { DEVICE_HEIGHT, DEVICE_WIDTH, iPhoneXHeight } from '../../../common/constants';

const isPhoneX = DEVICE_HEIGHT >= iPhoneXHeight;

const style = {
  mainContainerStyle: {
    flex: 1,
    // backgroundColor: 'red',
  },
  tabInfoStyle: {
    flex: 1,
    marginBottom: isPhoneX ? 78 : 64,
  },
  navigationTabStyle: {
    position: 'absolute',
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    height: isPhoneX ? 78 : 64,
    bottom: 0,
    shadowOffset: { width: 0, height: -5 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    backgroundColor: 'white',
    elevation: 12,
  },
};
export default style;
