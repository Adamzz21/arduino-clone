import StarterKit from "../../assets/arduino-starter-kit.jpg";
import oplaKit from "../../assets/oplatkit.jpg";
import SensorKit from "../../assets/sensorkit.jpg";

const NanoImages = {
    nano33iot:
        "https://www.arduino.cc/wiki/static/8ec0d0616effd3d37ddd111d93310a6b/a2510/nano-33-iot.jpg",
    nanorp2040:
        "https://www.arduino.cc/wiki/static/8d18080bb42f8aa021e083e9a89ce55e/53d2d/nano-rp2040-connect.jpg",
    nanoESP32:
        "https://www.arduino.cc/wiki/static/1c4f828c21b084630f9ccebc0b879e4b/a2510/nano-esp32.jpg",
    nano33BLEsense:
        "https://www.arduino.cc/wiki/static/283e4d99b4af180a39e62bd90e2829e9/a2510/nano-ble-sense.jpg",
    nano33BLE:
        "https://www.arduino.cc/wiki/static/ce3ddce537c30bacaa76b0d77f49d626/a2510/nano-ble.jpg",
    nano2040:
        "https://www.arduino.cc/wiki/static/8d18080bb42f8aa021e083e9a89ce55e/53d2d/nano-rp2040-connect.jpg",
    nanoevery:
        "https://www.arduino.cc/wiki/static/ef5255409b15057749730f6cf44b07ac/a2510/nano-every.jpg",
    nano: "https://www.arduino.cc/wiki/static/3dbf51a969cfdb2e998fff260563f1db/a2510/nano.jpg",
    nanomotorcarrier:
        "https://www.arduino.cc/wiki/static/43b312baedaacd1674957ed27f4ab784/a2510/nano-motor-carrier.jpg",
};
const MKRImages = {
    Boards: {
        MKR1000Wifi:
            "https://www.arduino.cc/wiki/static/b92e82929f10b85ae50614e733897b31/67e9d/mkr_1000_wifi.jpg",
        MKR1010:
            "https://www.arduino.cc/wiki/static/f75904dcfd8726fe1283584c02547c7d/c1b63/mkr_wifi_1010.png",
        MKR1200:
            "https://www.arduino.cc/wiki/static/cb60c5834e614fbab029f17a60b990d0/c1b63/mkr_fox_1200.png",
        MKR1300:
            "https://www.arduino.cc/wiki/static/af075b03fa1927ef1dbbb3d55c66454e/a2510/mkr_wan_1300.jpg",
        MKR1310:
            "	https://www.arduino.cc/wiki/static/7cf34a4e100e00c007c57446ce4de1c7/c1b63/mkr_wan_1310.png",
        MKR1400:
            "	https://www.arduino.cc/wiki/static/fb89e0ebb3639e5d8b906d175a573ad4/c1b63/mkr_gsm_1400.png",
        MKR1500:
            "https://www.arduino.cc/wiki/static/bb1da0ff7c35148935cbbd8eeb059517/c1b63/mkr_nb_1500.png",
        MKR4000:
            "https://www.arduino.cc/wiki/static/5fcca0fbc9822b25e13a1ae713e1d896/a2510/mkr_vidor_4000.jpg",
        MKRZero:
            "	https://www.arduino.cc/wiki/static/80d12450eac96f648d8f6fba897eb3a3/41099/mkr_zero.jpg",
    },
    Shields: {
        MKRENVREV2:
            "https://www.arduino.cc/wiki/static/1d8c247682ef38f915f2d30496f4617b/a2510/mkr_env_shield_r2.jpg",
        MKRGPS:
            "https://www.arduino.cc/wiki/static/9adfbf603213eba08429a907bdae9bb8/a2510/mkr_gps_shield.jpg",
        MKRIMU:
            "https://www.arduino.cc/wiki/static/0f7cac70928c16414d9be9338aa5eb3c/a2510/mkr_imu_shield.jpg",
        MKRRGB:
            "https://www.arduino.cc/wiki/static/8540c09770732f9d8cb32c528158ab10/a2510/mkr_rgb_shield.jpg",
        MKRTherm:
            "	https://www.arduino.cc/wiki/static/e99cbb820ad46b34499c08988cb5a1de/a2510/mkr_therm_shield.jpg",
        MKREth:
            "	https://www.arduino.cc/wiki/static/bd289a6de75e4b674c38dab8f7e8d235/a2510/mkr_eth_shield.jpg",
        MKR485:
            "https://www.arduino.cc/wiki/static/77e13b36e35cb2996d97eed9839f7352/a2510/mkr_485_shield.jpg",
        MKRcan:
            "	https://www.arduino.cc/wiki/static/aa3f59f31ea23e522003c9bf48b9aa2f/a2510/mkr_can_shield.jpg",
        MKRmem:
            "https://www.arduino.cc/wiki/static/b98ae6ec8f2d11b38bb613a4f01255a0/41099/mkr_mem_shield.jpg",
    },
};
const ClassicImages = {
    Boards: {
        UNOR4Minima:
            "https://www.arduino.cc/wiki/static/be8cd5164659b69d015dbbeff548517e/4b190/uno-r4-minima.jpg",
        UNOR4WIFI:
            "	https://www.arduino.cc/wiki/static/f66d79076a4053245ccf317921fbe2cc/4b190/uno-r4-wifi.jpg",
        UNOR3:
            "https://www.arduino.cc/wiki/static/47b1410b6a28539f9175c4258f053bfc/4b190/uno.jpg",
        LEONARDO:
            "	https://www.arduino.cc/wiki/static/2ff70e489e19094e062c441e5f5910e9/41099/leonardo.jpg",
        MINILE:
            "	https://www.arduino.cc/wiki/static/847ff61571f98635781e1f1bfccf10d9/4b190/uno-mini-le.jpg",
        MICRO:
            "	https://www.arduino.cc/wiki/static/c632d28837856925bee37218ec6b9915/4b190/micro.jpg",
        ZERO: "	https://www.arduino.cc/wiki/static/b4cbfd68b285e731408fd10c6b1fd79b/41099/zero.jpg",
        UNOWIFIREV2:
            "https://www.arduino.cc/wiki/static/2462abb48e99c32e3e728eec9dad3e24/4b190/uno-wifi-r2.jpg",
    },
    Shields: {
        MOTORSHIELDREV3:
            "https://www.arduino.cc/wiki/static/dd239fdbd3ee02b18b88926cbadc1527/41099/motor-shield.jpg",
        RELAYSHIELD:
            "https://www.arduino.cc/wiki/static/3b29fb10564424ba32d223c556e6c48a/41099/4-relay-shield.jpg",
        ETHERNETSHIELD:
            "	https://www.arduino.cc/wiki/static/2d03e30d2e94ac99bfc9862619cfb727/4b190/ethernet-shield.jpg",
    },
};
const MegaImages = {
    MEGA2560:
        "https://www.arduino.cc/wiki/static/c1e055dbac35723e2ea11b54857c2a9e/4b190/mega.jpg",
    DUE: "https://www.arduino.cc/wiki/static/4b5849dbceea1006d2ade905e0634abb/4b190/due.jpg",
    GIGAR1WIFI:
        "https://www.arduino.cc/wiki/static/621575bc3ac94f2e57d53f652ebaa2c2/4b190/giga.jpg",
    GIGADISPLAYSHIELD:
        "https://www.arduino.cc/wiki/static/e471ad8ea53630d58b11f30ff715ad66/4b190/display-shield.jpg",
};
const ContentSections = {
    Kits: {
        header: "Kits",
        id: "Kits",
        row_after: false,
        paragraph: [
            "Kits are a great way to get started with Arduino. The classic Starter Kit includes an Arduino UNO, a large set of electronic components, and a physical book with 15 chapters to help you get started.",
            "The Oplà IoT Kit includes the components needed to build amazing IoT projects, and the Sensor Kit includes a set of great plug-and-play sensors and actuators. These kits also have their own dedicated content platform, with several cool projects to follow step by step.",
        ],
        TableType: "Simple",
        Tables: [
            [
                {
                    title: "Arduino Starter Kit",
                    image: StarterKit,
                    path: "https://store.arduino.cc/products/arduino-starter-kit-multi-language",
                },
                {
                    title: "Arduino Oplà IoT Kit",
                    image: oplaKit,
                    path: "https://store.arduino.cc/products/arduino-opla-iot-kit",
                },
                {
                    title: "Arduino Sensor Kit",
                    image: SensorKit,
                    path: "https://store.arduino.cc/products/arduino-sensor-kit-base",
                },
            ],
        ],
    },
    //   ======================================================================================
    NanoFamily: {
        header: "Nano Family",
        id: "NanoFamily",
        row_after: true,
        paragraph: [
            "The Nano Family is a set of boards with a tiny footprint, packed with features. It ranges from the inexpensive, basic Nano Every, to the more feature-packed Nano 33 BLE Sense / Nano RP2040 Connect that has Bluetooth® / Wi-Fi radio modules. These boards also have a set of embedded sensors, such as temperature/humidity, pressure, gesture, microphone and more. They can also be programmed with MicroPython and supports Machine Learning.",
            "Want to know more about the Nano Family? Click the link below to discover all boards in more detail, a long with a comparison table!",
        ],
        LinkBeforeTable: {
            link: "Nano Family Store Page",
            path: "https://www.arduino.cc",
        },
        TableType: "Simple",
        Tables: [
            [
                {
                    title: "Arduino Nano 33 IoT",
                    image: NanoImages.nano33iot,
                    path: "https://store.arduino.cc/products/arduino-nano-33-iot",
                },
                {
                    title: "Arduino Nano RP2040 Connect",
                    image: NanoImages.nanorp2040,
                    path: "https://store.arduino.cc/products/arduino-nano-rp2040-connect-with-headers",
                },
                {
                    title: "Arduino Nano ESP32",
                    image: NanoImages.nanoESP32,
                    path: "https://store.arduino.cc/products/nano-esp32",
                },
                {
                    title: "Arduino Nano 33 BLE Sense",
                    image: NanoImages.nano33BLEsense,
                    path: "https://store.arduino.cc/products/arduino-nano-33-ble-sense",
                },
            ],
            [
                {
                    title: "Arduino Nano 33 BLE",
                    image: NanoImages.nano33BLE,
                    path: "https://store.arduino.cc/products/arduino-nano-33-ble",
                },
                {
                    title: "Arduino Nano Every",
                    image: NanoImages.nanoevery,
                    path: "https://store.arduino.cc/products/arduino-nano-every",
                },
                {
                    title: "Arduino Nano",
                    image: NanoImages.nano,
                    path: "https://store.arduino.cc/products/arduino-nano",
                },
                {
                    title: "Arduino Nano Motor Carrier",
                    image: NanoImages.nanomotorcarrier,
                    path: "https://store.arduino.cc/products/arduino-nano-motor-carrier",
                },
            ],
        ],
    },
    //   ======================================================================================
    MKRFamily: {
        header: "MKR Family",
        id: "MKRFamily",
        LinkAfterTitle: {
            link: "Discover all MKR products in the Arduino Store",
            path: "https://www.arduino.cc",
        },
        row_after: true,
        paragraph: [
            "The MKR Family is a series of boards, shields & carriers that can be combined to create amazing projects without any additional circuitry. Each board is equipped with a radio module (except MKR Zero), that enables Wi-Fi, Bluetooth®, LoRa®, Sigfox, NB-IoT communication. All boards in the family are based on the Cortex-M0 32-bit SAMD21 low power processor, and are equipped with a crypto chip for secure communication.",
            "The MKR Family shields & carriers are designed to extend the functions of the board: such as environmental sensors, GPS, Ethernet, motor control and RGB matrix.",
        ],
        TableType: "Double",
        Tables: [
            {
                BoardsId: "MKRBoards",
                Boards: [
                    [
                        {
                            title: "Arduino MKR 1000 WiFi",
                            image: MKRImages.Boards.MKR1000Wifi,
                            path: "https://store.arduino.cc/products/arduino-mkr1000-wifi",
                        },
                        {
                            title: "Arduino MKR WiFi 1010",
                            image: MKRImages.Boards.MKR1010,
                            path: "https://store.arduino.cc/products/arduino-mkr-wifi-1010",
                        },
                        {
                            title: "Arduino MKR FOX 1200",
                            image: MKRImages.Boards.MKR1200,
                            path: "https://docs.arduino.cc/hardware/mkr-fox-1200/",
                        },
                    ],
                    [
                        {
                            title: "Arduino MKR WAN 1300",
                            image: MKRImages.Boards.MKR1300,
                            path: "https://store.arduino.cc/products/arduino-mkr-wan-1300-lora-connectivity",
                        },
                        {
                            title: "Arduino MKR WAN 1310",
                            image: MKRImages.Boards.MKR1310,
                            path: "https://store.arduino.cc/products/arduino-mkr-wan-1310",
                        },
                        {
                            title: "Arduino MKR GSM 1400",
                            image: MKRImages.Boards.MKR1400,
                            path: "https://docs.arduino.cc/hardware/mkr-gsm-1400",
                        },
                    ],
                    [
                        {
                            title: "Arduino MKR NB 1500",
                            image: MKRImages.Boards.MKR1500,
                            path: "https://store.arduino.cc/products/arduino-mkr-nb-1500",
                        },
                        {
                            title: "Arduino MKR Vidor 4000",
                            image: MKRImages.Boards.MKR4000,
                            path: "https://store.arduino.cc/products/arduino-mkr-vidor-4000",
                        },
                        {
                            title: "Arduino MKR Zero",
                            image: MKRImages.Boards.MKRZero,
                            path: "https://store.arduino.cc/products/arduino-mkr-zero-i2s-bus-sd-for-sound-music-digital-audio-data",
                        },
                    ],
                ],
            },
            {
                BoardsId: "MKRShields",
                Shields: [
                    [
                        {
                            title: "Arduino MKR ENV Shield Rev2",
                            image: MKRImages.Shields.MKRENVREV2,
                            path: "https://store.arduino.cc/products/arduino-mkr-env-shield-rev2",
                        },
                        {
                            title: "Arduino MKR GPS Shield",
                            image: MKRImages.Shields.MKRGPS,
                            path: "https://store.arduino.cc/products/arduino-mkr-gps-shield",
                        },
                        {
                            title: "Arduino MKR IMU Shield",
                            image: MKRImages.Shields.MKRIMU,
                            path: "https://store.arduino.cc/products/arduino-mkr-imu-shield",
                        },
                    ],
                    [
                        {
                            title: "Arduino MKR RGB Shield",
                            image: MKRImages.Shields.MKRRGB,
                            path: "https://store.arduino.cc/products/arduino-mkr-rgb-shield",
                        },
                        {
                            title: "Arduino MKR THERM Shield",
                            image: MKRImages.Shields.MKRTherm,
                            path: "https://store.arduino.cc/products/arduino-mkr-therm-shield",
                        },
                        {
                            title: "Arduino MKR ETH Shield",
                            image: MKRImages.Shields.MKREth,
                            path: "https://store.arduino.cc/products/arduino-mkr-eth-shield",
                        },
                    ],
                    [
                        {
                            title: "Arduino MKR 485 Shield",
                            image: MKRImages.Shields.MKR485,
                            path: "https://store.arduino.cc/products/arduino-mkr-485-shield",
                        },
                        {
                            title: "Arduino MKR CAN Shield",
                            image: MKRImages.Shields.MKRcan,
                            path: "https://store.arduino.cc/products/arduino-mkr-can-shield",
                        },
                        {
                            title: "Arduino MKR MEM Shield",
                            image: MKRImages.Shields.MKRmem,
                            path: "https://store.arduino.cc/products/arduino-mkr-mem-shield",
                        },
                    ],
                ],
            },
        ],
    },

    //   ======================================================================================
    ClassicFamily: {
        header: "Classic Family",
        id: "ClassicFamily",
        row_after: true,
        paragraph: [
            "In the Classic Family, you will find boards such as the legendary Arduino UNO and other classics such as the Leonardo & Micro. These boards are considered the backbone of the Arduino project, and has been a success for many years (and more to come).",
        ],
        TableType: "Double",
        Tables: [
            {
                BoardsId: "ClassicBoards",
                Boards: [
                    [
                        {
                            title: "Arduino UNO R4 Minima",
                            image: ClassicImages.Boards.UNOR4Minima,
                            path: "https://store.arduino.cc/products/uno-r4-minima",
                        },
                        {
                            title: "Arduino UNO R4 WiFi",
                            image: ClassicImages.Boards.UNOR4WIFI,
                            path: "https://store.arduino.cc/products/uno-r4-wifi",
                        },
                        {
                            title: "Arduino UNO R3",
                            image: ClassicImages.Boards.UNOR3,
                            path: "https://store.arduino.cc/products/arduino-uno-rev3",
                        },
                        {
                            title: "Arduino Leonardo",
                            image: ClassicImages.Boards.LEONARDO,
                            path: "https://store.arduino.cc/products/arduino-leonardo-with-headers",
                        },
                    ],
                    [
                        {
                            title: "Arduino UNO Mini Limited Edition",
                            image: ClassicImages.Boards.MINILE,
                            path: "https://store.arduino.cc/products/uno-mini-le",
                        },
                        {
                            title: "Arduino Micro",
                            image: ClassicImages.Boards.MICRO,
                            path: "https://store.arduino.cc/products/arduino-micro",
                        },
                        {
                            title: "Arduino Zero",
                            image: ClassicImages.Boards.ZERO,
                            path: "https://store.arduino.cc/products/arduino-zero",
                        },
                        {
                            title: "Arduino UNO WiFi Rev2",
                            image: ClassicImages.Boards.UNOWIFIREV2,
                            path: "https://store.arduino.cc/products/arduino-uno-wifi-rev2",
                        },
                    ],
                ],
            },
            {
                BoardsId: "ClassicShields",
                Shields: [
                    [
                        {
                            title: "Arduino Motor Shield Rev3",
                            image: ClassicImages.Shields.MOTORSHIELDREV3,
                            path: "https://store.arduino.cc/products/arduino-motor-shield-rev3",
                        },
                        {
                            title: "Arduino 4 Relay Shield",
                            image: ClassicImages.Shields.RELAYSHIELD,
                            path: "https://store.arduino.cc/products/arduino-4-relays-shield",
                        },
                        {
                            title: "Arduino Ethernet Shield Rev2",
                            image: ClassicImages.Shields.ETHERNETSHIELD,
                            path: "https://store.arduino.cc/products/arduino-ethernet-shield-2",
                        },
                    ],
                ],
            },
        ],
    },
    //   ======================================================================================
    MegaFamily: {
        header: "Mega Family",
        id: "MEGAFamily",
        row_after: true,
        paragraph: [
            "In the Mega family, you will find the boards for the projects that demand lots of computing power and GPIO pins.",
        ],
        TableType: "Simple",
        Tables: [
            [
                {
                    title: "Arduino Mega 2560 Rev3",
                    image: MegaImages.MEGA2560,
                    path: "https://store.arduino.cc/products/arduino-mega-2560-rev3",
                },
                {
                    title: "Arduino Due",
                    image: MegaImages.DUE,
                    path: "https://store.arduino.cc/products/arduino-due",
                },
                {
                    title: "Arduino GIGA R1 WiFi",
                    image: MegaImages.GIGAR1WIFI,
                    path: "https://store.arduino.cc/products/giga-r1-wifi",
                },
                {
                    title: "Arduino GIGA Display Shield",
                    image: MegaImages.GIGADISPLAYSHIELD,
                    path: "https://store.arduino.cc/products/giga-display-shield",
                },
            ],
        ],
    },
};

export default ContentSections;
