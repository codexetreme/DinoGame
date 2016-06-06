var Resources = (function () {
    function Resources() {
    }
    Resources.getInstance = function () {
        return this.mInstance;
    };
    Resources.mInstance = new Resources();
    return Resources;
}());
//# sourceMappingURL=Resources.js.map