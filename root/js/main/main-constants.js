function rotatePositions(s) {
    var posDict = {
        "{4,3,4}": [0, -s, 0],
        "{4,3,5}": [0, 0, 0],
        "{4,3,6}": [0, s, 0],
        "{3,5,3}": [s, 0, 0],
        "{3,5,4}": [s, s, 0],
        "{3,5,5}": [s, 2 * s, 0],
        "{3,3,6}": [2 * s, 0, 0],
        "{3,4,4}": [3 * s, 0, 0],
        "{5,3,4}": [4 * s, 0, 0],
        "{5,3,5}": [4 * s, s, 0],
        "{5,3,6}": [4 * s, 2 * s, 0],
        "{6,3,3}": [5 * s, 0, 0],
        "{6,3,4}": [5 * s, s, 0],
        "{6,3,5}": [5 * s, 2 * s, 0]
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
    "{3,3,6}": "./individual/336.html",
    "{3,4,4}": "./individual/344.html",
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
    "{3,3,6}": "d",
    "{3,4,4}": "d",
    "{5,3,4}": "d",
    "{5,3,5}": "d",
    "{5,3,6}": "d",
    "{6,3,3}": "c",
    "{6,3,4}": "c",
    "{6,3,5}": "c"
};

const colour = {
    "{4,3,4}": "#F48415",
    "{4,3,5}": "#F9A834",
    "{4,3,6}": "#FFD083",
    "{3,5,3}": "#C86218",
    "{3,5,4}": "#C86218",
    "{3,5,5}": "#C86218",
    "{3,3,6}": "#EC5064",
    "{3,4,4}": "#03919B",
    "{5,3,4}": "#007043",
    "{5,3,5}": "#B4CF68",
    "{5,3,6}": "#C0E490",
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
    "{3,3,6}": 6,
    "{3,4,4}": 4,
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
    "{3,3,6}": 4,
    "{3,4,4}": 8,
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
    "{3,3,6}": "hyperbolic",
    "{3,4,4}": "hyperbolic",
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
    "{3,3,6}": "paracompact",
    "{3,4,4}": "paracompact",
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
    "{3,3,6}": "{3,3}",
    "{3,4,4}": "{3,4}",
    "{5,3,4}": "{5,3}",
    "{5,3,5}": "{5,3}",
    "{5,3,6}": "{5,3}",
    "{6,3,3}": "{6,3}",
    "{6,3,4}": "{6,3}",
    "{6,3,5}": "{6,3}"
};


const individualDefinition = 2;
const mainDefinition = 3;

const names = [
    "{4,3,4}",
    "{4,3,5}",
    "{4,3,6}",
    "{3,5,3}",
    "{3,5,4}",
    "{3,5,5}",
    "{3,3,6}",
    "{3,4,4}",
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
    geometry
};
