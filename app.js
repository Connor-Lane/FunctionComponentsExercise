// 1a
function Ghostbusters() {
    return `Who you gonna call?`;
}

// 2a
function Tagline() {
    return <h1>We're ready to believe you.</h1>;
}

// 3a
function Janine() {
    return (
        <section>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya want?</h2>
        </section>
    )
}

// 4a
function MassHysteria() {
    return (
        <section>
        <ul>
            <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
            <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
            <li>The dead rising from the grave!</li>
        </ul>
        <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
        </section>
    );
}

// 5a
function GhostbustersLogo() {
    return <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg" />
}

// 6a
function ToolsTalent() {
    // 6b
    const w = `We`;
    // 6c
    return (
        <section>
            <h1>{w} had the tools.</h1>
            <h3>{w} had the talent.</h3>
        </section>
    );
}

// 7a
function GhostbustersAll() {
    return (
        <div>
            <Ghostbusters />
            <Tagline />
            <Janine />
            <MassHysteria />
            <GhostbustersLogo />
            <ToolsTalent />
            {/* <DiceRoll /> */}
        </div>
    );
}

// BONUS
// 8a
function DiceRoll() {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    console.log(die1);
    console.log(die2);
    return (
        <h1>{(die1 === 1 && die2 === 1) ? `Snake Eyes` : `${die1} & ${die2}`}</h1>
    );
}

ReactDOM.render(
    // 1b
    // <Ghostbusters />,

    // 2b
    // <Tagline />,

    // 3b
    // <Janine />,

    // 4b
    // <MassHysteria />,

    // 5b
    // <GhostbustersLogo />,

    // 6d
    // <ToolsTalent />,

    // 7b
    // <GhostbustersAll />,

    // BONUS
    // 8e
    <DiceRoll />,

    document.getElementById(`root`)
);