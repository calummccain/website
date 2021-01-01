function rotatePositions(s) {
    var posDict = {
        "{4,3,4}": [0, 0, 0],
        "{4,3,5}": [0, s, 0],
        "{4,3,6}": [0, 2 * s, 0],
        "{3,5,3}": [s, -s, 0],
        "{3,5,4}": [s, 0, 0],
        "{3,5,5}": [s, s, 0],
        "{3,5,6}": [s, 2 * s, 0],
        "{3,3,6}": [2 * s, 2 * s, 0],
        "{3,4,4}": [3 * s, 0, 0],
        "{3,4,5}": [3 * s, s, 0],
        "{3,4,6}": [3 * s, 2 * s, 0],
        "{5,3,4}": [4 * s, 0, 0],
        "{5,3,5}": [4 * s, s, 0],
        "{5,3,6}": [4 * s, 2 * s, 0],
        "{6,3,3}": [5 * s,-s, 0],
        "{6,3,4}": [5 * s, 0, 0],
        "{6,3,5}": [5 * s, s, 0]
    };
    return posDict;
}

const shapeLinks = {
    "{4,3,4}": "./individual/434.html",
    "{4,3,5}": "./individual/435.html",
    "{4,3,6}": "./individual/436.html",
    "{3,5,3}": "./individual/353.html",
    "{3,5,4}": "./individual/354.html",
    "{3,5,5}": "./individual/355.html",
    "{3,5,6}": "./individual/356.html",
    "{3,3,6}": "./individual/336.html",
    "{3,4,4}": "./individual/344.html",
    "{3,4,5}": "./individual/345.html",
    "{3,4,6}": "./individual/346.html",
    "{5,3,4}": "./individual/534.html",
    "{5,3,5}": "./individual/535.html",
    "{5,3,6}": "./individual/536.html",
    "{6,3,3}": "./individual/633.html",
    "{6,3,4}": "./individual/634.html",
    "{6,3,5}": "./individual/635.html"
};

const specialLetter = {
    "{4,3,4}": "d",
    "{4,3,5}": "d",
    "{4,3,6}": "d",
    "{3,5,3}": "d",
    "{3,5,4}": "d",
    "{3,5,5}": "d",
    "{3,5,6}": "d",
    "{3,3,6}": "d",
    "{3,4,4}": "d",
    "{3,4,5}": "d",
    "{3,4,6}": "d",
    "{5,3,4}": "d",
    "{5,3,5}": "d",
    "{5,3,6}": "d",
    "{6,3,3}": "c",
    "{6,3,4}": "c",
    "{6,3,5}": "c"
};

const colour = {
    "{4,3,4}": "#27686A",
    "{4,3,5}": "#2D9A4D",
    "{4,3,6}": "#33CD31",
    "{3,5,3}": "#FA8607",
    "{3,5,4}": "#FA961B",
    "{3,5,5}": "#FCB033",
    "{3,5,6}": "#FECC51",
    "{3,3,6}": "#EC5064",
    "{3,4,4}": "#4949FF",
    "{3,4,5}": "#7879FF",
    "{3,4,6}": "#A3A3FF",
    "{5,3,4}": "#6A359C",
    "{5,3,5}": "#804FB3",
    "{5,3,6}": "#9969C7",
    "{6,3,3}": "#1F8276",
    "{6,3,4}": "#40BAA4",
    "{6,3,5}": "#9DDED6"
};

const order = {
    "{4,3,4}": 4,
    "{4,3,5}": 5,
    "{4,3,6}": 6,
    "{3,5,3}": 3,
    "{3,5,4}": 4,
    "{3,5,5}": 5,
    "{3,5,6}": 6,
    "{3,3,6}": 6,
    "{3,4,4}": 4,
    "{3,4,5}": 5,
    "{3,4,6}": 6,
    "{5,3,4}": 4,
    "{5,3,5}": 5,
    "{5,3,6}": 6,
    "{6,3,3}": 3,
    "{6,3,4}": 4,
    "{6,3,5}": 5
};

