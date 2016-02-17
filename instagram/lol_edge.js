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
                            rect: ['-5px', '-7px', '1286px', '1112px', 'auto', 'auto'],
                            clip: 'rect(0px 1286px 1054.0546875px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'EllipseCopy9',
                            type: 'ellipse',
                            rect: ['909px', '287px', '66px', '67px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy10',
                            type: 'ellipse',
                            rect: ['1054px', '638px', '66px', '63px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy8',
                            type: 'ellipse',
                            rect: ['120px', '328px', '66px', '74px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy7',
                            type: 'ellipse',
                            rect: ['597px', '461px', '66px', '67px', 'auto', 'auto'],
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
                            rect: ['439px', '631px', '71px', '74px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['268px', '569px', '66px', '67px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1300px', '1330px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(190,221,195,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 14367,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
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
                            "eid282",
                            "height",
                            13886,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid280",
                            "height",
                            13886,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid275",
                            "height",
                            7250,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid272",
                            "top",
                            4750,
                            2500,
                            "linear",
                            "${EllipseCopy5}",
                            '631px',
                            '638px'
                        ],
                        [
                            "eid274",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${EllipseCopy5}",
                            '638px',
                            '624px'
                        ],
                        [
                            "eid279",
                            "top",
                            7500,
                            1221,
                            "linear",
                            "${EllipseCopy5}",
                            '624px',
                            '638px'
                        ],
                        [
                            "eid276",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${EllipseCopy7}",
                            '461px',
                            '447px'
                        ],
                        [
                            "eid270",
                            "height",
                            3331,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid268",
                            "height",
                            2500,
                            831,
                            "linear",
                            "${EllipseCopy8}",
                            '74px',
                            '67px'
                        ],
                        [
                            "eid267",
                            "top",
                            3331,
                            4169,
                            "linear",
                            "${EllipseCopy}",
                            '569px',
                            '555px'
                        ],
                        [
                            "eid271",
                            "height",
                            4750,
                            2500,
                            "linear",
                            "${EllipseCopy5}",
                            '74px',
                            '67px'
                        ],
                        [
                            "eid273",
                            "height",
                            7250,
                            250,
                            "linear",
                            "${EllipseCopy5}",
                            '67px',
                            '81px'
                        ],
                        [
                            "eid278",
                            "height",
                            7500,
                            1221,
                            "linear",
                            "${EllipseCopy5}",
                            '81px',
                            '67px'
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
                            "eid58",
                            "opacity",
                            12117,
                            2250,
                            "linear",
                            "${EllipseCopy10}",
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
                            "eid283",
                            "top",
                            13886,
                            216,
                            "linear",
                            "${EllipseCopy10}",
                            '638px',
                            '629px'
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
                            "eid281",
                            "top",
                            10235,
                            3651,
                            "linear",
                            "${EllipseCopy9}",
                            '287px',
                            '301px'
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
                            "eid265",
                            "top",
                            2500,
                            831,
                            "linear",
                            "${EllipseCopy8}",
                            '328px',
                            '334px'
                        ],
                        [
                            "eid269",
                            "top",
                            3331,
                            3669,
                            "linear",
                            "${EllipseCopy8}",
                            '334px',
                            '321px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lol_edgeActions.js");
})("EDGE-27932321");
