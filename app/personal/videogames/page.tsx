// import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewRating } from "@/components/ReviewRating";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    return (
        <section style={{ width: "960px" }}>
            <Breadcrumbs items={[
                {
                    label: "Personal",
                    href: "/personal"
                },
                {
                    label: "Video Games",
                    href: "/personal/videogames"
                }
            ]}>
            </Breadcrumbs>

            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Reviews */}
                <section>
                    <h2>Reviews</h2>

                    {/* Game title card */}
                    <div>

                    </div>




                    {/* Game */}
                    <div>
                        <h3>Kingdom Come: Deliverance</h3>
                        <Image src={"/personal/videogames/kcd1/kcd1_artwork.jpg"} alt={"Game artwork"} width={340} height={185}></Image>
                        <p>Kingdom Come: Deliverance is a first-person, open-world RPG set in the medieval Kingdom of Bohemia. The game is known for its realistic combat system, historical accuracy, and immersive storytelling. Players take on the role of Henry, a blacksmith's son, who becomes embroiled in a civil war after his village is destroyed.</p>
                    </div>
                    {/* Review */}
                    <div>
                        <h4>Rating</h4>
                        <ReviewRating endorsementText={"Expertly transports you into the life of a medieval knight! - Kuei"} rating={4}></ReviewRating>
                    </div>

                    <Link href={"/personal/videogames/kcd1"}>Details...</Link>
                </section>
            </section>
        </section>
    );
}