const numberOfFaces = {
    "{4,3,4}": 6,
    "{4,3,5}": 6,
    "{4,3,6}": 6,
    "{3,5,3}": 20,
    "{3,5,4}": 20,
    "{3,5,5}": 20,
    "{3,5,6}": 20,
    "{3,3,6}": 4,
    "{3,4,4}": 8,
    "{3,4,5}": 8,
    "{3,4,6}": 8,
    "{5,3,4}": 12,
    "{5,3,5}": 12,
    "{5,3,6}": 12,
    "{6,3,3}": 108,
    "{6,3,4}": 108,
    "{6,3,5}": 108
};

const metric = {
    "{4,3,4}": "euclidean",
    "{4,3,5}": "hyperbolic",
    "{4,3,6}": "hyperbolic",
    "{3,5,3}": "hyperbolic",
    "{3,5,4}": "hyperbolic",
    "{3,5,5}": "hyperbolic",
    "{3,5,6}": "hyperbolic",
    "{3,3,6}": "hyperbolic",
    "{3,4,4}": "hyperbolic",
    "{3,4,5}": "hyperbolic",
    "{3,4,6}": "hyperbolic",
    "{5,3,4}": "hyperbolic",
    "{5,3,5}": "hyperbolic",
    "{5,3,6}": "hyperbolic",
    "{6,3,3}": "hyperbolic",
    "{6,3,4}": "hyperbolic",
    "{6,3,5}": "hyperbolic"
};

const compact = {
    "{4,3,4}": "",
    "{4,3,5}": "compact",
    "{4,3,6}": "paracompact",
    "{3,5,3}": "compact",
    "{3,5,4}": "uncompact",
    "{3,5,5}": "uncompact",
    "{3,5,6}": "uncompact",
    "{3,3,6}": "paracompact",
    "{3,4,4}": "paracompact",
    "{3,4,5}": "uncompact",
    "{3,4,6}": "uncompact",
    "{5,3,4}": "compact",
    "{5,3,5}": "compact",
    "{5,3,6}": "paracompact",
    "{6,3,3}": "compact",
    "{6,3,4}": "compact",
    "{6,3,5}": "compact"
};

const geometry = {
    "{4,3,4}": "{4,3}",
    "{4,3,5}": "{4,3}",
    "{4,3,6}": "{4,3}",
    "{3,5,3}": "{3,5}",
    "{3,5,4}": "{3,5}",
    "{3,5,5}": "{3,5}",
    "{3,5,6}": "{3,5}",
    "{3,3,6}": "{3,3}",
    "{3,4,4}": "{3,4}",
    "{3,4,5}": "{3,4}",
    "{3,4,6}": "{3,4}",
    "{5,3,4}": "{5,3}",
    "{5,3,5}": "{5,3}",
    "{5,3,6}": "{5,3}",
    "{6,3,3}": "{6,3}",
    "{6,3,4}": "{6,3}",
    "{6,3,5}": "{6,3}"
};


const individualDefinition = 4;
const mainDefinition = 3;
const groupRadius = 7;

const names = [
    "{4,3,4}",
    "{4,3,5}",
    "{4,3,6}",
    "{3,5,3}",
    "{3,5,4}",
    "{3,5,5}",
    "{3,5,6}",
    "{3,3,6}",
    "{3,4,4}",
    "{3,4,5}",
    "{3,4,6}",
    "{5,3,4}",
    "{5,3,5}",
    "{5,3,6}",
    "{6,3,3}",
    "{6,3,4}",
    "{6,3,5}"
]


export {
    rotatePositions,
    shapeLinks,
    individualDefinition,
    mainDefinition,
    specialLetter,
    colour,
    order,
    numberOfFaces,
    names,
    metric,
    compact,
    geometry,
    groupRadius
};
