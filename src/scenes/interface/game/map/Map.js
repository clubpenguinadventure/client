import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint } from '@components/components'

import IglooMap from './igloo_map/IglooMap'


export const preload = {
    key: 'map-pack',
    url: `assets/media/interface/game/map/map-pack.json`,
    loadString: ['loading', 'map'],
    unload: false
}

/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.tint;
        /** @type {Phaser.GameObjects.Container} */
        this.places;
        /** @type {Phaser.GameObjects.Container} */
        this.shops;
        /** @type {Phaser.GameObjects.Container} */
        this.games;
        /** @type {Phaser.GameObjects.Container} */
        this.pets;
        /** @type {IglooMap} */
        this.iglooMap;


        // unselected
        const unselected = scene.add.container(-706, -233);
        this.add(unselected);

        // bg
        const bg = scene.add.image(706, 242, "map", "bg");
        bg.setOrigin(0.5, 0.5007429420505201);
        unselected.add(bg);

        // icons_unselected_dojo
        const icons_unselected_dojo = scene.add.image(855, 9, "map", "icons_unselected/dojo");
        unselected.add(icons_unselected_dojo);

        // bg_upper
        const bg_upper = scene.add.image(706, 242, "map", "bg_upper");
        unselected.add(bg_upper);

        // icons_unselected_berg
        const icons_unselected_berg = scene.add.image(1377, 147, "map", "icons_unselected/berg");
        unselected.add(icons_unselected_berg);

        // icons_unselected_cove
        const icons_unselected_cove = scene.add.image(1360, 371, "map", "icons_unselected/cove");
        unselected.add(icons_unselected_cove);

        // icons_unselected_dock
        const icons_unselected_dock = scene.add.image(242, 519, "map", "icons_unselected/dock");
        unselected.add(icons_unselected_dock);

        // icons_unselected_forest
        const icons_unselected_forest = scene.add.image(1127, 363, "map", "icons_unselected/forest");
        unselected.add(icons_unselected_forest);

        // icons_unselected_forts
        const icons_unselected_forts = scene.add.image(710, 241, "map", "icons_unselected/forts");
        unselected.add(icons_unselected_forts);

        // icons_unselected_igloos
        const icons_unselected_igloos = scene.add.image(539, 461, "map", "icons_unselected/igloos");
        unselected.add(icons_unselected_igloos);

        // icons_unselected_mtn
        const icons_unselected_mtn = scene.add.image(260, 93, "map", "icons_unselected/mtn");
        unselected.add(icons_unselected_mtn);

        // icons_unselected_plaza
        const icons_unselected_plaza = scene.add.image(940, 270, "map", "icons_unselected/plaza");
        unselected.add(icons_unselected_plaza);

        // icons_unselected_shack
        const icons_unselected_shack = scene.add.image(1158, 187, "map", "icons_unselected/shack");
        unselected.add(icons_unselected_shack);

        // snowmound
        const snowmound = scene.add.image(706, 242, "map", "snowmound");
        unselected.add(snowmound);

        // snowmound_centre
        const snowmound_centre = scene.add.image(706, 242, "map", "snowmound_centre");
        unselected.add(snowmound_centre);

        // snowmound_left
        const snowmound_left = scene.add.image(706, 242, "map", "snowmound_left");
        unselected.add(snowmound_left);

        // icons_unselected_beach
        const icons_unselected_beach = scene.add.image(0, 328, "map", "icons_unselected/lighthouse");
        unselected.add(icons_unselected_beach);

        // icons_unselected_stadium
        const icons_unselected_stadium = scene.add.image(593, 161, "map", "icons_unselected/stadium");
        unselected.add(icons_unselected_stadium);

        // trees
        const trees = scene.add.image(706, 242, "map", "trees");
        unselected.add(trees);

        // icons_unselected_town
        const icons_unselected_town = scene.add.image(511, 297, "map", "icons_unselected/town");
        unselected.add(icons_unselected_town);

        // icons_unselected_village
        const icons_unselected_village = scene.add.image(318, 192, "map", "icons_unselected/village");
        unselected.add(icons_unselected_village);

        // tint
        const tint = scene.add.rectangle(0, 0, 1520, 960);
        tint.visible = false;
        tint.isFilled = true;
        tint.fillAlpha = 0.5;
        this.add(tint);

        // places
        const places = scene.add.container(0, 0);
        places.visible = false;
        this.add(places);

        // icons_selected_town
        const icons_selected_town = scene.add.image(-195, 65, "map", "icons_selected/town");
        places.add(icons_selected_town);

        // icons_selected_stadium
        const icons_selected_stadium = scene.add.image(-112, -73, "map", "icons_selected/stadium");
        places.add(icons_selected_stadium);

        // icons_selected_shack
        const icons_selected_shack = scene.add.image(450, -53, "map", "icons_selected/shack");
        places.add(icons_selected_shack);

        // icons_selected_plaza
        const icons_selected_plaza = scene.add.image(233, 37, "map", "icons_selected/plaza");
        places.add(icons_selected_plaza);

        // icons_selected_mtn
        const icons_selected_mtn = scene.add.image(-446, -139, "map", "icons_selected/myn");
        places.add(icons_selected_mtn);

        // icons_selected_beach
        const icons_selected_beach = scene.add.image(-706, 93, "map", "icons_selected/beach");
        places.add(icons_selected_beach);

        // icons_selected_igloos
        const icons_selected_igloos = scene.add.image(-167, 226, "map", "icons_selected/igloos");
        places.add(icons_selected_igloos);

        // icons_selected_forts
        const icons_selected_forts = scene.add.image(4, 9, "map", "icons_selected/forts");
        places.add(icons_selected_forts);

        // icons_selected_forest
        const icons_selected_forest = scene.add.image(419, 130, "map", "icons_selected/forest");
        places.add(icons_selected_forest);

        // icons_selected_dock
        const icons_selected_dock = scene.add.image(-463, 284, "map", "icons_selected/dock");
        places.add(icons_selected_dock);

        // icons_selected_cove
        const icons_selected_cove = scene.add.image(659, 142, "map", "icons_selected/cove");
        places.add(icons_selected_cove);

        // icons_selected_berg
        const icons_selected_berg = scene.add.image(672, -88, "map", "icons_selected/berg");
        places.add(icons_selected_berg);

        // icons_selected_dojo
        const icons_selected_dojo = scene.add.image(150, -225, "map", "icons_selected/dojo");
        places.add(icons_selected_dojo);

        // icons_selected_village
        const icons_selected_village = scene.add.image(-387, -41, "map", "icons_selected/village");
        places.add(icons_selected_village);

        // shops
        const shops = scene.add.container(0, 0);
        shops.visible = false;
        this.add(shops);

        // shops_costumetrunk
        const shops_costumetrunk = scene.add.image(282, 31, "map", "shops/costumetrunk");
        shops_costumetrunk.visible = false;
        shops.add(shops_costumetrunk);

        // shops_dj3k_upgrades
        const shops_dj3k_upgrades = scene.add.image(-239, 79, "map", "shops/dj3k_upgrades");
        shops_dj3k_upgrades.visible = false;
        shops.add(shops_dj3k_upgrades);

        // shops_fishing_upgrades
        const shops_fishing_upgrades = scene.add.image(-373, -40, "map", "shops/fishing_upgrades");
        shops.add(shops_fishing_upgrades);

        // shops_hydro_upgrades
        const shops_hydro_upgrades = scene.add.image(-425, 250, "map", "shops/hydro_upgrades");
        shops.add(shops_hydro_upgrades);

        // shops_music_catalogs
        const shops_music_catalogs = scene.add.image(-589, 121, "map", "shops/music_catalogs");
        shops_music_catalogs.visible = false;
        shops.add(shops_music_catalogs);

        // shops_penguinstyle
        const shops_penguinstyle = scene.add.image(-90, 78, "map", "shops/penguinstyle");
        shops.add(shops_penguinstyle);

        // shops_pufflecatalogs
        const shops_pufflecatalogs = scene.add.image(137, 28, "map", "shops/pufflecatalogs");
        shops.add(shops_pufflecatalogs);

        // shops_sled_upgrades
        const shops_sled_upgrades = scene.add.image(-427, -175, "map", "shops/sled_upgrades");
        shops.add(shops_sled_upgrades);

        // shops_snowandsports
        const shops_snowandsports = scene.add.image(-63, -84, "map", "shops/snowandsports");
        shops_snowandsports.visible = false;
        shops.add(shops_snowandsports);

        // shops_waves_upgrades
        const shops_waves_upgrades = scene.add.image(598, 151, "map", "shops/waves_upgrades");
        shops.add(shops_waves_upgrades);

        // games
        const games = scene.add.container(0, 0);
        games.visible = false;
        this.add(games);

        // games_aquagrabber
        const games_aquagrabber = scene.add.image(606, -117, "map", "games/aquagrabber");
        games.add(games_aquagrabber);

        // games_arcade
        const games_arcade = scene.add.image(-248, -17, "map", "games/arcade");
        games.add(games_arcade);

        // games_beancounters
        const games_beancounters = scene.add.image(-341, 117, "map", "games/beancounters");
        games.add(games_beancounters);

        // games_cardjitsu
        const games_cardjitsu = scene.add.image(151, -263, "map", "games/cardjitsu");
        games.add(games_cardjitsu);

        // games_cartsurfer
        const games_cartsurfer = scene.add.image(447, -96, "map", "games/cartsurfer");
        games_cartsurfer.visible = false;
        games.add(games_cartsurfer);

        // games_catchinwaves
        const games_catchinwaves = scene.add.image(589, 122, "map", "games/catchinwaves");
        games.add(games_catchinwaves);

        // games_dancecontest
        const games_dancecontest = scene.add.image(-45, 116, "map", "games/dancecontest");
        games_dancecontest.visible = false;
        games.add(games_dancecontest);

        // games_dj3k
        const games_dj3k = scene.add.image(-195, 120, "map", "games/dj3k");
        games_dj3k.visible = false;
        games.add(games_dj3k);

        // games_hydrohopper
        const games_hydrohopper = scene.add.image(-481, 263, "map", "games/hydrohopper");
        games.add(games_hydrohopper);

        // games_icefishing
        const games_icefishing = scene.add.image(-385, -79, "map", "games/icefishing");
        games.add(games_icefishing);

        // games_jetpack
        const games_jetpack = scene.add.image(-611, 33, "map", "games/jetpack");
        games_jetpack.visible = false;
        games.add(games_jetpack);

        // games_pizzatron
        const games_pizzatron = scene.add.image(399, 53, "map", "games/pizzatron");
        games.add(games_pizzatron);

        // games_pufflelaunch
        const games_pufflelaunch = scene.add.image(105, 54, "map", "games/pufflelaunch");
        games_pufflelaunch.visible = false;
        games.add(games_pufflelaunch);

        // games_pufflerescue
        const games_pufflerescue = scene.add.image(289, -89, "map", "games/pufflerescue");
        games_pufflerescue.visible = false;
        games.add(games_pufflerescue);

        // games_roundup
        const games_roundup = scene.add.image(251, 51, "map", "games/roundup");
        games.add(games_roundup);

        // games_sledracer
        const games_sledracer = scene.add.image(-467, -226, "map", "games/sledracer");
        games.add(games_sledracer);

        // pets
        const pets = scene.add.container(0, 0);
        pets.visible = false;
        this.add(pets);

        // pets_adopt
        const pets_adopt = scene.add.image(198, 26, "map", "pets/adopt");
        pets.add(pets_adopt);

        // foreground
        const foreground = scene.add.container(-665, -435);
        this.add(foreground);

        // border
        const border = scene.add.image(665, 435, "map", "foreground/bg");
        foreground.add(border);

        // selector_pets_text
        const selector_pets_text = scene.add.text(405, 115, "", {});
        selector_pets_text.setOrigin(0.5, 0.5);
        selector_pets_text.text = "Pets";
        selector_pets_text.setStyle({ "align": "center", "color": "#515151ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        foreground.add(selector_pets_text);

        // selector_pets_btn
        const selector_pets_btn = scene.add.image(405, 45, "map", "foreground/pets_btn");
        foreground.add(selector_pets_btn);

        // selector_shops_text
        const selector_shops_text = scene.add.text(270, 115, "", {});
        selector_shops_text.setOrigin(0.5, 0.5);
        selector_shops_text.text = "Shops";
        selector_shops_text.setStyle({ "align": "center", "color": "#515151ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        foreground.add(selector_shops_text);

        // selector_shops_btn
        const selector_shops_btn = scene.add.image(270, 45, "map", "foreground/shops_btn");
        foreground.add(selector_shops_btn);

        // selector_games_text
        const selector_games_text = scene.add.text(135, 115, "", {});
        selector_games_text.setOrigin(0.5, 0.5);
        selector_games_text.text = "Games";
        selector_games_text.setStyle({ "align": "center", "color": "#515151ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        foreground.add(selector_games_text);

        // selector_games_btn
        const selector_games_btn = scene.add.image(135, 45, "map", "foreground/games_btn");
        foreground.add(selector_games_btn);

        // selector_places_text
        const selector_places_text = scene.add.text(0, 115, "", {});
        selector_places_text.setOrigin(0.5, 0.5);
        selector_places_text.text = "Places";
        selector_places_text.setStyle({ "align": "center", "color": "#515151ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        foreground.add(selector_places_text);

        // selector_places_btn
        const selector_places_btn = scene.add.image(0, 45, "map", "foreground/places_btn");
        foreground.add(selector_places_btn);

        // close_btn
        const close_btn = scene.add.image(1380, 0, "map", "close_btn");
        foreground.add(close_btn);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // bg (components)
        new Interactive(bg);

        // icons_unselected_dojo (components)
        const icons_unselected_dojoButton = new Button(icons_unselected_dojo);
        icons_unselected_dojoButton.callback = () => this.onRoomClick(321);
        const icons_unselected_dojoShowHint = new ShowHint(icons_unselected_dojo);
        icons_unselected_dojoShowHint.text = "Dojo Exterior";

        // icons_unselected_berg (components)
        const icons_unselected_bergButton = new Button(icons_unselected_berg);
        icons_unselected_bergButton.callback = () => this.onRoomClick(805);

        // icons_unselected_cove (components)
        const icons_unselected_coveButton = new Button(icons_unselected_cove);
        icons_unselected_coveButton.callback = () => this.onRoomClick(810);
        const icons_unselected_coveShowHint = new ShowHint(icons_unselected_cove);
        icons_unselected_coveShowHint.text = "Cove";

        // icons_unselected_dock (components)
        const icons_unselected_dockButton = new Button(icons_unselected_dock);
        icons_unselected_dockButton.callback = () => this.onRoomClick(800);
        const icons_unselected_dockShowHint = new ShowHint(icons_unselected_dock);
        icons_unselected_dockShowHint.text = "Dock";

        // icons_unselected_forest (components)
        const icons_unselected_forestButton = new Button(icons_unselected_forest);
        icons_unselected_forestButton.callback = () => this.onRoomClick(809);
        const icons_unselected_forestShowHint = new ShowHint(icons_unselected_forest);
        icons_unselected_forestShowHint.text = "Forest";

        // icons_unselected_forts (components)
        const icons_unselected_fortsButton = new Button(icons_unselected_forts);
        icons_unselected_fortsButton.callback = () => this.onRoomClick(801);
        const icons_unselected_fortsShowHint = new ShowHint(icons_unselected_forts);
        icons_unselected_fortsShowHint.text = "Snow Forts";

        // icons_unselected_igloos (components)
        const icons_unselected_igloosButton = new Button(icons_unselected_igloos);
        icons_unselected_igloosButton.callback = () => this.iglooMap.show();
        const icons_unselected_igloosShowHint = new ShowHint(icons_unselected_igloos);
        icons_unselected_igloosShowHint.text = "Open Igloos";

        // icons_unselected_mtn (components)
        const icons_unselected_mtnButton = new Button(icons_unselected_mtn);
        icons_unselected_mtnButton.callback = () => this.onRoomClick(230);
        const icons_unselected_mtnShowHint = new ShowHint(icons_unselected_mtn);
        icons_unselected_mtnShowHint.text = "Ski Hill";

        // icons_unselected_plaza (components)
        const icons_unselected_plazaButton = new Button(icons_unselected_plaza);
        icons_unselected_plazaButton.callback = () => this.onRoomClick(300);
        const icons_unselected_plazaShowHint = new ShowHint(icons_unselected_plaza);
        icons_unselected_plazaShowHint.text = "Plaza";

        // icons_unselected_shack (components)
        const icons_unselected_shackButton = new Button(icons_unselected_shack);
        icons_unselected_shackButton.callback = () => this.onRoomClick(807);
        const icons_unselected_shackShowHint = new ShowHint(icons_unselected_shack);
        icons_unselected_shackShowHint.text = "Mine Shack";

        // icons_unselected_beach (components)
        const icons_unselected_beachButton = new Button(icons_unselected_beach);
        icons_unselected_beachButton.callback = () => this.onRoomClick(400);
        const icons_unselected_beachShowHint = new ShowHint(icons_unselected_beach);
        icons_unselected_beachShowHint.text = "Beach";

        // icons_unselected_stadium (components)
        const icons_unselected_stadiumButton = new Button(icons_unselected_stadium);
        icons_unselected_stadiumButton.callback = () => this.onRoomClick(802);
        const icons_unselected_stadiumShowHint = new ShowHint(icons_unselected_stadium);
        icons_unselected_stadiumShowHint.text = "Stadium";

        // icons_unselected_town (components)
        const icons_unselected_townButton = new Button(icons_unselected_town);
        icons_unselected_townButton.callback = () => this.onRoomClick(100);
        const icons_unselected_townShowHint = new ShowHint(icons_unselected_town);
        icons_unselected_townShowHint.text = "Town Center";

        // icons_unselected_village (components)
        const icons_unselected_villageButton = new Button(icons_unselected_village);
        icons_unselected_villageButton.callback = () => this.onRoomClick(200);
        const icons_unselected_villageShowHint = new ShowHint(icons_unselected_village);
        icons_unselected_villageShowHint.text = "Ski Village";

        // tint (components)
        new Interactive(tint);

        // icons_selected_town (components)
        const icons_selected_townButton = new Button(icons_selected_town);
        icons_selected_townButton.callback = () => this.onRoomClick(100);
        const icons_selected_townShowHint = new ShowHint(icons_selected_town);
        icons_selected_townShowHint.text = "Town Center";

        // icons_selected_stadium (components)
        const icons_selected_stadiumButton = new Button(icons_selected_stadium);
        icons_selected_stadiumButton.callback = () => this.onRoomClick(802);
        const icons_selected_stadiumShowHint = new ShowHint(icons_selected_stadium);
        icons_selected_stadiumShowHint.text = "Stadium";

        // icons_selected_shack (components)
        const icons_selected_shackButton = new Button(icons_selected_shack);
        icons_selected_shackButton.callback = () => this.onRoomClick(807);
        const icons_selected_shackShowHint = new ShowHint(icons_selected_shack);
        icons_selected_shackShowHint.text = "Mine Shack";

        // icons_selected_plaza (components)
        const icons_selected_plazaButton = new Button(icons_selected_plaza);
        icons_selected_plazaButton.callback = () => this.onRoomClick(300);
        const icons_selected_plazaShowHint = new ShowHint(icons_selected_plaza);
        icons_selected_plazaShowHint.text = "Plaza";

        // icons_selected_mtn (components)
        const icons_selected_mtnButton = new Button(icons_selected_mtn);
        icons_selected_mtnButton.callback = () => this.onRoomClick(230);
        const icons_selected_mtnShowHint = new ShowHint(icons_selected_mtn);
        icons_selected_mtnShowHint.text = "Ski Hill";

        // icons_selected_beach (components)
        const icons_selected_beachButton = new Button(icons_selected_beach);
        icons_selected_beachButton.callback = () => this.onRoomClick(400);
        const icons_selected_beachShowHint = new ShowHint(icons_selected_beach);
        icons_selected_beachShowHint.text = "Beach";

        // icons_selected_igloos (components)
        const icons_selected_igloosButton = new Button(icons_selected_igloos);
        icons_selected_igloosButton.callback = () => this.iglooMap.show();
        const icons_selected_igloosShowHint = new ShowHint(icons_selected_igloos);
        icons_selected_igloosShowHint.text = "Open Igloos";

        // icons_selected_forts (components)
        const icons_selected_fortsButton = new Button(icons_selected_forts);
        icons_selected_fortsButton.callback = () => this.onRoomClick(801);
        const icons_selected_fortsShowHint = new ShowHint(icons_selected_forts);
        icons_selected_fortsShowHint.text = "Snow Forts";

        // icons_selected_forest (components)
        const icons_selected_forestButton = new Button(icons_selected_forest);
        icons_selected_forestButton.callback = () => this.onRoomClick(809);
        const icons_selected_forestShowHint = new ShowHint(icons_selected_forest);
        icons_selected_forestShowHint.text = "Forest";

        // icons_selected_dock (components)
        const icons_selected_dockButton = new Button(icons_selected_dock);
        icons_selected_dockButton.callback = () => this.onRoomClick(800);
        const icons_selected_dockShowHint = new ShowHint(icons_selected_dock);
        icons_selected_dockShowHint.text = "Dock";

        // icons_selected_cove (components)
        const icons_selected_coveButton = new Button(icons_selected_cove);
        icons_selected_coveButton.callback = () => this.onRoomClick(810);
        const icons_selected_coveShowHint = new ShowHint(icons_selected_cove);
        icons_selected_coveShowHint.text = "Cove";

        // icons_selected_berg (components)
        const icons_selected_bergButton = new Button(icons_selected_berg);
        icons_selected_bergButton.callback = () => this.onRoomClick(805);

        // icons_selected_dojo (components)
        const icons_selected_dojoButton = new Button(icons_selected_dojo);
        icons_selected_dojoButton.callback = () => this.onRoomClick(321);
        const icons_selected_dojoShowHint = new ShowHint(icons_selected_dojo);
        icons_selected_dojoShowHint.text = "Dojo Exterior";

        // icons_selected_village (components)
        const icons_selected_villageButton = new Button(icons_selected_village);
        icons_selected_villageButton.callback = () => this.onRoomClick(200);
        const icons_selected_villageShowHint = new ShowHint(icons_selected_village);
        icons_selected_villageShowHint.text = "Ski Village";

        // shops_costumetrunk (components)
        const shops_costumetrunkButton = new Button(shops_costumetrunk);
        shops_costumetrunkButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const shops_costumetrunkShowHint = new ShowHint(shops_costumetrunk);
        shops_costumetrunkShowHint.text = "Costume Trunk";

        // shops_dj3k_upgrades (components)
        const shops_dj3k_upgradesButton = new Button(shops_dj3k_upgrades);
        shops_dj3k_upgradesButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const shops_dj3k_upgradesShowHint = new ShowHint(shops_dj3k_upgrades);
        shops_dj3k_upgradesShowHint.text = "Game Upgrades";

        // shops_fishing_upgrades (components)
        const shops_fishing_upgradesButton = new Button(shops_fishing_upgrades);
        shops_fishing_upgradesButton.callback = () => this.goToRoomWithArrow(220, {"x":1435, "y":800});
        const shops_fishing_upgradesShowHint = new ShowHint(shops_fishing_upgrades);
        shops_fishing_upgradesShowHint.text = "Game Upgrades";

        // shops_hydro_upgrades (components)
        const shops_hydro_upgradesButton = new Button(shops_hydro_upgrades);
        shops_hydro_upgradesButton.callback = () => this.goToRoomWithArrow(800, {"x":1435, "y":800});
        const shops_hydro_upgradesShowHint = new ShowHint(shops_hydro_upgrades);
        shops_hydro_upgradesShowHint.text = "Game Upgrades";

        // shops_music_catalogs (components)
        const shops_music_catalogsButton = new Button(shops_music_catalogs);
        shops_music_catalogsButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const shops_music_catalogsShowHint = new ShowHint(shops_music_catalogs);
        shops_music_catalogsShowHint.text = "Music Catalog";

        // shops_penguinstyle (components)
        const shops_penguinstyleButton = new Button(shops_penguinstyle);
        shops_penguinstyleButton.callback = () => this.goToRoomWithArrow(130, {"x":1435, "y":800});
        const shops_penguinstyleShowHint = new ShowHint(shops_penguinstyle);
        shops_penguinstyleShowHint.text = "Penguin Style";

        // shops_pufflecatalogs (components)
        const shops_pufflecatalogsButton = new Button(shops_pufflecatalogs);
        shops_pufflecatalogsButton.callback = () => this.goToRoomWithArrow(310, {"x":1430, "y":680});
        const shops_pufflecatalogsShowHint = new ShowHint(shops_pufflecatalogs);
        shops_pufflecatalogsShowHint.text = "Puffle Catalog";

        // shops_sled_upgrades (components)
        const shops_sled_upgradesButton = new Button(shops_sled_upgrades);
        shops_sled_upgradesButton.callback = () => this.goToRoomWithArrow(230, {"x":1435, "y":800});
        const shops_sled_upgradesShowHint = new ShowHint(shops_sled_upgrades);
        shops_sled_upgradesShowHint.text = "Game Upgrades";

        // shops_snowandsports (components)
        const shops_snowandsportsButton = new Button(shops_snowandsports);
        shops_snowandsportsButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const shops_snowandsportsShowHint = new ShowHint(shops_snowandsports);
        shops_snowandsportsShowHint.text = "Snow and Sports";

        // shops_waves_upgrades (components)
        const shops_waves_upgradesButton = new Button(shops_waves_upgrades);
        shops_waves_upgradesButton.callback = () => this.goToRoomWithArrow(810, {"x":1435, "y":800});
        const shops_waves_upgradesShowHint = new ShowHint(shops_waves_upgrades);
        shops_waves_upgradesShowHint.text = "Game Upgrades";

        // games_aquagrabber (components)
        const games_aquagrabberButton = new Button(games_aquagrabber);
        games_aquagrabberButton.callback = () => this.goToRoomWithArrow(805,  {"x": 1256, "y": 319 });
        const games_aquagrabberShowHint = new ShowHint(games_aquagrabber);
        games_aquagrabberShowHint.text = "Aqua Grabber";

        // games_arcade (components)
        const games_arcadeButton = new Button(games_arcade);
        games_arcadeButton.callback = () => this.goToRoomWithArrow(121,  [{"x": 1015, "y": 340 }, {"x": 617, "y": 336 }]);
        const games_arcadeShowHint = new ShowHint(games_arcade);
        games_arcadeShowHint.text = "Arcade Games";

        // games_beancounters (components)
        const games_beancountersButton = new Button(games_beancounters);
        games_beancountersButton.callback = () => this.goToRoomWithArrow(110,  {"x": 1005, "y": 635 });
        const games_beancountersShowHint = new ShowHint(games_beancounters);
        games_beancountersShowHint.text = "Bean Counters";

        // games_cardjitsu (components)
        const games_cardjitsuButton = new Button(games_cardjitsu);
        games_cardjitsuButton.callback = () => this.goToRoomWithArrow(320,  [{"x": 363, "y": 805 }, {"x": 617, "y": 702 }, {"x": 927, "y": 702 }, {"x": 1182, "y": 805 }]);
        const games_cardjitsuShowHint = new ShowHint(games_cardjitsu);
        games_cardjitsuShowHint.text = "Card-Jitsu";

        // games_cartsurfer (components)
        const games_cartsurferButton = new Button(games_cartsurfer);
        games_cartsurferButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const games_cartsurferShowHint = new ShowHint(games_cartsurfer);
        games_cartsurferShowHint.text = "Cart Surfer";

        // games_catchinwaves (components)
        const games_catchinwavesButton = new Button(games_catchinwaves);
        games_catchinwavesButton.callback = () => this.goToRoomWithArrow(810,  {"x": 1305, "y": 445 });
        const games_catchinwavesShowHint = new ShowHint(games_catchinwaves);
        games_catchinwavesShowHint.text = "Catchin' Waves";

        // games_dancecontest (components)
        const games_dancecontestButton = new Button(games_dancecontest);
        games_dancecontestButton.callback = () => this.goToRoomWithArrow(120,  {"x": 1135, "y": 365 });
        const games_dancecontestShowHint = new ShowHint(games_dancecontest);
        games_dancecontestShowHint.text = "Dance Contest";

        // games_dj3k (components)
        const games_dj3kButton = new Button(games_dj3k);
        games_dj3kButton.callback = () => this.goToRoomWithArrow(120,  {"x": 655, "y": 335 });
        const games_dj3kShowHint = new ShowHint(games_dj3k);
        games_dj3kShowHint.text = "DJ3K";

        // games_hydrohopper (components)
        const games_hydrohopperButton = new Button(games_hydrohopper);
        games_hydrohopperButton.callback = () => this.goToRoomWithArrow(800,  {"x": 245, "y": 625 });
        const games_hydrohopperShowHint = new ShowHint(games_hydrohopper);
        games_hydrohopperShowHint.text = "Hydro Hopper";

        // games_icefishing (components)
        const games_icefishingButton = new Button(games_icefishing);
        games_icefishingButton.callback = () => this.goToRoomWithArrow(220,  {"x": 950, "y": 290 });
        const games_icefishingShowHint = new ShowHint(games_icefishing);
        games_icefishingShowHint.text = "Ice Fishing";

        // games_jetpack (components)
        const games_jetpackButton = new Button(games_jetpack);
        games_jetpackButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const games_jetpackShowHint = new ShowHint(games_jetpack);
        games_jetpackShowHint.text = "Jet Pack Adventure";

        // games_pizzatron (components)
        const games_pizzatronButton = new Button(games_pizzatron);
        games_pizzatronButton.callback = () => this.goToRoomWithArrow(330,  {"x": 400, "y": 260 });
        const games_pizzatronShowHint = new ShowHint(games_pizzatron);
        games_pizzatronShowHint.text = "Pizzatron 3000";

        // games_pufflelaunch (components)
        const games_pufflelaunchButton = new Button(games_pufflelaunch);
        games_pufflelaunchButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const games_pufflelaunchShowHint = new ShowHint(games_pufflelaunch);
        games_pufflelaunchShowHint.text = "Puffle Launch";

        // games_pufflerescue (components)
        const games_pufflerescueButton = new Button(games_pufflerescue);
        games_pufflerescueButton.callback = () => this.goToRoomWithArrow(room, arrows);
        const games_pufflerescueShowHint = new ShowHint(games_pufflerescue);
        games_pufflerescueShowHint.text = "Puffle Rescue";

        // games_roundup (components)
        const games_roundupButton = new Button(games_roundup);
        games_roundupButton.callback = () => this.goToRoomWithArrow(310,  {"x": 1420, "y": 345 });
        const games_roundupShowHint = new ShowHint(games_roundup);
        games_roundupShowHint.text = "Puffle Roundup";

        // games_sledracer (components)
        const games_sledracerButton = new Button(games_sledracer);
        games_sledracerButton.callback = () => this.goToRoomWithArrow(230,  [{"x": 1120, "y": 650 }, {"x": 900, "y": 750 }, {"x": 625, "y": 700 }, {"x": 330, "y": 560 }]);
        const games_sledracerShowHint = new ShowHint(games_sledracer);
        games_sledracerShowHint.text = "Sled Racing";

        // pets_adopt (components)
        const pets_adoptButton = new Button(pets_adopt);
        pets_adoptButton.callback = () => this.goToRoomWithArrow(310, {"x":520, "y":395});
        const pets_adoptShowHint = new ShowHint(pets_adopt);
        pets_adoptShowHint.text = "Adopt Pets";

        // selector_pets_btn (components)
        const selector_pets_btnButton = new Button(selector_pets_btn);
        selector_pets_btnButton.callback = () => this.selectCategory("pets");

        // selector_shops_btn (components)
        const selector_shops_btnButton = new Button(selector_shops_btn);
        selector_shops_btnButton.callback = () => this.selectCategory("shops");

        // selector_games_btn (components)
        const selector_games_btnButton = new Button(selector_games_btn);
        selector_games_btnButton.callback = () => this.selectCategory("games");

        // selector_places_btn (components)
        const selector_places_btnButton = new Button(selector_places_btn);
        selector_places_btnButton.callback = () => this.selectCategory("places");

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.callback = () => { this.visible = false };

        this.tint = tint;
        this.places = places;
        this.shops = shops;
        this.games = games;
        this.pets = pets;
        this.iglooMap = iglooMap;

        /* START-USER-CTR-CODE */
        this.category = "unselected"
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    selectCategory(category) {
        for (let category of ["places", "shops", "games", "pets"]) {
            this[category].visible = false
        }

        if (this.category == category) {
            this.category = "unselected"
            this.tint.visible = false
            return
        }

        this[category].visible = true
        this.tint.visible = true
        this.category = category
    }

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

    goToRoomWithArrow(id, arrows = []) {
        this.close()

        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
        if (arrows.x) {
            this.world.arrows.push(arrows)
        } else {
            this.world.arrows = arrows
        }
    }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
