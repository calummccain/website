// Order n hexagonal


const vertices = [
    [238.75, 317, -11, -8], [205, 272, -11, -7], [175.75, 233, -11, -6],
    [151, 200, -11, -5], [130.75, 173, -11, -4], [115, 152, -11, -3],
    [103.75, 137, -11, -2], [97, 128, -11, -1], [94.75, 125, -11, 0],
    [97, 128, -11, 1], [103.75, 137, -11, 2], [115, 152, -11, 3],
    [130.75, 173, -11, 4], [151, 200, -11, 5], [175.75, 233, -11, 6],
    [205, 272, -11, 7], [238.75, 317, -11, 8], [223, 296, -10, -8],
    [189.25, 251, -10, -7], [160, 212, -10, -6], [135.25, 179, -10, -5],
    [115, 152, -10, -4], [99.25, 131, -10, -3], [88, 116, -10, -2],
    [81.25, 107, -10, -1], [79, 104, -10, 0], [81.25, 107, -10, 1],
    [88, 116, -10, 2], [99.25, 131, -10, 3], [115, 152, -10, 4],
    [135.25, 179, -10, 5], [160, 212, -10, 6], [189.25, 251, -10, 7],
    [223, 296, -10, 8], [196, 260, -8, -8], [162.25, 215, -8, -7],
    [133, 176, -8, -6], [108.25, 143, -8, -5], [88, 116, -8, -4],
    [72.25, 95, -8, -3], [61, 80, -8, -2], [54.25, 71, -8, -1],
    [52, 68, -8, 0], [54.25, 71, -8, 1], [61, 80, -8, 2],
    [72.25, 95, -8, 3], [88, 116, -8, 4], [108.25, 143, -8, 5],
    [133, 176, -8, 6], [162.25, 215, -8, 7], [196, 260, -8, 8],
    [184.75, 245, -7, -8], [151, 200, -7, -7], [121.75, 161, -7, -6],
    [97, 128, -7, -5], [76.75, 101, -7, -4], [61, 80, -7, -3],
    [49.75, 65, -7, -2], [43, 56, -7, -1], [40.75, 53, -7, 0],
    [43, 56, -7, 1], [49.75, 65, -7, 2], [61, 80, -7, 3],
    [76.75, 101, -7, 4], [97, 128, -7, 5], [121.75, 161, -7, 6],
    [151, 200, -7, 7], [184.75, 245, -7, 8], [166.75, 221, -5, -8],
    [133, 176, -5, -7], [103.75, 137, -5, -6], [79, 104, -5, -5],
    [58.75, 77, -5, -4], [43, 56, -5, -3], [31.75, 41, -5, -2],
    [25, 32, -5, -1], [22.75, 29, -5, 0], [25, 32, -5, 1],
    [31.75, 41, -5, 2], [43, 56, -5, 3], [58.75, 77, -5, 4],
    [79, 104, -5, 5], [103.75, 137, -5, 6], [133, 176, -5, 7],
    [166.75, 221, -5, 8], [160, 212, -4, -8], [126.25, 167, -4, -7],
    [97, 128, -4, -6], [72.25, 95, -4, -5], [52, 68, -4, -4],
    [36.25, 47, -4, -3], [25, 32, -4, -2], [18.25, 23, -4, -1],
    [16, 20, -4, 0], [18.25, 23, -4, 1], [25, 32, -4, 2],
    [36.25, 47, -4, 3], [52, 68, -4, 4], [72.25, 95, -4, 5],
    [97, 128, -4, 6], [126.25, 167, -4, 7], [160, 212, -4, 8],
    [151, 200, -2, -8], [117.25, 155, -2, -7], [88, 116, -2, -6],
    [63.25, 83, -2, -5], [43, 56, -2, -4], [27.25, 35, -2, -3],
    [16, 20, -2, -2], [9.25, 11, -2, -1], [7, 8, -2, 0],
    [9.25, 11, -2, 1], [16, 20, -2, 2], [27.25, 35, -2, 3],
    [43, 56, -2, 4], [63.25, 83, -2, 5], [88, 116, -2, 6],
    [117.25, 155, -2, 7], [151, 200, -2, 8], [148.75, 197, -1, -8],
    [115, 152, -1, -7], [85.75, 113, -1, -6], [61, 80, -1, -5],
    [40.75, 53, -1, -4], [25, 32, -1, -3], [13.75, 17, -1, -2],
    [7, 8, -1, -1], [4.75, 5, -1, 0], [7, 8, -1, 1],
    [13.75, 17, -1, 2], [25, 32, -1, 3], [40.75, 53, -1, 4],
    [61, 80, -1, 5], [85.75, 113, -1, 6], [115, 152, -1, 7],
    [148.75, 197, -1, 8], [148.75, 197, 1, -8], [115, 152, 1, -7],
    [85.75, 113, 1, -6], [61, 80, 1, -5], [40.75, 53, 1, -4],
    [25, 32, 1, -3], [13.75, 17, 1, -2], [7, 8, 1, -1],
    [4.75, 5, 1, 0], [7, 8, 1, 1], [13.75, 17, 1, 2],
    [25, 32, 1, 3], [40.75, 53, 1, 4], [61, 80, 1, 5],
    [85.75, 113, 1, 6], [115, 152, 1, 7], [148.75, 197, 1, 8],
    [151, 200, 2, -8], [117.25, 155, 2, -7], [88, 116, 2, -6],
    [63.25, 83, 2, -5], [43, 56, 2, -4], [27.25, 35, 2, -3],
    [16, 20, 2, -2], [9.25, 11, 2, -1], [7, 8, 2, 0],
    [9.25, 11, 2, 1], [16, 20, 2, 2], [27.25, 35, 2, 3],
    [43, 56, 2, 4], [63.25, 83, 2, 5], [88, 116, 2, 6],
    [117.25, 155, 2, 7], [151, 200, 2, 8], [160, 212, 4, -8],
    [126.25, 167, 4, -7], [97, 128, 4, -6], [72.25, 95, 4, -5],
    [52, 68, 4, -4], [36.25, 47, 4, -3], [25, 32, 4, -2],
    [18.25, 23, 4, -1], [16, 20, 4, 0], [18.25, 23, 4, 1],
    [25, 32, 4, 2], [36.25, 47, 4, 3], [52, 68, 4, 4],
    [72.25, 95, 4, 5], [97, 128, 4, 6], [126.25, 167, 4, 7],
    [160, 212, 4, 8], [166.75, 221, 5, -8], [133, 176, 5, -7],
    [103.75, 137, 5, -6], [79, 104, 5, -5], [58.75, 77, 5, -4],
    [43, 56, 5, -3], [31.75, 41, 5, -2], [25, 32, 5, -1],
    [22.75, 29, 5, 0], [25, 32, 5, 1], [31.75, 41, 5, 2],
    [43, 56, 5, 3], [58.75, 77, 5, 4], [79, 104, 5, 5],
    [103.75, 137, 5, 6], [133, 176, 5, 7], [166.75, 221, 5, 8],
    [184.75, 245, 7, -8], [151, 200, 7, -7], [121.75, 161, 7, -6],
    [97, 128, 7, -5], [76.75, 101, 7, -4], [61, 80, 7, -3],
    [49.75, 65, 7, -2], [43, 56, 7, -1], [40.75, 53, 7, 0],
    [43, 56, 7, 1], [49.75, 65, 7, 2], [61, 80, 7, 3],
    [76.75, 101, 7, 4], [97, 128, 7, 5], [121.75, 161, 7, 6],
    [151, 200, 7, 7], [184.75, 245, 7, 8], [196, 260, 8, -8],
    [162.25, 215, 8, -7], [133, 176, 8, -6], [108.25, 143, 8, -5],
    [88, 116, 8, -4], [72.25, 95, 8, -3], [61, 80, 8, -2],
    [54.25, 71, 8, -1], [52, 68, 8, 0], [54.25, 71, 8, 1],
    [61, 80, 8, 2], [72.25, 95, 8, 3], [88, 116, 8, 4],
    [108.25, 143, 8, 5], [133, 176, 8, 6], [162.25, 215, 8, 7],
    [196, 260, 8, 8], [223, 296, 10, -8], [189.25, 251, 10, -7],
    [160, 212, 10, -6], [135.25, 179, 10, -5], [115, 152, 10, -4],
    [99.25, 131, 10, -3], [88, 116, 10, -2], [81.25, 107, 10, -1],
    [79, 104, 10, 0], [81.25, 107, 10, 1], [88, 116, 10, 2],
    [99.25, 131, 10, 3], [115, 152, 10, 4], [135.25, 179, 10, 5],
    [160, 212, 10, 6], [189.25, 251, 10, 7], [223, 296, 10, 8],
    [238.75, 317, 11, -8], [205, 272, 11, -7], [175.75, 233, 11, -6],
    [151, 200, 11, -5], [130.75, 173, 11, -4], [115, 152, 11, -3],
    [103.75, 137, 11, -2], [97, 128, 11, -1], [94.75, 125, 11, 0],
    [97, 128, 11, 1], [103.75, 137, 11, 2], [115, 152, 11, 3],
    [130.75, 173, 11, 4], [151, 200, 11, 5], [175.75, 233, 11, 6],
    [205, 272, 11, 7], [238.75, 317, 11, 8], [274.75, 365, 13, -8],
    [241, 320, 13, -7], [211.75, 281, 13, -6], [187, 248, 13, -5],
    [166.75, 221, 13, -4], [151, 200, 13, -3], [139.75, 185, 13, -2],
    [133, 176, 13, -1], [130.75, 173, 13, 0], [133, 176, 13, 1],
    [139.75, 185, 13, 2], [151, 200, 13, 3], [166.75, 221, 13, 4],
    [187, 248, 13, 5], [211.75, 281, 13, 6], [241, 320, 13, 7],
    [274.75, 365, 13, 8], [295, 392, 14, -8], [261.25, 347, 14, -7],
    [232, 308, 14, -6], [207.25, 275, 14, -5], [187, 248, 14, -4],
    [171.25, 227, 14, -3], [160, 212, 14, -2], [153.25, 203, 14, -1],
    [151, 200, 14, 0], [153.25, 203, 14, 1], [160, 212, 14, 2], [171.25, 227, 14, 3],
    [187, 248, 14, 4], [207.25, 275, 14, 5], [232, 308, 14, 6], [261.25, 347, 14, 7],
    [295, 392, 14, 8]
];


