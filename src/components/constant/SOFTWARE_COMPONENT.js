const Arduino_IDE_232 = {
    ArduinoIDE232: {
        description: {
            header: "Arduino IDE 2.3.2",
            icon: "https://www.arduino.cc/wiki/370832ed4114dd35d498f2f449b4781e/arduino.svg",
            paragraphs: [
                [
                    {
                        text: "The new major release of the Arduino IDE is faster and even more powerful! In addition to a more modern editor and a more responsive interface it features autocompletion, code navigation, and even a live debugger.",
                        type: "simple",
                    },
                ],
                [
                    { text: "For more details, please refer to the", type: "simple" },
                    {
                        text: "Arduino IDE 2.0 documentation",
                        type: "link",
                        href: "https://docs.arduino.cc/software/ide/#ide-v2",
                    },
                    { text: ".", type: "simple" },
                ],
                [
                    {
                        text: "Nightly builds with the latest bugfixes are available through the section below.",
                        type: "simple",
                    },
                ],
                [{ text: "SOURCE CODE", type: "source" }],
                [
                    {
                        text: "The Arduino IDE 2.0 is open source and its source code is hosted on",
                        type: "simple",
                    },
                    {
                        text: "Github",
                        type: "link",
                        href: "https://github.com/arduino/arduino-ide",
                    },
                    { text: ".", type: "simple" },
                ],
            ],
        },
        downloadOptions: {
            windows: [
                {
                    text: "Win 10 and newer, 64 bits",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_Windows_64bit.exe",
                },
                {
                    text: "MSI installer",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_Windows_64bit.msi",
                },
                {
                    text: "ZIP file",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_Windows_64bit.zip",
                },
            ],
            linux: [
                {
                    text: "AppImage 64 bits (x86-64)",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_Linux_64bit.AppImage",
                },
                {
                    text: "ZIP file 64 bits (x86-64)",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_Linux_64bit.zip",
                },
            ],
            macos: [
                {
                    text: "Intel, 10.14: “Catalina” or newer, 64 bits",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_macOS_64bit.dmg",
                },
                {
                    text: "Apple Silicon, 11: “Big Sur” or newer, 64 bits",
                    href: "https://downloads.arduino.cc/arduino-ide/arduino-ide_2.3.2_macOS_arm64.dmg",
                },
            ],
            release_notes: {
                text: "Release Notes",
                href: "https://github.com/arduino/arduino-ide/releases/tag/2.3.2",
            },
        },
    },
    ArduinoPLC103: {
        description: {
            header: "Arduino PLC IDE 1.0.3",
            icon: "https://www.arduino.cc/wiki/7ef50a0503c7077a1317890dacebcca3/arduino-plc-ide.svg",
            paragraphs: [
                [
                    {
                        text: "Program using IEC 61131-3 languages and mix Arduino sketches through Arduino PLC IDE! Configure easily your pre-mapped resources and get quick no code fieldbus support, dive into your code analysis thanks to the wide set of debugging tools.",
                        type: "simple",
                    },
                ],
                [
                    { text: "For more details, please refer to", type: "simple" },
                    {
                        text: "Arduino PLC IDE documentation",
                        type: "link",
                        href: "https://docs.arduino.cc/software/plc-ide",
                    },
                    { text: ".", type: "simple" },
                ],
            ],
        },
        downloadOptions: {
            required: "Both files are required",
            windows: [
                {
                    text: "Arduino PLC IDE,Win 10 and newer,64 bits",
                    href: "https://downloads.arduino.cc/arduino-plc-ide/plc-ide/Setup_Arduino%20PLC%20IDE_1.0.3.0_20230316.exe",
                },
                {
                    text: "Arduino PLC IDE tools",
                    href: "https://downloads.arduino.cc/arduino-plc-ide/prerequisites/Arduino-PLC-IDE-Tools_1.0.3_Windows_64bit.msi",
                },
            ],
            version: "Version 1.0.4 coming soon",
        },
    },
    ArduinoIDE1819: {
        description: {
            header: "Arduino IDE 1.8.19",
            icon: "https://www.arduino.cc/wiki/370832ed4114dd35d498f2f449b4781e/arduino.svg",
            paragraphs: [
                [
                    {
                        text: "The open-source Arduino Software (IDE) makes it easy to write code and upload it to the board. This software can be used with any Arduino board.",
                        type: "simple",
                    },
                ],
                [
                    { text: "Refer to the", type: "simple", type: "simple" },
                    {
                        text: "Arduino IDE 1.x documentation",
                        type: "link",
                        href: "https://docs.arduino.cc/software/ide/#ide-v1",
                    },
                    { text: "for installation instructions.", type: "simple" },
                ],
                [{ text: "SOURCE CODE", type: "source" }],
                [
                    {
                        text: "Active development of the Arduino software is",
                        type: "simple",
                    },
                    {
                        text: "hosted by GitHub",
                        type: "link",
                        href: "https://github.com/arduino/Arduino/",
                    },
                    { text: ". See the instructions for.", type: "simple" },
                    {
                        text: "building the code",
                        type: "link",
                        href: "https://github.com/arduino/Arduino/wiki/Building-Arduino/",
                    },
                    {
                        text: ". Latest release source code archives are available",
                        type: "simple",
                    },
                    {
                        text: "here",
                        type: "link",
                        href: "https://github.com/arduino/Arduino/releases/tag/1.8.19",
                    },
                    {
                        text: ". The archives are PGP-signed so they can be verified using",
                        type: "simple",
                    },
                    {
                        text: "this",
                        type: "link",
                        href: "https://downloads.arduino.cc/arduino_sources_gpg_pubkey.txt",
                    },
                    {
                        text: "gpg key.",
                        type: "simple",
                    },
                ],
            ],
        },
        downloadOptions: {
            windows: [
                {
                    text: "Win 7 and newer",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-windows.exe",
                },
                {
                    text: "ZIP file",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-windows.zip",
                },
            ],
            windowsApp: [
                {
                    text: "Win 8.1 or 10",
                    href: "https://www.microsoft.com/store/apps/9nblggh4rsd8?ocid=badge",
                },
            ],
            linux: [
                {
                    text: "32 bits",
                    href: "example.com",
                },
                {
                    text: "64 bits",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-linux32.tar.xz",
                },
                {
                    text: "ARM 32 bits",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-linux64.tar.xz",
                },
                {
                    text: "ARM 64 bits",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-linuxaarch64.tar.xz",
                },
            ],
            macosX: [
                {
                    text: "10.10 or newer",
                    href: "https://downloads.arduino.cc/arduino-1.8.19-macosx.zip",
                },
            ],
            release_notes: {
                text: "Release Notes",
                href: "https://www.arduino.cc/en/software/ReleaseNotes",
            },
            checksums: {
                text: "Checksums (sha512)",
                href: "https://downloads.arduino.cc/arduino-1.8.19.sha512sum.txt",
            },
        },
    },
};

export default Arduino_IDE_232;
