package com.reactnativecommunity.webview

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext


class WAMWebViewPackage: ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext) = listOf(
    WAMWebViewModule(reactContext)
  )

  override fun createViewManagers(reactContext: ReactApplicationContext) = listOf(
    WAMWebViewManager()
  )
}
