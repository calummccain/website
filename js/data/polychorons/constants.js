import { p } from "../constants.js";


const polychorons = ["8", "16", "24", "24'", "120", "600"];


const groups = {
    "C1": [
        [1, 2, 3, 4]
    ],
    "C4": [
        [1, 2, 3, 4],
        [2, 3, 4, 1],
        [3, 4, 1, 2],
        [4, 1, 2, 3]
    ],
    "A3": [
        [1, 2, 3, 4],
        [1, 3, 2, 4],
        [3, 1, 2, 4],
        [1, 3, 4, 2],
        [3, 1, 4, 2],
        [3, 4, 1, 2]
    ],
    "A4": [
        [1, 2, 3, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 4, 3, 1],
        [3, 1, 2, 4],
        [3, 2, 4, 1],
        [3, 4, 1, 2],
        [4, 1, 3, 2],
        [4, 2, 1, 3],
        [4, 3, 2, 1]
    ]
};


const negatives = {
    0: [
        ["", "", "", ""],
        ["", "", "", "-"],
        ["", "", "-", ""],
        ["", "", "-", "-"],
        ["", "-", "", ""],
        ["", "-", "", "-"],
        ["", "-", "-", ""],
        ["", "-", "-", "-"],
        ["-", "", "", ""],
        ["-", "", "", "-"],
        ["-", "", "-", ""],
        ["-", "", "-", "-"],
        ["-", "-", "", ""],
        ["-", "-", "", "-"],
        ["-", "-", "-", ""],
        ["-", "-", "-", "-"]
    ],
    1: [
        ["", "", "", ""],
        ["", "", "", "-"],
        ["", "", "-", ""],
        ["", "", "-", "-"],
        ["", "-", "", ""],
        ["", "-", "", "-"],
        ["", "-", "-", ""],
        ["", "-", "-", "-"]
    ],
    2: [
        ["", "", "", ""],
        ["", "", "", "-"],
        ["", "", "-", ""],
        ["", "", "-", "-"]
    ],
    3: [
        ["", "", "", ""],
        ["", "", "", "-"]
    ]
};


const initial_data = {
    "5": [],
    "5'": [],
    "8": [
        [["1", "1", "1", "1"], "C1", 0]
    ],
    "16": [
        [["0", "0", "0", "1"], "C4", 3]
    ],
    "24": [
        [["0", "0", "1", "1"], "A3", 2]
    ],
    "24'": [
        [["0", "0", "0", "1"], "C4", 3],
        [["1 / 2", "1 / 2", "1 / 2", "1 / 2"], "C1", 0]
    ],
    "120": [
        [["0", "0", "2", "2"], "A3", 2],
        [["1", "1", "1", "r"], "C4", 0],
        [["p", "p", "p", "1 / p ** 2"], "C4", 0],
        [["1 / p", "1 / p", "1 / p", "p ** 2"], "C4", 0],
        [["0", "1 / p ** 2", "1", "p ** 2"], "A4", 1],
        [["0", "1 / p", "p", "r"], "A4", 1],
        [["1 / p", "1", "p", "2"], "A4", 0],
    ],
    "600": [
        [["1 / 2", "1 / 2", "1 / 2", "1 / 2"], "C1", 0],
        [["0", "0", "0", "1"], "C4", 3],
        [["0", "1 / (2 * p)", "p / 2", "1 / 2"], "A4", 1]
    ]
};


const duals = {
    "5": "5'",
    "5'": "5",
    "8": "16",
    "16": "8",
    "24": "24'",
    "24'": "24",
    "120": "600",
    "600": "120"
};


const quantities = {
    "5": {
        "v": 5,
        "e": 10,
        "f": 10,
        "c": 5
    },
    "5'": {
        "v": 5,
        "e": 10,
        "f": 10,
        "c": 5
    },
    "8": {
        "v": 16,
        "e": 32,
        "f": 24,
        "c": 8
    },
    "16": {
        "v": 8,
        "e": 24,
        "f": 32,
        "c": 16
    },
    "24": {
        "v": 24,
        "e": 96,
        "f": 96,
        "c": 24
    },
    "24'": {
        "v": 24,
        "e": 96,
        "f": 96,
        "c": 24
    },
    "120": {
        "v": 600,
        "e": 1200,
        "f": 720,
        "c": 120
    },
    "600": {
        "v": 120,
        "e": 720,
        "f": 1200,
        "c": 600
    }
};


const values = {
    "0": 0,
    "1": 1,
    "1 / 2": 0.5,
    "p": p,
    "1 / p": 1 / p,
    "1 / p ** 2": 1 / Math.pow(p, 2),
    "p ** 2": (p ** 2),
    "r": Math.sqrt(5),
    "2": 2,
    "p / 2": p / 2,
    "1 / (2 * p)": 1 / (2 * p),
    "-1": -1,
    "-1 / 2": -0.5,
    "-p": -p,
    "-1 / p": -1 / p,
    "-1 / p ** 2": -1 / Math.pow(p, 2),
    "-p ** 2": -(p ** 2),
    "-r": -Math.sqrt(5),
    "-2": -2,
    "-p / 2": -p / 2,
    "-1 / (2 * p)": -1 / (2 * p)
};


const distances = {
    "5": {
        "R0": Math.sqrt(8 / 5),
        "R1": Math.sqrt(3 / 5),
        "R2": Math.sqrt(4 / 15),
        "R3": Math.sqrt(1 / 10),
        "CV": Math.sqrt(3 / 2)
    },
    "5'": {
        "R0": Math.sqrt(1.6),
        "R1": Math.sqrt(0.6),
        "R2": Math.sqrt(4 / 15),
        "R3": Math.sqrt(0.1),
        "CV": Math.sqrt(1.5)
    },
    "8": {
        "R0": 2,
        "R1": Math.sqrt(3),
        "R2": Math.sqrt(2),
        "R3": 1,
        "CV": Math.sqrt(3)
    },
    "16": {
        "R0": Math.sqrt(2),
        "R1": 1,
        "R2": Math.sqrt(2 / 3),
        "R3": Math.sqrt(0.5),
        "CV": Math.sqrt(3 / 2)
    },
    "24": {
        "R0": 2,
        "R1": Math.sqrt(3),
        "R2": Math.sqrt(8 / 3),
        "R3": Math.sqrt(2),
        "CV": Math.sqrt(2)
    },
    "24'": {
        "R0": 2,
        "R1": Math.sqrt(3),
        "R2": Math.sqrt(8 / 3),
        "R3": Math.sqrt(2),
        "CV": Math.sqrt(2)
    },
    "120": {
        "R0": Math.sqrt(8) * Math.pow(p, 2),
        "R1": Math.sqrt(3) * Math.pow(p, 3),
        "R2": 2 * Math.pow(5, -0.25) * Math.pow(p, 3.5),
        "R3": Math.pow(p, 4),
        "CV": Math.sqrt(3) * p
    },
    "600": {
        "R0": 2 * p,
        "R1": Math.pow(5, 0.25) * Math.pow(p, 1.5),
        "R2": 2 * Math.pow(3, -0.5) * (p ** 2),
        "R3": Math.pow(2, -0.5) * (p ** 3),
        "CV": Math.sqrt(1.5)
    }
};


const scale = {
    "5": 0,
    "5'": 0,
    "8": 2,
    "16": 1,
    "24": Math.sqrt(2),
    "24'": 1,
    "120": Math.sqrt(8),
    "600": 1
};


export {
    polychorons,
    groups,
    negatives,
    initial_data,
    duals,
    quantities,
    values,
    distances,
    scale
};