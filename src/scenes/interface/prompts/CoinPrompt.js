import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class CoinPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.game_name;
        /** @type {Phaser.GameObjects.Image} */
        this.prompt_coin;
        /** @type {Phaser.GameObjects.Text} */
        this.youve_earned_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.coins_earned_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.your_total_coins_txt;
        /** @type {Phaser.GameObjects.Container} */
        this.nostamps_cntr;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 550, 584, 50, 50, 50, 50);
        this.add(bg);

        // nostamps_cntr
        const nostamps_cntr = scene.add.container(-194, -261);
        this.add(nostamps_cntr);

        // game_name
        const game_name = scene.add.text(194, 0, "", {});
        game_name.setOrigin(0.5, 0.5);
        game_name.text = "Pizzatron 3000";
        game_name.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#084074ff", "shadow.fill":true});
        nostamps_cntr.add(game_name);

        // prompt_coin
        const prompt_coin = scene.add.image(6, 113, "main", "prompt_coin");
        nostamps_cntr.add(prompt_coin);

        // youve_earned_txt
        const youve_earned_txt = scene.add.text(194, 33, "", {});
        youve_earned_txt.setOrigin(0.5, 0.5);
        youve_earned_txt.text = "You've earned:";
        youve_earned_txt.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "22px", "shadow.color": "#fff" });
        nostamps_cntr.add(youve_earned_txt);

        // coins_earned_txt
        const coins_earned_txt = scene.add.text(54, 99, "", {});
        coins_earned_txt.setOrigin(0, 0.5);
        coins_earned_txt.text = "9999 coins";
        coins_earned_txt.setStyle({ "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#084074ff", "shadow.fill":true});
        nostamps_cntr.add(coins_earned_txt);

        // your_total_coins_txt
        const your_total_coins_txt = scene.add.text(56, 130, "", {});
        your_total_coins_txt.setOrigin(0, 0.5);
        your_total_coins_txt.text = "Your total coins: 10000";
        your_total_coins_txt.setStyle({ "color": "#ffffffff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "22px", "shadow.color": "#fff" });
        nostamps_cntr.add(your_total_coins_txt);

        // blue_button
        const blue_button = scene.add.image(414, -19, "main", "blue-button");
        nostamps_cntr.add(blue_button);

        // blue_x
        const blue_x = scene.add.image(414, -21, "main", "blue-x");
        nostamps_cntr.add(blue_x);

        // block (components)
        new Interactive(block);

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.callback = () => this.callback();

        this.bg = bg;
        this.game_name = game_name;
        this.prompt_coin = prompt_coin;
        this.youve_earned_txt = youve_earned_txt;
        this.coins_earned_txt = coins_earned_txt;
        this.your_total_coins_txt = your_total_coins_txt;
        this.nostamps_cntr = nostamps_cntr;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(coins, game, stampCategory, earnedStamps) {
        if (stampCategory > 0) {
            this.nostamps_cntr.y = -40
            this.bg.setSize(550, 584)

            // Handle showing stamps
        } else {
            this.nostamps_cntr.y = -105
            this.bg.setSize(550, 280)
        }

        this.game_name.text = game
        this.coins_earned_txt.text = coins + " coins"
        this.your_total_coins_txt.text = "Your total coins: " + this.world.client.coins

        super.show()
    }

    callback() {
        if (this.ruffle.container && this.ruffle.container.visible) {
            this.ruffle.close()
        }

        this.world.client.sendJoinLastRoom()

        this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
