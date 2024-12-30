
// You can write more code here

/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HydroHopper extends GameScene {

    constructor() {
        super("HydroHopper");

        /** @type {Phaser.GameObjects.Image} */
        this.wake30;
        /** @type {Phaser.GameObjects.Image} */
        this.wake29;
        /** @type {Phaser.GameObjects.Image} */
        this.wake28;
        /** @type {Phaser.GameObjects.Image} */
        this.wake27;
        /** @type {Phaser.GameObjects.Image} */
        this.wake26;
        /** @type {Phaser.GameObjects.Image} */
        this.wake25;
        /** @type {Phaser.GameObjects.Image} */
        this.wake24;
        /** @type {Phaser.GameObjects.Image} */
        this.wake23;
        /** @type {Phaser.GameObjects.Image} */
        this.wake22;
        /** @type {Phaser.GameObjects.Image} */
        this.wake21;
        /** @type {Phaser.GameObjects.Image} */
        this.wake20;
        /** @type {Phaser.GameObjects.Image} */
        this.wake19;
        /** @type {Phaser.GameObjects.Image} */
        this.wake18;
        /** @type {Phaser.GameObjects.Image} */
        this.wake17;
        /** @type {Phaser.GameObjects.Image} */
        this.wake16;
        /** @type {Phaser.GameObjects.Image} */
        this.wake15;
        /** @type {Phaser.GameObjects.Image} */
        this.wake14;
        /** @type {Phaser.GameObjects.Image} */
        this.wake13;
        /** @type {Phaser.GameObjects.Image} */
        this.wake12;
        /** @type {Phaser.GameObjects.Image} */
        this.wake11;
        /** @type {Phaser.GameObjects.Image} */
        this.wake10;
        /** @type {Phaser.GameObjects.Image} */
        this.wake9;
        /** @type {Phaser.GameObjects.Image} */
        this.wake8;
        /** @type {Phaser.GameObjects.Image} */
        this.wake7;
        /** @type {Phaser.GameObjects.Image} */
        this.wake6;
        /** @type {Phaser.GameObjects.Image} */
        this.wake5;
        /** @type {Phaser.GameObjects.Image} */
        this.wake4;
        /** @type {Phaser.GameObjects.Image} */
        this.wake3;
        /** @type {Phaser.GameObjects.Image} */
        this.wake2;
        /** @type {Phaser.GameObjects.Image} */
        this.wake1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube_body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube_penguin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube_body_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_tube_penguin_jump;
        /** @type {Phaser.GameObjects.Container} */
        this.tube;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard_body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard_penguin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard_body_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard_penguin_jump;
        /** @type {Phaser.GameObjects.Container} */
        this.wakeboard;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2_body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2_penguin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2_body_jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_wakeboard2_penguin_jump;
        /** @type {Phaser.GameObjects.Container} */
        this.wakeboard2;
        /** @type {Phaser.GameObjects.Container} */
        this.penguin_cntr;
        /** @type {Phaser.GameObjects.Container} */
        this.game_cntr;
        /** @type {Phaser.GameObjects.Container} */
        this.instructions_cntr;
        /** @type {Phaser.GameObjects.Container} */
        this.start_cntr;
        /** @type {Phaser.GameObjects.Image} */
        this.next_level_text;
        /** @type {Phaser.GameObjects.Container} */
        this.next_level_cntr;
        /** @type {Phaser.GameObjects.Text} */
        this.level2;
        /** @type {Phaser.GameObjects.Text} */
        this.level1;
        /** @type {Phaser.GameObjects.Text} */
        this.score2;
        /** @type {Phaser.GameObjects.Text} */
        this.score1;
        /** @type {Phaser.GameObjects.Container} */
        this.score_cntr;
        /** @type {Phaser.GameObjects.Image} */
        this.life1;
        /** @type {Phaser.GameObjects.Image} */
        this.life2;
        /** @type {Phaser.GameObjects.Image} */
        this.life3;
        /** @type {Phaser.GameObjects.Container} */
        this.lives_cntr;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.penguinSprites;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.penguinAnimationSprites;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("hydro-pack", "assets/media/games/hydro/@2x/hydro-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "hydro", "bg");

        // game_cntr
        const game_cntr = this.add.container(760, 200);
        game_cntr.visible = false;

        // boat_highlight
        const boat_highlight = this.add.image(0, 20, "hydro", "boat-highlight");
        boat_highlight.setOrigin(0.5, 0.5032679738562091);
        game_cntr.add(boat_highlight);

        // boat
        const boat = this.add.sprite(0, 0, "hydro", "boat");
        boat.setOrigin(0.5, 0.5028571428571429);
        game_cntr.add(boat);

        // wake
        const wake = this.add.container(0, 129.80765298381442);
        game_cntr.add(wake);

        // wake30
        const wake30 = this.add.image(0, 623.1923694707066, "hydro", "trail");
        wake30.setOrigin(0.503448275862069, 0.5);
        wake.add(wake30);

        // wake29
        const wake29 = this.add.image(0, 613.1923694707066, "hydro", "trail");
        wake29.setOrigin(0.503448275862069, 0.5);
        wake.add(wake29);

        // wake28
        const wake28 = this.add.image(0, 603.1923694707066, "hydro", "trail");
        wake28.setOrigin(0.503448275862069, 0.5);
        wake.add(wake28);

        // wake27
        const wake27 = this.add.image(0, 593.1923694707066, "hydro", "trail");
        wake27.setOrigin(0.503448275862069, 0.5);
        wake.add(wake27);

        // wake26
        const wake26 = this.add.image(0, 583.1923694707066, "hydro", "trail");
        wake26.setOrigin(0.503448275862069, 0.5);
        wake.add(wake26);

        // wake25
        const wake25 = this.add.image(0, 573.1923694707066, "hydro", "trail");
        wake25.setOrigin(0.503448275862069, 0.5);
        wake.add(wake25);

        // wake24
        const wake24 = this.add.image(0, 563.1923694707066, "hydro", "trail");
        wake24.setOrigin(0.503448275862069, 0.5);
        wake.add(wake24);

        // wake23
        const wake23 = this.add.image(0, 553.1923694707066, "hydro", "trail");
        wake23.setOrigin(0.503448275862069, 0.5);
        wake.add(wake23);

        // wake22
        const wake22 = this.add.image(0, 543.1923694707066, "hydro", "trail");
        wake22.setOrigin(0.503448275862069, 0.5);
        wake.add(wake22);

        // wake21
        const wake21 = this.add.image(0, 533.1923694707066, "hydro", "trail");
        wake21.setOrigin(0.503448275862069, 0.5);
        wake.add(wake21);

        // wake20
        const wake20 = this.add.image(0, 523.1923694707066, "hydro", "trail");
        wake20.setOrigin(0.503448275862069, 0.5);
        wake.add(wake20);

        // wake19
        const wake19 = this.add.image(0, 513.1923694707066, "hydro", "trail");
        wake19.setOrigin(0.503448275862069, 0.5);
        wake.add(wake19);

        // wake18
        const wake18 = this.add.image(0, 503.19236947070664, "hydro", "trail");
        wake18.setOrigin(0.503448275862069, 0.5);
        wake.add(wake18);

        // wake17
        const wake17 = this.add.image(0, 493.19236947070664, "hydro", "trail");
        wake17.setOrigin(0.503448275862069, 0.5);
        wake.add(wake17);

        // wake16
        const wake16 = this.add.image(0, 483.19236947070664, "hydro", "trail");
        wake16.setOrigin(0.503448275862069, 0.5);
        wake.add(wake16);

        // wake15
        const wake15 = this.add.image(0, 473.19236947070686, "hydro", "trail");
        wake15.setOrigin(0.503448275862069, 0.5);
        wake.add(wake15);

        // wake14
        const wake14 = this.add.image(0, 463.19236947070686, "hydro", "trail");
        wake14.setOrigin(0.503448275862069, 0.5);
        wake.add(wake14);

        // wake13
        const wake13 = this.add.image(0, 453.19236947070686, "hydro", "trail");
        wake13.setOrigin(0.503448275862069, 0.5);
        wake.add(wake13);

        // wake12
        const wake12 = this.add.image(0, 443.19236947070686, "hydro", "trail");
        wake12.setOrigin(0.503448275862069, 0.5);
        wake.add(wake12);

        // wake11
        const wake11 = this.add.image(0, 433.19236947070686, "hydro", "trail");
        wake11.setOrigin(0.503448275862069, 0.5);
        wake.add(wake11);

        // wake10
        const wake10 = this.add.image(0, 423.19236947070686, "hydro", "trail");
        wake10.setOrigin(0.503448275862069, 0.5);
        wake.add(wake10);

        // wake9
        const wake9 = this.add.image(0, 413.19236947070686, "hydro", "trail");
        wake9.setOrigin(0.503448275862069, 0.5);
        wake.add(wake9);

        // wake8
        const wake8 = this.add.image(0, 403.19236947070686, "hydro", "trail");
        wake8.setOrigin(0.503448275862069, 0.5);
        wake.add(wake8);

        // wake7
        const wake7 = this.add.image(0, 393.19236947070686, "hydro", "trail");
        wake7.setOrigin(0.503448275862069, 0.5);
        wake.add(wake7);

        // wake6
        const wake6 = this.add.image(0, 383.19236947070686, "hydro", "trail");
        wake6.setOrigin(0.503448275862069, 0.5);
        wake.add(wake6);

        // wake5
        const wake5 = this.add.image(0, 373.19236947070675, "hydro", "trail");
        wake5.setOrigin(0.503448275862069, 0.5);
        wake.add(wake5);

        // wake4
        const wake4 = this.add.image(0, 363.19236947070675, "hydro", "trail");
        wake4.setOrigin(0.503448275862069, 0.5);
        wake.add(wake4);

        // wake3
        const wake3 = this.add.image(0, 353.19236947070675, "hydro", "trail");
        wake3.setOrigin(0.503448275862069, 0.5);
        wake.add(wake3);

        // wake2
        const wake2 = this.add.image(0, 343.19236947070675, "hydro", "trail");
        wake2.setOrigin(0.503448275862069, 0.5);
        wake.add(wake2);

        // wake1
        const wake1 = this.add.image(0, 333.19236947070675, "hydro", "trail");
        wake1.setOrigin(0.503448275862069, 0.5);
        wake.add(wake1);

        // penguin_cntr
        const penguin_cntr = this.add.container(0, 377);
        game_cntr.add(penguin_cntr);

        // tube
        const tube = this.add.container(0, 5);
        tube.visible = false;
        penguin_cntr.add(tube);

        // penguin_tube
        const penguin_tube = this.add.sprite(0, 34, "hydro", "penguin/tube");
        penguin_tube.setOrigin(0.5029585798816568, 0.5);
        tube.add(penguin_tube);

        // penguin_tube_body
        const penguin_tube_body = this.add.sprite(1, 0, "hydro", "penguin/tube-body");
        penguin_tube_body.setOrigin(0.5040650406504065, 0.5);
        penguin_tube_body.tintTopLeft = 13209;
        penguin_tube_body.tintTopRight = 13209;
        penguin_tube_body.tintBottomLeft = 13209;
        penguin_tube_body.tintBottomRight = 13209;
        tube.add(penguin_tube_body);

        // penguin_tube_penguin
        const penguin_tube_penguin = this.add.sprite(0, 10, "hydro", "penguin/tube-penguin");
        penguin_tube_penguin.setOrigin(0.5, 0.5042016806722689);
        tube.add(penguin_tube_penguin);

        // penguin_tube_jump
        const penguin_tube_jump = this.add.sprite(-1, -55, "hydro", "penguin/tube_jump0001");
        penguin_tube_jump.setOrigin(0.5029585798816568, 0.5);
        penguin_tube_jump.visible = false;
        tube.add(penguin_tube_jump);

        // penguin_tube_body_jump
        const penguin_tube_body_jump = this.add.sprite(0, -58, "hydro", "penguin/tube_jump-body0001");
        penguin_tube_body_jump.setOrigin(0.5040650406504065, 0.5);
        penguin_tube_body_jump.visible = false;
        penguin_tube_body_jump.tintTopLeft = 13209;
        penguin_tube_body_jump.tintTopRight = 13209;
        penguin_tube_body_jump.tintBottomLeft = 13209;
        penguin_tube_body_jump.tintBottomRight = 13209;
        tube.add(penguin_tube_body_jump);

        // penguin_tube_penguin_jump
        const penguin_tube_penguin_jump = this.add.sprite(-1, -43, "hydro", "penguin/tube_jump-penguin0001");
        penguin_tube_penguin_jump.setOrigin(0.5, 0.5042016806722689);
        penguin_tube_penguin_jump.visible = false;
        tube.add(penguin_tube_penguin_jump);

        // wakeboard
        const wakeboard = this.add.container(4, 0);
        wakeboard.visible = false;
        penguin_cntr.add(wakeboard);

        // penguin_wakeboard
        const penguin_wakeboard = this.add.sprite(2, 52, "hydro", "penguin/wakeboard");
        penguin_wakeboard.setOrigin(0.5039370078740157, 0.5);
        wakeboard.add(penguin_wakeboard);

        // penguin_wakeboard_body
        const penguin_wakeboard_body = this.add.sprite(0, 0, "hydro", "penguin/wakeboard-body");
        penguin_wakeboard_body.setOrigin(0.5038167938931297, 0.5028248587570622);
        wakeboard.add(penguin_wakeboard_body);

        // penguin_wakeboard_penguin
        const penguin_wakeboard_penguin = this.add.sprite(0, 6, "hydro", "penguin/wakeboard-penguin");
        penguin_wakeboard_penguin.setOrigin(0.5038167938931297, 0.5);
        wakeboard.add(penguin_wakeboard_penguin);

        // penguin_wakeboard_jump
        const penguin_wakeboard_jump = this.add.sprite(0, -18, "hydro", "penguin/wakeboard_jump0001");
        penguin_wakeboard_jump.setOrigin(0.5039370078740157, 0.5);
        penguin_wakeboard_jump.visible = false;
        wakeboard.add(penguin_wakeboard_jump);

        // penguin_wakeboard_body_jump
        const penguin_wakeboard_body_jump = this.add.sprite(0, -1, "hydro", "penguin/wakeboard-body");
        penguin_wakeboard_body_jump.setOrigin(0.5038167938931297, 0.5028248587570622);
        penguin_wakeboard_body_jump.visible = false;
        wakeboard.add(penguin_wakeboard_body_jump);

        // penguin_wakeboard_penguin_jump
        const penguin_wakeboard_penguin_jump = this.add.sprite(-2, -61, "hydro", "penguin/wakeboard_jump-penguin0001");
        penguin_wakeboard_penguin_jump.setOrigin(0.5038167938931297, 0.5);
        penguin_wakeboard_penguin_jump.visible = false;
        wakeboard.add(penguin_wakeboard_penguin_jump);

        // wakeboard2
        const wakeboard2 = this.add.container(4, 0);
        wakeboard2.visible = false;
        penguin_cntr.add(wakeboard2);

        // penguin_wakeboard2
        const penguin_wakeboard2 = this.add.sprite(2, 52, "hydro", "penguin/wakeboard2");
        penguin_wakeboard2.setOrigin(0.5039370078740157, 0.5);
        wakeboard2.add(penguin_wakeboard2);

        // penguin_wakeboard2_body
        const penguin_wakeboard2_body = this.add.sprite(0, 0, "hydro", "penguin/wakeboard2-body");
        penguin_wakeboard2_body.setOrigin(0.5038167938931297, 0.5028248587570622);
        wakeboard2.add(penguin_wakeboard2_body);

        // penguin_wakeboard2_penguin
        const penguin_wakeboard2_penguin = this.add.sprite(0, 6, "hydro", "penguin/wakeboard2-penguin");
        penguin_wakeboard2_penguin.setOrigin(0.5038167938931297, 0.5);
        wakeboard2.add(penguin_wakeboard2_penguin);

        // penguin_wakeboard2_jump
        const penguin_wakeboard2_jump = this.add.sprite(0, -18, "hydro", "penguin/wakeboard2_jump0001");
        penguin_wakeboard2_jump.setOrigin(0.5039370078740157, 0.5);
        penguin_wakeboard2_jump.visible = false;
        wakeboard2.add(penguin_wakeboard2_jump);

        // penguin_wakeboard2_body_jump
        const penguin_wakeboard2_body_jump = this.add.sprite(-3, -64, "hydro", "penguin/wakeboard2_jump-body0001");
        penguin_wakeboard2_body_jump.setOrigin(0.5038167938931297, 0.5028248587570622);
        penguin_wakeboard2_body_jump.visible = false;
        wakeboard2.add(penguin_wakeboard2_body_jump);

        // penguin_wakeboard2_penguin_jump
        const penguin_wakeboard2_penguin_jump = this.add.sprite(-2, -61, "hydro", "penguin/wakeboard2_jump-penguin0001");
        penguin_wakeboard2_penguin_jump.setOrigin(0.5038167938931297, 0.5);
        penguin_wakeboard2_penguin_jump.visible = false;
        wakeboard2.add(penguin_wakeboard2_penguin_jump);

        // instructions_cntr
        const instructions_cntr = this.add.container(760, 302);
        instructions_cntr.visible = false;

        // mouse_anim
        const mouse_anim = this.add.sprite(38, 0, "hydro", "mouse-anim0001");
        mouse_anim.setOrigin(0.5006622516556292, 0.5);
        mouse_anim.play("hydro-mouse-anim");
        instructions_cntr.add(mouse_anim);

        // ready_btn
        const ready_btn = this.add.image(0, 293, "hydro", "ready-btn");
        instructions_cntr.add(ready_btn);

        // start_cntr
        const start_cntr = this.add.container(760, 480);

        // startscreen
        const startscreen = this.add.image(0, 0, "hydro", "startscreen");
        start_cntr.add(startscreen);

        // start_btn
        const start_btn = this.add.image(0, 242, "hydro", "start-btn");
        start_cntr.add(start_btn);

        // next_level_cntr
        const next_level_cntr = this.add.container(760, 328);
        next_level_cntr.visible = false;

        // next_level_btn
        const next_level_btn = this.add.image(0, 224, "hydro", "next-level-btn");
        next_level_cntr.add(next_level_btn);

        // next_level_text
        const next_level_text = this.add.image(176, 0, "hydro", "next-level-text0001");
        next_level_cntr.add(next_level_text);

        // score_cntr
        const score_cntr = this.add.container(953, 65);
        score_cntr.visible = false;

        // level2
        const level2 = this.add.text(73, 0, "", {});
        level2.setOrigin(1, 0.4);
        level2.text = "01";
        level2.setStyle({ "align": "right", "color": "#33CCFF", "fontFamily": "Burbank Small", "fontSize": "56px", "fontStyle": "bold" });
        score_cntr.add(level2);

        // level1
        const level1 = this.add.text(73, 0, "", {});
        level1.setOrigin(1, 0.4);
        level1.text = "1";
        level1.setStyle({ "align": "right", "color": "#006699", "fontFamily": "Burbank Small", "fontSize": "56px", "fontStyle": "bold" });
        score_cntr.add(level1);

        // level_header
        const level_header = this.add.text(0, 10, "", {});
        level_header.setOrigin(1, 0.4);
        level_header.text = "LEVEL:";
        level_header.setStyle({ "align": "right", "color": "#33CCFF", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        score_cntr.add(level_header);

        // score2
        const score2 = this.add.text(458, 0, "", {});
        score2.setOrigin(1, 0.4);
        score2.text = "000000";
        score2.setStyle({ "align": "right", "color": "#33CCFF", "fontFamily": "Burbank Small", "fontSize": "56px", "fontStyle": "bold" });
        score_cntr.add(score2);

        // score1
        const score1 = this.add.text(458, 0, "", {});
        score1.setOrigin(1, 0.4);
        score1.text = "0";
        score1.setStyle({ "align": "right", "color": "#006699", "fontFamily": "Burbank Small", "fontSize": "56px", "fontStyle": "bold" });
        score_cntr.add(score1);

        // score_header
        const score_header = this.add.text(230, 10, "", {});
        score_header.setOrigin(1, 0.4);
        score_header.text = "SCORE:";
        score_header.setStyle({ "align": "right", "color": "#33CCFF", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        score_cntr.add(score_header);

        // lives_cntr
        const lives_cntr = this.add.container(240, 97);
        lives_cntr.visible = false;

        // life1
        const life1 = this.add.image(70, 0, "hydro", "life");
        life1.setOrigin(0.5, 0.5053763440860215);
        lives_cntr.add(life1);

        // life2
        const life2 = this.add.image(35, 0, "hydro", "life");
        life2.setOrigin(0.5, 0.5053763440860215);
        lives_cntr.add(life2);

        // life3
        const life3 = this.add.image(0, 0, "hydro", "life");
        life3.setOrigin(0.5, 0.5053763440860215);
        lives_cntr.add(life3);

        // close_btn
        const close_btn = this.add.image(1471, 43, "hydro", "close-btn");

        // lists
        const penguinSprites = [penguin_wakeboard2_penguin, penguin_wakeboard2_body, penguin_wakeboard2, penguin_wakeboard_penguin, penguin_wakeboard_body, penguin_wakeboard, penguin_tube_penguin, penguin_tube_body, penguin_tube];
        const penguinAnimationSprites = [penguin_tube_jump, penguin_tube_penguin_jump, penguin_tube_body_jump];

        // ready_btn (components)
        const ready_btnButton = new Button(ready_btn);
        ready_btnButton.callback = () => this.startGame();

        // start_btn (components)
        const start_btnButton = new Button(start_btn);
        start_btnButton.callback = () => this.showInstructions();

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.callback = () => this.endGame();

        this.wake30 = wake30;
        this.wake29 = wake29;
        this.wake28 = wake28;
        this.wake27 = wake27;
        this.wake26 = wake26;
        this.wake25 = wake25;
        this.wake24 = wake24;
        this.wake23 = wake23;
        this.wake22 = wake22;
        this.wake21 = wake21;
        this.wake20 = wake20;
        this.wake19 = wake19;
        this.wake18 = wake18;
        this.wake17 = wake17;
        this.wake16 = wake16;
        this.wake15 = wake15;
        this.wake14 = wake14;
        this.wake13 = wake13;
        this.wake12 = wake12;
        this.wake11 = wake11;
        this.wake10 = wake10;
        this.wake9 = wake9;
        this.wake8 = wake8;
        this.wake7 = wake7;
        this.wake6 = wake6;
        this.wake5 = wake5;
        this.wake4 = wake4;
        this.wake3 = wake3;
        this.wake2 = wake2;
        this.wake1 = wake1;
        this.penguin_tube = penguin_tube;
        this.penguin_tube_body = penguin_tube_body;
        this.penguin_tube_penguin = penguin_tube_penguin;
        this.penguin_tube_jump = penguin_tube_jump;
        this.penguin_tube_body_jump = penguin_tube_body_jump;
        this.penguin_tube_penguin_jump = penguin_tube_penguin_jump;
        this.tube = tube;
        this.penguin_wakeboard = penguin_wakeboard;
        this.penguin_wakeboard_body = penguin_wakeboard_body;
        this.penguin_wakeboard_penguin = penguin_wakeboard_penguin;
        this.penguin_wakeboard_jump = penguin_wakeboard_jump;
        this.penguin_wakeboard_body_jump = penguin_wakeboard_body_jump;
        this.penguin_wakeboard_penguin_jump = penguin_wakeboard_penguin_jump;
        this.wakeboard = wakeboard;
        this.penguin_wakeboard2 = penguin_wakeboard2;
        this.penguin_wakeboard2_body = penguin_wakeboard2_body;
        this.penguin_wakeboard2_penguin = penguin_wakeboard2_penguin;
        this.penguin_wakeboard2_jump = penguin_wakeboard2_jump;
        this.penguin_wakeboard2_body_jump = penguin_wakeboard2_body_jump;
        this.penguin_wakeboard2_penguin_jump = penguin_wakeboard2_penguin_jump;
        this.wakeboard2 = wakeboard2;
        this.penguin_cntr = penguin_cntr;
        this.game_cntr = game_cntr;
        this.instructions_cntr = instructions_cntr;
        this.start_cntr = start_cntr;
        this.next_level_text = next_level_text;
        this.next_level_cntr = next_level_cntr;
        this.level2 = level2;
        this.level1 = level1;
        this.score2 = score2;
        this.score1 = score1;
        this.score_cntr = score_cntr;
        this.life1 = life1;
        this.life2 = life2;
        this.life3 = life3;
        this.lives_cntr = lives_cntr;
        this.penguinSprites = penguinSprites;
        this.penguinAnimationSprites = penguinAnimationSprites;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
        this.score = 0;
        this.lineOffset = 0;

        this.graphics = this.add.graphics()
        this.game_cntr.add(this.graphics)
    }

    endGame() {
        this.network.send('game_over', { coins: this.score / 10 })
        this.input.off('mousemove')
    }

    sendLeaveGame() {
        this.network.send('leave_game')
        this.leaveGame()
    }

    leaveGame() {
        this.world.client.sendJoinLastRoom()
    }

    showInstructions() {
        this.instructions_cntr.visible = true;
        this.start_cntr.visible = false;
    }

    startGame() {
        this.instructions_cntr.visible = false;
        this.game_cntr.visible = true;
        this.lives_cntr.visible = true;
        this.score_cntr.visible = true;

        switch (this.world.client.penguin.hand) {
            case 711:
                this.wakeboard.visible = true;
                break;
            case 712:
                this.wakeboard2.visible = true;
                break;
            default:
                this.tube.visible = true;
                break;
        }

        this.input.on('pointermove', (pointer) => {
            this.handleMouseMove(pointer)
        })

        this.input.on('pointerup', () => {
            this.handleJump()
        })

        setInterval(() => {
            this.moveWakes()
        }, 1000 / 24)
    }

    handleJump() {
        if (this.isJumping) return
        this.isJumping = true

        const promises = []

        this.penguinSprites.forEach(sprite => {
            let promise = new Promise((resolve) => {
                sprite.visible = false
                const frame = sprite.frame.name;
                if (frame.includes("-")) {
                    sprite.play(`hydro-${frame.split("-")[0]}_jump-${frame.split("-")[1]}`)
                } else {
                    sprite.play(`hydro-${frame}_jump`)
                }
                sprite.on('animationcomplete', () => {
                    sprite.setFrame(frame)
                    sprite.visible = true
                    resolve()
                })
            })               
            promises.push(promise)
        })

        this.penguinAnimationSprites.forEach(sprite => {
            sprite.visible = true
            const frame = sprite.frame.name;
            sprite.play(`hydro-${frame.replace("0001", "")}`)
            sprite.on('animationcomplete', () => {
                sprite.setFrame(frame)
                sprite.visible = false
            })
        })

        Promise.all(promises).then(() => {
            this.isJumping = false
        })
    }

    handleMouseMove(pointer) {
        let x = pointer.x - 760
        if (x < -300) x = -300
        if (x > 300) x = 300
        this.penguin_cntr.x = x
        this.penguin_cntr.y = 377 - Math.abs(x) / 3
        this.penguin_cntr.angle = x / 10
    }

    moveWakes() {
        if (this.isJumping) {
            for (let i = 1; i <= 30; i++) {
                this[`wake${i}`].x = this[`wake${i}`].x
                this[`wake${i}`].y = this[`wake${i}`].y + 10
            }
            return
        }

        for (let i = 30; i > 1; i--) {
            this[`wake${i}`].x = this[`wake${i - 1}`].x
            this[`wake${i}`].y = this[`wake${i - 1}`].y + 10
        }

        this.wake1.x = this.penguin_cntr.x
        this.wake1.y = this.penguin_cntr.y
    }

    drawLine() {
        this.graphics.clear()

        this.graphics.lineStyle(2, 0x000000, 1)
        this.graphics.beginPath()
        this.graphics.moveTo(-2, 42)
        this.graphics.lineTo(this.penguin_cntr.x, this.penguin_cntr.y - this.lineOffset)
        this.graphics.closePath()
        this.graphics.strokePath()

        this.game_cntr.bringToTop(this.penguin_cntr)
    }

    update() {
        this.drawLine()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
