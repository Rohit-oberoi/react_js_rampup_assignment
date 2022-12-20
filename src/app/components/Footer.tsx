import { CSSProperties } from "react"

export const Footer = (): JSX.Element => { 
    let footerStyle:CSSProperties = {
        position: "relative",
        width: "100%"
    }
    return (
        <section className="" style={footerStyle}>
            <footer className="text-center text-white mt-5" style={{backgroundColor: "#0a4275"}}>
                <div className="container p-4 pb-0">
                <section className="">
                    <p className="d-flex justify-content-center align-items-center">
                    <span>More Features Coming Soon!</span>
                    </p>
                </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright: Josh Technology Group
                </div>
            </footer>
        </section>
    )
}
