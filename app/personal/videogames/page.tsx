// import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewRating } from "@/components/ReviewRating";

export default function Page() {

    return (
        <section style={{ width: "960px" }}>
            <Breadcrumbs></Breadcrumbs>
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Online Presence */}
                <section>
                    <h2>Online Handles</h2>
                    <div>
                        <h3>Steam</h3>

                    </div>
                    <div>
                        <h3>Epic</h3>

                    </div>

                </section>

                {/* Looking for group */}
                <section>
                    <h1>Looking for group</h1>
                    <p>Reach out and lets team up for these games:</p>

                </section>

                {/* Reviews */}
                <section>
                    {/* Game title card */}
                    <div>

                    </div>
                    {/* Game */}
                    <div>
                        GAME NAME
                    </div>
                    {/* Review */}
                    <div>
                        {/* REVIEW */}
                        <ReviewRating endorsementText={"It was ok..."} rating={3}></ReviewRating>
                    </div>
                    {/* Gallery */}
                    <div>
                        GALLERY
                    </div>
                    {/* Highlights */}
                    <div>
                        HIGHLIGHTS
                    </div>
                </section>
            </section>
        </section>
    );
}
