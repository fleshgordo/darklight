/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  settings: {
    videoLength: 150, // videlength in seconds
  },

  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  onDeviceReady: function () {
    var interval = setInterval(function () {
      var currentTime = Math.floor(+new Date() / 1000);
      if (currentTime % app.settings.videoLength === 0) {
        app.startvideo();
      }
    }, 1000);

    app.goFullScreen();
    app.goFullBrightness();



  },

  goFullScreen: function () {
    // Go fullscreen
    AndroidFullScreen.immersiveMode(function () {
      console.info("It worked! we are entering fullscreen.");
    }, function () {
      console.error("houston we have a problem!");
    });

  },

  goFullBrightness: function () {
    // After device ready, create a local alias
    var VolumeControl = cordova.plugins.brightness;

    // value should be float in range from 0 to 1.
    VolumeControl.setBrightness(1, function () {
      console.log("setting full brightness");
    }, function () {
      console.warn("setting full brightness failed");
    });

    // prevents sleep
    VolumeControl.setKeepScreenOn(true);
  },

  startvideo: function () {
    var sound = $("#video")[0];
    sound.load();
    sound.play();
  }

};

app.initialize();
