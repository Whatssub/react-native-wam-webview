import { requireNativeComponent } from 'react-native';
import type { NativeWebViewAndroid } from './WAMWebViewTypes';

const WAMWebView: typeof NativeWebViewAndroid =
  requireNativeComponent('WAMWebView');

export default WAMWebView;
