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
                            rect: ['0px', '19px', '591px', '381px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'EllipseCopy9',
                            type: 'ellipse',
                            rect: ['336px', '141px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy10',
                            type: 'ellipse',
                            rect: ['262px', '161px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy8',
                            type: 'ellipse',
                            rect: ['34px', '102px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy7',
                            type: 'ellipse',
                            rect: ['422px', '174px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy6',
                            type: 'ellipse',
                            rect: ['490px', '245px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy5',
                            type: 'ellipse',
                            rect: ['190px', '277px', '28px', '27px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['106px', '219px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(190,221,195,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid46",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '0.99340277777778'
                        ],
                        [
                            "eid59",
                            "opacity",
                            3264,
                            855,
                            "linear",
                            "${EllipseCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1750,
                            748,
                            "linear",
                            "${EllipseCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            4120,
                            999,
                            "linear",
                            "${EllipseCopy7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${EllipseCopy8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            5119,
                            881,
                            "linear",
                            "${EllipseCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            2498,
                            767,
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
