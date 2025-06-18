function format(data, type) {
    if (type === "number") {
        format = function(data) {
            return Number(data);
        };
    } else if (type === "string") {
        format = function(data) {
            return String(data);
        };
    } else if (type === "boolean") {
        format = function(data) {
            return Boolean(data);
        };
    }
    return format(data);
}
