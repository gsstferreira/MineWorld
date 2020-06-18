var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Coronavalis - overworld",
        "Origins - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1592507671",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld Day",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Coronavalis - overworld",
            "last_rendertime": 1592451457,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                630,
                64,
                1680
            ],
            "minZoom": 0,
            "spawn": [
                635,
                80,
                1679
            ],
            "north_direction": 0
        },
        {
            "name": "Overworld Night",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "overworld_night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Coronavalis - overworld",
            "last_rendertime": 1592451457,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                630,
                64,
                1680
            ],
            "minZoom": 0,
            "spawn": [
                635,
                80,
                1679
            ],
            "north_direction": 0
        },
        {
            "name": "Overworld Natural",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworld_origins",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Origins - overworld",
            "last_rendertime": 1592507188,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                630,
                64,
                1680
            ],
            "minZoom": 0,
            "spawn": [
                630,
                80,
                1680
            ],
            "north_direction": 0
        }
    ]
};