const faces = [
    [161, 145, 128, 110, 126, 143],
    [196, 180, 163, 145, 161, 178],
    [194, 178, 161, 143, 159, 176],
    [163, 147, 130, 112, 128, 145],
    [159, 143, 126, 108, 124, 141],
    [128, 112, 95, 77, 93, 110],
    [229, 213, 196, 178, 194, 211],
    [126, 110, 93, 75, 91, 108],
    [198, 182, 165, 147, 163, 180],
    [231, 215, 198, 180, 196, 213],
    [192, 176, 159, 141, 157, 174],
    [227, 211, 194, 176, 192, 209],
    [130, 114, 97, 79, 95, 112],
    [165, 149, 132, 114, 130, 147],
    [124, 108, 91, 73, 89, 106],
    [157, 141, 124, 106, 122, 139],
    [93, 77, 60, 42, 58, 75],
    [264, 248, 231, 213, 229, 246],
    [95, 79, 62, 44, 60, 77],
    [262, 246, 229, 211, 227, 244],
    [233, 217, 200, 182, 198, 215],
    [91, 75, 58, 40, 56, 73],
    [200, 184, 167, 149, 165, 182],
    [225, 209, 192, 174, 190, 207],
    [266, 250, 233, 215, 231, 248],
    [190, 174, 157, 139, 155, 172],
    [132, 116, 99, 81, 97, 114],
    [260, 244, 227, 209, 225, 242],
    [97, 81, 64, 46, 62, 79],
    [122, 106, 89, 71, 87, 104],
    [167, 151, 134, 116, 132, 149],
    [89, 73, 56, 38, 54, 71],
    [60, 44, 27, 9, 25, 42],
    [297, 281, 264, 246, 262, 279],
    [155, 139, 122, 104, 120, 137],
    [58, 42, 25, 7, 23, 40],
    [299, 283, 266, 248, 264, 281],
    [235, 219, 202, 184, 200, 217],
    [62, 46, 29, 11, 27, 44],
    [295, 279, 262, 244, 260, 277],
    [268, 252, 235, 217, 233, 250],
    [223, 207, 190, 172, 188, 205],
    [56, 40, 23, 5, 21, 38],
    [202, 186, 169, 151, 167, 184],
    [258, 242, 225, 207, 223, 240],
    [99, 83, 66, 48, 64, 81],
    [301, 285, 268, 250, 266, 283],
    [188, 172, 155, 137, 153, 170],
    [134, 118, 101, 83, 99, 116],
    [87, 71, 54, 36, 52, 69],
    [293, 277, 260, 242, 258, 275],
    [64, 48, 31, 13, 29, 46],
    [120, 104, 87, 69, 85, 102],
    [54, 38, 21, 3, 19, 36],
    [270, 254, 237, 219, 235, 252],
    [256, 240, 223, 205, 221, 238],
    [303, 287, 270, 252, 268, 285],
    [291, 275, 258, 240, 256, 273],
    [66, 50, 33, 15, 31, 48],
    [52, 36, 19, 1, 17, 34]
];


