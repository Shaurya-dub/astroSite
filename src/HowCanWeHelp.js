import Benefits from './Benefits'
function HowCanWeHelp() {
    return (
        <div className="howWeCanHelpHolder">
            <h2>How We Can Help</h2>
            <div className="benefitCardHolder">
                <Benefits />
                <Benefits />
                <Benefits />
                <Benefits />
            </div>
        </div>
    )
}
export default HowCanWeHelp;