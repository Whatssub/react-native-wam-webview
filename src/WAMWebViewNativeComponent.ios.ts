import { requireNativeComponent } from 'react-native';
import type { NativeWebViewIOS } from './WAMWebViewTypes';

const WAMWebView: typeof NativeWebViewIOS =
  requireNativeComponent('WAMWebView');

export default WAMWebView;