// cfe
function a(v) {

    return [v[0], v[1], (v[2] + 3 * v[3]) / 2, (v[2] - v[3]) / 2];

}


//cfv
function b(v) {

    return [v[0], v[1], v[2], -v[3]];

}


//fev
function c(v) {

    return [v[0], -v[1], v[2], v[3]];

}


//cev
function d(n, v) {

    if (n == 6) {

        var c = 3 / 4;

    } else {

        var c = Math.cos(Math.PI / n) ** 2;

    }

    return [
        (1 + 2 * c) * v[0] - 2 * (c ** 2) * v[1] - c * v[2] - c * v[3],
        2 * v[0] + (1 - 2 * c) * v[1] - v[2] - v[3],
        3 * v[0] - 3 * c * v[1] - v[2] / 2 - 3 * v[3] / 2,
        v[0] - c * v[1] - v[2] / 2 + v[3] / 2
    ];

}


function e(v) {

    return [v[0], v[1], v[2], v[3]];

}


function f(n, v) {

    if (n == 6) {

        return [
            Math.sqrt(3) * v[0],
            Math.sqrt(27 / 16) * v[1],
            Math.sqrt(3 / 4) * v[2],
            Math.sqrt(9 / 4) * v[3]
        ];

    } else {

        const c = Math.cos(Math.PI / n) ** 2;
        const den = Math.sqrt(Math.abs(3 - 4 * c));

        return [
            Math.sqrt(3) * v[0] / den,
            Math.sqrt(3) * c * v[1] / den,
            Math.sqrt(c) * v[2] / den,
            Math.sqrt(3 * c) * v[3] / den
        ];

    }

}

