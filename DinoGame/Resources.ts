class Resources {

    private static mInstance = new Resources();

    GameObjects: Array<GameObject>;
    


    static getInstance() {

        return this.mInstance;
    }




}