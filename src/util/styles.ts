interface TextStyles {
    fontFamily?: string;
    fontSize?: string;
    lineSpacing?: string;
}

type TypographyKeys = 'HeadingLarge' | 'HeadingMedium' | 'HeadingSmall' | 'Body';

type Typography = {
    [K in TypographyKeys]: TextStyles;
}

type ColorKeys = 'DarkPurple' | 'DavysGrey' | 'Eucaplyptus' | 'GhostWhite' | 'White';

type HexColor = `#${string}`;

type Color = {
    [K in ColorKeys]: HexColor;
}

export const typography: Typography = {
    HeadingLarge: {
        fontFamily: 'Fraunces144ptSemiBold',
        fontSize: '80px',
        lineSpacing: '80px'

    },
    HeadingMedium: {
        fontFamily: 'Fraunces144ptSemiBold',
        fontSize: '56px',
        lineSpacing: '64px'
    },
    HeadingSmall: {
        fontFamily: 'Fraunces144ptSemiBold',
        fontSize: '32px',
        lineSpacing: '40px'
    },
    Body: {
        fontFamily: 'ManropeRegular',
        fontSize: '18px',
        lineSpacing: '32px'
    }
}

export const colors: Color = {
    DarkPurple: '#24053E',
    DavysGrey: '#584D62',
    Eucaplyptus: '#44FFA1',
    GhostWhite: '#FCF8FF',
    White: '#FFFFFF',
}