function matrixDict(order, letter, vector) {

    var newVector;

    switch (letter) {
        case 'a':
            newVector = a(vector);
            break;
        case 'b':
            newVector = b(vector);
            break;
        case 'c':
            newVector = c(vector);
            break;
        case 'd':
            newVector = d(order, vector);
            break;
        case 'e':
            newVector = e(vector);
            break;
        case 'f':
            newVector = f(order, vector);
            break;
    }

    return newVector;

}


const faceReflections = [
    '',
    'd',
    'bd',
    'abd',
    'babd',
    'ababd',
    'dbabd',
    'bababd',
    'dababd',
    'dbababd',
    'bdababd',
    'bdbababd',
    'abdababd',
    'abdbababd',
    'babdababd',
    'babdbababd',
    'ababdababd',
    'dbabdababd',
    'ababdbababd',
    'dbabdbababd',
    'dababdababd',
    'bababdbababd',
    'dababdbababd',
    'bdababdababd',
    'dbababdbababd',
    'bdababdbababd',
    'abdababdababd',
    'bdbababdbababd',
    'abdababdbababd',
    'babdababdababd',
    'abdbababdbababd',
    'babdababdbababd',
    'ababdababdababd',
    'dbabdababdababd',
    'babdbababdbababd',
    'ababdababdbababd',
    'dbabdababdbababd',
    'dababdababdababd',
    'ababdbababdbababd',
    'dbabdbababdbababd',
    'dababdababdbababd',
    'bdababdababdababd',
    'bababdbababdbababd',
    'dababdbababdbababd',
    'bdababdababdbababd',
    'abdababdababdababd',
    'dbababdbababdbababd',
    'bdababdbababdbababd',
    'abdababdababdbababd',
    'babdababdababdababd',
    'bdbababdbababdbababd',
    'abdababdbababdbababd',
    'babdababdababdbababd',
    'babdababdbababdbababd',
    'dababdababdababdababd',
    'bdababdababdababdababd',
    'dababdababdbababdbababd',
    'bdababdababdbababdbababd',
    'abdababdababdababdbababd',
    'babdababdababdababdbababd'
];


function conversion(n, v) {

    var c = Math.cos(Math.PI / n) ** 2;
    return [1 + c * (v[1] - 8) / 6, (v[1] - 8) / 6, v[2], v[3]];

}


const center = [1, 1, 0, 0];


function face(n) {

    if (n == 6) {

        return [1, 0, 0, 0];

    } else {

        var c = Math.cos(Math.PI / n) ** 2;
        return [Math.sqrt(Math.abs(1 - 4 * c / 3)), 0, 0, 0];

    }

};

