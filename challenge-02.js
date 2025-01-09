function createFrame(names) {
    // Find the longest name
    var width = Math.max.apply(Math, names.map(function (name) { return name.length; })) + 4;
    // Create borderY
    var borderY = '*'.repeat(width);
    // Create mask of names
    var wrapppedNames = names.map(function (name) { return "* ".concat(name.padEnd(width - 4), " *"); });
    // Create frame
    return "".concat(borderY, "\n").concat(wrapppedNames.join('\n'), "\n").concat(borderY);
}
console.log(createFrame(['AA', 'BBBBB', 'CCC']));
