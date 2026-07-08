// import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewRating } from "@/components/ReviewRating";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    const videoGames: {
        name: string;
        description: string;
        imgSrc: string;
        analysis: string;
        rating: number;
        href: string;
    }[] = [
            {
                name: "Kingdom Come: Deliverance",
                description: `Kingdom Come: Deliverance is a first-person,
                    open-world RPG set in the medieval Kingdom of Bohemia.
                    The game is known for its realistic combat system,
                    historical accuracy, and immersive storytelling.
                    Players take on the role of Henry, a blacksmith's son,
                    who becomes embroiled in a civil war after his village
                    is destroyed.`,
                imgSrc: "/personal/videogames/kcd1/kcd1_artwork.jpg",
                analysis: `A unique experience that is worth the full price
                    of admission with all DLCs. Recommended for every gamer
                    to experience due to its uniqueness. It is one of the
                    only first-person medieval life simulators on the
                    market that also packs the rarely seen directional
                    swordplay combat system (due to its high skillcap) but
                    cleverly off-sets the difficulty with omnidirectional
                    blocking and easy-to-use riposte! Despite the combat's
                    complexity, the devs smartly left an escape-hatch
                    called Clinching for when players want to 'just win'
                    and move on. Furthermore, the plot makes sense, the
                    dialogue hilarious or immersive, the lore historically
                    accurate (the codex is even educational), and the
                    supporting characters memorable while not needlessly
                    complicated nor flat. Its only shortcomings are
                    relatively minor or are commonly seen in other games
                    on the market; the cumbersome UI (especially when
                    cleaning out your inventory), hunger and sleep
                    survival systems being heavily featured but quickly
                    made inconsequential, lacking some QoL polish, and
                    the buggy/inconsistent crime system. Some negative
                    reviews of the game disparage its slow-pace and break
                    from 'meaningful progression' (eg. 'saving the
                    world'), but these are not true drawbacks of the game
                    itself but instead mismatched expectations; labeling
                    the game as an RPG on storepages might have led to
                    more sales for the publisher but no doubt damaged the
                    game's ratings as long-time RPG gamers are used to
                    much faster paced games with more immediate wins
                    coupled with impending world-ending backdrops where
                    realism takes a backseat. Ready yourself for a
                    'simulator' and you will have a wonderful time.
                    With more polish, this would be a 5/5 cultural
                    landmark sporting the unique combination of
                    'realistic singleplayer swordplay historical RPG'.`,
                rating: 4,
                href: "/personal/videogames/kcd1"
            },
            {
                name: "Escape from Duckov",
                description: `Escape from Duckov is a top-down cartoony
                    extraction shooter set in a world where society
                    broke down in the face of an astrological extinction
                    event. This lore sounds bleak but the game is in
                    actuality unexpectedly comical. The plot is there
                    to rationalize all the scavenging and shooting the
                    player's duck will be doing. All enemy ducks are
                    hostile and will attack the player on sight, but
                    these NPC enemy ducks come with a wide variety of
                    behaviors, weapons, and sound queues that keeps
                    combat fresh despite being a singleplayer repetition
                    heavy shooter. Some enemies from different factions
                    will attack each other allowing the player to sneak
                    past or mop up survivors to scratch that iconic
                    extraction shooter itch. The storm weather system
                    adds another layer of challenge as the player looks
                    for specific loot to progress quests eventually
                    escaping from Duckov for good.`,
                imgSrc: "/personal/videogames/escape-from-duckov/escape-from-duckov_artwork.jpg",
                analysis: `A unique experience that is worth the full price of admission.
                    Recommended for every gamer to experience due to its excellence in game design bringing extraction shooting to mainstream attention.
                    It is one of the only PVE extraction shooters on the market that
                    has achieved the holy grail of extraction shooting; incorporating death and failure into gameplay without disruptive grinding, balancing fun and winning, and meaningful progression from successes.
                    Normally this niche genre suffers from 3 drawbacks: 1) the genre is too punishing
                    when you lose (which will happen often), 2) the genre's high stakes self selects
                    for a toxic "sweaty" playerbase that plays to win with no room for fun, experimentation,
                    or variety because anything not streamlined for winning is sabotaging your teammates and yourself,
                    3) the genre has a problem with making winning meaningful especially once you do grind enough to 'git gud'.
                    Extraction shooters exist despite these drawbacks because it scratches an exploitative predatory
                    maschistic itch that other genres can't reach. Escape from Duckov made many design choices to
                    solve these problems. The game is not too punishing when you lose because the player can always
                    recover from a death and lost equipment by directly looting the lost stuff from your grave, grinding new
                    copies of the equipment, or simply crafting or buying (at a largely
                    inconsequential cost) most or all of their equipment back at their base -
                    this way, a death still hurts because you lost the time you spent on the last attempt but doesn't
                    meaninglessly tediously detract you from trying again by forcing you to farm
                    equipment before retrying a boss or a zone again. Games that force players to
                    grind because of a mistake artificially extends the playthrough but doesn't add enjoyment to the experience.
                    The game is not toxic and lets players try out all the wacky weapons and tactics because
                    the player is not pressured into performing optimally playing against other players who are always optimal.
                    Being a PVE game, the player can complete the game definitely by finishing all
                    the quests so it also avoids the "I finally got gud and murdered all my fellow players, now what?" existential problem for the top level players.
                    To summarize, the losers aren't crippled or forced to grind in an unfun way when losing, players in general aren't forced
                    to play optimally and can play for fun, and winners aren't left with a meaningless existential
                    problem of "now what?" after winning as the game provides a definitive end to the experience.
                    A big part of what makes dying so enjoyable in Escape from Duckov over other extraction shooters is that recovery is relatively easy, you play against NPCs
                    so the difficulty is within your control, the cute art style, everpresent humor, and wackiness of the game dulls the pain of losing in general,
                    and that recovery is not a massive detraction from your freedom to enjoy the game how you want.
                    We may not see another extraction shooter that is as accessible as Escape from Duckov for most players in a while.`,
                rating: 5,
                href: "/personal/videogames/escape-from-duckov"
            }
        ];

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
                    {
                        videoGames.map((game, index) => (
                            <GameReview key={index}
                                name={game.name}
                                description={game.description}
                                imgSrc={game.imgSrc}
                                analysis={game.analysis}
                                rating={game.rating}
                                href={game.href}
                            />
                        ))
                    }
                </section>
            </section>
        </section>
    );
}
