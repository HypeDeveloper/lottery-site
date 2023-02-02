import { Footer } from "../components/NavFoo";

export default function Home(){
    return (
        <>
            <section>
                <div className="heroSection">
                    <h1>Samsung lottery winners</h1>
                    <p>
                        Now Samsung has decided to give lottery
                        prizes to his regular customers.
                        Claim yours now.
                    </p>
                    <button>Check Your Number</button>
                </div>

                <div className="WinnerSection">
                    <div className="top">
                        <h1>Our Winners</h1>
                        <p>
                            Still feeling uneasy here are our winners
                            for 2022. What are you waiting for join
                            the next cohort and earn big this year.
                        </p>
                        <button>Check Your Number</button>
                    </div>
                    <div className="bottom">
                        <div className="winnerSlide">

                            <div className="slideCard">
                                <div className="winneerImage">

                                </div>
                                <div className="winneerInfo">
                                    <p>Name</p>
                                    <div className="extraInfo">
                                        <p>Ammount</p>
                                        <p>Number</p>
                                    </div>
                                </div>
                            </div>

                            <div className="slideCard">
                                <div className="winneerImage">

                                </div>
                                <div className="winneerInfo">
                                    <p>Name</p>
                                    <div className="extraInfo">
                                        <p>Ammount</p>
                                        <p>Number</p>
                                    </div>
                                </div>
                            </div>

                            <div className="slideCard">
                                <div className="winneerImage">

                                </div>
                                <div className="winneerInfo">
                                    <p>Name</p>
                                    <div className="extraInfo">
                                        <p>Ammount</p>
                                        <p>Number</p>
                                    </div>
                                </div>
                            </div>

                            <div className="slideCard">
                                <div className="winneerImage">

                                </div>
                                <div className="winneerInfo">
                                    <p>Name</p>
                                    <div className="extraInfo">
                                        <p>Ammount</p>
                                        <p>Number</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slideCard">
                                <div className="winneerImage">

                                </div>
                                <div className="winneerInfo">
                                    <p>Name</p>
                                    <div className="extraInfo">
                                        <p>Ammount</p>
                                        <p>Number</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="AboutSection">
                    
                    <div className="top">
                        <div className="banner">

                        </div>
                        <div className="textAbout">
                            <h1>What Are We</h1>
                            <p>
                                The Samsung Lucky Draw is a Draw organizing every month. In this Draw customers can win Cash Prizes like $800,000 and many more.
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="video"></div>
                        <div className="justInfo">
                            <p>Our prizes are provided to the customer after winning of lucky draw. The Samsung Lucky Draw Prizes also be redeemed by Samsung Lottery Number.</p>
                            <p>Samsung Lucky Draw is a firm which helps people to become millionaire just by shopping. This is an amazing experience, so let’s win Prizes with Samsung Lucky Draw.</p>
                        </div>
                    </div>
                </div>

                <div className="StepSection">
                    <div className="top">
                        <h1>How Winners can Get The Lucky Draw Prize ?</h1>
                        <p>
                            Our prizes are provided to the customer after winning of lucky draw. 
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="stepBox"></div>
                        <div className="stepBox"></div>
                        <div className="stepBox"></div>
                    </div>
                </div>

                <div className="FinalSection">
                    <div className="top">
                        <h1>Something special
                            is coming </h1>
                        <p>
                            Wow! SAMSUNG care is organizing all SIM’s lucky draw every month. With the support of 10 of the most famous telecommunication companies, we are  selecting 5 winners for 500000 to 20000000 cash prizes each month. Join in if you are filling lucky.
                        </p>
                    </div>
                </div>

            </section>

            {/* <div className="mobilePropmt" >
                <CheckLot />
            </div> */}
        </>
    )
}

function CheckLot(){
    return (
        <div className="Check">
            <h1>Check Your Luck</h1>
            <form action="">
                <input className="input" type="text" required placeholder="Phone Number" />
                <input className="input" type="text" required placeholder="Lottery Number" />
                <div className="buttonWrap">
                    <button type="submit">Check Number</button>
                </div>
            </form>
        </div>
    )
}

function LotNotFound() {
    return (
        <div className="LotNot">
            <div className="warnBox"></div>
            <h1>Lottery Invalid</h1>
            <p>
                The phone number you
                entered or Lottery Id
                is not found.
            </p>
            <div className="buttonWrap">
                <button type="submit">Try Again</button>
            </div>
        </div>
    )
}

function Ticket() {
    return (
        <div className="Ticket">
            <div className="Tick">

                <div className="cut">
                    <div className="Ocut"></div>
                    <div className="lineCut"></div>
                    <div className="Ocut"></div>
                </div>

                <div className="Info">
                    <div className="photoI">
                        <div className="circleImg"></div>
                        <h1>Name Name</h1>
                        <p>id</p>
                    </div>
                    <div className="content">
                        <div className="wrapCot">
                            <div className="CoTBox">
                                <p className="CotHead">Phone Number</p>
                                <p className="CotText">038***6377</p>
                            </div>
                            <div className="CoTBox">
                                <p className="CotHead">Lottery Id</p>
                                <p className="CotText">3026342-az</p>
                            </div>
                        </div>
                    </div>
                    <div className="lastBot">
                        <div className="inner">
                            <p>Stauts</p>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}