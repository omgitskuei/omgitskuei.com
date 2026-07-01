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
                    <h2>Online Presence</h2>
                    <div>
                        <h3>Steam</h3>

                    </div>
                    <div>
                        <h3>Epic</h3>

                    </div>

                </section>

                {/* Looking for group */}
                <section>
                    <h2>Looking for group</h2>
                    <p>Reach out and lets team up for these games:</p>

                </section>

                {/* Reviews */}
                <section>
                    <h2>Reviews</h2>

                    {/* Game title card */}
                    <div>

                    </div>




                    {/* Game */}
                    <div>
                        <h3>Kingdom Come: Deliverance</h3>
                        <p>Kingdom Come: Deliverance is a first-person, open-world RPG set in the medieval Kingdom of Bohemia. The game is known for its realistic combat system, historical accuracy, and immersive storytelling. Players take on the role of Henry, a blacksmith's son, who becomes embroiled in a civil war after his village is destroyed.</p>
                    </div>
                    {/* Review */}
                    <div>
                        <h4>Review</h4>
                        <ReviewRating endorsementText={"Expertly transports you into the life of a medieval knight! - Kuei"} rating={4}></ReviewRating>
                    </div>
                    {/* Gallery */}
                    <div>
                        <h4>Gallery</h4>
                        <div>
                            ... WORK IN PROGRESS ...
                        </div>
                    </div>
                    {/* Highlights */}
                    <div>
                        <h4>Highlights</h4>
                        <div>
                            <p>
                                Henry enrolls in a longsword tournament to prove his skill and gain recognition. The video showcases strategic timing of perfect block, riposte, quick in-and-out jabs, clinching, and shoving the opponent into arena fences to disorient them followed-up with a free hit.
                            </p>
                            <video controls width="100%" disablePictureInPicture poster="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.jpg">
                                <source src="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <a href="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.mp4"
                                type="video/mp4"
                                download="omgitskuei_kcd1_longsword_tourney_480p.mp4">
                                Download as MP4
                            </a>
                        </div>

                    </div>
                </section>
            </section>
        </section>
    );
}
