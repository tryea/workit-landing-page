import { colors, typography } from "../util/styles"


const SectionCallToAction = () => {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                color: colors.White,
                flexDirection: 'column',
                marginTop: '54px'
            }}
        >
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'row', justifyContent: 'center' }}>
                <h1 style={{ ...typography.HeadingLarge }}>Data</h1>
                <h1 style={{
                    ...typography.HeadingLarge,
                    textDecoration: 'underline',
                    textDecorationColor: colors.Eucaplyptus,
                    textDecorationStyle: 'solid',
                    textUnderlineOffset: '10px',
                    textDecorationThickness: '3px'
                }}>tailored</h1>
                <h1 style={{ ...typography.HeadingLarge, }}>to</h1>
            </div>
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'row', justifyContent: 'center' }}>
                <h1 style={{ ...typography.HeadingLarge, }}>your</h1>
                <h1 style={{ ...typography.HeadingLarge, }}>needs.</h1>
            </div>
            <div
                style={{
                    marginTop: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <button
                    style={{
                        backgroundColor: colors.Eucaplyptus,
                        height: '61px',
                        width: '161px',
                        borderRadius: 0
                    }}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default SectionCallToAction