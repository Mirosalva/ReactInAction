const BASE_COLORS = {
    PRIMARY_BLUE: '#03aaf6',
    PRIMARY_GREEN: '#2CCBA2'
}
const COLORS = {
    PRIMARY_THEME: BASE_COLORS.PRIMARY_GREEN,
    PRIMARY_STUDENT_BG: 'linear-gradient(to right,#2DECCE,#18D3D0)',
    PRIMARY_STUDENT: '#41CBC8',
    PRIMARY_BLUE: '#03aaf6',
    PRIMARY_GREEN: '#2CCBA2',
    PRIMARY_YELLOW: '#ffd161',
    LIGHT_BLUE: '#a6d9f0',
    DARK_BLUE: '#0792d2',
    HIGHTLIGHT_YELLOW: '#fbc84a',
    ORANGE: '#FDAF52',
    PINK: '#FFF0DE',
    Red: '#f74c31',

    GREY_BLACK: '#333',
    GREY_DARK: '#808080',
    GREY:'#b2b2b2',
    GREY_MIDDLE:'#dcdcdc',
    GREY_LIGHT:'#eee',
    GREY_LITTLE:'#F7F7F7',
    GREY_WHITE:'#fefefe',
    WHITE: '#fff',
    NAV_BACKGROUND: BASE_COLORS.PRIMARY_GREEN
};
const LAYOUT = {
    L_48:48,
    L_12:12,
    L_16:16,
    L_8:8
};

const FONT = {
    SIZE: {
        F_22:22,
        F_18:18,
        F_16:16,
        F_14:14,
        F_12:12,
        F_11:11
    },
    COLOR: {
        NORMAL: COLORS.GREY_BLACK,
        LIGHT: COLORS.GREY,
        GREEN: COLORS.PRIMARY_BLUE,
        GREY: COLORS.GREY_MIDDLE,
        ORANGE: COLORS.ORANGE
    }
   
};
const STYLE = {
    SHADOW : {
        elevation: 2,
        borderColor: '#F2F2F2',
        borderWidth: 1,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
};
export {
    COLORS,
    LAYOUT,
    FONT,
    STYLE
};
