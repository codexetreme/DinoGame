class gameResources {

    private static mInstance = new gameResources();

    DinoImagePath: string = "Resources/dinoImage.png";
    TreeImagePath: string = "Resources/treeImage.png";
    // colors
    ScoreTextColor: string = "#40d291";
    ScoreFont: string = "Comic Sans MS";
    GameObjects: Array<GameObject> = new Array();
    Rigidbodies: Array<Rigidbody> = new Array();
    keysDown: boolean[];

    jumpKey: boolean = false;


    static getInstance() {

        return this.mInstance;
    }




}