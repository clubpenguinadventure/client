import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint } from '@components/components'

import IglooMap from './igloo_map/IglooMap'


export const preload = {
    key: 'map-pack',
    url: 'assets/media/interface/game/map/map-pack.json',
    loadString: ['loading', 'map'],
    unload: false
}

/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.mtn;
        /** @type {Phaser.GameObjects.Image} */
        this.beach;
        /** @type {Phaser.GameObjects.Image} */
        this.dock;
        /** @type {Phaser.GameObjects.Image} */
        this.town;
        /** @type {Phaser.GameObjects.Image} */
        this.forts;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo;
        /** @type {Phaser.GameObjects.Image} */
        this.plaza;
        /** @type {Phaser.GameObjects.Image} */
        this.rink;
        /** @type {Phaser.GameObjects.Image} */
        this.forest;
        /** @type {Phaser.GameObjects.Image} */
        this.cove;
        /** @type {Phaser.GameObjects.Image} */
        this.mine;
        /** @type {Phaser.GameObjects.Image} */
        this.village;
        /** @type {IglooMap} */
        this.iglooMap;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, -9, "map", "bg");
        bg.setOrigin(0.5, 0.5007429420505201);
        this.add(bg);

        // mtn
        const mtn = scene.add.image(-391, -112, "map", "mtnbtn");
        mtn.alpha = 0.001;
        mtn.alphaTopLeft = 0.001;
        mtn.alphaTopRight = 0.001;
        mtn.alphaBottomLeft = 0.001;
        mtn.alphaBottomRight = 0.001;
        this.add(mtn);

        // beach
        const beach = scene.add.image(-625, 101, "map", "lightbtn");
        beach.scaleX = 0.906578947;
        beach.scaleY = 0.906578947;
        beach.alpha = 0.001;
        beach.alphaTopLeft = 0.001;
        beach.alphaTopRight = 0.001;
        beach.alphaBottomLeft = 0.001;
        beach.alphaBottomRight = 0.001;
        this.add(beach);

        // dock
        const dock = scene.add.image(-416, 274, "map", "dockbtn");
        dock.scaleX = 0.906578947;
        dock.scaleY = 0.906578947;
        dock.setOrigin(0.5, 0.5037037037037037);
        dock.alpha = 0.001;
        dock.alphaTopLeft = 0.001;
        dock.alphaTopRight = 0.001;
        dock.alphaBottomLeft = 0.001;
        dock.alphaBottomRight = 0.001;
        this.add(dock);

        // town
        const town = scene.add.image(-170, 75, "map", "townbtn");
        town.scaleX = 0.906578947;
        town.scaleY = 0.906578947;
        town.alpha = 0.001;
        town.alphaTopLeft = 0.001;
        town.alphaTopRight = 0.001;
        town.alphaBottomLeft = 0.001;
        town.alphaBottomRight = 0.001;
        this.add(town);

        // forts
        const forts = scene.add.image(12, 21, "map", "fortsbtn");
        forts.scaleX = 0.906578947;
        forts.scaleY = 0.906578947;
        forts.setOrigin(0.5045045045045045, 0.5045871559633027);
        forts.alpha = 0.001;
        forts.alphaTopLeft = 0.001;
        forts.alphaTopRight = 0.001;
        forts.alphaBottomLeft = 0.001;
        forts.alphaBottomRight = 0.001;
        this.add(forts);

        // igloo
        const igloo = scene.add.image(-152, 209, "map", "igloosbtn");
        igloo.scaleX = 0.906578947;
        igloo.scaleY = 0.906578947;
        igloo.alpha = 0.001;
        igloo.alphaTopLeft = 0.001;
        igloo.alphaTopRight = 0.001;
        igloo.alphaBottomLeft = 0.001;
        igloo.alphaBottomRight = 0.001;
        this.add(igloo);

        // plaza
        const plaza = scene.add.image(218, 48, "map", "plazabtn");
        plaza.scaleX = 0.906578947;
        plaza.scaleY = 0.906578947;
        plaza.setOrigin(0.5, 0.5038167938931297);
        plaza.alpha = 0.001;
        plaza.alphaTopLeft = 0.001;
        plaza.alphaTopRight = 0.001;
        plaza.alphaBottomLeft = 0.001;
        plaza.alphaBottomRight = 0.001;
        this.add(plaza);

        // rink
        const rink = scene.add.image(-90, -60, "map", "rinkbtn");
        rink.setOrigin(0.5023041474654378, 0.5);
        rink.alpha = 0.001;
        rink.alphaTopLeft = 0.001;
        rink.alphaTopRight = 0.001;
        rink.alphaBottomLeft = 0.001;
        rink.alphaBottomRight = 0.001;
        this.add(rink);

        // forest
        const forest = scene.add.image(385, 130, "map", "forestbtn");
        forest.scaleX = 0.906578947;
        forest.scaleY = 0.906578947;
        forest.setOrigin(0.5027027027027027, 0.5057471264367817);
        forest.alpha = 0.001;
        forest.alphaTopLeft = 0.001;
        forest.alphaTopRight = 0.001;
        forest.alphaBottomLeft = 0.001;
        forest.alphaBottomRight = 0.001;
        this.add(forest);

        // cove
        const cove = scene.add.image(599, 144, "map", "covebtn");
        cove.scaleX = 0.906578947;
        cove.scaleY = 0.906578947;
        cove.setOrigin(0.5, 0.5058823529411764);
        cove.alpha = 0.001;
        cove.alphaTopLeft = 0.001;
        cove.alphaTopRight = 0.001;
        cove.alphaBottomLeft = 0.001;
        cove.alphaBottomRight = 0.001;
        this.add(cove);

        // mine
        const mine = scene.add.image(387, -32, "map", "shackbtn");
        mine.scaleX = 0.906578947;
        mine.scaleY = 0.906578947;
        mine.setOrigin(0.5042016806722689, 0.5);
        mine.alpha = 0.001;
        mine.alphaTopLeft = 0.001;
        mine.alphaTopRight = 0.001;
        mine.alphaBottomLeft = 0.001;
        mine.alphaBottomRight = 0.001;
        this.add(mine);

        // places
        const places = scene.add.image(2, -8, "map", "places");
        places.setOrigin(0.5, 0.5007429420505201);
        this.add(places);

        // tree
        const tree = scene.add.image(-515.5, -18.25, "map", "tree");
        this.add(tree);

        // village
        const village = scene.add.image(-343, -26, "map", "villagebtn");
        village.scaleX = 0.906578947;
        village.scaleY = 0.906578947;
        village.setOrigin(0.503030303030303, 0.5041322314049587);
        village.alpha = 0.001;
        village.alphaTopLeft = 0.001;
        village.alphaTopRight = 0.001;
        village.alphaBottomLeft = 0.001;
        village.alphaBottomRight = 0.001;
        this.add(village);

        // villageicon
        const villageicon = scene.add.image(-343, -26, "map", "village");
        villageicon.scaleX = 0.906578947;
        villageicon.scaleY = 0.906578947;
        villageicon.setOrigin(0.503030303030303, 0.5041322314049587);
        this.add(villageicon);

        // berg
        const berg = scene.add.image(608, -67, "map", "berg");
        berg.scaleX = 0.906578947;
        berg.scaleY = 0.906578947;
        this.add(berg);

        // note
        const note = scene.add.image(586, 364, "map", "note");
        note.setOrigin(0.5017667844522968, 0.5);
        this.add(note);

        // grey_button
        const grey_button = scene.add.image(657, -410, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(657, -412, "main", "grey-x");
        this.add(grey_x);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // block (components)
        new Interactive(block);

        // bg (components)
        new Interactive(bg);

        // mtn (components)
        const mtnButton = new Button(mtn);
        mtnButton.hoverCallback = () => this.onRoomOver(this.mtn);
        mtnButton.hoverOutCallback = () => this.onRoomOut(this.mtn);
        mtnButton.callback = () => this.onRoomClick(230);
        mtnButton.activeFrame = false;
        mtnButton.pixelPerfect = true;
        const mtnShowHint = new ShowHint(mtn);
        mtnShowHint.text = "mtn_hint";

        // beach (components)
        const beachButton = new Button(beach);
        beachButton.hoverCallback = () => this.onRoomOver(this.beach);
        beachButton.hoverOutCallback = () => this.onRoomOut(this.beach);
        beachButton.callback = () => this.onRoomClick(400);
        beachButton.activeFrame = false;
        beachButton.pixelPerfect = true;
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "beach_hint";

        // dock (components)
        const dockButton = new Button(dock);
        dockButton.hoverCallback = () => this.onRoomOver(this.dock);
        dockButton.hoverOutCallback = () => this.onRoomOut(this.dock);
        dockButton.callback = () => this.onRoomClick(800);
        dockButton.activeFrame = false;
        dockButton.pixelPerfect = true;
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "dock_hint";

        // town (components)
        const townButton = new Button(town);
        townButton.hoverCallback = () => this.onRoomOver(this.town);
        townButton.hoverOutCallback = () => this.onRoomOut(this.town);
        townButton.callback = () => this.onRoomClick(100);
        townButton.activeFrame = false;
        townButton.pixelPerfect = true;
        const townShowHint = new ShowHint(town);
        townShowHint.text = "town_hint";

        // forts (components)
        const fortsButton = new Button(forts);
        fortsButton.hoverCallback = () => this.onRoomOver(this.forts);
        fortsButton.hoverOutCallback = () => this.onRoomOut(this.forts);
        fortsButton.callback = () => this.onRoomClick(801);
        fortsButton.activeFrame = false;
        fortsButton.pixelPerfect = true;
        const fortsShowHint = new ShowHint(forts);
        fortsShowHint.text = "forts_hint";

        // igloo (components)
        const iglooButton = new Button(igloo);
        iglooButton.hoverCallback = () => this.onRoomOver(this.igloo);
        iglooButton.hoverOutCallback = () => this.onRoomOut(this.igloo);
        iglooButton.callback = () => this.iglooMap.show();
        iglooButton.activeFrame = false;
        iglooButton.pixelPerfect = true;
        const iglooShowHint = new ShowHint(igloo);
        iglooShowHint.text = "igloos_hint";

        // plaza (components)
        const plazaButton = new Button(plaza);
        plazaButton.hoverCallback = () => this.onRoomOver(this.plaza);
        plazaButton.hoverOutCallback = () => this.onRoomOut(this.plaza);
        plazaButton.callback = () => this.onRoomClick(300);
        plazaButton.activeFrame = false;
        plazaButton.pixelPerfect = true;
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "plaza_hint";

        // rink (components)
        const rinkButton = new Button(rink);
        rinkButton.hoverCallback = () => this.onRoomOver(this.rink);
        rinkButton.hoverOutCallback = () => this.onRoomOut(this.rink);
        rinkButton.callback = () => this.onRoomClick(802);
        rinkButton.activeFrame = false;
        rinkButton.pixelPerfect = true;
        const rinkShowHint = new ShowHint(rink);
        rinkShowHint.text = "rink_hint";

        // forest (components)
        const forestButton = new Button(forest);
        forestButton.hoverCallback = () => this.onRoomOver(this.forest);
        forestButton.hoverOutCallback = () => this.onRoomOut(this.forest);
        forestButton.callback = () => this.onRoomClick(809);
        forestButton.activeFrame = false;
        forestButton.pixelPerfect = true;
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "forest_hint";

        // cove (components)
        const coveButton = new Button(cove);
        coveButton.hoverCallback = () => this.onRoomOver(this.cove);
        coveButton.hoverOutCallback = () => this.onRoomOut(this.cove);
        coveButton.callback = () => this.onRoomClick(810);
        coveButton.activeFrame = false;
        coveButton.pixelPerfect = true;
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "cove_hint";

        // mine (components)
        const mineButton = new Button(mine);
        mineButton.hoverCallback = () => this.onRoomOver(this.mine);
        mineButton.hoverOutCallback = () => this.onRoomOut(this.mine);
        mineButton.callback = () => this.onRoomClick(807);
        mineButton.activeFrame = false;
        mineButton.pixelPerfect = true;
        const mineShowHint = new ShowHint(mine);
        mineShowHint.text = "shack_hint";

        // village (components)
        const villageButton = new Button(village);
        villageButton.hoverCallback = () => this.onRoomOver(this.village);
        villageButton.hoverOutCallback = () => this.onRoomOut(this.village);
        villageButton.callback = () => this.onRoomClick(200);
        villageButton.activeFrame = false;
        villageButton.pixelPerfect = true;
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "village_hint";

        // berg (components)
        const bergButton = new Button(berg);
        bergButton.callback = () => this.onRoomClick(805);
        bergButton.activeFrame = false;

        // note (components)
        new Interactive(note);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.callback = () => { this.visible = false };

        this.mtn = mtn;
        this.beach = beach;
        this.dock = dock;
        this.town = town;
        this.forts = forts;
        this.igloo = igloo;
        this.plaza = plaza;
        this.rink = rink;
        this.forest = forest;
        this.cove = cove;
        this.mine = mine;
        this.village = village;
        this.iglooMap = iglooMap;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onRoomClick(id) {
        this.close()

        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    onRoomOver(sprite){
        sprite.alpha = 1
    }

    onRoomOut(sprite){
        sprite.alpha = 0.0001
    }

    close() {
        this.iglooMap.close()
        super.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
