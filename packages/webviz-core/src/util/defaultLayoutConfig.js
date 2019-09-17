// @flow
//
//  Copyright (c) 2019-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.
export const defaultLayout = {
  "layout": {
    "direction": "row",
    "first": {
      "direction": "column",
      "second": {
        "direction": "column",
        "second": "RawMessages!29r6gdc",
        "first": "RawMessages!1csg5az"
      },
      "first": "RawMessages!415z6t2",
      "splitPercentage": 19.08763505402161
    },
    "second": {
      "first": "3D Panel!fak7ym",
      "second": {
        "direction": "column",
        "second": "ImageViewPanel!4aej2kr",
        "first": "ImageViewPanel!szb852",
        "splitPercentage": 27.85114045618247
      },
      "direction": "row",
      "splitPercentage": 70.28112449799197
    },
    "splitPercentage": 22.1875
  },
  "savedProps": {
    "RawMessages!415z6t2": {
      "topicName": "/object_displayIFVLane"
    },
    "RawMessages!1csg5az": {
      "topicName": "/adcan_packet"
    },
    "3D Panel!fak7ym": {
      "checkedNodes": [
        "name:Topics",
        "/adcan_packet",
        "/adcan_packet_raw",
        "/blind_packet_l",
        "/blind_packet_r",
        "/cam_packet_raw",
        "/corner_packet_l",
        "/corner_packet_r",
        "/esr_packet",
        "/esr_packet_raw",
        "/ibeo/Packet",
        "/ifv_lane",
        "/ifv_packet",
        "/label_pub1",
        "/object_displayIFV",
        "/object_displayIFVLane",
        "/radar_packet_raw",
        "/rosout",
        "/rosout_agg",
        "/rtk/data",
        "/rtk/raw_data",
        "/scala/raw",
        "/usb_cam1/image_1/compressed",
        "t:/object_displayESR",
        "t:/object_displayIbeo"
      ],
      "expandedNodes": [
        "name:Topics",
        "t:/object_displayIbeo"
      ],
      "followTf": "body",
      "cameraState": {
        "targetOffset": [
          53.69380917769647,
          -2.4876492385928053,
          0
        ],
        "distance": 66.70409255179321,
        "perspective": true,
        "phi": 0.946266606571803,
        "thetaOffset": -1.5429113027624266
      },
      "modifiedNamespaceTopics": [],
      "pinTopics": false,
      "topicSettings": {}
    },
    "ImageViewPanel!szb852": {
      "cameraTopic": "/usb_cam1/image_1/compressed",
      "enabledMarkerNames": [],
      "scale": 0.2,
      "transformMarkers": true,
      "synchronize": false
    },
    "ImageViewPanel!4aej2kr": {
      "cameraTopic": "/usb_cam1/image_1/compressed",
      "enabledMarkerNames": [],
      "scale": 0.2,
      "transformMarkers": true,
      "synchronize": false
    }
  },
  "globalData": {}
};

