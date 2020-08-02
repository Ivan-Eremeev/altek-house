const smartgrid = require('smart-grid');
const settings = {
    filename: "smart-grid",
    outputStyle: "less",
    columns: 12,
    offset: "2%",
    mobileFirst: false,
    container: {
        maxWidth: "980px",
        fields: "20px"
    },
    breakPoints: {
        lg: {
            width: "980px"
        },
        sm: {
            width: "720px",
            fields: "15px"
        },
        xs: {
            width: "576px"
        }
    },
    mixinNames: {
        container: "wrapper",
        row: "row-flex",
        rowFloat: "row-float",
        rowInlineBlock: "row-ib",
        rowOffsets: "row-offsets",
        column: "col",
        size: "size",
        columnFloat: "col-float",
        columnInlineBlock: "col-ib",
        columnPadding: "col-padding",
        columnOffsets: "col-offsets",
        shift: "shift",
        from: "from",
        to: "to",
        fromTo: "from-to",
        reset: "reset",
        clearfix: "clearfix",
        debug: "debug"
    },
    tab: "    ",
    defaultMediaDevice: "screen",
    detailedCalc: false
};
smartgrid('./src/styles', settings);