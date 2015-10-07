/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted',
                            type: 'image',
                            rect: ['14px', '-10px', '1286px', '1123px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'EllipseCopy9',
                            type: 'ellipse',
                            rect: ['909px', '287px', '66px', '81px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy10',
                            type: 'ellipse',
                            rect: ['1054px', '629px', '66px', '72px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy8',
                            type: 'ellipse',
                            rect: ['120px', '321px', '66px', '81px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy7',
                            type: 'ellipse',
                            rect: ['597px', '447px', '66px', '81px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy6',
                            type: 'ellipse',
                            rect: ['782px', '488px', '68px', '67px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy5',
                            type: 'ellipse',
                            rect: ['439px', '624px', '71px', '81px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['268px', '555px', '66px', '81px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1300px', '1330px'],
                            overflow: 'hidden',
                            fill: ["rgba(190,221,195,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 14366.608465357,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid253",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '624px',
                            '624px'
                        ],
                        [
                            "eid255",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '447px',
                            '447px'
                        ],
                        [
                            "eid250",
                            "height",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4385,
                            1865,
                            "linear",
                            "${EllipseCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "left",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            '439px',
                            '439px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            2250,
                            "linear",
                            "${EllipseCopy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid258",
                            "height",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid64",
                            "opacity",
                            8250,
                            1881,
                            "linear",
                            "${EllipseCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid260",
                            "left",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '782px',
                            '782px'
                        ],
                        [
                            "eid259",
                            "top",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '488px',
                            '488px'
                        ],
                        [
                            "eid263",
                            "top",
                            14102,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '629px',
                            '629px'
                        ],
                        [
                            "eid246",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '321px',
                            '321px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2250,
                            2135,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '0.99340277777778'
                        ],
                        [
                            "eid249",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '555px',
                            '555px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            6250,
                            2000,
                            "linear",
                            "${EllipseCopy7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid261",
                            "width",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid183",
                            "width",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid245",
                            "width",
                            13430,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid247",
                            "left",
                            7000,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid262",
                            "left",
                            14102,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '1054px',
                            '1054px'
                        ],
                        [
                            "eid257",
                            "top",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid254",
                            "left",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '597px',
                            '597px'
                        ],
                        [
                            "eid59",
                            "opacity",
                            10131,
                            1986,
                            "linear",
                            "${EllipseCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "left",
                            7500,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid256",
                            "left",
                            10235,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            '909px',
                            '909px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            12117,
                            2250,
                            "linear",
                            "${EllipseCopy10}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lol_edgeActions.js");
})("EDGE-27932321");
