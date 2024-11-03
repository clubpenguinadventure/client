import EventComponent from "./EventComponent";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InputText extends EventComponent {
    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject;
        /** @type {boolean} */
        this.multiline = 0;
        /** @type {boolean} */
        this.ispassword = false;
        /** @type {number} */
        this.charlimit = 0;
        /** @type {regex} */
        this.inputfilter;
        /** @type {any} */
        this.entercallback = () => {};
        /** @type {any} */
        this.userdefinedonclickfunction = () => {};
        /** @type {boolean} */
        this.extends = true;
        /** @type {"lowercase"|"uppercase"|"disabled"} */
        this.forceCase = "disabled";

        this.gameObject = gameObject;
        gameObject["__InputText"] = this;

        /* START-USER-CTR-CODE */
        this.gameObject.textContent = "";
        this.interface = this.gameObject.scene.interface;
        this.input = this.interface.input;
        this.shift = this.input.keyboard.addKey("SHIFT");
        this.ctrl = this.input.keyboard.addKey("CTRL");
        /* END-USER-CTR-CODE */
    }

    /** @returns {InputText} */
    static getComponent(gameObject) {
        return gameObject["__InputText"];
    }

    /* START-USER-CODE */

    set isSelected(value) {
        this._isSelected = value;
        this.interface.isInputActive = value;
    }

    get isSelected() {
        return this._isSelected;
    }

    /**
     * Has the text of the input field been changed by the user?
     * @returns {boolean}
     */
    get isChanged() {
        return this.gameObject.text != this.defaultText;
    }

    /**
     * Checks if the user is on mobile
     * @returns {boolean}
     */
    get isMobile() {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    /**
     * Initialises the InputText component
     * @returns {void}
     */
    start() {
        this.defaultText = this.gameObject.text;
        this.gameObject.textContent = this.gameObject.text;
        this.lineWidth = this.gameObject.style.fixedWidth;

        // The clickable area of the input field
        this.clickZone = this.gameObject.scene.add.rectangle(
            this.gameObject.x,
            this.gameObject.y,
            this.lineWidth,
            this.gameObject.height,
            0x00ff00, // Green
            localStorage.debugMode == "true" ? 0.5 : 0, // If in debug mode, make the click zone visible
        );
        this.clickZone.setOrigin(this.gameObject.originX, this.gameObject.originY);

        // This checks if the input field is visible by checking if all the parents are visible as well
        let visible = this.gameObject.visible;
        let curObject = this.gameObject;
        let insideCustomContainer = false;
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer;
            visible = visible && curObject.visible;
            if (curObject.isCustomContainer) {
                insideCustomContainer = true;
            }
        }

        // Set not clickable if invisible
        this.clickZone.visible = visible;

        // Set the click zone to be interactive
        this.clickZone.setInteractive({
            cursor: "text",
            pixelPerfect: false,
        });
        // Add the event listeners for when you hover and click on the input field
        this.clickZone.on("pointerup", (pointer) => this.onUp(pointer));
        this.clickZone.on("pointerover", () => this.onOver());
        this.clickZone.on("pointerout", () => this.onOut());

        // Listen for key presses. These aren't actually thrown by the browser directly, but by Boot.js.
        // This also means we can similate key presses by just simulating the events. Not sure why you would want to do that though.
        this.input.keyboard.on("keydown", (event) => this.onKeyDown(event));
        this.input.keyboard.on("keyup", (event) => this.onKeyUp(event));

        // Create the flashing indicator that you've selected the input field
        this.indicator = this.gameObject.scene.add.rectangle(
            this.gameObject.x,
            this.gameObject.y - this.gameObject.padding.bottom,
            1,
            this.getCharHeight("I"), // It's the same height as a letter I.
            `0x${this.gameObject.style.color == "#fff" ? "ffffff" : this.gameObject.style.color.substring(1, 7)}`,
            1,
        );
        this.indicator.setOrigin(this.gameObject.originX, this.gameObject.originY);
        this.indicator.visible = false;

        // Add the indicator to the scene's input text container if it exists
        if (this.gameObject.scene.inputTextContainer && !insideCustomContainer) {
            this.gameObject.scene.inputTextContainer.add(this.indicator);
            this.gameObject.scene.inputTextContainer.add(this.clickZone);
        } else if (this.gameObject.parentContainer) {
            // Otherwise add it to the parent container.
            this.gameObject.parentContainer.add(this.indicator);
            this.gameObject.parentContainer.add(this.clickZone);
        } else {
            // Or the scene, if there is no parent container.
            this.gameObject.scene.add.existing(this.indicator);
            this.gameObject.scene.add.existing(this.clickZone);
        }

        this.x = this.gameObject.x;

        this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight);
        this.wrapText();
        this.createMask();
    }

    /**
     * The global x position of the input field in the whole game.
     * Probably a way to get this from the game engine but I couldn't find one?
     * @returns {number}
     */
    get trueX() {
        let x = this.gameObject.x - this.lineWidth * this.gameObject.originX;
        let curObject = this.gameObject;
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer;
            x += curObject.x;
        }
        return x;
    }

    /**
     * The global y position of the input field in the whole game.
     * Probably a way to get this from the game engine but I couldn't find one?
     * getWorldTransformMatrix might work
     * @returns {number}
     */
    get trueY() {
        let y = this.gameObject.y - this.gameObject.height * this.gameObject.originY;
        let curObject = this.gameObject;
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer;
            y += curObject.y;
        }
        return y;
    }

    /**
     * Creates a mask for the input field so that the text doesn't go outside the bounds of the input field.
     * @returns {void}
     */
    createMask() {
        this.mask = this.gameObject.scene.add.graphics();
        this.mask.fillStyle(0xffffff, 0);
        this.mask.beginPath();
        this.maskRect = this.mask.fillRect(this.trueX, this.trueY, this.lineWidth, this.gameObject.height);
        this.mask = this.mask.createGeometryMask();
        this.gameObject.setMask(this.mask);

        this.firstTrueX = this.trueX;
        this.firstTrueY = this.trueY;

        this.update = this.updateRect;
    }

    /**
     * Updates the position of the mask to match the current position of the input field.
     * Happens every frame because the scene or parent container could move and we wouldn't know.
     * @returns {void}
     */
    updateRect() {
        if (this.gameObject.visible && (this.trueX - this.firstTrueX != this.maskRect.x || this.trueY - this.firstTrueY != this.maskRect.y)) {
            this.maskRect.x = this.trueX - this.firstTrueX;
            this.maskRect.y = this.trueY - this.firstTrueY;
        }
    }

    /**
     * Sets what the default text of the input field should be, before the user has entered anything.
     * @param {string} text - The default text of the input field.
     * @returns {void}
     * @example this.usernameField.__inputText.setDefaultText("Username");
     */
    setDefaultText(text) {
        this.defaultText = text;
        this.gameObject.text = text;
        this.gameObject.textContent = text;

        this.userClicked = false;

        this.wrapText();
    }

    /**
     * What happens when the user clicks on the input field.
     * @param {Phaser.Input.Pointer} pointer - The pointer that triggered the event.
     * @returns {void}
     */
    processClick(pointer) {
        let offset = 0;
        let curObject = this.gameObject;
        while (curObject.parentContainer) {
            curObject = curObject.parentContainer;
            offset += curObject.x;
        }
        let x = pointer.x - offset;

        let charPoint = 0;
        let charWidth = 0;
        let prevWidth = 0;
        let text = this.gameObject.text;

        if (this.gameObject.style.fixedWidth != 0) {
            prevWidth = this.gameObject.style.fixedWidth;
            this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight);
        }

        while (charPoint <= text.length && charWidth < x) {
            this.gameObject.text = text.substring(0, charPoint);
            charWidth = this.gameObject.width;
            charPoint++;
        }

        this.beforeCursor = text.substring(0, charPoint - 1);
        this.afterCursor = text.substring(charPoint - 1, text.length);
        this.gameObject.textContent = this.beforeCursor + this.afterCursor;
        this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, "*") : this.gameObject.textContent;

        if (this.gameObject.style.align == "right") {
            this.indicator.x = this.gameObject.x - charWidth;
            this.indicator.y = this.getLinePos(this.beforeCursor);
        } else if (this.gameObject.style.align == "center") {
            this.indicator.x = this.gameObject.x + charWidth / 2;
            this.indicator.y = this.getLinePos(this.beforeCursor);
        } else {
            this.indicator.x = this.gameObject.x + charWidth;
            this.indicator.y = this.getLinePos(this.beforeCursor);
        }

        this.gameObject.setFixedSize(prevWidth, this.gameObject.style.fixedHeight);
    }

    /**
     * The function that triggers on the pointerup event of this.clickZone.
     * @param {Phaser.Input.Pointer} pointer - The pointer that triggered the event.
     * @returns {void}
     */
    onUp(pointer) {
        setTimeout(() => {
            if (pointer.button != 0 || this.isSelected) {
                return;
            }

            this.userdefinedonclickfunction();

            if (!this.userClicked) {
                this.userClicked = true;
                this.gameObject.text = "";
                this.gameObject.textContent = "";
                this.indicator.x = this.gameObject.x;
            }

            this.processClick(pointer);

            this.input.once("pointerup", (pointer) => this.onClick(pointer));
            this.isSelected = true;
            window.isCustomInputActive = true;
            this.flashIndicator();

            if (this.isMobile) {
                document.getElementById("dummyForMobileKeyboard").focus();
            }
        }, 100);
    }

    /**
     * We use two different functions here because we need to detect clicks anywhere on the screen once it has been clicked, not just on the input field.
     * @param {Phaser.Input.Pointer} pointer - The pointer that triggered the event.
     * @returns {void}
     */
    onClick(pointer) {
        if (!this.isOver) {
            this.isSelected = false;
            window.isCustomInputActive = false;
            this.indicator.visible = false;
        } else {
            this.userdefinedonclickfunction();
            this.input.once("pointerup", (pointer) => this.onClick(pointer));

            this.processClick(pointer);

            if (this.isMobile) {
                document.getElementById("dummyForMobileKeyboard").focus();
            }
        }
    }

    /**
     * Gets the width of a string in the current font and style.
     * @param {string} char - The string to get the width of.
     * @returns {number}
     * @example let width = this.textInputField.__inputText.getCharWidth("A");
     */
    getCharWidth(char) {
        // Replaces the given string with * if the input field is a password field
        if (this.ispassword) char = char.replace(/./g, "*");

        // Gets the current width of the input field
        let prevWidth = this.gameObject.style.fixedWidth;
        let prevText = this.gameObject.text;
        // Disables fixed width so that the width of the text can be measured
        this.gameObject.setFixedSize(0, this.gameObject.style.fixedHeight);
        // Splits the text by new lines and gets the last line
        let arr = char.split("\n");
        this.gameObject.text = arr[arr.length - 1];
        // Gets the width
        let width = this.gameObject.width;
        // Resets the text and width
        this.gameObject.text = prevText;
        this.gameObject.setFixedSize(prevWidth, this.gameObject.style.fixedHeight);
        return width;
    }

    /**
     * Gets the height of a character in the current font and style.
     * @param {string} char - The character to get the height of.
     * @returns {number}
     * @example let height = this.textInputField.__inputText.getCharHeight("A");
     */
    getCharHeight(char) {
        // Replaces the given string with * if the input field is a password field
        if (this.ispassword) char = char.replace(/./g, "*");

        // Gets the current height of the input field
        let prevHeight = this.gameObject.style.fixedHeight;
        let prevText = this.gameObject.text;
        // Disables fixed height so that the height of the text can be measured
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, 0);
        // Gets the height
        this.gameObject.text = char;
        let height = this.gameObject.height;
        // Resets the text and height
        this.gameObject.text = prevText;
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, prevHeight);
        return height;
    }

    /**
     * Gets the Y position of the bottom line of given text
     * @param {string} char - The text to get the position of.
     * @returns {number}
     * @example let pos = this.textInputField.__inputText.getLinePos("Hello\nWorld");
     */
    getLinePos(char) {
        if (this.ispassword) char = char.replace(/./g, "*");

        let prevHeight = this.gameObject.style.fixedHeight;
        let prevText = this.gameObject.text;
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, 0);
        let arr = char.split("\n");
        this.gameObject.text = arr.pop();
        let height = this.gameObject.height * this.gameObject.originY;
        for (let i = 0; i < arr.length; i++) {
            this.gameObject.text = arr[i];
            height -= this.gameObject.height * this.gameObject.originY;
        }
        this.gameObject.text = prevText;
        this.gameObject.setFixedSize(this.gameObject.style.fixedWidth, prevHeight);

        var offset = this.gameObject.y + this.gameObject.height * this.gameObject.originY;
        return offset - height - this.gameObject.padding.bottom;
    }

    /**
     * Called when the mouse is over the input field.
     * @returns {void}
     */
    onOver() {
        this.isOver = true;
    }

    /**
     * Called when the mouse leaves the input field.
     */
    onOut() {
        this.isOver = false;
    }

    /**
     * Called when a key is pressed.
     * Massive function. Desperately needs refactoring.
     * @param {KeyboardEvent} event - The event that triggered the function.
     * @returns {void}
     */
    async onKeyDown(event) {
        if (event.key == "Control") {
            this.controlIsDown = true;
            return;
        }

        if (!this.isSelected) return;
        if (event.key == "Tab") {
            let inputs = this.gameObject.scene.children.list.filter((child) => child.__InputText);
            let index = inputs.indexOf(this.gameObject);
            if (inputs.length == 1) return;
            if (index == inputs.length - 1) {
                index = -1;
            }
            inputs[index + 1].__InputText.onUp({button: 0});
            this.isSelected = false;
            window.isCustomInputActive = false;
            this.indicator.visible = false;
        } else if (event.key == "Backspace") {
            if (this.ctrl.isDown || this.controlIsDown) {
                let lastSpace = this.beforeCursor.lastIndexOf(" ");
                if (lastSpace == -1) {
                    this.beforeCursor = "";
                } else {
                    this.beforeCursor = this.beforeCursor.substring(0, lastSpace);
                }
            } else {
                this.beforeCursor = this.beforeCursor.slice(0, -1);
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor;
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, "*") : this.gameObject.textContent;
            if (this.gameObject.width > this.lineWidth && !this.multiline && this.extends) {
                this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth);
            } else {
                this.gameObject.x = this.x;
            }
        } else if (event.key == "Delete") {
            if (this.ctrl.isDown || this.controlIsDown) {
                let firstSpace = this.afterCursor.indexOf(" ");
                if (firstSpace == -1) {
                    this.afterCursor = "";
                } else {
                    this.afterCursor = this.afterCursor.substring(firstSpace + 1, this.afterCursor.length);
                }
            } else {
                this.afterCursor = this.afterCursor.slice(1);
            }
            this.gameObject.textContent = this.beforeCursor + this.afterCursor;
            this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, "*") : this.gameObject.textContent;
            if (this.gameObject.width > this.lineWidth && !this.multiline && this.extends) {
                this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth);
            } else {
                this.gameObject.x = this.x;
            }
        } else if (event.key == "Enter") {
            if (this.shift.isDown && this.multiline) {
                this.text += "\n";
                return;
            }
            if (this.entercallback) {
                this.entercallback();
                this.isSelected = false;
                window.isCustomInputActive = false;
                this.indicator.visible = false;
                return;
            }
        } else if (event.key == "ArrowLeft") {
            if (this.beforeCursor.length > 0) {
                if (this.ctrl.isDown || this.controlIsDown) {
                    let lastSpace = this.beforeCursor.substring(0, this.beforeCursor.length - 1).lastIndexOf(" ");
                    if (lastSpace == -1) {
                        this.afterCursor = this.beforeCursor + this.afterCursor;
                        this.beforeCursor = "";
                    } else {
                        this.afterCursor = this.beforeCursor.substring(lastSpace + 1, this.beforeCursor.length) + this.afterCursor;
                        this.beforeCursor = this.beforeCursor.substring(0, lastSpace + 1);
                    }
                } else {
                    this.afterCursor = this.beforeCursor.slice(-1) + this.afterCursor;
                    this.beforeCursor = this.beforeCursor.slice(0, -1);
                }
            }
        } else if (event.key == "ArrowRight") {
            if (this.afterCursor.length > 0) {
                if (this.ctrl.isDown || this.controlIsDown) {
                    let firstSpace = this.afterCursor.substring(0, this.afterCursor.length).indexOf(" ") + 1;
                    if (firstSpace == 0) {
                        this.beforeCursor += this.afterCursor;
                        this.afterCursor = "";
                    } else {
                        this.beforeCursor += this.afterCursor.substring(0, firstSpace);
                        this.afterCursor = this.afterCursor.substring(firstSpace, this.afterCursor.length);
                    }
                } else {
                    this.beforeCursor += this.afterCursor.slice(0, 1);
                    this.afterCursor = this.afterCursor.slice(1);
                }
            }
        } else if (this.ctrl.isDown || this.controlIsDown) {
            if (event.key == "v") {
                let text = await navigator.clipboard.readText();
                if (text) {
                    if (this.inputfilter && !this.inputfilter.test(text)) {
                        let textArray = [];
                        for (let i = 0; i < text.length; i++) {
                            let char = text[i];
                            if (this.forceCase == "uppercase") {
                                char = char.toUpperCase();
                            } else if (this.forceCase == "lowercase") {
                                char = char.toLowerCase();
                            }
                            if (this.inputfilter.test(char)) {
                                textArray.push(char);
                            }
                        }
                        text = textArray.join("");
                    }
                    if (text.length > this.maxlength) text = text.substring(0, this.maxlength);
                    this.beforeCursor = text;
                    this.afterCursor = "";
                    this.gameObject.textContent = this.beforeCursor + this.afterCursor;
                    this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, "*") : this.gameObject.textContent;
                    this.wrapText();
                }
            } else if (event.key == "c") {
                navigator.clipboard.writeText(this.gameObject.textContent);
            }
        } else if (event.key.length != 1) {
            return;
        } else if (this.charlimit > 0 && (this.gameObject.text + event.key).length > this.charlimit) {
            return;
        } else {
            let key = event.key;
            if (this.shift.isDown || event.getModifierState("CapsLock") || this.forceCase == "uppercase") {
                key = key.toUpperCase();
            }
            if (this.forceCase == "lowercase") {
                key = key.toLowerCase();
            }
            if (this.inputfilter && !this.inputfilter.test(key)) {
                return;
            }
            this.beforeCursor += key;
            this.gameObject.textContent = this.beforeCursor + this.afterCursor;
            if (this.ispassword) {
                this.gameObject.text += "*";
            } else {
                this.gameObject.text = this.beforeCursor + this.afterCursor;
            }

            if (this.gameObject.width > this.lineWidth) {
                if (!this.multiline) {
                    if (!this.extends) {
                        this.beforeCursor = this.beforeCursor.slice(0, -1);
                        this.gameObject.textContent = this.beforeCursor + this.afterCursor;
                        this.gameObject.text = this.gameObject.textContent;
                    } else {
                        this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth);
                    }
                } else {
                    const last30Chars = this.beforeCursor.slice(-30);
                    const spaceIndex = last30Chars.lastIndexOf(" ");
                    const newLineIndex = spaceIndex === -1 ? this.beforeCursor.length - 1 : this.beforeCursor.length - 30 + spaceIndex;
                    const beforeNewline = this.beforeCursor.slice(0, newLineIndex);
                    const afterNewline = this.beforeCursor.slice(newLineIndex + 1);
                    this.beforeCursor = beforeNewline + "\n" + afterNewline;
                    this.gameObject.textContent = this.beforeCursor + this.afterCursor;
                    this.gameObject.text = this.gameObject.textContent;
                }
            } else if (this.extends) {
                this.gameObject.x = this.x;
            }
        }

        if (this.gameObject.style.align == "right") {
            this.indicator.x = this.gameObject.x - this.getCharWidth(this.beforeCursor);
            this.indicator.y = this.getLinePos(this.beforeCursor);
        } else if (this.gameObject.style.align == "center") {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor) / 2 - this.getCharWidth(this.afterCursor) / 2;
            this.indicator.y = this.getLinePos(this.beforeCursor);
        } else {
            this.indicator.x = this.gameObject.x + this.getCharWidth(this.beforeCursor);
            this.indicator.y = this.getLinePos(this.beforeCursor);
        }
    }

    /**
     *
     */
    async onKeyUp(event) {
        if (event.key == "Control") {
            this.controlIsDown = false;
            return;
        }
    }

    /**
     * Flashes the indicator every half second.
     * @returns {void}
     */
    flashIndicator() {
        if (this.isSelected) {
            this.indicator.visible = true;
            setTimeout(() => {
                this.indicator.visible = false;
                setTimeout(() => this.flashIndicator(), 500);
            }, 500);
        }
    }

    /**
     * Clears the text of the input back to the default.
     * @returns {void}
     * @example this.usernameField.__inputText.clearText();
     */
    clearText() {
        this.userClicked = false;
        this.gameObject.text = this.defaultText;
        this.gameObject.textContent = this.defaultText;
        this.gameObject.x = this.x;
        this.indicator.x = this.gameObject.x;
    }

    /**
     * Wraps the text of the input field if it is too long.
     * @returns {void}
     */
    wrapText() {
        if (this.gameObject.width > this.lineWidth) {
            if (!this.multiline) {
                if (!this.extends) {
                    while (this.gameObject.width > this.lineWidth) {
                        this.gameObject.text = this.gameObject.text.slice(0, -1);
                        this.gameObject.textContent = this.gameObject.textContent.slice(0, -1);
                    }
                } else {
                    this.gameObject.x = this.x - (this.gameObject.width - this.lineWidth);
                }
            } else {
                let textArray = this.gameObject.textContent.split(" ");
                let text = "";
                let line = "";
                for (let i = 0; i < textArray.length; i++) {
                    if (this.getCharWidth(line + textArray[i]) < this.lineWidth) {
                        line += textArray[i] + " ";
                    } else {
                        text += line + "\n";
                        line = textArray[i] + " ";
                    }
                }
                text += line;
                this.beforeCursor = text;
                this.afterCursor = "";
                this.gameObject.textContent = this.beforeCursor + this.afterCursor;
                this.gameObject.text = this.ispassword ? this.gameObject.textContent.replace(/./g, "*") : this.gameObject.textContent;
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
