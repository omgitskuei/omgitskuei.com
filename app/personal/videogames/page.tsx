// import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewRating } from "@/components/ReviewRating";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    const GameReview = ({
        name,
        imgSrc,
        rating,
        analysis,
        description,
        href
    }: {
        name: string,
        imgSrc: string,
        rating: number,
        analysis: string,
        description: string,
        href: string
    }) => {
        return (
            <article>
                <h3>{name}</h3>
                <p>{description}</p>
                <Image src={imgSrc}
                    alt={`${name} artwork`} width={340} height={185}>
                </Image>
                <ReviewRating rating={rating} analysis={analysis}></ReviewRating>
                <div>
                    <Link href={href}>Read more...</Link>
                </div>
            </article>
        )
    };

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
                    <GameReview name={"Kingdom Come: Deliverance"} 
                        description={"Kingdom Come: Deliverance is a first-person, open-world RPG set in the medieval Kingdom of Bohemia. The game is known for its realistic combat system, historical accuracy, and immersive storytelling. Players take on the role of Henry, a blacksmith's son, who becomes embroiled in a civil war after his village is destroyed."} 
                        imgSrc={"/personal/videogames/kcd1/kcd1_artwork.jpg"} 
                        analysis={"A unique experience that is worth the full price of admission with all DLCs. Recommended for every gamer to experience due to its uniqueness. It is one of the only first-person medieval life simulators on the market that also packs the rarely seen directional swordplay combat system (due to its high skillcap) but cleverly off-sets the difficulty with omnidirectional blocking and easy-to-use riposte! Despite the combat's complexity, the devs smartly left an escape-hatch called Clinching for when players want to 'just win' and move on. Furthermore, the plot makes sense, the dialogue hilarious or immersive, the lore historically accurate (the codex is even educational), and the supporting characters memorable while not needlessly complicated nor flat. Its only shortcomings are relatively minor or are commonly seen in other games on the market; the cumbersome UI (especially when cleaning out your inventory), hunger and sleep survival systems being heavily featured but quickly made inconsequential, lacking some QoL polish, and the buggy/inconsistent crime system. Some negative reviews of the game disparage its slow-pace and break from 'meaningful progression' (eg. 'saving the world'), but these are not true drawbacks of the game itself but instead mismatched expectations; labeling the game as an RPG on storepages might have led to more sales for the publisher but no doubt damaged the game's ratings as long-time RPG gamers are used to much faster paced games with more immediate wins coupled with impending world-ending backdrops where realism takes a backseat. Ready yourself for a 'simulator' and you will have a wonderful time. With more polish, this would be a 5/5 cultural landmark sporting the unique combination of 'realistic singleplayer swordplay historical RPG'."} 
                        rating={4} 
                        href={"/personal/videogames/kcd1"}>
                    </GameReview>
                </section>
            </section>
        </section>
    );
}