export { vertices, faces, a, b, c, d, e, f, matrixDict, faceReflections, center, face, conversion };

// const numOfPoints = 4;

// function generatePoints(n) {

//     if (n == 6) {

//         var c = 3 / 4;

//     } else {

//         var c = Math.cos(Math.PI / n) ** 2;

//     }

//     var vertices = [];

//     for (var i = 1 - 3 * numOfPoints; i <= 3 * numOfPoints + 2; i++) {

//         for (var j = -2 * numOfPoints; j <= 2 * numOfPoints; j++) {

//             if (i % 3 != 0) {

//                 const x = i ** 2 + 3 * j ** 2 + 4;
//                 vertices.push([1 + c * x, x, i, j]);

//             }

//         }

//     }

//     return vertices;

// }

// function generateFaces(n, number) {
//     var faces = [];
//     var names = [""];
//     const eps = 1e-5;

//     faces.push(face(n));

//     function isIn(v) {
//         for (var i = 0; i < faces.length; i++) {
//             if (
//                 (Math.abs(v[0] - faces[i][0]) < eps) &&
//                 (Math.abs(v[1] - faces[i][1]) < eps) &&
//                 (Math.abs(v[2] - faces[i][2]) < eps) &&
//                 (Math.abs(v[3] - faces[i][3]) < eps)
//             ) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     var i = 1;
//     while (i <= number) {
//         for (var j = 0; j < i; j++) {
//             if (!isIn(a(faces[j]))) {
//                 faces.push(a(faces[j]));
//                 names.push("a" + names[j]);
//             }
//             if (!isIn(b(faces[j]))) {
//                 faces.push(b(faces[j]));
//                 names.push("b" + names[j]);
//             }
//             if (!isIn(d(n, faces[j]))) {
//                 faces.push(d(n, faces[j]));
//                 names.push("d" + names[j]);
//             }
//         }
//         i = names.length;

//     }
//     return [names, faces];

// }

// var points = generatePoints(6);
// //console.log(points.slice(0, 99));
// //console.log(points.slice(99, 198));
// //console.log(points.slice(198, 297));
// //console.log(points.slice(297));
// var [names, centers] = generateFaces(6, 200);
// //console.log(names, centers)

// function generateFaceVertex() {
//     var grouping = [];
//     var newNames = [];
//     for (var i = 0; i < centers.length; i++) {
//         var corners = [];
//         for (var j = 0; j < points.length; j++) {
//             if (Math.abs(points[j][2] - centers[i][2]) + Math.abs(points[j][3] - centers[i][3]) == 2) {
//                 corners.push(j);
//             }
//         }

//         if (corners.length == 6) {
//             console.log(i, centers[i], corners);
//             corners.forEach((elem) => { console.log(elem, points[elem]) });
//             grouping.push(corners);
//             newNames.push(names[i]);
//         }
//     }

//     return [grouping, newNames];
// }

// var fauxFaces = generateFaceVertex();
// console.log(fauxFaces[1])


// function tidyFaces() {
//     var tidy = [];
//     faces.forEach((face) => {
//         console.log(face)
//         var newList = [0, 0, 0, 0, 0, 0];
//         var v1 = vertices[face[0]], v2 = vertices[face[1]], v3 = vertices[face[2]], v4 = vertices[face[3]], v5 = vertices[face[4]], v6 = vertices[face[5]];
//         var v = [v1, v2, v3, v4, v5, v6];
//         var cx = (v1[2] + v2[2] + v3[2] + v4[2] + v5[2] + v6[2]) / 6;
//         var cy = (v1[3] + v2[3] + v3[3] + v4[3] + v5[3] + v6[3]) / 6;
//         for (var i = 0; i < 6; i++) {
//             if (v[i][2] - cx == 2) {
//                 newList[0] = face[i];
//             } else if (v[i][2] - cx == -2) {
//                 newList[3] = face[i];
//             } else if (v[i][2] - cx == 1) {
//                 if (v[i][3] - cy == 1) {
//                     newList[1] = face[i];
//                 } else {
//                     newList[5] = face[i];
//                 }
//             } else if (v[i][2] - cx == -1) {
//                 if (v[i][3] - cy == 1) {
//                     newList[2] = face[i];
//                 } else {
//                     newList[4] = face[i];
//                 }
//             }
//         }
//         tidy.push(newList);

//     })
//     return tidy;
// }

// console.log(tidyFaces());